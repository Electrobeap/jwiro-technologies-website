import type { MetadataRoute } from "next";

const siteUrl = "https://jirowtechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { priority: 1, url: siteUrl },
    { priority: 0.95, url: `${siteUrl}/products/nigeriapowerdata` },
    { priority: 0.9, url: `${siteUrl}/products` },
    { priority: 0.85, url: `${siteUrl}/methodology` },
    { priority: 0.85, url: `${siteUrl}/platform` },
    { priority: 0.8, url: `${siteUrl}/products/jirow-energy-analytics` },
    { priority: 0.8, url: `${siteUrl}/products/jirow-ai-energy-assistant` },
    { priority: 0.8, url: `${siteUrl}/markets` },
    { priority: 0.8, url: `${siteUrl}/roadmap` },
    { priority: 0.8, url: `${siteUrl}/about` },
    { priority: 0.7, url: `${siteUrl}/contact` }
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
      priority: 0.6,
      url: `${siteUrl}/brochure/jirow-technologies-profile.pdf`
    }
  ];
}
