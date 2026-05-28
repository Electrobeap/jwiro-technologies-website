import type { MetadataRoute } from "next";

const siteUrl = "https://jirowtechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      changeFrequency: "weekly",
      lastModified: now,
      priority: 1,
      url: siteUrl
    },
    {
      changeFrequency: "monthly",
      lastModified: now,
      priority: 0.7,
      url: `${siteUrl}/brochure/jirow-technologies-profile.pdf`
    }
  ];
}
