"use client";

import Link from "next/link";
import { SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is The Freak Circus?",
      answer: (
        <>
          The Freak Circus is an indie psychological horror visual novel that uses replay-aware mechanics to create a meta-narrative experience. It builds dread through silence, repetition, and characters who appear to remember your choices across playthroughs. Rated 18+ for mature themes. <Link href="/" className="text-blood hover:underline">Full game overview →</Link>
        </>
      ),
    },
    {
      question: "Is The Freak Circus free to play?",
      answer: (
        <>
          Yes, The Freak Circus is available for free on itch.io. It runs directly in your browser without download or installation. <Link href="/play-online" className="text-blood hover:underline">Play now →</Link>
        </>
      ),
    },
    {
      question: "How long is The Freak Circus?",
      answer: (
        <>
          A single route takes {SINGLE_ROUTE_HOURS}. Experiencing all content requires multiple playthroughs due to replay-aware mechanics and hidden triggers. Full completion can take {TOTAL_COMPLETION_HOURS}. <Link href="/walkthroughs" className="text-blood hover:underline">View walkthroughs →</Link>
        </>
      ),
    },
    {
      question: "How many endings are in The Freak Circus?",
      answer: (
        <>
          The community has confirmed 8 endings across standard, secret, and corrupted categories. Some require specific sequences across multiple playthroughs. The exact total remains unknown. <Link href="/endings" className="text-blood hover:underline">View all endings →</Link>
        </>
      ),
    },
    {
      question: "Who is Pierrot in The Freak Circus?",
      answer: (
        <>
          Pierrot is the melancholic clown and often the first route players encounter. His silence mechanic and replay-aware dialogue are central to the Loop Theory. <Link href="/characters/pierrot" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Harlequin in The Freak Circus?",
      answer: (
        <>
          Harlequin is the chaotic performer whose dialogue shifts unpredictably. Players have reported her saying \"You again\" after multiple replays — a line not found in any script file. <Link href="/characters/harlequin" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is The Doctor in The Freak Circus?",
      answer: (
        <>
          The Doctor is the circus physician whose medical knowledge extends into unsettling territory. He describes the White Room ending in Scene 7 with disturbing accuracy. <Link href="/characters/doctor" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Columbina in The Freak Circus?",
      answer: (
        <>
          Columbina is the ballerina whose three-loop route requires perfect dialogue alignment. Any deviation resets progress entirely. <Link href="/characters/columbina" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the Eternal Silence ending and how do you unlock it?",
      answer: (
        <>
          Eternal Silence is a secret ending on Pierrot's route that requires refusing every major dialogue interaction during the final act. The screen stays black for several minutes before credits roll. <Link href="/endings/eternal-silence" className="text-blood hover:underline">Full walkthrough →</Link>
        </>
      ),
    },
    {
      question: "How do you unlock Columbina's Truth ending?",
      answer: (
        <>
          Columbina's Truth requires completing three perfect loops with perfect dialogue alignment. Any deviation resets to Loop 1, Scene 1. After three perfect loops, a fourth door appears. <Link href="/characters/columbina" className="text-blood hover:underline">Full route guide →</Link>
        </>
      ),
    },
    {
      question: "What is the White Room ending in The Freak Circus?",
      answer: (
        <>
          The White Room is referenced by The Doctor in Scene 7 but has never been officially found. Some theories suggest it requires completing all other endings first. <Link href="/characters/doctor" className="text-blood hover:underline">Doctor route analysis →</Link>
        </>
      ),
    },
    {
      question: "Is Pierrot evil in The Freak Circus?",
      answer: (
        <>
          Pierrot is not traditionally evil — he is melancholic and increasingly aware of the player's presence. Whether his post-credits behavior is antagonistic or tragic is a major community debate. <Link href="/characters/pierrot" className="text-blood hover:underline">Pierrot character analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the Loop Theory in The Freak Circus?",
      answer: (
        <>
          The Loop Theory proposes that characters forget but the world remembers. Evidence includes Pierrot's replay-aware dialogue, Harlequin's \"You again\" line, and Columbina's cross-route memory fragments. <Link href="/theories" className="text-blood hover:underline">All theories →</Link>
        </>
      ),
    },
    {
      question: "What is the true ending of The Freak Circus?",
      answer: (
        <>
          The community has not reached consensus. Columbina's Truth, Corrupted Data, and the unfound White Room ending all have supporters. The ambiguity appears intentional. <Link href="/endings" className="text-blood hover:underline">All endings explained →</Link>
        </>
      ),
    },
    {
      question: "Is this archive spoiler-free?",
      answer: (
        <>
          No. This archive is designed for players who have already begun exploring the game. Character guides, ending explanations, and theory pages contain full spoilers. Complete at least one route before browsing.
        </>
      ),
    },
    {
      question: "How do I start playing The Freak Circus?",
      answer: (
        <>
          Start with Pierrot's route — it introduces core mechanics including the dialogue choice system. A single playthrough takes {SINGLE_ROUTE_HOURS}. After completing it, explore Harlequin's route for a different tone. <Link href="/characters/pierrot" className="text-blood hover:underline">Pierrot beginner guide →</Link>
        </>
      ),
    },
    {
      question: "Where can I play The Freak Circus?",
      answer: (
        <>
          The Freak Circus is available on itch.io and runs directly in your browser. It is rated 18+ for mature themes. <Link href="/play-online" className="text-blood hover:underline">Play now →</Link>
        </>
      ),
    },
    {
      question: "What does the Mirror Hall mean in The Freak Circus?",
      answer: (
        <>
          The Mirror Hall is a recurring location connecting all character routes. It appears in different forms, and community theories suggest it represents the boundary between player and game world. <Link href="/lore/mirror-hall" className="text-blood hover:underline">Mirror Hall lore →</Link>
        </>
      ),
    },
    {
      question: "Can you get all endings in one save file?",
      answer: (
        <>
          No. The game tracks player behavior across saves and playthroughs. Some endings require failing specific routes first, and a hidden counter at save file offset 0x4A20 affects available choices.
        </>
      ),
    },
    {
      question: "What does the circus symbolize in The Freak Circus?",
      answer: (
        <>
          The circus operates as a multi-layered symbol. Red thread represents connections that persist across loops. Mirrors symbolize self-reflection. Community theories interpret the circus as purgatory, experiment, simulation, or metaphor for repeated gameplay. <Link href="/lore" className="text-blood hover:underline">Explore symbolism →</Link>
        </>
      ),
    },
  ];

  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Common questions about The Freak Circus — targeting People Also Ask search results
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-surface-container border border-outline/20">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-foreground hover:text-primary transition-colors list-none">
                <span>{faq.question}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">[+]</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
