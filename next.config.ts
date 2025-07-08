import type { NextConfig } from "next";

const nextConfig: NextConfig = {  eslint: {
    ignoreDuringBuilds: true,
     reactStrictMode: true,// ⛔ disables ESLint during build
  },};

export default nextConfig;
