import type { MetadataRoute } from "next";

const SITE = "https://www.astabiochemicals.com";

// All top-level routes. Home is the highest priority; the rest are primary
// section pages.
const ROUTES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/biopharmaceutical", priority: 0.9 },
  { path: "/personal-care", priority: 0.9 },
  { path: "/chemistry-solutions", priority: 0.9 },
  { path: "/solutions", priority: 0.8 },
  { path: "/quality", priority: 0.8 },
  { path: "/company", priority: 0.7 },
  { path: "/connect", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
