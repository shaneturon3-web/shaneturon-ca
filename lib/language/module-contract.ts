import type { EnglishLanguage } from './en';
import type { SupportedLocale } from './runtime';

/**
 * Portable language-module contract.
 *
 * The website owns its public dictionary shape. A consumer such as PsyNova
 * or Shelf may adapt its own seedbank into this contract without importing
 * the website runtime or changing its core.
 */
export const LANGUAGE_MODULE_CONTRACT = 'shaneturon.language.v1' as const;

export type LanguageDictionary = EnglishLanguage;

export type PortableLocale = 'en' | 'fr-CA' | 'es-MX';

export type LanguageModule = {
  contract: typeof LANGUAGE_MODULE_CONTRACT;
  defaultLocale: SupportedLocale;
  supportedLocales: readonly SupportedLocale[];
  getDictionary: (locale?: unknown) => LanguageDictionary;
  getSlot: (path: string, locale?: unknown) => string;
};

/**
 * Canonical cross-project locale mapping.
 *
 * Website locale names stay short and URL-friendly; PsyNova-compatible
 * consumers can use the regional aliases at their boundary.
 */
export const PORTABLE_LOCALE_ALIASES: Readonly<Record<PortableLocale, SupportedLocale>> = {
  en: 'en',
  'fr-CA': 'fr',
  'es-MX': 'es',
};

