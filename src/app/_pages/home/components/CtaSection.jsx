import Link from "next/link";
import { CONTACT_META, CTA } from "@/app/_pages/shared/data/navigation";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Closing call-to-action — final section of the home page.
 * Dark band driving visitors to a quote enquiry or the catalogue.
 */
export default function CtaSection() {
  return (
    <section
      aria-label="Get a quote"
      className="relative w-full overflow-hidden bg-[#0B0B0B] text-white"
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-[#E74725]/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-32 h-72 w-72 rounded-full bg-[#E74725]/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center px-[clamp(20px,5vw,80px)] py-16 text-center lg:py-24">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-[#E74725] uppercase">
          Get started today
        </p>
        <h2 className="mt-4 max-w-[22ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
          Let&apos;s Build Safer Roads Together<span className="text-[#E74725]">.</span>
        </h2>
        <p className="mt-5 max-w-[58ch] text-[15.5px] leading-7 text-white/70">
          Share your requirement — from a single product to a complete
          infrastructure project — and get the right road safety, signage and
          traffic management solution with a quick quote.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={CTA.href}
            className="group inline-flex h-[50px] items-center gap-2 rounded-[3px] bg-[#E74725] px-[30px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {CTA.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/products"
            className="inline-flex h-[50px] items-center rounded-[3px] border border-white/30 px-[30px] text-[15px] font-semibold text-white transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
          >
            Explore Products
          </Link>
        </div>
        <p className="mt-7 text-[14px] text-white/60">
          Prefer to talk?{" "}
          <a
            href={`tel:${CONTACT_META.phone.replace(/[^+\d]/g, "")}`}
            className="rounded-sm font-semibold text-white transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            Call us at {CONTACT_META.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
