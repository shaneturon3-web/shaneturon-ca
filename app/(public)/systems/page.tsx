import { prisma } from '@/lib/prisma';
import { SystemsClient } from './systems-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Systems — Shane Turon',
  description: 'Active operational systems and infrastructure. PsyNova, Control Tower, Knowledge Systems, AI Orchestration Stack.',
};

export default async function SystemsPage() {
  let systems: any[] = [];
  try {
    systems = await prisma.system.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    }) ?? [];
  } catch { systems = []; }

  return <SystemsClient systems={systems} />;
}
