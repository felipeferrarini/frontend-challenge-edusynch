import { IUser } from '@/interfaces/user';
import { createHttpClient, getBaseUrl } from '@/lib/http-client';

const httpClient = createHttpClient(getBaseUrl());

export type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async (params: SignInParams): Promise<IUser> => {
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

export const signUp = async (params: SignUpParams): Promise<IUser> => {
  const { data } = await httpClient.post('/api/auth/signup', params);

  return data.user;
};

export const signOut = async (): Promise<boolean> => {
  const { data } = await httpClient.get('/api/auth/logout');

  return data.success;
};
