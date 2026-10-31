const SITE = "https://roadtechsafetysolutions.in";

/**
 * Robots — allow all crawling, point to the sitemap.
 */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
