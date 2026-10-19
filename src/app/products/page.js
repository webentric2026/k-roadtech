import Link from "next/link";
import { ALL_PRODUCTS, getCategoryById } from "@/app/_pages/products/data/products";
import ProductsListing from "@/app/_pages/products/components/ProductsListing";
import ProductEnquiryCTA from "@/app/_pages/products/components/ProductEnquiryCTA";

/**
 * Products page — catalogue with category list, search, filters,
 * product grid, and enquiry CTA.
 * Reads ?category= from the URL (server-side) to pre-filter products when a
 * category is selected from the navbar.
 */
export const dynamic = "force-dynamic";

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const rawCategory = resolvedParams?.category;
  const catId = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;
  const urlCategory = catId ? getCategoryById(catId) : null;
  const initialProducts = urlCategory
    ? ALL_PRODUCTS.filter((p) => p.category === urlCategory.name)
    : ALL_PRODUCTS;

  const activeCategoryId = catId;

  return (
    <main className="flex flex-1 flex-col bg-white text-[#0B0B0B]">
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
