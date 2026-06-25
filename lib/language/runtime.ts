import { en, type EnglishLanguage } from './en';

export const DEFAULT_LOCALE = 'en' as const;

export const SUPPORTED_LOCALES = ['en'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

type LanguageDictionary = EnglishLanguage;

const dictionaries: Record<SupportedLocale, LanguageDictionary> = {
  en,
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export function normalizeLocale(value: unknown): SupportedLocale | null {
  if (typeof value !== 'string') {
    return null;
  }

  const normalized = value.trim().toLowerCase().split('-')[0];

  if (isSupportedLocale(normalized)) {
    return normalized;
  }

  return null;
}

export function resolveLocale(value?: unknown): SupportedLocale {
  return normalizeLocale(value) ?? DEFAULT_LOCALE;
}

export function getLanguage(value?: unknown): LanguageDictionary {
  const locale = resolveLocale(value);

  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

function readPath(source: unknown, path: string): unknown {
  if (!path.trim()) {
    return undefined;
  }

  return path.split('.').reduce<unknown>((current, key) => {
    if (
      current &&
      typeof current === 'object' &&
      key in current
    ) {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, source);
}

export function getLanguageSlot(path: string, value?: unknown): string {
  const language = getLanguage(value);
  const direct = readPath(language, path);

  if (typeof direct === 'string') {
    return direct;
  }

  const fallback = readPath(dictionaries[DEFAULT_LOCALE], path);

  if (typeof fallback === 'string') {
    return fallback;
  }

  return '';
}

export function getLanguageArray<T = unknown>(path: string, value?: unknown): T[] {
  const language = getLanguage(value);
  const direct = readPath(language, path);

  if (Array.isArray(direct)) {
    return direct as T[];
  }

  const fallback = readPath(dictionaries[DEFAULT_LOCALE], path);

  if (Array.isArray(fallback)) {
    return fallback as T[];
  }

  return [];
}
