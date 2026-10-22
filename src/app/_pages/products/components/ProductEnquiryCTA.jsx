import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";
import { QuoteButton } from "@/app/_pages/shared/components/QuotePopup";
import { CONTACT_META } from "@/app/_pages/shared/data/navigation";

/**
 * Final product enquiry CTA — conversion-focused closing section.
 */
export default function ProductEnquiryCTA() {
  return (
    <section
      aria-label="Product enquiry"
      className="relative w-full overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-[#E74725]/20 blur-[130px]"
      />
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center px-[clamp(20px,5vw,80px)] py-12 lg:py-20 text-center" data-aos="fade-up">
        <h2 className="max-w-[48ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
          Looking for the Right Road Safety Solution?<span className="text-[#E74725]">.</span>
        </h2>
        <p className="mt-6 max-w-[58ch] text-[15.5px] leading-7 text-white/70 mx-auto">
          Tell us about your project requirements, and our team can help you
          explore the relevant products for your application.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
          <QuoteButton className="group inline-flex w-full sm:w-auto h-[48px] cursor-pointer items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </QuoteButton>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto h-[48px] items-center justify-center rounded-[3px] border border-white/30 px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]"
          >
            Speak to Our Team
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
