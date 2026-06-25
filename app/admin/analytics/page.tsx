'use client';

import { useEffect, useState } from 'react';
import { Loader2, BarChart3, Eye, TrendingUp } from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/analytics');
        setData(await res?.json?.());
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight mb-1">Analytics</h1>
      <p className="text-sm text-muted-foreground mb-8">Portfolio engagement metrics.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-card rounded-lg p-5 border border-border/30">
          <Eye className="h-5 w-5 text-primary mb-2" />
          <p className="font-mono text-3xl font-bold">{data?.totalViews ?? 0}</p>
          <p className="text-xs text-muted-foreground">Total page views</p>
        </div>
        <div className="bg-card rounded-lg p-5 border border-border/30">
          <TrendingUp className="h-5 w-5 text-primary mb-2" />
          <p className="font-mono text-3xl font-bold">{data?.last7Days ?? 0}</p>
          <p className="text-xs text-muted-foreground">Views (last 7 days)</p>
        </div>
      </div>

      <h2 className="font-display text-lg font-bold mb-4">Top Pages</h2>
      <div className="bg-card rounded-lg border border-border/30 overflow-hidden">
        {(data?.topPages ?? []).length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">No data yet.</div>
        ) : (
          (data?.topPages ?? []).map((p: any, i: number) => (
            <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-border/20 last:border-0">
              <span className="font-mono text-sm">{p?.page}</span>
              <span className="font-mono text-sm text-muted-foreground">{p?.count} views</span>
            </div>
          ))
        )}
      </div>

      <h2 className="font-display text-lg font-bold mt-8 mb-4">Recent Events</h2>
      <div className="bg-card rounded-lg border border-border/30 overflow-hidden max-h-96 overflow-y-auto">
        {(data?.recentEvents ?? []).length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">No events yet.</div>
        ) : (
          (data?.recentEvents ?? []).map((e: any, i: number) => (
            <div key={i} className="flex items-center justify-between px-4 py-2 border-b border-border/20 last:border-0 text-xs">
              <span className="font-mono text-muted-foreground">{e?.page}</span>
              <span className="font-mono text-muted-foreground/60">
                {e?.createdAt ? new Date(e.createdAt).toLocaleString() : ''}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
