export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  focus: string;
  kicker: string;
};

export type Clip = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  imageAlt: string;
  focus: string;
  overlay?: string;
  excerpt: string;
};

export const editorStories: Story[] = [
  {
    slug: "luxury-recliners-for-indias-premium-suvs",
    title: "Luxury recliners for India's most premium SUVs",
    excerpt:
      "Custom recliners in Innova, Fortuner, Vellfire, Defender, and more — a first-class cabin on wheels.",
    image: "/media/speed.jpg",
    imageAlt: "Red performance car on track, the kind of finish Fasttracks protects and restyles",
    focus: "center",
    kicker: "Most requested",
  },
  {
    slug: "full-body-ppf-from-one-lakh",
    title: "Full-body PPF from ₹1 lakh, bonnet from ₹20K",
    excerpt:
      "Self-healing film takes the rock chips and UV so the paint does not have to.",
    image: "/media/wheel.jpg",
    imageAlt: "Close view of a racing tyre and bodywork",
    focus: "center",
    kicker: "Paint Protection",
  },
  {
    slug: "srs-paint-correction-zero-filler",
    title: "SRS paint correction with zero filler",
    excerpt:
      "Skin Restoration System using Menzerna. Swirls and oxidation erased back to a mirror finish.",
    image: "/media/pink.jpg",
    imageAlt: "Glossy car nose and front wing in studio light",
    focus: "center",
    kicker: "Signature",
  },
  {
    slug: "custom-audio-from-one-lakh",
    title: "Custom audio systems from ₹1 lakh",
    excerpt:
      "Subwoofers, amplifiers, and tuning built around the cabin — concert hall, in your car.",
    image: "/media/red.jpg",
    imageAlt: "Car leaving a corner under a dark sky",
    focus: "center",
    kicker: "Audio",
  },
];

export const allStories = editorStories;

const reclinerFilm: Clip = {
  slug: "recliner-install-fortuner-to-first-class",
  title: "Recliner install: Fortuner to first class",
  duration: "2:14",
  image: "/media/start.jpg",
  imageAlt: "A line of cars between grandstands",
  focus: "center",
  excerpt: "How a cabin recliner goes into a premium SUV at the Jubilee Hills studio.",
};

const ppfFilm: Clip = {
  slug: "full-body-ppf-start-to-finish",
  title: "Full-body PPF, start to finish",
  duration: "3:40",
  image: "/media/speed.jpg",
  imageAlt: "Gloss red car in motion",
  focus: "center",
  overlay: "Paint stays safe.",
  excerpt: "Military-grade film, panel by panel, on a full-body protection job.",
};

const srsFilm: Clip = {
  slug: "srs-correction-on-a-black-suv",
  title: "SRS correction on a black SUV",
  duration: "1:55",
  image: "/media/red.jpg",
  imageAlt: "Dark car running over painted kerbs",
  focus: "center 60%",
  excerpt: "Zero-filler paint correction with Menzerna, taken back to a factory mirror.",
};

const audioFilm: Clip = {
  slug: "custom-audio-built-around-the-cabin",
  title: "Custom audio, built around the cabin",
  duration: "2:08",
  image: "/media/wheel.jpg",
  imageAlt: "Close-up of a performance tyre",
  focus: "center",
  overlay: "Concert hall.",
  excerpt: "A from-scratch audiophile install, starting at ₹1 lakh.",
};

const wrapFilm: Clip = {
  slug: "satin-wrap-new-colour-overnight",
  title: "Satin wrap: a new colour, paint stays underneath",
  duration: "1:32",
  image: "/media/pink.jpg",
  imageAlt: "Front end of a wrapped formula car",
  focus: "center",
  excerpt: "Satin, gloss, matte, or colour-shift — fully reversible vinyl.",
};

const studioReel: Clip = {
  slug: "2026-studio-reel",
  title: "2026 studio reel: Jubilee Hills",
  duration: "4:20",
  image: "/media/start.jpg",
  imageAlt: "Cars stacked through a tight section",
  focus: "left center",
  excerpt: "A year of recliners, PPF, wraps, and cabins leaving the studio.",
};

const vellfire: Clip = {
  slug: "vellfire-cabin-transformation",
  title: "Vellfire cabin, reimagined",
  duration: "1:48",
  image: "/media/speed.jpg",
  imageAlt: "Red and white car accelerating",
  focus: "70% 40%",
  excerpt: "Leather, lighting, and a recliner install in a Toyota Vellfire.",
};

const travo: Clip = {
  slug: "travo-bodykit-hilux-fortuner",
  title: "Travo bodykit for Hilux and Fortuner",
  duration: "2:36",
  image: "/media/red.jpg",
  imageAlt: "Rear of a car over red and blue kerbs",
  focus: "center",
  excerpt: "India's Travo bodykit installer for Hilux and Fortuner, in Jubilee Hills.",
};

const tint: Clip = {
  slug: "window-film-heat-and-privacy",
  title: "Window film: heat, privacy, UV",
  duration: "0:58",
  image: "/media/pink.jpg",
  imageAlt: "Car nose in bright light",
  focus: "center 30%",
  excerpt: "Premium solar film from ₹15K to ₹65K.",
};

const deepClean: Clip = {
  slug: "deep-interior-clean-in-two-hours",
  title: "Deep interior clean in one to two hours",
  duration: "1:05",
  image: "/media/wheel.jpg",
  imageAlt: "Detail of a tyre and sidepod",
  focus: "center 80%",
  excerpt: "Steam, shampoo, and ozone. ₹5K–₹7K. Drive out the same day.",
};

export const mustWatch: Clip[] = [reclinerFilm, ppfFilm, srsFilm, audioFilm, wrapFilm];

export const highlights: Clip[] = [studioReel, vellfire, travo, tint, deepClean];

export const allVideos: Clip[] = [
  reclinerFilm,
  ppfFilm,
  srsFilm,
  audioFilm,
  wrapFilm,
  studioReel,
  vellfire,
  travo,
  tint,
  deepClean,
];

export function storyBySlug(slug: string) {
  return allStories.find((story) => story.slug === slug);
}

export function videoBySlug(slug: string) {
  return allVideos.find((video) => video.slug === slug);
}
