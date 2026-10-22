import { ABOUT } from "../data/about";
import CountUp from "@/app/_pages/shared/components/CountUp";

/**
 * Stats bar — quick credibility numbers.
 */
export default function StatsSection() {
  return (
    <section
      aria-label="Company stats"
      className="relative w-full overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
      <div className="relative mx-auto grid w-full max-w-[1600px] gap-6 px-[clamp(20px,5vw,80px)] py-14 lg:py-20 lg:grid-cols-4 lg:gap-12">
        {ABOUT.stats.map((s, i) => (
          <div key={s.label} className="text-center" data-aos="fade-up" data-aos-delay={i * 100}>
            <p className="text-[clamp(2.2rem,4vw,3.6rem)] leading-none font-bold tracking-tight">
              <CountUp value={s.value} />
            </p>
            <p className="mt-3 text-[14px] text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
