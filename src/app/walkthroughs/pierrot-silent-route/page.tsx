import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pierrot Silent Route Guide — Hidden Triggers & Eternal Silence | Freak Circus Hub",
  description: "Complete walkthrough for Pierrot's Silent Route in The Freak Circus. Covers silence mechanics, replay requirements, hidden triggers, and how to unlock the Eternal Silence ending.",
  keywords: ["Pierrot Silent Route", "silent route guide", "Eternal Silence", "The Freak Circus walkthrough", "hidden triggers"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/pierrot-silent-route",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // PIERROT_SILENT
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Pierrot Silent Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The hidden replay-aware route — requires refusing all dialogue for three consecutive scenes.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Silent Pierrot Route is the most discussed hidden route in The Freak Circus. It requires avoiding all direct emotional responses during Acts II and III, then replaying the route 3-5 times to unlock full content. The route becomes aware of previous playthroughs after the third loop, with Pierrot referencing events the player never selected. This route unlocks the Eternal Silence ending, which is considered one of the game's most disturbing conclusions.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Complete Pierrot Main Route once
• Fail Harlequin True Route (select all aggressive options)
• Remain silent in 3+ consecutive scenes in Act II
• Replay the route 3-5 times for full content
• Estimated playtime: 4-6 hours (with replays)</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Step-by-Step Guide</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Act I — The Garden (Scenes 1-4): Standard introduction. Choose any dialogue options — the silence mechanic does not activate until Act II.

Act II — The Performance (Scenes 5-8): This is where the silence mechanic begins. Refuse ALL dialogue options for three consecutive scenes. The game will display a warning: 'You have chosen not to respond.' Continue refusing.

Act III — The Confession (Scenes 9-12): By this point, certain dialogue options will have disappeared. Pierrot's dialogue changes to reference your silence. In Scene 11, he asks: 'You said nothing last time, too. Do you think I don't remember?'

Finale (Scene 13-14): The ending depends on your loop count. First loop: neutral ending. Third loop: Eternal Silence ending with full narration.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hidden Triggers</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Silent Route contains three hidden triggers:

1. Silence in 3+ consecutive scenes: Required to unlock the route. The game tracks this using a hidden counter at offset 0x4A20 in the save file.

2. Fail Harlequin True Route: This cross-route requirement is not documented in the game. Players discovered it through community testing in 2025.

3. Third loop awareness: After completing the Silent Route twice, Pierrot's dialogue in the third loop references events from the first two loops that the player never selected.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Ending Outcome</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Eternal Silence ending shows a 4-minute black screen with narration that is not found in the game's script files. Post-credits, a single scene shows Pierrot sitting alone in the White Room, looking directly at the camera. He says: 'You were here before. You will be here again.' The game then displays the player's real-world playtime and asks: 'How many times have you done this?' This ending is considered the most disturbing in the game because it breaks the fourth wall explicitly.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/walkthroughs/pierrot-main-route" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Previous Route</div>
                  <div className="font-bold text-foreground">Pierrot Main Route</div>
                  <div className="text-on-surface-variant text-sm">The standard introduction route</div>
                </Link>
                <Link href="/endings/eternal-silence" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Eternal Silence →</div>
                  <div className="text-on-surface-variant text-sm">The secret ending for this route</div>
                </Link>
                <Link href="/theories/pierrot-remembers-routes" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Pierrot Remembers Routes →</div>
                  <div className="text-on-surface-variant text-sm">Community theory about replay awareness</div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
