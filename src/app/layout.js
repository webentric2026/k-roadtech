import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_pages/shared/components/Navbar";
import Footer from "@/app/_pages/shared/components/Footer";
import { QuoteProvider } from "@/app/_pages/shared/components/QuotePopup";
import AosInit from "@/app/_pages/shared/components/AosInit";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://roadtechsafetysolutions.in"),
  title: {
    default: "K Roadtech — Road Safety Solutions Delhi",
    template: "%s | K Roadtech Delhi",
  },
  description:
    "K Roadtech Safety Solutions manufactures road safety products in Delhi — road studs, delineators, tactile paving, speed breakers, signage, parking and cable protection solutions across India.",
  keywords: [
    "road safety products India",
    "road safety equipment Delhi",
    "road studs",
    "tactile paving",
    "speed breakers",
    "road signage",
    "K Roadtech",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "K Roadtech Safety Solutions",
    title: "K Roadtech — Road Safety Solutions Delhi",
    description:
      "Road studs, delineators, tactile paving, speed breakers, signage, parking and cable protection solutions — manufactured in Delhi, supplied across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Roadtech — Road Safety Solutions Delhi",
    description:
      "Road safety products manufactured in Delhi — studs, delineators, tactile paving, signage, parking solutions.",
  },
};

export const viewport = {
  themeColor: "#E74725",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "K Roadtech Safety Solutions",
  url: "https://roadtechsafetysolutions.in",
  email: "kroadtechsafetysolutions@gmail.com",
  telephone: "+91-81301-55514",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30/A, Guru Gobind Singh Nagar, Nilothi Extn",
    addressLocality: "New Delhi",
    postalCode: "110041",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
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
