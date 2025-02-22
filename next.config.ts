import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jetblue.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
