import { ABOUT } from "../data/about";

/**
 * Company Highlights — data bar with three statistics.
 */
export default function CompanyStats() {
  return (
    <section
      aria-label="Company highlights"
      className="relative w-full overflow-hidden bg-[#F5F5F5] text-[#0B0B0B]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-10 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-3 lg:gap-14">
          {ABOUT.stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-[clamp(2.2rem,4vw,3.6rem)] leading-none font-bold tracking-tight text-[#E74725]">
                {s.value}
              </p>
              <p className="mt-3 text-[15px] font-semibold tracking-tight">
                {s.label}
              </p>
              <p className="mt-2 text-[13.5px] leading-6 text-[#5f5f5f]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
