export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }
    const submission = await prisma.contactSubmission.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body?.subject ?? null,
        message: body.message,
      },
    });
    return NextResponse.json({ id: submission?.id, message: 'Submission received' });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(submissions ?? []);
  } catch (err: any) {
    return NextResponse.json([], { status: 500 });
  }
}
