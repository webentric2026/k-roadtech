/**
 * Central navigation configuration for Webentric.
 * Data-driven so categories / products can be updated without touching components.
 */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasMenu: "products" },
  { label: "Industries", href: "/industries", hasMenu: "industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const CTA = { label: "Get a Quote", href: "/quote" };

export const CONTACT_META = {
  email: "amitroadsafety@gmail.com",
  phone: "+91 98715 47037",
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function withSlugs(categories) {
  return categories.map((cat) => {
    const categorySlug = slugify(cat.name);
    return {
      ...cat,
      slug: categorySlug,
      href: `/products/${categorySlug}`,
      subcategories: cat.subcategories.map((sub) => {
        const subSlug = slugify(sub.name);
        return {
          ...sub,
          slug: subSlug,
          href: `/products/${categorySlug}/${subSlug}`,
          products: (sub.products || []).map((p) => {
            const pSlug = slugify(p.name);
            return {
              ...p,
              slug: pSlug,
              href: `/products/${categorySlug}/${subSlug}/${pSlug}`,
            };
          }),
        };
      }),
    };
  });
}

export const PRODUCT_CATEGORIES = withSlugs([
  {
    name: "Road Safety Products",
    subcategories: [
      {
        name: "Road Reflectors & Pavement Markers",
        products: [
          { name: "Aluminium Road Stud" },
          { name: "Plastic Road Stud with Shank" },
          { name: "3M Raised Pavement Marker" },
        ],
      },
      {
        name: "Delineators & Guide Posts",
        products: [
          { name: "Flexible Delineator Post" },
          { name: "Hazard Marker Post" },
          { name: "Guide Post with Reflector" },
        ],
      },
      {
        name: "Road Safety Mirrors",
        products: [
          { name: "Convex Traffic Mirror 600mm" },
          { name: "Convex Traffic Mirror 800mm" },
          { name: "Indoor Safety Mirror" },
        ],
      },
      {
        name: "Traffic Safety Cones",
        products: [
          { name: "PVC Traffic Cone 750mm" },
          { name: "Rubber Base Cone 500mm" },
          { name: "Collapsible Cone" },
        ],
      },
      {
        name: "Speed Control Solutions",
        products: [
          { name: "Rubber Speed Breaker" },
          { name: "Plastic Speed Bump" },
          { name: "Rumble Strip" },
        ],
      },
    ],
  },
  {
    name: "Tactile Paving Solutions",
    subcategories: [
      {
        name: "PU Tactile Tiles",
        products: [
          { name: "PU Warning Tile 300x300" },
          { name: "PU Guiding Tile 300x300" },
        ],
      },
      {
        name: "Stainless Steel Tactile Tiles",
        products: [
          { name: "SS Warning Stud Tile" },
          { name: "SS Guiding Strip Tile" },
        ],
      },
      {
        name: "Tactile Strips & Studs",
        products: [
          { name: "SS Tactile Stud" },
          { name: "PU Tactile Strip" },
          { name: "Adhesive Tactile Dot" },
        ],
      },
    ],
  },
  {
    name: "Road Signage",
    subcategories: [
      {
        name: "Standard Road Signs",
        products: [
          { name: "Stop Sign" },
          { name: "Speed Limit Sign" },
          { name: "No Parking Sign" },
        ],
      },
      {
        name: "Highway Signage",
        products: [
          { name: "Gantry Direction Board" },
          { name: "Highway Route Marker" },
        ],
      },
      {
        name: "Railway Signs",
        products: [
          { name: "Level Crossing Sign" },
          { name: "Platform Number Board" },
        ],
      },
      {
        name: "Airport Signs",
        products: [
          { name: "Runway Guidance Sign" },
          { name: "Terminal Direction Sign" },
        ],
      },
      {
        name: "Accessibility Signs",
        products: [
          { name: "Wheelchair Access Sign" },
          { name: "Tactile Braille Sign" },
        ],
      },
    ],
  },
  {
    name: "Industrial & Emergency Signage",
    subcategories: [
      {
        name: "Photoluminescent Signs",
        products: [
          { name: "Glow Exit Direction Sign" },
          { name: "Glow Staircase Marking" },
        ],
      },
      {
        name: "Fire Safety Signs",
        products: [
          { name: "Fire Extinguisher Sign" },
          { name: "Fire Alarm Point Sign" },
        ],
      },
      {
        name: "Emergency Exit Signs",
        products: [
          { name: "Exit Running Man Sign" },
          { name: "Emergency Door Sign" },
        ],
      },
      {
        name: "LED Edge-Light Signs",
        products: [
          { name: "LED Exit Board" },
          { name: "LED Evacuation Plan" },
        ],
      },
      {
        name: "Glow-in-the-Dark Tapes",
        products: [
          { name: "Glow Anti-Skid Tape" },
          { name: "Glow Directional Tape" },
        ],
      },
    ],
  },
  {
    name: "Parking Management Solutions",
    subcategories: [
      {
        name: "Parking Stoppers",
        products: [
          { name: "Rubber Wheel Stopper" },
          { name: "Concrete Wheel Stop" },
        ],
      },
      {
        name: "Parking Locks",
        products: [
          { name: "Manual Parking Lock" },
          { name: "Remote Parking Lock" },
        ],
      },
      {
        name: "Parking Studs",
        products: [
          { name: "Aluminium Parking Stud" },
          { name: "Solar Parking Stud" },
        ],
      },
      {
        name: "Corner Guards & Buffers",
        products: [
          { name: "Rubber Corner Guard" },
          { name: "Wall Buffer Strip" },
        ],
      },
      {
        name: "Dock Bumpers",
        products: [
          { name: "Moulded Dock Bumper" },
          { name: "Steel Face Dock Bumper" },
        ],
      },
    ],
  },
  {
    name: "Cable Protection Solutions",
    subcategories: [
      {
        name: "Cable Protectors",
        products: [
          { name: "2-Channel Rubber Protector" },
          { name: "5-Channel HD Protector" },
          { name: "Floor Cable Cover" },
        ],
      },
    ],
  },
  {
    name: "Reflective Safety Wear",
    subcategories: [
      {
        name: "Reflective Safety Jackets",
        products: [
          { name: "Hi-Viz Mesh Jacket" },
          { name: "Executive Safety Jacket" },
        ],
      },
      {
        name: "Reflective Cross Belts",
        products: [
          { name: "Adjustable Cross Belt" },
          { name: "Elastic Safety Belt" },
        ],
      },
      {
        name: "Reflective Gloves",
        products: [{ name: "Hi-Viz Work Glove" }],
      },
      {
        name: "Reflective Tapes",
        products: [
          { name: "Sew-On Reflective Tape" },
          { name: "Self-Adhesive Reflective Tape" },
        ],
      },
    ],
  },
]);

export const INDUSTRIES = [
  { name: "Highways & Expressways", href: "/industries/highways-expressways" },
  { name: "Urban Roads & Streets", href: "/industries/urban-roads-streets" },
  {
    name: "Road Construction & Maintenance",
    href: "/industries/road-construction-maintenance",
  },
  { name: "Parking Lots & Garages", href: "/industries/parking-lots-garages" },
  { name: "Industrial Facilities", href: "/industries/industrial-facilities" },
  { name: "Warehouses & Logistics", href: "/industries/warehouses-logistics" },
  { name: "Airports", href: "/industries/airports" },
  { name: "Railways", href: "/industries/railways" },
  { name: "Commercial Buildings", href: "/industries/commercial-buildings" },
  {
    name: "Pedestrian Accessibility",
    href: "/industries/pedestrian-accessibility",
  },
];
