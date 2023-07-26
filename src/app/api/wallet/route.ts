import { prismaClient } from '@/lib/prisma-client';
import { getUserFromCookie, responseError } from '@/utils/api-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const user = getUserFromCookie();

  if (!user?.id) {
    return responseError(
      'You must be logged in to add crypto to your wallet',
      401
    );
  }

  const { cryptoId, quantity } = await request.json();

  const cryptoWallet = await prismaClient.cryptoWallet.findFirst({
    where: {
      ownerId: user?.id,
      cryptoId
    }
  });

  if (cryptoWallet) {
    await prismaClient.cryptoWallet.update({
      where: {
        id: cryptoWallet.id
      },
      data: {
        quantity: cryptoWallet.quantity + quantity
      }
    });

    return NextResponse.json({ success: true });
  }

  await prismaClient.cryptoWallet.create({
    data: {
      ownerId: user.id,
      cryptoId,
      quantity
    }
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const user = getUserFromCookie();

  if (!user?.id) {
    return responseError(
      'You must be logged in to get your crypt wallet info',
      401
    );
  }

  const cryptoWallet = await prismaClient.cryptoWallet.findMany({
    where: {
      ownerId: user.id
    }
  });

  return NextResponse.json(
    cryptoWallet.map(({ cryptoId, quantity }) => ({
      cryptoId,
      quantity
    }))
  );
}
