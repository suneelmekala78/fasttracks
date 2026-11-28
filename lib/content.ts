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
  youtubeId: string;
};

export const youtubeChannelUrl = "https://www.youtube.com/@FasttracksCarCareHyderabad/videos";

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export const editorStories: Story[] = [
  {
    slug: "luxury-recliners-for-indias-premium-suvs",
    title: "Luxury recliners for India's most premium SUVs",
    excerpt:
      "Custom recliners in Innova, Fortuner, Vellfire, Defender, and more — a first-class cabin on wheels.",
    image: "/images/recliners.jpg",
    imageAlt: "Luxury recliner cabin install",
    focus: "center",
    kicker: "Most requested",
  },
  {
    slug: "full-body-ppf-from-one-lakh",
    title: "Full-body PPF from ₹1 lakh, bonnet from ₹20K",
    excerpt:
      "Self-healing film takes the rock chips and UV so the paint does not have to.",
    image: "/images/ppf.jpg",
    imageAlt: "Paint protection film on a vehicle",
    focus: "center",
    kicker: "Paint Protection",
  },
  {
    slug: "srs-paint-correction-zero-filler",
    title: "SRS paint correction with zero filler",
    excerpt:
      "Skin Restoration System using Menzerna. Swirls and oxidation erased back to a mirror finish.",
    image: "/images/srs.jpg",
    imageAlt: "SRS paint correction finish",
    focus: "center",
    kicker: "Signature",
  },
  {
    slug: "custom-audio-from-one-lakh",
    title: "Custom audio systems from ₹1 lakh",
    excerpt:
      "Subwoofers, amplifiers, and tuning built around the cabin — concert hall, in your car.",
    image: "/images/audio.jpg",
    imageAlt: "Custom car audio install",
    focus: "center",
    kicker: "Audio",
  },
];

export const allStories = editorStories;

const studioReel: Clip = {
  slug: "ten-cars-hundreds-of-transformations",
  title: "Ten cars. Hundreds of transformations.",
  duration: "17:14",
  youtubeId: "KmKhbiPta1Q",
  image: ytThumb("KmKhbiPta1Q"),
  imageAlt: "Fasttracks studio transformation reel",
  focus: "center",
  overlay: "Name is enough.",
  excerpt: "A Fasttracks montage of builds leaving the Jubilee Hills floor.",
};

const poloMod: Clip = {
  slug: "polo-full-modification",
  title: "Polo full modification",
  duration: "8:31",
  youtubeId: "5YL8Rv9zM-o",
  image: ytThumb("5YL8Rv9zM-o"),
  imageAlt: "Volkswagen Polo full modification at Fasttracks",
  focus: "center",
  excerpt: "A complete Polo rebuild on the Fasttracks floor in Hyderabad.",
};

const tharRoxx: Clip = {
  slug: "thar-roxx-full-modification",
  title: "Thar Roxx full modification",
  duration: "4:38",
  youtubeId: "nIJ4S9iCRJU",
  image: ytThumb("nIJ4S9iCRJU"),
  imageAlt: "Mahindra Thar Roxx full modification",
  focus: "center",
  excerpt: "Full Thar Roxx modification filmed at Fasttracks Car Care.",
};

const claInfotainment: Clip = {
  slug: "mercedes-cla-android-infotainment",
  title: "Mercedes CLA Android infotainment",
  duration: "0:55",
  youtubeId: "m1q39Z9vCyU",
  image: ytThumb("m1q39Z9vCyU"),
  imageAlt: "Mercedes CLA Android infotainment upgrade",
  focus: "center",
  overlay: "Screens.",
  excerpt: "CLA cabin upgraded with a new Android infotainment system.",
};

const nissanAudio: Clip = {
  slug: "nissan-audio-system-upgrade",
  title: "Nissan audio system upgrade",
  duration: "0:21",
  youtubeId: "BuY1BPb8f1U",
  image: ytThumb("BuY1BPb8f1U"),
  imageAlt: "Nissan audio system upgrade at Fasttracks",
  focus: "center",
  overlay: "Concert hall.",
  excerpt: "A custom audio upgrade filmed in the Hyderabad studio.",
};

const carnivalFootstep: Clip = {
  slug: "kia-carnival-automatic-footstep",
  title: "Kia Carnival 2025 automatic footstep",
  duration: "0:26",
  youtubeId: "Dgyebth8_9s",
  image: ytThumb("Dgyebth8_9s"),
  imageAlt: "Kia Carnival automatic footstep install",
  focus: "center",
  excerpt: "Carnival upgraded with an automatic footstep at Fasttracks.",
};

const endeavourAlloys: Clip = {
  slug: "ford-endeavour-stylish-alloys",
  title: "Ford Endeavour stylish alloys",
  duration: "0:16",
  youtubeId: "zPC_8P369gs",
  image: ytThumb("zPC_8P369gs"),
  imageAlt: "Ford Endeavour alloy wheel upgrade",
  focus: "center",
  excerpt: "Endeavour rolling out on a fresh set of alloys.",
};

const skodaLighting: Clip = {
  slug: "skoda-rapid-ambient-lighting",
  title: "Skoda Rapid ambient lighting",
  duration: "0:18",
  youtubeId: "tfvUxI1q8ao",
  image: ytThumb("tfvUxI1q8ao"),
  imageAlt: "Skoda Rapid ambient lighting upgrade",
  focus: "center",
  excerpt: "Sleek ambient lighting fitted to a Skoda Rapid.",
};

const audiInfotainment: Clip = {
  slug: "audi-q3-infotainment-upgrade",
  title: "Audi Q3 infotainment upgrade",
  duration: "0:18",
  youtubeId: "r1ogN3CPTI4",
  image: ytThumb("r1ogN3CPTI4"),
  imageAlt: "Audi Q3 infotainment system upgrade",
  focus: "center",
  excerpt: "Q3 cabin updated with a new infotainment system.",
};

const tharMod: Clip = {
  slug: "mahindra-thar-modification",
  title: "Mahindra Thar modification",
  duration: "0:39",
  youtubeId: "7TG5akuiKi4",
  image: ytThumb("7TG5akuiKi4"),
  imageAlt: "Mahindra Thar modification at Fasttracks",
  focus: "center",
  excerpt: "Grill, lights, alloys, and more — a Thar leave the floor transformed.",
};

export const mustWatch: Clip[] = [studioReel, poloMod, tharRoxx, claInfotainment, nissanAudio];

export const highlights: Clip[] = [
  carnivalFootstep,
  endeavourAlloys,
  skodaLighting,
  audiInfotainment,
  tharMod,
];

export const allVideos: Clip[] = [...mustWatch, ...highlights];

export function storyBySlug(slug: string) {
  return allStories.find((story) => story.slug === slug);
}

export function videoBySlug(slug: string) {
  return allVideos.find((video) => video.slug === slug);
}

export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeEmbedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}
