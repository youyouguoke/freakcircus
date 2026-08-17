"use client";

export default function CorruptedInvestigations() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Unverified Claims
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Claims that circulate in the community but have NOT been independently verified.
          Treat these with skepticism.
        </p>
        <div className="space-y-4">
          {[
            {
              claim: "Hidden save file mechanics",
              status: "UNVERIFIED",
              desc: "Some players claim the game tracks data across playthroughs using hidden counters in save files. No independent verification exists.",
            },
            {
              claim: "Fourth-wall-breaking dialogue",
              status: "UNVERIFIED",
              desc: "Reports of characters referencing the player (not the protagonist) or previous playthroughs. Could be misremembered dialogue or community myth.",
            },
            {
              claim: "Datamined unused content",
              status: "UNVERIFIED",
              desc: "Claims about unused game files containing cut endings, hidden routes, or developer messages. No verified datamine results have been published.",
            },
            {
              claim: "Architecture changes between playthroughs",
              status: "UNVERIFIED",
              desc: "Some players report that game environments change after multiple playthroughs. This could be confirmation bias or genuine hidden mechanics.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 border-l-4 border-l-yellow-500/30">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-on-surface">{item.claim}</h3>
                <span className="font-mono text-[9px] text-yellow-500 uppercase">{item.status}</span>
              </div>
              <p className="text-on-surface/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
