"use client";

export default function TheoriesHero() {
  return (
    <section className="bg-surface pt-28 pb-16 px-4 md:px-16 border-b border-outline/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-theories.webp" alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
          Community Theories
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-4 uppercase tracking-tight">
          Fan Theories &amp; Speculation
        </h1>
        <p className="text-on-surface/60 text-lg max-w-2xl mb-8">
          Community theories about The Freak Circus — an 18+ psychological horror visual novel by Neko Bueno.
          None of these have been confirmed. Day 3 is planned but unreleased.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <div className="font-display text-3xl text-primary">6</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Community Theories</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-yellow-500">1</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Partially Verified</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl text-on-surface/30">0</div>
            <div className="font-mono text-xs text-on-surface/40 uppercase">Developer Confirmed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
