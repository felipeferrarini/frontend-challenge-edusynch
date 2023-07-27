import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStorage = cookies();

  cookieStorage.delete('token');

  return NextResponse.json({ success: true });
}
