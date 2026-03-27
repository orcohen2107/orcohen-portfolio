export const locales = ["he", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export const LOCALE_STORAGE_KEY = "orcohen-portfolio-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
