import { User } from '@prisma/client';
import { cookies } from 'next/headers';

export const responseError = (message: string, status: number) => {
  return new Response(message, {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getUserFromCookie = (): User | null => {
  const cookieStorage = cookies();

  const token = cookieStorage.get('token')?.value;

  if (!token) {
    return null;
  }

  const user = JSON.parse(token);
  return user;
};
