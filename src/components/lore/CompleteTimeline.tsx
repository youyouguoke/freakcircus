"use client";

export default function CompleteTimeline() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          What We Know About the Story
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          The Freak Circus does not have a publicly documented in-game timeline.
          Here is what community sources have verified about the game&apos;s story structure.
        </p>
        <div className="space-y-6">
          {[
            {
              label: "Day 1 — Street & First Encounter",
              desc: "The player character meets Pierrot and Harlequin. The story begins at a cafe where the player receives a pink ticket. The Ticket Taker and Doctor are also introduced.",
              verified: true,
            },
            {
              label: "Day 2 — Tents & Routes",
              desc: "The story moves to tent-based routes. The Columbina legend is revealed, explaining why Pierrot and Harlequin are rivals. Jester, Doctor, and Ticket Taker have expanded roles. The mirror scene is a key story moment.",
              verified: true,
            },
            {
              label: "The Columbina Legend",
              desc: "Columbina is a deceased character who was killed by Harlequin. Her death is the central event that drives the Pierrot-Harlequin rivalry. This is the most significant piece of confirmed lore.",
              verified: true,
            },
            {
              label: "Day 3 — Planned (Not Released)",
              desc: "Day 3 is confirmed to be planned. The developer describes it as featuring 'higher stakes, tighter route locks, and payoffs for choices.' It has not been released yet.",
              verified: false,
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-on-surface">{item.label}</h3>
                <span className={`font-mono text-[9px] uppercase ${item.verified ? 'text-green-500' : 'text-yellow-500'}`}>
                  {item.verified ? 'Verified' : 'Planned'}
                </span>
              </div>
              <p className="text-on-surface/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
