"use client";

import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { useLocale } from "@/i18n/locale-provider";

export function Projects() {
  const { t } = useLocale();
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const copyFor = (id: string) => t.projects.items[id];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <FadeIn>
        <div className="mb-16">
          <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest">
            {t.projects.kicker}
          </span>
          <h2
            id="projects-heading"
            className="text-5xl font-bold tracking-tight"
          >
            {t.projects.heading}
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-16">
        {featuredProject && (
          <FadeIn>
            <article className="group relative bg-surface-container-low rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch">
              <div className="p-12 lg:w-1/2 flex flex-col justify-center">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {copyFor(featuredProject.id).title}
                </h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  {copyFor(featuredProject.id).longDescription}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      className="text-primary font-semibold flex items-center gap-2 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.viewProject}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </a>
                  )}
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      className="text-on-surface-variant font-semibold flex items-center gap-2 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.sourceCode}
                    </a>
                  )}
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px] w-full flex flex-col border-outline-variant/10 lg:border-s">
                <div className="relative flex-1 min-h-[280px] lg:min-h-[400px]">
                  <ProjectGallery
                    images={featuredProject.images}
                    alt={`${copyFor(featuredProject.id).title} — ${copyFor(featuredProject.id).description}`}
                    variant="featured"
                  />
                </div>
              </div>
            </article>
          </FadeIn>
        )}

        <StaggerChildren className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project) => {
            const copy = copyFor(project.id);
            if (!copy) return null;
            return (
              <StaggerItem key={project.id}>
                <article className="group glass rounded-2xl overflow-hidden border border-outline-variant/10 h-full flex flex-col">
                  <div className="relative w-full">
                    <ProjectGallery
                      images={project.images}
                      alt={`${copy.title} — ${copy.description}`}
                      variant="card"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold mb-3">{copy.title}</h4>
                    <p className="text-on-surface-variant mb-6 text-sm flex-1">
                      {copy.description}
                    </p>
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.projects.openProject}: ${copy.title}`}
                        >
                          <svg
                            className="w-5 h-5 text-on-surface-variant hover:text-primary transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
