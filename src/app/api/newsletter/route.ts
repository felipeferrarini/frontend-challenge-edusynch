import { prismaClient } from '@/lib/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const newsletter = await prismaClient.newsletter.findUnique({
    where: {
      email
    }
  });

  if (!newsletter) {
    await prismaClient.newsletter.create({
      data: {
        email
      }
    });
  }

  return NextResponse.json({ success: true });
}
