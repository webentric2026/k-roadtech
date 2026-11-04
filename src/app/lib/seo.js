import {
  ALL_PRODUCTS,
  PRODUCT_CATEGORIES,
} from "@/app/_pages/products/data/products";

/**
 * Central SEO helpers — single source of truth for the canonical site URL,
 * shared keywords, and structured-data builders.
 *
 * Product names are used as search keywords everywhere: the root layout
 * injects every product + category name into `keywords`, and detail pages
 * add per-product variants (name + model + category + "India/Delhi/price").
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://roadsafetysolutions.in";

export const SITE_NAME = "K Roadtech Safety Solutions";
export const SITE_SHORT_NAME = "K Roadtech";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/apple-icon.png`;
export const CONTACT_EMAIL = "kroadtechsafetysolutions@gmail.com";
export const CONTACT_PHONE = "+91-81301-55514";

/** Every product name — used as a search keyword across the site. */
export function getAllProductNames() {
  return ALL_PRODUCTS.map((p) => p.name);
}

/** Every category + subcategory name. */
export function getAllCategoryNames() {
  const cats = PRODUCT_CATEGORIES.map((c) => c.name);
  const subs = [
    ...new Set(ALL_PRODUCTS.map((p) => p.subcategory).filter(Boolean)),
  ];
  return [...cats, ...subs];
}

/** Site-wide keyword pool: products + categories + intent modifiers. */
export function getSiteKeywords() {
  const names = getAllProductNames();
  const cats = getAllCategoryNames();
  const geo = [
    "road safety products India",
    "road safety equipment Delhi",
    "road safety products manufacturer Delhi",
    "road safety products supplier India",
    "traffic safety products India",
    "road safety equipment supplier Delhi NCR",
    "K Roadtech",
    "K Roadtech Delhi",
    "K Roadtech Safety Solutions",
  ];
  const seen = new Set();
  return [...names, ...cats, ...geo].filter((k) => {
    const key = k.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Per-product keyword set for a detail page. */
export function getProductKeywords(product) {
  if (!product) return [];
  const base = [
    product.name,
    `${product.name} India`,
    `${product.name} Delhi`,
    `${product.name} price India`,
    `${product.name} supplier`,
    `${product.name} manufacturer`,
  ];
  if (product.modelNumber) {
    base.push(
      `${product.name} ${product.modelNumber}`,
      `${product.modelNumber} ${product.category}`
    );
  }
  if (product.category) {
    base.push(
      product.category,
      `${product.category} India`,
      `${product.category} Delhi`
    );
  }
  if (product.subcategory) base.push(product.subcategory);
  return [...new Set(base)];
}

/** BreadcrumbList JSON-LD for detail pages. */
export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/** Product JSON-LD (Google Merchant / rich-result compatible subset). */
export function buildProductJsonLd(product, categoryId) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: { "@type": "Brand", name: SITE_SHORT_NAME },
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/products/${product.id}`,
    ...(product.modelNumber
      ? { model: product.modelNumber, mpn: product.modelNumber }
      : {}),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.id}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE_NAME },
    },
    isRelatedTo: undefined,
    ...(categoryId
      ? { isPartOf: `${SITE_URL}/products?category=${categoryId}` }
      : {}),
  };
}
