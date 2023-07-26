import { IWalletInfo } from '@/interfaces/wallet-info';
import { createHttpClient, getBaseUrl } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../coin-service';

const httpClient = createHttpClient(getBaseUrl());

export const getWalletBalance = async (): Promise<number> => {
  const { data } = await httpClient.get('/api/wallet/balance');

  return data.balance;
};

export const useGetWalletBalance = () => {
  return useQuery(['walletBalance'], getWalletBalance);
};

export type AddCryptoParams = {
  cryptoId: string;
  quantity: number;
};

export const addCryptoToWallet = async (
  params: AddCryptoParams
): Promise<boolean> => {
  const { data } = await httpClient.post('/api/wallet', params);

  return data.success;
};

export const getWallet = async (): Promise<IWalletInfo[]> => {
  const { data } = await httpClient.get<
    Array<{
      cryptoId: string;
      quantity: number;
    }>
  >('/api/wallet');

  const cryptoIds = data.map(crypto => crypto.cryptoId);

  const criptoInfo = await getCoins(0, cryptoIds.length, cryptoIds);

  const walletInfos = data.map(crypto => {
    const coinInfo = criptoInfo.find(coin => coin.id === crypto.cryptoId);

    if (!coinInfo) {
      return null;
    }

    return {
      ...coinInfo,
      quantity: crypto.quantity,
      totalPrice: crypto.quantity * (coinInfo?.currentPrice || 0)
    };
  });

  return walletInfos.filter(Boolean) as IWalletInfo[];
};

export const useGetWallet = () => {
  return useQuery(['getWallet'], getWallet);
};
