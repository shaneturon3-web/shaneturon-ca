export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all');
    const session = all ? await getServerSession(authOptions) : null;
    const whereClause = (all && session) ? {} : { isPublished: true };
    const systems = await prisma.system.findMany({
      where: whereClause,
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(systems ?? []);
  } catch (err: any) {
    console.error('Systems fetch error:', err);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const system = await prisma.system.create({ data: body });
    return NextResponse.json(system);
  } catch (err: any) {
    console.error('System create error:', err);
    return NextResponse.json({ error: 'Failed to create system' }, { status: 500 });
  }
}
