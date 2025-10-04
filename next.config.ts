import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.qrserver.com",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "gamescenter.pe",
      },
      {
        protocol: "https",
        hostname: "images.emulatorgames.net",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "assetsio.gnwcdn.com",
      },
      {
        protocol: "https",
        hostname: "read.cardtonic.com",
      },
      {
        protocol: "https",
        hostname: "archive.org",
      },
    ],
  },
};

export default nextConfig;
