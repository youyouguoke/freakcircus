import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Null Performer — Unverified Entity, Evidence & Theories | Freak Circus Hub",
  description: "Complete investigation of the Null Performer in The Freak Circus. Covers datamined references, community sightings, and theories about this unverified entity.",
  keywords: ["Null Performer", "The Freak Circus lore", "unverified entity", "datamined", "hidden character"],
  alternates: {
    canonical: "https://freak-circus.com/lore/null-performer",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // NULL_PERFORMER
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Null Performer
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The unverified entity referenced in 14 dialogue files but never confirmed — who watches from outside the narrative?
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Null Performer is an unverified entity referenced in 14 separate dialogue files but absent from all character rosters. It has no sprite, no voice file, and no name in the character database. Some investigators believe this entity controls route branching, while others suggest it represents the player or the game's director. The Null Performer is one of the most debated mysteries in The Freak Circus community.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Null Performer first appeared in community reports in 2025, when players began noticing background figures in screenshots. Data miners later found 14 dialogue references where characters mention 'the one who watches,' 'the empty costume,' or 'the sixth chair.' The entity has never been officially acknowledged by the developers, and some believe it is a cut character whose data was partially removed but whose references remain in the dialogue files.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. 14 dialogue references across 4 scenes.
2. Background figures in screenshots that do not match any character sprite.
3. Audio files containing breathing sounds at 12 BPM.
4. Unused files referencing 'Director' and 'Observer' roles.
5. The Null Route's empty corridors may be the Null Performer's 'stage.'</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• All Characters: Reference 'the one who watches' in certain dialogue branches.
• Pierrot: Describes the Null Performer as 'not one of us' in Loop 3+.
• Columbina: Her three-loop storyline implies she is aware of the entity.
• The Doctor: His files reference an 'Observer' who monitors the experiment.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Corrupted Data: The ending's empty corridors may be the Null Performer's domain.
• Null Route: The route with no characters may be the Null Performer's perspective.
• Columbina's Truth: The fourth door leads to a room where 'someone is always watching.'</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Observer Theory: The Null Performer is the game's director, monitoring the player's progress.
• Player Theory: The entity represents the player themselves, existing in the circus without a scripted role.
• Cut Character Theory: The Null Performer was a planned character whose implementation was abandoned.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community is divided on whether the Null Performer is real or a data artifact. The 'real' camp points to the consistent dialogue references and background sightings. The 'artifact' camp argues that the entity is a collection of unused assets that coincidentally create the illusion of a hidden character. A third faction suggests the Null Performer is an ARG element — a real-world puzzle that requires solving outside the game client.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: Has anyone seen the Null Performer?
A: Multiple players report background figures in screenshots, but no one has confirmed direct interaction.

Q: Is the Null Performer the same as the Director?
A: Possibly. The Director is referenced in unused files and ending credits, but never appears in the game.

Q: Can I unlock the Null Performer as a character?
A: No. Despite community attempts, no method has been found to make the entity interactable.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/walkthroughs/null-route" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Route</div>
                  <div className="font-bold text-foreground">Null Route →</div>
                  <div className="text-on-surface-variant text-sm">The corrupted route with no characters</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Observer Theory →</div>
                  <div className="text-on-surface-variant text-sm">Who watches from outside the narrative</div>
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
