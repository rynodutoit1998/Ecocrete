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
    id: "shondoni-secunda",
    title: "Shondoni Coal Mine Development",
    subtitle: "Genuine Terraforce® Round Face Walls — Industrial Mine Portal & Conveyor Terrace",
    location: "Near Secunda, South Africa",
    tag: "FLAGSHIP MINING INFRASTRUCTURE",
    image: "/images/project-shondoni-banner.jpg",
    additionalImages: [
      "/images/project-shondoni-banner.jpg",
      "/images/project-shondoni-wall.jpg",
      "/images/project-shondoni-conveyor.jpg"
    ],
    description: "One of South Africa's premier heavy industrial mining retaining wall installations. Genuine Terraforce® Round Face retaining blocks were supplied by licensed manufacturing to stabilize Shondoni Coal Mine's deep box cut portal and multi-kilometer overland conveyor embankments.",
    engineeringSpec: "High-grade 40 MPa interlocking Round Face blocks with geogrid tie-back reinforcement for heavy mining vehicle surcharge loads.",
    quote: {
      text: "The Terraforce round face walls at Shondoni handle extreme embankment loads around our mine shafts and conveyors with zero structural deflection.",
      author: "Lead Civil & Mining Earthworks Engineer"
    }
  },
  {
    id: "dubai-parks-green-belt",
    title: "Tiered Architectural Green Belts",
    subtitle: "Landscaped Retaining Terraces With Ornamental Grasses & Botanical Corridors",
    location: "Dubai & International Parks",
    tag: "BOTANICAL LANDSCAPING",
    image: "/images/project-dubai-landscaped.jpg",
    additionalImages: [
      "/images/project-dubai-landscaped.jpg"
    ],
    description: "Demonstrating the global versatility of Terraforce block architecture. The hollow engineered plant pockets allow tiered retaining walls to be transformed into lush, flowing botanical green belts planted with perennial grasses and succulents.",
    engineeringSpec: "Open-loop split-face and round-face blocks with automated drip-line irrigation channels integrated inside block cavities.",
    quote: {
      text: "Instead of a sterile concrete retaining barrier, Terraforce allowed us to create tiered botanical gardens that soften the urban landscape.",
      author: "Senior Landscape Architect"
    }
  },
  {
    id: "caledon-caltex",
    title: "Caledon Caltex Roadside Stop",
    subtitle: "Highway Embankment Retaining Wall Planted With Colorful South African Vygies",
    location: "Caledon / Western & Southern Cape Border",
    tag: "ROADSIDE GREEN BOUNDARY",
    image: "/images/retaining-wall-caltex.png",
    additionalImages: [
      "/images/retaining-wall-caltex.png"
    ],
    description: "An iconic example of South African bio-engineering. This highway service station embankment utilizes open-loop Round Face blocks planted with vibrant, drought-resistant vygies (Aizoaceae) to prevent soil erosion and create a living roadside garden.",
    engineeringSpec: "Gravity retaining terrace with 1:4 setback slope and natural root reinforcement.",
    quote: {
      text: "The vygies require almost no water and the wall hasn't shifted a millimeter after years of heavy highway traffic.",
      author: "Roadside Service Station Developer"
    }
  }
];

