import BlogsPage from "@/app/_pages/blogs/BlogsPage";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

export const metadata = {
  title: "Blogs — Road Safety Insights India",
  description:
    "Practical guides on road safety products, signage & traffic management for India — road studs, speed breakers, mirrors, signage & more from Delhi-based K Roadtech.",
  keywords: [
    "road safety blog India",
    "traffic safety products India",
    "road safety products Delhi supplier",
    "speed breaker guide India",
    "road studs guide India",
    "K Roadtech blog",
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: "Blogs — Road Safety Insights | K Roadtech",
    description:
      "Guides on road safety products & traffic management for Indian roads and facilities.",
    type: "website",
    url: `${SITE_URL}/blogs`,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "K Roadtech blogs" }],
  },
};

export default function Blogs() {
  return <BlogsPage />;
}
