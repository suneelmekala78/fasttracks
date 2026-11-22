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
      "Allow about a week of notice. Fits Innova Crysta, Fortuner, Hi-Cross, Land Cruiser, Defender, Vellfire, Carnival, GLS, X5, X7, V-Class, Alcazar, Gloster, Thar, Scorpio N, MU-X, Force/Tempo Traveller, and mini buses.",
    ],
    highlights: ["Premium SUV & MPV fitments", "One-week notice", "Custom leather & finishes"],
    image: "/media/speed.jpg",
    imageAlt: "Performance car finish representing premium cabin work",
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
    image: "/media/wheel.jpg",
    imageAlt: "Close view of bodywork and tyre",
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
    image: "/media/pink.jpg",
    imageAlt: "Gloss paint under studio light",
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
    image: "/media/red.jpg",
    imageAlt: "Car moving through a dark scene",
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
    image: "/media/start.jpg",
    imageAlt: "Line of cars suggesting premium cabin builds",
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
    image: "/media/pink.jpg",
    imageAlt: "Bright light across a car nose",
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
    image: "/media/pink.jpg",
    imageAlt: "Wrapped front end detail",
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
    image: "/media/wheel.jpg",
    imageAlt: "Wheel and tyre detail",
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
    image: "/media/red.jpg",
    imageAlt: "Car on track surface",
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
    image: "/media/start.jpg",
    imageAlt: "Cars stacked suggesting custom finishes",
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
    image: "/media/wheel.jpg",
    imageAlt: "Detail finish on vehicle surface",
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
    image: "/media/speed.jpg",
    imageAlt: "Dynamic car shot for cabin tech upgrades",
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

const vehicleImages = [
  { image: "/media/speed.jpg", imageAlt: "Premium SUV exterior", focus: "center" },
  { image: "/media/wheel.jpg", imageAlt: "Wheel and body detail", focus: "center" },
  { image: "/media/pink.jpg", imageAlt: "Gloss paint finish", focus: "center" },
  { image: "/media/red.jpg", imageAlt: "Performance car on road", focus: "center" },
  { image: "/media/start.jpg", imageAlt: "Line of premium cars", focus: "center" },
];

const reclinerVehicleNames = [
  "Innova Crysta",
  "Fortuner",
  "Hi-Cross",
  "Land Cruiser",
  "Defender",
  "Vellfire",
  "Carnival",
  "GLS",
  "X5",
  "X7",
  "V-Class",
  "Alcazar",
  "Gloster",
  "Thar",
  "Scorpio N",
  "MU-X",
  "Force / Tempo Traveller",
  "Mini buses",
];

export const reclinerVehicles: ReclinerVehicle[] = reclinerVehicleNames.map((name, index) => {
  const media = vehicleImages[index % vehicleImages.length];
  return {
    name,
    image: media.image,
    imageAlt: `${name} recliner fitment`,
    focus: media.focus,
    accent: index === 0,
  };
});

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
