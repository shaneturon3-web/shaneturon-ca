import type { ReactNode } from 'react';
import { cx } from './utils';

type PublicSectionTone = 'plain' | 'muted' | 'grid';

export function PublicSection({
  children,
  className,
  container = 'wide',
  tone = 'plain',
}: {
  children: ReactNode;
  className?: string;
  container?: 'narrow' | 'default' | 'wide';
  tone?: PublicSectionTone;
}) {
  return (
    <section
      className={cx(
        'relative px-4 py-20 sm:py-24',
        tone === 'muted' && 'bg-card/25 border-y border-border/30',
        tone === 'grid' && 'grid-pattern border-y border-border/30',
        className,
      )}
    >
      <div
        className={cx(
          'mx-auto',
          container === 'narrow' && 'max-w-3xl',
          container === 'default' && 'max-w-5xl',
          container === 'wide' && 'max-w-6xl',
        )}
      >
        {children}
      </div>
    </section>
  );
}
