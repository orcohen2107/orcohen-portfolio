"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = locale === "he" ? "he" : "en";
  html.dir = locale === "he" ? "rtl" : "ltr";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored) && stored !== defaultLocale) {
      setLocaleState(stored);
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    applyDocumentLocale(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale, hasHydrated]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
