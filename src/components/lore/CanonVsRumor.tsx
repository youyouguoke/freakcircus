"use client";

const records = [
  { name: "First Circus Fire", status: "Verified", evidence: "Multiple newspaper fragments, character dialogue, and The Doctor's files confirm the fire occurred." },
  { name: "Mirror Hall Incident", status: "Verified", evidence: "The Hall appears in the game under specific conditions. 7 mirrors show different route events." },
  { name: "Project Continuity", status: "Verified", evidence: "The Doctor's medical files explicitly reference this project and describe memory extraction procedures." },
  { name: "Observer Record", status: "Contested", evidence: "Audio files contain breathing sounds, but the source is unidentified. Could be a character, the player, or a cut entity." },
  { name: "Null Performer", status: "Unverified", evidence: "14 dialogue references exist, but no sprite, voice file, or confirmed sighting. May be a cut character or ARG element." },
  { name: "Director Existence", status: "Unverified", evidence: "Referenced in unused files and ending credits, but never appears in the game. May be a planned character for future content." },
];

export default function CanonVsRumor() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Canon vs Rumor
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Which records are verified, which are contested, and which remain unverified
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/20">
                <th className="text-left p-3 text-foreground">Record</th>
                <th className="text-left p-3 text-foreground">Status</th>
                <th className="text-left p-3 text-foreground">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.name} className="border-b border-outline/10">
                  <td className="p-3 text-foreground font-bold">{r.name}</td>
                  <td className="p-3">
                    <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                      r.status === "Verified" ? "border-primary text-primary" :
                      r.status === "Contested" ? "border-blood text-blood" :
                      "border-outline/30 text-on-surface-variant"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="p-3 text-on-surface-variant">{r.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
