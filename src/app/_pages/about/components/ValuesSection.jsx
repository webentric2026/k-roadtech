import { ABOUT } from "../data/about";

/**
 * Our Values — row of value cards.
 * Horizontally scrollable with snap on mobile; balanced grid on desktop.
 */
export default function ValuesSection() {
  return (
    <section
      aria-label="Our values"
      className="w-full bg-white text-[#0B0B0B]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
        <div className="max-w-[56ch] mb-8 lg:mb-12" data-aos="fade-up">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Our Values<span className="text-[#E74725]">.</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-7 text-[#5f5f5f]">
            The principles that guide our work, shape our relationships, and
            define our commitment to road safety.
          </p>
        </div>

        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ABOUT.values.map((v, i) => (
            <article
              key={v.id}
              data-aos="fade-up"
              data-aos-delay={Math.min(i, 4) * 80}
              className="shrink-0 snap-start w-[280px] rounded-[4px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/60 min-w-[280px] sm:w-[300px] sm:min-w-[300px]"
            >
              <h3 className="text-[17px] font-bold tracking-tight">
                {v.title}
              </h3>
              <p className="mt-4 max-w-[24ch] text-[14.5px] leading-6 text-[#5f5f5f]">
                {v.desc}
              </p>
            </article>
          ))}
        </div>

        <p
          aria-hidden="true"
          className="mt-8 text-[12px] font-semibold tracking-[0.2em] text-[#A3A3A3] uppercase"
        >
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
