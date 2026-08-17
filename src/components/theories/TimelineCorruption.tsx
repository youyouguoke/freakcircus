"use client";

export default function TimelineCorruption() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Open Questions
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Unanswered questions about The Freak Circus that the community is still investigating.
        </p>
        <div className="space-y-4">
          {[
            "What are the names of the 3 open endings?",
            "Does the game track player behavior across playthroughs?",
            "What will Day 3 add to the story?",
            "Is there a 'true' ending that requires completing all routes?",
            "What is the significance of the mirror scene in Day 2?",
            "Are there hidden mechanics that haven't been discovered yet?",
          ].map((q, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-3">
              <span className="font-mono text-xs text-on-surface/30">Q{i + 1}</span>
              <span className="text-on-surface/60 text-sm">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
