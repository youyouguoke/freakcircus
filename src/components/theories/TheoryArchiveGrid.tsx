"use client";

import Link from "next/link";

const theories = [
  {
    id: "T_01",
    title: "Pierrot and Harlequin Are Mirrors",
    status: "SPECULATION",
    confidence: 0,
    character: "Pierrot / Harlequin",
    desc: "Some fans theorize that Pierrot and Harlequin represent two sides of the same personality — one internalizes pain, the other externalizes it. The Columbina legend in Day 2 provides some support for this, but it remains unverified speculation.",
    tags: ["Character Theory", "Unverified"],
    evidence: 0,
  },
  {
    id: "T_02",
    title: "The Circus Is a Loop",
    status: "SPECULATION",
    confidence: 0,
    character: "All",
    desc: "Some players believe the game's structure (Day 1 → Day 2 → endings → replay) suggests a narrative loop. Whether this is a game mechanic or an in-universe phenomenon is unknown. No official source has confirmed or denied this.",
    tags: ["Meta Theory", "Unverified"],
    evidence: 0,
  },
  {
    id: "T_03",
    title: "Columbina's Death Drives Everything",
    status: "PARTIALLY VERIFIED",
    confidence: 60,
    character: "Columbina",
    desc: "The Columbina legend is confirmed to exist in Day 2 and explains the rivalry between Pierrot and Harlequin. However, the specific details of her death and its narrative significance beyond the rivalry have not been independently verified.",
    tags: ["Lore Theory", "Partially Verified"],
    evidence: 2,
  },
  {
    id: "T_04",
    title: "The Doctor Knows More Than He Shows",
    status: "SPECULATION",
    confidence: 0,
    character: "The Doctor",
    desc: "Community members speculate that The Doctor has meta-awareness of the game's events. This is based on his role as an observer in Day 2 content. No specific dialogue or game data has been verified to support fourth-wall-breaking behavior.",
    tags: ["Character Theory", "Unverified"],
    evidence: 0,
  },
  {
    id: "T_05",
    title: "The 3 Open Endings Form a Pattern",
    status: "SPECULATION",
    confidence: 0,
    character: "All",
    desc: "With 3 unnamed open endings confirmed to exist, some fans theorize they represent different thematic responses to the circus (acceptance, rejection, transcendence). This is pure speculation — the endings have not been named or described by any official source.",
    tags: ["Ending Theory", "Unverified"],
    evidence: 0,
  },
  {
    id: "T_06",
    title: "Day 3 Will Reveal the Truth",
    status: "SPECULATION",
    confidence: 0,
    character: "All",
    desc: "Day 3 is confirmed to be planned but unreleased. Some fans expect it to resolve unanswered questions from Day 1 and 2. The developer has described it as featuring 'higher stakes, tighter route locks, and payoffs for choices.'",
    tags: ["Future Content", "Unverified"],
    evidence: 0,
  },
];

export default function TheoryArchiveGrid() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          Community Theories
        </h2>
        <p className="text-on-surface/50 text-sm mb-8 max-w-2xl">
          Fan theories about The Freak Circus. None of these have been confirmed by the developer.
          They are community speculation based on gameplay observations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {theories.map((t) => (
            <div key={t.id} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-primary">{t.id}</span>
                <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 ${
                  t.status === 'PARTIALLY VERIFIED' ? 'text-yellow-500 bg-yellow-900/20' :
                  'text-on-surface/40 bg-surface/50'
                }`}>{t.status}</span>
              </div>
              <h3 className="font-display text-lg text-on-surface mb-2">{t.title}</h3>
              <div className="font-mono text-xs text-on-surface/40 mb-3">
                Subject: {t.character}
              </div>
              <p className="text-on-surface/60 text-sm mb-4">{t.desc}</p>
              <div className="flex gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[8px] text-on-surface/30 bg-surface/50 px-2 py-0.5 uppercase">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
