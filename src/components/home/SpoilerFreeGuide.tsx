"use client";

import Link from "next/link";

export default function SpoilerFreeGuide() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface-container border border-outline/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex-1">
              <div className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1 inline-block mb-4">
                NEW PLAYER
              </div>
              <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-foreground mb-4">
                Start Here Without Spoilers
              </h2>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                New to The Freak Circus? This spoiler-free beginner guide covers what the game is, which route to play first, how long it takes, and what to expect — without revealing any story details, ending conditions, or hidden content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase"
                >
                  Beginner Guide →
                </Link>
                <Link
                  href="/characters"
                  className="px-6 py-3 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase"
                >
                  Meet The Cast
                </Link>
              </div>
            </div>
            <div className="md:w-64 shrink-0">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary">■</span>
                  <span className="text-on-surface-variant text-sm">What type of game is it?</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">■</span>
                  <span className="text-on-surface-variant text-sm">Which route first?</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">■</span>
                  <span className="text-on-surface-variant text-sm">How long is one playthrough?</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">■</span>
                  <span className="text-on-surface-variant text-sm">Is it free to play?</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">■</span>
                  <span className="text-on-surface-variant text-sm">What to expect (no spoilers)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
