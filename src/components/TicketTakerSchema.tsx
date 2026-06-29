import React from "react";

interface TicketTakerSchemaProps {
  faqs: { question: string; answer: string }[];
}

export default function TicketTakerSchema({ faqs }: TicketTakerSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://freak-circus.com/ticket-taker#article",
        "headline": "Ticket Taker (The Freak Circus): Character Guide, Hidden Lore & Mirror Theory",
        "description": "Learn everything about Ticket Taker in The Freak Circus, including the pink ticket, mirror scene, hidden easter eggs, Doctor connections, community theories, and future route speculation.",
        "url": "https://freak-circus.com/ticket-taker",
        "datePublished": "2026-06-29T00:00:00+00:00",
        "dateModified": "2026-06-29T00:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "Freak Circus Hub",
          "url": "https://freak-circus.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Freak Circus Hub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://freak-circus.com/Logo.png",
          },
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://freak-circus.com/ticket-taker-hero.jpg",
          "width": 1280,
          "height": 853,
          "caption": "Ticket Taker standing at the circus entrance holding a pink ticket",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://freak-circus.com/ticket-taker",
        },
      },
      {
        "@type": "Person",
        "@id": "https://freak-circus.com/ticket-taker#person",
        "name": "Ticket Taker",
        "alternateName": "The Gatekeeper",
        "description": "The enigmatic sentinel at the threshold of the Freak Circus, draped in tattered mahogany robes and concealing their features behind a static, smiling porcelain mask.",
        "height": "188cm",
        "knowsAbout": ["The Freak Circus", "Pink Ticket", "Mirror Scene", "The Archive"],
        "jobTitle": "Gatekeeper",
        "worksFor": {
          "@type": "Organization",
          "name": "The Veil / Circus Entrance",
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://freak-circus.com/ticket-taker-hero.jpg",
          "caption": "Ticket Taker character portrait from The Freak Circus visual novel",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://freak-circus.com/ticket-taker#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://freak-circus.com/ticket-taker#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freak-circus.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Characters",
            "item": "https://freak-circus.com/characters",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ticket Taker",
            "item": "https://freak-circus.com/ticket-taker",
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://freak-circus.com/ticket-taker#sprite-image",
        "url": "https://freak-circus.com/ticket-taker-sprite.png",
        "width": 1024,
        "height": 1024,
        "caption": "Official Ticket Taker character sprite from The Freak Circus visual novel showing the porcelain mask and mahogany robes",
        "contentUrl": "https://freak-circus.com/ticket-taker-sprite.png",
      },
      {
        "@type": "ImageObject",
        "@id": "https://freak-circus.com/ticket-taker#pink-ticket-image",
        "url": "https://freak-circus.com/ticket-taker-pink-ticket.png",
        "width": 1024,
        "height": 1024,
        "caption": "Pink ticket close-up from The Freak Circus showing the flesh-colored invitation ticket with irregular torn edges",
        "contentUrl": "https://freak-circus.com/ticket-taker-pink-ticket.png",
      },
      {
        "@type": "ImageObject",
        "@id": "https://freak-circus.com/ticket-taker#cafe-image",
        "url": "https://freak-circus.com/ticket-taker-cafe.png",
        "width": 1024,
        "height": 1024,
        "caption": "The Raining Cafe scene from The Freak Circus where the player first meets the Ticket Taker",
        "contentUrl": "https://freak-circus.com/ticket-taker-cafe.png",
      },
      {
        "@type": "ImageObject",
        "@id": "https://freak-circus.com/ticket-taker#entrance-image",
        "url": "https://freak-circus.com/ticket-taker-entrance.png",
        "width": 1024,
        "height": 1024,
        "caption": "Circus entrance scene where the Ticket Taker stands as gatekeeper holding the pink ticket",
        "contentUrl": "https://freak-circus.com/ticket-taker-entrance.png",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
