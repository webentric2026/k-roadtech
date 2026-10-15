"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import { CONTACT_META } from "@/app/_pages/shared/data/navigation";
import { SLIDES } from "@/app/_pages/home/data/slides";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

/**
 * Site footer (shared) — light, minimal, brand-matched.
 * Product links derive from the hero slide data (single source).
 */
export default function Footer() {
  const [year, setYear] = useState(null);
  // Current year must resolve on the client (prerender-safe)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="w-full border-t border-black/10 bg-[#F5F5F5] text-[#0B0B0B]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-[clamp(20px,5vw,80px)] py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="K Roadtech — home"
            className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            <Image
              src={IMAGES.logoMark}
              alt="K Roadtech Safety Solution"
              height={48}
              className="h-12 w-auto shrink-0"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[18px] font-bold tracking-tight">K Roadtech</span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-[#E74725] uppercase">
                Safety Solutions
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-[300px] text-[13.5px] leading-6 text-[#5f5f5f]">
            Road safety products, signage and traffic management systems for
            modern infrastructure.
          </p>
        </div>

        <nav aria-label="Footer products">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
            Products
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SLIDES.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.primaryCta.href}
                  className="rounded-sm text-[14px] text-[#333333] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  {s.category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer company">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-sm text-[14px] text-[#333333] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#5f5f5f] uppercase">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-[14px]">
            <li>
              <a
                href={`tel:${CONTACT_META.phone.replace(/[^+\d]/g, "")}`}
                className="rounded-sm text-[#333333] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                {CONTACT_META.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_META.email}`}
                className="rounded-sm text-[#333333] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                {CONTACT_META.email}
              </a>
            </li>
            <li>
              <Link
                href="/quote"
                className="inline-flex h-[42px] items-center rounded-[3px] bg-[#E74725] px-[22px] text-[13.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B]"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-[clamp(20px,5vw,80px)] py-5 text-[12.5px] text-[#5f5f5f]">
          <p suppressHydrationWarning>
            © {year ?? ""} K Roadtech Safety Solutions. All rights reserved.
          </p>
          <p className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="rounded-sm transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="rounded-sm transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
            >
              Terms & Conditions
            </Link>
          </p>
        </div>
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pt-1 pb-5 text-center text-[12.5px] text-[#5f5f5f]">
          <p>
            Website designed and developed by{" "}
            <a
              href="https://www.webentric.in"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-semibold text-[#0B0B0B] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
            >
              WEBENTRIC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
