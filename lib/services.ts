export type StudioService = {
  slug: string;
  href: string;
  title: string;
  kicker: string;
  price: string;
  summary: string;
  body: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  focus?: string;
  featured?: boolean;
};

export const studioServices: StudioService[] = [
  {
    slug: "recliners",
    href: "/recliners",
    title: "Luxury Recliners",
    kicker: "Most requested",
    price: "Book ~1 week ahead",
    summary: "First-class lounge seats installed in India's premium SUVs and MPVs.",
    body: [
      "The studio's most requested job. We install luxury recliners that turn a cabin into a first-class lounge on wheels.",
      "Allow about a week of notice. Fits Innova Crysta, Fortuner, Hi-Cross, Land Cruiser, Defender, Vellfire, Carnival, GLS, X5, X7, V-Class, Lexus LM, Alcazar, Gloster, Thar, Scorpio N, MU-X, Force/Tempo Traveller, and mini buses.",
    ],
    highlights: ["Premium SUV & MPV fitments", "One-week notice", "Custom leather & finishes"],
    image: "/images/recliners.jpg",
    imageAlt: "Luxury recliner cabin install",
    featured: true,
  },
  {
    slug: "ppf",
    href: "/services/ppf",
    title: "Paint Protection Film",
    kicker: "PPF",
    price: "Full body ₹1L–₹2L · Bonnet from ₹20K",
    summary: "Self-healing military-grade film for chips, scratches, and UV.",
    body: [
      "Full-body protection from ₹1 lakh to ₹2 lakh. Bonnet-only jobs start at ₹20,000.",
      "The film takes rock chips, swirl marks, and sun so the clear coat does not have to.",
    ],
    highlights: ["Self-healing film", "Full body or panels", "UV & chip shield"],
    image: "/images/ppf.jpg",
    imageAlt: "Paint protection film on a vehicle",
    featured: true,
  },
  {
    slug: "srs",
    href: "/services/srs",
    title: "Skin Restoration System",
    kicker: "SRS",
    price: "Zero-filler Menzerna",
    summary: "Signature paint correction with Menzerna — mirror finish, no filler.",
    body: [
      "SRS is the studio signature: zero-filler correction using Menzerna compounds.",
      "Swirls, scratches, and oxidation come back to a factory mirror without masking the clear coat.",
    ],
    highlights: ["Menzerna compounds", "Zero filler", "Mirror finish"],
    image: "/images/srs.jpg",
    imageAlt: "SRS paint correction finish",
    featured: true,
  },
  {
    slug: "audio",
    href: "/services/audio",
    title: "Custom Audio Setup",
    kicker: "From ₹1 lakh",
    price: "From ₹1 lakh",
    summary: "Concert-hall acoustics built around your cabin and your ears.",
    body: [
      "Subwoofers, amplifiers, door treatments, and tuning — built as a system, not a box of parts.",
      "Every install starts with how the cabin listens, then the hardware follows.",
    ],
    highlights: ["Cabin-first tuning", "Amp & sub installs", "From ₹1 lakh"],
    image: "/images/audio.jpg",
    imageAlt: "Custom car audio install",
  },
  {
    slug: "interior",
    href: "/services/interior",
    title: "Interior Customization",
    kicker: "₹30K to ₹10L",
    price: "₹30K – ₹10L+",
    summary: "Bespoke leather, suede, ambient light, and one-of-one trims.",
    body: [
      "Custom cabins from a refresh to a full rebuild. Leather, suede, stitching, and ambient lighting.",
      "No upper limit when the brief asks for it.",
    ],
    highlights: ["Custom leather & suede", "Ambient lighting", "Bespoke trims"],
    image: "/images/intirior.jpg",
    imageAlt: "Custom leather interior cabin",
  },
  {
    slug: "tint",
    href: "/services/tint",
    title: "Window Tinting",
    kicker: "₹15K–₹65K",
    price: "₹15K – ₹65K",
    summary: "Heat rejection, privacy, and UV protection with premium solar films.",
    body: [
      "Solar films for Hyderabad heat: cooler cabins, less glare, more privacy.",
      "Grades from daily drivers to fully blacked-out luxury builds.",
    ],
    highlights: ["Heat rejection", "UV protection", "Privacy grades"],
    image: "/images/window-tinting.jpg",
    imageAlt: "Window tinting on a vehicle",
  },
  {
    slug: "vinyl",
    href: "/services/vinyl",
    title: "Vinyl Wrapping",
    kicker: "Fully reversible",
    price: "Satin · gloss · matte · colour-shift",
    summary: "A new colour overnight. The paint stays safe underneath.",
    body: [
      "Satin, gloss, matte, chrome, or colour-shift wraps — fully reversible.",
      "Change the look without committing the factory paint.",
    ],
    highlights: ["Reversible colour change", "Full or accent wraps", "Paint stays protected"],
    image: "/images/wrapping.jpg",
    imageAlt: "Vinyl wrap finish on a car",
  },
  {
    slug: "alloys",
    href: "/services/alloys",
    title: "Alloy Wheel Upgrades",
    kicker: "Wheels",
    price: "Fitment · refinish · powder coat",
    summary: "Curated alloys, refinishing, and custom powder coating.",
    body: [
      "Fitment that sits right, finishes that last, and powder coats matched to the build.",
    ],
    highlights: ["Performance fitment", "Refinishing", "Custom powder coat"],
    image: "/images/wheels.jpg",
    imageAlt: "Alloy wheel fitment and finish",
  },
  {
    slug: "suspension",
    href: "/services/suspension",
    title: "Suspension Modifications",
    kicker: "Stance",
    price: "Coilovers · air-ride",
    summary: "Ride height, stance, and handling tuned for the road you drive.",
    body: [
      "Coilovers or air suspension for stance and control. Setup follows how you use the car.",
    ],
    highlights: ["Coilovers", "Air suspension", "Stance & handling"],
    image: "/images/wheels.jpg",
    imageAlt: "Suspension and stance on alloy wheels",
  },
  {
    slug: "hydro-dipping",
    href: "/services/hydro-dipping",
    title: "Hydro Dipping",
    kicker: "One of one",
    price: "Custom patterns",
    summary: "Hydrographic patterns on trims, wheels, and interior parts.",
    body: [
      "One-of-one pattern work for interiors and exterior accents.",
    ],
    highlights: ["Custom patterns", "Trims & accents", "Unique finishes"],
    image: "/images/wrapping.jpg",
    imageAlt: "Custom patterned finish accents",
  },
  {
    slug: "interior-cleaning",
    href: "/services/interior-cleaning",
    title: "Deep Interior Cleaning",
    kicker: "₹5K–₹7K",
    price: "₹5K – ₹7K · 1–2 hours",
    summary: "Steam, shampoo, and ozone. Drive out the same day.",
    body: [
      "A deep cabin reset in one to two hours. Steam, shampoo, and ozone for a brand-new feel.",
    ],
    highlights: ["Steam & shampoo", "Ozone treatment", "Same-day turnaround"],
    image: "/images/intirior.jpg",
    imageAlt: "Deep cleaned vehicle interior",
  },
  {
    slug: "infotainment",
    href: "/services/infotainment",
    title: "Infotainment Upgrades",
    kicker: "Screens",
    price: "CarPlay · Android Auto · AV",
    summary: "Apple CarPlay, Android Auto, and custom touch displays.",
    body: [
      "Modern screens and connectivity for every make that rolls into Jubilee Hills.",
    ],
    highlights: ["Apple CarPlay", "Android Auto", "Custom displays"],
    image: "/images/audio.jpg",
    imageAlt: "Cabin tech and infotainment upgrade",
  },
];

