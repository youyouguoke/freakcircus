"use client";

export default function CharacterTheories() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Community Theories
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Fan theories about the characters. None have been confirmed by the developer.
        </p>
        <div className="space-y-4">
          {[
            { char: "Pierrot", theory: "Some players report dialogue changes after multiple playthroughs, suggesting 'replay awareness' — but no hidden mechanic has been verified." },
            { char: "Harlequin", theory: "Community members describe an 'aggressive vs comedic' choice system. Whether this leads to different endings is unverified." },
            { char: "Doctor", theory: "Some speculate The Doctor has meta-awareness of the game. This is based on his observer role in Day 2, but no specific dialogue has been verified." },
            { char: "Columbina", theory: "Her death is confirmed. Whether her story has additional layers (e.g., she's observing from beyond) is unverified speculation." },
          ].map((t, i) => (
            <div key={i} className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-primary">{t.char}</span>
                <span className="font-mono text-[9px] text-yellow-500 uppercase">Unverified</span>
              </div>
              <p className="text-on-surface/60 text-sm">{t.theory}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
