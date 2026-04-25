"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { useLocale } from "@/i18n/locale-provider";

export function About() {
  const { t } = useLocale();

  const stats = [
    { value: "5+", label: t.about.stats.years },
    { value: "6+", label: t.about.stats.projects },
    { value: "Full-Stack", label: t.about.stats.stack },
    { value: "Ofek 324", label: t.about.stats.unit },
  ] as const;

  return (
    <section
      id="about"
      className="grid md:grid-cols-2 gap-16 items-center"
      aria-labelledby="about-heading"
    >
      <FadeIn direction="left">
        <div className="relative group">
          <div
            className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition duration-500"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl w-full aspect-square bg-surface-container-high overflow-hidden shadow-2xl">
            <Image
              src="/images/profile.png"
              alt={t.about.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -start-6 glass border border-outline-variant/20 rounded-2xl px-4 py-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white/95 p-1">
                <Image
                  src="/images/unit/ofek-324-logo-v2.png"
                  alt="סמל אופק 324"
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {t.about.stats.unit}
                </p>
                <p className="text-sm font-semibold text-on-surface">
                  Ofek 324
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div>
        <FadeIn direction="right">
          <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
            {t.about.kicker}
          </span>
          <h2
            id="about-heading"
            className="text-5xl font-bold tracking-tight mb-8"
          >
            {t.about.heading}
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 gap-4 mt-12">
          {stats.map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="glass p-6 rounded-xl">
                <span className="text-3xl font-bold text-primary block mb-1">
                  {value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
