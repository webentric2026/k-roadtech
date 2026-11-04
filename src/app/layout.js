import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_pages/shared/components/Navbar";
import Footer from "@/app/_pages/shared/components/Footer";
import { QuoteProvider } from "@/app/_pages/shared/components/QuotePopup";
import AosInit from "@/app/_pages/shared/components/AosInit";
import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  DEFAULT_OG_IMAGE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  getSiteKeywords,
} from "@/app/lib/seo";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Road Safety Products Manufacturer in Delhi, India | K Roadtech",
    template: "%s | K Roadtech Delhi",
  },
  description:
    "K Roadtech Safety Solutions manufactures road safety products in Delhi — road studs, solar studs, delineators, tactile paving, speed breakers, convex mirrors, traffic cones, road signage, parking and cable protection solutions supplied across India.",
  // Every product + category name is injected as a keyword (see lib/seo.js).
  keywords: getSiteKeywords(),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/apple-icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Road Safety Products Manufacturer in Delhi, India | K Roadtech",
    description:
      "Road studs, solar studs, delineators, tactile paving, speed breakers, convex mirrors, traffic cones, road signage, parking and cable protection — manufactured in Delhi, supplied across India.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: "K Roadtech Safety Solutions — Road Safety Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Safety Products Manufacturer in Delhi, India | K Roadtech",
    description:
      "Road safety products manufactured in Delhi — studs, delineators, tactile paving, signage, parking solutions.",
    images: [DEFAULT_OG_IMAGE],
  },
  category: "Road Safety Equipment",
};

export const viewport = {
  themeColor: "#E74725",
  width: "device-width",
  initialScale: 1,
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#business`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  image: DEFAULT_OG_IMAGE,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30/A, Guru Gobind Singh Nagar, Nilothi Extn",
    addressLocality: "New Delhi",
    postalCode: "110041",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}#business` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <AosInit />
        <QuoteProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
