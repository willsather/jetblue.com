import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jetblue.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.airtrfx.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
