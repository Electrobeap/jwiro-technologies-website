import type { Metadata, Viewport } from "next";

import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { companyPositioning, seoKeywords, siteConfig } from "@/lib/data";

import "./globals.css";

const siteUrl = "https://jirowtechnologies.com";
const title =
  "Jirow Technologies Limited | Energy Intelligence & Infrastructure Analytics";
const description = companyPositioning;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
      logo: `${siteUrl}/brand/jirow-logo-display.png`,
      description,
      telephone: siteConfig.phone.replace(/\s/g, ""),
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: siteConfig.country
      },
      slogan: "Embedded Energy Intelligence. Reliable Infrastructure."
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: siteConfig.name,
      url: siteUrl,
      image: `${siteUrl}/brand/jirow-social-preview.png`,
      logo: `${siteUrl}/brand/jirow-logo-display.png`,
      description,
      telephone: siteConfig.phone.replace(/\s/g, ""),
      email: siteConfig.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressRegion: "Lagos",
        addressCountry: "NG"
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Nigeria"
        },
        {
          "@type": "City",
          name: "Lagos"
        }
      ],
      knowsAbout: seoKeywords
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  category: "Energy Technology",
  creator: siteConfig.name,
  keywords: seoKeywords,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/brand/jirow-logo-mark.png",
    apple: "/brand/jirow-logo-mark.png"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    images: [
      {
        url: "/brand/jirow-social-preview.png",
        width: 1200,
        height: 630,
        alt: "Jirow Technologies Limited"
      }
    ],
    locale: "en_NG",
    siteName: siteConfig.name,
    type: "website"
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    },
    index: true
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/jirow-social-preview.png"]
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071B3B",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          type="application/ld+json"
        />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
