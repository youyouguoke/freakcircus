"use client";

import Link from "next/link";

export default function EndingsHero() {
  return (
    <section className="bg-surface min-h-[70vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-corridor.jpg"
          alt="Corridor"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">BRANCH FAILED</span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">TIMELINE COLLAPSED</span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">MEMORY RETAINED</span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">ROUTE CORRUPTION DETECTED</span>
        </div>

        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="font-[Creepster] text-3xl text-primary">14</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Known Endings</div>
          </div>
        </div>

        <h1 className="font-[Creepster] text-4xl md:text-6xl lg:text-7xl text-primary mb-6">
          Every Ending<br />Hides Another Story
        </h1>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          Explore every known route, hidden finale, corrupted branch, and timeline anomaly discovered inside The Freak Circus.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="#archive" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Explore All Endings
          </Link>
          <Link href="#unverified" className="px-6 py-3 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Investigate Hidden Routes
          </Link>
        </div>
      </div>
    </section>
  );
}
