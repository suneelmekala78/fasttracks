import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.fasttrackscarcare.in";

const routes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/recliners",
  "/partners",
  "/videos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
