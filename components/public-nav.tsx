'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/language';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSelector } from '@/components/language-selector';

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return false;

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const { language } = useLanguage();
  const navLinks = language.nav.links;
  const contactLink = language.nav.contact;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
              <Hexagon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
              {language.brand.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/35 bg-card/35 px-1.5 py-1 backdrop-blur">
              {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    className={cn(
                      'rounded-full px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-background/70 hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <LanguageSelector className="ml-1" />
            <Link
              href={contactLink.href}
              prefetch={false}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/10"
            >
              {contactLink.label}
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-border/40 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label={language.nav.menuToggle}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <nav className="space-y-1 px-4 py-4">
              {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-full px-3 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              <Link
                href={contactLink.href}
                prefetch={false}
                onClick={() => setMobileOpen(false)}
                className="block rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-mono uppercase tracking-[0.14em] text-primary"
              >
                {contactLink.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
