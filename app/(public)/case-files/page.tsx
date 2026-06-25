import { getLanguage } from '@/lib/language';
import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { CaseFilesClient } from './case-files-client';

export const dynamic = 'force-dynamic';

const language = getLanguage();

export const metadata = {
  title: language.pages.caseFiles.metadata.title,
  description: language.pages.caseFiles.metadata.description,
};

export default async function CaseFilesPage() {
  let caseFiles: any[] = [];

  if (!isPublicDbDisabled()) {
    try {
      caseFiles = await prisma.caseFile.findMany({
        where: { isPublished: true },
        orderBy: { sortOrder: 'asc' },
      }) ?? [];
    } catch {
      caseFiles = [];
    }
  }

  return <CaseFilesClient caseFiles={caseFiles} />;
}
