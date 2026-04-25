"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/i18n/locale-provider";

export function Projects() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const copyFor = (id: string) => t.projects.items[id];
  const activeCopy = t.projects.items[activeProject.id];

  const proofLabelFor = (proof: (typeof projects)[number]["proof"]) =>
    proof === "private"
      ? t.projects.privateProof
      : proof === "published"
        ? t.projects.publishedProof
        : t.projects.conceptProof;

  const goToProject = (index: number) => {
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <FadeIn>
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-secondary">
            {t.projects.kicker}
          </span>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 id="projects-heading" className="text-5xl font-bold tracking-tight">
                {t.projects.heading}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
                {t.projects.intro}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => goToProject(activeIndex - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={t.projects.gallery.prev}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goToProject(activeIndex + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={t.projects.gallery.next}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-8">
        <div className="overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-low shadow-2xl shadow-black/20">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="grid lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-outline-variant/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {proofLabelFor(activeProject.proof)}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {activeCopy.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                    {activeCopy.longDescription}
                  </p>

                  <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface px-4 py-4">
                      <dt className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {t.projects.roleLabel}
                      </dt>
                      <dd className="text-sm leading-relaxed">{activeCopy.role}</dd>
                    </div>
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface px-4 py-4">
                      <dt className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {t.projects.focusLabel}
                      </dt>
                      <dd className="text-sm leading-relaxed">{activeCopy.focus}</dd>
                    </div>
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface px-4 py-4">
                      <dt className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {t.projects.proofLabel}
                      </dt>
                      <dd className="text-sm leading-relaxed">{activeCopy.proofNote}</dd>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                      {t.projects.highlightsLabel}
                    </p>
                    <ul className="space-y-3 text-sm text-on-surface-variant">
                      {activeCopy.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {activeProject.liveUrl ? (
                      <a
                        href={activeProject.liveUrl}
                        className="font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.viewProject}
                      </a>
                    ) : null}
                    {activeProject.githubUrl ? (
                      <a
                        href={activeProject.githubUrl}
                        className="font-semibold text-on-surface-variant transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.sourceCode}
                      </a>
                    ) : null}
                    {!activeProject.liveUrl && !activeProject.githubUrl ? (
                      <span className="text-sm text-on-surface-variant">
                        {t.projects.requestWalkthrough}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="border-t border-outline-variant/10 lg:border-s lg:border-t-0">
                <div className="relative h-full min-h-[320px] lg:min-h-[720px]">
                  <ProjectGallery
                    images={activeProject.images}
                    alt={`${activeCopy.title} — ${activeCopy.description}`}
                    variant="featured"
                  />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => {
            const copy = copyFor(project.id);

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                className={`min-w-[190px] rounded-2xl border px-4 py-4 text-start transition-all ${
                  activeIndex === index
                    ? "border-primary/40 bg-primary/10"
                    : "border-outline-variant/10 bg-surface-container-low hover:border-outline-variant/30"
                }`}
                aria-pressed={activeIndex === index}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {proofLabelFor(project.proof)}
                </p>
                <p className="mt-2 text-base font-semibold text-on-surface">
                  {copy.title}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-on-surface-variant">
                  {copy.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
