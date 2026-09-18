export {
  DEFAULT_LOCALE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  getLanguage,
  getLanguageArray,
  getLanguageRuntime,
  getLanguageSlot,
  normalizeLocale,
  resolveLocale,
  setStoredLocale,
  type SupportedLocale,
} from './runtime';

export { LanguageProvider, useLanguage } from './language-provider';

export { en, type EnglishLanguage } from './en';
export { es } from './es';
export { fr } from './fr';

export {
  LANGUAGE_MODULE_CONTRACT,
  PORTABLE_LOCALE_ALIASES,
  createLanguageModule,
  resolvePortableLocale,
  type LanguageDictionary,
  type LanguageModule,
  type PortableLocale,
} from './module-contract';
