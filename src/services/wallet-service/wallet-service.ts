import { IWalletInfo } from '@/interfaces/wallet-info';
import { createHttpClient, getBaseUrl } from '@/lib/http-client';
import { useQuery } from '@tanstack/react-query';
import { AddCryptoParams, TransferCryptoParams } from './types';

const httpClient = createHttpClient(getBaseUrl());

export const getWalletBalance = async (): Promise<number> => {
  const { data } = await httpClient.get('/api/wallet/balance');

  return data.balance;
};

export const useGetWalletBalance = () => {
  return useQuery(['walletBalance'], getWalletBalance);
};

export const addCryptoToWallet = async (
  params: AddCryptoParams
): Promise<boolean> => {
  const { data } = await httpClient.post('/api/wallet', params);

  return data.success;
};

export const getWallet = async (): Promise<IWalletInfo[]> => {
  const { data } = await httpClient.get<IWalletInfo[]>('/api/wallet');

  return data;
};

export const useGetWallet = () => {
  return useQuery(['getWallet'], getWallet);
};

export const transferCrypto = async (
  params: TransferCryptoParams
): Promise<boolean> => {
  const { data } = await httpClient.post('/api/wallet/transfer', params);

  return data.success;
};
