'use client';

import { useEffect, useState } from 'react';
import { BarChart3, Eye, FileText, Layers, Clock, FlaskConical, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function AdminDashboardClient() {
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/analytics');
        if (res?.ok) {
          const data = await res?.json?.();
          setAnalytics(data);
        }
      } catch { /* silent */ }
      setLoading(false);
    };
    load();
  }, []);

  const stats = [
    { label: 'Total Views', value: analytics?.totalViews ?? 0, icon: Eye },
    { label: 'Last 7 Days', value: analytics?.last7Days ?? 0, icon: BarChart3 },
    { label: 'Top Pages', value: analytics?.topPages?.length ?? 0, icon: FileText },
  ];

  const quickLinks = [
    { href: '/admin/systems', label: 'Manage Systems', icon: Layers, desc: 'Edit flagship products' },
    { href: '/admin/case-files', label: 'Manage Case Files', icon: FileText, desc: 'Create and edit case studies' },
    { href: '/admin/now', label: 'Update /now', icon: Clock, desc: 'Current focus items' },
    { href: '/admin/lab', label: 'Lab Projects', icon: FlaskConical, desc: 'Experimental work' },
    { href: '/admin/contacts', label: 'Contact Submissions', icon: MessageSquare, desc: 'Review inquiries' },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold tracking-tight mb-1">Intelligence Dashboard</h1>
      <p className="text-sm text-muted-foreground mb-8">Operational overview and content management.</p>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {stats.map((s: any, i: number) => {
          const Icon = s?.icon ?? BarChart3;
          return (
            <div key={i} className="bg-card rounded-lg p-5 border border-border/30">
              <div className="flex items-center justify-between mb-3">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">{s?.label}</span>
              </div>
              <p className="font-mono text-3xl font-bold text-foreground">
                {loading ? '—' : s?.value ?? 0}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <h2 className="font-display text-lg font-bold mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {quickLinks.map((link: any, i: number) => {
          const Icon = link?.icon ?? Layers;
          return (
            <Link
              key={i}
              href={link?.href}
              className="bg-card rounded-lg p-5 border border-border/30 hover:border-primary/30 hover:bg-accent/20 transition-all group"
            >
              <Icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{link?.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{link?.desc}</p>
            </Link>
          );
        })}
      </div>

      {/* Top Pages */}
      {(analytics?.topPages?.length ?? 0) > 0 && (
        <div>
          <h2 className="font-display text-lg font-bold mb-4">Top Pages</h2>
          <div className="bg-card rounded-lg border border-border/30 overflow-hidden">
            {(analytics?.topPages ?? []).map((p: any, i: number) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-border/20 last:border-0">
                <span className="font-mono text-sm text-foreground">{p?.page ?? '/'}</span>
                <span className="font-mono text-sm text-muted-foreground">{p?.count ?? 0} views</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
