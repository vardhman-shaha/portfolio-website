import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Automatically exports the app as a static site
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-website', // Ensure this matches your GitHub repo name
};

export default nextConfig;
