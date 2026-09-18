"use client";

import { CURRENT_VERSION, MAIN_CHARACTERS, RELEASED_DAYS_LABEL } from "@/lib/site-facts";

export default function LoreEvidenceBoard() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Verified Facts
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Facts about The Freak Circus that have been verified by multiple sources.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { fact: `Game version: ${CURRENT_VERSION}`, source: "itch.io" },
            { fact: `${RELEASED_DAYS_LABEL} released, Day 3 planned`, source: "itch.io" },
            { fact: `${MAIN_CHARACTERS.length} main characters: ${MAIN_CHARACTERS.join(", ")}`, source: "VNDB" },
            { fact: "Columbina is dead — killed by Harlequin", source: "YouTube playthroughs" },
            { fact: "1 confirmed ending: 'Missing' (Bad Ending)", source: "YouTube playthroughs" },
            { fact: "4 planned endings listed by developer (not yet in game)", source: "itch.io" },
            { fact: "Columbina legend explains Pierrot-Harlequin rivalry", source: "YouTube, wiki" },
            { fact: "Mirror scene exists in Day 2", source: "YouTube (240K+ views)" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 flex items-start gap-3">
              <span className="text-green-500 mt-0.5">✓</span>
              <div>
                <span className="text-on-surface/60 text-sm">{item.fact}</span>
                <div className="font-mono text-[8px] text-on-surface/30 mt-1">{item.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
