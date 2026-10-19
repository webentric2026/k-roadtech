import Link from "next/link";
import { CONTACT_META } from "@/app/_pages/shared/data/navigation";
import ContactForm from "./components/ContactForm";

// Dummy office details — replace with the real address when available.
const OFFICE_ADDRESS = "Plot 123, Industrial Area, Phase II, New Delhi – 110001";
const MAP_QUERY = encodeURIComponent(OFFICE_ADDRESS);
const WHATSAPP_LINK = `https://wa.me/${CONTACT_META.phone.replace(/\D/g, "")}`;

function PhoneIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function PinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const iconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-[#E74725] text-white";

const infoLinkClass =
  "mt-0.5 block rounded-sm text-[14.5px] text-[#333333] transition-colors hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]";

/**
 * Contact page — compact above-the-fold layout: heading, info rows, and the
 * enquiry form side by side on desktop. The form comes first on mobile.
 * Single `lg` breakpoint throughout so ordering never splits mid-range.
 */
export default function ContactPage() {
  const telHref = `tel:${CONTACT_META.phone.replace(/[^+\d]/g, "")}`;

  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B] pt-20">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-3">
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
            <li className="font-medium text-[#0B0B0B]">Contact Us</li>
          </ol>
        </div>
      </nav>

      {/* Heading + info + form */}
      <section aria-label="Contact K Roadtech" className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pt-6 pb-10 lg:pt-8 lg:pb-14">
          {/* Heading — above the form on mobile */}
          <div className="max-w-[64ch] lg:hidden">
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em]">
              Contact Us<span className="text-[#E74725]">.</span>
            </h1>
            <p className="mt-3 max-w-[64ch] text-[15px] leading-7 text-[#5f5f5f]">
              We&apos;re here to help. Reach out to us for any inquiries,
              project discussions, or support.
            </p>
          </div>

          <div className="mt-8 grid gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-14">
            {/* Contact information */}
            <div className="order-2 lg:order-1">
              {/* Heading — in line with the form card on desktop */}
              <div className="hidden max-w-[64ch] lg:block">
                <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em]">
                  Contact Us<span className="text-[#E74725]">.</span>
                </h1>
                <p className="mt-3 max-w-[64ch] text-[15px] leading-7 text-[#5f5f5f]">
                  We&apos;re here to help. Reach out to us for any inquiries,
                  project discussions, or support.
                </p>
              </div>
              <ul className="flex flex-col divide-y divide-black/10 lg:mt-8">
                <li className="flex items-start gap-4 py-4 first:pt-0">
                  <span className={iconBoxClass}>
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold">Call Us</span>
                    <a href={telHref} className={infoLinkClass}>
                      {CONTACT_META.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className={iconBoxClass}>
                    <ChatIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold">WhatsApp</span>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={infoLinkClass}
                    >
                      Chat with us on WhatsApp
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className={iconBoxClass}>
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold">Email Us</span>
                    <a
                      href={`mailto:${CONTACT_META.email}`}
                      className={`${infoLinkClass} break-all`}
                    >
                      {CONTACT_META.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className={iconBoxClass}>
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold">Office</span>
                    <span className="mt-0.5 block text-[14.5px] leading-6 text-[#333333]">
                      {OFFICE_ADDRESS}
                    </span>
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[14px] leading-6 text-[#5f5f5f]">
                Looking for pricing? Just mention the product names in the
                form and we&apos;ll quote you.
              </p>
            </div>

            {/* Form card — first on mobile */}
            <div className="order-1 lg:order-2">
              <div className="h-fit rounded-[4px] border border-black/10 bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-8 lg:sticky lg:top-28">
                <h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-bold tracking-[-0.02em]">
                  Get in Touch
                </h2>
                <p className="mt-1.5 text-[14px] text-[#5f5f5f]">
                  You can reach us anytime
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Office location map" className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] pb-16 lg:pb-24">
          <h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight font-bold tracking-[-0.02em]">
            Visit Our Office<span className="text-[#E74725]">.</span>
          </h2>
          <div className="mt-5 overflow-hidden rounded-[4px] border border-black/10">
            <iframe
              title="K Roadtech office location map"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-[300px] w-full border-0 sm:h-[340px] lg:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[14px] text-[#5f5f5f]">{OFFICE_ADDRESS}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[42px] items-center rounded-[3px] border border-black/15 px-[22px] text-[14px] font-semibold text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
