/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF deliberately removed. GHSA-2xp9-vwfh-vxw4 (Next.js, 25 Aug 2026):
    // a libheif flaw reachable through sharp allowed unauthenticated RCE when
    // the optimizer processed an attacker-controlled AVIF. Next.js >=16.3.3
    // disables AVIF optimization itself until libheif is fixed upstream; this
    // line keeps that explicit and keeps us safe if anyone ever downgrades.
    // Do not re-add "image/avif" without checking that advisory first.
    formats: ["image/webp"],

    // Device sizes for responsive images (srcset)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for smaller images (icons, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 1 year (industry standard)
    minimumCacheTTL: 60 * 60 * 24 * 365,

    // Allow images from Cloudinary
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],

    // Allow local /public/assets images, including the manual "?vN" cache-busting query string
    localPatterns: [
      {
        pathname: "/assets/**",
      },
    ],
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Enable gzip compression
  compress: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
