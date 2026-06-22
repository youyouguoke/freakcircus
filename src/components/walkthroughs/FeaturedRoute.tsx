"use client";

import Link from "next/link";

export default function FeaturedRoute() {
  return (
    <section id="featured" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Featured Route Investigation — This Week
        </div>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">
            VERY HARD — REPLAY REQUIRED
          </div>

          <h2 className="font-[Creepster] text-3xl md:text-5xl text-primary mb-4">
            The Silent Pierrot Route
          </h2>

          <p className="text-on-surface-variant mb-8 max-w-2xl">
            Avoid all direct emotional responses during Acts II and III. This route becomes aware of previous playthroughs after the third loop.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                Why This Route Matters
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                The Silent Pierrot Route is the most discussed hidden route in the community. It introduces the replay-aware mechanics that define The Freak Circus's meta-narrative. By refusing to engage with the game's dialogue system, the player breaks the narrative contract and forces the game to respond in unexpected ways.
              </p>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                Key Evidence
              </h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Pierrot references events from previous playthroughs that the player never selected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>The 4-minute black screen contains narration not found in script files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Post-credits scene references the player's real-world playtime</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                Related Content
              </h3>
              <div className="space-y-3">
                <div className="bg-surface border border-outline/20 p-4">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <Link href="/endings/eternal-silence" className="text-primary font-bold hover:underline">
                    Eternal Silence →
                  </Link>
                </div>
                <div className="bg-surface border border-outline/20 p-4">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <Link href="/theories/pierrot-remembers-routes" className="text-primary font-bold hover:underline">
                    Pierrot Remembers Routes →
                  </Link>
                </div>
                <div className="bg-surface border border-outline/20 p-4">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Character</div>
                  <Link href="/characters/pierrot" className="text-primary font-bold hover:underline">
                    Pierrot Character Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Diagram */}
          <div className="bg-surface border border-outline/20 p-6 mb-8">
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
              How The Silent Route Works
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              The Silent Route operates on a three-act silence tracking system. In Act I, choosing silence has no effect — the game treats it as a neutral choice. In Act II, the game begins tracking silence choices and removes certain dialogue options from future scenes. By Act III, silence becomes a deliberate narrative choice that triggers unique dialogue branches not available in the standard route.
            </p>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">Act I</div>
                <div className="space-y-2">
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Speak</div>
                  <div className="bg-surface-container border border-blood/30 p-2 text-sm text-blood">Silence</div>
                </div>
              </div>
              <div>
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">Act II</div>
                <div className="space-y-2">
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Comfort</div>
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Accuse</div>
                  <div className="bg-surface-container border border-blood/30 p-2 text-sm text-blood">Silence</div>
                </div>
              </div>
              <div>
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">Act III</div>
                <div className="space-y-2">
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Confess</div>
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Deny</div>
                  <div className="bg-surface-container border border-blood/30 p-2 text-sm text-blood">Silence</div>
                </div>
              </div>
              <div>
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">Finale</div>
                <div className="space-y-2">
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Accept</div>
                  <div className="bg-surface-container border border-outline/20 p-2 text-sm">Reject</div>
                  <div className="bg-surface-container border border-blood/30 p-2 text-sm text-blood">Silence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden Dialogue */}
          <div className="bg-surface border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">Hidden Dialogue Example</div>
            <blockquote className="text-on-surface-variant italic border-l-2 border-primary pl-4">
              "You said nothing last time, too. And the time before that. Do you think I don't remember?"
              <footer className="text-sm mt-2 not-italic">
                — Pierrot, Scene 14 (3rd loop)
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
