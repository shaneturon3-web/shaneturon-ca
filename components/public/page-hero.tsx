import type { ReactNode } from 'react';
import { cx } from './utils';

export function PublicPageHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  actions?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cx('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
      )}

      <h1 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {title}
        {accent && <> <span className="text-primary">{accent}</span></>}
      </h1>

      {description && (
        <p className={cx(
          'mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg',
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
        )}>
          {description}
        </p>
      )}

      {actions && (
        <div className={cx(
          'mt-8 flex flex-col gap-3 sm:flex-row',
          align === 'center' && 'justify-center',
        )}>
          {actions}
        </div>
      )}
    </div>
  );
}
