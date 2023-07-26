import { prismaClient } from '@/lib/prisma-client';
import { getCoins } from '@/services/coin-service';
import { getUserFromCookie } from '@/utils/api-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = getUserFromCookie();

  const cryptoWallets = await prismaClient.cryptoWallet.findMany({
    where: {
      ownerId: user?.id
    }
  });

  const cryptoIds = cryptoWallets.map(wallet => wallet.cryptoId);
  const criptoCoins = await getCoins(0, cryptoIds.length, cryptoIds);

  const balance = cryptoWallets.reduce((acc, wallet) => {
    const coin = criptoCoins.find(coin => coin.id === wallet.cryptoId);

    if (!coin) {
      return acc;
    }

    return acc + coin.currentPrice * wallet.quantity;
  }, 0);

  return NextResponse.json({ balance });
}
