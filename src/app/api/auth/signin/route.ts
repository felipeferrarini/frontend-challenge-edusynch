import { prismaClient } from '@/lib/prisma-client';
import { responseError } from '@/utils/api-utils';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await prismaClient.user.findUnique({
    where: {
      email
    }
  });

  const error = responseError('Invalid email or password', 401);

  if (!user) {
    return error;
  }

  if (user.password !== password) {
    return error;
  }

  const { password: _, ...userWithoutPassword } = user;

  const cookieStorage = cookies();
  cookieStorage.set('token', JSON.stringify(userWithoutPassword));

  return NextResponse.json({ user: userWithoutPassword });
}
