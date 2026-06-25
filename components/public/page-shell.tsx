import type { ReactNode } from 'react';
import { cx } from './utils';

export function PublicPageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx('min-h-screen bg-background text-foreground', className)}>
      {children}
    </div>
  );
}
