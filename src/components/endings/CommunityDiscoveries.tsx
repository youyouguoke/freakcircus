"use client";

const discoveries = [
  {
    title: "Missing Ending Confirmed",
    desc: "Community verification confirmed 'Missing' as the only named ending in the game.",
    tags: ["Confirmed", "Bad Ending"],
    source: "YouTube playthroughs",
  },
  {
    title: "1 Confirmed + 4 Planned Endings",
    desc: "The current build has 1 confirmed bad ending ('Missing'). The developer has planned 4 additional endings (Pierrot's, Harlequin's, Protagonist's, All together) but states: 'the script is still a work in progress, so no endings are fully planned yet.'",
    tags: ["Confirmed", "Developer Statement"],
    source: "itch.io",
  },
  {
    title: "Day 2 Mirror Scene",
    desc: "Multiple YouTube playthroughs confirm the Mirror Scene exists in Day 2. It appears to be a key story moment.",
    tags: ["Confirmed", "Day 2"],
    source: "YouTube (240K+ views)",
  },
  {
    title: "Columbina is Dead",
    desc: "Community sources confirm Columbina is a deceased character (killed by Harlequin), not a playable route.",
    tags: ["Confirmed", "Lore"],
    source: "YouTube playthroughs",
  },
];

export default function CommunityDiscoveries() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Community Discoveries
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {discoveries.map((d, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{d.title}</h3>
              <p className="text-on-surface/60 text-sm mb-3">{d.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {d.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] text-green-500 bg-green-900/20 px-2 py-0.5 uppercase">{tag}</span>
                  ))}
                </div>
                <span className="font-mono text-[8px] text-on-surface/30">{d.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
