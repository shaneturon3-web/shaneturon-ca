import { getLanguage } from '@/lib/language';
import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { NowClient } from './now-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.now.metadata.title,
  description: language.pages.now.metadata.description,
};

export default async function NowPage() {
  let items: any[] = [];

  if (!isPublicDbDisabled()) {
    try {
      items = await prisma.nowItem.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      }) ?? [];
    } catch { items = []; }
  }

  return <NowClient items={items} />;
}
