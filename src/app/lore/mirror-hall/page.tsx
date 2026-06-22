import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mirror Hall — Location Guide, Symbolism & Hidden Secrets | Freak Circus Hub",
  description: "Complete guide to the Mirror Hall in The Freak Circus. Covers how to find it, what the mirrors show, symbolism, and connections to routes and endings.",
  keywords: ["Mirror Hall", "The Freak Circus lore", "mirror symbolism", "hidden location", "Eternal Silence"],
  alternates: {
    canonical: "https://freak-circus.com/lore/mirror-hall",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // MIRROR_HALL
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Mirror Hall
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The most lore-rich location in The Freak Circus — where reflections show events from other routes and futures that haven't happened yet.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Mirror Hall is a hidden location in The Freak Circus that only appears under specific conditions. It contains seven mirrors, each showing events from different routes, future scenes, and occasionally the player's desktop. The Hall is considered the most lore-rich location in the game because it reveals information that cannot be found through normal gameplay.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Mirror Hall was constructed in Year 5 of the circus's timeline as part of the rebuilt facility. According to The Doctor's files, the mirrors were designed to show 'different versions of reality' — reflecting the project's goal of preserving multiple consciousness states simultaneously. The Hall's geometry does not match the circus's floor plan, suggesting it exists in a space that should be outside the building's boundaries.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. The Hall only appears after failing at least one route.
2. Contains 7 mirrors showing different route events.
3. The central mirror shows the player's desktop, breaking the fourth wall.
4. Mirror reflections change based on the number of completed endings.
5. Audio files contain breathing sounds not matching any character.
6. Some players report seeing a sixth performer in the mirrors.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Pierrot: Sees the player in mirrors instead of his own reflection.
• Columbina: The Hall is the primary setting for her route.
• The Doctor: Designed the mirrors as part of Project Continuity.
• Null Performer: Some theorists believe this entity is visible only in mirrors.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Eternal Silence: The Hall is the final location in this ending.
• Corrupted Data: Contains references to 'Mirror Loop #7' in unused files.
• Columbina's Truth: The fourth door in her hallway leads to a room of mirrors.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Mirror Identity: The mirrors show that the player is not the same person across routes.
• Replay Awareness: Characters who look in mirrors remember previous playthroughs.
• Purgatorial System: The Hall is a judgment room where performers see their past actions.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community debates whether the Mirror Hall is a physical location or a metaphysical space. The 'physical' camp points to its consistent geometry and file references. The 'metaphysical' camp argues that its impossible dimensions and fourth-wall-breaking properties prove it exists outside normal space. A third theory suggests the Hall is the player's own mind — the mirrors reflect their memories and expectations rather than objective reality.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: How do I find the Mirror Hall?
A: Fail at least one route, then replay any character's route. The Hall appears as a new option in Scene 7.

Q: What do the mirrors show?
A: Each mirror shows events from a different route. The central mirror shows your desktop.

Q: Is the Hall related to the Null Performer?
A: Some players report seeing a sixth figure in the mirrors. This may be the Null Performer or the player's own reflection.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/walkthroughs/pierrot-silent-route" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Route</div>
                  <div className="font-bold text-foreground">Pierrot Silent Route →</div>
                  <div className="text-on-surface-variant text-sm">Route where mirrors first appear</div>
                </Link>
                <Link href="/endings/eternal-silence" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Eternal Silence →</div>
                  <div className="text-on-surface-variant text-sm">Ending set in the Mirror Hall</div>
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
