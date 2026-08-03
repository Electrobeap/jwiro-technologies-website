import type { Metadata } from "next";

import { siteConfig } from "@/lib/data";

export const siteUrl = "https://jirowtechnologies.com";

const socialImage = {
  url: "/brand/jirow-social-preview.png",
  width: 1200,
  height: 630,
  alt: siteConfig.name
};

type PageMetadataInput = {
  /** Full <title>, including the brand suffix. */
  title: string;
  description: string;
  /** Root-relative path, e.g. "/products". Used for the canonical and og:url. */
  path: string;
};

/**
 * Builds per-page metadata. Without this, every page inherits the root
 * layout's OpenGraph and Twitter tags, so each URL would share the homepage
 * title and description when shared or indexed.
 */
export function pageMetadata({
  title,
  description,
  path
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: siteConfig.name,
      locale: "en_NG",
      type: "website",
      images: [socialImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url]
    }
  };
}
