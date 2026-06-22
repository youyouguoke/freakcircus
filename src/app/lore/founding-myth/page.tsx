import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founding Myth — How The Circus Was Created & Project Continuity | Freak Circus Hub",
  description: "Complete guide to The Freak Circus founding myth. Covers Project Continuity, the medical experiment origins, and how the original performers became the current characters.",
  keywords: ["Founding Myth", "Project Continuity", "The Freak Circus lore", "medical experiment", "memory extraction"],
  alternates: {
    canonical: "https://freak-circus.com/lore/founding-myth",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // FOUNDING_MYTH
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Founding Myth
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            How The Freak Circus was created — from medical experiment to memory preservation system.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Founding Myth describes how The Freak Circus was created. According to The Doctor's medical files, the circus was founded after a medical experiment gone wrong — an attempt to preserve human consciousness after death. The original performers were test subjects, and the current characters are reconstructions of their memories. This origin story explains why the circus contains medical equipment, why characters reference events they should not remember, and why the architecture matches 1920s hospital layouts.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">In 1923, a medical facility called 'Project Continuity' began experiments in memory extraction and consciousness preservation. The goal was to create a system that could preserve a person's memories and personality after death, allowing them to 'live on' in a constructed environment. The original test subjects were performers — chosen because their highly emotional experiences created strong memory imprints. When the facility burned down in Year 3, the memory preservation system activated automatically, reconstructing the performers from their saved data.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. The Doctor's files reference 'Project Continuity' from 1923.
2. Patient records describe memory extraction procedures.
3. The circus architecture matches 1920s hospital layouts.
4. Character names match original patient IDs.
5. Medical equipment in The Doctor's Ward dates from the 1920s.
6. The reconstruction process explains why characters have conflicting memories.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• The Doctor: The project's lead researcher who became the circus's physician.
• All Characters: Reconstructions of the original test subjects.
• Null Performer: May be the project's director or an unrecorded test subject.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Doctor's Note: Reveals the full history of Project Continuity.
• Columbina's Truth: Suggests the reconstruction process is imperfect, creating memory loops.
• Corrupted Data: Contains references to 'Project Continuity v7.0' in unused files.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Medical Experiment Theory: The circus is a literal memory preservation system.
• Purgatorial Theory: The circus is a metaphysical space where souls perform to maintain existence.
• Digital Construct Theory: The entire game is a simulation, and Project Continuity is the in-universe explanation.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community debates whether Project Continuity is a literal scientific project or a metaphorical narrative device. The 'literal' camp points to medical files, equipment, and character IDs as evidence. The 'metaphorical' camp argues that the project's details are too fantastical to be real science. A third theory suggests the project is both — a real experiment that has been mythologized by the reconstructed characters, who do not fully understand their own origins.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: Was Project Continuity real?
A: Within the game's narrative, yes. The Doctor's files contain detailed records of the project.

Q: Are the current characters the original performers?
A: No. They are reconstructions created from the original performers' saved memories.

Q: Why do characters have conflicting memories?
A: The reconstruction process is imperfect. Each character was rebuilt from incomplete data, creating memory gaps and contradictions.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/lore" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Location</div>
                  <div className="font-bold text-foreground">Doctor's Ward →</div>
                  <div className="text-on-surface-variant text-sm">Where Project Continuity files are stored</div>
                </Link>
                <Link href="/endings/doctors-note" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Doctor's Note →</div>
                  <div className="text-on-surface-variant text-sm">Ending that reveals the full history</div>
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
