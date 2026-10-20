
/**
 * Product catalogue — each product's `image` is a key from
 * `IMAGES.productCutouts` in src/assets/images.js.
 * To use a new photo: save it under src/assets/images/products/<category>/,
 * import it and add it to the productCutouts map in images.js, then put its
 * key in the product's `image` field below. The category name is filled in
 * automatically — never type it on the product itself.
 */
const CATEGORIES = [
  // --------------------------------------------------------------------------
  // 1. Tactile Paving Solutions
  // --------------------------------------------------------------------------
  {
    id: "tactile-paving-solutions",
    name: "Tactile Paving Solutions",
    description:
      "Tactile paving products designed to support accessible pedestrian movement and provide directional and warning cues in public and commercial spaces.",
    subcategory: null,
    products: [
      {
        id: "pu-tactile-tile-directional-design",
        name: "PU Tactile Tile — Directional Design",
        modelNumber: null,
        description: "Directional tactile tile for guiding pedestrian movement.",
        subcategory: "PU Tactile Tiles",
        image: "puTactileTileDirectional",
      },
      {
        id: "pu-tactile-tile-warning-design",
        name: "PU Tactile Tile — Warning Design",
        modelNumber: null,
        description: "Warning tactile tile for hazard and caution zones.",
        subcategory: "PU Tactile Tiles",
        image: "puTactileTileWarning",
      },
      {
        id: "ss-tactile-tile-directional-design",
        name: "SS Tactile Tile — Directional Design",
        modelNumber: null,
        description: "Stainless steel directional tactile tile.",
        subcategory: "Stainless Steel Tactile Tiles",
        image: "ssTactileTileDirectional",
      },
      {
        id: "ss-tactile-tile-warning-design",
        name: "SS Tactile Tile — Warning Design",
        modelNumber: null,
        description: "Stainless steel warning tactile tile.",
        subcategory: "Stainless Steel Tactile Tiles",
        image: "ssTactileTileWarning",
      },
      {
        id: "ss-directional-tactile-strip",
        name: "Stainless Steel Directional Tactile Strip",
        modelNumber: null,
        description: "Directional tactile strip for wayfinding paths.",
        subcategory: "Tactile Strips and Studs",
        image: "ssDirectionalStrip",
      },
      {
        id: "ss-warning-tactile-stud",
        name: "Stainless Steel Warning Tactile Stud",
        modelNumber: null,
        description: "Warning tactile stud for hazard zones.",
        subcategory: "Tactile Strips and Studs",
        image: "ssWarningStud",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 2. Road Delineators & Guide Posts
  // --------------------------------------------------------------------------
  {
    id: "road-delineators-guide-posts",
    name: "Road Delineators & Guide Posts",
    description:
      "Road delineators, flexible posts, and guidance systems designed to improve road visibility, traffic separation, and driver guidance.",
    subcategory: null,
    products: [
      {
        id: "round-pipe-delineators",
        name: "Round Pipe Delineators",
        modelNumber: null,
        description: "Round pipe road delineator post.",
        subcategory: "Pipe Delineators",
        image: "roundPipe",
      },
      {
        id: "square-pipe-delineators",
        name: "Square Pipe Delineators",
        modelNumber: null,
        description: "Square pipe road delineator post.",
        subcategory: "Pipe Delineators",
        image: "squarePipe",
      },
      {
        id: "standard-reflective-delineators",
        name: "Standard Reflective Delineators",
        modelNumber: null,
        description: "Standard reflective delineator for road edges.",
        subcategory: "Pipe Delineators",
        image: "standardReflective",
      },
      {
        id: "solar-flasher-delineators",
        name: "Solar-Flasher Delineators",
        modelNumber: null,
        description: "Solar-powered flashing delineator.",
        subcategory: "Pipe Delineators",
        image: "solarFlasher",
      },
      {
        id: "plastic-post-delineators",
        name: "Plastic Post Delineators",
        modelNumber: null,
        description: "Plastic post delineator.",
        subcategory: "Pipe Delineators",
        image: "plasticPost",
      },
      {
        id: "spring-post-reboundable-delineator",
        name: "Spring Post / Reboundable Delineator",
        modelNumber: null,
        description: "Reboundable spring post delineator.",
        subcategory: "Spring Posts",
        image: "springPost",
      },
      {
        id: "centre-verge-traffic-divider",
        name: "Centre Verge Traffic Divider",
        modelNumber: null,
        description: "Centre verge divider for traffic separation.",
        subcategory: "Centre Verge Dividers",
        image: "centreVerge",
      },
      {
        id: "flexible-centre-verge-divider",
        name: "Flexible Centre Verge Divider",
        modelNumber: null,
        description: "Flexible centre verge divider.",
        subcategory: "Centre Verge Dividers",
        image: "flexibleCentreVerge",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 3. Road Reflectors & Pavement Markers
  // --------------------------------------------------------------------------
  {
    id: "road-reflectors-pavement-markers",
    name: "Road Reflectors & Pavement Markers",
    description:
      "Reflective road studs, raised pavement markers, and visibility-enhancing products designed to improve road guidance and delineation.",
    subcategory: null,
    products: [
      {
        id: "3m-290-cats-eye",
        name: "3M 290 Series Cat's Eye",
        modelNumber: "3M 290 Series",
        description: "Reflective cat's eye road marker.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "catsEye3m",
      },
      {
        id: "3m-290-twin-shank",
        name: "3M 290 Series with Twin Moulded Shank",
        modelNumber: "3M 290 Series",
        description: "Reflective marker with twin moulded shank.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "twinShank3m",
      },
      {
        id: "avery-dennis-c-80",
        name: "Avery Dennison / Ennis Paint C-80 Series",
        modelNumber: "C-80 Series",
        description: "Reflective raised pavement marker.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "marker",
      },
      {
        id: "roadstar-rpm-777p",
        name: "Road Star RPM 777P — Very High Reflectivity",
        modelNumber: "RPM 777P",
        description: "Very high reflectivity pavement marker.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "marker",
      },
      {
        id: "roadstar-rpm-777p-central-hole",
        name: "Road Star RPM 777P with Central Hole",
        modelNumber: "RPM 777P",
        description: "Raised pavement marker with central hole.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "rpmCentralHole",
      },
      {
        id: "roadstar-glass-beads",
        name: "Road Star RPM with Glass Beads / Element Reflectors",
        modelNumber: null,
        description: "Raised pavement marker with glass beads.",
        subcategory: "Cat's Eyes and Raised Pavement Markers",
        image: "glassBeads",
      },
      {
        id: "guardrail-reflector-single",
        name: "Guardrail Reflector — Single-Side Reflector",
        modelNumber: null,
        description: "Single-side guardrail reflector.",
        subcategory: "Guardrail Reflectors",
        image: "guardrailSingle",
      },
      {
        id: "guardrail-reflector-double",
        name: "Guardrail Reflector — Double-Side Reflector",
        modelNumber: null,
        description: "Double-side guardrail reflector.",
        subcategory: "Guardrail Reflectors",
        image: "guardrailDouble",
      },
      {
        id: "tree-reflector-orange",
        name: "Tree Reflector — Orange",
        modelNumber: null,
        description: "Orange tree reflector.",
        subcategory: "Tree Reflectors",
        image: "treeOrange",
      },
      {
        id: "kerb-marker-white",
        name: "Kerb Pavement Marker — White",
        modelNumber: null,
        description: "White kerb pavement marker.",
        subcategory: "Kerb Pavement Markers",
        image: "kerbWhite",
      },
      {
        id: "median-marker-square",
        name: "Median Marker — Square Reflector",
        modelNumber: null,
        description: "Square median marker reflector.",
        subcategory: "Median Markers",
        image: "medianSquare",
      },
      {
        id: "reboundable-median-marker",
        name: "Reboundable Median Marker",
        modelNumber: null,
        description: "Reboundable median marker.",
        subcategory: "Median Markers",
        image: "reboundableMedian",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. Road Safety Mirrors
  // --------------------------------------------------------------------------
  {
    id: "road-safety-mirrors",
    name: "Road Safety Mirrors",
    description:
      "Convex safety mirrors for improving visibility at blind corners, intersections, parking facilities, and other locations where a wider field of view is required.",
    subcategory: null,
    products: [
      {
        id: "convex-mirror-45cm",
        name: "Road Safety Convex Mirror — 45 cm",
        modelNumber: "45 cm",
        description: "45 cm convex safety mirror.",
        subcategory: "Convex Mirrors",
        image: "convex45",
      },
      {
        id: "stainless-steel-convex-mirror",
        name: "Stainless Steel Convex Mirror",
        modelNumber: null,
        description: "Stainless steel convex safety mirror.",
        subcategory: "Convex Mirrors",
        image: "ssMirror",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 5. Traffic Cones & Barricading
  // --------------------------------------------------------------------------
  {
    id: "traffic-cones-barricading",
    name: "Traffic Cones & Barricading",
    description:
      "Traffic cones and related accessories for temporary traffic control, construction zones, parking areas, and traffic diversion.",
    subcategory: null,
    products: [
      {
        id: "pvc-traffic-cone",
        name: "PVC Traffic Safety Cone",
        modelNumber: null,
        description: "PVC traffic safety cone.",
        subcategory: "Traffic Cones",
        image: "pvcCone",
      },
      {
        id: "reflective-traffic-cone",
        name: "Reflective Traffic Cone",
        modelNumber: null,
        description: "Reflective traffic safety cone.",
        subcategory: "Traffic Cones",
        image: "reflectiveCone",
      },
      {
        id: "abs-chain-cones",
        name: "ABS Chain for Connecting Cones",
        modelNumber: null,
        description: "ABS chain for connecting traffic cones.",
        subcategory: "Cone Accessories",
        image: "absChain",
      },
      {
        id: "cone-management-plate",
        name: "Cone Management Plate",
        modelNumber: null,
        description: "Plate for cone management.",
        subcategory: "Cone Accessories",
        image: "conePlate",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. Speed Control Solutions
  // --------------------------------------------------------------------------
  {
    id: "speed-control-solutions",
    name: "Speed Control Solutions",
    description:
      "Speed breakers, rumble strips, parking studs, and related products for traffic calming and speed management.",
    subcategory: null,
    products: [
      {
        id: "plastic-speed-breaker-gp-1005",
        name: "Plastic Speed Breaker — GP 1005",
        modelNumber: "GP 1005",
        description: "Plastic speed breaker model GP 1005.",
        subcategory: "Plastic Speed Breakers",
        image: "plasticBreaker",
      },
      {
        id: "rubberised-speed-breaker-gsb-50",
        name: "Rubberised Speed Breaker — GSB 50",
        modelNumber: "GSB 50",
        description: "Rubberised speed breaker model GSB 50.",
        subcategory: "Rubberised Speed Breakers",
        image: "rubberisedBreaker",
      },

      {
        id: "plastic-rumble-strip-reflector",
        name: "Plastic Rumble Strip with Reflector",
        modelNumber: null,
        description: "Plastic rumble strip with reflector.",
        subcategory: "Rumble Strips",
        image: "rumbleReflector",
      },
      {
        id: "plastic-rumble-strip-centre-divider",
        name: "Plastic Rumble Strip with Centre Lane Divider",
        modelNumber: null,
        description: "Plastic rumble strip with centre lane divider.",
        subcategory: "Rumble Strips",
        image: "rumbleCentreDivider",
      },

      {
        id: "folding-portable-speed-breaker",
        name: "Folding / Portable Speed Breaker with Handle",
        modelNumber: null,
        description: "Portable folding speed breaker with handle.",
        subcategory: "Additional Speed Control Products",
        image: "foldingBreaker",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. Road Signage
  // --------------------------------------------------------------------------
  {
    id: "road-signage",
    name: "Road Signage",
    description:
      "Road signs and highway signage designed to communicate traffic regulations, hazards, directions, and roadside facilities.",
    subcategory: null,
    products: [
      {
        id: "stop-give-way-no-entry-no-parking-no-stopping-speed-limit-sign",
        name: "Stop Sign",
        modelNumber: null,
        description: "Regulatory stop sign.",
        subcategory: "Mandatory Traffic Signs",
        image: "mandatoryGroup",
      },

      {
        id: "weight-restriction-height-restriction-width-restriction-overtaking-restriction-one-way-directional-mandatory-sign",
        name: "Weight Restriction Sign",
        modelNumber: null,
        description: "Weight restriction traffic sign.",
        subcategory: "Mandatory Traffic Signs",
        image: "restrictionGroup",
      },
      {
        id: "other-traffic-regulation-right-curve-warning-left-curve-warning-hairpin-bend-warning-steep-ascent-steep-descent-signs",
        name: "Other Traffic Regulation Signs",
        modelNumber: null,
        description: "Other traffic regulation signs.",
        subcategory: "Mandatory Traffic Signs",
        image: "curveWarningGroup",
      },
      {
        id: "narrow-road-road-narrows-pedestrian-crossing-school-ahead-cycle-crossing-railway-crossing-warning-sign",
        name: "Narrow Road Sign",
        modelNumber: null,
        description: "Narrow road warning sign.",
        subcategory: "Cautionary and Warning Signs",
        image: "warningCrossingGroup",
      },

      {
        id: "road-work-slippery-road-other-hazard-warning-hospital-first-aid-parking-sign",
        name: "Road Work Sign",
        modelNumber: null,
        description: "Road work warning sign.",
        subcategory: "Cautionary and Warning Signs",
        image: "workFacilityGroup",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 8. Industrial & Emergency Signage
  // --------------------------------------------------------------------------
  {
    id: "industrial-emergency-signage",
    name: "Industrial & Emergency Signage",
    description:
      "Safety, emergency, evacuation, and photoluminescent signage designed to support workplace safety and building navigation.",
    subcategory: null,
    products: [
      {
        id: "assembly-point-drinking-water-emergency-warning-exit-emergency-exit-sign",
        name: "Assembly Point Sign",
        modelNumber: null,
        description: "Assembly point sign.",
        subcategory: "Photoluminescent Safety Signs",
        image: "exitAssemblyGroup",
      },
      {
        id: "fire-exit-no-smoking-no-entry-fire-extinguisher-fire-alarm-other-mandatory-ppe-sign",
        name: "Fire Exit Sign",
        modelNumber: null,
        description: "Fire exit sign.",
        subcategory: "Emergency Exit and Directional Signs",
        image: "fireProhibitionGroup",
      },
      {
        id: "glow-in-the-dark-tape",
        name: "Glow-in-the-Dark Tape",
        modelNumber: null,
        description: "Photoluminescent glow tape.",
        subcategory: "Special Photoluminescent Products",
        image: "glowTape",
      },
      {
        id: "route-marker-tape",
        name: "Route Marker Tape",
        modelNumber: null,
        description: "Photoluminescent route marker tape.",
        subcategory: "Special Photoluminescent Products",
        image: "routeMarkerTape",
      },
      {
        id: "photoluminescent-dots",
        name: "Photoluminescent Dots",
        modelNumber: null,
        description: "Photoluminescent dots.",
        subcategory: "Special Photoluminescent Products",
        image: "photoDots",
      },
      {
        id: "led-edge-light-exit-sign",
        name: "LED Edge-Light Exit Sign",
        modelNumber: null,
        description: "LED edge-light exit sign.",
        subcategory: "LED Edge-Light Signs",
        image: "ledExit",
      },
      {
        id: "led-edge-light-directional-sign",
        name: "LED Edge-Light Directional Sign",
        modelNumber: null,
        description: "LED edge-light directional sign.",
        subcategory: "LED Edge-Light Signs",
        image: "ledExit",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 9. Specialised Transportation Signage
  // --------------------------------------------------------------------------
  {
    id: "specialised-transportation-signage",
    name: "Specialised Transportation Signage",
    description:
      "Specialised signage for railway operations, airports, and transportation infrastructure.",
    subcategory: null,
    products: [
      {
        id: "railway-crossing-hump-warning-manned-level-crossing-whistle-indicator-warning-goods-sign",
        name: "Railway Crossing Sign",
        modelNumber: null,
        description: "Railway crossing sign.",
        subcategory: "Railway Signs",
        image: "railwayGroup",
      },

      {
        id: "airport-authority-directional-airport-information-airport-exit-airport-direction-airport-facility-terminal-way-marker-passenger-direction-sign",
        name: "Airport Authority Directional Sign",
        modelNumber: null,
        description: "Airport authority directional sign.",
        subcategory: "Airport Signs",
        image: "airportGroup",
      },
      {
        id: "wheelchair-accessibility-disabled-person-parking-ccessible-parking-accessible-toilet-sign",
        name: "Wheelchair Accessibility Sign",
        modelNumber: null,
        description: "Wheelchair accessibility sign.",
        subcategory: "Accessibility Signs",
        image: "accessibilityGroup",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 10. Parking Management Solutions
  // --------------------------------------------------------------------------
  {
    id: "parking-management-solutions",
    name: "Parking Management Solutions",
    description:
      "Parking management and vehicle protection products for residential, commercial, industrial, and public parking facilities.",
    subcategory: null,
    products: [
      {
        id: "car-wheel-lock",
        name: "Car Wheel Lock",
        modelNumber: null,
        description: "Car wheel locking device.",
        subcategory: "Parking Locks",
        image: "wheelLock",
      },
      {
        id: "tiger-claw-lock",
        name: "Tiger Claw Lock",
        modelNumber: null,
        description: "Tiger claw parking lock.",
        subcategory: "Parking Locks",
        image: "tigerClaw",
      },
      {
        id: "rubberised-car-parking-stopper",
        name: "Rubberised Car Parking Stopper",
        modelNumber: null,
        description: "Rubberised car parking stopper.",
        subcategory: "Parking Stoppers",
        image: "carStopper",
      },
      {
        id: "wall-protection-corner-guard",
        name: "Wall Protection Corner Guard",
        modelNumber: null,
        description: "Wall protection corner guard.",
        subcategory: "Corner Guards and Buffers",
        image: "wallGuard",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 11. Cable Protection Solutions
  // --------------------------------------------------------------------------
  {
    id: "cable-protection-solutions",
    name: "Cable Protection Solutions",
    description:
      "Cable protection products designed to help protect cables and manage cable routing in suitable environments.",
    subcategory: null,
    products: [
      {
        id: "cable-protector",
        name: "Cable Protector",
        modelNumber: null,
        description: "Cable protector for floor cable routing.",
        subcategory: "Cable Protectors",
        image: "cableProtector",
      },
      {
        id: "cable-protector-cover",
        name: "Cable Protector with Protective Cover",
        modelNumber: null,
        description: "Cable protector with protective cover.",
        subcategory: "Cable Protectors",
        image: "cableProtectorCover",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 12. Reflective Safety Wear
  // --------------------------------------------------------------------------
  {
    id: "reflective-safety-wear",
    name: "Reflective Safety Wear",
    description:
      "Reflective clothing, jackets, and accessories intended to improve wearer visibility in relevant work environments.",
    subcategory: null,
    products: [
      {
        id: "led-safety-jacket-orange",
        name: "LED Safety Jacket — Orange",
        modelNumber: null,
        description: "LED safety jacket in orange.",
        subcategory: "Reflective Safety Jackets",
        image: "ledJacketOrange",
      },
      {
        id: "led-safety-jacket-green",
        name: "LED Safety Jacket — Green",
        modelNumber: null,
        description: "LED safety jacket in green.",
        subcategory: "Reflective Safety Jackets",
        image: "ledJacketGreen",
      },
      {
        id: "reflective-cross-belt",
        name: "Reflective Cross Belt",
        modelNumber: null,
        description: "Reflective cross belt accessory.",
        subcategory: "Reflective Wear Accessories",
        image: "crossBelt",
      },
      {
        id: "reflective-gloves",
        name: "Reflective Gloves",
        modelNumber: null,
        description: "Reflective safety gloves.",
        subcategory: "Reflective Wear Accessories",
        image: "reflectiveGloves",
      },
      {
        id: "reflective-tape",
        name: "Reflective Tape",
        modelNumber: null,
        description: "Reflective tape accessory.",
        subcategory: "Reflective Wear Accessories",
        image: "reflectiveTape",
      },
      {
        id: "reflective-safety-accessories",
        name: "Reflective Safety Accessories",
        modelNumber: null,
        description: "Reflective safety accessories.",
        subcategory: "Reflective Wear Accessories",
        image: "safetyAccessories",
      },
    ],
  },
];


function withCategoryNames(categories) {
  return categories.map((cat) => ({
    ...cat,
    products: cat.products.map((p) => ({ ...p, category: cat.name })),
  }));
}

export const PRODUCT_CATEGORIES = withCategoryNames(CATEGORIES);

/**
 * Flat list of all products, built from the category tree.
 */
export const ALL_PRODUCTS = PRODUCT_CATEGORIES.flatMap((c) => c.products);

/**
 * Lookup helpers.
 */
export function getCategoryById(id) {
  return PRODUCT_CATEGORIES.find((c) => c.id === id);
}

export function getProductById(id) {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function getProductBySlug(slug) {
  return ALL_PRODUCTS.find((p) => p.id === slug);
}

export function getSubcategories(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return [];
  const subs = [...new Set(cat.products.map((p) => p.subcategory).filter(Boolean))];
  return subs;
}

export function getProductsByCategory(categoryId, subcategory = null) {
  return ALL_PRODUCTS.filter((p) => p.category === getCategoryById(categoryId)?.name && (!subcategory || p.subcategory === subcategory));
}
