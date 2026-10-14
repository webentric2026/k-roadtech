/**
 * Hero slider content — five supplied slides.
 *
 * Shape per slide: { id, category, eyebrow, title, accent, description,
 *   primaryCta { label, href }, secondaryCta { label, href },
 *   featuredProducts[], image { src, mobileSrc, alt, objectPosition } }
 *
 * Backgrounds are the supplied `images/heroslides` artworks plus
 * generated mobile portraits. Primary hrefs reuse the category URL
 * conventions from `@/app/_pages/shared/data/navigation.js`; every
 * secondary CTA points at `/quote`, the project's enquiry page.
 */

import { IMAGES } from "@/assets/images";

export const AUTOPLAY_MS = 6500;

const QUOTE = { label: "Request a Quote", href: "/quote" };

export const SLIDES = [
  {
    id: "company-introduction",
    category: "Company Introduction",
    eyebrow: "K Roadtech Safety Solutions",
    title: "Safer Roads. Smarter Solutions.",
    accent: "Smarter Solutions.",
    description:
      "Discover comprehensive road safety, traffic management, and signage solutions designed to improve road visibility, guide commuters, and support safer infrastructure. From essential safety equipment to advanced signage systems, we provide solutions for diverse road and infrastructure requirements.",
    primaryCta: { label: "Explore Products", href: "/products" },
    secondaryCta: QUOTE,
    featuredProducts: [
      "Traffic Safety Equipment",
      "Road Signage Systems",
      "Reflective Safety Wear",
    ],
    image: {
      src: IMAGES.slideMain,
      mobileSrc: IMAGES.slideMainMobile,
      alt: "Empty highway at sunrise with road signage",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "road-safety-equipment",
    category: "Road Safety Equipment",
    eyebrow: "Traffic Management Range",
    title: "Engineered for Safety. Built for the Road.",
    accent: "Built for the Road.",
    description:
      "Explore a comprehensive range of road safety equipment, including traffic cones, delineators, road studs, raised pavement markers, speed breakers, and convex safety mirrors. Designed for effective traffic management, enhanced visibility, and safer movement across highways, urban roads, and infrastructure projects.",
    primaryCta: {
      label: "Explore Road Safety Equipment",
      href: "/products/road-safety-products",
    },
    secondaryCta: QUOTE,
    featuredProducts: [
      "Traffic Safety Cones",
      "Road Delineators",
      "Raised Pavement Markers",
      "Road Studs",
      "Speed Breakers",
      "Convex Safety Mirrors",
    ],
    image: {
      src: IMAGES.slideEquipment,
      mobileSrc: IMAGES.slideEquipmentMobile,
      alt: "Traffic cones, delineators, speed breaker, studs and safety mirror on a highway",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "road-safety-jackets",
    category: "Road Safety Jackets",
    eyebrow: "High-Visibility Workwear",
    title: "Be Visible. Stay Protected.",
    accent: "Stay Protected.",
    description:
      "Discover high-visibility safety jackets and reflective workwear designed to improve visibility in demanding working environments. Featuring reflective elements and fluorescent materials, these products help road workers, construction teams, and industrial professionals remain more visible during roadside operations and other safety-critical activities.",
    primaryCta: {
      label: "Explore Safety Wear",
      href: "/products/reflective-safety-wear",
    },
    secondaryCta: QUOTE,
    featuredProducts: [
      "Reflective Safety Jackets",
      "Reflective Cross Belts",
      "Reflective Gloves",
      "Reflective Tapes",
    ],
    image: {
      src: IMAGES.slideJackets,
      mobileSrc: IMAGES.slideJacketsMobile,
      alt: "Road worker in a high-visibility jacket on a highway site",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "photoluminescent-led-signs",
    category: "Photoluminescent & LED Signs",
    eyebrow: "Illuminated Signage",
    title: "Visibility When It Matters Most.",
    accent: "When It Matters Most.",
    description:
      "Explore photoluminescent safety signs and LED signage designed to communicate essential information and support effective wayfinding. From emergency exit signs to illuminated directional indicators, discover signage solutions that help improve visibility and guide people through commercial, industrial, and public environments.",
    primaryCta: {
      label: "Explore Illuminated Signs",
      href: "/products/industrial-and-emergency-signage",
    },
    secondaryCta: QUOTE,
    featuredProducts: [
      "Photoluminescent Safety Signs",
      "LED Edge-Light Exit Signs",
      "Emergency Exit Signs",
      "Fire Safety Signs",
    ],
    image: {
      src: IMAGES.slideGlowSigns,
      mobileSrc: IMAGES.slideGlowSignsMobile,
      alt: "LED exit signs and photoluminescent safety signs in daylight",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "overhead-signboards",
    category: "Overhead Signboards & Road Signboards",
    eyebrow: "Highway Signage Systems",
    title: "Clear Directions. Safer Journeys.",
    accent: "Safer Journeys.",
    description:
      "Discover a diverse range of road signage solutions, including overhead signboards, cantilever signage, highway route markers, directional signs, and warning signs. Designed to communicate critical information clearly, these signage systems help guide road users, improve route awareness, and support organized traffic movement across highways, intersections, and urban road networks.",
    primaryCta: {
      label: "Explore Road Signage",
      href: "/products/road-signage",
    },
    secondaryCta: QUOTE,
    featuredProducts: [
      "Overhead Signboards",
      "Cantilever Signage",
      "Highway Route Markers",
      "Directional Signs",
      "Warning Signs",
    ],
    image: {
      src: IMAGES.slideSignage,
      mobileSrc: IMAGES.slideSignageMobile,
      alt: "Overhead highway signboards showing Delhi, Ghaziabad and Meerut directions",
      objectPosition: "50% 50%",
    },
  },
];
