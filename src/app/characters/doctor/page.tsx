import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Doctor — Character Profile, Route Guide & Medical Files | Freak Circus Hub",
  description: "Complete The Doctor character analysis for The Freak Circus. Covers his circus physician persona, memory route unlock conditions, five hidden medical files, mirror connections, and precognitive dialogue.",
  keywords: ["The Doctor", "The Freak Circus Doctor", "Doctor route guide", "circus physician", "memory route", "medical files", "mirror connection", "White Room"],
  openGraph: {
    title: "The Doctor — Character Profile, Route Guide & Medical Files",
    description: "Complete The Doctor character analysis, memory route walkthrough, hidden medical files, and precognitive dialogue.",
    type: "article",
    url: "https://freak-circus.com/characters/doctor",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/doctor",
  },
};

export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            CHARACTER_PROFILE // DOCTOR
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Doctor
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The circus physician — clinical detachment, hidden medical files, and knowledge that arrives before its time.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is The Doctor?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Doctor serves as the circus physician in The Freak Circus, but his medical knowledge extends into territory that players find increasingly unsettling. His clinical, detached demeanor masks an awareness that seems to transcend the narrative — he references endings before they occur and demonstrates knowledge of events the player has not yet experienced.
              </p>
              <p className="text-on-surface-variant text-sm">
                His route requires finding five hidden medical files scattered across scenes, each revealing more about the circus's true purpose. The mirror connection only appears in Scene 9 after failing his route once. Most disturbing is his precognitive dialogue — in Scene 7, he describes the White Room ending with disturbing accuracy, three routes before it becomes accessible to the player.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                The Doctor Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Doctor's main route is the most disturbing in The Freak Circus and has the highest completion difficulty. Unlike other routes that focus on emotional choices, the Doctor route requires systematic investigation — players must find hidden objects, decode medical terminology, and recognize when his clinical observations break the fourth wall.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Doctor's Note," triggers when players collect at least three medical files and accept his final diagnosis in Scene 12. However, the route contains multiple soft-lock points where incorrect choices send the player back to Scene 1 with no explanation, suggesting the game is testing the player's persistence.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Memory Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Memory Route is The Doctor's secret path and reveals the connection between his medical knowledge and the circus's true nature. It requires finding all five hidden medical files and failing his main route once — the mirror connection in Scene 9 only appears after this failure condition.
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Find all 5 hidden medical files (locations: Scene 2 drawer, Scene 4 cabinet, Scene 6 floorboard, Scene 8 bookshelf, Scene 10 desk)</li>
                <li>• Fail the main route by refusing the diagnosis in Scene 12</li>
                <li>• Restart the route — the mirror connection appears in Scene 9</li>
                <li>• Scene 9 mirror scene contains a 6th medical file not listed in any guide</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                The Memory Route reveals that The Doctor's medical files are not about the characters — they are about the player. File 5 contains a psychological profile that matches the player's choice patterns, suggesting the game generates this file based on observed behavior.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hidden Medical Files & Precognitive Dialogue
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">The Five Medical Files</h3>
                  <p className="text-on-surface-variant text-sm">Each medical file contains a character profile written in clinical terminology. File 1 (Pierrot) describes "chronic dissociative episodes." File 2 (Harlequin) notes "rapid affective switching consistent with bipolar I." File 3 (Columbina) records "persecutory delusions with organized structure." File 4 (The Doctor himself) is blank except for a single line: "Subject is aware of observation." File 5 contains player behavioral analysis.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Scene 7 Precognition</h3>
                  <p className="text-on-surface-variant text-sm">In Scene 7, The Doctor describes the White Room ending with disturbing accuracy: "You will find yourself in a white room. No doors, no windows. You will wonder how you got there. You will wonder why you keep coming back." The White Room ending is not accessible until three routes later, and no other character references it.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Unused Voice Lines</h3>
                  <p className="text-on-surface-variant text-sm">Data miners discovered unused voice lines in build 1.04 where The Doctor speaks in a different voice — deeper, more aggressive, without the clinical detachment. These lines suggest he was originally designed as the primary antagonist, and the "circus physician" persona was added later in development.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                The Doctor Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Doctor's Note (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Collect at least 3 medical files and accept the diagnosis in Scene 12. The Doctor writes a prescription that the player cannot read — the text is corrupted. Post-credits, the prescription appears in the player's inventory in the next route.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">White Room (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Find all 5 medical files, trigger the mirror connection, and select "Ask about the white room" in Scene 12. The screen fades to white and remains so for 2 minutes. Audio contains breathing and medical equipment sounds. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Corrupted Diagnosis (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. The Doctor's sprite is replaced with a black silhouette. All dialogue is corrupted hex. No known unlock conditions — may require modified save file.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">All Endings Explained</a>
                <a href="/walkthroughs/doctor-memory-route" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Doctor Memory Route</a>
                <a href="/lore/mirror-hall" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Mirror Hall Lore</a>
                <a href="/theories" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Community Theories</a>
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
