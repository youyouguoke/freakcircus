"use client";

export default function FeaturedTheory() {
  return (
    <section id="featured" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Featured Investigation — This Week
        </div>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-primary text-primary">
              COMMUNITY CONFIDENCE: 78%
            </span>
          </div>

          <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">
            THEORY_14 — META THEORY
          </div>

          <h2 className="font-[Creepster] text-3xl md:text-5xl text-primary mb-4">
            The Circus Does Not Exist
          </h2>

          <p className="text-on-surface-variant mb-8 max-w-2xl">
            Some players believe the circus is not a physical location, but a fragmented psychological space shared across collapsing timelines.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                Supporting Clues
              </h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Repeated impossible architecture between scenes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Inconsistent room layouts across playthroughs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Conflicting memories expressed by characters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Timeline-aware dialogue referencing unseen events</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Architecture</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Timeline</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Psychology</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Meta</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-surface border border-outline/20 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">Screenshot A</div>
                <div className="font-[Creepster] text-4xl text-primary/30 text-center py-8">
                  ROOM_A_v1.04
                </div>
              </div>
              <div className="bg-surface border border-outline/20 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">Screenshot B</div>
                <div className="font-[Creepster] text-4xl text-primary/30 text-center py-8">
                  ROOM_A_v2.01
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">
              Hidden Dialogue Fragment
            </div>
            <blockquote className="text-on-surface-variant italic border-l-2 border-primary pl-4">
              "This room... it was different before. Or maybe I am the one who changed."
              <footer className="text-sm mt-2 not-italic">
                — Columbina, Scene 12 (3rd loop)
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
