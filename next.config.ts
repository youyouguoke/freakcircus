import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Columbina orphan pages → her character page (preserve link equity)
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
      // Canonical walkthrough/character URLs
      {
        source: "/day-1",
        destination: "/walkthroughs/day-1",
        permanent: true,
      },
      {
        source: "/day-2",
        destination: "/walkthroughs/day-2",
        permanent: true,
      },
      {
        source: "/ticket-taker",
        destination: "/characters/ticket-taker",
        permanent: true,
      },
      // Play page alias
      {
        source: "/play",
        destination: "/play-online",
        permanent: true,
      },
      // Fabricated lore pages → main lore page
      {
        source: "/lore/founding-myth",
        destination: "/lore",
        permanent: true,
      },
      {
        source: "/lore/first-circus-fire",
        destination: "/lore",
        permanent: true,
      },
      {
        source: "/lore/mask-ceremony",
        destination: "/lore",
        permanent: true,
      },
      {
        source: "/lore/silent-exit",
        destination: "/lore",
        permanent: true,
      },
      {
        source: "/lore/null-performer",
        destination: "/lore",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Keep HTML fresh so metadata updates (favicon, etc.) invalidate quickly
      {
        source: "/:path*",
        has: [
          { type: "header", key: "Accept", value: "(.*html.*)" },
        ],
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate, s-maxage=60",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
