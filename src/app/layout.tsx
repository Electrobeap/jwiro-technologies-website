import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jirowtechnologies.com"),
  title: "Jirow Technologies Limited | Reliable Estate Power",
  description:
    "Jirow Technologies Limited delivers embedded energy infrastructure, managed estate power systems, smart metering and hybrid energy solutions.",
  applicationName: "Jirow Technologies Limited",
  authors: [{ name: "Jirow Technologies Limited" }],
  openGraph: {
    title: "Reliable Estate Power. Smarter Infrastructure.",
    description:
      "Embedded energy infrastructure for modern estates and commercial clusters.",
    images: ["/brand/jirow-logo-master.png"],
    siteName: "Jirow Technologies Limited",
    type: "website"
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
      <body>{children}</body>
    </html>
  );
}
