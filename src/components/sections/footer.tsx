"use client";

import { useLocale } from "@/i18n/locale-provider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="w-full border-t border-white/5 bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto py-12 px-6 gap-8">
        <div className="text-sm font-medium text-on-surface-variant/60">
          &copy; {new Date().getFullYear()} Or Cohen
        </div>

        <div className="flex gap-8">
          <a
            href="https://github.com/orcohen2107"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/or-cohen-05aa42236/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary group"
          aria-label={t.footer.backToTop}
        >
          {t.footer.backToTop}
          <svg
            className="w-3 h-3 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
