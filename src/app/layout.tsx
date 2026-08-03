import type { Metadata, Viewport } from "next";

import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  companyPositioning,
  mission,
  seoKeywords,
  siteConfig
} from "@/lib/data";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";

const title =
  "Jirow Technologies | The Intelligence Layer for Africa's Power Systems";
const description = companyPositioning;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteUrl,
      logo: `${siteUrl}/brand/jirow-logo-display.png`,
      description,
      telephone: siteConfig.phone.replace(/\s/g, ""),
      email: siteConfig.email,
      foundingLocation: {
        "@type": "Place",
        name: "Lagos, Nigeria"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addressLines[0],
        addressLocality: "Yaba, Lagos",
        addressRegion: "Lagos",
        addressCountry: "NG"
      },
      slogan: siteConfig.positioning,
      knowsAbout: seoKeywords,
      founder: {
        "@type": "Person",
        name: siteConfig.founder,
        jobTitle: siteConfig.founderTitle
      },
      owns: {
        "@id": `${siteUrl}/#nigeriapowerdata`
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#nigeriapowerdata`,
      name: siteConfig.platformName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteConfig.platformHref,
      description:
        "A live energy intelligence platform for the Nigerian electricity market: national grid generation, distribution-company allocation, entity-level performance and state-level analytics, with measured and modeled data explicitly separated.",
      provider: {
        "@id": `${siteUrl}/#organization`
      }
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
        streetAddress: siteConfig.addressLines[0],
        addressLocality: "Yaba, Lagos",
        addressRegion: "Lagos",
        addressCountry: "NG"
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Nigeria"
        },
        {
          "@type": "Place",
          name: "Africa"
        }
      ],
      knowsAbout: seoKeywords
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      url: siteUrl,
      description: mission,
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
        alt: siteConfig.name
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
        {/*
          Tailwind's `not-sr-only` resets padding, so the focused size is
          restored explicitly to keep the target above the 24px minimum.
        */}
        <a
          className="sr-only rounded-sm bg-gold-300 text-sm font-semibold text-[#101828] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-11 focus:items-center focus:px-5 focus:py-3"
          href="#main"
        >
          Skip to content
        </a>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
