import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projetos`, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${site.url}/projetos/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
