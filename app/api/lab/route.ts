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
    const projects = await prisma.labProject.findMany({
      where: whereClause,
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(projects ?? []);
  } catch (err: any) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await request.json();
    const project = await prisma.labProject.create({ data: body });
    return NextResponse.json(project);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
