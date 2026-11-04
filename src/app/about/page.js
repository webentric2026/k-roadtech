import AboutPage from "@/app/_pages/about/AboutPage";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

export const metadata = {
  title: "About Us — Road Safety Manufacturer Delhi, India",
  description:
    "K Roadtech Safety Solutions, based in New Delhi and serving across India — manufacturer of road studs, delineators, tactile paving, speed breakers, signage, parking & cable protection.",
  keywords: [
    "about K Roadtech",
    "road safety company Delhi",
    "road safety manufacturer India",
    "road safety solutions Delhi NCR",
    "traffic safety company New Delhi",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About K Roadtech Safety Solutions",
    description:
      "Delhi-based road safety manufacturer serving highways, institutions & industry across India.",
    type: "website",
    url: `${SITE_URL}/about`,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "About K Roadtech" }],
  },
};

export default function About() {
  return <AboutPage />;
}
