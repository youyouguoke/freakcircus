import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pierrot — Character Profile, Route Guide & Hidden Triggers | Freak Circus Hub",
  description: "Complete Pierrot character analysis for The Freak Circus. Covers his melancholic clown persona, route guide, hidden dialogue triggers, garden scene mechanics, and the Eternal Silence ending.",
  keywords: ["Pierrot", "The Freak Circus Pierrot", "Pierrot route guide", "melancholic clown", "silent route", "Eternal Silence", "hidden triggers", "garden scene"],
  openGraph: {
    title: "Pierrot — Character Profile, Route Guide & Hidden Triggers",
    description: "Complete Pierrot character analysis, route walkthrough, hidden triggers, and Eternal Silence ending.",
    type: "article",
    url: "https://freak-circus.com/characters/pierrot",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/pierrot",
  },
};

export default function PierrotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // Pierrot
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Pierrot standing alone in the wilted garden"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Pierrot.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">First Route</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">Romanceable</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Loop Aware ★★★★☆</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">Pierrot</h1>
                <p className="font-[Epilogue] italic opacity-60">The melancholic clown — first route, hidden triggers, and the silence that remembers.</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Role</h4>
                <p className="font-[Epilogue]">Melancholic Clown</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">The Garden (Day 1)</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Key Mechanic</h4>
                <p className="font-[Epilogue]">Comfort / Confess</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Secret Ending</h4>
                <p className="font-[Epilogue] text-primary font-bold">Eternal Silence</p>
              </div>
            </div>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is Pierrot?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot is the melancholic clown of The Freak Circus and often the first route players encounter. Beneath his withdrawn, observant demeanor lies one of the most complex character arcs in the game. His storyline explores themes of forgotten identity, repeated loops, and awareness that extends beyond the fourth wall.
              </p>
              <p className="text-on-surface-variant text-sm">
                The loop theory suggests Pierrot remembers player behavior across save files, adjusting his dialogue and reactions accordingly. His garden scene contains hidden triggers that only appear after failing his route once, and the silence mechanic in his route leads to the Eternal Silence ending — one of the most discussed outcomes in the community.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Pierrot Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot's main route is the most commonly recommended starting point for new players. It introduces core mechanics including the dialogue choice system, the comfort/confess dynamic, and the first instance of replay-aware dialogue. The route takes approximately 4-6 hours for a first playthrough and contains 12 major scenes with branching decisions.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Smile For Me," triggers when players accept Pierrot's offer during the garden scene in Act III. However, community testing has revealed that this ending is not the full picture — Pierrot's route contains hidden content that only appears after specific refusal conditions and cross-route dependencies.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Silent Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Silent Route is Pierrot's secret ending path and requires refusing every major dialogue interaction during the final act. This is not a passive ending — silence becomes a deliberate choice that breaks the game's narrative contract. The unlock conditions are:
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Refuse all dialogue options in Scenes 10, 11, and 12</li>
                <li>• Do not select Comfort or Confess in the garden scene</li>
                <li>• Ignore Pierrot's direct questions in Scene 14</li>
                <li>• The screen will remain black for 3-4 minutes before credits roll</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                Players report that Pierrot references previous unselected choices during the silent route, suggesting the game maintains memory of player behavior across saves. This mechanic is not documented in the official guide and was discovered through community testing in 2025.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hidden Dialogue Triggers
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot's route contains multiple hidden dialogue triggers that require specific conditions:
              </p>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Garden Scene Hidden Choice</h3>
                  <p className="text-on-surface-variant text-sm">After failing Pierrot's route once, the garden scene in Act III gains a third option: "Say Nothing." This option does not appear in the script files and was discovered through data mining in build 1.03.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Scene 14 Replay Dialogue</h3>
                  <p className="text-on-surface-variant text-sm">On the 4th playthrough, Pierrot begins referencing events from previous routes. The line "You chose differently last time" appears regardless of whether the player actually selected that choice.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Post-Credits Scene</h3>
                  <p className="text-on-surface-variant text-sm">After completing the Silent Route, wait through the full credits. A 30-second scene plays showing Pierrot alone in the garden, speaking to an empty chair. The dialogue references the player's real-world playtime.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Pierrot Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Smile For Me (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Accept Pierrot's offer in the garden scene. Standard ending with bittersweet conclusion. Unlocked by default on first playthrough.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Eternal Silence (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Refuse all dialogue in the final act. Screen remains black for 3-4 minutes. Pierrot references previous unselected choices. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Null Route (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. No character appears. Player walks through empty corridors until soft-lock. Unlock conditions unknown.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/characters/pierrot-endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Endings Guide</a>
                <a href="/endings/eternal-silence" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Eternal Silence Ending</a>
                <a href="/theories/pierrot-remembers-routes" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Loop Theory</a>
                <a href="/lore/mirror-hall" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Mirror Hall Lore</a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
      <JsonLd />
    </main>
  );
}
