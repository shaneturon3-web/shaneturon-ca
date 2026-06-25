'use client';

import { useEffect, useState } from 'react';
import { Loader2, Mail, MessageSquare } from 'lucide-react';

export default function AdminContactsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/contact');
        setSubmissions(await res?.json?.() ?? []);
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight mb-1">Contact Submissions</h1>
      <p className="text-sm text-muted-foreground mb-8">Engagement inquiries received.</p>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      ) : (submissions?.length ?? 0) === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <MessageSquare className="h-8 w-8 mx-auto mb-4 text-muted-foreground/50" />
          <p>No submissions yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {(submissions ?? []).map((s: any) => (
            <div key={s?.id} className="bg-card rounded-lg p-5 border border-border/30">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-sm">{s?.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    {s?.email}
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {s?.createdAt ? new Date(s.createdAt).toLocaleDateString() : ''}
                </span>
              </div>
              {s?.subject && <p className="text-xs font-mono text-primary mb-2">{s.subject}</p>}
              <p className="text-sm text-muted-foreground leading-relaxed">{s?.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
