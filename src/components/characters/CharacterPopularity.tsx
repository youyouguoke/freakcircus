"use client";

export default function CharacterPopularity() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Community Interest
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Based on community discussions and YouTube view counts.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { char: "Pierrot", interest: "Most discussed — central to the Columbina legend and the Pierrot-Harlequin rivalry" },
            { char: "Harlequin", interest: "Second most discussed — home of the confirmed 'Missing' bad ending" },
            { char: "Columbina", interest: "High interest despite being deceased — her legend drives the story" },
            { char: "Doctor", interest: "Moderate interest — Day 2 horror scenes generate discussion" },
            { char: "Jester", interest: "Growing interest — Day 2 storyteller role, less documented than others" },
            { char: "Ticket Taker", interest: "Moderate interest — first character encountered, pink ticket significance debated" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 flex items-start gap-3">
              <span className="font-mono text-xs text-primary shrink-0">{item.char}</span>
              <span className="text-on-surface/60 text-xs">{item.interest}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
