import { allStories, allVideos, storyBySlug, videoBySlug } from "@/lib/content";

export type PageCopy = {
  title: string;
  kicker: string;
  description: string;
};

const staticPages: Record<string, PageCopy> = {
  services: {
    title: "Services",
    kicker: "One roof",
    description:
      "Recliners, PPF, SRS paint correction, audio, interiors, tint, vinyl, alloys, suspension, hydro dipping, deep cleaning, and infotainment. This page will list every service with pricing.",
  },
  recliners: {
    title: "Luxury Recliners",
    kicker: "Most requested",
    description:
      "Custom recliners for Innova Crysta, Fortuner, Vellfire, Land Cruiser, Defender, Carnival, GLS, X5, X7, Thar, and more. Recliner installs need about a week of notice. This page is a placeholder for the full recliner guide.",
  },
  videos: {
    title: "Studio films",
    kicker: "Watch",
    description: "Recliner installs, PPF jobs, wraps, and cabin builds will be collected on this page.",
  },
  partners: {
    title: "Partners",
    kicker: "Studio",
    description:
      "Product and vehicle partners Fasttracks works with every week will be profiled here.",
  },
  "services/ppf": {
    title: "Paint Protection Film",
    kicker: "PPF",
    description:
      "Full body from ₹1L–₹2L. Bonnet from ₹20K. Self-healing film against rock chips, scratches, and UV. This service page is a placeholder.",
  },
  "services/srs": {
    title: "Skin Restoration System",
    kicker: "SRS",
    description:
      "Signature zero-filler paint correction using Menzerna. Swirls, scratches, and oxidation taken back to a mirror finish. This service page is a placeholder.",
  },
  "services/audio": {
    title: "Custom Audio Setup",
    kicker: "From ₹1 lakh",
    description:
      "Audiophile systems built around the car: subwoofers, amplifiers, door treatments, and tuning. This service page is a placeholder.",
  },
  "services/interior": {
    title: "Interior Customization",
    kicker: "₹30K to ₹10L",
    description:
      "Custom leather, suede, ambient lighting, and bespoke trims. No upper limit on the cabin. This service page is a placeholder.",
  },
  "services/tint": {
    title: "Window Tinting",
    kicker: "₹15K–₹65K",
    description:
      "Heat rejection, privacy, and UV protection with premium solar films. This service page is a placeholder.",
  },
  "services/vinyl": {
    title: "Vinyl Wrapping",
    kicker: "Fully reversible",
    description:
      "Satin, gloss, matte, chrome, or colour-shift. The paint stays safe underneath. This service page is a placeholder.",
  },
  "services/alloys": {
    title: "Alloy Wheel Upgrades",
    kicker: "Wheels",
    description:
      "Fitment, refinishing, and custom powder coating. This service page is a placeholder.",
  },
  "services/suspension": {
    title: "Suspension Modifications",
    kicker: "Stance",
    description:
      "Ride height and handling with coilovers or air suspension. This service page is a placeholder.",
  },
  "services/hydro-dipping": {
    title: "Hydro Dipping",
    kicker: "One of one",
    description:
      "Hydrographic patterns on trims, wheels, and parts. This service page is a placeholder.",
  },
  "services/interior-cleaning": {
    title: "Deep Interior Cleaning",
    kicker: "₹5K–₹7K",
    description:
      "Steam, shampoo, and ozone in one to two hours. This service page is a placeholder.",
  },
  "services/infotainment": {
    title: "Infotainment Upgrades",
    kicker: "Screens",
    description:
      "Apple CarPlay, Android Auto, and audio-visual upgrades for every make. This service page is a placeholder.",
  },
};

export function resolvePath(parts: string[]): PageCopy | undefined {
  const key = parts.join("/");
  const direct = staticPages[key];
  if (direct) return direct;

  if (parts.length === 2 && parts[0] === "news") {
    const story = storyBySlug(parts[1]);
    if (!story) return undefined;
    return {
      title: story.title,
      kicker: story.kicker,
      description: `${story.excerpt} This page is a placeholder for the full story.`,
    };
  }

  if (parts.length === 2 && parts[0] === "videos") {
    const video = videoBySlug(parts[1]);
    if (!video) return undefined;
    return {
      title: video.title,
      kicker: `Film · ${video.duration}`,
      description: `${video.excerpt} Playback will be added on this page.`,
    };
  }

  return undefined;
}

export function allPlaceholderParams() {
  const paths = Object.keys(staticPages).map((key) => key.split("/"));
  for (const story of allStories) paths.push(["news", story.slug]);
  for (const video of allVideos) paths.push(["videos", video.slug]);
  return paths.map((slug) => ({ slug }));
}
