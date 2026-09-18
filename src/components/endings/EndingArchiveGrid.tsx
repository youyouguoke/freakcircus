import Link from "next/link";
import { CURRENT_VERSION } from "@/lib/site-facts";

// Only verified ending data
const endings = [
  {
    name: "Missing",
    type: "BAD ENDING",
    difficulty: "Unknown",
    status: "confirmed",
    desc: "The player character goes missing and is never found. Associated with Harlequin's route. Specific trigger conditions have not been independently verified.",
    href: "#",
    source: "YouTube playthroughs (verified May 2026)",
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
          <div className="font-[JetBrains_Mono] text-xs text-amber-400 mb-2">⚠️ 4 PLANNED ENDINGS — NOT YET IMPLEMENTED</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            The developer has listed 4 planned endings on itch.io: <strong>Pierrot&apos;s ending</strong>, <strong>Harlequin&apos;s ending</strong>,
            <strong> Protagonist&apos;s ending</strong>, and <strong>&quot;All together&quot;</strong> (MC with both Pierrot and Harlequin).
            However, the developer also states: &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;
            <strong>None of these exist in the current {CURRENT_VERSION} build.</strong>
          </p>
          <p className="text-on-surface-variant text-xs mt-3">
            Source: itch.io (garula.itch.io/the-freak-circus) — &quot;What is planned?&quot; section
          </p>
        </div>
      </div>
    </section>
  );
}
