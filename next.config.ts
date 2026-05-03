import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portifolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
