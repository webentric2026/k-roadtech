import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets/images";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Products hero section — introduces the product catalogue.
 * Follows existing hero conventions: light background, clamped type,
 * generous whitespace, brand-coloured eyebrow and primary button.
 */
export default function ProductsHero() {
  return (
    <section aria-label="Product range" className="w-full overflow-hidden bg-white text-[#0B0B0B]">
      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">
          <div className="max-w-[52ch]">
            <p className="text-[12px] font-semibold tracking-[0.22em] text-[#E74725] uppercase">
              Our Product Range
            </p>
            <h1 className="mt-4 max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Complete Road Safety Solutions<span className="text-[#E74725]">.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              Explore our range of road safety equipment, traffic management
              products, road signage, and infrastructure safety solutions
              designed to support safer roads and more organized environments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#category-navigation"
                className="inline-flex w-full sm:w-auto h-[48px] items-center justify-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto h-[48px] items-center justify-center rounded-[3px] border border-black/15 px-[28px] text-[15px] font-semibold text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start lg:justify-start">
            <figure
              className="max-w-[520px] w-full overflow-hidden rounded-[4px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={IMAGES.aboutImage}
                alt="Road safety products arranged on a highway project"
                fill={false}
                className="h-auto w-full block"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
