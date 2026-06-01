import { CaseStudy, ScopeItem, ServiceCategory } from "./types";

import entrywayStoneImage from "./assets/images/entryway_stone_1779979441374.png";
import heroBedroomImage from "./assets/images/hero_bedroom_1779979394696.png";
import kitchenClassicImage from "./assets/images/kitchen_classic_1779979411628.png";
import kitchenIslandImage from "./assets/images/kitchen_island_1779979426904.png";
import sunsetFirepitImage from "./assets/images/sunset_firepit_1779979456074.png";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-living",
    title: "Palmilla Living & Dining Rebirth",
    location: "Palmilla Corridor, BCS",
    description: "Integrated open-plan tropical modern floor plan blending the lounge area, bespoke fine dining table, and state-of-the-art kitchen, framed around gorgeous seaside glass sliding panels.",
    remodelingHighlights: [
      "Imported premium outdoor porcelain flow-tiling using laser joints",
      "Full concrete floor slab moisture-vapor extraction barrier sealer",
      "Solid organic Parota dining table designed for coastal temperature shift durability",
      "Hidden multi-zone variable-speed mini-split ventilation"
    ],
    image: heroBedroomImage,
    category: "remodeling",
    standardsMet: [
      "Moisture Vapor Subfloor Spec Standard",
      "High-Efficiency EcoAC Sealing Standard",
      "Dual-grid Structural Support Load Certified",
      "Heavy Duty Storm Sliding Door Alignments"
    ]
  },
  {
    id: "cs-painting",
    title: "Sunset Hills Protective Exterior Painting",
    location: "Sunset Beach, Cabo San Lucas",
    description: "High-spec multi-layer protective coating system applied to a luxurious multi-level coastal villa to battle Baja's intense UV bake and local sandblast winds.",
    remodelingHighlights: [
      "Dynamic crack-bridging flexible elastomeric sealer base layer",
      "Anti-salt chemical binder protective coat formulation",
      "Intense solar UV heat-reflective acrylic finish topcoat",
      "Precision mask moldings and rust-treatment metal primer seals"
    ],
    image: sunsetFirepitImage,
    category: "painting",
    standardsMet: [
      "ASTM Weather Resistance Certified Paints",
      "Deep Plaster Integrity Correction Standard",
      "Marine Grade Anti-corrosive Primings",
      "Salt Breeze Discoloration Resistance Guarantee"
    ]
  },
  {
    id: "cs-kitchen",
    title: "Pedregal Modern Kitchen Remodel",
    location: "Pedregal, Cabo San Lucas",
    description: "Complete ocean-view kitchen transformation combining durable parota and white oak hardwood layout with premium monolithic marble quartz slabs. Remodeled to resist Cabo's extreme marine moisture and salt corrosion.",
    remodelingHighlights: [
      "Custom solid cabinetry utilizing moisture-resistant polymer-grade cores",
      "Seamless pure white quartz waterfall-edge kitchen island",
      "Bespoke copper piping routing with dual high-pressure sedimentation filters",
      "Low-voltage luxury under-shelf led task lighting"
    ],
    image: kitchenIslandImage,
    category: "bath_kitchen",
    standardsMet: [
      "American Plumbing Association Code Compliant",
      "Seaside Marine-grade Salt Protection",
      "Anti-earthquake Cabinet Anchor Guidelines",
      "NEMA Standard Electrical Grounding"
    ]
  },
  {
    id: "cs-bathroom",
    title: "Cabo Corridor Luxury Spa Bath",
    location: "El Tezal Corridor, Cabo San Lucas",
    description: "A bathroom remodel designed around wet-room flow and ocean-facing views. Features thick rustic travertine blocks, linear dynamic drainage systems, and hand-selected wood accent layers.",
    remodelingHighlights: [
      "Hand-set natural travertine stone tiles across shower walls and paths",
      "Dual-head shower systems with solid bronze pressure-balanced mixing valves",
      "Teak double floating vanity sealed with high-traffic marine varnishes",
      "Dynamic low-profile linear channel drain with easy silt filtration"
    ],
    image: kitchenClassicImage,
    category: "bath_kitchen",
    standardsMet: [
      "IAPMO Plumbing Code Standards",
      "Triple-coat Hot Mop Liquid Elastomeric Membrane Waterproofing",
      "Seepage-secure Non-porous Stone Grouting",
      "Safety Ground-fault Circuit Interrupter (GFCI) Controls"
    ]
  }
];

