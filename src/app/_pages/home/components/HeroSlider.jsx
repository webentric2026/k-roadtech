"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AUTOPLAY_MS, SLIDES } from "@/app/_pages/home/data/slides";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  // Sync with the OS setting (external system)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Highlight the slide's accent phrase inside its title (first match). */
function renderTitle(title, accent) {
  if (!accent) return title;
  const at = title.indexOf(accent);
  if (at === -1) return title;
  return (
    <>
      {title.slice(0, at)}
      <span className="text-[#E74725]">{accent}</span>
      {title.slice(at + accent.length)}
    </>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length;
  const reduceMotion = usePrefersReducedMotion();
  const autoplayOn = !paused && !reduceMotion;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  // Single autoplay timer; resets on manual navigation via `index` dep
  useEffect(() => {
    if (!autoplayOn) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, autoplayOn, total]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured solutions"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
      className="relative w-full overflow-hidden bg-[#0B0B0B] text-white"
    >
      {/* Full-bleed backgrounds */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={`hero-slide absolute inset-0 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
          >
            <Image
              src={s.image.mobileSrc}
              alt={s.image.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover md:invisible"
            />
            <Image
              src={s.image.src}
              alt=""
              aria-hidden="true"
              fill
              priority={i === 0}
              sizes="100vw"
              className="invisible object-cover md:visible"
              style={{ objectPosition: s.image.objectPosition }}
            />
          </div>
        ))}
      </div>
      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55 bg-gradient-to-r from-black/70 via-black/40 to-black/10 max-lg:from-black/80 max-lg:via-black/55 max-lg:to-black/20"
      />

      {/* Overlay content */}
      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1600px] flex-col justify-center px-[clamp(20px,5vw,80px)] pt-28 pb-28 lg:min-h-[100vh] lg:py-16">
        <div className="grid max-w-[760px]">
          {SLIDES.map((s, i) => {
            const active = i === index;
            return (
              <article
                key={s.id}
                aria-hidden={!active}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${s.category}`}
                className={`hero-slide col-start-1 row-start-1 flex flex-col items-start transition-opacity duration-500 ${active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
              >
                {active ? (
                  <div key={index} className="hero-text-in flex flex-col items-start">
                    <h1 className="max-w-[12ch] text-[clamp(2.6rem,5.6vw,5.75rem)] leading-[1.02] font-bold tracking-[-0.02em]">
                      {renderTitle(s.title, s.accent)}
                    </h1>
                    <p className="mt-5 max-w-[470px] text-[16px] leading-7 text-[#CFCFCF]">
                      {s.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={s.primaryCta.href}
                        tabIndex={active ? undefined : -1}
                        className="inline-flex h-[48px] items-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {s.primaryCta.label}
                      </Link>
                      <Link
                        href={s.secondaryCta.href}
                        tabIndex={active ? undefined : -1}
                        className="inline-flex h-[48px] items-center rounded-[3px] border border-white/30 px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
                      >
                        {s.secondaryCta.label}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div aria-hidden="true" className="flex flex-col items-start">
                    <p className="max-w-[12ch] text-[clamp(2.6rem,5.6vw,5.75rem)] leading-[1.02] font-bold">
                      {s.title}
                    </p>
                    <p className="mt-5 max-w-[470px] text-[16px] leading-7">{s.description}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Screen-reader slide status */}
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {total}: {SLIDES[index].category}
        </p>
      </div>

      {/* Prev / next — fixed to the hero's bottom-right on every slide */}
      <div className="absolute right-[clamp(20px,5vw,80px)] bottom-8 flex items-center gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-white/25 text-white transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-white/25 text-white transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Slide lines — right edge, vertically centered */}
      <div className="absolute top-1/2 right-3 flex -translate-y-1/2 flex-col items-end gap-3 xl:right-5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}: ${s.category}`}
            aria-current={i === index}
            className={`h-[3px] cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#E74725] ${i === index
              ? "w-10 bg-[#E74725]"
              : "w-5 bg-white/30 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Autoplay progress — bottom edge */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
        <div
          key={index}
          className="hero-progress-fill h-full bg-[#E74725]"
          style={{ animationPlayState: autoplayOn ? "running" : "paused" }}
        />
      </div>
    </section>
  );
}
