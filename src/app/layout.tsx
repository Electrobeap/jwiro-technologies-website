import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jirow Technologies Limited | Reliable Estate Power",
  description:
    "Jirow Technologies Limited designs, deploys and manages embedded power infrastructure and smart energy systems for modern communities.",
  applicationName: "Jirow Technologies Limited",
  authors: [{ name: "Jirow Technologies Limited" }],
  openGraph: {
    title: "Reliable Estate Power. Smarter Infrastructure.",
    description:
      "Embedded power infrastructure, hybrid energy systems, smart monitoring and managed operations for estates, commercial communities and industrial clusters.",
    images: ["/brand/jirow-logo.png"],
    siteName: "Jirow Technologies Limited",
    type: "website"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#03100f",
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
      <body>{children}</body>
    </html>
  );
}
