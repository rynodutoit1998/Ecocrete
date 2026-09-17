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
  category: 'walling' | 'terraforce' | 'storage-units' | 'precast' | 'landscaping';
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
  contactPerson: "Ecocrete Sales",
  phone: "073 966 9931",
  phoneClean: "+27739669931",
  landline: "051 435 3590",
  landlineClean: "+27514353590",
  emailPrimary: "sales@ecocrete.co.za",
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
    tagline: "Uniquall panels and Precon Wall — Louvred, Between, Sandstone or Global Plain, in different heights.",
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
      { url: "/images/precast-boundary-decorative.jpg", caption: "Uniq Wall with integrated pillars and decorative caps", tag: "UNIQ WALL" }
    ],
    benefits: [
      { title: "Two systems", desc: "Uniquall in 650 & 500 slab formats, plus Precon Wall in four finishes.", iconName: "Layers" },
      { title: "Different heights on one run", desc: "Available in a range of heights so the wall steps neatly down sloping ground.", iconName: "Ruler" },
      { title: "Yard supply or installed", desc: "Collect from the yard, take delivery on our truck, or book our crew to install.", iconName: "Award" },
      { title: "No paint, no rust, no rot", desc: "Precast concrete doesn't need painting, won't rust like steel, won't rot like timber.", iconName: "CheckCircle" }
    ],
    specifications: [
      { label: "Systems", value: "Uniquall (650 slabs, 500 slabs) · Precon Wall" },
      { label: "Four panel types", value: "Louvred · Between · Sandstone · Global Plain" },
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
      { q: "What panel types can I choose from?", a: "There are four Precon panel types: Louvred, Between, Sandstone and Global Plain." },
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
      { url: "/images/terraforce-tiered-commercial.jpg", caption: "Multi-tier Terraforce® L15 wall on a commercial site", tag: "L15 COMMERCIAL" },
      { url: "/images/terraforce-4x4-step-poolside.jpg", caption: "4x4 Step blocks with tiered L15 retaining wall at poolside", tag: "4X4 STEPS & L15" },
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
      { label: "Contact", value: "Ecocrete Sales — 073 966 9931" }
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
      { title: "WhatsApp a photo", desc: "Send a photo to 073 966 9931 for an initial idea of scope and cost.", iconName: "Phone" },
      { title: "Match parts from the yard", desc: "Replacement panels, blocks and caps cast in the same yard for a matched finish.", iconName: "Award" }
    ],
    specifications: [
      { label: "Terraforce® repairs", value: "Course re-setting, block replacement, backfill drainage" },
      { label: "Panel repairs", value: "Cracked / knocked panel replacement, joint re-setting" },
      { label: "Post repairs", value: "Leaning / knocked post replumb or replacement" },
      { label: "Cap & coping", value: "Replacement caps, copings and window sills cast on request" },
      { label: "Site visit", value: "Bloemfontein & surrounds — WhatsApp a photo for a quick quote" },
      { label: "Contact", value: "Ecocrete Sales — 073 966 9931" }
    ],
    diagramPoints: [
      { id: "r-1", x: 40, y: 40, title: "Shifted course", description: "Re-set to original line and re-backfilled with 19mm aggregate." },
      { id: "r-2", x: 65, y: 60, title: "Replaced panel", description: "Cracked panel swapped, joint re-sealed, cap re-set." }
    ],
    faq: [
      { q: "Do you repair walls you didn't build?", a: "Yes. If the profile is standard we can supply matching parts; if it isn't we cast to match." },
      { q: "How do I get a quick quote?", a: "WhatsApp a photo and the site address to 073 966 9931 — we'll come back to you with an idea of scope." }
    ]
  },
  {
    id: "precast",
    slug: "precast",
    title: "Precast",
    tagline: "Stepping stones, pillar caps, copings, channels, window sills, gulleys, balls, waskattie, kerbs and pillars.",
    category: "Precast",
    shortDesc: "The full precast range — everything the walling and Terraforce® ranges leave off, cast in the Ecocrete yard.",
    heroImage: "/images/stepping-stones-pyramid.jpg",
    fullDesc: `The precast range is what's on the pallets in the Ecocrete yard alongside the walling: stepping stones (Pyramid 400 / Pyramid 500 / Roman), pillar caps (400×400, 450×450, 500×500 and 500×800), copings, channels (half-round and paving 600/900), window sills (170 mm wyd × 80/60 mm hoog × 1 m lank), gulleys (small and big), precast balls (230 and 300), waskattie wash basins (enkel and dubbel), kerbs, and pillars (square, fluted, round 200/300).

    Most items are on the pallet in the yard for collection. Custom quantities and bespoke sizes are cast to order on a short lead time.`,
    applications: [
      "Garden paths, stepping stones and patio inserts",
      "Gate pillars, pillar caps and coping stones",
      "Window sills — 170 mm format (1 m lank)",
      "Channels, gulleys, kerb edging and wash-down bays",
      "Ornamental balls, planters, tables, benches & braai units"
    ],
    galleryImages: [
      { url: "/images/stepping-stones-pyramid.jpg", caption: "Pyramid-pattern stepping stones on pallet", tag: "STEPPING STONES" },
      { url: "/images/concrete-gully.jpg", caption: "Precast concrete drainage gulleys on pallet", tag: "GULLEYS" },
      { url: "/images/pillar-caps-pyramid.jpg", caption: "Pyramid pillar caps stacked on pallet", tag: "PILLAR CAPS" },
      { url: "/images/devilsfork-pillar.jpg", caption: "Devilsfork pillar integrated with palisade fencing", tag: "DEVILSFORK" },
      { url: "/images/precast-pillars-yard.jpg", caption: "Square, fluted and round precast pillars", tag: "PILLARS" },
      { url: "/images/balusters.jpg", caption: "Turned white balusters for a balcony run", tag: "BALUSTERS" },
      { url: "/images/coping-350x1000.jpg", caption: "Coping — 350 mm wide × 1,000 mm long, raised centre profile", tag: "COPING" },
      { url: "/images/kerb-installation.jpg", caption: "Precast kerbstone laid against fresh paving", tag: "KERB" },
      { url: "/images/landscaping-concrete-braai.jpg", caption: "Stone-face precast concrete braai", tag: "BRAAI" },
      { url: "/images/precast-table-bench.jpg", caption: "Precast garden table with matching benches", tag: "TABLE & BENCH" },
      { url: "/images/screen-blocks.jpg", caption: "Decorative screen blocks on pallet", tag: "SCREEN BLOCK" },
      { url: "/images/precast-table-bench-stool.jpg", caption: "Precast bench, table and geometric stool patio set", tag: "FURNITURE" },
      { url: "/images/channel-cover.jpg", caption: "Precast concrete channel cover slab with drainage holes", tag: "CHANNEL COVER" },
      { url: "/images/precast-concrete-balls.jpg", caption: "Ornamental precast concrete balls on pallet", tag: "BALLS" }
    ],
    benefits: [
      { title: "The full range in one yard", desc: "Stepping stones, caps, copings, channels, sills, gulleys, balls, waskattie, kerbs and pillars — no running around.", iconName: "Layers" },
      { title: "Matched pillar to cap", desc: "Square, fluted and round pillars with caps sized to match — same yard, same finish.", iconName: "Ruler" },
      { title: "Small quantities off the pallet", desc: "Grab a few window sills or a couple of caps without a minimum order.", iconName: "Award" },
      { title: "Custom sizes cast to order", desc: "Non-standard sizes cast on a short lead time — bring the dimension.", iconName: "Sun" }
    ],
    specifications: [
      { label: "Stepping stones", value: "Pyramid 400 · Pyramid 500 · Roman" },
      { label: "Pillars", value: "Square · Fluted · Round 200 · Round 300" },
      { label: "Pillar caps", value: "400×400 · 450×450 · 500×500 · 500×800" },
      { label: "Coping", value: "1,000 mm long × 350 mm wide · 70 mm centre · 50 mm edges" },
      { label: "Channels", value: "Half Round · Paving 600 · Paving 900 · Channel Covers" },
      { label: "Window sills", value: "170 mm wyd × 80 mm agter / 60 mm voor × 1 m lank" },
      { label: "Gulleys", value: "Small · Big" },
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
  // ==================== WALLING (EXACTLY 6 ITEMS) ====================
  {
    id: "prod-uniquall-650",
    name: "Uniq 650",
    category: "walling",
    categoryLabel: "Walling",
    code: "UNI-650",
    image: "/images/precast-boundary-h-post.jpg",
    shortDesc: "Uniquall precast walling — 650 slab format, available in different heights.",
    dimensions: "650 mm slab format · Various heights",
    weight: "Per panel spec",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Residential, commercial and estate boundary walls — the taller Uniquall option",
    features: ["650 slab format", "Available in different heights", "Tongue-and-groove joint", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-uniquall-500",
    name: "Uniq 500",
    category: "walling",
    categoryLabel: "Walling",
    code: "UNI-500",
    image: "/images/precast-boundary-smooth.jpg",
    shortDesc: "Uniquall precast walling — 500 slab format, available in different heights.",
    dimensions: "500 mm slab format · Various heights",
    weight: "Per panel spec",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Residential boundary walls — the standard Uniquall option",
    features: ["500 slab format", "Available in different heights", "Tongue-and-groove joint", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-precon-louvred",
    name: "Loovre",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-LOUVRE",
    image: "/images/walling-louvred.jpg",
    shortDesc: "Horizontal louvre precast boundary wall panel with reinforced H-posts and matching pyramid caps.",
    dimensions: "Standard panel sizes · Various heights",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Boundary and privacy walls with clean horizontal louvred slats",
    features: ["Authentic horizontal louvre profile", "Heavy-duty reinforced H-posts", "Matching pyramid post caps", "Available in multiple wall heights", "Manufactured in yard & installed on site"],
    inStock: true
  },
  {
    id: "prod-precon-brick",
    name: "Baksteen",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-BRICK",
    image: "/images/walling-brick-face.jpg",
    shortDesc: "Precast boundary walling panel with horizontal brick (baksteen) bond relief face.",
    dimensions: "1,450 mm lank × 300 mm hoog × 35 mm dik",
    weight: "≈ 36 kg per panel",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Boundary walls, privacy walls and decorative estate enclosures with realistic brick-bond texture",
    features: [
      "1,450 mm length × 300 mm height × 35 mm thickness",
      "Crisp textured brick-bond finish",
      "Interlocking tongue-and-groove joint with reinforced H-posts",
      "Available in multiple wall heights",
      "Manufactured in Ecocrete yard & installed on site"
    ],
    inStock: true
  },
  {
    id: "prod-precon-sandstone",
    name: "Sandstone",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-SANDSTONE",
    image: "/images/walling-stone-face.jpg",
    shortDesc: "Sandstone / ashlar-style relief Precon Wall panel — authentic stone-look rockface finish.",
    dimensions: "Standard panel sizes · Various heights",
    weight: "Per finish",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Feature elevations, decorative boundary walls, stone-look façades",
    features: ["Ashlar-style sandstone relief", "Cast from steel mould for consistent face", "Pairs with Uniquall post system", "Available in different heights"],
    inStock: true
  },
  {
    id: "prod-precon-smooth",
    name: "Smooth",
    category: "walling",
    categoryLabel: "Walling",
    code: "PRECON-SMOOTH",
    image: "/images/walling-plain-stack.jpg",
    shortDesc: "Skoon gladde (Glad / Smooth) fair-face Precon Wall paneel — minimalistiese moderne betonafwerking sonder verfvereiste.",
    dimensions: "1,450 mm lank × 300 mm hoog × 35 mm dik",
    weight: "≈ 36 kg per panel",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Moderne grensmure, industriële persele, sekuriteitsheinings met skoon minimalistiese betonpanele",
    features: [
      "1,450 mm lengte × 300 mm hoogte × 35 mm dikte",
      "Skoon gladde (Glad / Smooth) fair-face afwerking",
      "Geen verfwerk benodig nie — duursame natuurlike beton",
      "Insteek-en-groef stelsel vir stewige interlocking met H-pale",
      "Vervaardig in Ecocrete werf en op perseel geïnstalleer"
    ],
    inStock: true
  },

  // ==================== STORAGE & MODULAR UNITS ====================
  {
    id: "prod-precast-living-unit",
    name: "Precon Modular Living Unit / Buitekamer",
    category: "storage-units",
    categoryLabel: "Storage & Units",
    code: "PC-LIVING-UNIT",
    image: "/images/precast-living-home.jpg",
    shortDesc: "Permanent modular precast concrete room for living quarters, staff accommodation, granny flats or backyard rooms — 'mense bly ook in dit'.",
    dimensions: "Custom layouts · e.g. 3m × 3m, 3m × 6m, L-shape",
    weight: "Engineered precast structure",
    strengthMPa: "≈ 25 – 30 MPa reinforced precast panels",
    application: "Staff accommodation, backyard rooms, granny flats, student housing, farm worker dwellings, site offices",
    features: [
      "Heavy-duty reinforced precast interlocking wall panels",
      "Pre-fitted window and exterior steel door openings",
      "Corrugated iron pitched roof structure",
      "Thermal stability — cool in summer, solid in winter",
      "Fire, rodent and weather resistant",
      "Fast on-site erection by the Ecocrete team"
    ],
    inStock: true
  },
  {
    id: "prod-precast-storage-unit",
    name: "Precon Storage Unit / Stoorkamer",
    category: "storage-units",
    categoryLabel: "Storage & Units",
    code: "PC-STORAGE-UNIT",
    image: "/images/precast-modular-building-site.jpg",
    shortDesc: "Heavy-duty secure precast lock-up storage unit for tools, garden equipment, farm supplies and commercial inventory.",
    dimensions: "Standard 3m × 3m · 3m × 6m · Custom footprints",
    weight: "Engineered precast structure",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Secure tool sheds, garden storage, farm implement lock-ups, commercial warehouse overflow, generator & pump rooms",
    features: [
      "Vandal-resistant solid precast walling",
      "Secure lock-up steel door frame",
      "Weatherproof pitched roof with drainage overhang",
      "No maintenance, painting or rotting like timber Wendy houses",
      "Manufactured in our yard & erected on site"
    ],
    inStock: true
  },
  {
    id: "prod-precast-guard-hut",
    name: "Precon Security Guard Hut / Waghuisie",
    category: "storage-units",
    categoryLabel: "Storage & Units",
    code: "PC-GUARD-HUT",
    image: "/images/precast-storage-room.jpg",
    shortDesc: "Compact precast security control room and guard shelter for gatehouses, commercial entrances and farm gates.",
    dimensions: "Compact guard footprint · e.g. 2m × 2m / 2.5m × 2.5m",
    weight: "Modular precast unit",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Access control gates, site entrances, estate security check-points, farm perimeter control points",
    features: [
      "Reinforced precast concrete walls for high security",
      "Multi-angle observation windows",
      "Weatherproof insulated roof",
      "Fast foundation and erection turnaround"
    ],
    inStock: true
  },

  // ==================== TERRAFORCE ====================
  {
    id: "prod-tf-l15",
    name: "Terraforce® L15",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-L15",
    image: "/images/terraforce-pool-terrace.jpg",
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
    image: "/images/terraforce-commercial-retaining.jpg",
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
    name: "Terraforce® 4x4 Step Block",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-STEP-4X4",
    image: "/images/terraforce-retaining-steps.jpg",
    shortDesc: "Terraforce® 4x4 Step Block — engineered for wide sweeping access stairs, terrace steps, and integrated L15 retaining walls.",
    dimensions: "Matched to 4x4 / L15 courses",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Sweeping garden stairs, poolside terraces, integrated access steps in L15 retaining walls",
    features: ["Engineered step profile", "Integrates with L15 & 4x4 retaining blocks", "Ideal for poolside & garden steps", "Licensed SABS-tested product"],
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
    image: "/images/terrafix-canal-lining.jpg",
    shortDesc: "Terrafix interlocking concrete blocks engineered for stormwater canal lining, river embankments and slope erosion control.",
    dimensions: "Product-specific interlocking unit",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Canal lining, stormwater chutes, spillways, slope stabilization and river bank erosion control",
    features: ["Interlocking erosion control matrix", "Permits vegetation growth & water drainage", "Prevents canal & embankment washaways", "Licensed SABS-tested product"],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-pac",
    name: "Terraforce® Terrapac",
    category: "terraforce",
    categoryLabel: "Terraforce",
    code: "TF-PAC",
    image: "/images/terraforce-terrace-planter.jpg",
    shortDesc: "Terrapac — additional Terraforce® profile for specific site conditions and planted terraces.",
    dimensions: "Product-specific",
    weight: "Product-specific",
    strengthMPa: "22 – 30 MPa",
    application: "Specialist retaining details, engineered wall specs, planter terraces",
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
    image: "/images/stepping-stones-pyramid.jpg",
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
    image: "/images/stepping-stones-pyramid.jpg",
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
    image: "/images/stepping-stones-roman.jpg",
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
    name: "Pillar Cap — 400 / 450 / 500 / 500×800",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-CAP",
    image: "/images/pillar-caps-pyramid.jpg",
    shortDesc: "Precast pillar caps in the four sizes listed in the Ecocrete product range.",
    dimensions: "400×400 · 450×450 · 500×500 · 500×800",
    weight: "Per size",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gate-pillar terminations, boundary-wall pillar caps, garden feature pillars",
    features: ["Four standard sizes", "Weather-shedding profile", "Cast in the Ecocrete yard", "Yard stock"],
    inStock: true
  },
  {
    id: "prod-pillar-devilsfork",
    name: "Devilsfork Pillar",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-PILL-DEVIL",
    image: "/images/devilsfork-pillar-lamp.jpg",
    shortDesc: "Precast concrete pillar specifically engineered to integrate seamlessly with Devilsfork palisade steel fencing, lanterns and house numbers.",
    dimensions: "Standard palisade heights",
    weight: "Per profile",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Perimeter palisade fencing, front residential entrances, security boundaries",
    features: ["Integrates with Devilsfork palisade panels", "Accommodates light fittings & house numbers", "Includes matching pyramid cap", "Reinforced dry-cast concrete"],
    inStock: true
  },
  {
    id: "prod-precast-under-fence-plinth",
    name: "Under-Fence Security Plinth / Onderheining Plint",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-PLINTH-FENCE",
    image: "/images/precast-under-fence-plinth.jpg",
    shortDesc: "Reinforced precast concrete bottom plinth slab installed beneath wire and palisade fencing to prevent digging, washaways and perimeter breaches.",
    dimensions: "Standard panel lengths · Under-fence plinth profile",
    weight: "Per panel",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Security fences, palisade perimeters, farm and estate boundaries requiring anti-burrow and erosion protection",
    features: [
      "Prevents animals and intruders burrowing beneath fencing",
      "Stops soil erosion and washaways along fence lines",
      "Reinforced solid precast concrete",
      "Fits securely under razor wire, diamond mesh and palisade",
      "Manufactured in Ecocrete yard & delivered across Free State"
    ],
    inStock: true
  },
  {
    id: "prod-precast-arched-portal",
    name: "Precast Arched Gate Portal / Boog Ingang",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-ARCH-PORTAL",
    image: "/images/precast-arched-portal.jpg",
    shortDesc: "Architectural precast concrete arched entrance portal structure designed for pedestrian side gates, garden courtyards and security entrances.",
    dimensions: "Classical arched lintel & matching precast column uprights",
    weight: "Engineered precast portal",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Pedestrian entrance gates, garden courtyards, residential boundary features, estate side entrances",
    features: [
      "Classical arched header beam with architectural profile",
      "Reinforced precast column uprights",
      "Accommodates steel security gate frames and deadbolts",
      "Adds architectural curb appeal to boundary walls",
      "Cast in Ecocrete yard and installed on site"
    ],
    inStock: true
  },
  {
    id: "prod-precast-entrance-pillars",
    name: "Heavy-Duty Entrance Pillars & Gate Posts",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-GATE-PILLARS",
    image: "/images/precast-entrance-pillars-gate.jpg",
    shortDesc: "Heavy-duty reinforced precast entrance pillars with pyramid caps and integrated hinge mounting points for automated estate driveway gates.",
    dimensions: "Large format gate pillar · Heavy pyramid cap",
    weight: "Heavy-duty solid precast",
    strengthMPa: "≈ 30 MPa reinforced concrete",
    application: "Driveway entrances, farm and smallholding main gates, commercial access points, automated estate gates",
    features: [
      "Engineered for heavy swing and sliding automated gates",
      "Solid reinforced precast concrete structure",
      "Accommodates conduit for gate motors, safety beams and intercoms",
      "Finished with matching decorative pyramid caps",
      "Manufactured in Ecocrete yard"
    ],
    inStock: true
  },
  {
    id: "prod-pillar",
    name: "Pillar — Square / Fluted / Round",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-PILL",
    image: "/images/precast-pillars-yard.jpg",
    shortDesc: "Square, fluted and round precast architectural pillars with matching pyramid caps.",
    dimensions: "Square · Fluted · Round 200 · Round 300",
    weight: "Per profile",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gate pillars, boundary-wall pillars, garden entrances, driveway markers",
    features: ["Square, fluted and round profiles", "Pair with matching caps", "Solid dry-cast concrete", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-coping",
    name: "Coping — 350 × 1,000 mm",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-COPE",
    image: "/images/coping-350x1000.jpg",
    shortDesc: "Precast coping with a raised centre and sloped edges for effective water run-off.",
    dimensions: "1,000 mm long × 350 mm wide · 70 mm high at centre · 50 mm high at edges",
    weight: "Per unit",
    strengthMPa: "≈ 25 MPa",
    application: "Boundary-wall tops, garden-wall tops, step nosings, coping details",
    features: ["350 mm wide", "1,000 mm long", "70 mm centre height", "50 mm edge height"],
    inStock: true
  },
  {
    id: "prod-window-sill",
    name: "Window Sill — 170 mm (1 m)",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-SILL-170",
    image: "/images/precast-window-sills.jpg",
    shortDesc: "Precast concrete window sill with built-in water runoff slope (80 mm back to 60 mm front) and underside drip groove.",
    dimensions: "1,000 mm (1 m) lank × 170 mm wyd · 80 mm hoog agter · 60 mm hoog voor",
    weight: "≈ 22 kg per unit",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Window sills for face-brick, plastered brickwork, residential homes, commercial buildings and sill replacements",
    features: [
      "1,000 mm (1 m) length",
      "170 mm width",
      "80 mm back height tapering to 60 mm front height",
      "Built-in weather-shed slope & underside drip rebate",
      "Smooth fair-face cast finish",
      "Yard pallet stock ready for collection or delivery"
    ],
    inStock: true
  },
  {
    id: "prod-channel",
    name: "Water Channel — 600 mm",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-CHANNEL",
    image: "/images/paving-channel-600.jpg",
    shortDesc: "Precast concrete water channel for controlled surface-water flow, driveway run-off and drainage.",
    dimensions: "600 mm long · 150 mm high at outside edges · 70 mm high at centre",
    weight: "Per profile",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Paved yards, driveways, walkways and surface-water drainage management",
    features: ["600 mm length", "150 mm outside height", "70 mm centre height", "Shaped dish fall directs water flow"],
    inStock: true
  },
  {
    id: "prod-channel-cover",
    name: "Channel Cover",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-CH-COVER",
    image: "/images/channel-cover.jpg",
    shortDesc: "Precast concrete channel cover slab with diamond non-slip tread and drainage holes to fit securely over stormwater channels.",
    dimensions: "Heavy-duty slab with rebated interlocking underside",
    weight: "Per size",
    strengthMPa: "≈ 30 MPa reinforced precast concrete",
    application: "Walkways, pedestrian crossings over open channels, factory yards, paved driveways and surface drainage",
    features: [
      "Non-slip diamond tread surface pattern",
      "Cast-in drainage holes for continuous runoff water entry",
      "Rebated underside edges to lock into channel profile without sliding",
      "High load-bearing reinforced concrete",
      "Manufactured in Ecocrete yard for standard channels"
    ],
    inStock: true
  },
  {
    id: "prod-gulley",
    name: "Gulley — Small / Big",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-GULLEY",
    image: "/images/concrete-gully.jpg",
    shortDesc: "Precast concrete gulleys in small and big formats.",
    dimensions: "Small · Big",
    weight: "Per size",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Yard drainage, wash-down areas and surface-water collection points",
    features: ["Small and big formats", "Solid precast construction", "Suitable for external drainage", "Yard stock"],
    inStock: true
  },
  {
    id: "prod-precast-table-bench-stool",
    name: "Precast Bench, Table and Stool",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-TABLE-BENCH-STOOL",
    image: "/images/precast-table-bench-patio.jpg",
    shortDesc: "Precast concrete outdoor patio set featuring dining table, bench and faceted geometric stool.",
    dimensions: "Table, bench and stool set",
    weight: "Heavy precast set",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gardens, patios, braai areas, outdoor entertainment spaces, parks and schools",
    features: ["Full concrete table, bench and stool set", "Weatherproof & durable for permanent outdoor use", "Modern geometric faceted stool", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-ball",
    name: "Ball — 230 / 300",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-BALL",
    image: "/images/precast-concrete-balls.jpg",
    shortDesc: "Ornamental precast concrete balls — 230 mm and 300 mm diameters for pillar caps and garden accents.",
    dimensions: "230 mm · 300 mm",
    weight: "Per size",
    strengthMPa: "≈ 25 MPa",
    application: "Pillar tops, driveway markers, garden accents, feature verges",
    features: ["Two diameters — 230 & 300 mm", "Cast solid high-strength concrete", "Weather-durable", "Yard pallet stock"],
    inStock: true
  },
  {
    id: "prod-balusters",
    name: "Precast Ballustrades",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-BALUSTER",
    image: "/images/balustrades-patio-night.jpg",
    shortDesc: "Classic turned precast concrete balustrades with top rail and base for balconies, verandas, stairs and terrace boundaries.",
    dimensions: "Standard turned baluster heights · Matching top & bottom rails",
    weight: "≈ 18 – 22 kg per baluster",
    strengthMPa: "≈ 30 MPa reinforced precast concrete",
    application: "Balconies, verandas, outdoor patios, raised terraces, staircase railings and ornamental perimeter borders",
    features: [
      "Classic turned architectural profile",
      "Reinforced internal steel rod for structural strength",
      "Smooth fair-face cast finish suitable for painting or raw concrete",
      "Pairs with matching precast coping rails and base blocks",
      "Manufactured in the Ecocrete yard"
    ],
    inStock: true
  },
  {
    id: "prod-landscaping-table-bench",
    name: "Concrete Patio Table & Benches",
    category: "landscaping",
    categoryLabel: "Landscaping",
    code: "LAND-TABLE-BENCH",
    image: "/images/precast-table-bench-night.jpg",
    shortDesc: "Heavy-duty precast concrete patio table with matching freestanding benches for evening entertainment and garden living.",
    dimensions: "Table and matching bench set",
    weight: "Heavy precast set",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Gardens, patios, braai areas, parks, schools and outdoor entertainment spaces",
    features: ["Weather-resistant concrete", "Matching table and benches", "Low-maintenance outdoor furniture", "Suitable for permanent outdoor use"],
    inStock: true
  },
  {
    id: "prod-landscaping-screen-block",
    name: "Decorative Screen Block",
    category: "landscaping",
    categoryLabel: "Landscaping",
    code: "LAND-SCREEN-BLOCK",
    image: "/images/screen-blocks-installed.jpg",
    shortDesc: "Geometric open-pattern concrete screen block installed for decorative garden dividers, scullery screens and patio ventilation walls.",
    dimensions: "Standard decorative block format",
    weight: "Per block",
    strengthMPa: "≈ 20 – 25 MPa",
    application: "Garden screens, scullery enclosures, patio dividers, courtyard walls, ventilation panels and decorative boundary features",
    features: ["Open geometric pattern", "Allows light and airflow", "Suitable for decorative wall panels", "Cast in the Ecocrete yard"],
    inStock: true
  },
  {
    id: "prod-landscaping-concrete-braai",
    name: "Precast Concrete Braai",
    category: "landscaping",
    categoryLabel: "Landscaping",
    code: "LAND-BRAAI",
    image: "/images/landscaping-concrete-braai.jpg",
    shortDesc: "Stone-face precast concrete braai for permanent outdoor entertainment areas.",
    dimensions: "900 mm long × 800 mm high · 60 mm wall thickness",
    weight: "Heavy precast unit",
    strengthMPa: "≈ 25 – 30 MPa",
    application: "Patios, gardens, braai areas, lapas and outdoor entertainment spaces",
    features: ["900 mm length", "800 mm height", "60 mm wall thickness", "Integrated fire and grill area"],
    inStock: true
  },
  {
    id: "prod-waskattie",
    name: "Waskattie — Enkel / Dubbel",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-WASK",
    image: "/images/waskattie-ablution-troughs.jpg",
    shortDesc: "Precast wash basin (waskattie) — single (enkel) and double (dubbel) heavy-duty washing and ablution troughs.",
    dimensions: "Enkel · Dubbel",
    weight: "Per format",
    strengthMPa: "≈ 30 MPa",
    application: "Wash-down bays, outdoor scullery, farm and workshop wash points, ablution facilities",
    features: ["Two formats — Enkel & Dubbel", "Solid one-piece cast", "Weather-durable", "Yard stock ready for collection"],
    inStock: true
  },
  {
    id: "prod-kerb",
    name: "Kerb",
    category: "precast",
    categoryLabel: "Precast",
    code: "PC-KERB",
    image: "/images/precast-kerb-estate-road.jpg",
    shortDesc: "Standard road kerbs for driveway and estate roadway edging.",
    dimensions: "Standard kerb section",
    weight: "≈ 100 kg per unit",
    strengthMPa: "≈ 30 MPa",
    application: "Driveway edges, parking-bay definition, estate road kerbing, yard perimeters",
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
    quote: "The Ecocrete team matched the profile of our old wall exactly when we extended it higher. You can't see the join from the street.",
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
    answer: "Yes. Shifted Terraforce® courses, cracked panels, leaning posts, replacement caps — small repair jobs are welcome, not just full installs. WhatsApp a photo to 073 966 9931 for a quick quote."
  },
  {
    question: "What's in the Precast range?",
    answer: "Stepping stones (Pyramid 400/500, Roman), pillar caps (400×400/450×450/500×500/500×800), copings, channels (half-round and paving 600/900) & channel covers, window sills (170 mm × 1 m), gulleys (small/big), balls (230/300), balustrades, waskattie (enkel/dubbel), kerbs and pillars (square, fluted, round 200/300)."
  },
  {
    question: "How do I request a quote?",
    answer: "Use the Quote form on this site, email sales@ecocrete.co.za, phone the yard on 051 435 3590, or call / WhatsApp sales on 073 966 9931."
  }
];
