"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-surface min-h-[80vh] flex flex-col justify-center py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png"
          alt="The Freak Circus"
          className="w-full h-full object-contain object-right opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h1 className="font-[Creepster] text-5xl md:text-7xl lg:text-8xl text-primary mb-4 leading-none">
          YOU STILL<br />
          DON'T<br />
          UNDERSTAND<br />
          THE ENDING
        </h1>

        <h2 className="sr-only">
          The Freak Circus Guide, Endings, Characters & Hidden Lore Archive
        </h2>

        <h3 className="font-[Epilogue] text-xl md:text-2xl text-foreground mb-2">
          The Ultimate The Freak Circus Archive
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 max-w-xl">
          Characters, Endings, Walkthroughs, Lore, Theories, Hidden Routes, and Community Discoveries.
        </p>

        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Live Investigation Feed 00:00:??
        </div>

        <div className="bg-surface-container border border-blood/30 p-4 mb-8 max-w-lg">
          <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">CORRUPTED_ENTRY</div>
          <div className="text-on-surface-variant text-sm italic">
            "The Doctor appears before his route unlocks."
          </div>
        </div>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          The Freak Circus is an indie horror visual novel that hides more than it reveals. Every route, every ending, and every character holds secrets that only emerge through repeated playthroughs. This archive documents everything the community has uncovered: character psychological profiles, all endings explained with unlock conditions, step-by-step walkthroughs for hidden routes, timeline lore analysis, and player theories about what the circus truly represents.
        </p>

        {/* Archive Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl">
          <div className="bg-surface-container border border-outline/20 p-4 text-center">
            <div className="font-[Creepster] text-2xl text-primary">4</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Main Characters</div>
          </div>
          <div className="bg-surface-container border border-outline/20 p-4 text-center">
            <div className="font-[Creepster] text-2xl text-primary">8+</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Verified Endings</div>
          </div>
          <div className="bg-surface-container border border-outline/20 p-4 text-center">
            <div className="font-[Creepster] text-2xl text-primary">17</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Route Variations</div>
          </div>
          <div className="bg-surface-container border border-outline/20 p-4 text-center">
            <div className="font-[Creepster] text-2xl text-primary">42</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Community Discoveries</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/lore" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Explore The Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
