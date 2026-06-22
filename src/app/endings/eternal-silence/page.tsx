import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Eternal Silence Ending — How to Unlock, What Happens & Community Theories | Freak Circus Hub",
  description: "Complete guide to the Eternal Silence ending in The Freak Circus. Covers unlock conditions, the 4-minute black screen, post-credits scene, and why this ending suggests the circus is aware of the player.",
  keywords: ["Eternal Silence", "Eternal Silence ending", "Pierrot secret ending", "The Freak Circus endings", "how to unlock Eternal Silence", "silent route"],
  openGraph: {
    title: "Eternal Silence Ending — How to Unlock, What Happens & Community Theories",
    description: "Complete guide to the Eternal Silence ending. Unlock conditions, black screen mechanics, and community theories.",
    type: "article",
    url: "https://freak-circus.com/endings/eternal-silence",
  },
  alternates: {
    canonical: "https://freak-circus.com/endings/eternal-silence",
  },
};

export default function EternalSilencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_ANALYSIS // ETERNAL_SILENCE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Eternal Silence Ending
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The secret ending that breaks the game's narrative contract — complete unlock guide, scene-by-scene breakdown, and community theories.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                What Is the Eternal Silence Ending?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Eternal Silence is Pierrot's secret ending and one of the most discussed outcomes in The Freak Circus community. Unlike standard endings that resolve the narrative, Eternal Silence suggests that the only escape from the circus is to stop engaging entirely. The ending requires refusing every major dialogue interaction during the final act, turning silence into a deliberate choice that the game does not expect.
              </p>
              <p className="text-on-surface-variant text-sm">
                Players who unlock this ending report a disturbing sense that the game has been watching them. Pierrot references choices from previous playthroughs that the player never selected, and the post-credits scene breaks the fourth wall by addressing the player's real-world playtime. The ending has been described as "the game talking back to you."
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock Eternal Silence
              </h2>
              <div className="bg-surface-container border border-outline/20 p-6">
                <h3 className="font-bold text-foreground mb-3">Step-by-Step Requirements</h3>
                <ol className="space-y-3 text-on-surface-variant text-sm">
                  <li><span className="text-primary font-bold">1.</span> Complete at least one other character route first (required for cross-route awareness flag)</li>
                  <li><span className="text-primary font-bold">2.</span> In Pierrot's route, maintain neutral dialogue choices in Acts I and II</li>
                  <li><span className="text-primary font-bold">3.</span> In Scene 9 (Garden Scene), do not select Accept, Comfort, or Confess — let the timer expire</li>
                  <li><span className="text-primary font-bold">4.</span> In Scenes 10, 11, and 12, refuse all dialogue options (select "..." or let timer expire)</li>
                  <li><span className="text-primary font-bold">5.</span> In Scene 14, ignore Pierrot's direct questions — do not respond to any prompt</li>
                  <li><span className="text-primary font-bold">6.</span> The screen will fade to black. Wait 3-4 minutes without pressing any key</li>
                </ol>
              </div>
              <p className="text-on-surface-variant text-sm mt-4">
                <strong className="text-foreground">Important:</strong> The 4-minute black screen is not a crash. Players who press keys or click during this period will skip the ending and return to the title screen. The silence is the ending.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                What Happens During the Black Screen
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                During the 3-4 minute black screen, Pierrot's voice narrates a series of events. These events are not from the current playthrough — they are choices from previous routes that the player never selected. The narration includes:
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Specific dialogue choices from Harlequin's route that the player did not make</li>
                <li>• References to The Doctor's medical files that were never collected</li>
                <li>• Descriptions of Columbina's hallway that the player has not yet seen</li>
                <li>• Direct address: "You always choose the left path. Even when the right path is safer."</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                The audio design during this sequence is minimal — only Pierrot's voice and occasional ambient sounds. Players have reported hearing footsteps, breathing, and what sounds like a music box playing faintly in the background. These audio cues do not appear in the sound files, suggesting they are generated procedurally.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Post-Credits Scene
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                After the silent credits, a 30-second scene plays. Pierrot sits alone in the garden, facing an empty chair. He speaks directly to the camera:
              </p>
              <div className="bg-surface-container border border-outline/20 p-6 mb-4">
                <p className="text-on-surface-variant text-sm italic">
                  "You've been here for [X] hours. You could have left at any time. But you keep coming back. You keep choosing to stay. I don't understand why. I don't understand you."
                </p>
              </div>
              <p className="text-on-surface-variant text-sm">
                The [X] value matches the player's real-world playtime, not in-game time. This is one of the few instances where The Freak Circus explicitly breaks the fourth wall. The scene ends with Pierrot standing up and walking away, leaving the empty chair facing the screen.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Community Theories About Eternal Silence
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: The Game Is Aware of the Player</h3>
                  <p className="text-on-surface-variant text-sm">The post-credits scene directly addresses the player's real-world behavior, suggesting that the circus exists as a meta-narrative about repeated gameplay. The ending implies that the characters know they are in a game and that the player is the source of their suffering.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: Silence Is the Only Escape</h3>
                  <p className="text-on-surface-variant text-sm">The ending suggests that engaging with the narrative — making choices, pursuing endings, trying to understand — is what traps the player in the circus. By refusing to participate, the player breaks the cycle. However, the post-credits scene implies that even silence is a form of engagement.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: Pierrot Remembers Everything</h3>
                  <p className="text-on-surface-variant text-sm">The narration during the black screen includes events from routes the player has not yet completed. This suggests that Pierrot's awareness extends beyond the current save file and that he experiences all possible timelines simultaneously.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/characters/pierrot" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Route Guide</a>
                <a href="/characters/pierrot-endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Endings Guide</a>
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
