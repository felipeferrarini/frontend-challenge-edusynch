import axios from 'axios';

export const createHttpClient = (baseUrl: string) => {
  const client = axios.create({
    baseURL: baseUrl
  });

  return client;
};
