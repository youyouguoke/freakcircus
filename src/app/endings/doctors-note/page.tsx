import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Doctor's Note Ending — How to Unlock, Requirements & Lore | Freak Circus Hub",
  description: "Complete guide to The Doctor's Note ending in The Freak Circus. Covers the 5 hidden medical files, mirror connection, and why this ending suggests The Doctor knows more than he reveals.",
  keywords: ["Doctor's Note", "The Doctor ending", "The Freak Circus endings", "hidden medical files", "secret ending"],
  alternates: {
    canonical: "https://freak-circus.com/endings/doctors-note",
  },
};

export default function DoctorsNotePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_GUIDE // DOCTORS_NOTE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Doctor's Note
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The secret ending for The Doctor's route — requires finding 5 hidden medical files across multiple playthroughs.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                The Doctor's Note is the secret ending for The Doctor's route and one of the most disturbing conclusions in The Freak Circus. It requires finding five hidden medical files scattered across scenes — files that reference experiments, patient records, and the founding myth of the circus. The ending reveals that The Doctor's medical knowledge extends far beyond carnival medicine, and that he may have been involved in the circus's creation.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• Find all 5 hidden medical files before the final encounter</li>
                <li>• File 1: Scene 3 — behind the curtain in the examination room</li>
                <li>• File 2: Scene 5 — in the drawer labeled "DISCARDED"</li>
                <li>• File 3: Scene 7 — requires failing the route once to unlock</li>
                <li>• File 4: Scene 9 — appears only after viewing the mirror connection</li>
                <li>• File 5: Scene 11 — hidden in the patient's belongings</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Walkthrough</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Doctor's route requires careful exploration of each scene. Medical files are not marked — they appear as background objects that can be examined. The third file only appears after failing the route once, suggesting the game expects players to replay. The fourth file requires viewing the mirror connection in Scene 9, which only appears after completing another character's route first.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Lore Meaning</h2>
              <p className="text-on-surface-variant text-sm">
                The Doctor's Note reveals that the circus was founded after a medical experiment gone wrong. The files reference a "First Circus Fire" that killed the original performers, and suggest that the current characters are replacements or reconstructions. The ending implies that The Doctor is not just a circus physician but the keeper of the circus's darkest secrets.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Theory</h2>
              <p className="text-on-surface-variant text-sm">
                The community theory suggests that The Doctor created the circus as a way to preserve the original performers' memories. The medical files describe a process of "memory extraction" that allows the circus to recreate performers who have died. This explains why characters reference events from previous playthroughs — the circus is not just a location but a memory preservation system.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Can you find all files in one playthrough?</h3>
                  <p className="text-on-surface-variant text-sm">No. File 3 requires failing the route once, and File 4 requires completing another route first. The game expects multiple playthroughs.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">What happens if you miss a file?</h3>
                  <p className="text-on-surface-variant text-sm">You get the standard ending instead. The game does not warn you about missing files — you must discover them through exploration.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
