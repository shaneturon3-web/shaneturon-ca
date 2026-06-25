'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Hexagon, LayoutDashboard, Layers, BookOpen, FlaskConical,
  Clock, BarChart3, Upload, MessageSquare, LogOut, Menu, X, Globe
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/systems', label: 'Systems', icon: Layers },
  { href: '/admin/case-files', label: 'Case Files', icon: BookOpen },
  { href: '/admin/now', label: 'Now Items', icon: Clock },
  { href: '/admin/lab', label: 'Lab Projects', icon: FlaskConical },
  { href: '/admin/uploads', label: 'Uploads', icon: Upload },
  { href: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
];

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession() || {};
  const pathname = usePathname() ?? '/admin';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-60 bg-card border-r border-border/50 transition-transform duration-200 lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b border-border/30">
            <Hexagon className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-sm tracking-tight">INTELLIGENCE</span>
          </div>

          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {navItems.map((item: any) => {
              const Icon = item?.icon ?? LayoutDashboard;
              const isActive = pathname === item?.href || (item?.href !== '/admin' && pathname?.startsWith?.(item?.href));
              return (
                <Link
                  key={item?.href}
                  href={item?.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                    isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item?.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-3 border-t border-border/30 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
            >
              <Globe className="h-4 w-4" /> Public Site
            </Link>
            <button
              onClick={() => signOut?.({ callbackUrl: '/' })}
              className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors w-full"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-60">
        <header className="sticky top-0 z-30 flex items-center gap-4 h-14 px-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-muted-foreground hover:text-foreground">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1" />
          <span className="text-xs font-mono text-muted-foreground">{session?.user?.email ?? ''}</span>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
