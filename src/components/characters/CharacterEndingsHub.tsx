"use client";

export default function CharacterEndingsHub() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Character Endings
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          What we know about endings associated with each character.
        </p>
        <div className="glass-card p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-primary shrink-0 w-20">Pierrot</span>
              <span className="text-on-surface/60 text-sm">Associated with at least one of the 3 unnamed open endings. Specific conditions unverified.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-primary shrink-0 w-20">Harlequin</span>
              <span className="text-on-surface/60 text-sm">The &quot;Missing&quot; bad ending is confirmed. May also be associated with an open ending.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-primary shrink-0 w-20">Doctor</span>
              <span className="text-on-surface/60 text-sm">May be associated with an open ending. Unverified.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-primary shrink-0 w-20">Jester</span>
              <span className="text-on-surface/60 text-sm">No endings confirmed. Day 3 may add Jester-specific content.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
