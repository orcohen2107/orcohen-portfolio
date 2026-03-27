"use client";

import { skills, skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { useLocale } from "@/i18n/locale-provider";

const ICONS: Record<string, React.ReactNode> = {
  web: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cloud: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  terminal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

const CATEGORY_LABEL_KEY = {
  frontend: "frontend",
  backend: "backend",
  devops: "devops",
  tools: "tools",
} as const;

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
              {t.skills.kicker}
            </span>
            <h2
              id="skills-heading"
              className="text-5xl font-bold tracking-tight"
            >
              {t.skills.heading}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm">{t.skills.subtitle}</p>
        </div>
      </FadeIn>

      <StaggerChildren className="grid md:grid-cols-4 gap-6">
        {skillCategories.map((cat) => {
          const labelKey = CATEGORY_LABEL_KEY[cat.key as keyof typeof CATEGORY_LABEL_KEY];
          const categoryLabel =
            t.skills.categories[labelKey as keyof typeof t.skills.categories];

          return (
            <StaggerItem key={cat.key}>
              <div className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-colors group h-full">
                <div
                  className={`w-12 h-12 rounded-xl ${cat.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${cat.colorClass}`}
                >
                  {ICONS[cat.icon]}
                </div>
                <h3 className="text-xl font-bold mb-6">{categoryLabel}</h3>
                <ul className="space-y-3 font-mono text-xs text-on-surface-variant">
                  {skills[cat.key]?.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${cat.dotClass}`}
                        aria-hidden="true"
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
}
