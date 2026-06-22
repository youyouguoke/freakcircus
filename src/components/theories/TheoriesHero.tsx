"use client";

import Link from "next/link";

export default function TheoriesHero() {
  return (
    <section className="bg-surface min-h-[70vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Archive Labels */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            BRANCH_09
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            LOOP_FAILED
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            SESSION_RESTARTED
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            MEMORY_CORRUPTION
          </span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mb-8">
          <div>
            <div className="font-[Creepster] text-3xl text-primary">38</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Confirmed Theories</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">12</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Unverified</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">3</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Corrupted</div>
          </div>
        </div>

        <h1 className="font-[Creepster] text-4xl md:text-6xl lg:text-7xl text-primary mb-2">
          The Freak Circus Theories,
          <br />
          Timeline Analysis & Hidden Lore
        </h1>

        <p className="font-[JetBrains_Mono] text-sm text-on-surface-variant mb-6">
          Every Route Hides Another Theory
        </p>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          Explore timeline corruption, hidden motives, replay anomalies, and community investigations inside The Freak Circus archive.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="#archive" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Explore All Theories
          </Link>
          <Link href="#timeline" className="px-6 py-3 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Investigate Timeline Anomalies
          </Link>
        </div>
      </div>
    </section>
  );
}
