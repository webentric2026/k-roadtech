/**
 * Industries data — K Roadtech Safety Solutions.
 *
 * One entry per industry linked from the navbar dropdown. Slugs match the
 * `/industries/<slug>` hrefs in the shared navigation config. Copy stays
 * generic (applications, not specs) so it never contradicts the catalogue.
 */

import { IMAGES } from "@/assets/images";

export const INDUSTRY_PAGES = [
  {
    slug: "highways-expressways",
    name: "Highways & Expressways",
    tagline: "High-speed corridors, built for visibility.",
    description:
      "Highways and expressways carry fast, high-volume traffic across long distances. Clear delineation, night-time visibility, and early hazard warning help drivers stay in lane and react in time.",
    image: {
      src: IMAGES.highways,
      alt: "Multi-lane highway with overhead signage",
    },
    applications: [
      {
        title: "Edge & Lane Delineation",
        text: "Delineator posts and linear systems that keep carriageway edges and medians visible day and night.",
      },
      {
        title: "Night-Time Guidance",
        text: "Raised pavement markers, road studs, and reflectors that guide drivers after dark and in poor weather.",
      },
      {
        title: "Hazard Warning",
        text: "Chevron boards, hazard markers, and guardrail reflectors at curves, merges, and narrow sections.",
      },
      {
        title: "Direction & Gantry Signage",
        text: "Route markers, direction boards, and overhead signage for exits, lane guidance, and destinations.",
      },
    ],
    categoryIds: [
      "road-delineators-guide-posts",
      "road-reflectors-pavement-markers",
      "road-signage",
      "traffic-cones-barricading",
    ],
  },
  {
    slug: "urban-roads-streets",
    name: "Urban Roads & Streets",
    tagline: "Safer movement through busy city streets.",
    description:
      "Urban roads mix cars, buses, pedestrians, and cyclists at intersections, crossings, and narrow stretches. Compact, high-visibility products help organise this movement and calm traffic where it matters.",
    image: {
      src: IMAGES.roads,
      alt: "Urban road with traffic in the city",
    },
    applications: [
      {
        title: "Intersections & Crossings",
        text: "Regulatory and warning signs, along with speed control, where conflicting movements meet.",
      },
      {
        title: "Blind Corners",
        text: "Convex safety mirrors that open up visibility at tight turns, exits, and basement ramps.",
      },
      {
        title: "Lane Guidance",
        text: "Delineators, markers, and studs that define lanes, medians, and kerbs in low light.",
      },
      {
        title: "Temporary Diversions",
        text: "Cones and barricading accessories for road works, events, and short-term diversions.",
      },
    ],
    categoryIds: [
      "road-signage",
      "road-safety-mirrors",
      "speed-control-solutions",
      "traffic-cones-barricading",
    ],
  },
  {
    slug: "road-construction-maintenance",
    name: "Road Construction & Maintenance",
    tagline: "Work zones that protect workers and drivers.",
    description:
      "Construction and maintenance zones reshape traffic overnight. Clear temporary guidance and highly visible workers and equipment keep both road users and site crews safe around active work areas.",
    image: {
      src: IMAGES.construction,
      alt: "Active construction site with safety barriers",
    },
    applications: [
      {
        title: "Lane Closures & Diversions",
        text: "Cones, chains, and management plates that channel traffic safely around work areas.",
      },
      {
        title: "Worker Visibility",
        text: "Reflective jackets, cross belts, gloves, and tapes that keep crew visible in all conditions.",
      },
      {
        title: "Temporary Delineation",
        text: "Portable delineators and markers that define shifting alignments during staged works.",
      },
      {
        title: "Work-Zone Warning",
        text: "Warning signs and boards that alert drivers well before the work area begins.",
      },
    ],
    categoryIds: [
      "traffic-cones-barricading",
      "reflective-safety-wear",
      "road-delineators-guide-posts",
      "road-signage",
    ],
  },
  {
    slug: "parking-lots-garages",
    name: "Parking Lots & Garages",
    tagline: "Organised bays, calm circulation, fewer scrapes.",
    description:
      "Parking areas concentrate vehicle and pedestrian movement in tight spaces. Wheel stoppers, speed breakers, guards, and clear signage keep bays organised and circulation calm above and below ground.",
    image: {
      src: IMAGES.parking,
      alt: "Organised parking lot with marked bays",
    },
    applications: [
      {
        title: "Bay Organisation",
        text: "Wheel stoppers and parking studs that align vehicles and protect walls and equipment.",
      },
      {
        title: "Speed Calming",
        text: "Speed breakers and rumblers at entries, exits, ramps, and pedestrian crossings.",
      },
      {
        title: "Column & Corner Protection",
        text: "Corner guards, buffers, and dock bumpers that absorb low-speed impacts in tight structures.",
      },
      {
        title: "Wayfinding & Mirrors",
        text: "Directional and parking signs plus convex mirrors at blind ramps and tight turns.",
      },
    ],
    categoryIds: [
      "parking-management-solutions",
      "speed-control-solutions",
      "road-safety-mirrors",
      "road-signage",
    ],
  },
  {
    slug: "industrial-facilities",
    name: "Industrial Facilities",
    tagline: "Workplace safety, marked and lit.",
    description:
      "Factories and plants run around the clock with vehicles, machinery, and people sharing the same premises. Safety signage, emergency guidance, and protected routing help keep operations orderly and compliant.",
    image: {
      src: IMAGES.industrial,
      alt: "Industrial facility with organised movement zones",
    },
    applications: [
      {
        title: "Emergency Guidance",
        text: "Exit, fire equipment, and evacuation signage, including photoluminescent and LED options.",
      },
      {
        title: "Hazard Communication",
        text: "Prohibition, warning, and mandatory PPE signs for hazardous zones and equipment areas.",
      },
      {
        title: "Cable Routing",
        text: "Cable protectors that keep power and data lines safe across floors and walkways.",
      },
      {
        title: "Internal Traffic",
        text: "Convex mirrors and delineation where forklifts, trucks, and pedestrians cross paths.",
      },
    ],
    categoryIds: [
      "industrial-emergency-signage",
      "cable-protection-solutions",
      "road-safety-mirrors",
      "reflective-safety-wear",
    ],
  },
  {
    slug: "warehouses-logistics",
    name: "Warehouses & Logistics",
    tagline: "Docks, aisles, and racking — protected.",
    description:
      "Warehouses and logistics hubs combine loading docks, tall racking, and constant vehicle movement. Guards, bumpers, mirrors, and clear marking protect structures, goods, and people in high-tempo operations.",
    image: {
      src: IMAGES.industrial,
      alt: "Warehouse with organised loading and storage zones",
    },
    applications: [
      {
        title: "Loading Docks",
        text: "Dock bumpers that cushion trailers and protect dock faces during loading.",
      },
      {
        title: "Racking & Column Guards",
        text: "Corner guards and protective columns that shield structures from pallet and vehicle strikes.",
      },
      {
        title: "Aisle Safety",
        text: "Convex mirrors at blind aisle crossings and delineation for pedestrian walkways.",
      },
      {
        title: "Site Signage",
        text: "Directional, warning, and emergency signage across yards, docks, and storage areas.",
      },
    ],
    categoryIds: [
      "parking-management-solutions",
      "speed-control-solutions",
      "road-safety-mirrors",
      "industrial-emergency-signage",
    ],
  },
  {
    slug: "airports",
    name: "Airports",
    tagline: "Clear movement across airside and landside.",
    description:
      "Airports move aircraft, service vehicles, and passengers across runways, taxiways, terminals, and parking. Specialised signage and high-visibility guidance support safe, orderly movement in these controlled environments.",
    image: {
      src: IMAGES.airports,
      alt: "Airport terminal and runway area",
    },
    applications: [
      {
        title: "Directional & Facility Signs",
        text: "Airport authority, information, and facility signage across terminals and approach roads.",
      },
      {
        title: "Service Road Guidance",
        text: "Delineators, markers, and reflectors along airside and landside service routes.",
      },
      {
        title: "Terminal Safety",
        text: "Emergency exit and evacuation signage for concourses, stairwells, and parking structures.",
      },
      {
        title: "Night Visibility",
        text: "Reflective markers and studs that hold up guidance after dark and in low visibility.",
      },
    ],
    categoryIds: [
      "specialised-transportation-signage",
      "road-reflectors-pavement-markers",
      "road-delineators-guide-posts",
      "industrial-emergency-signage",
    ],
  },
  {
    slug: "railways",
    name: "Railways",
    tagline: "Stations, crossings, and trackside safety.",
    description:
      "Railway premises span stations, platforms, level crossings, and long trackside stretches. Reflective signage and warning boards help road users, passengers, and staff navigate these interfaces safely.",
    image: {
      src: IMAGES.railways,
      alt: "Railway tracks and station area",
    },
    applications: [
      {
        title: "Level Crossings",
        text: "Crossing signs, warning boards, and indicators for manned and unmanned crossings.",
      },
      {
        title: "Station Signage",
        text: "Platform, information, and directional signs that guide passenger movement.",
      },
      {
        title: "Trackside Delineation",
        text: "Reflectors and markers that define edges and hazards along rail corridors.",
      },
      {
        title: "Operational Indicators",
        text: "Speed, caution, whistle, and stop indicators that support safe rail operations.",
      },
    ],
    categoryIds: [
      "specialised-transportation-signage",
      "road-reflectors-pavement-markers",
      "road-signage",
      "industrial-emergency-signage",
    ],
  },
  {
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    tagline: "Safe, legible buildings for everyone inside.",
    description:
      "Offices, malls, and commercial complexes host daily footfall across lobbies, stairwells, basements, and parking. Exit signage, evacuation guidance, and parking products keep these buildings safe and easy to navigate.",
    image: {
      src: IMAGES.banks,
      alt: "Commercial building exterior",
    },
    applications: [
      {
        title: "Exit & Evacuation",
        text: "Exit signs, directional arrows, and escape route plans for floors and stairwells.",
      },
      {
        title: "Low-Light Guidance",
        text: "Photoluminescent tapes, dots, and route markers that guide movement during power failures.",
      },
      {
        title: "Basement & Parking",
        text: "Parking stoppers, corner guards, mirrors, and directional signs for basement levels.",
      },
      {
        title: "Accessible Navigation",
        text: "Accessibility and facility signage that helps every visitor find their way.",
      },
    ],
    categoryIds: [
      "industrial-emergency-signage",
      "road-signage",
      "parking-management-solutions",
      "tactile-paving-solutions",
    ],
  },
  {
    slug: "pedestrian-accessibility",
    name: "Pedestrian Accessibility",
    tagline: "Footpaths everyone can navigate with confidence.",
    description:
      "Footpaths, crossings, and public spaces should work for every pedestrian, including people with low vision. Tactile surfaces, accessible signage, and clear delineation make walking routes detectable and safe.",
    image: {
      src: IMAGES.schools,
      alt: "Pedestrian-friendly street with safe walking zones",
    },
    applications: [
      {
        title: "Tactile Guiding Surfaces",
        text: "Directional tiles and strips that trace safe walking paths through public spaces.",
      },
      {
        title: "Warning Surfaces",
        text: "Warning tiles and studs that signal crossings, platform edges, stairs, and hazards.",
      },
      {
        title: "Accessible Signage",
        text: "Wheelchair, parking, and facility signs that mark accessible routes and amenities.",
      },
      {
        title: "Crossing Safety",
        text: "Kerb markers, delineators, and mirrors that define crossings and calm nearby traffic.",
      },
    ],
    categoryIds: [
      "tactile-paving-solutions",
      "road-signage",
      "road-reflectors-pavement-markers",
      "road-safety-mirrors",
    ],
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    tagline: "Safe, stress-free movement for care environments.",
    description:
      "Hospitals run around the clock with patients, visitors, ambulances, and staff sharing the same premises. Clear directional signage, parking guidance, and emergency route markers keep movement calm even in stressful moments.",
    image: {
      src: IMAGES.hospitals,
      alt: "Hospital building entrance",
    },
    applications: [
      {
        title: "Directional & Department Signs",
        text: "Facility, information, and direction signs that guide visitors to departments and wards.",
      },
      {
        title: "Emergency Route Markers",
        text: "Exit signs and photoluminescent route marking for stairwells and evacuation paths.",
      },
      {
        title: "Parking & Drop-Off Guidance",
        text: "Parking signs, wheel stoppers, and speed breakers across lots and ambulance bays.",
      },
      {
        title: "Accessible Navigation",
        text: "Accessibility signage and tactile guidance for patients and visitors with limited mobility.",
      },
    ],
    categoryIds: [
      "industrial-emergency-signage",
      "road-signage",
      "parking-management-solutions",
      "tactile-paving-solutions",
    ],
  },
  {
    slug: "schools",
    name: "Schools",
    tagline: "Protecting students in school zones.",
    description:
      "School zones concentrate young pedestrians, buses, and parent vehicles twice a day. Speed breakers, warning signs, mirrors, and crosswalk safety products slow traffic and protect students where they walk.",
    image: {
      src: IMAGES.schools,
      alt: "School building and slow-traffic school zone",
    },
    applications: [
      {
        title: "School-Zone Calming",
        text: "Speed breakers, rumblers, and warning signs that slow vehicles near school gates.",
      },
      {
        title: "Crosswalk Safety",
        text: "Pedestrian crossing signs and kerb markers that define safe student crossings.",
      },
      {
        title: "Gate & Corner Visibility",
        text: "Convex mirrors at blind entries, exits, and basement ramps around the campus.",
      },
      {
        title: "Pickup & Parking Order",
        text: "Wheel stoppers, delineators, and directional signs for buses and parent vehicles.",
      },
    ],
    categoryIds: [
      "speed-control-solutions",
      "road-signage",
      "road-safety-mirrors",
      "parking-management-solutions",
    ],
  },
];

/**
 * Lookup helpers.
 */
export function getIndustryBySlug(slug) {
  return INDUSTRY_PAGES.find((i) => i.slug === slug);
}

export function getIndustrySlugs() {
  return INDUSTRY_PAGES.map((i) => i.slug);
}
