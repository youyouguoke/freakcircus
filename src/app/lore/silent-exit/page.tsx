import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Silent Exit — Hidden Location, Ending Connection & Theories | Freak Circus Hub",
  description: "Complete guide to the Silent Exit in The Freak Circus. Covers how to find it, what it represents, and connections to the Eternal Silence ending.",
  keywords: ["Silent Exit", "The Freak Circus lore", "hidden location", "Eternal Silence", "fourth wall"],
  alternates: {
    canonical: "https://freak-circus.com/lore/silent-exit",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            LORE_GUIDE // SILENT_EXIT
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Silent Exit
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The door that leads outside the circus — but shows only darkness when opened.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Silent Exit is a hidden location that appears only in the Eternal Silence ending. It is described as a door that leads 'outside the circus' but shows only darkness when opened. Some players report hearing their own voice when approaching the Exit, and the door handle matches the player's mouse cursor. The Exit's frame contains carvings that match symbols from the Mirror Hall, suggesting a connection between these two hidden locations.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Historical Record</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Silent Exit first appeared in community reports in 2026, when players discovered the Eternal Silence ending. The Exit is not mentioned in any character dialogue or file — it exists only as a visual element in the ending. Data miners found an unused scene showing what is behind the Exit, but the file is corrupted and displays only static. The Exit's connection to the Mirror Hall suggests it may be a 'back door' to the same metaphysical space.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Evidence</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">1. Only appears in the Eternal Silence ending.
2. Opening the Exit causes the game to crash on some systems.
3. Audio files contain the player's system username spoken aloud.
4. The door handle matches the player's mouse cursor.
5. Frame carvings match symbols from the Mirror Hall.
6. Unused scene behind the Exit shows static — suggesting corruption or censorship.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Characters</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Pierrot: The Exit appears in his Silent Route ending.
• Columbina: Her three-loop storyline implies the Exit is a 'way out' that only appears after perfect alignment.
• Null Performer: Some theorists believe the Exit leads to the Null Performer's domain.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Endings</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Eternal Silence: The Exit is the final location in this ending.
• Corrupted Data: Contains references to 'Exit Loop #7' in unused files.
• Columbina's Truth: The fourth door may be connected to the Exit.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Death Theory: The Exit represents death within the narrative — the only way to leave the circus permanently.
• Real World Theory: The Exit leads to the 'real world' outside the game, breaking the fourth wall.
• Loop Theory: The Exit is a reset mechanism that returns the player to the beginning with modified memories.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Debate</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The community debates whether the Silent Exit is a genuine escape route or a trap. The 'escape' camp points to its description as leading 'outside the circus' and its connection to the Eternal Silence ending. The 'trap' camp argues that the darkness, crashes, and static suggest the Exit is not a safe passage. A third theory suggests the Exit is a choice — the player must decide whether to trust the darkness or remain in the circus.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: How do I find the Silent Exit?
A: Complete the Eternal Silence ending. The Exit appears in the final scene.

Q: What happens if I open the Exit?
A: The game crashes on some systems. On others, it displays static and returns to the title screen.

Q: Is the Exit related to the Mirror Hall?
A: Yes. The frame carvings match Mirror Hall symbols, suggesting they are connected locations.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/endings/eternal-silence" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Eternal Silence →</div>
                  <div className="text-on-surface-variant text-sm">Ending where the Exit appears</div>
                </Link>
                <Link href="/lore/mirror-hall" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Location</div>
                  <div className="font-bold text-foreground">Mirror Hall →</div>
                  <div className="text-on-surface-variant text-sm">Connected hidden location</div>
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
