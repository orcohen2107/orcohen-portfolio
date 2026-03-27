"use client";

import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { useLocale } from "@/i18n/locale-provider";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section aria-labelledby="testimonials-heading">
      <FadeIn>
        <div className="mb-16">
          <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
            {t.testimonials.kicker}
          </span>
          <h2
            id="testimonials-heading"
            className="text-5xl font-bold tracking-tight"
          >
            {t.testimonials.heading}
          </h2>
        </div>
      </FadeIn>

      <StaggerChildren className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => {
          const copy = t.testimonials.items[item.id];
          if (!copy) return null;

          return (
            <StaggerItem key={item.id}>
              <blockquote className="glass p-8 rounded-2xl relative flex flex-col h-full">
                <svg
                  className="absolute top-4 end-8 w-12 h-12 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-on-surface-variant italic mb-8 relative z-10">
                  &ldquo;{copy.text}&rdquo;
                </p>
                <footer className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
                    {item.initials}
                  </div>
                  <div>
                    <cite className="font-bold text-sm not-italic">
                      {copy.author}
                    </cite>
                    <p className="font-mono text-[10px] text-on-surface-variant">
                      {copy.roleCompany}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
}
