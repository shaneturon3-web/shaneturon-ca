'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_LOCALE,
  getLanguage,
  getLanguageRuntime,
  resolveLocale,
  setStoredLocale,
  type SupportedLocale,
} from './runtime';
import type { EnglishLanguage } from './en';

type LanguageContextValue = {
  locale: SupportedLocale;
  language: EnglishLanguage;
  requestedLocale: string | null;
  usedFallback: boolean;
  setLocale: (value: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(DEFAULT_LOCALE);
  const [requestedLocale, setRequestedLocale] = useState<string | null>(null);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const runtime = getLanguageRuntime();

    setLocaleState(runtime.locale);
    setRequestedLocale(runtime.requestedLocale);
    setUsedFallback(runtime.usedFallback);

    document.documentElement.lang = runtime.locale;
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const language = getLanguage(locale);

    return {
      locale,
      language,
      requestedLocale,
      usedFallback,
      setLocale(value: string) {
        const nextLocale = setStoredLocale(value);
        setLocaleState(nextLocale);
        setRequestedLocale(value);
        setUsedFallback(resolveLocale(value) !== nextLocale);
        document.documentElement.lang = nextLocale;
      },
    };
  }, [locale, requestedLocale, usedFallback]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      locale: DEFAULT_LOCALE,
      language: getLanguage(DEFAULT_LOCALE),
      requestedLocale: DEFAULT_LOCALE,
      usedFallback: false,
      setLocale: () => {},
    };
  }

  return context;
}
