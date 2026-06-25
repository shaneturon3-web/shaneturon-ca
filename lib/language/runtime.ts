import { en, type EnglishLanguage } from './en';
import { es } from './es';

export const DEFAULT_LOCALE = 'en' as const;

export const SUPPORTED_LOCALES = ['en', 'es'] as const;

export const LANGUAGE_STORAGE_KEY = 'shaneturon.locale';

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

type LanguageDictionary = EnglishLanguage;

const dictionaries: Record<SupportedLocale, LanguageDictionary> = {
  en,
  es,
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

function hasWindow() {
  return typeof window !== 'undefined';
}

function readLocaleParam(params: URLSearchParams): string | null {
  return params.get('lang') || params.get('locale');
}

function readLocaleFromQuery(): string | null {
  if (!hasWindow()) {
    return null;
  }

  return readLocaleParam(new URLSearchParams(window.location.search));
}

function readLocaleFromStorage(): string | null {
  if (!hasWindow()) {
    return null;
  }

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function readLocaleFromBrowser(): string | null {
  if (!hasWindow()) {
    return null;
  }

  return window.navigator.language || window.navigator.languages?.[0] || null;
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
  return (
    normalizeLocale(value) ??
    normalizeLocale(readLocaleFromQuery()) ??
    normalizeLocale(readLocaleFromStorage()) ??
    normalizeLocale(readLocaleFromBrowser()) ??
    DEFAULT_LOCALE
  );
}

export function getLanguage(value?: unknown): LanguageDictionary {
  const locale = resolveLocale(value);

  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function setStoredLocale(value: unknown): SupportedLocale {
  const locale = resolveLocale(value);

  if (hasWindow()) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    } catch {
      // Storage is optional.
    }
  }

  return locale;
}

export function getLanguageRuntime(value?: unknown) {
  const requestedLocale =
    typeof value === 'string'
      ? value
      : readLocaleFromQuery() ?? readLocaleFromStorage() ?? readLocaleFromBrowser();

  const locale = resolveLocale(value);

  return {
    locale,
    requestedLocale,
    defaultLocale: DEFAULT_LOCALE,
    supportedLocales: [...SUPPORTED_LOCALES],
    usedFallback: requestedLocale ? normalizeLocale(requestedLocale) === null : false,
  };
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
