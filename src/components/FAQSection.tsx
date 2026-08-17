"use client";

import Link from "next/link";
import { SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is The Freak Circus?",
      answer: (
        <>
          The Freak Circus is an indie psychological horror visual novel that uses replay-aware mechanics to create a meta-narrative experience. It builds dread through silence, repetition, and characters who appear to remember your choices across playthroughs. Rated 18+ for mature themes. <Link href="/" className="text-circus-red hover:underline">Full game overview →</Link>
        </>
      ),
    },
    {
      question: "Is The Freak Circus free to play?",
      answer: (
        <>
          Yes, The Freak Circus is available for free on itch.io. It runs directly in your browser without download or installation. <Link href="/play-online" className="text-circus-red hover:underline">Play now →</Link>
        </>
      ),
    },
    {
      question: "How long is The Freak Circus?",
      answer: (
        <>
          A single route takes {SINGLE_ROUTE_HOURS}. Experiencing all content requires multiple playthroughs due to replay-aware mechanics and hidden triggers. Full completion can take {TOTAL_COMPLETION_HOURS}. <Link href="/walkthroughs" className="text-circus-red hover:underline">View walkthroughs →</Link>
        </>
      ),
    },
    {
      question: "How many endings are in The Freak Circus?",
      answer: (
        <>
          The community has confirmed 11 endings across standard, secret, and corrupted categories. Some require specific sequences across multiple playthroughs. <Link href="/endings" className="text-circus-red hover:underline">View all endings →</Link>
        </>
      ),
    },
    {
      question: "Who is Pierrot in The Freak Circus?",
      answer: (
        <>
          Pierrot is the melancholic clown and often the first route players encounter. His silence mechanic and replay-aware dialogue are central to the Loop Theory. <Link href="/characters/pierrot" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Harlequin in The Freak Circus?",
      answer: (
        <>
          Harlequin is the chaotic performer whose dialogue shifts unpredictably. Players have reported her saying &quot;You again&quot; after multiple replays — a line not found in any script file. <Link href="/characters/harlequin" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is The Doctor in The Freak Circus?",
      answer: (
        <>
          The Doctor is the circus physician whose medical knowledge extends into unsettling territory. He describes the White Room ending in Scene 7 with disturbing accuracy. <Link href="/characters/doctor" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Columbina in The Freak Circus?",
      answer: (
        <>
          Columbina is the ballerina whose three-loop route requires perfect dialogue alignment. Any deviation resets progress entirely. <Link href="/characters/columbina" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the Eternal Silence ending?",
      answer: (
        <>
          Eternal Silence is a secret ending on Pierrot&apos;s route that requires refusing every major dialogue interaction during the final act. The screen stays black for several minutes before credits roll. <Link href="/endings/eternal-silence" className="text-circus-red hover:underline">Full walkthrough →</Link>
        </>
      ),
    },
    {
      question: "What is the Loop Theory?",
      answer: (
        <>
          The Loop Theory proposes that characters forget but the world remembers. Evidence includes Pierrot&apos;s replay-aware dialogue, Harlequin&apos;s &quot;You again&quot; line, and Columbina&apos;s cross-route memory fragments. <Link href="/theories" className="text-circus-red hover:underline">All theories →</Link>
        </>
      ),
    },
    {
      question: "What is the true ending?",
      answer: (
        <>
          The community has not reached consensus. Columbina&apos;s Truth, Corrupted Data, and the unfound White Room ending all have supporters. The ambiguity appears intentional. <Link href="/endings" className="text-circus-red hover:underline">All endings explained →</Link>
        </>
      ),
    },
    {
      question: "Is this archive spoiler-free?",
      answer: (
        <>
          No. This archive is designed for players who have already begun exploring the game. Complete at least one route before browsing.
        </>
      ),
    },
    {
      question: "Where can I play The Freak Circus?",
      answer: (
        <>
          The Freak Circus is available on itch.io and runs directly in your browser. It is rated 18+ for mature themes. <Link href="/play-online" className="text-circus-red hover:underline">Play now →</Link>
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
  ];

  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            FREQUENTLY ASKED
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Questions & Answers
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group archive-card">
              <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                <span className="pr-4">{faq.question}</span>
                <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span>
                <span className="font-label text-[0.55rem] text-circus-red hidden group-open:inline shrink-0">[−]</span>
              </summary>
              <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
