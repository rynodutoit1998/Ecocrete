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
  tagline: "Your precast concrete specialist",
  subTagline: "A wide range of precast concrete products — We manufacture and install.",
  licenseText: "Ecocrete — your precast concrete specialist. 30 years in the industry. We manufacture and install.",
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
    saturday: "Saturday: Closed (Ons is nie Saterdag oop nie)",
    sunday: "Sunday: Closed"
  },
  stats: [
    { value: "30", label: "Years in the industry", sub: "Founded 30 years ago by Leon Lamprecht" },
    { value: "3", label: "Product families", sub: "Walling · Terraforce · Precast" },
    { value: "Yard", label: "Manufacture & install", sub: "One team from mould to finished wall" },
    { value: "Local", label: "Bloemfontein based", sub: "Employing local people and working in and around Bloemfontein" }
  ]
};

// Five services — mapped 1:1 to the five boxes on the Ecocrete product-tree note:
// Walling · Terraforce · Extend Walling · Repairs · Precast
export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "walling",
    slug: "walling",
    title: "Walling",
    tagline: "Modern Uniq Wall (115kg Security Fence, 1.8m–2.45m) and traditional Stopnonsense in four patterns (up to 2.40m).",
    category: "Walling",
    shortDesc: "We offer clients a choice between our modern Uniq Wall (115kg panel Security Fence, 1.8m–2.45m high) and traditional precast Stopnonsense in Louvre, Sandstone, Smooth, and Brickface (up to 2.40m high).",
    heroImage: "/images/walling-stone-face.jpg",
    fullDesc: `We offer our clients a choice on our modern precast concrete wall called our Uniq Wall, which comes in sizing from 1.8m to 2.450m high.

We call it our Security Fence because our panel weighs 115kg and is not easy to remove or break. It provides serious privacy and formidable perimeter security for residential estates, smallholdings, and commercial sites.

We also offer the traditional precast fence, also known as Stopnonsense, in four different patterns:
• Louvre
• Sandstone
• Smooth
• Brickface

Heights can range up to 2.40m high.

Precast walling is also a very cost-effective way to secure your property or can even be used as extra rooms for storage.

All walling is manufactured in our own yard and installed by our experienced crew. Contact us for a free quote.`,
    applications: [
      "Residential and small-holding boundary walls",
      "Security Fence installations (115kg heavy-duty panels)",
      "Estate perimeter walling with matching pillars and caps",
      "Traditional Stopnonsense fences (Louvre, Sandstone, Smooth, Brickface)",
      "Modular precast rooms for storage and living quarters",
      "Commercial and industrial site perimeters"
    ],
    galleryImages: [
      { url: "/images/precast-boundary-h-post.jpg", caption: "H-post and horizontal slab system, standard height", tag: "UNIQUALL" },
      { url: "/images/walling-stone-face.jpg", caption: "Precon Wall — sandstone / ashlar-style relief panel", tag: "PRECON WALL" },
      { url: "/images/precast-boundary-smooth.jpg", caption: "Smooth fair-face precast boundary wall", tag: "SMOOTH" },
      { url: "/images/precast-boundary-decorative.jpg", caption: "Uniq Wall with integrated pillars and decorative caps", tag: "UNIQ WALL" }
    ],
    benefits: [
      { title: "Uniq Wall / Security Fence", desc: "115kg heavy-duty panels (1.8m to 2.45m high) engineered for maximum security — not easy to remove or break.", iconName: "ShieldCheck" },
      { title: "Traditional Stopnonsense", desc: "Classic precast walling in four distinct patterns: Louvre, Sandstone, Smooth, and Brickface (up to 2.40m high).", iconName: "Layers" },
      { title: "Cost-effective security & storage", desc: "Affordable property enclosure that can also be configured into modular storage rooms and buitekamers.", iconName: "Award" },
      { title: "We manufacture & install", desc: "Cast in our Bloemfontein yard and erected on site by our own crew. Contact us for a free quote.", iconName: "CheckCircle" }
    ],
    specifications: [
      { label: "Uniq Wall heights", value: "1.80 m to 2.450 m high" },
      { label: "Uniq panel mass", value: "115 kg per panel (Security Fence)" },
      { label: "Stopnonsense patterns", value: "Louvre · Sandstone · Smooth · Brickface" },
      { label: "Stopnonsense heights", value: "Up to 2.40 m high" },
      { label: "Posts & footings", value: "Reinforced H-posts set in 25 MPa concrete footings" },
      { label: "Supply & install", value: "Yard collection or turnkey installation by Ecocrete" }
    ],
    diagramPoints: [
      { id: "w-1", x: 35, y: 35, title: "Reinforced H-post", description: "Cast H-profile column carrying the horizontal slabs." },
      { id: "w-2", x: 65, y: 50, title: "Interlocking slab", description: "Tongue-and-groove joint keeps the wall sightline gap-free." },
      { id: "w-3", x: 35, y: 80, title: "Concrete footing", description: "Post foot set in a 25 MPa concrete footing." }
    ],
    faq: [
      { q: "What patterns are available for the traditional precast fence (Stopnonsense)?", a: "We offer Stopnonsense in four different patterns: Louvre, Sandstone, Smooth, and Brickface, with heights up to 2.40m high." },
      { q: "Why is the Uniq Wall called a Security Fence?", a: "Each Uniq Wall panel weighs 115kg, making it very heavy-duty and not easy to remove or break. Sizing ranges from 1.8m to 2.450m high." },
      { q: "Can precast walling be used for storage rooms?", a: "Yes! Precast walling is a cost-effective way to build secure storage rooms, tool sheds, or extra living rooms." }
    ]
  },
  {
    id: "terraforce",
    slug: "terraforce",
    title: "Terraforce®",
    tagline: "Licensed round-face retaining blocks — L15, 4x4 Step, Teracrete, Terrafix 100, Terrapac and Bat.",
    category: "Terraforce",
    shortDesc: "The full Terraforce® range in stock — L15, 4x4, 4x4 Step, Teracrete eco-surfacing, Terrafix 100 and Terrapac for gravity and terraced walls.",
    heroImage: "/images/terraforce-tiered-commercial.jpg",
    fullDesc: `Terraforce® round-face retaining blocks are our core retaining product. The interlocking open-loop profile takes convex and concave curves without cutting, and the hollow core takes topsoil so the wall doubles as a planter.

We stock the full block range — L15, 4x4, 4x4 Step, Teracrete, Terrafix 100, Terrapac and Bat. Blocks leave the yard on our own truck; on request our site team lays the foundation, sets the wall, and hands it back finished.`,
    applications: [
      "Residential garden terracing, poolside walls and driveway cuts",
      "Commercial site earth retention and slope stabilisation",
      "Roadside embankments and highway service-station cuts",
      "Planted 'green belt' walls with indigenous groundcover",
      "Tiered feature walls and integrated garden steps",
      "Canal lining, spillways and permeable eco-surface paving"
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
      { title: "Full range in stock", desc: "L15, 4x4, 4x4 Step, Teracrete, Terrafix 100, Terrapac and Bat — mix profiles on the same wall.", iconName: "Layers" },
      { title: "Licensed manufacture", desc: "Terraforce® is a licensed product — quality-assured against the range spec.", iconName: "Award" }
    ],
    specifications: [
      { label: "Block range", value: "L15 · 4x4 · 4x4 Step · Teracrete · Terrafix 100 · Terrapac · Bat" },
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
      { q: "Which Terraforce® blocks do you keep?", a: "The full working range — L15, 4x4, 4x4 Step, Teracrete, Terrafix 100, Terrapac and Bat." },
      { q: "Can you supply blocks only, or do you install as well?", a: "Both. Collect from the yard, take delivery on our truck, or have our team do the full install — foundation, wall and finishing." }
    ]
  },
  {
    id: "extend-walling",
    slug: "extend-walling",
    title: "Extend Walling",
    tagline: "We have been extending walls for years and years — extensions of 1 up to 3 slabs (300mm per slab).",
    category: "On-site Service",
    shortDesc: "We have been extending walls for years and years. We offer extensions of 1 up to 3 slabs (each slab covers 300mm in height) to raise your fence without replacing it.",
    heroImage: "/images/precast-boundary-h-post.jpg",
    fullDesc: `We have been extending walls for years and years.

We offer extensions of 1 up to 3 slabs. One slab covers 300mm in height (giving you options for 300mm, 600mm, or 900mm of added height).

Instead of tearing down an existing wall, extending your fence is a quick, cost-effective way to restore privacy, block new sightlines, or upgrade perimeter security. We match the existing profile course-for-course so the extension blends in seamlessly.

Contact us for a free quote to give you options.`,
    applications: [
      "Adding privacy height to an existing boundary wall (1 to 3 slabs)",
      "Raising an estate perimeter or Stopnonsense wall for security upgrades",
      "Extending a retaining wall to hold a new landscaped tier",
      "Blocking new sightlines after next-door development",
      "Matching an old wall profile course-for-course"
    ],
    benefits: [
      { title: "No wall replacement", desc: "Keep the existing wall — we offer extensions of 1 up to 3 slabs (300mm per slab).", iconName: "CheckSquare" },
      { title: "Matched profile", desc: "New courses match the existing panel or Stopnonsense profile.", iconName: "Ruler" },
      { title: "Years of experience", desc: "We have been extending walls for years and years across Bloemfontein and Free State.", iconName: "Award" },
      { title: "Free quote & options", desc: "Contact us for a free quote to give you options tailored to your existing wall.", iconName: "ShieldCheck" }
    ],
    specifications: [
      { label: "Extension range", value: "1 up to 3 slabs" },
      { label: "Slab height", value: "300 mm per slab (300 mm, 600 mm, or 900 mm total extension)" },
      { label: "Works on", value: "Precast walling, Stopnonsense and Terraforce® retaining walls" },
      { label: "Profile match", value: "Cast new panels or blocks to match existing patterns" },
      { label: "Foundation check", value: "Existing footings and posts inspected before extension" },
      { label: "Contact", value: "Ecocrete Sales — 073 966 9931" }
    ],
    diagramPoints: [
      { id: "e-1", x: 35, y: 55, title: "Existing wall", description: "Kept in place — new courses stack on top." },
      { id: "e-2", x: 65, y: 30, title: "New courses", description: "1 to 3 slabs (300mm per slab) cast to match existing profile." }
    ],
    faq: [
      { q: "How much can you extend an existing wall?", a: "We offer extensions of 1 up to 3 slabs. One slab covers 300mm in height, giving you 300mm, 600mm, or 900mm in extra height." },
      { q: "Do you have to replace the whole wall?", a: "No. We have been extending walls for years and years. If the footing is sound, we only add what's needed on top." },
      { q: "Can you extend a wall from a different manufacturer?", a: "Usually yes — we cast panels or blocks to match the existing profile course-for-course. Send us a photo and we'll give you options." }
    ]
  },
  {
    id: "repairs",
    slug: "repairs",
    title: "Repairs",
    tagline: "Endless requests and endless possibilities — we can save your fence before it falls over.",
    category: "On-site Service",
    shortDesc: "Endless requests and endless possibilities. We can save your fence before it falls over — replacing only a few slabs or a broken pole from motor vehicles or Mother Nature.",
    heroImage: "/images/precast-boundary-smooth.jpg",
    fullDesc: `Endless requests and endless possibilities.

We can save your fence before it falls over. We can replace only a few slabs or replace a broken pole.

From motor vehicles going through fences to Mother Nature’s effects (storm washaways, falling tree limbs, ground shifting), we can save you money by repairing rather than replacing the entire boundary.

With any repair, the sooner you contact us for a free quote, the better.`,
    applications: [
      "Motor vehicle collision damage through fences",
      "Mother Nature's effects — storm washaways, falling trees, soil movement",
      "Replacing broken or leaning concrete posts (poles)",
      "Replacing cracked or damaged individual wall slabs",
      "Shifted or slumped Terraforce® retaining courses",
      "Broken or missing pillar caps, copings and window sills"
    ],
    benefits: [
      { title: "Save your fence before it falls", desc: "Endless requests and endless possibilities — prompt intervention saves the whole wall.", iconName: "CheckSquare" },
      { title: "Replace few slabs or broken pole", desc: "No need to replace the entire wall when only a few slabs or a single post need swapping.", iconName: "Wrench" },
      { title: "Save money on repairs", desc: "From motor vehicles to Mother Nature's effects, repairing saves you thousands over rebuilding.", iconName: "Award" },
      { title: "The sooner the better", desc: "With any repair, the sooner you contact us for a free quote, the better.", iconName: "Phone" }
    ],
    specifications: [
      { label: "Wall repairs", value: "Replacing broken slabs, replumbing or replacing broken poles" },
      { label: "Terraforce® repairs", value: "Course re-setting, block replacement, backfill drainage" },
      { label: "Collision & storm damage", value: "Insurance quotes and emergency repair assessments" },
      { label: "Cap & coping", value: "Replacement caps, copings and window sills cast on request" },
      { label: "Site visit", value: "Bloemfontein & surrounds — WhatsApp a photo for a quick quote" },
      { label: "Contact", value: "Ecocrete Sales — 073 966 9931" }
    ],
    diagramPoints: [
      { id: "r-1", x: 40, y: 40, title: "Shifted course", description: "Re-set to original line and re-backfilled with 19mm aggregate." },
      { id: "r-2", x: 65, y: 60, title: "Replaced panel", description: "Cracked panel swapped, joint re-sealed, cap re-set." }
    ],
    faq: [
      { q: "Can you save a fence that is leaning?", a: "Yes! We can save your fence before it falls over by replumbing posts, replacing broken slabs, or underpinning footings." },
      { q: "Can you repair vehicle damage through a wall?", a: "Yes. From motor vehicles going through fences to Mother Nature's effects, we replace only the damaged slabs and broken poles to save you money." },
      { q: "How quickly should I contact you for repairs?", a: "With any repair, the sooner you contact us for a free quote, the better — preventing further collapse or security risks." }
    ]
  },
  {
    id: "precast",
    slug: "precast",
    title: "Precast",
    tagline: "HUGE RANGE of moulds — Tuscan window sills, pillars, caps, bollards, gulleys, stepping stones, waskatties & water-friendly garden products.",
    category: "Precast",
    shortDesc: "Ecocrete has a HUGE RANGE of moulds for custom precast products you can't buy off a shelf: Tuscan & standard sills (170mm, 250mm, 500mm), pillars, copings, gulleys, stepping stones, waskatties, cement balls, bollards, tree grids, and kerbs.",
    heroImage: "/images/stepping-stones-pyramid.jpg",
    fullDesc: `Ecocrete have a HUGE RANGE of moulds for precast products which include:
• Pillars and Pillar Caps (Round 250, Fluted, Spiral, Square, Devilsfork)
• Windowsills — 170mm, 250mm and 500mm (from Tuscan window sills to standard profiles)
• Copings (e.g. 350 × 1,000 mm raised centre)
• Gulleys (small and big)
• Stepping Stones (Pyramid 400/500, Roman)
• Washbasins / Waskatties (Enkel & Dubbel)
• Cement Balls (230 & 300 mm)
• Bollards
• Garden Kerbs & Channels with Channel Covers

Water-Friendly Garden & Landscaping:
We already have a lot of precast products available for a water-friendly garden, and we are expanding our range.
Currently we can offer you:
• Stepping stones
• Water channels & channel covers
• Washbasins (waskatties)
• Concrete benches & tables
• Tree grids
• Pillars & Bollards
• Braai units & Decorative screen blocks

Ecocrete specialises in custom products which you can't buy off a shelf.`,
    applications: [
      "Water-friendly garden landscaping (tree grids, stepping stones, water channels)",
      "Gate pillars (Round 250, Fluted, Spiral, Square) and matching pillar caps",
      "Windowsills — 170 mm, 250 mm, 500 mm and Tuscan architectural sills",
      "Perimeter security: Bollards, cement balls (230/300), and under-fence plinths",
      "Drainage channels, channel covers, gulleys, and kerb edging",
      "Outdoor scullery washbasins (waskatties — enkel & dubbel)",
      "Custom precast moulds you can't buy off a shelf"
    ],
    galleryImages: [
      { url: "/images/stepping-stones-pyramid.jpg", caption: "Pyramid-pattern stepping stones on pallet", tag: "STEPPING STONES" },
      { url: "/images/concrete-gully.jpg", caption: "Precast concrete drainage gulleys on pallet", tag: "GULLEYS" },
      { url: "/images/pillar-caps-pyramid.jpg", caption: "Pyramid pillar caps stacked on pallet", tag: "PILLAR CAPS" },
      { url: "/images/devilsfork-pillar-lamp.jpg", caption: "Devilsfork pillar with lantern mounting", tag: "DEVILSFORK" },
      { url: "/images/precast-pillars-yard.jpg", caption: "Square, fluted, spiral and round precast pillars", tag: "PILLARS" },
      { url: "/images/balustrades-patio-night.jpg", caption: "Precast turned balustrades on patio", tag: "BALUSTRADES" },
      { url: "/images/coping-350x1000.jpg", caption: "Coping — 350 mm wide × 1,000 mm long, raised centre profile", tag: "COPING" },
      { url: "/images/precast-kerb-estate-road.jpg", caption: "Precast road kerb installed along estate roadway", tag: "KERB" },
      { url: "/images/landscaping-concrete-braai.jpg", caption: "Stone-face precast concrete braai", tag: "BRAAI" },
      { url: "/images/precast-table-bench-patio.jpg", caption: "Precast patio table, bench and geometric stool", tag: "TABLE & BENCH" },
      { url: "/images/screen-blocks-installed.jpg", caption: "Decorative screen blocks installed for privacy wall", tag: "SCREEN BLOCK" },
      { url: "/images/channel-cover.jpg", caption: "Precast concrete channel cover slab with drainage holes", tag: "CHANNEL COVER" },
      { url: "/images/precast-concrete-balls.jpg", caption: "Ornamental precast concrete balls on pallet", tag: "BALLS" },
      { url: "/images/waskattie-ablution-troughs.jpg", caption: "Precast waskattie washbasins / ablution troughs", tag: "WASKATTIE" }
    ],
    benefits: [
      { title: "Huge range of moulds", desc: "Specialising in custom products you can't buy off a shelf — from Tuscan window sills to normal gulleys.", iconName: "Layers" },
      { title: "Water-friendly garden range", desc: "Tree grids, water channels, stepping stones, bollards and benches designed for water-wise living.", iconName: "Leaf" },
      { title: "Pillars & matching caps", desc: "Round 250, Fluted, Spiral and Square pillars paired with matching pyramid caps.", iconName: "Ruler" },
      { title: "Small quantities off the pallet", desc: "Collect a couple of sills, caps, waskatties or bollards without a minimum order.", iconName: "Award" }
    ],
    specifications: [
      { label: "Mould variety", value: "HUGE RANGE of moulds for standard and custom precast" },
      { label: "Pillars & Caps", value: "Round 250 · Fluted · Spiral · Square · Devilsfork" },
      { label: "Windowsills", value: "170 mm · 250 mm · 500 mm · Tuscan architectural profiles" },
      { label: "Water-friendly range", value: "Tree grids · Water channels & covers · Stepping stones · Washbasins · Benches" },
      { label: "Security & Accents", value: "Bollards · Cement balls (230 & 300) · Under-fence plinths · Garden kerbs" },
      { label: "Drainage", value: "Gulleys (Small & Big) · Half-round channels · Dish channels" }
    ],
    diagramPoints: [
      { id: "p-1", x: 30, y: 40, title: "Matched pillar + cap", description: "Pillars (Round 250, Fluted, Spiral, Square) and caps cast in the same yard." },
      { id: "p-2", x: 65, y: 60, title: "Stone-face relief", description: "Consistent relief moulds for Tuscan sills, braais, planters and screens." }
    ],
    faq: [
      { q: "What windowsills do you manufacture?", a: "We cast windowsills in 170mm (1m long with water runoff slope), 250mm, and 500mm, as well as architectural Tuscan window sills." },
      { q: "What is in your water-friendly garden range?", a: "We offer stepping stones, water channels, channel covers, washbasins (waskatties), concrete benches, tree grids, pillars, bollards, and permeable pavers." },
      { q: "Can you cast custom precast products?", a: "Yes! Ecocrete specialises in custom products which you can't buy off a shelf. Bring your dimension or drawing and we'll cast it." }
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
    question: "Are you open on Saturdays?",
    answer: "No, we are closed on Saturdays and Sundays ('ons is nie Saterdag oop nie'). Our trading hours are Monday to Friday, 07:30 to 16:30."
  },
  {
    question: "What is the difference between Uniq Wall and traditional Stopnonsense?",
    answer: "Our modern Uniq Wall is our Security Fence — each panel weighs 115kg, making it extremely durable and not easy to remove or break (available from 1.8m to 2.450m high). We also offer traditional Stopnonsense in four patterns: Louvre, Sandstone, Smooth, and Brickface (up to 2.40m high)."
  },
  {
    question: "Do you supply only, or do you install too?",
    answer: "Both. Collect from the yard, take delivery on our truck, or book our own site crew for the full install — foundation, wall and finishing. 'We manufacture and install' — it's on the signboard."
  },
  {
    question: "Which Terraforce® blocks do you keep?",
    answer: "The full working range — L15, 4x4, 4x4 Step, Teracrete (permeable eco-surfacing), Terrafix 100, Terrapac and Bat. Larger custom quantities are cast to order on a short lead time."
  },
  {
    question: "How much can you extend an existing wall with Ex-Tend a Wall?",
    answer: "We offer extensions of 1 up to 3 slabs. One slab covers 300mm in height (giving you options for 300mm, 600mm, or 900mm of added height). We have been extending walls for years and years — contact us for a free quote to give you options."
  },
  {
    question: "Do you handle small repair jobs?",
    answer: "Yes! Endless requests and endless possibilities — we can save your fence before it falls over, whether it requires replacing only a few slabs or replacing a broken pole from motor vehicles or Mother Nature. WhatsApp a photo to 073 966 9931 for a quick free quote."
  },
  {
    question: "What moulds are available in the Precast range?",
    answer: "Ecocrete has a huge range of moulds: Pillars and pillar caps (Round 250, Fluted, Spiral, Square), Windowsills (170mm, 250mm, 500mm and Tuscan sills), Copings, Gulleys, Stepping stones, Washbasins (Waskatties), Cement balls, Bollards, Garden kerbs, Tree grids, and water channels."
  },
  {
    question: "How do I request a quote?",
    answer: "Use the Request a Quote button on this site, email sales@ecocrete.co.za, phone the yard on 051 435 3590, or call / WhatsApp sales directly on 073 966 9931."
  }
];
