import type { ElementType, ReactNode } from 'react';
import { cx } from './utils';

export function PublicCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
  className,
  href,
}: {
  icon?: ElementType;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  href?: string;
}) {
  const body = (
    <div
      className={cx(
        'group rounded-xl border border-border/40 bg-card/80 p-6 shadow-sm transition-all duration-300',
        'hover:border-primary/30 hover:bg-accent/30',
        className,
      )}
    >
      {(Icon || eyebrow) && (
        <div className="mb-4 flex items-center gap-3">
          {Icon && (
            <div className="rounded-lg border border-primary/20 bg-primary/10 p-2">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          )}
          {eyebrow && (
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
        </div>
      )}

      {title && (
        <h3 className="font-display text-lg font-semibold tracking-tight group-hover:text-primary">
          {title}
        </h3>
      )}

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );

  if (!href) return body;

  return (
    <a href={href} className="block">
      {body}
    </a>
  );
}
