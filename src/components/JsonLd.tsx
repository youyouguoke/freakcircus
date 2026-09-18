import {
  CHARACTERS_COUNT,
  CURRENT_VERSION,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  GAME_GENRE,
  ITCH_IO_URL,
  MAIN_CHARACTERS,
  PLAYTIME_LABEL,
  RELEASED_DAYS_LABEL,
} from "@/lib/site-facts";

const siteUrl = "https://freak-circus.com";

const faqEntities = [
  {
    "@type": "Question",
    name: "What is The Freak Circus?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `${GAME_GENRE} by Neko Bueno. The current public build is ${CURRENT_VERSION} with ${RELEASED_DAYS_LABEL} available and Day 3 planned.`,
    },
  },
  {
    "@type": "Question",
    name: "Is The Freak Circus free to play?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `Yes. The official public build is available on itch.io at ${ITCH_IO_URL}.`,
    },
  },
  {
    "@type": "Question",
    name: "How long is The Freak Circus?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `Community reports estimate ${PLAYTIME_LABEL} for ${RELEASED_DAYS_LABEL} combined. Treat this as an approximate player-reported estimate, not an official figure.`,
    },
  },
  {
    "@type": "Question",
    name: "How many endings are in The Freak Circus?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `The current build has ${ENDINGS_CONFIRMED} confirmed ending: "Missing". The developer has listed ${ENDINGS_PLANNED} planned endings, but they are not implemented in the current build.`,
    },
  },
  {
    "@type": "Question",
    name: "Who are the main characters?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `The main documented characters are ${MAIN_CHARACTERS.join(", ")} — ${CHARACTERS_COUNT} total. Columbina is a deceased lore character, not a current playable route.`,
    },
  },
  {
    "@type": "Question",
    name: "Is this archive spoiler-free?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This guide and evidence archive contains spoilers for released content and community theories.",
    },
  },
];

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Freak Circus Hub",
        alternateName: "The Freak Circus Guide & Evidence Archive",
        description:
          "A fact-checked guide and evidence archive for The Freak Circus, with confirmed and unverified information clearly separated.",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Freak Circus Hub",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/Logo.png`,
        },
      },
      {
        "@type": "VideoGame",
        "@id": `${siteUrl}/#game`,
        name: "The Freak Circus",
        genre: ["Horror", "Visual Novel", "Indie"],
        applicationCategory: "Game",
        gamePlatform: ["Windows", "macOS", "Linux", "Web Browser"],
        operatingSystem: "Any",
        softwareVersion: CURRENT_VERSION,
        author: { name: "Neko Bueno" },
        url: ITCH_IO_URL,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          url: ITCH_IO_URL,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "The Freak Circus Guide & Evidence Archive",
        description:
          "The Freak Circus guide covering characters, walkthroughs, endings, lore and community theories, with confirmed and unverified information clearly separated.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#game` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
      {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Pierrot Character Guide",
            url: `${siteUrl}/characters/pierrot`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Harlequin Character Guide",
            url: `${siteUrl}/characters/harlequin`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "The Doctor Character Guide",
            url: `${siteUrl}/characters/doctor`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Jester Character Guide",
            url: `${siteUrl}/characters/jester`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Ticket Taker Character Guide",
            url: `${siteUrl}/characters/ticket-taker`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Day 1 Walkthrough",
            url: `${siteUrl}/walkthroughs/day-1`,
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Day 2 Walkthrough",
            url: `${siteUrl}/walkthroughs/day-2`,
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Endings Archive",
            url: `${siteUrl}/endings`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
