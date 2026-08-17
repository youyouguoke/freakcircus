import Link from "next/link";

// Only verified ending data
const endings = [
  {
    name: "Missing",
    type: "BAD ENDING",
    difficulty: "Unknown",
    status: "confirmed",
    desc: "The player character goes missing and is never found. This ending occurs when specific trust thresholds are not met by the end of Day 2.",
    href: "#",
    source: "thefreakcircus.wiki (verified May 2026)",
  },
];

export default function EndingArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          // Ending Archive — 1 Confirmed Ending Found
        </div>

        {/* Confirmed ending */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {endings.map((ending, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">CONFIRMED ENDING</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{ending.name}</h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">{ending.type}</div>
              <p className="text-on-surface-variant text-sm mb-4">{ending.desc}</p>
              <div className="border-t border-outline/10 pt-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Source</div>
                <p className="text-on-surface-variant text-xs">{ending.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Unnamed open endings note */}
        <div className="bg-surface-container border border-amber-500/30 p-6">
          <div className="font-[JetBrains_Mono] text-xs text-amber-400 mb-2">⚠️ 3 OPEN ENDINGS EXIST — NAMES UNCONFIRMED</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            The Freak Circus has 3 additional open endings confirmed by the developer (&quot;1 bad ending and 3 open endings&quot;).
            However, <strong>no external source has named these endings</strong>. Any ending names you see elsewhere
            (including previously on this site) are community speculation or fabrication.
          </p>
          <p className="text-on-surface-variant text-xs mt-3">
            Source: thefreakcircus.org wiki, thefreakcircus.wiki, VNDB
          </p>
        </div>
      </div>
    </section>
  );
}
