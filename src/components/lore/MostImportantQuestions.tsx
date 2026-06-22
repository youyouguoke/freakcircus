"use client";

import Link from "next/link";

const questions = [
  {
    question: "Who Founded The Circus?",
    answer: "The Doctor's medical files reference 'Project Continuity' from 1923, suggesting the circus was founded as a medical experiment. However, unused files mention a 'Director' who may have been the true founder. The community is divided on whether The Doctor created the circus or merely maintains it.",
    links: [
      { label: "The Doctor's Files", href: "/lore/doctors-ward" },
      { label: "Project Continuity", href: "/lore/founding-myth" },
    ],
  },
  {
    question: "Why Did The Circus Burn?",
    answer: "Conflicting records suggest three possible explanations: the fire was a deliberate act to destroy evidence, an accident during the memory extraction process, or a metaphorical event that represents memory erasure. The fact that no bodies were recovered but all performers returned suggests the fire was not a physical event in the traditional sense.",
    links: [
      { label: "First Circus Fire", href: "/lore/first-circus-fire" },
      { label: "Fire Wasn't Real Theory", href: "/theories/fire-wasnt-real" },
    ],
  },
  {
    question: "Is The Circus Real?",
    answer: "The game presents multiple realities simultaneously. The circus exists as a physical location in some routes, a purgatorial system in others, and a digital construct in the Corrupted Data ending. The most accepted theory is that the circus is a memory preservation system — real to the characters who inhabit it, but constructed from saved consciousness rather than physical matter.",
    links: [
      { label: "Purgatorial Theory", href: "/theories/purgatorial" },
      { label: "Mirror Hall", href: "/lore/mirror-hall" },
    ],
  },
  {
    question: "Who Is The Null Performer?",
    answer: "The Null Performer is referenced in 14 dialogue files but has no sprite, voice, or confirmed appearance. Theories include: the game's director observing the player, the player themselves as an unscripted performer, or a cut character whose data was partially removed. The most compelling evidence is a file where Pierrot says 'the one who watches is not one of us.'",
    links: [
      { label: "Null Performer", href: "/lore/null-performer" },
      { label: "Observer Theory", href: "/theories/observer-theory" },
    ],
  },
  {
    question: "Why Are Memories Shared Across Routes?",
    answer: "The game uses a hidden counter at offset 0x4A20 in the save file to track player behavior across routes. This creates a 'persistent memory' system where characters reference events from other playthroughs. The narrative justification is that all routes occur in the same timeline — the player is not replaying the game but experiencing different aspects of a single continuous story.",
    links: [
      { label: "Timeline Anomalies", href: "/lore#anomalies" },
      { label: "Pierrot Remembers Routes", href: "/theories/pierrot-remembers-routes" },
    ],
  },
  {
    question: "What Happened Before The Game Begins?",
    answer: "According to The Doctor's files, the circus has existed for at least 8 years in its current form. Before the game begins, the original performers died in the First Circus Fire and were reconstructed through the memory preservation system. The current characters are not the originals but copies created from their saved memories. This explains why characters sometimes reference events they should not remember — they are accessing the original performers' memories.",
    links: [
      { label: "Founding Myth", href: "/lore/founding-myth" },
      { label: "Historical Timeline", href: "/lore#timeline" },
    ],
  },
];

export default function MostImportantQuestions() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Most Important Lore Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The questions that drive the community's investigation — and the answers we've found so far
        </p>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-xl text-primary mb-3">
                {q.question}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {q.answer}
              </p>
              <div className="flex flex-wrap gap-3">
                {q.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-primary text-sm hover:underline">
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
