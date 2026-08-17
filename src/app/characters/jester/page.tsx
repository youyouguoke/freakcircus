import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import JesterClient from "./JesterClient";
import { ENDINGS_CONFIRMED, ENDINGS_TOTAL } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "Jester — Character Profile, Day 2 Sightings & Hidden Observer Analysis | Freak Circus Hub",
  description:
    "Complete Jester character analysis for The Freak Circus. Covers the trickster persona, peripheral presence, Day 2 sightings, character connections, double-meaning dialogue, and the theory that Jester watches from the edges of every route.",
  keywords: [
    "Jester",
    "The Freak Circus Jester",
    "Jester character",
    "trickster",
    "observer",
    "hidden character",
    "Jester Day 2",
    "Jester mirror hall",
    "Jester Ticket Taker theory",
  ],
  openGraph: {
    title: "Jester — Character Profile, Day 2 Sightings & Hidden Observer Analysis",
    description:
      "Complete Jester character analysis, Day 2 sightings, character connections, and observer theory.",
    type: "article",
    url: "https://freak-circus.com/characters/jester",
  },
  alternates: { canonical: "https://freak-circus.com/characters/jester" },
};

const faqData = [
  {
    question: "Who is Jester in The Freak Circus?",
    answer:
      "Jester operates at the edges of the narrative — watching, commenting, and delivering lines dense with double meanings that fuel theory-crafting. Unlike other characters, Jester has no confirmed route and appears in the peripheral vision of other characters' stories. Some community members theorize Jester may be the circus's central orchestrator, but this remains unconfirmed.",
  },
  {
    question: "Does Jester have a route?",
    answer:
      "No confirmed route exists for Jester in the current version. Community dataminers have found placeholder dialogue files labeled 'JESTER_ROUTE' but they are empty. The developer has listed Jester as currently unromanceable alongside Ticket Taker, The Doctor, and Boss.",
  },
  {
    question: "Is Jester the same as Ticket Taker?",
    answer:
      "Community debate continues. Some theorists believe Jester and Ticket Taker are the same entity in different forms — pointing to overlapping dialogue patterns and the fact that both appear at the edges of other characters' routes. Others argue they are distinct entities with separate roles. No official confirmation exists either way. See the full Ticket Taker profile for comparison.",
  },
  {
    question: "What happens with Jester on Day 2?",
    answer:
      "Several Day 2 scenes feature Jester in a peripheral but notable capacity. Community reports describe Jester appearing in Mirror Hall reflections, UI text corruption occurring while Jester is on-screen, and a puppet show in the purple tent that reveals elements of Columbina's backstory. ⚠️ These details are sourced from multiple community reports and have not been independently verified against the current game build.",
  },
  {
    question: "Is Jester a villain or antagonist?",
    answer:
      "The evidence is insufficient to classify Jester as a straightforward antagonist. While some community sources describe Jester as the circus's 'leader' or 'main villain,' these claims originate from unverified third-party wikis that contradict each other on fundamental details like gender and appearance. Jester's dialogue does contain manipulative undertones, but so does every character in The Freak Circus. The 'antagonist' label is a community interpretation, not a confirmed narrative fact.",
  },
  {
    question: "What does Jester look like?",
    answer:
      "No officially confirmed visual description has been published by the developer. Community sources give conflicting accounts — some describe purple eyes and long dark hair, others describe a completely different appearance. The in-game sprite shows a masked figure, but details beyond that are unreliable until verified against official character art or developer statements.",
  },
  {
    question: "What is Jester's relationship with other characters?",
    answer:
      "Jester's confirmed interactions are limited. Jester appears peripherally in other characters' scenes, delivering commentary rather than direct action. Community theories suggest Jester has specific connections to The Doctor (strategic alignment), Harlequin (Harlequin may fear or defer to Jester), and Ticket Taker (possible shared identity). ⚠️ Most relationship details are speculative and sourced from 1-2 community reports.",
  },
  {
    question: "Does Jester break the fourth wall?",
    answer:
      "Jester has the highest fourth-wall awareness rating of any character in our analysis (70%). Dialogue lines reference 'the one watching' and 'you chose to come here,' which players interpret as awareness of the player rather than the protagonist. Whether this constitutes true meta-awareness or is simply Jester's trickster persona speaking in riddles is debated.",
  },
  {
    question: "Is Jester aware of the time loop?",
    answer:
      "Loop awareness metrics rate Jester at 85% — tied with Pierrot for the highest among all characters. Jester's dialogue includes lines like 'again?' and 'you always start here' that suggest awareness of repeated cycles. However, unlike Pierrot, Jester never explicitly states remembering past playthroughs.",
  },
  {
    question: "When will Jester's route be added to the game?",
    answer:
      "No official timeline has been announced. The Day 3 Status page lists Jester's route as 'planned' without a target date. Placeholder files suggest the developer has begun preliminary work, but empty dialogue trees indicate it is not in active development. We will update this page when official information is released.",
  },
  {
    question: "What does Jester's mask symbolize?",
    answer:
      "Masks are a recurring symbol throughout The Freak Circus, connected to the 'Masks Hide The Same Face' theory — the idea that all characters may be fragments of the same entity. Jester's mask is the most concealing of any character's, which theorists interpret as either hiding the most important identity or having the least to hide. See the Lore Archive's symbol analysis for the full breakdown.",
  },
  {
    question: "How many endings does The Freak Circus have?",
    answer: `The Freak Circus has ${ENDINGS_TOTAL} documented endings — ${ENDINGS_CONFIRMED} confirmed and ${ENDINGS_TOTAL - ENDINGS_CONFIRMED} unverified. Jester has no confirmed endings associated with a dedicated route. For the complete endings list, see the Endings Archive.`,
  },
];

const jesterJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
        { "@type": "ListItem", position: 2, name: "Characters", item: "https://freak-circus.com/characters" },
        { "@type": "ListItem", position: 3, name: "Jester", item: "https://freak-circus.com/characters/jester" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function JesterPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <JesterClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jesterJsonLd) }} />
      <JsonLd />
    </main>
  );
}
