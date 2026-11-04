import HomePage from "./_pages/home/HomePage";
import { SITE_URL, DEFAULT_OG_IMAGE, getSiteKeywords } from "@/app/lib/seo";

export const metadata = {
  title: "Road Safety Products Manufacturer in Delhi, India",
  description:
    "K Roadtech manufactures road studs, solar studs, delineators, tactile paving, speed breakers, convex mirrors, traffic cones, road signage, parking and cable protection products in Delhi — supplied across India. Request a quote.",
  keywords: getSiteKeywords(),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Road Safety Products Manufacturer in Delhi, India | K Roadtech",
    description:
      "Road studs, delineators, tactile paving, speed breakers, mirrors, cones, signage, parking & cable protection — Delhi-made, supplied across India.",
    type: "website",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "K Roadtech Safety Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Safety Products Manufacturer in Delhi, India | K Roadtech",
    description:
      "Delhi-manufactured road safety products — studs, delineators, tactile paving, signage, parking solutions.",
  },
};

export default function Home() {
  return <HomePage />;
}
