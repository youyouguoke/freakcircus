"use client";

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
            { fact: "Game version: v0.2", source: "itch.io" },
            { fact: "Day 1 & 2 released, Day 3 planned", source: "thefreakcircus.org" },
            { fact: "5 main characters: Pierrot, Harlequin, Jester, Doctor, Ticket Taker", source: "thefreakcircus.org" },
            { fact: "Columbina is dead — killed by Harlequin", source: "thefreakcircus.org, wiki.gg" },
            { fact: "1 confirmed ending: 'Missing' (Bad Ending)", source: "thefreakcircus.wiki.gg" },
            { fact: "3 unnamed open endings confirmed by developer", source: "thefreakcircus.org" },
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
