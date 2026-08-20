export interface SpecificationItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  shortDesc: string;
  heroImage: string;
  fullDesc: string;
  applications: string[];
  benefits: { title: string; desc: string; iconName: string }[];
  specifications: SpecificationItem[];
  caseStudy?: {
    title: string;
    location: string;
    description: string;
    quote: string;
    author: string;
    highlight: string;
    image: string;
  };
  galleryImages?: {
    url: string;
    caption: string;
    tag: string;
  }[];
  diagramPoints: {
    id: string;
    x: number;
    y: number;
    title: string;
    description: string;
  }[];
  faq: { q: string; a: string }[];
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  image: string;
  additionalImages: string[];
  description: string;
  engineeringSpec: string;
  quote: {
    text: string;
    author: string;
  };
}

export const PROJECTS_GALLERY: ProjectShowcaseItem[] = [
  {
    id: "terraforce-tiered-commercial",
    title: "Tiered Terraforce® Retaining Wall",
    subtitle: "Multi-tier round-face wall on a commercial site",
    location: "Free State, South Africa",
    tag: "TERRAFORCE",
    image: "/images/terraforce-tiered-commercial.jpg",
    additionalImages: [
      "/images/terraforce-tiered-commercial.jpg",
      "/images/terraforce-industrial.jpg",
      "/images/terraforce-tiered-garden.jpg"
    ],
    description: "Multi-tier Terraforce® round-face wall installed by the Ecocrete site team. The stepped setback carries the load, and every open block is ready to be planted.",
    engineeringSpec: "Round-face blocks laid to a stepped setback on a 25 MPa strip footing with 19mm aggregate backfill.",
    quote: {
      text: "One team cast the blocks and put the wall up — we didn't have to coordinate anyone else.",
      author: "Site Foreman, Free State"
    }
  },
  {
    id: "terraforce-poolside",
    title: "Poolside Terraforce® Terrace",
    subtitle: "Curved retaining terrace wrapping a swimming pool",
    location: "Bloemfontein",
    tag: "TERRAFORCE",
    image: "/images/terraforce-poolside.jpg",
    additionalImages: [
      "/images/terraforce-poolside.jpg",
      "/images/terraforce-tiered-garden.jpg"
    ],
    description: "The round-face profile takes the pool radius without cutting, and every open core is planted so the wall reads as garden, not concrete.",
    engineeringSpec: "Serpentine gravity wall on a laser-levelled strip footing — 22 MPa dry-cast round-face blocks.",
    quote: {
      text: "It looks like a garden feature, not a retaining wall.",
      author: "Home Owner"
    }
  },
  {
    id: "precast-boundary-estate",
    title: "Precast Boundary Wall",
    subtitle: "H-post and interlocking panel system",
    location: "Free State",
    tag: "WALLING",
    image: "/images/precast-boundary-h-post.jpg",
    additionalImages: [
      "/images/precast-boundary-h-post.jpg",
      "/images/precast-boundary-smooth.jpg",
      "/images/precast-boundary-decorative.jpg"
    ],
    description: "Reinforced H-post and slab boundary wall — cast in the yard, delivered on our truck, installed by our crew. Panels stack tight, tongue-and-groove, no sightline gaps.",
    engineeringSpec: "H-posts set 600–900mm in 25 MPa footings; 1.8m–2.4m panel heights, smooth fair-face finish.",
    quote: {
      text: "Wall was standing in a day and a half. Straight, tight joints, no rework.",
      author: "Property Owner"
    }
  }
];

export interface ProductItem {
  id: string;
  name: string;
  category: 'walling' | 'terraforce' | 'precast';
  categoryLabel: string;
  code: string;
  image: string;
  shortDesc: string;
  dimensions: string;
  weight: string;
  strengthMPa: string;
  application: string;
  features: string[];
  inStock: boolean;
  licensed?: boolean;
}

export const COMPANY_INFO = {
  name: "Ecocrete",
  tagline: "Your precast + concrete product specialist",
  subTagline: "We manufacture and install — 30 years in the industry.",
  licenseText: "Ecocrete — precast + concrete product specialist. We manufacture and install.",
  contactPerson: "Elza Liebenberg",
  phone: "+27 83 655 6590",
  phoneClean: "+27836556590",
  landline: "051 43 53 590",
  landlineClean: "+27514353590",
  emailPrimary: "sales@ecocrete.co.za",
  emailSecondary: "elzamaritz136@gmail.com",
  location: "Bloemfontein, Free State",
  serviceFootprint: "Free State, Northern Cape, Lesotho border, and central South Africa",
  hours: {
    weekdays: "Mon – Fri: 07:30 – 16:30",
    saturday: "Saturday: 08:00 – 12:00",
    sunday: "Sunday: Closed"
  },
  stats: [
    { value: "30", label: "Years in the industry", sub: "Casting in the Free State since the mid-1990s" },
    { value: "3", label: "Product families", sub: "Walling · Terraforce · Precast" },
    { value: "Yard", label: "Manufacture & install", sub: "One team from mould to finished wall" },
    { value: "Local", label: "Bloemfontein based", sub: "Delivery on our own truck" }
  ]
};

