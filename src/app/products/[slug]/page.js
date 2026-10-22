import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets/images";
import {
  ALL_PRODUCTS,
  getProductBySlug,
  PRODUCT_CATEGORIES,
} from "@/app/_pages/products/data/products";
import ProductCard from "@/app/_pages/products/components/ProductCard";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Product detail page — shows product info with a contact enquiry path.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — K Roadtech Safety Solutions`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  if (!product) notFound();

  const category = PRODUCT_CATEGORIES.find((c) => c.name === product.category);
  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

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
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li>
              <Link
                href={`/products?category=${category?.id}`}
                className="hover:text-[#E74725] transition-colors focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#A3A3A3]">
              /
            </li>
            <li className="text-[#0B0B0B] font-medium">{product.name}</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24 items-start">
          {/* Left: product image */}
          <div className="flex flex-col gap-4">
            <figure className="relative overflow-hidden rounded-[4px] border border-black/10 bg-[#F5F5F5] shadow-[0_20px_40px_rgba(0,0,0,0.10)] aspect-[4/3]">
              {product.image && IMAGES.productCutouts?.[product.image] ? (
                <Image
                  src={IMAGES.productCutouts[product.image]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-sm border border-dashed border-black/10 text-[11px] font-medium tracking-[0.14em] text-[#A3A3A3] uppercase">
                  Image
                </div>
              )}
            </figure>
            <Link
              href="/contact"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-[24px] text-[14.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:justify-center"
            >
              Request Quote for {product.name}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: product details */}
          <div className="space-y-8">
            <div>
              <h1 className="max-w-[40ch] text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
                {product.name}<span className="text-[#E74725]">.</span>
              </h1>
              {product.modelNumber && (
                <p className="mt-3 text-[14px] font-semibold text-[#0B0B0B]">
                  Model: {product.modelNumber}
                </p>
              )}
              {product.subcategory && (
                <p className="mt-2 text-[13px] text-[#5f5f5f]">
                  {product.subcategory}
                </p>
              )}
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="mb-4 text-[16px] font-bold tracking-tight text-[#0B0B0B]">
                Overview
              </h3>
              <p className="text-[15px] leading-7 text-[#5f5f5f]">
                {product.description || "No description available for this product."}
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="mb-4 text-[16px] font-bold tracking-tight text-[#0B0B0B]">
                Product Details
              </h3>
              <dl className="overflow-hidden rounded-[4px] border border-black/10">
                <div className="flex flex-col gap-1 bg-[#F5F5F5] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="text-[13px] font-semibold tracking-wide text-[#5f5f5f] uppercase">
                    Category
                  </dt>
                  <dd className="text-[14px] font-medium text-[#0B0B0B]">
                    {product.category}
                  </dd>
                </div>
                {product.subcategory && (
                  <div className="flex flex-col gap-1 border-t border-black/10 bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                    <dt className="text-[13px] font-semibold tracking-wide text-[#5f5f5f] uppercase">
                      Group
                    </dt>
                    <dd className="text-[14px] font-medium text-[#0B0B0B]">
                      {product.subcategory}
                    </dd>
                  </div>
                )}
                {product.modelNumber && (
                  <div className="flex flex-col gap-1 border-t border-black/10 bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                    <dt className="text-[13px] font-semibold tracking-wide text-[#5f5f5f] uppercase">
                      Model Number
                    </dt>
                    <dd className="text-[14px] font-medium text-[#0B0B0B]">
                      {product.modelNumber}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="mb-4 text-[16px] font-bold tracking-tight text-[#0B0B0B]">
                Enquiry
              </h3>
              <p className="mb-4 text-[15px] leading-7 text-[#5f5f5f]">
                Request a quotation for this product. Our team will respond
                with pricing and availability.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-[28px] text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Submit Enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section aria-label="Related products" className="w-full bg-[#F5F5F5] text-[#0B0B0B]">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-[20ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] font-bold tracking-[-0.02em]">
                Related Products<span className="text-[#E74725]">.</span>
              </h2>
              <Link
                href={`/products?category=${category?.id}`}
                className="group inline-flex items-center gap-2 rounded-sm text-[14px] font-semibold text-[#E74725] transition-colors hover:text-[#c93a1c] focus-visible:outline-2 focus-visible:outline-[#E74725]"
              >
                More in {product.category}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
