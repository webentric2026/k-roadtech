import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — K Roadtech Safety Solutions",
  description:
    "Terms governing the use of the K Roadtech Safety Solutions website, product information, and enquiry services.",
  alternates: { canonical: "/terms-conditions" },
};

const SECTIONS = [
  {
    heading: "Use of this website",
    body: "By using this website you agree to these terms. Content on this site — including product descriptions, images, and specifications — is provided for general information and may change without notice. If any part of these terms is unacceptable to you, please do not use the site.",
  },
  {
    heading: "Products and quotations",
    body: "Product images, dimensions, and specifications are indicative and may vary between batches. A quotation shared in response to an enquiry is valid for the period stated in it; prices, taxes, freight, and delivery timelines are confirmed at the time of order. Submitting an enquiry or quote request does not create a contract — an order is confirmed only by our written acceptance.",
  },
  {
    heading: "Enquiries and communication",
    body: "When you submit a form, you agree that we may contact you at the email address or phone number you provided in connection with your enquiry. You confirm that the details you submit are accurate and that you have the right to share them.",
  },
  {
    heading: "Intellectual property",
    body: "All text, images, graphics, and layout on this website belong to K Roadtech Safety Solutions or its content partners and are protected by applicable law. You may view and print pages for personal or internal business use, but you may not reproduce, distribute, or commercially exploit site content without written permission.",
  },
  {
    heading: "External links",
    body: "This website links to third-party services such as WhatsApp, Google Maps, and our web partner. We are not responsible for the content, policies, or practices of external sites.",
  },
  {
    heading: "Limitation of liability",
    body: "To the maximum extent permitted by law, K Roadtech Safety Solutions is not liable for any indirect or consequential loss arising from the use of, or reliance on, this website's content. Product performance and site safety remain the responsibility of the purchaser and installer, who must follow applicable standards and good practice.",
  },
  {
    heading: "Governing law and contact",
    body: "These terms are governed by the laws of India, with jurisdiction at New Delhi. For questions about these terms, contact kroadtechsafetysolutions@gmail.com or call +91 81301 55514.",
  },
];

export default function TermsConditions() {
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
            <li className="font-medium text-[#0B0B0B]">Terms & Conditions</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[900px] px-[clamp(20px,5vw,80px)] py-12 lg:py-20">
        <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
          Terms & Conditions<span className="text-[#E74725]">.</span>
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-[#5f5f5f]">
          Last updated: November 2026. These terms govern your use of the K
          Roadtech Safety Solutions website and enquiry services.
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
