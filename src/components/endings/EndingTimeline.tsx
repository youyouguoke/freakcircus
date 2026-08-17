"use client";

const events = [
  { date: "2024", event: "The Freak Circus initial release — Day 1 content available" },
  { date: "2024-25", event: "Day 2 update released — adds tent routes, new characters (Jester, Doctor, Ticket Taker), Columbina legend" },
  { date: "2025", event: "Community confirms 'Missing' as the bad ending name (thefreakcircus.wiki.gg)" },
  { date: "2025-26", event: "thefreakcircus.org confirms '1 bad ending and 3 open endings'" },
  { date: "2026", event: "Day 3 planned but not yet released" },
];

export default function EndingTimeline() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Timeline
        </h2>
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="font-mono text-xs text-primary shrink-0 w-20">{e.date}</span>
              <span className="text-on-surface/60 text-sm">{e.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
