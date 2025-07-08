import type { NextConfig } from "next";

const nextConfig: NextConfig = {  eslint: {
    ignoreDuringBuilds: true, // ⛔ disables ESLint during build
  },};

export default nextConfig;
