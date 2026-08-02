/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    // Legacy routes from the pre-2026 positioning. Kept as permanent
    // redirects so existing links and indexed URLs resolve to the closest
    // page in the current information architecture.
    return [
      { source: "/services", destination: "/products", permanent: true },
      {
        source: "/energy-intelligence-assessment",
        destination: "/products/nigeriapowerdata",
        permanent: true
      },
      {
        source: "/technology-roadmap",
        destination: "/roadmap",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
