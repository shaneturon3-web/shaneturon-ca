'use client';

import Link from 'next/link';
import { Hexagon } from 'lucide-react';

export function PublicFooter() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Hexagon className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-sm tracking-tight">SHANE TURON</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/systems" className="hover:text-foreground transition-colors">Systems</Link>
            <Link href="/case-files" className="hover:text-foreground transition-colors">Case Files</Link>
            <Link href="/now" className="hover:text-foreground transition-colors">Now</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          Operational Systems Architecture
        </div>
      </div>
    </footer>
  );
}
