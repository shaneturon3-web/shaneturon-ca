'use client';

import { SUPPORTED_LOCALES, useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';

const localeLabels: Record<string, string> = {
  en: 'EN',
  es: 'ES',
};

export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn('inline-flex items-center gap-1 rounded-md border border-border/50 bg-background/60 p-1', className)}
      aria-label="Language selector"
    >
      {SUPPORTED_LOCALES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            'px-2 py-1 text-xs font-mono rounded transition-colors',
            locale === item
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
          )}
          aria-pressed={locale === item}
        >
          {localeLabels[item] ?? item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
