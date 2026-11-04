const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://roadsafetysolutions.in";

/**
 * Robots — allow all crawling, point to the sitemap, keep API/_next out.
 * Google Search Console reads this file at /robots.txt.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
