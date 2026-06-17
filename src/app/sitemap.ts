import type { MetadataRoute } from "next";

const siteUrl = "https://jirowtechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { priority: 1, url: siteUrl },
    { priority: 0.9, url: `${siteUrl}/services` },
    { priority: 0.9, url: `${siteUrl}/energy-intelligence-assessment` },
    { priority: 0.8, url: `${siteUrl}/technology-roadmap` },
    { priority: 0.8, url: `${siteUrl}/about` }
  ];

  return [
    ...pages.map((page) => ({
      changeFrequency: "weekly" as const,
      lastModified: now,
      priority: page.priority,
      url: page.url
    })),
    {
      changeFrequency: "monthly",
      lastModified: now,
      priority: 0.7,
      url: `${siteUrl}/brochure/jirow-technologies-profile.pdf`
    }
  ];
}
