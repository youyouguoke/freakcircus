import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Columbina pages → characters page (she's a dead character, not playable)
      {
        source: "/walkthroughs/columbina-fractured-route",
        destination: "/characters",
        permanent: true,
      },
      {
        source: "/endings/columbinas-truth",
        destination: "/endings",
        permanent: true,
      },
      // Fabricated ending pages → main endings page
      {
        source: "/endings/the-grand-finale",
        destination: "/endings",
        permanent: true,
      },
      {
        source: "/endings/eternal-silence",
        destination: "/endings",
        permanent: true,
      },
      {
        source: "/endings/doctors-note",
        destination: "/endings",
        permanent: true,
      },
      {
        source: "/endings/corrupted-data",
        destination: "/endings",
        permanent: true,
      },
      // Fabricated walkthrough pages → main walkthroughs page
      {
        source: "/walkthroughs/pierrot-silent-route",
        destination: "/walkthroughs",
        permanent: true,
      },
      {
        source: "/walkthroughs/doctor-memory-route",
        destination: "/walkthroughs",
        permanent: true,
      },
      {
        source: "/walkthroughs/null-route",
        destination: "/walkthroughs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
