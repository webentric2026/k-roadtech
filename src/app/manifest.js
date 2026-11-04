/**
 * Web App Manifest — required for installability + richer Google results.
 * Served at /manifest.webmanifest (referenced from root layout metadata).
 */
export default function manifest() {
  return {
    name: "K Roadtech Safety Solutions — Road Safety Products Delhi, India",
    short_name: "K Roadtech",
    description:
      "Road studs, delineators, tactile paving, speed breakers, mirrors, cones, signage, parking and cable protection — manufactured in Delhi, supplied across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E74725",
    lang: "en-IN",
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
