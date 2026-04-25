"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/i18n/locale-provider";

export function Hero() {
  const { t } = useLocale();

  return (
    <header className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden hero-gradient px-6">
      <div className="text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-secondary mb-6 block"
        >
          {t.hero.kicker}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 text-gradient"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-on-surface-variant/80 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a
            href="#projects"
            className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03] transition-all active:scale-95 duration-200"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-outline-variant/30 text-on-surface-variant font-medium rounded-xl hover:border-primary/50 hover:text-on-surface transition-all active:scale-95 duration-200"
          >
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 1.2, duration: 2.4, times: [0, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-12"
        aria-hidden="true"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
          className="w-6 h-6 text-primary/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.div>

      <div
        className="absolute top-1/4 -start-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -end-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />
    </header>
  );
}
