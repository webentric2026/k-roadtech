import Link from "next/link";
import { SITE_URL } from "@/app/lib/seo";

export const metadata = {
  title: "Privacy Policy — K Roadtech Safety Solutions",
  description:
    "How K Roadtech Safety Solutions collects, uses, and protects your information when you use our website and enquiry forms.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    heading: "Information we collect",
    body: "When you use our contact form or quote popup, we collect the details you provide — your name, email address, phone number, and your message or requirements. Our website host also records standard technical information such as pages visited and approximate device data for security and performance.",
  },
  {
    heading: "How we use it",
    body: "We use your details only to respond to your enquiry or quote request, share pricing and availability, and improve our products and website. We do not sell your personal information, and we do not use it for unrelated marketing without your permission.",
  },
  {
    heading: "Sharing",
    body: "Your enquiry is emailed to our team at kroadtechsafetysolutions@gmail.com so we can respond. Apart from the email and hosting providers required to operate this website, we do not share your information with third parties unless required by law.",
  },
  {
    heading: "Cookies and storage",
    body: "This website does not use advertising or tracking cookies. We store small flags in your browser's session storage (for example, whether the quote popup has been shown or a quote sent) so the site behaves correctly during your visit. Embedded content such as the map on our contact page is served by Google and subject to Google's privacy policy.",
  },
  {
    heading: "Data retention",
    body: "Enquiry emails are retained for as long as needed to handle your request and maintain business records, after which they are deleted or archived. You may ask us at any time what information we hold about you and request correction or deletion.",
  },
  {
    heading: "Your rights and contact",
    body: "To access, correct, or delete your information, or to ask any question about this policy, contact us at kroadtechsafetysolutions@gmail.com or call +91 81301 55514. Our address is 30/A, Guru Gobind Singh Nagar, Nilothi Extn, New Delhi – 110041.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <nav aria-label="Breadcrumb" className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-4 lg:py-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[#5f5f5f]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#E74725]">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li className="font-medium text-[#0B0B0B]">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[900px] px-[clamp(20px,5vw,80px)] py-12 lg:py-20">
        <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
          Privacy Policy<span className="text-[#E74725]">.</span>
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-[#5f5f5f]">
          Last updated: November 2026. This policy explains how K Roadtech
          Safety Solutions handles information collected through this website.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.heading} className="border-t border-black/10 pt-6">
              <h2 className="text-[18px] font-bold tracking-tight text-[#0B0B0B]">
                {s.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#5f5f5f]">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
