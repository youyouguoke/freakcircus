"use client";

const analyses = [
  {
    name: "Missing (Bad Ending)",
    character: "Harlequin",
    status: "CONFIRMED",
    statusColor: "text-green-500",
    meaning: "The only ending confirmed by name. Community reports describe it as a dark conclusion to the Harlequin storyline where the player character goes missing. The specific narrative details have not been independently verified by our team.",
    note: "This is the ending most players encounter on their first playthrough of Harlequin's route.",
  },
  {
    name: "Open Ending A (unnamed)",
    character: "Unknown",
    status: "UNCONFIRMED",
    statusColor: "text-yellow-500",
    meaning: "One of 3 open endings confirmed to exist by thefreakcircus.org. The specific narrative content, symbolism, and unlock conditions are unknown. Any detailed descriptions you see elsewhere are speculation.",
    note: "Some community members associate this with Harlequin's route, but this has not been verified.",
  },
  {
    name: "Open Ending B (unnamed)",
    character: "Unknown",
    status: "UNCONFIRMED",
    statusColor: "text-yellow-500",
    meaning: "One of 3 open endings confirmed to exist by thefreakcircus.org. The specific narrative content, symbolism, and unlock conditions are unknown.",
    note: "Some community members associate this with Pierrot's route, but this has not been verified.",
  },
  {
    name: "Open Ending C (unnamed)",
    character: "Unknown",
    status: "UNCONFIRMED",
    statusColor: "text-yellow-500",
    meaning: "The least documented of the 3 open endings. No verified information exists about its narrative content, symbolism, or unlock conditions.",
    note: "No community consensus on which route this ending is associated with.",
  },
];

export default function EndingExplained() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="explained">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          Ending Analysis
        </h2>
        <p className="text-on-surface/50 text-sm mb-8 max-w-2xl">
          What we know about each ending. Only &quot;Missing&quot; has been confirmed — the rest are unnamed open endings
          whose details remain unknown.
        </p>

        <div className="space-y-6">
          {analyses.map((a) => (
            <div key={a.name} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-lg text-on-surface">{a.name}</h3>
                <span className={`font-mono text-[9px] uppercase tracking-widest ${a.statusColor}`}>{a.status}</span>
              </div>
              <div className="font-mono text-xs text-on-surface/40 mb-3">
                Associated: {a.character}
              </div>
              <p className="text-on-surface/60 text-sm mb-3">{a.meaning}</p>
              <p className="text-on-surface/40 text-xs italic">{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
