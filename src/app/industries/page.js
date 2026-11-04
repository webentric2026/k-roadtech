import IndustriesPage from "@/app/_pages/industries/IndustriesPage";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

export const metadata = {
  title: "Industries We Serve — Highways, Parking, Airports, Railways",
  description:
    "Road safety, signage & traffic management products for highways, urban roads, construction, parking, industrial facilities, airports, railways, schools & hospitals across India.",
  keywords: [
    "road safety highways India",
    "parking safety products malls",
    "airport signage India",
    "railway safety signage",
    "school zone safety products",
    "hospital safety signage Delhi",
  ],
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: "Industries We Serve | K Roadtech",
    description:
      "Highways, urban roads, construction, parking, industrial, airports, railways & more.",
    type: "website",
    url: `${SITE_URL}/industries`,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Industries served by K Roadtech" }],
  },
};

export default function Industries() {
  return <IndustriesPage />;
}
