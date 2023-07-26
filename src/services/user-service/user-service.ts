import { createHttpClient, getBaseUrl } from '@/lib/http-client';
import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const httpClient = createHttpClient(getBaseUrl());

export const getUser = async (): Promise<User> => {
  const { data } = await httpClient.get('/api/user');

  return data.user;
};

export const useGetUser = () => {
  return useQuery(['user'], getUser);
};
