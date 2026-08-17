"use client";

import Link from "next/link";

export default function SpoilerFreeGuide() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="archive-card border-circus-red/20 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex-1">
              <div className="font-label text-[0.55rem] text-circus-red mb-4">NEW PLAYER BRIEFING</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-paper mb-4">
                Start Here Without Spoilers
              </h2>
              <p className="text-faint-paper text-sm mb-6 leading-relaxed">
                New to The Freak Circus? This quick-start guide covers what the game is, which route to play first, how long it takes, and what to expect — without revealing story details or ending conditions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/characters/pierrot" className="btn-archive btn-archive--filled">
                  START WITH PIERROT
                </Link>
                <Link href="/characters" className="btn-archive btn-archive--ghost">
                  MEET THE CAST
                </Link>
              </div>
              <p className="text-dim-paper text-xs mt-4">
                Note: The rest of this archive contains full spoilers. Complete at least one route before exploring further.
              </p>
            </div>
            <div className="md:w-56 shrink-0">
              <div className="space-y-2.5">
                {["What type of game is it?", "Which route first?", "How long is one playthrough?", "Is it free to play?", "What to expect (no spoilers)"].map((q) => (
                  <div key={q} className="flex items-center gap-2.5">
                    <span className="text-circus-red text-xs">▸</span>
                    <span className="text-faint-paper text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
