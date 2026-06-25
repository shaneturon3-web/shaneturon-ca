export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const event = await prisma.analyticsEvent.create({
      data: {
        eventType: body?.eventType ?? 'page_view',
        page: body?.page ?? '/',
        referrer: body?.referrer ?? null,
        userAgent: body?.userAgent ?? null,
        ipHash: null,
        metadata: body?.metadata ? JSON.stringify(body.metadata) : null,
      },
    });
    return NextResponse.json({ id: event?.id });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const totalViews = await prisma.analyticsEvent.count();
    const last7Days = await prisma.analyticsEvent.count({
      where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
    });

    const topPages = await prisma.analyticsEvent.groupBy({
      by: ['page'],
      _count: { page: true },
      orderBy: { _count: { page: 'desc' } },
      take: 10,
    });

    const recentEvents = await prisma.analyticsEvent.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({
      totalViews,
      last7Days,
      topPages: (topPages ?? []).map((p: any) => ({ page: p?.page, count: p?._count?.page ?? 0 })),
      recentEvents: recentEvents ?? [],
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
