import { createHttpClient, getBaseUrl } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';

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
