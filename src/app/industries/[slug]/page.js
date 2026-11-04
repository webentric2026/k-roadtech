import { notFound } from "next/navigation";
import IndustryPage from "@/app/_pages/industries/IndustryPage";
import {
  getIndustryBySlug,
  getIndustrySlugs,
} from "@/app/_pages/industries/data/industries";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/app/lib/seo";

/**
 * Industry detail page — one consistent template per navbar industry.
 */
export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  const description = `${industry.tagline} ${industry.description} K Roadtech supplies road safety & signage products across India.`;
  return {
    title: `${industry.name} — Road Safety Solutions in India`,
    description,
    keywords: [
      industry.name,
      `${industry.name} road safety India`,
      `${industry.name} signage Delhi`,
      "road safety products India",
    ],
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
    openGraph: {
      title: `${industry.name} | K Roadtech`,
      description: industry.tagline,
      type: "website",
      url: `${SITE_URL}/industries/${slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, alt: industry.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} | K Roadtech`,
      description: industry.tagline,
    },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryPage industry={industry} />;
}
