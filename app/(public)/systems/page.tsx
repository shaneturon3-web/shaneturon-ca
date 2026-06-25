import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { getLanguage } from '@/lib/language';
import { SystemsClient } from './systems-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.systems.metadata.title,
  description: language.pages.systems.metadata.description,
};

export default async function SystemsPage() {
  let systems: any[] = [];
  if (!isPublicDbDisabled()) {
    try {
      systems = await prisma.system.findMany({
        where: { isPublished: true },
        orderBy: { sortOrder: 'asc' },
      }) ?? [];
    } catch { systems = []; }
  }
  return <SystemsClient systems={systems} />;
}
