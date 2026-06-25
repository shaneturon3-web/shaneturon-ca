import { cx } from './utils';

export function PublicStatusPill({
  children,
  tone = 'primary',
  className,
}: {
  children: string;
  tone?: 'primary' | 'muted' | 'warning';
  className?: string;
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-mono uppercase tracking-[0.16em]',
        tone === 'primary' && 'border-primary/25 bg-primary/10 text-primary',
        tone === 'muted' && 'border-border/50 bg-card text-muted-foreground',
        tone === 'warning' && 'border-yellow-400/25 bg-yellow-400/10 text-yellow-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
