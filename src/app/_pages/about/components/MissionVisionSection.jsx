import { ABOUT } from "../data/about";

/**
 * Mission & Vision — two balanced cards.
 */
export default function MissionVisionSection() {
  return (
    <section
      aria-label="Mission and vision"
      className="w-full bg-[#F5F5F5] text-[#0B0B0B]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
        <div className="max-w-[56ch]">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Mission &amp; Vision<span className="text-[#E74725]">.</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {[ABOUT.mission, ABOUT.vision].map((card, i) => (
            <article
              key={card.title}
              className="rounded-[4px] border border-black/10 bg-white p-8 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-200"
            >
              <h3 className="text-[19px] font-bold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-7 text-[#5f5f5f]">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
