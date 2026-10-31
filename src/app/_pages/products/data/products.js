
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
    image: "tile",
    products: [
      {
        id: "pu-tactile-tile-directional-design",
        name: "PU Tactile Tile — Directional Design",
        modelNumber: null,
        description:
          "Yellow PU directional tile with 6 longitudinal bars for guiding pedestrian movement along safe walking paths.",
        subcategory: "PU Tactile Tiles",
        image: "puTactileTileDirectional",
      },
      {
        id: "pu-tactile-tile-warning-design",
        name: "PU Tactile Tile — Warning Design",
        modelNumber: null,
        description:
          "Yellow PU warning tile with truncated domes and 3M self-adhesive backing for hazard and caution zones.",
        subcategory: "PU Tactile Tiles",
        image: "puTactileTileWarning",
      },
      {
        id: "pu-tactile-tile-set",
        name: "PU Tactile Tiles — Directional + Warning Layout",
        modelNumber: null,
        description:
          "Combined layout of directional bars and warning dots showing typical PU tactile ground surface installation.",
        subcategory: "PU Tactile Tiles",
        image: "puTactileLayout",
      },
      {
        id: "ss-directional-tactile-strip",
        name: "Stainless Steel Directional Tactile Strip",
        modelNumber: null,
        description:
          "Brushed stainless steel directional strip for wayfinding paths in stations, malls and public buildings.",
        subcategory: "Tactile Strips and Studs",
        image: "ssDirectionalStrip",
      },
      {
        id: "ss-warning-tactile-stud",
        name: "Stainless Steel Warning Tactile Stud",
        modelNumber: null,
        description:
          "Stainless warning stud with anti-slip diamond top and rear shank for hazard zones and stair nosings.",
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
        id: "plastic-post-delineators",
        name: "Flexible Delineator Posts",
        modelNumber: null,
        description:
          "Flexible PU delineator bollards in orange/yellow with 3 high-visibility reflective bands for lane guidance.",
        subcategory: "Flexible Posts",
        image: "plasticPost",
      },
      {
        id: "spring-post-reboundable-delineator",
        name: "Spring Post / Reboundable Delineator",
        modelNumber: null,
        description:
          "Orange reboundable spring post with reflective bands and spring base — bends on impact and recovers.",
        subcategory: "Spring Posts",
        image: "springPost",
      },
      {
        id: "metal-delineators",
        name: "Metal Delineator Posts with Reflectors",
        modelNumber: null,
        description:
          "Metal delineator posts with round amber/red reflectors and protective guard for highways and medians.",
        subcategory: "Metal Delineators",
        image: "metalDelineators",
      },
      {
        id: "median-marker-base",
        name: "Median Marker — Rectangular Base",
        modelNumber: null,
        description:
          "Black median / pavement marker base with amber reflective face for lane and median delineation.",
        subcategory: "Median Markers",
        image: "medianMarkerBase",
      },
      {
        id: "median-marker-head",
        name: "Median Marker — Reflective Paddle Head",
        modelNumber: null,
        description:
          "Paddle-type median marker head with yellow honeycomb reflective face for high night visibility.",
        subcategory: "Median Markers",
        image: "medianMarkerHead",
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
        id: "aluminium-road-stud",
        name: "Aluminium Road Stud with Shank",
        modelNumber: null,
        description:
          "Cast aluminium road stud with central shank and dual amber reflectors for permanent lane delineation.",
        subcategory: "Road Studs",
        image: "aluminiumStud",
      },
      {
        id: "abs-road-stud-yellow",
        name: "ABS Road Stud — Yellow Double-Side",
        modelNumber: null,
        description:
          "Yellow ABS road stud with dual amber reflectors, top and bottom views showing fixing holes.",
        subcategory: "Road Studs",
        image: "roadStud",
      },
      {
        id: "abs-road-stud-heavy-duty",
        name: "Road Stud — Heavy-Duty Yellow",
        modelNumber: null,
        description:
          "Heavy-duty yellow road stud with shank base and dual amber reflectors for high-traffic roads.",
        subcategory: "Road Studs",
        image: "roadStud2",
      },
      {
        id: "abs-road-stud-white-red",
        name: "Road Stud — White with Red Reflectors",
        modelNumber: null,
        description:
          "White ABS road stud with dual red honeycomb reflectors for median and edge delineation.",
        subcategory: "Road Studs",
        image: "roadStud3",
      },
      {
        id: "solar-road-stud-square",
        name: "Solar Road Stud — Aluminium Square",
        modelNumber: "IP68",
        description:
          "Aluminium solar road stud with top solar panel and dual red LED reflectors, IP68 rated.",
        subcategory: "Solar Studs",
        image: "solarStud",
      },
      {
        id: "solar-road-stud-round",
        name: "Solar Road Stud — Round with Shank",
        modelNumber: null,
        description:
          "Round solar road stud with twin yellow shank base for flush pavement fixing and 360° illumination.",
        subcategory: "Solar Studs",
        image: "solarStud2",
      },
      {
        id: "solar-road-stud-rs-2500",
        name: "Solar Road Stud — RoadStar RS-2500",
        modelNumber: "RS-2500",
        description:
          "RoadStar RS-2500 cast aluminium solar stud with red reflectors and high-efficiency panel.",
        subcategory: "Solar Studs",
        image: "solarStud3",
      },
      {
        id: "guardrail-reflector-single",
        name: "Guardrail Reflector — 100×50 mm",
        modelNumber: null,
        description:
          "Rectangular guardrail reflector 100×50 mm available in Amber, White and Red for crash barriers.",
        subcategory: "Guardrail Reflectors",
        image: "guardrailSingle",
      },
      {
        id: "tree-reflector-orange",
        name: "Tree Reflector — Orange 100 mm",
        modelNumber: "100 mm",
        description:
          "Round 100 mm orange tree reflector with strap fixing, shown installed on roadside trees for night guidance.",
        subcategory: "Tree Reflectors",
        image: "treeOrange",
      },
      {
        id: "roadstar-glass-beads",
        name: "RoadStar Glass Beads — 25 kg",
        modelNumber: null,
        description:
          "High retroreflectivity glass beads for thermoplastic, paint and epoxy road markings. 25 kg bag.",
        subcategory: "Glass Beads",
        image: "glassBeads",
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
        description:
          "45 cm wide-angle convex mirror in weather-resistant orange ABS frame with canopy and pole-mounting bracket. Also available in different sizes.",
        subcategory: "Convex Mirrors",
        image: "convex45",
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
        description:
          "Orange PVC cone with 2 white reflective bands and heavy black base for road works and diversions.",
        subcategory: "Traffic Cones",
        image: "pvcCone",
      },
      {
        id: "reflective-traffic-cone",
        name: "Reflective Traffic Cone",
        modelNumber: null,
        description: "Reflective traffic safety cone with high-visibility bands.",
        subcategory: "Traffic Cones",
        image: "reflectiveCone",
      },
      {
        id: "abs-chain-cones",
        name: "Cone Chain Connector — Red/White ABS Chain",
        modelNumber: null,
        description:
          "Red/white ABS link chain that hooks onto cone tops to form continuous barricade lines for diversions and queue control.",
        subcategory: "Cone Accessories",
        image: "absChain",
      },
      {
        id: "cone-management-plate",
        name: "Cone-Top Sign Plate",
        modelNumber: null,
        description:
          "Orange sign plate that mounts on traffic cone tops for displaying messages along barricaded stretches.",
        subcategory: "Cone Accessories",
        image: "conePlate",
      },
      {
        id: "road-barricade",
        name: "Water-Filled Road Barricade",
        modelNumber: null,
        description:
          "Red water-fillable road barricade with reflective strip, chevron markings and interlocking design for diversions and work zones.",
        subcategory: "Barricades",
        image: "roadBarricade",
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
      "Speed breakers and related products for traffic calming and speed management.",
    subcategory: null,
    products: [
      {
        id: "plastic-speed-breaker",
        name: "Plastic Speed Breaker",
        modelNumber: null,
        description:
          "Interlocking black/yellow plastic speed breaker modules with amber reflectors for traffic calming.",
        subcategory: "Plastic Speed Breakers",
        image: "plasticBreaker",
      },
      {
        id: "plastic-speed-breaker-modules",
        name: "Plastic Speed Breaker — Modular Set",
        modelNumber: null,
        description:
          "Stacked view of modular plastic speed breaker sections in yellow/black with side reflectors.",
        subcategory: "Plastic Speed Breakers",
        image: "plasticBreaker2",
      },
      {
        id: "rubberised-speed-breaker-gsb-50",
        name: "Rubberised Speed Breaker — GSB 50",
        modelNumber: "GSB 50",
        description:
          "Rubberised speed breaker GSB 50 in yellow/black chequered top, shown installed on asphalt.",
        subcategory: "Rubberised Speed Breakers",
        image: "rubberisedBreaker",
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
        name: "Mandatory Signs — Stop / Give Way / No Entry / No Parking / No Stopping / Speed Limit",
        modelNumber: null,
        description:
          "Set of 6 regulatory signs: Stop, Give Way, No Entry, No Parking, No Stopping and Speed Limit 50.",
        subcategory: "Mandatory Traffic Signs",
        image: "mandatoryGroup",
      },

      {
        id: "weight-restriction-height-restriction-width-restriction-overtaking-restriction-one-way-directional-mandatory-sign",
        name: "Restriction & Directional Signs — Weight / Height / Width / Overtaking / One Way",
        modelNumber: null,
        description:
          "Set of 6: 10t weight, 4.5m height, 2.5m width restrictions, no overtaking, one-way and directional mandatory.",
        subcategory: "Mandatory Traffic Signs",
        image: "restrictionGroup",
      },
      {
        id: "other-traffic-regulation-right-curve-warning-left-curve-warning-hairpin-bend-warning-steep-ascent-steep-descent-signs",
        name: "Curve & Gradient Warning Signs",
        modelNumber: null,
        description: "Right/left curve, hairpin bend, steep ascent/descent and other regulation warnings.",
        subcategory: "Mandatory Traffic Signs",
        image: "curveWarningGroup",
      },
      {
        id: "narrow-road-road-narrows-pedestrian-crossing-school-ahead-cycle-crossing-railway-crossing-warning-sign",
        name: "Cautionary Signs — Narrow Road / Pedestrian / School / Cycle / Railway Crossing",
        modelNumber: null,
        description:
          "Set of 6: narrow road, road narrows, pedestrian crossing, school ahead, cycle crossing and railway crossing warnings.",
        subcategory: "Cautionary and Warning Signs",
        image: "warningCrossingGroup",
      },

      {
        id: "road-work-slippery-road-other-hazard-warning-hospital-first-aid-parking-sign",
        name: "Work Zone & Facility Signs — Road Work / Hazard / Hospital / Parking",
        modelNumber: null,
        description: "Road work, slippery road, hazard, hospital, first-aid and parking facility signs.",
        subcategory: "Cautionary and Warning Signs",
        image: "workFacilityGroup",
      },
      {
        id: "gantry-board-blue-highway",
        name: "Overhead Gantry Board — Highway Direction (Blue)",
        modelNumber: null,
        description:
          "Blue overhead gantry direction board with Hindi + English place names, arrows and distances for highways and expressways.",
        subcategory: "Gantry Boards",
        image: "gantryBoard1",
      },
      {
        id: "gantry-board-green-direction",
        name: "Overhead Gantry Board — Direction & Place (Green)",
        modelNumber: null,
        description:
          "Green overhead gantry and direction boards with Hindi place names, arrows and distances for state highways and city routes.",
        subcategory: "Gantry Boards",
        image: "gantryBoard2",
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
        name: "Emergency Signs — Assembly Point / Drinking Water / Exit / Emergency Exit",
        modelNumber: null,
        description: "Assembly point, drinking water, emergency warning, exit and emergency exit signs set.",
        subcategory: "Photoluminescent Safety Signs",
        image: "exitAssemblyGroup",
      },
      {
        id: "fire-exit-no-smoking-no-entry-fire-extinguisher-fire-alarm-other-mandatory-ppe-sign",
        name: "Fire & Prohibition Signs — Fire Exit / Extinguisher / Alarm / No Smoking / PPE",
        modelNumber: null,
        description: "Fire exit, no smoking, no entry, extinguisher, alarm and mandatory PPE signs set.",
        subcategory: "Emergency Exit and Directional Signs",
        image: "fireProhibitionGroup",
      },
      {
        id: "glow-in-the-dark-tape",
        name: "Glow-in-the-Dark Tape",
        modelNumber: null,
        description: "Photoluminescent glow tape for stair nosings and evacuation paths.",
        subcategory: "Special Photoluminescent Products",
        image: "glowTape",
      },
      {
        id: "route-marker-tape",
        name: "Floor Marking / Route Tape",
        modelNumber: null,
        description:
          "Self-adhesive floor marking tape rolls in solid and chevron colours for aisle marking, bay outlines and route guidance in warehouses and plants.",
        subcategory: "Floor Marking Tapes",
        image: "routeMarkerTape",
      },
      {
        id: "photoluminescent-dots",
        name: "Photoluminescent Dots",
        modelNumber: null,
        description: "Photoluminescent dots for low-level wayfinding.",
        subcategory: "Special Photoluminescent Products",
        image: "photoDots",
      },
      {
        id: "led-edge-light-exit-sign",
        name: "LED Edge-Light Exit & Directional Signs",
        modelNumber: null,
        description:
          "Green LED edge-light EXIT, running-man and arrow signs in single/double-face and wall/ceiling mount options for corridors, exits and transfer areas.",
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
        name: "Railway Signs — Crossing / Hump / Level Crossing / Whistle Indicator",
        modelNumber: null,
        description: "Railway crossing, hump warning, manned level crossing and whistle indicator signs set.",
        subcategory: "Railway Signs",
        image: "railwayGroup",
      },

      {
        id: "airport-authority-directional-airport-information-airport-exit-airport-direction-airport-facility-terminal-way-marker-passenger-direction-sign",
        name: "Airport Signs — Directional / Information / Exit / Facility / Way Marker",
        modelNumber: null,
        description: "Airport authority directional, information, exit and facility signs set.",
        subcategory: "Airport Signs",
        image: "airportGroup",
      },
      {
        id: "wheelchair-accessibility-disabled-person-parking-ccessible-parking-accessible-toilet-sign",
        name: "Accessibility Signs — Wheelchair / Parking / Accessible Toilet",
        modelNumber: null,
        description: "Wheelchair accessibility, disabled parking and accessible toilet signs set.",
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
        id: "tiger-claw-lock",
        name: "Tiger Claw Wheel Lock",
        modelNumber: null,
        description:
          "Yellow/red adjustable Tiger Claw wheel clamp with lock and keys for cars, SUVs and trucks.",
        subcategory: "Parking Locks",
        image: "tigerClaw",
      },
      {
        id: "rubberised-car-parking-stopper",
        name: "Rubberised Car Parking Stopper",
        modelNumber: null,
        description:
          "Rubber parking stopper 900/1000/1200 mm, 150×100 mm with yellow reflectors and anchor bolts.",
        subcategory: "Parking Stoppers",
        image: "carStopper",
      },
      {
        id: "wall-protection-corner-guard",
        name: "Wall Protection Corner Guard",
        modelNumber: null,
        description:
          "Rubber corner guards 800/1000 mm, 50×50 mm in chevron yellow/black for parking areas, warehouses and hospitals.",
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
        name: "Cable Protector — 1/2/3 Channel",
        modelNumber: null,
        description:
          "Black/yellow rubber cable protector in 1-channel 100×30, 2-channel 200×30 and 3-channel 300×50 mm with hinged cover for cars, forklifts and pedestrians.",
        subcategory: "Cable Protectors",
        image: "cableProtector",
      },
      {
        id: "cable-protector-cover",
        name: "Cable Protector with Hinged Cover",
        modelNumber: null,
        description:
          "Heavy-duty cable protector with hinged yellow cover in 1/2/3 and 5-channel options with end caps and corner pieces for events, warehouses and outdoor routing.",
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
        id: "safety-vest-orange",
        name: "Reflective Safety Vest — Orange",
        modelNumber: null,
        description:
          "Orange mesh safety vest with silver reflective tapes, front zip and 2 flap pockets.",
        subcategory: "Reflective Safety Vests",
        image: "safetyVestOrange",
      },
      {
        id: "safety-vest-green",
        name: "Reflective Safety Vest — Fluorescent Green",
        modelNumber: null,
        description:
          "Fluorescent green/yellow mesh safety vest with silver reflective tapes, front zip and 2 flap pockets.",
        subcategory: "Reflective Safety Vests",
        image: "safetyVestGreen",
      },
      {
        id: "reflective-tape",
        name: "Reflective Conspicuity Tape",
        modelNumber: null,
        description:
          "High-visibility adhesive reflective tape rolls in Yellow, White, Red and Black-Yellow chevron for vehicles and barriers. Strong adhesive, weather resistant.",
        subcategory: "Reflective Wear Accessories",
        image: "reflectiveTape",
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
