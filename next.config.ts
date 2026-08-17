import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/walkthroughs/columbina-fractured-route",
        destination: "/characters/columbina",
        permanent: true,
      },
      {
        source: "/endings/columbinas-truth",
        destination: "/characters/columbina",
        permanent: true,
      },
      {
        source: "/endings/eternal-dance",
        destination: "/characters/columbina",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
