"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";

const logo = IMAGES.logoMark;
import {
  CONTACT_META,
  CTA,
  INDUSTRIES,
} from "@/app/_pages/shared/data/navigation";
import { PRODUCT_CATEGORIES } from "@/app/_pages/products/data/products";
import {
  ArrowRight,
  ChevronDown,
  CloseIcon,
  MinusIcon,
  PlusIcon,
} from "./icons";

function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getSubcategories(category) {
  const map = new Map();
  for (const p of category.products) {
    if (!p.subcategory || map.has(p.subcategory)) continue;
    map.set(p.subcategory, {
      name: p.subcategory,
      slug: slugify(p.subcategory),
      products: [],
    });
  }
  for (const p of category.products) {
    if (map.has(p.subcategory)) {
      map.get(p.subcategory).products.push(p);
    }
  }
  return Array.from(map.values());
}

export default function MobileMenu({ open, onClose, pathname }) {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [section, setSection] = useState(null); // products | industries | null
  const [catSlug, setCatSlug] = useState(null);
  const [subSlug, setSubSlug] = useState(null);
  const closeBtnRef = useRef(null);
  const panelRef = useRef(null);

  // Keep mounted through the slide animation; lock body scroll while visible.
  // Syncs with the parent `open` prop + CSS transition (external timing).
  // On open the panel mounts off-screen (translate-x-full) and slides to 0
  // on the next animation frame, so the entrance animates from the right.
  useEffect(() => {
    let raf;
    let t;
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setEntered(true))
      );
    } else {
      setEntered(false);
      t = setTimeout(() => {
        setVisible(false);
        setSection(null);
        setCatSlug(null);
        setSubSlug(null);
      }, 420);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  // Focus close on open + Escape to close
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => closeBtnRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      // Simple focus containment: keep Tab inside panel
      if (e.key === "Tab" && panelRef.current) {
        const els = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!visible) return null;

  const toggleSection = (s) => {
    setSection((prev) => (prev === s ? null : s));
    setCatSlug(null);
    setSubSlug(null);
  };

  const topLinkClass = (href) =>
    `flex flex-1 rounded-sm text-left text-[22px] font-medium leading-[1.4] transition-colors focus-visible:outline-2 focus-visible:outline-[#E74725] ${
      isActiveLink(href, pathname) ? "text-[#E74725]" : "text-[#0B0B0B]"
    }`;

  // Staggered entrance rows: hidden until the panel has entered
  const itemClass = `mobile-item ${entered ? "in" : ""}`;

  return (
    <div
      id="webentric-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 lg:hidden ${entered ? "opacity-100" : "opacity-0"} ${open ? "" : "pointer-events-none"}`}
    >
      {/* Full-screen panel sliding in from the right (right → left).
          Inline transform guarantees the slide animates regardless of
          which CSS property Tailwind's translate-* utilities compile to. */}
      <div
        ref={panelRef}
        style={{ transform: entered ? "translateX(0)" : "translateX(100%)" }}
        className="mobile-panel flex h-full w-full flex-col bg-white"
      >
        {/* Top bar */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-black/10 px-5">
          <Link
            href="/"
            onClick={onClose}
            aria-label="K Roadtech — home"
            className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            <Image
              src={logo}
              alt="K Roadtech Safety Solution"
              height={64}
              className="h-[60px] w-auto shrink-0"
              priority
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-[22px] font-bold tracking-tight text-[#0B0B0B]">
                K Roadtech
              </span>
              <span className="mt-1 text-[11px] font-semibold tracking-[0.24em] text-[#E74725] uppercase">
                Safety Solutions
              </span>
            </span>
          </Link>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm text-[#0B0B0B] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable links */}
        <nav
          aria-label="Mobile"
          className="min-h-0 flex-1 overflow-y-auto bg-white px-5 py-6"
        >
          <ul className="flex flex-col gap-1">
            <li className={itemClass} style={{ "--i": 0 }}>
              <Link
                href="/"
                onClick={onClose}
                aria-current={pathname === "/" ? "page" : undefined}
                className={`${topLinkClass("/")} block py-3`}
              >
                Home
              </Link>
            </li>
            <li className={itemClass} style={{ "--i": 1 }}>
              <Link
                href="/about"
                onClick={onClose}
                aria-current={
                  isActiveLink("/about", pathname) ? "page" : undefined
                }
                className={`${topLinkClass("/about")} block py-3`}
              >
                About Us
              </Link>
            </li>

            {/* Products accordion */}
            <li
              className={`border-t border-black/[0.08] ${itemClass}`}
              style={{ "--i": 2 }}
            >
              <div className="flex items-center gap-2 py-3">
                <Link
                  href="/products"
                  onClick={onClose}
                  className={`${topLinkClass("/products")} ${
                    section === "products" ? "text-[#E74725]" : ""
                  }`}
                >
                  Products
                </Link>
                <button
                  type="button"
                  onClick={() => toggleSection("products")}
                  aria-expanded={section === "products"}
                  aria-controls="m-products"
                  aria-label={
                    section === "products"
                      ? "Collapse Products"
                      : "Expand Products"
                  }
                  className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-sm text-[#0B0B0B] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  {section === "products" ? (
                    <MinusIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {section === "products" && (
                <ul id="m-products" className="mb-3 flex flex-col gap-1 pl-4">
                  {PRODUCT_CATEGORIES.map((c) => {
                    const expanded = catSlug === c.id;
                    const subcategories = getSubcategories(c);
                    return (
                      <li
                        key={c.id}
                        className="border-l border-black/[0.12] pl-4"
                      >
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/products?category=${c.id}`}
                            onClick={onClose}
                            className="flex flex-1 rounded-sm py-2.5 text-left text-[17px] font-medium text-[#0B0B0B] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                          >
                            {c.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => {
                              setCatSlug(expanded ? null : c.id);
                              setSubSlug(null);
                            }}
                            aria-expanded={expanded}
                            aria-label={
                              expanded
                                ? `Collapse ${c.name}`
                                : `Expand ${c.name}`
                            }
                            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm text-[#737373] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180 text-[#E74725]" : ""}`}
                            />
                          </button>
                        </div>
                        {expanded && (
                          <ul className="mb-2 flex flex-col gap-0.5 pl-4">
                            {subcategories.map((s) => {
                              const subExpanded = subSlug === s.slug;
                              return (
                                <li
                                  key={s.slug}
                                  className="border-l border-black/[0.08] pl-4"
                                >
                                  <div className="flex items-center gap-2">
                                    <Link
                                      href={`/products?category=${c.id}`}
                                      onClick={onClose}
                                      className="flex flex-1 rounded-sm py-2 text-left text-[15px] text-[#333333] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                                    >
                                      {s.name}
                                    </Link>
                                    {s.products.length > 0 && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setSubSlug(
                                            subExpanded ? null : s.slug
                                          )
                                        }
                                        aria-expanded={subExpanded}
                                        aria-label={
                                          subExpanded
                                            ? `Collapse ${s.name}`
                                            : `Expand ${s.name}`
                                        }
                                        className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-sm text-[#737373] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                                      >
                                        <ChevronDown
                                          className={`h-3.5 w-3.5 transition-transform duration-200 ${subExpanded ? "rotate-180 text-[#E74725]" : ""}`}
                                        />
                                      </button>
                                    )}
                                  </div>
                                  {subExpanded && s.products.length > 0 && (
                                    <ul className="mb-2 flex flex-col pl-4">
                                      {s.products.map((p) => (
                                        <li key={p.id}>
                                          <Link
                                            href={`/products/${p.id}`}
                                            onClick={onClose}
                                            className="block rounded-sm py-1.5 text-[14px] text-[#5f5f5f] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                                          >
                                            {p.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                  <li className="pl-4">
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-sm py-2 text-[15px] font-semibold text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                    >
                      View All Products <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Industries accordion */}
            <li
              className={`border-t border-black/[0.08] ${itemClass}`}
              style={{ "--i": 3 }}
            >
              <div className="flex items-center gap-2 py-3">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className={`${topLinkClass("/industries")} ${
                    section === "industries" ? "text-[#E74725]" : ""
                  }`}
                >
                  Industries
                </Link>
                <button
                  type="button"
                  onClick={() => toggleSection("industries")}
                  aria-expanded={section === "industries"}
                  aria-controls="m-industries"
                  aria-label={
                    section === "industries"
                      ? "Collapse Industries"
                      : "Expand Industries"
                  }
                  className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-sm text-[#0B0B0B] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                >
                  {section === "industries" ? (
                    <MinusIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {section === "industries" && (
                <ul
                  id="m-industries"
                  className="mb-3 flex flex-col gap-0.5 pl-4"
                >
                  {INDUSTRIES.map((item) => (
                    <li
                      key={item.href}
                      className="border-l border-black/[0.12] pl-4"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block rounded-sm py-2 text-[16px] text-[#333333] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              className={`border-t border-black/[0.08] ${itemClass}`}
              style={{ "--i": 4 }}
            >
              <Link
                href="/blogs"
                onClick={onClose}
                aria-current={
                  isActiveLink("/blogs", pathname) ? "page" : undefined
                }
                className={`${topLinkClass("/blogs")} block py-3`}
              >
                Blogs
              </Link>
            </li>

            <li
              className={`border-t border-black/[0.08] ${itemClass}`}
              style={{ "--i": 5 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                aria-current={
                  isActiveLink("/contact", pathname) ? "page" : undefined
                }
                className={`${topLinkClass("/contact")} block py-3`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div
          className={`shrink-0 border-t border-black/10 bg-white px-5 py-5 ${itemClass}`}
          style={{ "--i": 6 }}
        >
          <Link
            href={CTA.href}
            onClick={onClose}
            className="flex h-[48px] w-full items-center justify-center rounded-[3px] bg-[#E74725] text-[16px] font-semibold text-white transition-colors hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0B]"
          >
            {CTA.label}
          </Link>
          <p className="mt-3 text-center text-[13px] text-[#737373]">
            {CONTACT_META.email} · {CONTACT_META.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
