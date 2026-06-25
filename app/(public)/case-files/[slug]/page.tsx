import { prisma } from '@/lib/prisma';
import { isPublicDbDisabled } from '@/lib/public-data-gate';
import { CaseFileDetailClient } from './case-file-detail-client';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CaseFileDetailPage({ params }: { params: { slug: string } }) {
  let caseFile: any = null;

  if (!isPublicDbDisabled()) {
    try {
      caseFile = await prisma.caseFile.findFirst({
        where: {
          OR: [{ slug: params?.slug }, { id: params?.slug }],
          isPublished: true,
        },
      });
    } catch {
      caseFile = null;
    }
  }

  if (!caseFile) return notFound();

  return <CaseFileDetailClient caseFile={caseFile} />;
}
