import { prisma } from '@/lib/prisma';
import { CaseFilesClient } from './case-files-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Case Files — Shane Turon',
  description: 'Structured operational analysis. Problem → Constraints → Analysis → Design → Results → Lessons.',
};

export default async function CaseFilesPage() {
  let caseFiles: any[] = [];
  try {
    caseFiles = await prisma.caseFile.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    }) ?? [];
  } catch { caseFiles = []; }

  return <CaseFilesClient caseFiles={caseFiles} />;
}
