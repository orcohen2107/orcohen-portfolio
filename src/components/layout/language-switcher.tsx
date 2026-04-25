"use client";

import { locales } from "@/i18n/config";
import { useLocale } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-outline-variant/20 p-1 bg-surface-container-low/50"
      role="group"
      aria-label={t.language.label}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "px-3 py-1.5 rounded-md text-xs font-medium transition-colors min-w-[3rem]",
            locale === code
              ? "bg-primary/20 text-primary"
              : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
          )}
          aria-pressed={locale === code}
        >
          {code === "he" ? t.language.he : t.language.en}
        </button>
      ))}
    </div>
  );
}
