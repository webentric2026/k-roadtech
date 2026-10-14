const ITEMS = [
  {
    title: "Complete range",
    desc: "Signage, equipment, reflective wear & markers.",
  },
  {
    title: "Material options",
    desc: "Steel, ABS, PU and reflective sheeting grades.",
  },
  {
    title: "Built to customise",
    desc: "Sizes, colours and fixing on request.",
  },
  {
    title: "Infrastructure grade",
    desc: "Specified for highways, streets and sites.",
  },
];

/**
 * Trust & capability bar — brand-red band, swipeable peek slider
 * on mobile, four-column grid on desktop.
 */
export default function TrustBar() {
  return (
    <section
      aria-label="Company capabilities"
      className="relative w-full overflow-hidden bg-[#E74725] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-[10%] h-72 w-72 rounded-full bg-black/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-[1600px] py-14 lg:py-16">
        <div
          tabIndex={0}
          aria-label="Company capabilities — swipe to explore"
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[clamp(20px,5vw,80px)] pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-12 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden ml-5"
        >
          {ITEMS.map((t, i) => (
            <div
              key={t.title}
              className="group w-[80%] shrink-0 snap-start sm:w-[58%] lg:w-auto"
            >
              <p
                aria-hidden="true"
                className="text-[64px] leading-none font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,1)] transition-all duration-300 group-hover:[-webkit-text-stroke:1.5px_#FFFFFF]"
              >
                0{i + 1}
              </p>
              <p className="mt-4 text-[22px] font-bold tracking-tight">{t.title}</p>
              <p className="mt-2 max-w-[300px] text-[18px] leading-7 text-white/85">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