export function serviceBySlug(slug: string) {
  return studioServices.find((service) => service.slug === slug);
}

export type ReclinerVehicle = {
  name: string;
  image: string;
  imageAlt: string;
  focus?: string;
  accent?: boolean;
};

export const reclinerVehicles: ReclinerVehicle[] = [
  { name: "Innova Crysta", image: "/images/recliners/innova-crysta.jpg", imageAlt: "Innova Crysta recliner fitment", accent: true },
  { name: "Fortuner", image: "/images/recliners/fortuner.jpg", imageAlt: "Fortuner recliner fitment" },
  { name: "Hi-Cross", image: "/images/recliners/hi-cross.jpg", imageAlt: "Hi-Cross recliner fitment" },
  { name: "Land Cruiser", image: "/images/recliners/landcruiser.jpg", imageAlt: "Land Cruiser recliner fitment" },
  { name: "Defender", image: "/images/recliners/defender.jpg", imageAlt: "Defender recliner fitment" },
  { name: "Vellfire", image: "/images/recliners/vellfire.jpg", imageAlt: "Vellfire recliner fitment" },
  { name: "Carnival", image: "/images/recliners/carnival.jpg", imageAlt: "Carnival recliner fitment" },
  { name: "GLS", image: "/images/recliners/gls.jpg", imageAlt: "Mercedes GLS recliner fitment" },
  { name: "X5", image: "/images/recliners/x5.jpg", imageAlt: "BMW X5 recliner fitment" },
  { name: "X7", image: "/images/recliners/x7.jpg", imageAlt: "BMW X7 recliner fitment" },
  { name: "V-Class", image: "/images/recliners/v-class.jpg", imageAlt: "Mercedes V-Class recliner fitment" },
  { name: "Lexus LM", image: "/images/recliners/lexus-lm.jpg", imageAlt: "Lexus LM recliner fitment" },
  { name: "Alcazar", image: "/images/recliners/alcazar.jpg", imageAlt: "Alcazar recliner fitment" },
  { name: "Gloster", image: "/images/recliners/gloster.jpg", imageAlt: "Gloster recliner fitment" },
  { name: "Thar", image: "/images/recliners/thar.jpg", imageAlt: "Thar recliner fitment" },
  { name: "Scorpio N", image: "/images/recliners/scarpio.jpg", imageAlt: "Scorpio N recliner fitment" },
  { name: "MU-X", image: "/images/recliners/mux.jpg", imageAlt: "Isuzu MU-X recliner fitment" },
  { name: "Force / Tempo Traveller", image: "/images/recliners/tempo.jpg", imageAlt: "Tempo Traveller recliner fitment" },
  { name: "Mini buses", image: "/images/recliners/mini-bus.jpg", imageAlt: "Mini bus recliner fitment" },
];

export const partners = [
  { name: "Menzerna", note: "SRS paint correction compounds" },
  { name: "Travo", note: "India's Hilux & Fortuner bodykit installer" },
  { name: "Toyota", note: "Fortuner, Innova, Vellfire, Land Cruiser" },
  { name: "Mercedes-Benz", note: "GLS, V-Class cabin builds" },
  { name: "BMW", note: "X5 & X7 recliner and PPF work" },
  { name: "Land Rover", note: "Defender cabin transformations" },
  { name: "Kia", note: "Carnival and Carnival cabin upgrades" },
  { name: "Mahindra", note: "Thar, Scorpio N, XUV builds" },
  { name: "Hyundai", note: "Alcazar and premium cabin work" },
  { name: "Isuzu", note: "MU-X and utility cabin installs" },
];
