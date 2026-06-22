"use client";

import Link from "next/link";

export default function WalkthroughHero() {
  return (
    <section className="bg-surface min-h-[70vh] flex flex-col justify-center py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-workspace.jpg"
          alt="Route Investigation"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Archive Labels */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            CHOICE_CORRUPTED
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            DIALOGUE_OVERWRITTEN
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            SAVE_FILE_FRAGMENT
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            REPLAY_AWARE
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mb-4">
          <div>
            <div className="font-[Creepster] text-3xl text-primary">6</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Verified Routes</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">24</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Hidden Branches</div>
          </div>
          <div>
            <div className="font-[Creepster] text-3xl text-primary">8</div>
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Documented Endings</div>
          </div>
        </div>

        <h1 className="font-[Creepster] text-4xl md:text-6xl lg:text-7xl text-primary mb-2">
          Freak Circus Walkthrough Guide
        </h1>

        <p className="font-[JetBrains_Mono] text-sm text-on-surface-variant mb-6">
          All Routes, Choices, Hidden Triggers & Endings
        </p>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          Complete route guides for The Freak Circus. Step-by-step walkthroughs for Pierrot, Harlequin, The Doctor, and Columbina — including hidden triggers, replay requirements, and secret endings.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="#archive" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Explore Route Guides
          </Link>
          <Link href="#hidden-branches" className="px-6 py-3 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Investigate Hidden Branches
          </Link>
        </div>
      </div>
    </section>
  );
}
