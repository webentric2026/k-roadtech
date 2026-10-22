import { ArrowRight } from "@/app/_pages/shared/components/icons";
import { QuoteButton } from "@/app/_pages/shared/components/QuotePopup";
import { ABOUT } from "../data/about";

/**
 * Company story — paragraphs plus key highlights grid.
 */
export default function CompanyStory() {
  return (
    <section
      aria-label="Company story"
      className="w-full bg-white text-[#0B0B0B]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-[clamp(20px,5vw,80px)] py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-24">
        <div data-aos="fade-right">
          <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Our Story<span className="text-[#E74725]">.</span>
          </h2>
          <p className="mt-4 text-[clamp(1.15rem,1.8vw,1.45rem)] leading-snug font-semibold tracking-tight text-[#E74725]">
            Safer journeys start with better infrastructure.
          </p>
          <div className="mt-8">
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-7 ${i === 0
                  ? "text-[16px] text-[#333333]"
                  : "text-[15px] text-[#5f5f5f]"
                  }`}
              >
                {p}
              </p>
            ))}
          </div>
          <QuoteButton className="group mt-7 inline-flex h-[48px] cursor-pointer items-center gap-2 rounded-[3px] bg-[#0B0B0B] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725]">
            Get a Project Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </QuoteButton>
        </div>

        <div>
          <h3 className="mt-10 text-[19px] font-bold tracking-tight">
            Key Highlights
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {ABOUT.highlights.map((h, i) => (
              <li
                key={h.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(i, 3) * 90}
                className="rounded-[4px] border border-black/10 bg-[#F5F5F5] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <p className="mt-2 text-[15px] font-bold tracking-tight">
                  {h.title}
                </p>
                <p className="mt-1.5 text-[14px] leading-6 text-[#5f5f5f]">
                  {h.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
