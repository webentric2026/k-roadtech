import { ABOUT } from "../data/about";
export default function MissionVision() {
  return (
    <section
      aria-label="Mission and vision"
      className="w-full bg-[#F5F5F5] text-[#0B0B0B]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-[clamp(20px,5vw,80px)] py-16 lg:grid-cols-2 lg:py-24 lg:gap-20">
        <div data-aos="fade-up">
          <h2 className="max-w-[22ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Mission &amp; Vision<span className="text-[#E74725]">.</span>
          </h2>
          <div className="mt-10 space-y-10 flex">
            <article>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-[#E74725] uppercase">
                Our Mission
              </p>
              <h3 className="mt-3 text-[22px] font-bold tracking-tight">
                {ABOUT.mission.title}
              </h3>
              <p className="mt-4 max-w-[44ch] text-[15.5px] leading-7 text-[#5f5f5f]">
                {ABOUT.mission.desc}
              </p>
            </article>
            <article>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-[#E74725] uppercase">
                Our Vision
              </p>
              <h3 className="mt-3 text-[22px] font-bold tracking-tight">
                {ABOUT.vision.title}
              </h3>
              <p className="mt-4 max-w-[44ch] text-[15.5px] leading-7 text-[#5f5f5f]">
                {ABOUT.vision.desc}
              </p>
            </article>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="max-w-[22ch] text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Our Values<span className="text-[#E74725]">.</span>
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.map((v, i) => (
              <li
                key={v.name}
                data-aos="fade-up"
                data-aos-delay={Math.min(i, 3) * 90}
                className="rounded-[4px] border border-black/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E74725]/10 text-[#E74725] font-bold text-[13px]">
                  {i + 1}
                </span>
                <h4 className="mt-5 text-[17px] font-bold tracking-tight">
                  {v.name}
                </h4>
                <p className="mt-3 text-[14.5px] leading-6 text-[#5f5f5f]">
                  {v.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
