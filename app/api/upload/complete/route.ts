export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { fileName, fileType, fileSize, cloudStoragePath, isPublic, category, description } = body ?? {};

    const upload = await prisma.upload.create({
      data: {
        fileName: fileName ?? 'unknown',
        fileType: fileType ?? 'application/octet-stream',
        fileSize: fileSize ?? 0,
        cloudStoragePath: cloudStoragePath ?? '',
        isPublic: isPublic ?? false,
        category: category ?? null,
        description: description ?? null,
      },
    });

    return NextResponse.json(upload);
  } catch (err: any) {
    console.error('Upload complete error:', err);
    return NextResponse.json({ error: 'Failed to save upload' }, { status: 500 });
  }
}
