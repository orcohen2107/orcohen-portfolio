"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n/locale-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { siteConfig } from "@/data/site-config";

const NAV_HREFS = [
  "#about",
  "#projects",
  "#experience",
  "#contact",
] as const;

export function Navbar() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const labels = [
    t.nav.about,
    t.nav.projects,
    t.nav.experience,
    t.nav.contact,
  ] as const;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    NAV_HREFS.forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg"
      >
        {t.skipToContent}
      </a>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
        aria-label={t.nav.main}
      >
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto gap-4">
          <a
            href="#page-top"
            className="text-xl font-bold tracking-tighter text-on-surface shrink-0"
          >
            Or Cohen
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_HREFS.map((href, i) => (
              <a
                key={href}
                href={href}
                className={`transition-colors text-sm lg:text-base ${
                  activeSection === href
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {labels[i]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                className="hidden md:inline-flex px-4 lg:px-5 py-2 rounded-lg border border-outline-variant/20 text-sm font-medium font-mono uppercase tracking-wider hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
              >
                {t.nav.resume}
              </a>
            ) : null}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col items-center justify-center h-full gap-8 px-6"
              aria-label={t.nav.mobile}
            >
              {NAV_HREFS.map((href, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-on-surface hover:text-primary transition-colors"
                >
                  {labels[i]}
                </motion.a>
              ))}
              {siteConfig.resumeUrl ? (
                <motion.a
                  href={siteConfig.resumeUrl}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_HREFS.length * 0.1 }}
                  className="px-8 py-3 rounded-xl border border-outline-variant/20 font-mono uppercase tracking-wider text-sm"
                >
                  {t.nav.resume}
                </motion.a>
              ) : null}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
