"use client";

export default function LoreHero() {
  return (
    <section className="bg-surface pt-28 pb-16 px-4 md:px-16 border-b border-outline/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-lore.webp" alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
          Lore Archive
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-4 uppercase tracking-tight">
          Lore Encyclopedia
        </h1>
        <p className="text-on-surface/60 text-lg max-w-2xl mb-8">
          What we know about the story and world of The Freak Circus.
          The game is in v0.2 — much of the lore is still being discovered.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <div className="font-display text-3xl text-primary">2</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Released Days</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-primary">5</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Characters</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-yellow-500">1</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Confirmed Legend</div>
          </div>
        </div>
      </div>
    </section>
  );
}
