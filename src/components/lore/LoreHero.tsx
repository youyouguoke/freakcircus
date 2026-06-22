"use client";

import Link from "next/link";

export default function LoreHero() {
  return (
    <section className="bg-surface min-h-[70vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Archive Labels */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            ARCHIVE_07
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            MEMORY_FRAGMENT
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            TIMELINE_RECORD
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            RECOVERED_FILE
          </span>
        </div>

        {/* Origin Year */}
        <div className="font-[JetBrains_Mono] text-sm text-primary/60 mb-4">
          Origin Year 198?
        </div>

        <h1 className="font-[Creepster] text-4xl md:text-6xl lg:text-7xl text-primary mb-2">
          The Freak Circus Lore Encyclopedia
        </h1>

        <p className="font-[JetBrains_Mono] text-sm text-on-surface-variant mb-6">
          History, Symbols, Timeline & Hidden Meanings
        </p>

        {/* Quick Lore Summary */}
        <div className="bg-surface-container border border-outline/20 p-6 mb-8 max-w-3xl">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-3 uppercase tracking-wider">
            Quick Lore Summary
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            The Freak Circus is a psychological horror story centered around memory corruption, repeating timelines, and unreliable narration. Throughout multiple routes, players uncover fragments of a hidden history connecting Pierrot, Columbina, the Doctor, and the mysterious Circus itself. Every route reveals a different layer of the truth — and no single playthrough shows the complete picture.
          </p>
        </div>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          Explore forgotten histories, hidden rituals, recurring symbols, timeline fractures, and recovered records from The Freak Circus archive.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="#archive" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Explore the Lore Archive
          </Link>
          <Link href="#timeline-records" className="px-6 py-3 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Investigate Timeline Records
          </Link>
        </div>
      </div>
    </section>
  );
}