export const SERVICE_INFO = {
  remodeling: {
    title: "Remodeling",
    tagline: "Elevating coastal estates through architectural transformation.",
    intro: "Complete property rebirth. We plan and build major layout updates, load-bearing modifications, plaster renders, and modern parota joinery for a cohesive premium finish.",
    defaultSftRange: { min: 500, max: 8000, def: 2000 },
    sftLabel: "Est. Remodeling Area (Sq.Ft)"
  },
  painting: {
    title: "Painting",
    tagline: "Salt-resistant custom coatings with meticulous surface prep.",
    intro: "We battle extreme UV bake and seaside air by applying flexible elastomeric binders, salt-blocking primer coats, and high-reflective topcoats that guarantee zero salt peeling.",
    defaultSftRange: { min: 500, max: 10000, def: 3000 },
    sftLabel: "Wall/Exterior Surface Area (Sq.Ft)"
  },
  tile: {
    title: "Tile Installation",
    tagline: "Laser-aligned large-format porcelain and stone mastery.",
    intro: "Exceptional tile work is our crown signature. From large-format slabs with 1/16in laser joints to natural rustic travertine pool copings, we install with anti-shatter levelers.",
    defaultSftRange: { min: 100, max: 4000, def: 800 },
    sftLabel: "Surface Area to Tile (Sq.Ft)"
  },
  repairs: {
    title: "General Repairs",
    tagline: "Prompt technical troubleshooting and reliable carpentry.",
    intro: "Fast, precise, high-standard maintenance. We troubleshoot water pressure spikes, service complex storm shutters, treat weathered woodwork, and handle multi-point safety audits.",
    defaultSftRange: { min: 1, max: 100, def: 12 },
    sftLabel: "Scale of Project (Hours Required)"
  },
  airbnb: {
    title: "Airbnb Improvements",
    tagline: "Maximize rental yields with highly durable property upgrades.",
    intro: "Specially designed for Cabo's high-traffic vacation scene. We install smart entry systems, wear-proof surface protections, lockable owner closets, and fast-turn spa updates.",
    defaultSftRange: { min: 200, max: 5000, def: 1200 },
    sftLabel: "Property Footprint (Sq.Ft)"
  },
  bath_kitchen: {
    title: "Bathrooms & Kitchens",
    tagline: "Resort-inspired wet-rooms and modern parota galley designs.",
    intro: "The highest return-on-investment spaces. We layer advanced Schluter Kerdi waterproof sheets in showers and fit premium quartz waterfall slabs over grade-A solid parota cabinets.",
    defaultSftRange: { min: 50, max: 1000, def: 250 },
    sftLabel: "Total Wet Room Floor Area (Sq.Ft)"
  },
  outdoor: {
    title: "Outdoor Projects",
    tagline: "Bespoke pergolas, exterior stone bars, and poolside shades.",
    intro: "Expand your outdoor living space with heavy parota pergolas, custom concrete BBQ bars, marine-grade deck seals, and high seismic-rated structural footings designed for Cabo winds.",
    defaultSftRange: { min: 100, max: 3000, def: 450 },
    sftLabel: "Outdoor Area Footprint (Sq.Ft)"
  },
  custom: {
    title: "Problem Solving & Custom Work",
    tagline: "Unique creations and structural correction challenges.",
    intro: "Have a unique design idea or a complex issue that other contractors couldn't solve? We tackle special concrete casting details, custom carpentry, dynamic lighting schemes, and structural repairs.",
    defaultSftRange: { min: 10, max: 500, def: 50 },
    sftLabel: "Estimated Project Scale / Complexity Units"
  }
};

