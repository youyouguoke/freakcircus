"use client";

export default function SymbolAnalysis() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Symbol Analysis
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Recurring symbols in The Freak Circus that the community has identified. Interpretations are speculative.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "The Mirror",
              desc: "The mirror scene in Day 2 is a confirmed story moment. Community members interpret mirrors as representing self-reflection, identity duality, and the Pierrot-Harlequin rivalry.",
            },
            {
              title: "The Pink Ticket",
              desc: "The pink ticket appears in Day 1 at the cafe scene. Its significance beyond being a plot device is unknown. Community speculation about color symbolism is unverified.",
            },
            {
              title: "The Circus Tents",
              desc: "Day 2 introduces tent-based routes. Each tent appears to contain different character content. Whether the tents have symbolic meaning beyond their narrative function is unknown.",
            },
            {
              title: "The Columbina Legend",
              desc: "Columbina's story is the most symbolically rich element confirmed in the game. Her death at Harlequin's hands drives the central conflict and has been interpreted as representing lost innocence.",
            },
          ].map((s, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{s.title}</h3>
              <p className="text-on-surface/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
