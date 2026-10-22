import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";
import { QuoteButton } from "@/app/_pages/shared/components/QuotePopup";
import { ABOUT } from "../data/about";

/**
 * About Us hero — eyebrow, dominant heading, description, and image.
 * Follows existing hero conventions: light background, generous whitespace,
 * clamped responsive type, and brand-colored eyebrow text.
 */
export default function AboutHero() {
  return (
    <section
      aria-label="About K Roadtech"
      className="relative w-full overflow-hidden bg-white text-[#0B0B0B]"
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
          <div className="mt-8 max-w-[52ch]" data-aos="fade-right">
            <h1 className="max-w-[22ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
                {ABOUT.title}<span className="text-[#E74725]">.</span>
              </h1>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              {ABOUT.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <QuoteButton className="group inline-flex w-full sm:w-auto h-[48px] cursor-pointer items-center justify-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </QuoteButton>
              <Link
                href="/products"
                className="inline-flex w-full sm:w-auto h-[48px] items-center justify-center rounded-[3px] border border-black/15 px-[28px] text-[15px] font-semibold text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
              >
                Explore Products
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start lg:justify-start" data-aos="fade-left" data-aos-delay="120">
            <figure
              className="max-w-[620px] w-full overflow-hidden rounded-[4px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                fill={false}
                className="h-auto w-full block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
