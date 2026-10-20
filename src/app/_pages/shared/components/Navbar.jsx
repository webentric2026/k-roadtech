"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES } from "@/assets/images";

const logo = IMAGES.logoMark;
import {
  CTA,
  INDUSTRIES,
  NAV_LINKS,
} from "@/app/_pages/shared/data/navigation";
import {
  ArrowRight,
  ChevronDown,
  MenuIcon,
} from "./icons";
import MobileMenu from "./MobileMenu";
import { PRODUCT_CATEGORIES as NAV_CATEGORIES } from "@/app/_pages/products/data/products";

function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null); // products | industries | null
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, [cancelClose]);
  const openMenuNow = useCallback(
    (menu) => {
      cancelClose();
      setOpenMenu(menu);
    },
    [cancelClose]
  );
  const toggleMenu = useCallback(
    (menu) => {
      cancelClose();
      setOpenMenu((prev) => (prev === menu ? null : menu));
    },
    [cancelClose]
  );
  // Close desktop menus on route change (sync with router — external system)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMenu(null);
  }, [pathname]);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);
  // Subtle header border + shadow on scroll (no layout shift: sticky)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Restore hamburger focus after mobile menu closes
  useEffect(() => {
    if (!mobileOpen) hamburgerRef.current?.focus?.({ preventScroll: true });
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 w-full bg-white shadow-[0_2px_24px_rgba(0,0,0,0.10)] transition-all duration-200 ${scrolled || openMenu
          ? "border-b border-black/10"
          : "border-b border-transparent"
          }`}
      >
        <nav
          ref={navRef}
          aria-label="Primary"
          className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between gap-6 px-[clamp(20px,4vw,64px)]"
          onMouseLeave={scheduleClose}
        >
          {/* Left: brand — logo plus wordmark, compacts on scroll */}
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E74725]"
            aria-label="K Roadtech — home"
          >
            <Image
              src={logo}
              alt="K Roadtech Safety Solution"
              height={64}
              className={`w-auto shrink-0 transition-all duration-300 ease-out ${scrolled ? "h-11" : "h-[60px]"
                }`}
              priority
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span
                className={`truncate font-bold tracking-tight text-[#0B0B0B] transition-all duration-300 ease-out ${scrolled ? "text-[17px]" : "text-[22px]"
                  }`}
              >
                K Roadtech
              </span>
              <span
                className={`font-semibold text-[#E74725] uppercase transition-all duration-300 ease-out ${scrolled
                  ? "mt-0.5 text-[9px] tracking-[0.2em]"
                  : "mt-1 text-[11px] tracking-[0.24em]"
                  }`}
              >
                Safety Solutions
              </span>
            </span>
          </Link>

          {/* Center/right: desktop links */}
          <ul className="hidden min-w-0 flex-1 items-center justify-end gap-[clamp(18px,2vw,34px)] whitespace-nowrap lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href, pathname);
              const expanded = openMenu === link.hasMenu;

              if (!link.hasMenu) {
                return (
                  <li key={link.label} className="shrink-0">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-sm text-[14.5px] font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E74725] ${active
                        ? "text-[#E74725]"
                        : "text-[#0B0B0B] hover:text-[#E74725]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={link.label}
                  className={`shrink-0 ${link.hasMenu === "products" ? "relative" : ""}`}
                  onMouseEnter={() => openMenuNow(link.hasMenu)}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={
                      link.hasMenu === "products"
                        ? "nav-products-panel"
                        : "nav-industries-panel"
                    }
                    aria-haspopup="true"
                    onClick={() => toggleMenu(link.hasMenu)}
                    onFocus={() => openMenuNow(link.hasMenu)}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-sm text-[14.5px] font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E74725] ${active || expanded
                      ? "text-[#E74725]"
                      : "text-[#0B0B0B] hover:text-[#E74725]"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Products dropdown */}
                  {link.hasMenu === "products" && openMenu === "products" && (
                    <div
                      id="nav-products-panel"
                      role="menu"
                      aria-label="Products"
                      className="nav-panel-in absolute left-0 top-full z-50 w-[340px] overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="flex items-center justify-between border-b border-black/10 bg-[#F5F5F5] px-4 py-3">
                        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5f5f5f] uppercase">
                          Product Categories
                        </p>
                        <span className="rounded-full bg-[#E74725]/10 px-2 py-0.5 text-[11px] font-bold text-[#E74725]">
                          {NAV_CATEGORIES.length}
                        </span>
                      </div>
                      <ul className="max-h-[60vh] overflow-y-auto py-2">
                        {NAV_CATEGORIES.map((cat) => {
                          const thumb =
                            IMAGES.productCutouts?.[cat.products?.[0]?.image];
                          const count = cat.products?.length ?? 0;
                          return (
                            <li key={cat.id}>
                              <Link
                                href={`/products?category=${cat.id}`}
                                role="menuitem"
                                onClick={() => setOpenMenu(null)}
                                className="group flex items-center gap-3 px-4 py-2 transition-colors hover:bg-black/[0.03] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                              >
                                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[3px] border border-black/10 bg-[#F5F5F5]">
                                  {thumb ? (
                                    <Image
                                      src={thumb}
                                      alt=""
                                      fill
                                      sizes="40px"
                                      className="object-contain object-center"
                                    />
                                  ) : (
                                    <span className="flex h-full w-full items-center justify-center text-[15px] font-bold text-[#E74725]">
                                      {cat.name.charAt(0)}
                                    </span>
                                  )}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate text-[13.5px] font-semibold text-[#0B0B0B] transition-colors group-hover:text-[#E74725]">
                                    {cat.name}
                                  </span>
                                  <span className="block text-[11.5px] text-[#A3A3A3]">
                                    {count} product{count !== 1 ? "s" : ""}
                                  </span>
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-[#E74725] opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="border-t border-black/10 p-2">
                        <Link
                          href="/products"
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                          className="group flex h-[42px] items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                        >
                          View All Products
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Far right: CTA + hamburger */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href={CTA.href}
              className="hidden h-[44px] items-center rounded-[3px] bg-[#E74725] px-[24px] text-[14.5px] font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B] sm:inline-flex"
            >
              {CTA.label}
            </Link>
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="webentric-mobile-menu"
              aria-label="Open menu"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm text-[#0B0B0B] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725] lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* ---------- Desktop dropdown / mega panels ---------- */}
        <div
          className="hidden lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {/* Industries dropdown */}
          {openMenu === "industries" && (
            <div
              id="nav-industries-panel"
              role="menu"
              aria-label="Industries"
              className="nav-panel-in absolute inset-x-0 top-full border-b border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,4vw,64px)] py-8">
                <p className="mb-5 text-[11px] font-semibold tracking-[0.14em] text-[#737373] uppercase">
                  Industries & Applications
                </p>
                <ul className="grid grid-cols-2 gap-x-10 gap-y-1 xl:grid-cols-3">
                  {INDUSTRIES.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="group flex items-center justify-between gap-3 rounded-[3px] px-3 py-2.5 text-[14px] font-medium text-[#0B0B0B] transition-colors hover:bg-black/[0.03] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                      >
                        {item.name}
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#A3A3A3] transition-colors group-hover:text-[#E74725]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
