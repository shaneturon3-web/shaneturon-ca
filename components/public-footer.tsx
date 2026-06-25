'use client';

import Link from 'next/link';
import { Hexagon } from 'lucide-react';
import { getLanguage } from '@/lib/language';

export function PublicFooter() {
  const language = getLanguage();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Hexagon className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-sm tracking-tight">{language.brand.name}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {language.footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          {language.brand.footerLine}
        </div>
      </div>
    </footer>
  );
}
