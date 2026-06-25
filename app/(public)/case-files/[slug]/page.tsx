import { prisma } from '@/lib/prisma';
import { CaseFileDetailClient } from './case-file-detail-client';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CaseFileDetailPage({ params }: { params: { slug: string } }) {
  let caseFile: any = null;
  try {
    caseFile = await prisma.caseFile.findFirst({
      where: {
        OR: [{ slug: params?.slug }, { id: params?.slug }],
        isPublished: true,
      },
    });
  } catch { caseFile = null; }

  if (!caseFile) return notFound();

  return <CaseFileDetailClient caseFile={caseFile} />;
}