// Five services — mapped 1:1 to the five boxes on the Ecocrete product-tree note:
// Walling · Terraforce · Extend Walling · Repairs · Precast
export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "walling",
    slug: "walling",
    title: "Walling",
    tagline: "Uniquall panels and Precon Wall — smooth, louvred, sandstone or Global Plain, in different heights.",
    category: "Walling",
    shortDesc: "Modular precast walling — Uniquall (650 & 500 slab) and Precon Wall in four finishes, available in different heights.",
    heroImage: "/images/walling-stone-face.jpg",
    fullDesc: `Our walling range covers two systems: Uniquall panels in 650-slab and 500-slab formats, and Precon Wall in four finishes — Louvred, Between, Sandstone and Global Plain. All are available in different heights so a run can step neatly down a sloping site.

    Walling is cast in the Ecocrete yard, delivered on our own vehicle, and — if you'd like — installed by our own team. It's a full boundary system: reinforced H-posts, interlocking slabs, and matching pillars and caps from the Precast range.`,
    applications: [
      "Residential and small-holding boundary walls",
      "Estate perimeter walling with matching pillars and caps",
      "Commercial and industrial site perimeters",
      "Highway acoustic screens and noise-reduction walling",
      "Feature stone-face elevations with mixed finishes"
    ],
    galleryImages: [
      { url: "/images/precast-boundary-h-post.jpg", caption: "H-post and horizontal slab system, standard height", tag: "UNIQUALL" },
      { url: "/images/walling-stone-face.jpg", caption: "Precon Wall — sandstone / ashlar-style relief panel", tag: "PRECON WALL" },
      { url: "/images/precast-boundary-smooth.jpg", caption: "Smooth fair-face precast boundary wall", tag: "SMOOTH" },
      { url: "/images/precast-boundary-decorative.jpg", caption: "Fair-face wall with matching pillar caps", tag: "PILLARED" }
    ],
    benefits: [
      { title: "Two systems", desc: "Uniquall in 650 & 500 slab formats, plus Precon Wall in four finishes.", iconName: "Layers" },
      { title: "Different heights on one run", desc: "Available in a range of heights so the wall steps neatly down sloping ground.", iconName: "Ruler" },
      { title: "Yard supply or installed", desc: "Collect from the yard, take delivery on our truck, or book our crew to install.", iconName: "Award" },
      { title: "No paint, no rust, no rot", desc: "Precast concrete doesn't need painting, won't rust like steel, won't rot like timber.", iconName: "CheckCircle" }
    ],
    specifications: [
      { label: "Systems", value: "Uniquall (650 slabs, 500 slabs) · Precon Wall" },
      { label: "Finishes", value: "Louvred · Between · Sandstone · Global Plain · Smooth Fair-Face" },
      { label: "Heights", value: "Multiple panel heights — walls step down sloping sites" },
      { label: "Post", value: "Reinforced H-post set in a 25 MPa concrete footing" },
      { label: "Joint", value: "Tongue-and-groove — no sightline gap" },
      { label: "Supply", value: "Yard collection or on our own truck" }
    ],
    diagramPoints: [
      { id: "w-1", x: 35, y: 35, title: "Reinforced H-post", description: "Cast H-profile column carrying the horizontal slabs." },
      { id: "w-2", x: 65, y: 50, title: "Interlocking slab", description: "Tongue-and-groove joint keeps the wall sightline gap-free." },
      { id: "w-3", x: 35, y: 80, title: "Concrete footing", description: "Post foot set in a 25 MPa concrete footing." }
    ],
    faq: [
      { q: "What finishes can I choose from?", a: "Smooth Fair-Face, Louvred, Between, Sandstone and Global Plain. You can mix finishes per elevation." },
      { q: "Do you supply the pillars and caps too?", a: "Yes — pillars (square, fluted, round 200/300) and matching caps are in the Precast range, cast in the same yard for a matched finish." }
    ]
  },
  {
    id: "terraforce",
    slug: "terraforce",
    title: "Terraforce®",
    tagline: "Licensed round-face retaining blocks — L15, 4x4, Step, Bat, Terrafix and Terrapac.",
    category: "Terraforce",
    shortDesc: "The full Terraforce® range in stock — round-face gravity walls that take tight curves without cutting.",
    heroImage: "/images/terraforce-tiered-commercial.jpg",
    fullDesc: `Terraforce® round-face retaining blocks are our core retaining product. The interlocking open-loop profile takes convex and concave curves without cutting, and the hollow core takes topsoil so the wall doubles as a planter.

    We stock the full block range — L15, 4x4, Step, Bat, Terrafix and Terrapac. Blocks leave the yard on our own truck; on request our site team lays the foundation, sets the wall, and hands it back finished.`,
    applications: [
      "Residential garden terracing, poolside walls and driveway cuts",
      "Commercial site earth retention and slope stabilisation",
      "Roadside embankments and highway service-station cuts",
      "Planted 'green belt' walls with indigenous groundcover",
      "Tiered feature walls and integrated garden steps"
    ],
    galleryImages: [
      { url: "/images/terraforce-tiered-commercial.jpg", caption: "Multi-tier Terraforce® wall on a commercial site", tag: "COMMERCIAL" },
      { url: "/images/terraforce-poolside.jpg", caption: "Curved poolside terrace with plantable open cores", tag: "POOLSIDE" },
      { url: "/images/terraforce-tiered-garden.jpg", caption: "Terraforce® wall next to a residential building", tag: "RESIDENTIAL" },
      { url: "/images/terraforce-industrial.jpg", caption: "Round-face wall stacked to the top of a perimeter fence", tag: "INDUSTRIAL" }
    ],
    benefits: [
      { title: "Curves without cutting", desc: "Round-face profile handles convex and concave radii — no site cutting, no mortar.", iconName: "ShieldCheck" },
      { title: "Plantable open core", desc: "Every block has a hollow core that takes topsoil for indigenous groundcover.", iconName: "Leaf" },
      { title: "Full range in stock", desc: "L15, 4x4, Step, Bat, Terrafix and Terrapac — mix profiles on the same wall for details.", iconName: "Layers" },
      { title: "Licensed manufacture", desc: "Terraforce® is a licensed product — quality-assured against the range spec.", iconName: "Award" }
    ],
    specifications: [
      { label: "Block range", value: "L15 · 4x4 · Step · Bat · Terrafix · Terrapac" },
      { label: "Typical block (L15)", value: "340 × 400 × 180 mm · ≈ 25 kg" },
      { label: "Compressive strength", value: "22 – 30 MPa (SABS 1215 range)" },
      { label: "Blocks per m²", value: "≈ 14.7 blocks / m² at standard face angle" },
      { label: "Gravity height", value: "Up to ≈ 5 m unreinforced; higher with geogrid tie-back" },
      { label: "Supply", value: "Yard collection or on our own truck" }
    ],
    caseStudy: {
      title: "Poolside Terrace — Bloemfontein",
      location: "Free State",
      description: `A curved Terraforce® terrace wrapping a swimming pool patio. The round-face profile follows the pool line without cutting, and every open core has been planted so the wall reads as garden, not concrete.

      The same crew that cast the blocks did the foundation, the setout and the planting — one point of contact from yard to finished wall.`,
      quote: "It looks like a garden feature, not a retaining wall.",
      author: "Home Owner",
      highlight: "Ecocrete stocks and installs the full Terraforce® range across the Free State.",
      image: "/images/terraforce-poolside.jpg"
    },
    diagramPoints: [
      { id: "tf-1", x: 35, y: 28, title: "Open plantable core", description: "Hollow centre takes topsoil for indigenous groundcover." },
      { id: "tf-2", x: 60, y: 45, title: "Round-face interlock", description: "Blocks lock together horizontally and vertically without mortar." },
      { id: "tf-3", x: 75, y: 65, title: "Free-draining backfill", description: "Coarse 19mm aggregate behind the wall prevents water build-up." },
      { id: "tf-4", x: 25, y: 75, title: "Concrete strip footing", description: "Laser-levelled 25 MPa strip footing so the first course starts flat." }
    ],
    faq: [
      { q: "Which Terraforce® blocks do you keep?", a: "The full working range — L15, 4x4, Step, Bat, Terrafix and Terrapac." },
      { q: "Can you supply blocks only, or do you install as well?", a: "Both. Collect from the yard, take delivery on our truck, or have our team do the full install — foundation, wall and finishing." }
    ]
  },
  {
    id: "extend-walling",
    slug: "extend-walling",
    title: "Extend Walling",
    tagline: "Take an existing wall higher — matched profile, tied-in cleanly, no wall replacement.",
    category: "On-site Service",
    shortDesc: "We add courses to an existing precast wall or retaining wall to make it higher — matched to the current profile and finish.",
    heroImage: "/images/precast-boundary-h-post.jpg",
    fullDesc: `Sometimes the boundary just isn't high enough. Instead of replacing the wall, we extend it: we match the existing profile course-for-course, tie the new courses into the old, and finish so the join reads clean from the outside.

    Extending works for both precast boundary walling (Uniquall / Precon) and Terraforce® retaining walls — as long as the existing footing and post depth can carry the new height. If it can't, we upgrade the footing at the same time.`,
    applications: [
      "Adding privacy height to an existing boundary wall",
      "Raising an estate perimeter for security upgrades",
      "Extending a retaining wall to hold a new landscaped tier",
      "Blocking new sightlines after next-door development",
      "Matching an old wall profile when the original supplier is gone"
    ],
    benefits: [
      { title: "No replacement", desc: "Keep the existing wall — we only add what you need on top.", iconName: "CheckSquare" },
      { title: "Matched profile", desc: "New courses match the existing panel or Terraforce® profile.", iconName: "Ruler" },
      { title: "Clean join", desc: "New courses tie into the old cleanly — no visible seam from the street side.", iconName: "ShieldCheck" },
      { title: "Footing upgrade if needed", desc: "If the existing footing can't carry more height, we deepen it as part of the job.", iconName: "Layers" }
    ],
    specifications: [
      { label: "Works on", value: "Precast walling (Uniquall / Precon) and Terraforce® retaining walls" },
      { label: "Profile match", value: "Cast new panels or blocks to match the existing profile" },
      { label: "Foundation", value: "Existing footing checked; deepened or reinforced if needed" },
      { label: "Site visit", value: "Free within the Bloemfontein service area — booking on request" },
      { label: "Coverage", value: "Free State, Northern Cape, Lesotho border, central SA" },
      { label: "Contact", value: "Elza Liebenberg — +27 83 655 6590" }
    ],
    diagramPoints: [
      { id: "e-1", x: 35, y: 55, title: "Existing wall", description: "Kept in place — new courses stack on top." },
      { id: "e-2", x: 65, y: 30, title: "New courses", description: "Cast to match the existing profile and finish." }
    ],
    faq: [
      { q: "Do you have to replace the whole wall?", a: "No. If the footing is sound, we only add what's needed on top and tie it into the existing wall." },
      { q: "Can you extend a wall from a different manufacturer?", a: "Usually yes — we cast panels or blocks to match the existing profile. Send us a photo and we'll tell you." }
    ]
  },
  {
    id: "repairs",
    slug: "repairs",
    title: "Repairs",
    tagline: "Shifted Terraforce® courses, cracked or leaning panels, broken caps — small jobs welcome.",
    category: "On-site Service",
    shortDesc: "We repair walls we cast, and walls we didn't. Terraforce® courses re-set, panels replaced, posts re-plumbed.",
    heroImage: "/images/precast-boundary-smooth.jpg",
    fullDesc: `Boundary walls take a knock and retaining walls shift with time. Instead of replacing the wall, we come out, assess the damage, and repair it in place: re-setting courses, swapping cracked panels, replumbing leaning posts, and replacing broken caps or copings.

    Small repair jobs are welcome — you don't have to be a big site to get a site visit. Photos over WhatsApp are usually enough to get an initial quote.`,
    applications: [
      "Shifted or slumped Terraforce® retaining courses",
      "Cracked or impact-damaged precast boundary panels",
      "Leaning or knocked H-posts",
      "Broken or missing pillar caps and copings",
      "Sagging kerbs, cracked copings and knocked pillar caps"
    ],
    benefits: [
      { title: "Repair, don't replace", desc: "We fix what's there rather than tearing the wall out.", iconName: "CheckSquare" },
      { title: "Small jobs welcome", desc: "One panel, one course, one cap — happy to come out for it.", iconName: "Users" },
      { title: "WhatsApp a photo", desc: "Send a photo to +27 83 655 6590 for an initial idea of scope and cost.", iconName: "Phone" },
      { title: "Match parts from the yard", desc: "Replacement panels, blocks and caps cast in the same yard for a matched finish.", iconName: "Award" }
    ],
    specifications: [
      { label: "Terraforce® repairs", value: "Course re-setting, block replacement, backfill drainage" },
      { label: "Panel repairs", value: "Cracked / knocked panel replacement, joint re-setting" },
      { label: "Post repairs", value: "Leaning / knocked post replumb or replacement" },
      { label: "Cap & coping", value: "Replacement caps, copings and window sills cast on request" },
      { label: "Site visit", value: "Bloemfontein & surrounds — WhatsApp a photo for a quick quote" },
      { label: "Contact", value: "Elza Liebenberg — +27 83 655 6590" }
    ],
    diagramPoints: [
      { id: "r-1", x: 40, y: 40, title: "Shifted course", description: "Re-set to original line and re-backfilled with 19mm aggregate." },
      { id: "r-2", x: 65, y: 60, title: "Replaced panel", description: "Cracked panel swapped, joint re-sealed, cap re-set." }
    ],
    faq: [
      { q: "Do you repair walls you didn't build?", a: "Yes. If the profile is standard we can supply matching parts; if it isn't we cast to match." },
      { q: "How do I get a quick quote?", a: "WhatsApp a photo and the site address to +27 83 655 6590 — we'll come back to you with an idea of scope." }
    ]
  },
  {
    id: "precast",
    slug: "precast",
    title: "Precast",
    tagline: "Stepping stones, pillar caps, copings, sills, balls, waskattie, kerbs and pillars.",
    category: "Precast",
    shortDesc: "The full precast range — everything the walling and Terraforce® ranges leave off, cast in the Ecocrete yard.",
    heroImage: "/images/stepping-stones-display.jpg",
    fullDesc: `The precast range is what's on the pallets in the Ecocrete yard alongside the walling: stepping stones (Pyramid 400 / Pyramid 500 / Roman), pillar caps and pillars (square, fluted, round 200/300), copings, window sills (400×400, 450×450, 500×500, 500×800), precast balls (230 and 300), waskattie wash basins (enkel and dubbel), and kerbs.

    Most items are on the pallet in the yard for collection. Custom quantities and bespoke sizes are cast to order on a short lead time.`,
    applications: [
      "Garden paths, stepping stones and patio inserts",
      "Gate pillars, pillar caps and coping stones",
      "Window sills — new build and replacement",
      "Kerb edging and wash-down bays",
      "Ornamental balls, planters, tables, benches & braai units"
    ],
    galleryImages: [
      { url: "/images/stepping-stones-display.jpg", caption: "Stepping-stone range on display in the yard", tag: "STEPPING STONES" },
      { url: "/images/pillar-caps-pyramid.jpg", caption: "Pyramid pillar caps stacked on pallet", tag: "PILLAR CAPS" },
      { url: "/images/pillar-fluted-cap.jpg", caption: "Fluted gate pillar with matching cap", tag: "PILLARS" },
      { url: "/images/balusters.jpg", caption: "Turned white balusters for a balcony run", tag: "BALUSTERS" },
      { url: "/images/coping-stone.jpg", caption: "Coping stone — smooth top profile", tag: "COPING" },
      { url: "/images/kerb-installation.jpg", caption: "Precast kerbstone laid against fresh paving", tag: "KERB" },
      { url: "/images/precast-braai.jpg", caption: "Stone-face precast braai (BBQ) unit", tag: "BRAAI" },
      { url: "/images/precast-table-bench.jpg", caption: "Precast garden table with matching benches", tag: "TABLE & BENCH" },
      { url: "/images/screen-blocks.jpg", caption: "Decorative screen blocks on pallet", tag: "SCREEN BLOCK" },
      { url: "/images/concrete-planter.jpg", caption: "Precast concrete planter", tag: "PLANTER" },
      { url: "/images/showroom-display.jpg", caption: "Yard display: balls, benches & pillar caps", tag: "YARD" }
    ],
    benefits: [
      { title: "The full range in one yard", desc: "Stepping stones, caps, copings, sills, balls, waskattie, kerbs, pillars — no running around.", iconName: "Layers" },
      { title: "Matched pillar to cap", desc: "Square, fluted and round pillars with caps sized to match — same yard, same finish.", iconName: "Ruler" },
      { title: "Small quantities off the pallet", desc: "Grab a few window sills or a couple of caps without a minimum order.", iconName: "Award" },
      { title: "Custom sizes cast to order", desc: "Non-standard sizes cast on a short lead time — bring the dimension.", iconName: "Sun" }
    ],
    specifications: [
      { label: "Stepping stones", value: "Pyramid 400 · Pyramid 500 · Roman" },
      { label: "Pillars", value: "Square · Fluted · Round 200 · Round 300" },
      { label: "Pillar caps", value: "To match all pillar profiles" },
      { label: "Window sills", value: "400×400 · 450×450 · 500×500 · 500×800" },
      { label: "Waskattie basins", value: "Enkel · Dubbel" },
      { label: "Balls", value: "230 · 300" },
      { label: "Also cast", value: "Copings, kerbs, balusters, screen blocks, planters, tables, benches, braai units" }
    ],
    diagramPoints: [
      { id: "p-1", x: 30, y: 40, title: "Matched pillar + cap", description: "Pillars and caps cast in the same yard so they match on profile and finish." },
      { id: "p-2", x: 65, y: 60, title: "Stone-face relief", description: "Steel moulds give consistent ashlar-style stone face on walls, braais and planters." }
    ],
    faq: [
      { q: "Can I collect small quantities from the yard?", a: "Yes — most stock items are on the pallet ready to load. Larger quantities are best pre-ordered." },
      { q: "Do you cast custom sizes?", a: "Yes. Non-standard sizes are cast to order on a short lead time — send the dimension and quantity." }
    ]
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // ==================== WALLING ====================
  {
    id: "prod-uniquall-650",
    name: "Uniquall 650 Slab",
    category: "walling",
    categoryLabel: "Walling",
    code: "UNI-650",
    image: "/images/precast-boundary-h-post.jpg",
    shortDesc: "Uniquall precast walling — 650 slab format, available in different heights.",
    dimensions: "650 mm slab format",
    weight: "Per panel spec",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Residential and estate boundary walls — the taller Uniquall option",
    features: ["650 slab format", "Available in different heights", "Tongue-and-groove joint", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-uniquall-500",
    name: "Uniquall 500 Slab",
    category: "walling",
    categoryLabel: "Walling",
    code: "UNI-500",
    image: "/images/precast-boundary-smooth.jpg",
    shortDesc: "Uniquall precast walling — 500 slab format, available in different heights.",
    dimensions: "500 mm slab format",
    weight: "Per panel spec",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Residential boundary walls — the standard Uniquall option",
    features: ["500 slab format", "Available in different heights", "Tongue-and-groove joint", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-precon-louvred",
    name: "Precon Wall — Louvred",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-LOUVRED",
    image: "/images/walling-stone-face.jpg",
    shortDesc: "Louvred-finish Precon Wall panel with horizontal relief lines.",
    dimensions: "Standard panel sizes",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Boundary walls with a subtle horizontal grain",
    features: ["Louvred face relief", "Consistent cast dimension", "Pairs with Uniquall post system", "Available in different heights"],
    inStock: true
  },
  {
    id: "prod-precon-between",
    name: "Precon Wall — Between",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-BETWEEN",
    image: "/images/precast-boundary-decorative.jpg",
    shortDesc: "'Between' finish Precon Wall — clean recessed joint detail.",
    dimensions: "Standard panel sizes",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Modern boundary walls with a defined shadow line",
    features: ["Recessed joint detail", "Clean modern face", "Cast in the Ecocrete yard", "Available in different heights"],
    inStock: true
  },
  {
    id: "prod-precon-sandstone",
    name: "Precon Wall — Sandstone",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-SANDSTONE",
    image: "/images/walling-stone-face.jpg",
    shortDesc: "Sandstone / ashlar-style relief Precon Wall panel.",
    dimensions: "Standard panel sizes",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Feature elevations, decorative boundary walls, stone-look façades",
    features: ["Ashlar-style stone relief", "Cast from steel mould for consistent face", "Pairs with matching pillars", "Available in different heights"],
    inStock: true
  },
  {
    id: "prod-precon-globalplain",
    name: "Precon Wall — Global Plain",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-GLOBAL",
    image: "/images/precast-boundary-smooth.jpg",
    shortDesc: "Smooth 'Global Plain' Precon Wall panel — clean fair-face finish.",
    dimensions: "Standard panel sizes",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Modern boundary walls, industrial estate perimeters",
    features: ["Smooth fair-face finish", "No paint required", "Cast in the Ecocrete yard", "Available in different heights"],
    inStock: true
  },

  // ==================== TERRAFORCE ====================
  {
    id: "prod-tf-l15",
    name: "Terraforce® L15",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-L15",
    image: "/images/terraforce-tiered-garden.jpg",
    shortDesc: "The workhorse Terraforce® round-face block — takes tight curves without cutting and plants into the open core.",
    dimensions: "340 × 400 × 180 mm",
    weight: "≈ 25 kg",
    strengthMPa: "22 – 25 MPa",
    application: "Garden and residential retaining walls, planted terraces, driveway cuts",
    features: ["Round-face profile — convex & concave curves", "Open plantable core", "Reversible for split- or smooth-face", "Yard collection or delivered"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-4x4",
    name: "Terraforce® 4x4",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-4X4",
    image: "/images/terraforce-tiered-commercial.jpg",
    shortDesc: "Heavier Terraforce® format for commercial embankments and taller gravity walls.",
    dimensions: "≈ 420 × 400 × 200 mm",
    weight: "≈ 34 kg",
    strengthMPa: "25 – 30 MPa",
    application: "Commercial retaining, tall gravity walls, geogrid-reinforced installations",
    features: ["Higher gravity height per course", "Suited to geogrid tie-back", "Interlocks with L15 in the same wall", "Smooth or split-face"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-step",
    name: "Terraforce® Step",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-STEP",
    image: "/images/terraforce-tiered-garden.jpg",
    shortDesc: "Terraforce® stepping-course block for integrated garden steps and access.",
    dimensions: "Matched to L15 / 4x4",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Integrated stepping in retaining walls, garden access, terrace steps",
    features: ["Integrated stepping profile", "Matches L15 & 4x4 face", "Same yard, same finish", "Licensed product"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-bat",
    name: "Terraforce® Bat",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-BAT",
    image: "/images/terraforce-industrial.jpg",
    shortDesc: "Terraforce® Bat block — end and detail finishing.",
    dimensions: "Matched to L15 / 4x4",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Wall terminations, corner details, tie-ins",
    features: ["Neat corner & end details", "Matches L15 & 4x4", "Cast in the same yard", "Licensed product"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-fix",
    name: "Terraforce® Terrafix",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-FIX",
    image: "/images/terraforce-poolside.jpg",
    shortDesc: "Terrafix — additional Terraforce® profile for specific site conditions.",
    dimensions: "Product-specific",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Specialist retaining details, engineered wall specs",
    features: ["Extension of the Terraforce® range", "Available on request", "Same interlocking system", "Licensed product"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-pac",
    name: "Terraforce® Terrapac",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-PAC",
    image: "/images/terraforce-tiered-commercial.jpg",
    shortDesc: "Terrapac — additional Terraforce® profile for specific site conditions.",
    dimensions: "Product-specific",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Specialist retaining details, engineered wall specs",
    features: ["Extension of the Terraforce® range", "Available on request", "Same interlocking system", "Licensed product"],
    inStock: true,
    licensed: true
  },

  // ==================== PRECAST ====================
  {
    id: "prod-step-pyramid-400",
    name: "Stepping Stone — Pyramid 400",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-STEP-P400",
    image: "/images/stepping-stones-display.jpg",
    shortDesc: "Pyramid-pattern stepping stone in 400mm format.",
    dimensions: "400 × 400 mm",
    weight: "Per stone",
    strengthMPa: "≈ 25 MPa",
    application: "Garden paths, patio inserts, lawn access lines",
    features: ["Pyramid pattern face", "400 mm format", "Small quantities off the pallet", "Yard collection"],
    inStock: true
  },
  {
    id: "prod-step-pyramid-500",
    name: "Stepping Stone — Pyramid 500",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-STEP-P500",
    image: "/images/stepping-stones-display.jpg",
    shortDesc: "Pyramid-pattern stepping stone in 500mm format — larger footprint.",
    dimensions: "500 × 500 mm",
    weight: "Per stone",
    strengthMPa: "≈ 25 MPa",
    application: "Garden paths, patio inserts, lawn access lines",
    features: ["Pyramid pattern face", "500 mm format", "Small quantities off the pallet", "Yard collection"],
    inStock: true
  },
  {
    id: "prod-step-roman",
    name: "Stepping Stone — Roman",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-STEP-ROM",
    image: "/images/stepping-stones-display.jpg",
    shortDesc: "Roman-pattern stepping stone — organic textured face.",
    dimensions: "Standard Roman format",
    weight: "Per stone",
    strengthMPa: "≈ 25 MPa",
    application: "Garden paths, courtyard patios, ornamental walkways",
    features: ["Roman textured face", "Yard pallet stock", "Warm ornamental look", "Small quantities off the pallet"],
    inStock: true
  },
  {
    id: "prod-pillar-cap",
    name: "Pillar Cap — Square / Fluted / Round",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-CAP",
    image: "/images/pillar-caps-pyramid.jpg",
    shortDesc: "Pillar caps sized to match our square, fluted and round pillar range.",
    dimensions: "Square · Fluted · Round 200 · Round 300",
    weight: "Per size",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gate-pillar terminations, boundary-wall pillar caps, garden feature pillars",
    features: ["Matches Ecocrete pillars", "Four profile options", "Cast from the same yard — matched finish", "Yard stock"],
    inStock: true
  },
  {
    id: "prod-pillar",
    name: "Pillar — Square / Fluted / Round",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-PILL",
    image: "/images/pillar-fluted-cap.jpg",
    shortDesc: "Square, fluted and round precast pillars — with matching caps available.",
    dimensions: "Square · Fluted · Round 200 · Round 300",
    weight: "Per profile",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gate pillars, boundary-wall pillars, garden entrances, driveway markers",
    features: ["Four profile options", "Pair with matching cap", "Solid dry-cast concrete", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-coping",
    name: "Coping",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-COPE",
    image: "/images/coping-stone.jpg",
    shortDesc: "Precast coping stones — smooth top profile for wall tops and step nosings.",
    dimensions: "Standard coping section",
    weight: "Per unit",
    strengthMPa: "≈ 25 MPa",
    application: "Boundary-wall tops, garden-wall tops, step nosings, coping details",
    features: ["Smooth top profile", "Weather-shed drip", "Cast in the Ecocrete yard", "Yard pallet stock"],
    inStock: true
  },
  {
    id: "prod-window-sill",
    name: "Window Sill — 400 / 450 / 500 / 500×800",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-SILL",
    image: "/images/coping-stone.jpg",
    shortDesc: "Window sills in 400×400, 450×450, 500×500 and 500×800 formats.",
    dimensions: "400×400 · 450×450 · 500×500 · 500×800",
    weight: "Per size",
    strengthMPa: "≈ 25 MPa",
    application: "Face-brick window sills, sill replacements, building specialists",
    features: ["Four standard sizes", "Weather-shed drip detail", "Consistent cast dimensions", "Yard stock"],
    inStock: true
  },
  {
    id: "prod-ball",
    name: "Ball — 230 / 300",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-BALL",
    image: "/images/showroom-display.jpg",
    shortDesc: "Ornamental precast concrete balls — 230 mm and 300 mm.",
    dimensions: "230 mm · 300 mm",
    weight: "Per size",
    strengthMPa: "≈ 25 MPa",
    application: "Pillar tops, driveway markers, garden accents, feature verges",
    features: ["Two diameters — 230 & 300", "Cast solid", "Weather-durable", "Yard pallet stock"],
    inStock: true
  },
  {
    id: "prod-waskattie",
    name: "Waskattie — Enkel / Dubbel",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-WASK",
    image: "/images/showroom-display.jpg",
    shortDesc: "Precast wash basin (waskattie) — single (enkel) and double (dubbel) formats.",
    dimensions: "Enkel · Dubbel",
    weight: "Per format",
    strengthMPa: "≈ 30 MPa",
    application: "Wash-down bays, outdoor scullery, farm and workshop wash points",
    features: ["Two formats — Enkel & Dubbel", "Solid one-piece cast", "Weather-durable", "Yard stock"],
    inStock: true
  },
  {
    id: "prod-kerb",
    name: "Kerb",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-KERB",
    image: "/images/kerb-installation.jpg",
    shortDesc: "Standard road kerbs for driveway and yard edging.",
    dimensions: "Standard kerb section",
    weight: "≈ 100 kg per unit",
    strengthMPa: "≈ 30 MPa",
    application: "Driveway edges, parking-bay definition, road kerbing, yard perimeters",
    features: ["Standard road kerb", "Consistent cast dimension", "Impact-resistant against wheel strike", "Bulk pallet delivery"],
    inStock: true
  }
];

export const TESTIMONIALS = [
  {
    quote: "One team cast the blocks and put the wall up — we didn't have to coordinate anyone else.",
    author: "Site Foreman",
    location: "Free State",
    project: "Tiered Terraforce® retaining wall",
    rating: 5
  },
  {
    quote: "The Terraforce® wall around the pool looks like a garden feature — every open block was planted and it's grown in beautifully.",
    author: "Home Owner",
    location: "Bloemfontein",
    project: "Poolside terrace",
    rating: 5
  },
  {
    quote: "Wall was standing in a day and a half. Straight, tight joints, no rework.",
    author: "Property Owner",
    location: "Free State",
    project: "Precast boundary wall",
    rating: 5
  },
  {
    quote: "Elza matched the profile of our old wall exactly when we extended it higher. You can't see the join from the street.",
    author: "Estate Manager",
    location: "Bloemfontein",
    project: "Extending existing walling",
    rating: 5
  }
];

export const FAQ_GENERAL = [
  {
    question: "Where is Ecocrete based and which areas do you cover?",
    answer: "We're based in Bloemfontein, Free State. We manufacture in our own yard and deliver / install across the Free State, Northern Cape, the Lesotho border and central South Africa."
  },
  {
    question: "Do you supply only, or do you install too?",
    answer: "Both. Collect from the yard, take delivery on our truck, or book our own site crew for the full install — foundation, wall and finishing. 'We manufacture and install' — it's on the signboard."
  },
  {
    question: "Which Terraforce® blocks do you keep?",
    answer: "The full working range — L15, 4x4, Step, Bat, Terrafix and Terrapac. Larger custom quantities are cast to order on a short lead time."
  },
  {
    question: "Can you extend an existing wall higher?",
    answer: "Yes — extending walling is a standard job for us, on both precast boundary walls and Terraforce® retaining walls. We match the existing profile course-for-course."
  },
  {
    question: "Do you handle small repair jobs?",
    answer: "Yes. Shifted Terraforce® courses, cracked panels, leaning posts, replacement caps — small repair jobs are welcome, not just full installs. WhatsApp a photo to +27 83 655 6590 for a quick quote."
  },
  {
    question: "What's in the Precast range?",
    answer: "Stepping stones (Pyramid 400/500, Roman), pillar caps, pillars (square, fluted, round 200/300), copings, window sills (400/450/500/500×800), balls (230/300), waskattie (enkel/dubbel) and kerbs."
  },
  {
    question: "How do I request a quote?",
    answer: "Use the Quote form on this site, email sales@ecocrete.co.za, or phone the yard on 051 43 53 590 / Elza on +27 83 655 6590."
  }
];
