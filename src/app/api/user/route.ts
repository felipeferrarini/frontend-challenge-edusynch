import { prismaClient } from '@/lib/prisma-client';
import { responseError } from '@/utils/api-utils';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStorage = cookies();

  const token = cookieStorage.get('token');

  if (!token) {
    return responseError('Unauthorized', 401);
  }

  const user = await prismaClient.user.findUnique({
    where: {
      id: JSON.parse(token.value).id
    }
  });

  return NextResponse.json({ user });
}
