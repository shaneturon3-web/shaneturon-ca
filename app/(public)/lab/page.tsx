import { getLanguage } from '@/lib/language';
import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { LabClient } from './lab-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.lab.metadata.title,
  description: language.pages.lab.metadata.description,
};

export default async function LabPage() {
  let projects: any[] = [];

  if (!isPublicDbDisabled()) {
    try {
      projects = await prisma.labProject.findMany({
        where: { isPublished: true },
        orderBy: { sortOrder: 'asc' },
      }) ?? [];
    } catch { projects = []; }
  }

  return <LabClient projects={projects} />;
}
