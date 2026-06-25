export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const cf = await prisma.caseFile.findFirst({
      where: { OR: [{ id: params?.id }, { slug: params?.id }] },
    });
    if (!cf) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(cf);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const cf = await prisma.caseFile.update({ where: { id: params?.id }, data: body });
    return NextResponse.json(cf);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    await prisma.caseFile.delete({ where: { id: params?.id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
