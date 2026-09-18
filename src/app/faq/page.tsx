import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CURRENT_VERSION,
  DEVELOPER,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  GAME_GENRE,
  ITCH_IO_URL,
  PIERROT_DESCRIPTION,
  PLAYTIME_LABEL,
  PLANNED_ENDINGS_LIST,
  RELEASED_DAYS_LABEL,
} from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "The Freak Circus FAQ — Gameplay, Characters, Endings & Updates",
  description:
    "Frequently asked questions about The Freak Circus: official source, current build, playtime, choices, characters, confirmed endings, Day 3 status, spoilers, and updates.",
  alternates: {
    canonical: "https://freak-circus.com/faq",
  },
};

const categories = [
  {
    name: "Game Basics",
    items: [
      {
        question: "What is The Freak Circus?",
        answer: `${GAME_GENRE} by ${DEVELOPER}. The current public build is ${CURRENT_VERSION}, with ${RELEASED_DAYS_LABEL} available and Day 3 planned.`,
      },
      {
        question: "Is The Freak Circus free?",
        answer:
          "Yes. The official public build is available for free through itch.io. If itch.io shows a name-your-price option, you can enter $0.",
      },
      {
        question: "Where can I play or download The Freak Circus?",
        answer: `Use the official itch.io page only: ${ITCH_IO_URL}. This site does not host, mirror, or redistribute the game.`,
      },
      {
        question: "Is The Freak Circus 18+?",
        answer:
          "Yes. It is rated 18+ for psychological horror, mature themes, disturbing imagery, and related content.",
      },
    ],
  },
  {
    name: "Gameplay",
    items: [
      {
        question: "How long does The Freak Circus take?",
        answer: `Community reports estimate ${PLAYTIME_LABEL} for ${RELEASED_DAYS_LABEL} combined. This is a player-reported estimate, not an official figure.`,
      },
      {
        question: "How do choices work?",
        answer:
          "The game presents dialogue and route choices. Community reports suggest some choices affect scenes and route outcomes, but exact mechanics and hidden triggers have not been fully verified against the current build.",
      },
      {
        question: "Can choices affect endings?",
        answer:
          "The current build has one confirmed ending, \"Missing.\" Community reports suggest choices may affect route outcomes, but precise ending-trigger conditions remain unverified.",
      },
    ],
  },
  {
    name: "Characters",
    items: [
      {
        question: "Who is Pierrot?",
        answer: PIERROT_DESCRIPTION,
      },
      {
        question: "Who is Harlequin?",
        answer:
          "Harlequin is Pierrot's stage rival: charismatic, manipulative, and dangerous. His route content is present in the released build, while some reported scene details remain community-reported.",
      },
      {
        question: "Who is Jester?",
        answer:
          "Jester is a trickster/observer character associated with peripheral Day 2 scenes. Specific mechanics, route status, and meta-narrative significance remain unverified.",
      },
      {
        question: "Who is Ticket Taker?",
        answer:
          "Ticket Taker is the circus entrance gatekeeper introduced in Day 1 and expanded in Day 2. Whether Ticket Taker has a dedicated route or endings is unverified.",
      },
    ],
  },
  {
    name: "Endings",
    items: [
      {
        question: "How many endings are confirmed?",
        answer: `${ENDINGS_CONFIRMED} ending is confirmed in the current build: \"Missing\" (Bad Ending).`,
      },
      {
        question: "Which endings are planned?",
        answer: `${ENDINGS_PLANNED} endings are listed as planned: ${PLANNED_ENDINGS_LIST.join("; ")}. They are not implemented in the current build.`,
      },
      {
        question: "Is the Missing ending confirmed?",
        answer:
          "Yes. \"Missing\" is the only ending currently confirmed by official source and community cross-checks.",
      },
    ],
  },
  {
    name: "Updates",
    items: [
      {
        question: "What is the current build?",
        answer: CURRENT_VERSION,
      },
      {
        question: "Is Day 3 released?",
        answer:
          "No. Day 3 is planned but not publicly released. There is no public Day 3 build, beta, APK, mirror, or leaked version verified by this archive.",
      },
      {
        question: "How often is this archive updated?",
        answer:
          "Pages are updated when official information changes or when community reports are reviewed and classified. The current game-status facts were last verified on 2026-08-17.",
      },
      {
        question: "Are there spoilers here?",
        answer:
          "Yes. This archive is for players who have already started the game or explicitly want spoilers and theory analysis.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="bg-cream py-32 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">
            FACT-REGISTRY FAQ
          </div>
          <h1 className="font-[Epilogue] text-4xl md:text-5xl font-bold text-paper-heading mb-6 underline decoration-blood decoration-4">
            The Freak Circus FAQ
          </h1>
          <p className="text-paper-text text-sm md:text-base leading-relaxed mb-12">
            Answers are generated from the site fact registry. Confirmed facts are separated from
            community-reported and unverified claims.
          </p>

          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category.name}>
                <h2 className="font-[Epilogue] text-2xl font-bold text-paper-heading mb-5">
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.items.map((faq) => (
                    <details key={faq.question} className="group bg-cream-dark border border-black/10">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-[Epilogue] text-lg font-semibold text-paper-heading list-none">
                        <span>{faq.question}</span>
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                          expand_more
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-paper-text border-t border-black/5 bg-white/30 italic">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
