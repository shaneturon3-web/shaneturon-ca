import { prisma } from '@/lib/prisma';
import { LabClient } from './lab-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Lab — Shane Turon',
  description: 'Experimental work, prototypes, and technical explorations.',
};

export default async function LabPage() {
  let projects: any[] = [];
  try {
    projects = await prisma.labProject.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    }) ?? [];
  } catch { projects = []; }

  return <LabClient projects={projects} />;
}
