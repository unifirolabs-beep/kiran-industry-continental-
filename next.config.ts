import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