export interface ProductItem {
  id: string;
  name: string;
  category: 'retaining' | 'structural' | 'boundary' | 'drainage' | 'paving';
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
  tagline: "Free State Precast Concrete & Terraforce® Licensed Manufacturing",
  licenseText: "Selected Terraforce® products are manufactured under license by Ecocrete, Free State",
  contactPerson: "Elza Liebenberg",
  phone: "+27 83 655 6590",
  phoneClean: "+27836556590",
  emailPrimary: "sales@ecocrete.co.za",
  emailSecondary: "elzamaritz136@gmail.com",
  location: "Free State, South Africa",
  serviceFootprint: "Free State, Northern Cape, Western Cape border, Lesotho, and central South Africa",
  hours: {
    weekdays: "Mon – Fri: 07:30 – 16:30",
    saturday: "Saturday: 08:00 – 12:00",
    sunday: "Sunday: Closed (Emergency Site Support Available)"
  },
  stats: [
    { value: "25+", label: "Years Engineered Durability", sub: "Proven structural stability" },
    { value: "500K+", label: "Terraforce® Blocks Supplied", sub: "Licensed quality assurance" },
    { value: "40 MPa", label: "SABS Tested Compressive Strength", sub: "High-grade limestone mix" },
    { value: "100%", label: "Turnkey Installation Service", sub: "From earthworks to planting" }
  ]
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "terraforce-retaining-walls",
    slug: "terraforce-retaining-walls",
    title: "Terraforce® Retaining Walls & Green Belts",
    tagline: "More than just a retaining structure — turning functional boundaries into living, colourful green belts.",
    category: "Retaining & Bio-Engineering",
    shortDesc: "Licensed Free State manufacturer of SABS-approved Terraforce® retaining wall blocks. Engineered for gravity stability, erosion prevention, and minimal-water succulent green belts.",
    heroImage: "/images/project-shondoni-banner.jpg",
    fullDesc: `Ecocrete is the authorized licensed manufacturer of Terraforce® retaining wall systems in the Free State. Our open-loop round face retaining blocks are engineered to provide maximum shear resistance and gravity stability while doubling as a living green belt.
    
    The hollow engineered block design creates an ideal growing medium for indigenous succulents such as vygies (Aizoaceae). This dual-duty engineering softens hard industrial edges along roadside stops, commercial terraces, and highway embankments, turning necessary structural boundaries into thriving ecological corridors that require minimal irrigation.`,
    applications: [
      "Heavy Industrial Mining & Conveyor Embankments (e.g., Shondoni Coal Mine near Secunda)",
      "Highway & Roadside Service Station Embankments (e.g., Caledon Caltex)",
      "Commercial & Industrial Site Earth Stabilization",
      "Tiered Botanical Green Belts & Landscaped Parks (e.g., Dubai Parks)",
      "Heavy Load-Bearing Tiered Gravity Retaining Structures"
    ],
    galleryImages: [
      {
        url: "/images/project-shondoni-banner.jpg",
        caption: "Genuine Terraforce® Round Face Walls — Shondoni Coal Mine Development, near Secunda",
        tag: "MINING INFRASTRUCTURE"
      },
      {
        url: "/images/project-shondoni-wall.jpg",
        caption: "Massive 8m Tiered Retaining Wall — Shondoni Coal Mine Box Cut & Earthworks",
        tag: "HEAVY STRUCTURAL"
      },
      {
        url: "/images/project-shondoni-conveyor.jpg",
        caption: "Conveyor Belt Embankment & Slope Protection — Shondoni Coal Mine",
        tag: "CONVEYOR EMBANKMENT"
      },
      {
        url: "/images/project-dubai-landscaped.jpg",
        caption: "Architectural Tiered Landscaped Retaining Walls — Dubai Green Belt Project",
        tag: "BOTANICAL LANDSCAPING"
      },
      {
        url: "/images/retaining-wall-caltex.png",
        caption: "Roadside Service Station Green Boundary Planted With Vygies — Caledon Caltex",
        tag: "ROADSIDE GREEN BELT"
      }
    ],
    benefits: [
      {
        title: "Dual-Duty Green Belt Engineering",
        desc: "Engineered growing pockets allow vygies and groundcovers to root deeply, stabilizing soil naturally while softening concrete aesthetics.",
        iconName: "Leaf"
      },
      {
        title: "Terraforce® Licensed Quality",
        desc: "Manufactured under strict SABS quality assurance and Terraforce South Africa licensing in the Free State.",
        iconName: "Award"
      },
      {
        title: "Open-Loop Interlocking Stability",
        desc: "Reversible open-loop design allows convex, concave, or serpentine curves without custom cutting or structural mortar.",
        iconName: "ShieldCheck"
      },
      {
        title: "Minimal Irrigation & Drought Resistance",
        desc: "The block's thermal mass and moisture retention work in harmony with drought-resistant vygies (Aizoaceae) for zero-maintenance beauty.",
        iconName: "Droplets"
      }
    ],
    specifications: [
      { label: "Standard Block Dimensions", value: "340mm (L) x 400mm (W) x 180mm (H)" },
      { label: "Nominal Mass per Block", value: "24.5 kg – 26.0 kg (Dry Cast Aggregate)" },
      { label: "Compressive Strength", value: "22 MPa – 30 MPa (SABS 1215 compliant)" },
      { label: "Blocks per Square Meter", value: "14.7 blocks / m² (Vertical or inclined angle)" },
      { label: "Maximum Gravity Height", value: "Up to 5.0m (unreinforced); >10m with Geogrid reinforcement" },
      { label: "Growing Medium Capacity", value: "Approx. 12 litres of topsoil per block pair" }
    ],
    caseStudy: {
      title: "Caledon Caltex Petrol Station — Roadside Green Boundary",
      location: "N2 Highway Stop, Western / Southern Cape Border",
      description: `Terraforce® round face walls at the Caledon Caltex petrol station, planted with vygies (Aizoaceae), creating a green boundary. More than just a retaining structure, this wall doubles as a green belt — softening the hard edges of a busy roadside stop and turning a functional boundary into a living, colourful feature.
      
      The vygies thrive in the engineered growing medium within the Terraforce Retaining Walls® blocks, requiring minimal water while adding seasonal bursts of colour and helping to bind and stabilise the soil naturally. It's a great example of how retaining walls can do double duty: providing structural support while contributing to greener, more attractive urban and roadside spaces.`,
      quote: "Turning a functional roadside boundary into a living, colourful feature that binds soil naturally with minimal water.",
      author: "Project Engineering Review",
      highlight: "Selected Terraforce® products are manufactured under license by Ecocrete, Free State.",
      image: "/images/retaining-wall-caltex.png"
    },
    diagramPoints: [
      {
        id: "tf-1",
        x: 35,
        y: 28,
        title: "Engineered Growing Pocket",
        description: "Hollow core filled with nutrient-rich topsoil allowing Aizoaceae (vygies) to root deeply."
      },
      {
        id: "tf-2",
        x: 60,
        y: 45,
        title: "Interlocking Round-Face Block",
        description: "Precision dry-cast Terraforce® blocks lock together horizontally and vertically without mortar."
      },
      {
        id: "tf-3",
        x: 75,
        y: 65,
        title: "Free-Draining Gravel Backfill",
        description: "Coarse 19mm aggregate behind the wall prevents hydrostatic water pressure buildup."
      },
      {
        id: "tf-4",
        x: 25,
        y: 75,
        title: "Reinforced Foundation Footing",
        description: "Engineered concrete strip footing ensuring zero settlement on heavy roadside embankments."
      }
    ],
    faq: [
      {
        q: "Why are vygies (Aizoaceae) recommended for Terraforce® walls?",
        a: "Vygies are hardy South African succulents that thrive in the engineered soil pockets of Terraforce blocks. Their root systems bind the topsoil, preventing wind and rain washout while requiring minimal irrigation once established."
      },
      {
        q: "Do you supply and install outside of Bloemfontein / Free State?",
        a: "Yes! Ecocrete is licensed in the Free State and our installation teams service the entire Free State, Northern Cape, central South Africa, and border regions."
      },
      {
        q: "Can Terraforce walls be built on curved embankments?",
        a: "Absolutely. The round-face block geometry allows tight convex and concave curves without any cutting, making it ideal for serpentine roadside landscaping."
      }
    ]
  },
  {
    id: "structural-precast-beams-slabs",
    slug: "structural-precast-beams-slabs",
    title: "Structural Precast Beams, Columns & Slabs",
    tagline: "High-load structural concrete elements engineered for commercial, agricultural, and industrial construction.",
    category: "Heavy Structural Concrete",
    shortDesc: "Precision-cast reinforced beams, T-beams, lintels, and floor slabs designed for rapid site erection and long-span load capacity.",
    heroImage: "/images/precast-beams.png",
    fullDesc: `Ecocrete manufactures industrial-strength structural precast concrete elements designed for warehouses, multi-story commercial buildings, agricultural silos, and bridge crossings. 
    
    Cast in controlled factory conditions with high-grade limestone aggregates and high-tensile steel reinforcement, our beams and slabs eliminate on-site curing delays and scaffolding costs. Every structural element undergoes strict compressive testing to guarantee compliance with South African civil engineering standards.`,
    applications: [
      "Industrial Warehouse & Distribution Center Frameworks",
      "Agricultural Storage Facilities, Grain Silos & Livestock Sheds",
      "Commercial Shopping Mall Mezzanines & Parking Decks",
      "Heavy Load-Bearing Lintels & Floor Decking Systems",
      "Bridge Deck Beams & Underpass Supports"
    ],
    benefits: [
      {
        title: "Rapid Construction Schedule",
        desc: "Pre-cured factory elements can be erected immediately on arrival, cutting project timelines by up to 50%.",
        iconName: "Clock"
      },
      {
        title: "40 MPa High-Grade Concrete",
        desc: "Precision batching ensures superior compressive strength, minimal deflection, and zero surface honeycombing.",
        iconName: "Layers"
      },
      {
        title: "Custom Engineering Dimensions",
        desc: "We work directly with structural engineers to manufacture bespoke span lengths and reinforcement profiles.",
        iconName: "Ruler"
      },
      {
        title: "Weather-Independent Manufacturing",
        desc: "Factory-controlled curing eliminates weather delays and guarantees uniform concrete density.",
        iconName: "Sun"
      }
    ],
    specifications: [
      { label: "Concrete Strength Class", value: "40 MPa – 50 MPa (28-day cure)" },
      { label: "Reinforcement Standard", value: "High-tensile deformed steel bars (SANS 920)" },
      { label: "Available Spans", value: "1.5m up to 12.0m (custom structural engineering)" },
      { label: "Surface Finish", value: "Smooth steel-form off-shutter architectural finish" },
      { label: "Fire Resistance Rating", value: "Up to 4 hours (SABS / SANS 10177)" },
      { label: "Lifting Anchors", value: "Integrated engineered steel lifting loops" }
    ],
    diagramPoints: [
      {
        id: "bm-1",
        x: 40,
        y: 30,
        title: "High-Tensile Reinforcement Cage",
        description: "SANS 920 compliant steel rebar cage engineered for maximum shear and bending resistance."
      },
      {
        id: "bm-2",
        x: 70,
        y: 50,
        title: "Off-Shutter Steel Form Finish",
        description: "Smooth architectural surface ready for direct painting or exposed brutalist design."
      },
      {
        id: "bm-3",
        x: 20,
        y: 65,
        title: "Integrated Lifting Anchor",
        description: "Certified recessed lifting anchors for safe crane rigging during site erection."
      }
    ],
    faq: [
      {
        q: "Can Ecocrete manufacture custom beam sizes from structural drawings?",
        a: "Yes. Send your engineer's bending schedules and structural drawings to sales@ecocrete.co.za for an engineered quotation."
      },
      {
        q: "What is the typical lead time for structural precast orders?",
        a: "Standard lintels and beams are available from yard stock. Custom structural elements typically require 10 to 14 working days for casting and curing."
      }
    ]
  },
  {
    id: "precast-boundary-security-walls",
    slug: "precast-boundary-security-walls",
    title: "Precast Security Boundary & Acoustic Walls",
    tagline: "Impenetrable perimeter security and noise reduction for industrial estates, solar plants, and residential parks.",
    category: "Perimeter Security & Privacy",
    shortDesc: "Heavy-duty modular concrete walling systems offering extreme durability, acoustic dampening, and architectural aesthetics.",
    heroImage: "/images/boundary-wall.png",
    fullDesc: `Perimeter security demands more than flimsy wire mesh. Ecocrete’s modular precast concrete boundary walls provide an impenetrable barrier against intrusion, fire, and noise pollution.
    
    Our walling panels are available in both smooth architectural finishes and textured stone-relief designs. Built with reinforced concrete posts and interlocking horizontal slabs, these walls can be erected to heights exceeding 3.6 meters, with optional integration for electric fencing, razor wire, and security lighting brackets.`,
    applications: [
      "Industrial Commercial Parks & Logistics Estates",
      "Solar Farm & High-Voltage Substation Perimeters",
      "Highway Acoustic & Sound Abatement Screens",
      "Residential Estate Boundary & Privacy Walling",
      "High-Security Government & Municipal Installations"
    ],
    benefits: [
      {
        title: "Impenetrable Security Barrier",
        desc: "Solid reinforced concrete panels withstand impact, vandalism, and fire without deterioration.",
        iconName: "Shield"
      },
      {
        title: "Acoustic Noise Reduction",
        desc: "High mass density reflects and absorbs traffic and industrial machinery sound emissions.",
        iconName: "VolumeX"
      },
      {
        title: "Modular Rapid Assembly",
        desc: "Tongue-and-groove panel alignment allows installation speeds up to 50 linear meters per day.",
        iconName: "Zap"
      },
      {
        title: "Zero Rust or Rot",
        desc: "Unlike steel fencing or timber, precast concrete requires zero painting and withstands severe Free State winters.",
        iconName: "CheckCircle"
      }
    ],
    specifications: [
      { label: "Standard Panel Height", value: "1.8m, 2.4m, 3.0m, and 3.6m options" },
      { label: "Panel Thickness", value: "100mm – 150mm reinforced panel section" },
      { label: "Post Embedding Depth", value: "600mm – 900mm in 25 MPa concrete foundation" },
      { label: "Acoustic Rating", value: "32 dB noise reduction coefficient" },
      { label: "Finish Options", value: "Smooth Fair-Face, Louvered Relief, or Ashlar Stone Texture" },
      { label: "Security Readiness", value: "Pre-drilled top brackets for electric fence insulators" }
    ],
    diagramPoints: [
      {
        id: "bw-1",
        x: 35,
        y: 35,
        title: "Reinforced Vertical H-Post",
        description: "Heavy-duty H-profile column cast with 4x high-tensile steel bars."
      },
      {
        id: "bw-2",
        x: 65,
        y: 50,
        title: "Interlocking Acoustic Panel",
        description: "Tongue-and-groove joint prevents sightline gaps and seals against wind and sound."
      },
      {
        id: "bw-3",
        x: 35,
        y: 80,
        title: "Concrete Foundation Footing",
        description: "Deep-augured footings ensuring structural resistance against heavy wind loading."
      }
    ],
    faq: [
      {
        q: "Can electric fencing be installed on top of Ecocrete boundary walls?",
        a: "Yes, our vertical posts can be supplied with pre-cast mounting bolt holes or steel extension brackets for seamless electric fence integration."
      },
      {
        q: "How does the wall handle uneven or sloping terrain?",
        a: "Our modular post-and-panel system steps smoothly down gradients while maintaining a secure, gap-free ground seal."
      }
    ]
  },
  {
    id: "stormwater-drainage-culverts",
    slug: "stormwater-drainage-culverts",
    title: "Stormwater Drainage, Box Culverts & Pipes",
    tagline: "Heavy civil engineering infrastructure for water management, road crossings, and agricultural irrigation.",
    category: "Civil Infrastructure",
    shortDesc: "SABS-compliant reinforced concrete stormwater pipes, portal culverts, channels, and manhole assemblies.",
    heroImage: "/images/stormwater.png",
    fullDesc: `Effective stormwater and drainage management protects roads and foundations from destructive erosion. Ecocrete manufactures high-precision precast box culverts, interlocking drainage pipes, and stormwater channels engineered for heavy traffic wheel loads.
    
    Our infrastructure products are trusted by civil contractors, municipalities, and agricultural developers across the Free State for road crossings, river diversions, and agricultural drainage canals.`,
    applications: [
      "Road & Highway Stormwater Culvert Crossings",
      "Municipal Main Underground Drainage Pipelines",
      "Agricultural Canal Diversions & Irrigation Chutes",
      "Industrial Estate Retention Ponds & Spillways",
      "Erosion Control Below Retaining Walls & Embankments"
    ],
    benefits: [
      {
        title: "Heavy Traffic Load Compliance",
        desc: "Engineered to withstand TMH7 / SANS bridge loading and heavy mine transport axles.",
        iconName: "Truck"
      },
      {
        title: "Smooth Hydraulic Interior",
        desc: "Precision steel moulds create a frictionless inner surface for maximum stormwater flow velocity.",
        iconName: "Droplet"
      },
      {
        title: "O-Ring Sealed Joints",
        desc: "Spigot-and-socket joints with rubber gaskets ensure leak-free underground performance.",
        iconName: "Shield"
      },
      {
        title: "Long-Term Chemical Resistance",
        desc: "High-density concrete mix resists groundwater sulfates and agricultural run-off chemicals.",
        iconName: "Award"
      }
    ],
    specifications: [
      { label: "Pipe Diameter Range", value: "300mm up to 1800mm internal diameter" },
      { label: "Box Culvert Sizes", value: "600x600mm up to 3000x2400mm portal culverts" },
      { label: "Load Classifications", value: "Class 50D, Class 75D, and Class 100D (SANS 677)" },
      { label: "Joint Type", value: "Spigot and Socket / Interlocking Flush Joint" },
      { label: "Concrete Strength", value: "40 MPa minimum with low water-cement ratio" },
      { label: "Lifting System", value: "Recessed spherical head lifting anchors" }
    ],
    diagramPoints: [
      {
        id: "sc-1",
        x: 45,
        y: 40,
        title: "Heavy Wall Reinforced Core",
        description: "Double steel mesh reinforcement designed for deep trench burial and heavy surface loads."
      },
      {
        id: "sc-2",
        x: 75,
        y: 55,
        title: "Spigot & Socket Joint",
        description: "Precision rubber-gasket joint allowing angular deflection without groundwater leakage."
      }
    ],
    faq: [
      {
        q: "What is the difference between Class 50D and Class 100D pipes?",
        a: "The classification refers to the load-bearing capacity in newtons per linear meter. Class 100D is specified for heavy highway crossings and shallow earth cover under heavy traffic."
      }
    ]
  },
  {
    id: "turnkey-installation-services",
    slug: "turnkey-installation-services",
    title: "Turnkey Installation & Civil Engineering",
    tagline: "We don't just manufacture — our specialized field teams deliver professional site installation from excavation to planting.",
    category: "Site Installation & Engineering",
    shortDesc: "Complete end-to-end installation services for Terraforce® retaining walls, boundary fencing, and precast infrastructure.",
    heroImage: "/images/retaining-wall-caltex.png",
    fullDesc: `As stated in our Free State licensing agreement: 'We also offer installation services.' Ecocrete provides turnkey project execution for developers, municipalities, and private landowners who demand guaranteed structural perfection.
    
    From geotechnical site assessment and excavation to foundation casting, block placement, geogrid compaction, and vygies (Aizoaceae) botanical planting, our in-house civil installation teams manage the entire workflow. Every installation comes with our structural guarantee and certificate of engineering compliance.`,
    applications: [
      "Commercial & Roadside Retaining Wall Construction",
      "Large-Scale Industrial Perimeter Wall Erection",
      "Stormwater Trenching, Bedding & Pipe Laying",
      "Site Slope Stabilization & Bio-Engineering Planting",
      "Geotextile & Geogrid Reinforced Earth Retaining"
    ],
    benefits: [
      {
        title: "Single-Point Accountability",
        desc: "Zero finger-pointing between supplier and contractor — we manufacture, transport, and install under one warranty.",
        iconName: "CheckSquare"
      },
      {
        title: "Certified Engineering Teams",
        desc: "Our site foremen are trained in Terraforce® structural guidelines and SABS site safety protocols.",
        iconName: "Users"
      },
      {
        title: "Own Crane Trucks & Logistics",
        desc: "We operate our own fleet of crane-mounted delivery trucks for precision off-loading on difficult terrain.",
        iconName: "Truck"
      },
      {
        title: "Botanical Green Belt Planting",
        desc: "We supply and plant drought-hardy vygies and groundcovers directly into the retaining block pockets.",
        iconName: "Leaf"
      }
    ],
    specifications: [
      { label: "Service Footprint", value: "Free State, Northern Cape, Lesotho & Central SA" },
      { label: "Project Management", value: "Dedicated site foreman and weekly progress reporting" },
      { label: "Earthworks Compliance", value: "Compaction testing to 98% MOD AASHTO standards" },
      { label: "Planting Warranty", value: "Aizoaceae (Vygie) establishment & soil nutrition support" },
      { label: "Equipment Fleet", value: "Excavators, TLBs, Crane Trucks, Compaction Rollers" },
      { label: "Safety Standards", value: "Full OHS Act compliance with site safety files" }
    ],
    diagramPoints: [
      {
        id: "inst-1",
        x: 30,
        y: 40,
        title: "Precision Foundation Casting",
        description: "Laser-leveled concrete strip footings cast by Ecocrete installation specialists."
      },
      {
        id: "inst-2",
        x: 65,
        y: 60,
        title: "Geogrid Soil Reinforcement",
        description: "High-tensile geogrid layers compacted between earth lifts for tall retaining embankments."
      }
    ],
    faq: [
      {
        q: "How do I request a site visit and installation quote?",
        a: "Contact Elza Liebenberg directly at +27 83 655 6590 or email elzamaritz136@gmail.com with your site location and requirements."
      }
    ]
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: "prod-tf-l11",
    name: "Terraforce® L11 Retaining Block (Round Face)",
    category: "retaining",
    categoryLabel: "Retaining & Green Belts",
    code: "TF-L11-RF",
    image: "/images/retaining-wall-caltex.png",
    shortDesc: "Licensed open-loop round face retaining block engineered for gravity stability and vygies planting.",
    dimensions: "340 x 400 x 180 mm",
    weight: "25.0 kg",
    strengthMPa: "25 MPa",
    application: "Roadside embankments, Caledon Caltex style green boundaries, terrace walls",
    features: [
      "Open-loop growing pocket for Aizoaceae succulents",
      "Concave, convex & serpentine curve capable",
      "Licensed Free State manufacture",
      "SABS tested compressive durability"
    ],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-tf-v8",
    name: "Terraforce® V8 Commercial Gravity Block",
    category: "retaining",
    categoryLabel: "Retaining & Green Belts",
    code: "TF-V8-HD",
    image: "/images/retaining-wall-caltex.png",
    shortDesc: "Heavy-duty retaining block for high-load commercial terracing and riverbank protection.",
    dimensions: "420 x 400 x 200 mm",
    weight: "34.5 kg",
    strengthMPa: "30 MPa",
    application: "Heavy embankment retention, bridge abutments, stormwater erosion control",
    features: [
      "High shear interlock resistance",
      "Engineered for geogrid reinforcement",
      "Textured or smooth architectural face",
      "High water drainage permeability"
    ],
    inStock: true,
    licensed: true
  },
  {
    id: "prod-bm-412",
    name: "Structural Precast Reinforced T-Beam (PC-412)",
    category: "structural",
    categoryLabel: "Structural Beams & Slabs",
    code: "STR-BM-412",
    image: "/images/precast-beams.png",
    shortDesc: "40 MPa reinforced concrete structural beam for warehouse decking and industrial framing.",
    dimensions: "6000 x 450 x 300 mm (Custom lengths available)",
    weight: "1,940 kg",
    strengthMPa: "40 MPa",
    application: "Industrial flooring, mezzanine decks, agricultural silo supports",
    features: [
      "SANS 920 high-tensile steel reinforcement",
      "Off-shutter architectural concrete finish",
      "Recessed crane lifting anchors",
      "Zero on-site curing downtime"
    ],
    inStock: true
  },
  {
    id: "prod-sl-hc",
    name: "Hollow-Core Precast Floor Slab Panel",
    category: "structural",
    categoryLabel: "Structural Beams & Slabs",
    code: "STR-SL-HC200",
    image: "/images/precast-beams.png",
    shortDesc: "Pre-stressed hollow-core floor slab for long-span commercial and multi-story buildings.",
    dimensions: "1200mm width x 200mm depth x Custom Span",
    weight: "260 kg / m²",
    strengthMPa: "45 MPa",
    application: "Commercial office floors, parking decks, residential suspended floors",
    features: [
      "Lightweight hollow-core design reduces foundation loads",
      "4-hour fire resistance rating",
      "Rapid dry erection with immediate load bearing",
      "Excellent acoustic insulation"
    ],
    inStock: true
  },
  {
    id: "prod-bw-sec",
    name: "Precast Reinforced Security Wall Panel",
    category: "boundary",
    categoryLabel: "Boundary & Security Walls",
    code: "SEC-BW-300",
    image: "/images/boundary-wall.png",
    shortDesc: "Heavy-duty modular precast boundary wall panel with acoustic sound abatement properties.",
    dimensions: "1440 x 300 x 100 mm per horizontal panel",
    weight: "85.0 kg per panel",
    strengthMPa: "30 MPa",
    application: "Industrial estates, solar farm perimeters, highway noise screens",
    features: [
      "32 dB acoustic noise reduction",
      "Tongue-and-groove sightline seal",
      "Zero maintenance, rot-proof concrete",
      "Electric fencing bracket compatible"
    ],
    inStock: true
  },
  {
    id: "prod-sc-box",
    name: "Heavy-Duty Stormwater Box Culvert",
    category: "drainage",
    categoryLabel: "Stormwater & Drainage",
    code: "INF-BOX-2418",
    image: "/images/stormwater.png",
    shortDesc: "Precision portal box culvert engineered for highway road crossings and water diversion.",
    dimensions: "2400 x 1800 x 1220 mm",
    weight: "3,850 kg",
    strengthMPa: "40 MPa (Class 100D)",
    application: "Road stormwater crossings, canal diversions, agricultural drainage",
    features: [
      "TMH7 bridge traffic wheel load compliant",
      "Smooth frictionless inner flow surface",
      "Spigot & socket rubber seal ready",
      "SABS / SANS 677 quality certified"
    ],
    inStock: true
  },
  {
    id: "prod-sc-pipe",
    name: "Reinforced Concrete Interlocking Drainage Pipe",
    category: "drainage",
    categoryLabel: "Stormwater & Drainage",
    code: "INF-PIP-900",
    image: "/images/stormwater.png",
    shortDesc: "900mm diameter reinforced concrete pipe for municipal and agricultural stormwater lines.",
    dimensions: "900mm ID x 2440mm effective length",
    weight: "1,420 kg",
    strengthMPa: "35 MPa (Class 75D)",
    application: "Underground stormwater mains, farm access road culverts",
    features: [
      "Heavy steel reinforcement cage",
      "Watertight o-ring joint profile",
      "High chemical resistance to run-off",
      "Precision concentric casting"
    ],
    inStock: true
  },
  {
    id: "prod-pv-kerb",
    name: "Heavy Highway Barrier Kerb (Figure 7 / 8)",
    category: "paving",
    categoryLabel: "Kerbs & Infrastructure",
    code: "INF-KRB-FIG7",
    image: "/images/boundary-wall.png",
    shortDesc: "SABS compliant barrier and mountable kerbstones for highway and municipal road edges.",
    dimensions: "1000 x 300 x 175 mm",
    weight: "115.0 kg",
    strengthMPa: "30 MPa",
    application: "Roadside petrol stations, highway edges, commercial parking lots",
    features: [
      "High impact resistance against wheel strike",
      "Uniform dry-cast surface density",
      "Pre-cast drainage channel options",
      "Bulk pallet delivery across Free State"
    ],
    inStock: true
  }
];