export const ESTIMATOR_ITEMS: ScopeItem[] = [
  // Remodeling
  {
    id: "rem-drywall",
    name: "Premium Plaster Smooth-Coat Render",
    basePrice: 7.5,
    unit: "sq.ft",
    category: "remodeling",
    description: "Transforms rough masonry bricks into perfect drywall-smooth paint-ready surfaces.",
    defaultSelected: true
  },
  {
    id: "rem-doors",
    name: "Solid Parota Wood Sliding Doors",
    basePrice: 2150,
    unit: "fixed",
    category: "remodeling",
    description: "Premium local parota lumber double-coated with marine-grade UV-blocking seals.",
    defaultSelected: false
  },

  // Painting
  {
    id: "paint-ext",
    name: "Elastomeric Salt-Resistant Outside Wall Coating",
    basePrice: 4.2,
    unit: "sq.ft",
    category: "painting",
    description: "Stretches under thermal changes to prevent micro-cracks and saline peeling.",
    defaultSelected: true
  },
  {
    id: "paint-prep",
    name: "Pressure Wash & Micro-Crack Plaster Patching",
    basePrice: 1.2,
    unit: "sq.ft",
    category: "painting",
    description: "High-spec 3000 PSI wash with specialized anti-fungal prep agent.",
    defaultSelected: true
  },

  // Tile Installation
  {
    id: "tile-porcelain",
    name: "Large-Format Rectified Porcelain Slab",
    basePrice: 15,
    unit: "sq.ft",
    category: "tile",
    description: "Laser-aligned tiling with self-leveling spacers for a monolithic feel.",
    defaultSelected: true
  },
  {
    id: "tile-subbed",
    name: "Polymer Self-Leveling Sub-Concrete bed",
    basePrice: 5,
    unit: "sq.ft",
    category: "tile",
    description: "Corrects concrete slope issues before tiling to eliminate hollow spots.",
    defaultSelected: true
  },

  // General Repairs
  {
    id: "rep-storm",
    name: "Hurricane Shutter Alignment & Track Tune-up",
    basePrice: 350,
    unit: "fixed",
    category: "repairs",
    description: "Full inspection, lubricates sliders, replaces floor anchor pegs for safety.",
    defaultSelected: true
  },
  {
    id: "rep-electric",
    name: "Marine-grade GFCI Receptacles & Ground Audit",
    basePrice: 420,
    unit: "fixed",
    category: "repairs",
    description: "Replaces corroded outlets with copper lines to guarantee ocean-safe power.",
    defaultSelected: true
  },

  // Airbnb Improvements
  {
    id: "air-smart",
    name: "Smart Lock & Security Access Integration",
    basePrice: 850,
    unit: "fixed",
    category: "airbnb",
    description: "Install commercial grade keypad locks with digital logs for vacation guests.",
    defaultSelected: true
  },
  {
    id: "air-closet",
    name: "Secure Lockable Owner Storage Cabinet",
    basePrice: 1200,
    unit: "fixed",
    category: "airbnb",
    description: "Solid closet frame reinforced with deadbolt locks to hide personal property.",
    defaultSelected: false
  },

  // Bathrooms & Kitchens
  {
    id: "bk-quartz",
    name: "Monolithic Quartz Waterfall Countertop",
    basePrice: 125,
    unit: "sq.ft",
    category: "bath_kitchen",
    description: "Non-porous premium stone kitchen/vanity slabs resistant to citric acid and heat.",
    defaultSelected: true
  },
  {
    id: "bk-waterproof",
    name: "Triple-layer Liquid Membrane Bathroom Pan",
    basePrice: 950,
    unit: "fixed",
    category: "bath_kitchen",
    description: "Full-height elastomeric bathroom waterproof barrier to stop downstairs mold.",
    defaultSelected: true
  },

  // Outdoor Projects
  {
    id: "out-pergola",
    name: "Heavy Solid Parota Timber Pergola",
    basePrice: 5800,
    unit: "fixed",
    category: "outdoor",
    description: "Bespoke heavy-timber shadow canopy with hurricane-resistant steel anchor plates.",
    defaultSelected: true
  },
  {
    id: "out-stone",
    name: "BBQ Island Counter & Local Stone Veneer",
    basePrice: 4200,
    unit: "fixed",
    category: "outdoor",
    description: "Reinforced concrete counter topped with slate tile for outdoor entertainment.",
    defaultSelected: false
  },

  // Problem Solving & Custom Work
  {
    id: "cust-design",
    name: "Bespoke Problem Assessment & Engineering",
    basePrice: 120,
    unit: "sq.ft",
    category: "custom",
    description: "Tailored architectural solutions to fix moisture traps or structural layout bugs.",
    defaultSelected: true
  },
  {
    id: "cust-furniture",
    name: "Custom Parota Furniture & Architectural Details",
    basePrice: 1800,
    unit: "fixed",
    category: "custom",
    description: "Individually drafted built-in storage or highlight woodwork created to match your home.",
    defaultSelected: false
  }
];

export const QUALITY_TIER_FACTORS = {
  comfort: {
    factor: 1.0,
    name: "Essential Comfort",
    desc: "Local quality materials meeting strict functional durability, elegant clean lines, and excellent everyday performance. Highly popular for premium long-term renters."
  },
  premium: {
    factor: 1.35,
    name: "Premium Selection (Highly Recommended)",
    desc: "Upgraded imported porcelain, solid oak/Parota wood assemblies, luxury thick stone counters, enhanced waterproofing grades, and advanced humidity guards. Perfect for premium condo living."
  },
  luxury: {
    factor: 1.8,
    name: "Luxury Estate",
    desc: "Architectural custom stone carvings (marble/travertine), heavy solid brass imported hardware, customized multi-zone smart controllers, extreme marine saltwater protection coatings. Absolute state-of-the-art finish."
  }
};
