import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { HomepageClient } from './homepage-client';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let systems: any[] = [];
  let caseFiles: any[] = [];
  let nowItems: any[] = [];

  if (!isPublicDbDisabled()) {
    try {
      systems = await prisma.system.findMany({
        where: { isPublished: true },
        orderBy: { sortOrder: 'asc' },
      }) ?? [];
    } catch { systems = []; }

    try {
      caseFiles = await prisma.caseFile.findMany({
        where: { isPublished: true },
        orderBy: { sortOrder: 'asc' },
        take: 3,
      }) ?? [];
    } catch { caseFiles = []; }

    try {
      nowItems = await prisma.nowItem.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
        take: 4,
      }) ?? [];
    } catch { nowItems = []; }
  }
  return <HomepageClient systems={systems} caseFiles={caseFiles} nowItems={nowItems} />;
}
