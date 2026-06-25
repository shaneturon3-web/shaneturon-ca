import { prisma } from '@/lib/prisma';
import { NowClient } from './now-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '/now — Shane Turon',
  description: 'Current focus, recent activity, and operational status.',
};

export default async function NowPage() {
  let items: any[] = [];
  try {
    items = await prisma.nowItem.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    }) ?? [];
  } catch { items = []; }

  return <NowClient items={items} />;
}
