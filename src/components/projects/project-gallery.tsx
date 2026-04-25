"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useLocale } from "@/i18n/locale-provider";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
  variant: "featured" | "card";
  imageFit?: "cover" | "contain";
};

export function ProjectGallery({
  images,
  alt,
  variant,
  imageFit = "cover",
}: ProjectGalleryProps) {
  const { t } = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const g = t.projects.gallery;

  const slides = images;

  const updateIndexFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || slides.length <= 1) return;
    const w = el.clientWidth || 1;
    const idx = Math.round(el.scrollLeft / w);
    setActiveIndex(Math.min(Math.max(0, idx), slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateIndexFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateIndexFromScroll);
  }, [updateIndexFromScroll]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.min(Math.max(0, index), slides.length - 1);
      const w = el.clientWidth;
      el.scrollTo({ left: clamped * w, behavior: "smooth" });
      setActiveIndex(clamped);
    },
    [slides.length]
  );

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (slides.length <= 1) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (document.documentElement.dir === "rtl") {
        goNext();
      } else {
        goPrev();
      }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (document.documentElement.dir === "rtl") {
        goPrev();
      } else {
        goNext();
      }
    }
  };

  const showChrome = slides.length > 1;

  if (slides.length === 0) {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant text-sm aspect-video">
        —
      </div>
    );
  }

  const outerClassName =
    variant === "featured"
      ? "relative h-[min(55vh,520px)] min-h-[300px] w-full overflow-hidden rounded-xl sm:min-h-[360px]"
      : "relative aspect-video w-full overflow-hidden rounded-xl";

  return (
    <div
      className={outerClassName}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      tabIndex={0}
    >
      <div
        ref={scrollerRef}
        dir="ltr"
        className="absolute inset-0 flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-full min-w-full shrink-0 snap-center snap-always"
          >
            <Image
              key={src}
              src={src}
              alt={`${alt} — ${i + 1}`}
              fill
              className={
                imageFit === "contain"
                  ? "object-contain bg-surface object-center"
                  : "object-cover object-top"
              }
              sizes={
                variant === "featured"
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              priority={variant === "featured" && i === 0}
            />
          </div>
        ))}
      </div>

      {showChrome && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-gradient-to-t from-surface/95 to-transparent pb-3 pt-10">
          <div
            className="pointer-events-auto flex items-center gap-2 sm:gap-3 rounded-full bg-surface-container/95 px-2 py-2 backdrop-blur-md border border-outline-variant/20 shadow-lg"
            dir="ltr"
          >
            <button
              type="button"
              onClick={goPrev}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface hover:bg-white/10 transition-colors"
              aria-label={g.prev}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-on-surface-variant/35 hover:bg-on-surface-variant/55"
                  }`}
                  aria-label={`${g.goToSlide} ${i + 1}`}
                  aria-current={i === activeIndex ? true : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface hover:bg-white/10 transition-colors"
              aria-label={g.next}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <span className="hidden sm:inline min-w-[2.75rem] text-center font-mono text-[10px] text-on-surface-variant tabular-nums border-s border-outline-variant/30 ps-2 ms-1">
              {g.counter
                .replace("{current}", String(activeIndex + 1))
                .replace("{total}", String(slides.length))}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
