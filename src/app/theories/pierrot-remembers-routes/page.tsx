import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pierrot Remembers Routes Theory — Evidence, Counter-Evidence & Analysis | Freak Circus Hub",
  description: "The Pierrot Loop Theory examined: evidence that Pierrot remembers player choices across saves, counter-evidence from data mining, and community analysis of replay-aware mechanics in The Freak Circus.",
  keywords: ["Pierrot loop theory", "Pierrot remembers routes", "replay awareness", "The Freak Circus theory", "Pierrot memory", "hidden counter"],
  openGraph: {
    title: "Pierrot Remembers Routes Theory — Evidence, Counter-Evidence & Analysis",
    description: "Examining the evidence that Pierrot remembers player choices across saves and routes.",
    type: "article",
    url: "https://freak-circus.com/theories/pierrot-remembers-routes",
  },
  alternates: {
    canonical: "https://freak-circus.com/theories/pierrot-remembers-routes",
  },
};

export default function PierrotRemembersRoutesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            THEORY_ANALYSIS // PIERROT_MEMORY
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Pierrot Remembers Routes Theory
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Does Pierrot remember your choices across saves? Examining the evidence, counter-evidence, and what replay-aware mechanics mean for the narrative.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                What Is the Pierrot Loop Theory?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Pierrot Loop Theory proposes that Pierrot, the melancholic clown of The Freak Circus, demonstrates awareness of the player that extends beyond the fourth wall. Unlike other characters whose dialogue resets between playthroughs, Pierrot appears to remember choices from previous saves and adjusts his behavior accordingly.
              </p>
              <p className="text-on-surface-variant text-sm">
                This theory emerged from community reports in 2024 and has been one of the most actively investigated mechanics in the game. Players have documented specific instances where Pierrot references events, choices, and even failed routes that occurred in previous playthroughs, suggesting that the game maintains a hidden memory system that tracks player behavior across the entire save file directory.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Key Evidence
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Evidence 1: Scene 14 Replay Dialogue</h3>
                  <p className="text-on-surface-variant text-sm">On the 4th playthrough of Pierrot's route, he begins referencing events from previous routes. The line "You chose differently last time" appears regardless of whether the player actually selected that choice. Community testing by u/loop_hunter confirmed this triggers consistently after 3 completed routes.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Evidence 2: Garden Scene Third Option</h3>
                  <p className="text-on-surface-variant text-sm">After failing Pierrot's route once, the garden scene in Act III gains a third option: "Say Nothing." This option does not appear in the script files of build 1.02 and was discovered through data mining in build 1.03. The option's description references the previous failure: "You didn't speak then either."</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Evidence 3: Hidden Counter at 0x4A20</h3>
                  <p className="text-on-surface-variant text-sm">Data miner u/data_miner_99 compared save files across 50 playthroughs and found a hidden counter at offset 0x4A20. The value increments on every route completion and affects available dialogue options. When the counter reaches 4, Pierrot's Scene 14 dialogue changes regardless of current route choices.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Evidence 4: Post-Credits Playtime Reference</h3>
                  <p className="text-on-surface-variant text-sm">In the Eternal Silence ending, the post-credits scene references the player's real-world playtime: "You've been here for [X] hours." This value matches the system clock, not in-game time, suggesting the game reads external data.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Counter-Evidence
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Counter 1: Script File Analysis</h3>
                  <p className="text-on-surface-variant text-sm">Data mining of build 1.04 script files shows that Pierrot's "replay dialogue" is not dynamically generated. The lines are pre-written and triggered by the hidden counter at 0x4A20. This suggests the effect is simulated memory, not genuine awareness.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Counter 2: Other Characters Show Similar Behavior</h3>
                  <p className="text-on-surface-variant text-sm">Harlequin also changes dialogue after multiple playthroughs, saying "You again" on the 4th route. The Doctor references endings before they occur. This suggests replay-aware mechanics are a global system, not unique to Pierrot.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Counter 3: No Cross-Save Communication</h3>
                  <p className="text-on-surface-variant text-sm">Testing with separate save files on different slots shows that the counter at 0x4A20 is slot-specific. Deleting all saves and starting fresh resets the counter. This means Pierrot does not have "true" memory — he only remembers within a single save slot.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Community Analysis
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The community is divided on whether Pierrot's replay awareness is a narrative device or a technical feature. Some players argue that the simulated memory is the point — the game is about the anxiety of being watched, and the technical implementation does not matter. Others believe that finding the hidden counter and understanding the trigger conditions is part of the gameplay.
              </p>
              <p className="text-on-surface-variant text-sm">
                The most compelling interpretation comes from the observation that Pierrot's "memory" only activates after the player has demonstrated commitment to the game. The 4th playthrough threshold suggests that the game waits until the player is invested before revealing its awareness. This creates a meta-narrative where the player's dedication to understanding the game becomes the reason the game notices them.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/characters/pierrot" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Route Guide</a>
                <a href="/characters/pierrot-endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Endings Guide</a>
                <a href="/endings/eternal-silence" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Eternal Silence Ending</a>
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
