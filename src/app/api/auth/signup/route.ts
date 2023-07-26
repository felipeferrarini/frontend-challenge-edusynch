import { prismaClient } from '@/lib/prisma-client';
import { responseError } from '@/utils/api-utils';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  const existingUser = await prismaClient.user.findUnique({
    where: {
      email
    }
  });

  if (existingUser) {
    return responseError('Email already exists', 400);
  }

  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password // in a real app, we would hash this
    }
  });

  const cookieStorage = cookies();
  cookieStorage.set('token', JSON.stringify(user));

  return NextResponse.json({ user });
}
