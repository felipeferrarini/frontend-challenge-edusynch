import { createHttpClient, getBaseUrl } from '@/lib/http-client';
import { User } from '@prisma/client';

const httpClient = createHttpClient(getBaseUrl());

export type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async (params: SignInParams): Promise<User> => {
  const { data } = await httpClient.post('/api/auth/signin', params);

  return data.user;
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export const signUp = async (params: SignUpParams) => {
  const { data } = await httpClient.post('/api/auth/signup', params);

  return data.user;
};
