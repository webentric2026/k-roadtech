import { ALL_PRODUCTS } from "@/app/_pages/products/data/products";
import { getIndustrySlugs } from "@/app/_pages/industries/data/industries";
import { getBlogSlugs } from "@/app/_pages/blogs/data/blogs";

const SITE = "https://roadtechsafetysolutions.in";

/**
 * Sitemap — static pages plus every product, industry, and blog URL.
 */
export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/products",
    "/industries",
    "/blogs",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${SITE}${route || "/"}`, changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 })),
    ...ALL_PRODUCTS.map((p) => ({
      url: `${SITE}/products/${p.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...getIndustrySlugs().map((slug) => ({
      url: `${SITE}/industries/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...getBlogSlugs().map((slug) => ({
      url: `${SITE}/blogs/${slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
