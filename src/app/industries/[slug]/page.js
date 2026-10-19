import { notFound } from "next/navigation";
import IndustryPage from "@/app/_pages/industries/IndustryPage";
import {
  getIndustryBySlug,
  getIndustrySlugs,
} from "@/app/_pages/industries/data/industries";

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
  return {
    title: `${industry.name} — K Roadtech Safety Solutions`,
    description: `${industry.tagline} ${industry.description}`,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryPage industry={industry} />;
}
