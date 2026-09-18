"use client";

const analyses = [
  {
    name: "Missing (Bad Ending)",
    character: "Harlequin",
    status: "CONFIRMED",
    statusColor: "text-green-500",
    meaning: "The only ending confirmed to exist in the current build. Community reports describe it as a dark conclusion to the Harlequin storyline where the player character goes missing. The specific narrative details have not been independently verified.",
    note: "This is the ending most players encounter on their first playthrough of Harlequin's route.",
  },
];

const plannedEndings = [
  { name: "Pierrot's ending", status: "PLANNED" },
  { name: "Harlequin's ending", status: "PLANNED" },
  { name: "Protagonist's ending", status: "PLANNED" },
  { name: "All together (MC with both Pierrot and Harlequin)", status: "PLANNED" },
];

export default function EndingExplained() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="explained">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          Ending Analysis
        </h2>
        <p className="text-on-surface/50 text-sm mb-8 max-w-2xl">
          Only &quot;Missing&quot; has been confirmed in the current build. 4 additional endings are planned but not yet implemented.
        </p>

        <div className="space-y-6 mb-12">
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

        <div className="bg-surface-container border border-amber-500/30 p-6">
          <div className="font-[JetBrains_Mono] text-xs text-amber-400 mb-3">⚠️ PLANNED ENDINGS — NOT YET IN GAME</div>
          <p className="text-on-surface-variant text-sm mb-4">
            The developer has listed 4 planned endings on the official itch.io page under &quot;What is planned?&quot;.
            The developer also states: &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;
          </p>
          <ul className="space-y-2">
            {plannedEndings.map((e) => (
              <li key={e.name} className="flex items-center gap-3 text-on-surface-variant text-sm">
                <span className="font-mono text-[9px] text-amber-400 uppercase">{e.status}</span>
                {e.name}
              </li>
            ))}
          </ul>
          <p className="text-on-surface/40 text-xs mt-4">
            Source: itch.io (garula.itch.io/the-freak-circus) — &quot;What is planned?&quot; section
          </p>
        </div>
      </div>
    </section>
  );
}
