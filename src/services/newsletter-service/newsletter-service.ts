import { createHttpClient, getBaseUrl } from '@/lib/http-client';

const httpClient = createHttpClient(getBaseUrl());

export const subscribeNewsletter = async (email: string) => {
  const { data } = await httpClient.post('/api/newsletter', { email });

  return data.success;
};
