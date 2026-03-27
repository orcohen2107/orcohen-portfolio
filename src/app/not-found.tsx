"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/locale-provider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-8xl font-extrabold text-gradient mb-4">
        {t.notFound.title}
      </h1>
      <p className="text-xl text-on-surface-variant mb-8">{t.notFound.subtitle}</p>
      <Link
        href="/"
        className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 duration-200"
      >
        {t.notFound.home}
      </Link>
    </main>
  );
}
