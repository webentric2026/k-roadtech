import IndustryHero from "./components/IndustryHero";
import {
  IndustryApplications,
  IndustryProducts,
  OtherIndustries,
} from "./components/IndustryDetailSections";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";
import { INDUSTRY_PAGES } from "./data/industries";
import { getCategoryById } from "@/app/_pages/products/data/products";

/**
 * Industry detail page composition — hero, applications, recommended
 * product categories, other industries, and enquiry CTA.
 */
export default function IndustryPage({ industry }) {
  const categories = industry.categoryIds
    .map((id) => getCategoryById(id))
    .filter(Boolean)
    .map((cat) => ({
      id: cat.id,
      name: cat.name,
      description: cat.description,
    }));

  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <IndustryHero
        eyebrow="Industries"
        title={industry.name}
        description={`${industry.tagline} ${industry.description}`}
        image={industry.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      <IndustryApplications applications={industry.applications} />

      <IndustryProducts categories={categories} />

      <OtherIndustries industries={INDUSTRY_PAGES} currentSlug={industry.slug} />

      <ProductEnquiryCTA />
    </main>
  );
}
