"use client";

const events = [
  { year: "2024", event: "The Freak Circus initial release — Day 1 content available with Pierrot and Harlequin" },
  { year: "2024-25", event: "Day 2 update — adds tent routes, Columbina legend, Jester/Doctor/Ticket Taker characters" },
  { year: "2025", event: "Community confirms 'Missing' as the only named ending (thefreakcircus.wiki.gg)" },
  { year: "2025-26", event: "thefreakcircus.org confirms '1 bad ending and 3 open endings' — endings remain unnamed" },
  { year: "2026", event: "Day 3 planned but not yet released — 'higher stakes, tighter route locks, ending payoffs'" },
];

export default function CompleteTimeline() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Verified Timeline
        </h2>
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="font-mono text-xs text-primary shrink-0 w-16">{e.year}</span>
              <span className="text-on-surface/60 text-sm">{e.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