export const TESTIMONIALS = [
  {
    quote: "The genuine Terraforce® round face walls at Shondoni Coal Mine handle extreme embankment loads around our box cuts and overland conveyors with zero structural deflection.",
    author: "Lead Civil & Mining Earthworks Engineer",
    location: "Near Secunda, South Africa",
    project: "Shondoni Coal Mine Development",
    rating: 5
  },
  {
    quote: "The Terraforce® round face wall at our roadside service station is more than a retaining wall — it's a living green belt. The vygies require almost no water and the wall hasn't shifted a millimeter.",
    author: "Roadside Service Station Developer",
    location: "Western / Southern Cape Border",
    project: "Caledon Caltex Green Boundary Project",
    rating: 5
  },
  {
    quote: "Ecocrete's structural beams and slabs saved us three weeks on our Welkom distribution warehouse. High-grade 40 MPa concrete and flawless crane delivery.",
    author: "H. Van Der Merwe",
    location: "Free State Civil Contractors",
    project: "Logistics Warehouse Erection",
    rating: 5
  },
  {
    quote: "Working with Elza Liebenberg and the Ecocrete team was effortless. Their turnkey installation team handled the earthworks, block laying, and even the botanical planting.",
    author: "M. Mokoena",
    location: "Bloemfontein Commercial Estate",
    project: "5.2m Tiered Retaining Wall",
    rating: 5
  }
];

