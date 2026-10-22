"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { INDUSTRIES } from "../data/industries";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

const AUTOPLAY_MS = 5500;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
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

/**
 * Industries We Serve — center-mode peek slider.
 * The active card is centered while a sliver of the previous
 * and next cards stays visible on either side.
 */
export default function IndustriesSlider() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const total = INDUSTRIES.length;
  const activeRef = useRef(0);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback(
    (i, behavior = "smooth") => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const next = (i + total) % total;
      const slide = scroller.children[next];
      if (slide instanceof HTMLElement) {
        // Center the slide inside the horizontal scroller only.
        // (scrollIntoView would also scroll the page vertically.)
        const scrollerRect = scroller.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const left =
          scroller.scrollLeft +
          (slideRect.left - scrollerRect.left) -
          (scroller.clientWidth - slideRect.width) / 2;
        scroller.scrollTo({
          left,
          behavior: reduceMotion ? "auto" : behavior,
        });
      }
      setActive(next);
    },
    [total, reduceMotion]
  );

  // Track the card closest to the viewport center while scrolling.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const center = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < scroller.children.length; i++) {
        const el = scroller.children[i];
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(elCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      setActive((prev) => (prev === best ? prev : best));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Gentle autoplay; pauses on hover/focus or reduced motion.
  useEffect(() => {
    if (paused || reduceMotion || total <= 1) return;
    const t = setTimeout(() => {
      const scroller = scrollerRef.current;
      if (scroller && document.activeElement && scroller.contains(document.activeElement)) return;
      goTo(activeRef.current + 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduceMotion, total, goTo]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") goTo(activeRef.current - 1);
    else if (e.key === "ArrowRight") goTo(activeRef.current + 1);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Industries we serve"
      className="w-full overflow-hidden bg-white text-[#0B0B0B]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        <div className="max-w-[62ch]" data-aos="fade-up">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Industries We Serve<span className="text-[#E74725]">.</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-7 text-[#5f5f5f]">
            From high-speed highways to schools and hospitals — our road
            safety, signage and traffic management products support safer
            movement across transportation, infrastructure and public spaces.
          </p>
        </div>
      </div>

      {/* Full-bleed peek viewport with on-slide controls */}
      <div className="relative">
        <div
          ref={scrollerRef}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
          role="group"
          aria-label={`Industry ${active + 1} of ${total}: ${INDUSTRIES[active].title}`}
          className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(20px,5vw,80px)] pb-2 [scrollbar-width:none] active:cursor-grabbing sm:gap-6 [&::-webkit-scrollbar]:hidden"
        >
        {INDUSTRIES.map((item, i) => {
          const isActive = i === active;
          return (
            <article
              key={item.id}
              aria-hidden={!isActive}
              aria-roledescription="slide"
              aria-label={`${item.title}`}
              onClick={() => {
                if (!isActive) goTo(i);
              }}
              className="group relative h-[320px] w-[80%] shrink-0 snap-center overflow-hidden rounded-[3px] bg-[#0B0B0B] select-none sm:h-[360px] sm:w-[54%] lg:h-[420px] lg:w-[44%] xl:w-[40%]"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 54vw, 44vw"
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
                draggable={false}
              />
              {/* Legibility gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5"
              />
              {/* Wash out off-center cards so the active one pops */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  isActive ? "opacity-0" : "opacity-45"
                }`}
              />
              {/* Copy */}
              <div
                className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 sm:p-8 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-70"
                }`}
              >
                <h3 className="max-w-[22ch] text-[clamp(1.35rem,2.2vw,1.9rem)] leading-tight font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[52ch] text-[14px] leading-6 text-white/85">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
        </div>

        {/* On-slide prev / next controls */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous industry"
          className="absolute top-1/2 left-[clamp(8px,2.5vw,32px)] z-10 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#0B0B0B] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-colors duration-150 hover:bg-[#E74725] hover:text-white focus-visible:outline-2 focus-visible:outline-[#E74725] sm:h-11 sm:w-11"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next industry"
          className="absolute top-1/2 right-[clamp(8px,2.5vw,32px)] z-10 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#0B0B0B] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-colors duration-150 hover:bg-[#E74725] hover:text-white focus-visible:outline-2 focus-visible:outline-[#E74725] sm:h-11 sm:w-11"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Position dots (no slide numbers) */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center gap-2 px-[clamp(20px,5vw,80px)] pt-7 pb-16 lg:pb-24">
        {INDUSTRIES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${item.title}`}
            aria-current={i === active}
            className={`h-[3px] cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#E74725] ${
              i === active ? "w-10 bg-[#E74725]" : "w-5 bg-black/15 hover:bg-black/35"
            }`}
          />
        ))}
      </div>

      {/* Screen-reader status */}
      <p className="sr-only" aria-live="polite">
        Showing {INDUSTRIES[active].title}, {active + 1} of {total}
      </p>
    </section>
  );
}
