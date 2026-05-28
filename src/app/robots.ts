import type { MetadataRoute } from "next";

const siteUrl = "https://jirowtechnologies.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
