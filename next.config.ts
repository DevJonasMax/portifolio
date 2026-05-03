import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portifolio",
  assetPrefix: "/portifolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
