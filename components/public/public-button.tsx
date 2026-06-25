import type { ReactNode } from 'react';
import Link from 'next/link';
import { cx } from './utils';

export function PublicButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={cx(
        'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'secondary' && 'border border-border bg-card text-foreground hover:bg-accent',
        variant === 'ghost' && 'text-primary hover:underline',
        className,
      )}
    >
      {children}
    </Link>
  );
}
