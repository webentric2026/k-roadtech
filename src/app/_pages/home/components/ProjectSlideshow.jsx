"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import { PRODUCT_CATEGORIES } from "@/app/_pages/products/data/products";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

const AUTOPLAY_MS = 4000;

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
 * Our Products — single-row auto-sliding snap slider. One row of category
 * cards with arrow controls, keyboard support, and a scroll progress bar.
 * Cards link to the catalogue pre-filtered to that category.
 */
export default function ProjectSlideshow() {
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const total = PRODUCT_CATEGORIES.length;

  const update = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const max = scroller.scrollWidth - scroller.clientWidth;
    const left = scroller.scrollLeft;
    setProgress(max > 0 ? Math.min(1, left / max) : 0);
    setCanPrev(left > 8);
    setCanNext(left < max - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const step = useCallback((dir) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("[data-card]");
    const amount =
      (card instanceof HTMLElement ? card.offsetWidth + 20 : 300) * dir;
    scroller.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  };

  // Gentle autoplay; pauses on hover/focus, reduced motion, or manual hold.
  // Loops back to the start when the end is reached.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      if (document.activeElement && scroller.contains(document.activeElement))
        return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (scroller.scrollLeft >= max - 8) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = scroller.querySelector("[data-card]");
        const amount =
          card instanceof HTMLElement ? card.offsetWidth + 20 : 300;
        scroller.scrollBy({ left: amount, behavior: "smooth" });
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  return (
    <section aria-label="Our products" className="w-full bg-white text-[#0B0B0B]">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[62ch]">
            <p className="text-[12px] font-semibold tracking-[0.22em] text-[#E74725] uppercase">
              Our Range
            </p>
            <h2 className="mt-3 max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Our Products<span className="text-[#E74725]">.</span>
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              Twelve specialised categories of road safety, signage, and
              traffic management products — slide through and pick one.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={!canPrev}
                aria-label="Previous products"
                className="inline-flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[3px] border border-black/15 text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/15 disabled:hover:text-[#0B0B0B]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                disabled={!canNext}
                aria-label="Next products"
                className="inline-flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[3px] border border-black/15 text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/15 disabled:hover:text-[#0B0B0B]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <Link
              href="/products"
              className="group hidden h-[46px] items-center gap-2 rounded-[3px] bg-[#E74725] px-[26px] text-[14.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B] sm:inline-flex"
            >
              View all products
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Single-row track */}
      <div className="pb-4">
        <div
          ref={scrollerRef}
          onScroll={update}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`Product categories, ${total} items. Use arrow keys to slide.`}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[clamp(20px,5vw,80px)] pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-[#E74725] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const lead = cat.products?.[0];
            const src = lead?.image
              ? IMAGES.productCutouts?.[lead.image]
              : undefined;
            const count = cat.products?.length ?? 0;
            return (
              <Link
                key={cat.id}
                data-card
                href={`/products?category=${cat.id}`}
                aria-label={`${cat.name} — ${count} products`}
                className="group flex w-[240px] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)] focus-visible:outline-2 focus-visible:outline-[#E74725] sm:w-[280px]"
              >
                <span className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5]">
                  {src ? (
                    <Image
                      src={src}
                      alt={lead.name}
                      fill
                      sizes="280px"
                      className="object-contain object-center p-6 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      draggable={false}
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-[11px] font-medium tracking-[0.14em] text-[#A3A3A3] uppercase">
                      Image
                    </span>
                  )}
                </span>
                <span className="flex flex-1 items-center justify-between gap-2 p-4 sm:p-5">
                  <span className="text-[14px] leading-snug font-bold tracking-tight text-[#0B0B0B] transition-colors group-hover:text-[#E74725] sm:text-[15px]">
                    {cat.name}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#A3A3A3] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#E74725]" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Progress + mobile CTA */}
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pt-6 pb-16 lg:pb-24">
          <div
            className="h-[3px] w-full overflow-hidden rounded-full bg-black/10"
            role="presentation"
          >
            <div
              className="h-full rounded-full bg-[#E74725] transition-[width] duration-150"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <Link
            href="/products"
            className="group mt-6 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-[26px] text-[14.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B] sm:hidden"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
