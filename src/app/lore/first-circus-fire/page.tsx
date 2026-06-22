import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Circus Fire — What Happened, Evidence & Theories | Freak Circus Hub",
  description: "Complete analysis of the First Circus Fire in The Freak Circus. Covers conflicting records, newspaper fragments, character testimony, and community theories about this central mystery.",
  keywords: ["First Circus Fire", "The Freak Circus lore", "circus fire", "timeline anomaly", "Project Continuity"],
  alternates: {
    canonical: "https://freak-circus.com/lore/first-circus-fire",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // FIRST_FIRE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The First Circus Fire
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The central mystery of The Freak Circus — did the fire happen, or is it a memory of something that never occurred?
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The First Circus Fire is the central mystery of The Freak Circus's backstory. According to recovered records, the original circus burned down decades before the current timeline, killing all original performers. However, conflicting evidence suggests the fire may never have happened — or that it happens repeatedly in a loop. The fire is referenced in multiple routes, endings, and theories, making it the most interconnected lore element in the game.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Newspaper fragments found in 3 scenes reference a fire in 1923, 1954, and 1987 simultaneously. No burn marks appear on current circus architecture. The Doctor's files describe 'reconstruction' rather than 'recovery,' suggesting the circus was rebuilt rather than repaired after the fire. Character dialogue references the fire from different historical perspectives — Pierrot describes it as a recent event, while The Doctor treats it as ancient history.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. Newspaper fragments: Three different dates for the same fire.
2. Architecture analysis: Current circus matches 1920s hospital layouts, not 1950s circus designs.
3. Character testimony: Pierrot, Harlequin, and The Doctor all describe the fire differently.
4. Medical files: The Doctor's records describe 'reconstruction' procedures rather than burn treatment.
5. Data mining: Unused files reference 'Fire Loop #7' and 'Iteration 7 Burn Event.'</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• The Doctor: His medical files contain the most detailed records about the fire and reconstruction.
• Pierrot: References the fire as a recent event in his route, suggesting he experiences time differently.
• Columbina: Her three-loop storyline implies the fire happens repeatedly, not just once.
• Null Performer: Some theorists believe this entity caused the fire or is the only survivor.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Doctor's Note: Reveals the fire was part of Project Continuity's memory extraction process.
• Columbina's Truth: Suggests the fire is a loop event that resets the circus's timeline.
• Corrupted Data: Contains references to 'Fire Loop #7' in unused files.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• The Fire Wasn't Real: The fire is a metaphor for memory erasure, not a physical event.
• Multiple Timeline Theory: The fire happened in some timelines but not others.
• Purgatorial Theory: The fire is a punishment mechanism that resets the circus when performers fail.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community is divided on whether the fire is a literal event or a narrative device. The 'literal' camp points to newspaper fragments and character dialogue as evidence. The 'metaphorical' camp argues that the conflicting dates and lack of physical evidence prove the fire is symbolic. A third faction suggests the fire is both — a real event that has been mythologized through repeated retelling across loops.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: When did the fire happen?
A: Conflicting records suggest 1923, 1954, and 1987 simultaneously. The most accepted theory is that the fire happens in every timeline loop.

Q: Did anyone die in the fire?
A: No bodies were recovered, yet all performers returned for the next show. This suggests the fire does not kill in the traditional sense.

Q: Is the fire related to Project Continuity?
A: Yes. The Doctor's files describe the fire as part of the memory extraction process, suggesting it was deliberately caused.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/lore/mirror-hall" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Location</div>
                  <div className="font-bold text-foreground">Mirror Hall →</div>
                  <div className="text-on-surface-variant text-sm">Where fire memories are reflected</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Fire Wasn't Real Theory →</div>
                  <div className="text-on-surface-variant text-sm">Why the fire may be metaphorical</div>
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
