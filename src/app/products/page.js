import Link from "next/link";
import { ALL_PRODUCTS, getCategoryById } from "@/app/_pages/products/data/products";
import ProductsListing from "@/app/_pages/products/components/ProductsListing";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  getAllProductNames,
} from "@/app/lib/seo";

/**
 * Products page — catalogue with category list, search, filters,
 * product grid, and enquiry CTA.
 * Reads ?category= from the URL (server-side) to pre-filter products when a
 * category is selected from the navbar.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const resolvedParams = await searchParams;
  const rawCategory = resolvedParams?.category;
  const catId = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;
  const category = catId ? getCategoryById(catId) : null;
  if (category) {
    const names = ALL_PRODUCTS.filter((p) => p.category === category.name).map(
      (p) => p.name
    );
    return {
      title: `${category.name} Manufacturer in Delhi, India`,
      description: `${category.description} Buy ${names.slice(0, 5).join(", ")} and more — manufactured by K Roadtech in Delhi, supplied across India.`,
      keywords: [
        category.name,
        `${category.name} India`,
        `${category.name} Delhi`,
        `${category.name} manufacturer`,
        `${category.name} supplier`,
        ...names,
      ],
      alternates: { canonical: `${SITE_URL}/products?category=${category.id}` },
      openGraph: {
        title: `${category.name} | K Roadtech Delhi`,
        description: category.description,
        type: "website",
        url: `${SITE_URL}/products?category=${category.id}`,
        images: [{ url: DEFAULT_OG_IMAGE, alt: category.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${category.name} | K Roadtech`,
        description: category.description,
      },
    };
  }
  return {
    title: "All Road Safety Products — Manufacturer in Delhi, India",
    description:
      "Browse the full K Roadtech catalogue — tactile paving, delineators, road reflectors & studs, safety mirrors, traffic cones, speed breakers, road signage, industrial & emergency signage, parking and cable protection, safety wear. Manufactured in Delhi, supplied across India.",
    keywords: [
      "all road safety products",
      "road safety products catalogue India",
      ...getAllProductNames(),
    ],
    alternates: { canonical: `${SITE_URL}/products` },
    openGraph: {
      title: "All Products | K Roadtech Delhi",
      description:
        "Full catalogue — tactile paving, delineators, reflectors, mirrors, cones, speed control, signage, parking and safety wear.",
      type: "website",
      url: `${SITE_URL}/products`,
      images: [{ url: DEFAULT_OG_IMAGE, alt: "K Roadtech product catalogue" }],
    },
  };
}

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const rawCategory = resolvedParams?.category;
  const catId = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;
  const urlCategory = catId ? getCategoryById(catId) : null;
  const initialProducts = urlCategory
    ? ALL_PRODUCTS.filter((p) => p.category === urlCategory.name)
    : ALL_PRODUCTS;

  const activeCategoryId = catId;

  // ItemList structured data — tells Google every product name on this page.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: urlCategory ? `${urlCategory.name} — Products` : "All Road Safety Products",
    itemListElement: initialProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/products/${p.id}`,
    })),
  };

  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-4 lg:py-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-[#5f5f5f]">
            <li>
              <Link
                href="/"
                className="hover:text-[#E74725] transition-colors focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#E74725] transition-colors focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                Products
              </Link>
            </li>
            {activeCategoryId && (
              <>
                <li aria-hidden="true" className="text-[#A3A3A3]">
                  /
                </li>
                <li className="text-[#0B0B0B] font-medium">
                  {getCategoryById(activeCategoryId)?.name ?? "Category"}
                </li>
              </>
            )}
          </ol>
        </div>
      </nav>



      <ProductsListing
        initialProducts={initialProducts}
        defaultCategory={urlCategory?.name ?? null}
      />

      <ProductEnquiryCTA />
    </main>
  );
}
