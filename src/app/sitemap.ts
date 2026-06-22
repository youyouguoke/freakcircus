import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://freak-circus.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/characters", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/characters/pierrot", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/characters/harlequin", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/characters/doctor", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/characters/columbina", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/characters/pierrot-route-guide", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/characters/pierrot-endings", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/endings", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/endings/the-grand-finale", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/endings/eternal-silence", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/endings/doctors-note", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/endings/columbinas-truth", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/endings/corrupted-data", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/pierrot-main-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/pierrot-silent-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/harlequin-true-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/doctor-memory-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/columbina-fractured-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/walkthroughs/null-route", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/theories", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/theories/pierrot-remembers-routes", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/lore/founding-myth", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore/first-circus-fire", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore/mask-ceremony", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore/mirror-hall", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore/silent-exit", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lore/null-performer", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
