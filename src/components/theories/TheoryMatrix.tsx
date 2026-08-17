"use client";

export default function TheoryMatrix() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Theory Connections
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          How the main community theories relate to each other. All connections are speculative.
        </p>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {[
              { from: "Columbina's death", to: "Pierrot-Harlequin rivalry", relation: "explains (verified)" },
              { from: "Pierrot-Harlequin rivalry", to: "Multiple endings theory", relation: "suggests" },
              { from: "Day 2 tent routes", to: "Character-specific endings", relation: "supports" },
              { from: "3 unnamed open endings", to: "Route-specific endings theory", relation: "implies" },
              { from: "Day 3 planned", to: "More endings coming", relation: "developer confirmed" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-on-surface/60 flex-1 text-right">{c.from}</span>
                <span className="font-mono text-[9px] text-primary px-2 py-0.5 bg-primary/10 shrink-0">{c.relation}</span>
                <span className="text-on-surface/60 flex-1">{c.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
