"use client";

import { useActionState } from "react";
import { sendMessage } from "@/app/actions/contact";
import { siteConfig } from "@/data/site-config";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/i18n/locale-provider";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  email: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

type ContactState = {
  success: boolean;
  message: string;
} | null;

export function Contact() {
  const { locale, t } = useLocale();
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    sendMessage,
    null
  );

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <FadeIn direction="left">
          <div>
            <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
              {t.contact.kicker}
            </span>
            <h2
              id="contact-heading"
              className="text-5xl font-bold tracking-tight mb-8"
            >
              {t.contact.heading}
            </h2>
            <p className="text-on-surface-variant text-lg mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="flex items-center gap-4 group"
                  target={social.platform !== "email" ? "_blank" : undefined}
                  rel={
                    social.platform !== "email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-primary/10 transition-colors text-primary">
                    {SOCIAL_ICONS[social.platform]}
                  </div>
                  <span className="font-medium hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/10">
            <form action={formAction} className="space-y-6">
              <input type="hidden" name="locale" value={locale} />

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant ms-1"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full bg-white/5 border border-outline-variant/20 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/30"
                  placeholder={t.contact.placeholders.name}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant ms-1"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full bg-white/5 border border-outline-variant/20 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/30"
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant ms-1"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-outline-variant/20 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant/30 resize-none"
                  placeholder={t.contact.placeholders.message}
                />
              </div>

              {state && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    state.success
                      ? "bg-tertiary/10 text-tertiary"
                      : "bg-red-500/10 text-red-400"
                  }`}
                  role="alert"
                >
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-container transition-colors active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
