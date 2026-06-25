export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request?.url ?? 'http://localhost');
    const all = searchParams?.get('all') === 'true';

    const session = await getServerSession(authOptions);
    const whereClause = (all && session) ? {} : { isPublished: true };

    const caseFiles = await prisma.caseFile.findMany({
      where: whereClause,
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(caseFiles ?? []);
  } catch (err: any) {
    console.error('CaseFiles fetch error:', err);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await request.json();
    const caseFile = await prisma.caseFile.create({ data: body });
    return NextResponse.json(caseFile);
  } catch (err: any) {
    console.error('CaseFile create error:', err);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
