"use client";

import { AArrowUpIcon } from "@/components/ui/a-arrow-up";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
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
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface transition-colors"
          >
            <GithubIcon size={18} className="text-current" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/or-cohen-05aa42236/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface transition-colors"
          >
            <LinkedinIcon size={18} className="text-current" />
            LinkedIn
          </a>
        </div>

        <a
          href="#page-top"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary group"
          aria-label={t.footer.backToTop}
        >
          {t.footer.backToTop}
          <AArrowUpIcon size={18} className="text-primary" />
        </a>
      </div>
    </footer>
  );
}
