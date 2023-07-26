import { prismaClient } from '@/lib/prisma-client';
import {
  TransferCryptoParams,
  TransferCryptoType
} from '@/services/wallet-service';
import { getUserFromCookie, responseError } from '@/utils/api-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { cryptoId, quantity, type } =
    (await request.json()) as TransferCryptoParams;

  const user = getUserFromCookie();

  if (!user?.id) {
    return responseError('You must be logged in to transfer crypto', 401);
  }

  const cryptoWallet = await prismaClient.cryptoWallet.findFirst({
    where: {
      ownerId: user.id,
      cryptoId
    }
  });

  if (!cryptoWallet) {
    return responseError('You do not have this crypto in your wallet', 400);
  }

  if (
    type === TransferCryptoType.TransferOut &&
    cryptoWallet.quantity < quantity
  ) {
    return responseError('You do not have enough crypto to transfer', 400);
  }

  const mappedQuantity =
    type === TransferCryptoType.TransferOut ? -quantity : quantity;
  const newQuantity = cryptoWallet.quantity + mappedQuantity;

  if (newQuantity === 0) {
    await prismaClient.cryptoWallet.delete({
      where: {
        id: cryptoWallet.id
      }
    });

    return NextResponse.json({ success: true });
  }

  await prismaClient.cryptoWallet.update({
    where: {
      id: cryptoWallet.id
    },
    data: {
      quantity: newQuantity
    }
  });

  return NextResponse.json({ success: true });
}
