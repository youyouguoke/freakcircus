"use client";

const endings = [
  { id: "ENDING #01", title: "Missing", status: "CONFIRMED", href: "#ending-01" },
];

export default function EndingsEvidenceWall() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Ending Evidence Wall
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Only 1 ending has been confirmed in the current build.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {endings.map((e) => (
            <div key={e.id} className="glass-card p-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-on-surface/40">{e.id}</span>
                <h3 className="font-display text-on-surface">{e.title}</h3>
              </div>
              <span className="font-mono text-[9px] text-green-500 uppercase">{e.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
