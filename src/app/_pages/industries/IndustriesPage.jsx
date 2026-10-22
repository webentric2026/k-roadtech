import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/app/_pages/shared/components/icons";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";
import { INDUSTRY_PAGES } from "./data/industries";

/**
 * Industries listing page — hero plus a card grid linking to each
 * industry detail page.
 */
export default function IndustriesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-4 lg:py-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[#5f5f5f]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li className="font-medium text-[#0B0B0B]">Industries</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section aria-label="Industries we serve" className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-16 lg:py-24">
          <div className="max-w-[62ch]" data-aos="fade-up">
            <h1 className="max-w-[20ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Industries We Serve<span className="text-[#E74725]">.</span>
            </h1>
            <p className="mt-6 max-w-[60ch] text-[15.5px] leading-7 text-[#5f5f5f]">
              From high-speed highways to commercial buildings and public
              spaces — our road safety, signage, and traffic management
              products support safer movement across transportation,
              infrastructure, and industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <section aria-label="All industries" className="w-full bg-[#F5F5F5] text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {INDUSTRY_PAGES.map((industry, i) => (
              <li key={industry.slug} data-aos="fade-up" data-aos-delay={(i % 3) * 90}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-black/10 bg-white transition-colors hover:border-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  <span className="relative block aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={industry.image.src}
                      alt={industry.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[17px] font-bold tracking-tight transition-colors group-hover:text-[#E74725]">
                      {industry.name}
                    </span>
                    <span className="mt-1.5 text-[14px] leading-6 text-[#5f5f5f]">
                      {industry.tagline}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#E74725]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProductEnquiryCTA />
    </main>
  );
}
