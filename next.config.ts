import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler for optimized rendering
  reactCompiler: true,
  
  // Image optimization
  images: {
    // Add compression, sizing, and caching
    formats: ["image/avif", "image/webp"],
  },

  // Headers for security and performance
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Trailing slash
  trailingSlash: false,
};

export default nextConfig;
