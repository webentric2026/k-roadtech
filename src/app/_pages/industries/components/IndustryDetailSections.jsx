import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Shared industry detail sections — key applications, recommended product
 * categories, and navigation to the other industries. Same layout on every
 * industry page so the section reads consistently.
 */
export function IndustryApplications({ applications }) {
  return (
    <section aria-label="Key applications" className="w-full bg-[#F5F5F5] text-[#0B0B0B]">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
        <div className="max-w-[62ch]">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
            Key Applications
          </p>
          <h2 className="mt-3 max-w-[24ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] font-bold tracking-[-0.02em]">
            Where our products help<span className="text-[#E74725]">.</span>
          </h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {applications.map((app, i) => (
            <li
              key={app.title}
              className="flex flex-col rounded-[4px] border border-black/10 bg-white p-6"
            >
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#E74725]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16px] leading-snug font-bold tracking-tight">
                {app.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#5f5f5f]">{app.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function IndustryProducts({ categories }) {
  return (
    <section
      id="industry-products"
      aria-label="Recommended product categories"
      className="w-full scroll-mt-24 bg-white text-[#0B0B0B]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[62ch]">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
              Recommended Products
            </p>
            <h2 className="mt-3 max-w-[24ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] font-bold tracking-[-0.02em]">
              Categories for this industry<span className="text-[#E74725]">.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-sm text-[14px] font-semibold text-[#E74725] transition-colors hover:text-[#c93a1c] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/products?category=${cat.id}`}
                className="group flex h-full items-center justify-between gap-4 rounded-[4px] border border-black/10 bg-white p-6 transition-colors hover:border-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                <span>
                  <span className="block text-[16px] font-bold tracking-tight transition-colors group-hover:text-[#E74725]">
                    {cat.name}
                  </span>
                  {cat.description && (
                    <span className="mt-1.5 block text-[13.5px] leading-6 text-[#5f5f5f]">
                      {cat.description}
                    </span>
                  )}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#A3A3A3] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#E74725]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OtherIndustries({ industries, currentSlug }) {
  const others = industries.filter((i) => i.slug !== currentSlug);
  return (
    <section aria-label="Other industries" className="w-full bg-white text-[#0B0B0B]">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pt-2 pb-12 lg:pb-16">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
          Explore Other Industries
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {others.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex h-[42px] items-center rounded-[3px] border border-black/15 px-[20px] text-[14px] font-medium text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                {industry.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
