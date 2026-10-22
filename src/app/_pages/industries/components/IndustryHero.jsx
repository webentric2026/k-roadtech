import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Industry hero — breadcrumb, eyebrow, dominant heading, description,
 * CTAs, and image. Mirrors the product/about hero conventions.
 */
export default function IndustryHero({
  eyebrow,
  title,
  description,
  image,
  primaryCta = { label: "Explore Related Products", href: "#industry-products" },
  secondaryCta = { label: "Request a Quote", href: "/contact" },
  crumbs = [],
}) {
  return (
    <section aria-label={title} className="w-full overflow-hidden bg-white text-[#0B0B0B]">
      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[#5f5f5f]">
              {crumbs.map((crumb, i) => (
                <li key={crumb.href ?? crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-[#A3A3A3]">
                      /
                    </span>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-[#0B0B0B]">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="max-w-[52ch]" data-aos="fade-right">
            <h1 className="max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              {title}<span className="text-[#E74725]">.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              {description}
            </p>
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex h-[48px] w-full items-center justify-center rounded-[3px] border border-black/15 px-[28px] text-[15px] font-semibold text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725] sm:w-auto"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-start" data-aos="fade-left" data-aos-delay="120">
            <figure className="w-full max-w-[520px] overflow-hidden rounded-[4px] border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.10)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill={false}
                className="block h-auto w-full"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
