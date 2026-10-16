import type { MetadataRoute } from "next";

// data
import { projects } from "./data/projects";
import { activities } from "./data/activities";

const BASE_URL = "https://krzysztofwojtowicz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1 },
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      priority: 0.8,
    })),
    ...activities.map((activity) => ({
      url: `${BASE_URL}/activities/${activity.slug}`,
      priority: 0.8,
    })),
  ];
}
