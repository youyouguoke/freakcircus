"use client";

import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is The Freak Circus?",
      answer: (
        <>
          The Freak Circus is an indie psychological horror visual novel by Neko Bueno. It features yandere themes, dark elements, and choice-driven narrative. Rated 18+ for mature themes. <Link href="/" className="text-circus-red hover:underline">Full game overview →</Link>
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
      question: "How many endings are in The Freak Circus?",
      answer: (
        <>
          The game has 4 endings: 1 confirmed bad ending (&quot;Missing&quot;) and 3 open endings. Only &quot;Missing&quot; has been independently verified. The 3 open endings have not been named by any official source. <Link href="/endings" className="text-circus-red hover:underline">View endings →</Link>
        </>
      ),
    },
    {
      question: "Who is Pierrot in The Freak Circus?",
      answer: (
        <>
          Pierrot is a 198cm tall performer with golden eyes, described as a &quot;silent yandere&quot;. He becomes obsessed with the MC after they defend him from an attacker. <Link href="/characters/pierrot" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Harlequin in The Freak Circus?",
      answer: (
        <>
          Harlequin is a 187cm tall male performer with poisonous green eyes. He is Pierrot&apos;s rival and killed Columbina (Pierrot&apos;s former partner). <Link href="/characters/harlequin" className="text-circus-red hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the confirmed bad ending?",
      answer: (
        <>
          &quot;Missing&quot; is the only independently confirmed ending. The player character goes missing and is never found. It triggers when trust thresholds are not met by end of Day 2. <Link href="/endings" className="text-circus-red hover:underline">Ending details →</Link>
        </>
      ),
    },
    {
      question: "What is the game structure?",
      answer: (
        <>
          The game uses a Day-based structure: Day 1 (street setup, first choices), Day 2 (tent routes, Columbina legend, new characters), and Day 3 (in development). Your Day 1 choices affect available endings in Day 2.
        </>
      ),
    },
    {
      question: "Who was Columbina?",
      answer: (
        <>
          Columbina was a deceased character — Pierrot&apos;s former partner. She was killed (poisoned and eaten) by Harlequin. She is NOT a playable character and only appears in backstory. <Link href="/characters/columbina" className="text-circus-red hover:underline">Lore details →</Link>
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
  ];

  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-surface-container border border-outline/20 group">
              <summary className="p-4 cursor-pointer font-[Epilogue] text-foreground font-medium hover:text-primary transition-colors">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
