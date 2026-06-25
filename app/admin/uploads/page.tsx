'use client';

import { useState, useRef } from 'react';
import { Upload, Loader2, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminUploadsPage() {
  const [uploading, setUploading] = useState(false);
  const [uploads, setUploads] = useState<any[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Get presigned URL
      const presignRes = await fetch('/api/upload/presigned', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type, isPublic: false }),
      });
      const { uploadUrl, cloud_storage_path } = await presignRes?.json?.() ?? {};

      if (!uploadUrl) throw new Error('No upload URL');

      // Check if content-disposition is in signed headers
      const urlObj = new URL(uploadUrl);
      const signedHeaders = urlObj?.searchParams?.get?.('X-Amz-SignedHeaders') ?? '';
      const headers: Record<string, string> = { 'Content-Type': file.type };
      if (signedHeaders?.includes?.('content-disposition')) {
        headers['Content-Disposition'] = 'attachment';
      }

      // Upload to S3
      await fetch(uploadUrl, { method: 'PUT', headers, body: file });

      // Record upload
      await fetch('/api/upload/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          cloudStoragePath: cloud_storage_path,
          isPublic: false,
        }),
      });

      setUploads((prev: any[]) => [...(prev ?? []), { name: file.name, size: file.size }]);
      toast?.success?.('File uploaded successfully');
    } catch (err: any) {
      console.error('Upload error:', err);
      toast?.error?.('Upload failed');
    }
    setUploading(false);
    if (fileRef?.current) fileRef.current.value = '';
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight mb-1">File Uploads</h1>
      <p className="text-sm text-muted-foreground mb-8">Upload and manage files for content and case studies.</p>

      <div
        className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => fileRef?.current?.click?.()}
      >
        <input ref={fileRef} type="file" className="hidden" onChange={handleUpload} />
        {uploading ? (
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
        ) : (
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
        )}
        <p className="text-sm text-muted-foreground">
          {uploading ? 'Uploading...' : 'Click to upload a file'}
        </p>
      </div>

      {(uploads?.length ?? 0) > 0 && (
        <div className="mt-6 space-y-2">
          {uploads.map((u: any, i: number) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-md border border-border/30">
              <CheckCircle className="h-4 w-4 text-primary" />
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{u?.name}</span>
              <span className="text-xs text-muted-foreground ml-auto">{((u?.size ?? 0) / 1024).toFixed(1)} KB</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
