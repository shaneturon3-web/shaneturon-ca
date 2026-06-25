import type { ReactNode } from 'react';
import { cx } from './utils';

export function PublicCtaBand({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-10',
        className,
      )}
    >
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
      {action && <div className="mt-7 flex justify-center">{action}</div>}
    </div>
  );
}
