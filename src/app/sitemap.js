import {
  ALL_PRODUCTS,
  PRODUCT_CATEGORIES,
} from "@/app/_pages/products/data/products";
import { getIndustrySlugs } from "@/app/_pages/industries/data/industries";
import { getBlogSlugs } from "@/app/_pages/blogs/data/blogs";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://roadsafetysolutions.in";

/**
 * Sitemap — static pages plus every product, industry, and blog URL.
 * Product names each get their own canonical URL, which is what makes
 * every product discoverable as a search keyword in Google Search Console.
 * `lastModified` keeps crawl budget focused on fresh content.
 */
export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { route: "/products", priority: 0.9, changeFrequency: "weekly" },
    { route: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { route: "/blogs", priority: 0.8, changeFrequency: "weekly" },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { route: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map(({ route, ...rest }) => ({
      url: `${SITE}${route || "/"}`,
      lastModified: now,
      ...rest,
    })),
    // Category-filtered listing URLs (canonical discovery for category keywords)
    ...PRODUCT_CATEGORIES.map((c) => ({
      url: `${SITE}/products?category=${c.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    // One URL per product — every product name becomes an indexable keyword page
    ...ALL_PRODUCTS.map((p) => ({
      url: `${SITE}/products/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...getIndustrySlugs().map((slug) => ({
      url: `${SITE}/industries/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...getBlogSlugs().map((slug) => ({
      url: `${SITE}/blogs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