export const FAQ_GENERAL = [
  {
    question: "Where is Ecocrete located and which areas do you supply?",
    answer: "Ecocrete is based in the Free State, South Africa. We supply and install precast concrete products across the entire Free State, Northern Cape, central South Africa, Lesotho border, and key highway infrastructure projects across the Western Cape border."
  },
  {
    question: "Is Ecocrete an officially licensed Terraforce® manufacturer?",
    answer: "Yes! Selected Terraforce® products are manufactured under license by Ecocrete, Free State. Every block meets SABS quality standards and official Terraforce South Africa engineering specifications."
  },
  {
    question: "What are the advantages of planting vygies (Aizoaceae) in Terraforce walls?",
    answer: "Vygies are indigenous South African succulents that thrive in the engineered growing medium of Terraforce blocks. They create a colourful green belt that softens hard concrete edges, binds soil naturally against erosion, and requires minimal irrigation."
  },
  {
    question: "Do you provide turnkey installation services or only block supply?",
    answer: "We offer both! You can purchase SABS-approved blocks and precast elements for your own contractors, or engage our in-house installation teams for turnkey earthworks, foundation casting, block erection, and planting."
  },
  {
    question: "How do I request an engineering quotation or site consultation?",
    answer: "You can use the instant Quote Request form on this website, email sales@ecocrete.co.za or elzamaritz136@gmail.com, or call Elza Liebenberg directly at +27 83 655 6590."
  }
];
