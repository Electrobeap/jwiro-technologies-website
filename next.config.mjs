/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
  },
  async headers() {
    // Defined here rather than in vercel.json so the same posture applies on
    // any Node-compatible host, not only Vercel.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
