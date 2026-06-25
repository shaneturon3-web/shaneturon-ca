import type { ReactNode } from 'react';
import { cx } from './utils';

export function PublicSectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cx(
        'mb-10 flex flex-col gap-4 sm:mb-12',
        Boolean(action) && align === 'left' && 'sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.24em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className={cx(
            'mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          )}>
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
