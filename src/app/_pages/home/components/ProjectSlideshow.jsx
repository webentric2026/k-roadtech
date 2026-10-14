import Link from "next/link";
import { SHOWCASE_PRODUCTS } from "../data/products";
import ProductCutout from "./ProductCutout";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Dual counter-scrolling product showcase.
 * Top row drifts right-to-left, bottom row left-to-right.
 * Cutout art + name only; data lives in ../data/products.js.
 */
function Row({ items, reverse = false, hiddenLabel }) {
  const doubled = [...items, ...items];
  return (
    <div
      aria-label={hiddenLabel}
      className="showcase overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className={`showcase-track flex w-max items-stretch gap-5 ${reverse ? "reverse" : ""}`}>
        {doubled.map((p, i) => {
          const dup = i >= items.length;
          return (
            <Link
              key={`${p.id}-${i}`}
              href={p.href}
              aria-hidden={dup || undefined}
              tabIndex={dup ? -1 : undefined}
              className="group flex w-44 shrink-0 flex-col items-center rounded-[4px] border border-black/10 bg-white px-4 pt-6 pb-5 transition-colors duration-150 hover:border-[#E74725]/60 focus-visible:outline-2 focus-visible:outline-[#E74725] sm:w-52"
            >
              <span className="flex h-28 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.06]">
                <ProductCutout art={p.art} image={p.image} name={p.name} className="h-28 w-28" />
              </span>
              <span className="mt-4 text-center text-[13.5px] leading-snug font-semibold tracking-tight text-[#0B0B0B] transition-colors group-hover:text-[#E74725]">
                {p.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectSlideshow() {
  const top = SHOWCASE_PRODUCTS.filter((_, i) => i % 2 === 0);
  const bottom = SHOWCASE_PRODUCTS.filter((_, i) => i % 2 === 1);
  return (
    <section aria-label="Project slideshow" className="w-full bg-white text-[#0B0B0B]">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Our Products<span className="text-[#E74725]">.</span>
          </h2>
          <Link
            href="/products"
            className="inline-flex h-[46px] items-center gap-2 rounded-[3px] bg-[#E74725] px-[26px] text-[14.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B]"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 pb-16 lg:pb-24">
        <Row items={top} hiddenLabel="Products row one" />
        <Row items={bottom} reverse hiddenLabel="Products row two" />
      </div>
    </section>
  );
}
