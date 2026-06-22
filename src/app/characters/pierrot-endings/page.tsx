import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pierrot Endings Guide — Smile For Me, Eternal Silence & Null Route | Freak Circus Hub",
  description: "All Pierrot endings explained: Smile For Me (main), Eternal Silence (secret), and Null Route (corrupted). Includes unlock conditions, scene requirements, and community verification status.",
  keywords: ["Pierrot endings", "Eternal Silence", "Smile For Me", "Null Route", "Pierrot route endings", "The Freak Circus endings"],
  openGraph: {
    title: "Pierrot Endings Guide — Smile For Me, Eternal Silence & Null Route",
    description: "All Pierrot endings explained with unlock conditions and community verification.",
    type: "article",
    url: "https://freak-circus.com/characters/pierrot-endings",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/pierrot-endings",
  },
};

export default function PierrotEndingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_GUIDE // PIERROT
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Pierrot Endings Guide
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Complete catalog of all Pierrot route endings, including standard, secret, and corrupted outcomes.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How Many Endings Does Pierrot Have?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The community has confirmed three endings on Pierrot's route: one standard ending, one secret ending, and one corrupted ending found in unused game files. The standard ending unlocks through normal play, while the secret ending requires specific refusal conditions. The corrupted ending remains unverified — no player has legitimately unlocked it.
              </p>
              <p className="text-on-surface-variant text-sm">
                Pierrot's endings are notable for their narrative complexity. Unlike other characters whose endings resolve their storylines, Pierrot's endings suggest that the circus itself is aware of the player and that repeated playthroughs are not separate attempts but continuations of a single narrative.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Smile For Me — Standard Ending
              </h2>
              <div className="bg-surface-container border border-outline/20 p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">STANDARD</span>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Difficulty: Normal</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  The standard ending for Pierrot's route triggers when players accept his offer during the garden scene in Act III. This is the ending most players see on their first playthrough and serves as the baseline for understanding Pierrot's character arc.
                </p>
                <h3 className="font-bold text-foreground mb-2">Unlock Conditions</h3>
                <ul className="space-y-2 text-on-surface-variant text-sm">
                  <li>• Select "Accept" in the garden scene (Scene 9)</li>
                  <li>• Maintain positive dialogue choices throughout Acts I and II</li>
                  <li>• Do not refuse more than two dialogue interactions in the final act</li>
                </ul>
              </div>
              <p className="text-on-surface-variant text-sm">
                The ending concludes with Pierrot removing his mask, revealing a face that the player cannot clearly see. The screen fades to white as carnival music plays. Post-credits, a brief scene shows the garden empty with a single red thread on the ground.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Eternal Silence — Secret Ending
              </h2>
              <div className="bg-surface-container border border-outline/20 p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[JetBrains_Mono] text-xs text-blood border border-blood/30 px-2 py-1">SECRET</span>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Difficulty: Hard</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  Eternal Silence is Pierrot's secret ending and one of the most discussed outcomes in the community. It requires refusing every major dialogue interaction during the final act, turning silence into a deliberate narrative choice that breaks the game's contract with the player.
                </p>
                <h3 className="font-bold text-foreground mb-2">Unlock Conditions</h3>
                <ul className="space-y-2 text-on-surface-variant text-sm">
                  <li>• Refuse all dialogue options in Scenes 10, 11, and 12</li>
                  <li>• Do not select Comfort or Confess in the garden scene</li>
                  <li>• Ignore Pierrot's direct questions in Scene 14</li>
                  <li>• Requires cross-route awareness flag (complete one other route first)</li>
                </ul>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">
                The ending plays out over 3-4 minutes of black screen. During this time, Pierrot's voice narrates events from previous playthroughs that the player never selected. The narration includes specific choices from other routes, suggesting that Pierrot's awareness extends beyond the current save file.
              </p>
              <p className="text-on-surface-variant text-sm">
                When the credits finally roll, they are silent. No music plays. Post-credits, a 30-second scene shows Pierrot alone in the garden, speaking to an empty chair. The dialogue references the player's real-world playtime: "You've been here for [X] hours. You could have left at any time."
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Null Route — Corrupted Ending
              </h2>
              <div className="bg-surface-container border border-outline/20 p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant border border-outline/30 px-2 py-1">CORRUPTED</span>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Difficulty: Unknown</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  The Null Route is a corrupted ending found in unused game files but never legitimately unlocked by any player. Data miners discovered references to this ending in build 1.04, with memory addresses that do not match any known scene IDs.
                </p>
                <h3 className="font-bold text-foreground mb-2">What We Know</h3>
                <ul className="space-y-2 text-on-surface-variant text-sm">
                  <li>• File name: ending_null_pierrot.dat</li>
                  <li>• Contains placeholder dialogue: "No one is here. No one was ever here."</li>
                  <li>• Map file shows empty corridors with no character sprites</li>
                  <li>• Soft-locks after 5 minutes of walking</li>
                </ul>
              </div>
              <p className="text-on-surface-variant text-sm">
                The community is divided on whether this is a debug remnant or an intentionally hidden ending. Some players believe it requires a specific sequence of failed routes across all characters. Others think it was cut content that remains partially accessible through file manipulation.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Ending Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-outline/20">
                      <th className="text-left p-3 text-foreground">Ending</th>
                      <th className="text-left p-3 text-foreground">Type</th>
                      <th className="text-left p-3 text-foreground">Difficulty</th>
                      <th className="text-left p-3 text-foreground">Replay Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-outline/10">
                      <td className="p-3 text-on-surface-variant">Smile For Me</td>
                      <td className="p-3"><span className="font-[JetBrains_Mono] text-xs text-primary">Standard</span></td>
                      <td className="p-3 text-on-surface-variant">Normal</td>
                      <td className="p-3 text-on-surface-variant">No</td>
                    </tr>
                    <tr className="border-b border-outline/10">
                      <td className="p-3 text-on-surface-variant">Eternal Silence</td>
                      <td className="p-3"><span className="font-[JetBrains_Mono] text-xs text-blood">Secret</span></td>
                      <td className="p-3 text-on-surface-variant">Hard</td>
                      <td className="p-3 text-on-surface-variant">Yes (1 route)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-on-surface-variant">Null Route</td>
                      <td className="p-3"><span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Corrupted</span></td>
                      <td className="p-3 text-on-surface-variant">Unknown</td>
                      <td className="p-3 text-on-surface-variant">Unverified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/characters/pierrot" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Route Guide</a>
                <a href="/endings/eternal-silence" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Eternal Silence Deep Dive</a>
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
