import type { ElementType } from 'react';
import { cx } from './utils';

export function PublicEmptyState({
  icon: Icon,
  message,
  className,
}: {
  icon?: ElementType;
  message: string;
  className?: string;
}) {
  return (
    <div className={cx('py-16 text-center text-muted-foreground', className)}>
      {Icon && <Icon className="mx-auto mb-4 h-8 w-8 text-muted-foreground/50" />}
      <p className="text-sm">{message}</p>
    </div>
  );
}
