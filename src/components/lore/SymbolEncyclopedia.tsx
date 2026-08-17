"use client";

export default function SymbolEncyclopedia() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          Symbols &amp; Motifs
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Recurring visual and narrative elements in The Freak Circus that the community has identified.
          Interpretations are speculative unless noted.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "The Pink Ticket",
              desc: "Introduced in Day 1 at the cafe scene. The ticket is the player's entry into the circus. Its color and significance beyond being a plot device are unknown.",
              verified: true,
            },
            {
              name: "The Mirror",
              desc: "The mirror scene in Day 2 is confirmed to exist by multiple YouTube playthroughs. It appears to be a key story moment. Community members interpret it as representing self-reflection or duality.",
              verified: true,
            },
            {
              name: "The Circus Tents",
              desc: "Day 2 introduces tent-based routes. Each tent contains different character content. The tents structure the branching narrative paths.",
              verified: true,
            },
            {
              name: "The Mask (Community Speculation)",
              desc: "Some community members note that characters in the game wear face paint or masks. Whether this has symbolic meaning beyond character design is unverified speculation.",
              verified: false,
            },
          ].map((s, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-on-surface">{s.name}</h3>
                <span className={`font-mono text-[9px] uppercase ${s.verified ? 'text-green-500' : 'text-yellow-500'}`}>
                  {s.verified ? 'Verified' : 'Speculation'}
                </span>
              </div>
              <p className="text-on-surface/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
