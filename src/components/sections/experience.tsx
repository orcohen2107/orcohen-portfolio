"use client";

import { experiences } from "@/data/experience";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { useLocale } from "@/i18n/locale-provider";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <FadeIn>
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
            {t.experience.kicker}
          </span>
          <h2
            id="experience-heading"
            className="text-5xl font-bold tracking-tight"
          >
            {t.experience.heading}
          </h2>
        </div>
      </FadeIn>

      <div className="relative">
        <div
          className="absolute start-1/2 -translate-x-1/2 w-px h-full bg-outline-variant/20 hidden md:block"
          aria-hidden="true"
        />

        <StaggerChildren className="space-y-12">
          {experiences.map((exp, index) => {
            const copy = t.experience.items[exp.id];
            if (!copy) return null;

            const isEven = index % 2 === 0;
            const dateRange = exp.endDate
              ? `${exp.startDate} — ${exp.endDate}`
              : `${exp.startDate} — ${t.experience.present}`;

            return (
              <StaggerItem key={exp.id}>
                <div
                  className={`relative flex flex-col md:flex-row items-center gap-8 group ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 hidden md:block ${
                      isEven ? "text-end" : "text-start"
                    }`}
                  >
                    <span className="font-mono text-sm text-secondary">
                      {dateRange}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{copy.role}</h3>
                  </div>

                  <div
                    className="w-12 h-12 rounded-full bg-surface border-4 border-primary z-10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                    </svg>
                  </div>

                  <div
                    className={`flex-1 glass p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-colors ${
                      isEven ? "" : "text-start"
                    }`}
                  >
                    <div className="md:hidden flex justify-between items-center mb-4 gap-4">
                      <span className="font-mono text-sm text-secondary">
                        {dateRange}
                      </span>
                      <h3 className="text-xl font-bold">{copy.role}</h3>
                    </div>
                    <h4 className="text-primary font-bold mb-4">
                      {copy.company}
                    </h4>
                    <p className="text-on-surface-variant text-sm mb-6">
                      {copy.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-surface-container rounded font-mono text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
