/**
 * Industries We Serve — content for the home-page slider.
 *
 * Shape per industry: { id, title, description, image { src, alt } }
 * Images come from the `IMAGES` registry (`src/assets/images/industries/`).
 */

import { IMAGES } from "@/assets/images";

export const INDUSTRIES = [
  {
    id: "highways-expressways",
    title: "Highways & Expressways",
    description:
      "High-visibility signage, delineators, road studs and crash protection built for high-speed corridors and long-distance traffic.",
    image: {
      src: IMAGES.highways,
      alt: "Multi-lane highway with overhead signage",
    },
  },
  {
    id: "parking-lots",
    title: "Parking Lots",
    description:
      "Directional signs, speed breakers, wheel stoppers and reflective markers that keep parking areas organised, visible and safe.",
    image: {
      src: IMAGES.parking,
      alt: "Organised parking lot with marked bays",
    },
  },
  {
    id: "airports",
    title: "Airports",
    description:
      "Durable signage, guidance markers and safety equipment that support clear movement across runways, taxiways and terminal zones.",
    image: {
      src: IMAGES.airports,
      alt: "Airport terminal and runway area",
    },
  },
  {
    id: "urban-roads-streets",
    title: "Urban Roads & Streets",
    description:
      "Traffic signs, convex mirrors, cones and lane guidance products designed for intersections, streets and busy city movement.",
    image: {
      src: IMAGES.roads,
      alt: "Urban road with traffic in the city",
    },
  },
  {
    id: "industrial-facilities",
    title: "Industrial Facilities",
    description:
      "Safety signage, floor guidance, mirrors and protective equipment for factories, warehouses and plant movement zones.",
    image: {
      src: IMAGES.industrial,
      alt: "Industrial facility with organised movement zones",
    },
  },
  {
    id: "construction-sites",
    title: "Construction Sites",
    description:
      "Barriers, cones, warning signs and high-visibility wear that protect workers and guide traffic around active work zones.",
    image: {
      src: IMAGES.construction,
      alt: "Active construction site with safety barriers",
    },
  },
  {
    id: "railways",
    title: "Railways",
    description:
      "Reflective signage, warning boards and delineation products for stations, level crossings and rail-side safety zones.",
    image: {
      src: IMAGES.railways,
      alt: "Railway tracks and station area",
    },
  },
  {
    id: "schools",
    title: "Schools",
    description:
      "Speed breakers, warning signs, convex mirrors and crosswalk safety products that protect students in school zones.",
    image: {
      src: IMAGES.schools,
      alt: "School building and slow-traffic school zone",
    },
  },
  {
    id: "hospitals",
    title: "Hospitals",
    description:
      "Clear directional signage, parking guidance and emergency route markers for safe, stress-free hospital movement.",
    image: {
      src: IMAGES.hospitals,
      alt: "Hospital building entrance",
    },
  },
  {
    id: "banks",
    title: "Banks",
    description:
      "Indoor and outdoor signage, queue guidance and parking safety products for secure, well-organised banking premises.",
    image: {
      src: IMAGES.banks,
      alt: "Bank building exterior",
    },
  },
];
