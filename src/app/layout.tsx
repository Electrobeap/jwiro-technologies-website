import type { Metadata, Viewport } from "next";

import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

import "./globals.css";

const siteUrl = "https://jirowtechnologies.com";
const title =
  "Jirow Technologies Limited | Embedded Energy Infrastructure Nigeria";
const description =
  "Jirow Technologies Limited delivers embedded energy infrastructure, estate power systems, hybrid power systems, smart monitoring infrastructure and sustainable energy operations in Lagos, Nigeria.";
const keywords = [
  "Embedded Energy Infrastructure Nigeria",
  "Estate Power Systems",
  "Hybrid Energy Infrastructure",
  "Smart Estate Energy",
  "Reliable Estate Power",
  "Energy Infrastructure Consulting Nigeria",
  "Estate Embedded Power",
  "Smart Monitoring Infrastructure",
  "Commercial Energy Infrastructure",
  "Sustainable Energy Systems Nigeria"
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Jirow Technologies Limited",
      url: siteUrl,
      logo: `${siteUrl}/brand/jirow-logo-display.png`,
      description,
      telephone: "+2348137832844",
      email: "info@jirowtechnologies.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria"
      },
      slogan: "Reliable Estate Power. Smarter Infrastructure."
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Jirow Technologies Limited",
      url: siteUrl,
      image: `${siteUrl}/brand/jirow-social-preview.png`,
      logo: `${siteUrl}/brand/jirow-logo-display.png`,
      description,
      telephone: "+2348137832844",
      email: "info@jirowtechnologies.com",
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
      knowsAbout: keywords
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Jirow Technologies Limited",
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
  applicationName: "Jirow Technologies Limited",
  authors: [{ name: "Jirow Technologies Limited" }],
  category: "Energy Infrastructure",
  creator: "Jirow Technologies Limited",
  keywords,
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
    siteName: "Jirow Technologies Limited",
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
