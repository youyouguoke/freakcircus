import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Null Route Investigation — Unverified Corrupted Data & Theories | Freak Circus Hub",
  description: "Complete investigation of the Null Route in The Freak Circus. Covers datamined files, hex patterns, community theories, and why this route remains unverified.",
  keywords: ["Null Route", "Corrupted Data", "The Freak Circus unverified", "datamined", "hex dump", "null route investigation"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/null-route",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // NULL_ROUTE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Null Route Investigation
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The unverified corrupted route — found in game files but never legitimately unlocked.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Null Route is an unverified route found in unused game files by data miners in build 1.04. No player has legitimately unlocked this route, and its conditions remain unknown. When triggered through file manipulation, the screen displays raw hexadecimal data before the application crashes. The community is divided on whether this is a debug remnant, an intentionally hidden ARG element, or cut content from a planned true ending.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">What We Know</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• File name: ending_13_corrupted.dat — found in build 1.04, not present in 1.02
• Memory addresses referenced in crash logs do not match any known scene IDs
• Contains placeholder dialogue: 'No one is here. No one was ever here.'
• Map file shows empty corridors with no character sprites
• Soft-locks after 5 minutes of walking, then displays hex dump
• Crash dump saved to: /logs/crash_13.dat — contains references to ENDING_13_PTR</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hex Dump Analysis</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The hex dump shows standard ELF header patterns, suggesting it is not encrypted narrative content but a system crash. However, the ENDING_13_PTR reference suggests a pointer to external content that may have been part of a planned true ending. The placeholder dialogue ('No one is here') implies a narrative was intended, even if the implementation is incomplete.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Theories</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Three main theories exist about the Null Route:

1. Debug Remnant: The ending may be a debug tool left by developers. The ELF header patterns and crash behavior suggest this is not a finished narrative element.

2. ARG Element: The ENDING_13_PTR reference and placeholder dialogue suggest an alternate reality game that requires solving puzzles outside the game client.

3. Cut True Ending: Some players believe this was the intended true ending before being cut during development. The map file and placeholder dialogue suggest a complete narrative was planned.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Q: Has anyone unlocked this legitimately?
A: No. Despite six months of community attempts, no player has verified legitimate unlock conditions.

Q: Can you trigger it through file editing?
A: Yes, but this requires modifying save files and is not considered a legitimate unlock. The game crashes immediately after displaying hex data.

Q: Is it related to the Corrupted Data ending?
A: The community believes they are the same route, but this is unverified. The Corrupted Data ending may be what the Null Route was intended to unlock.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/endings/corrupted-data" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Corrupted Data →</div>
                  <div className="text-on-surface-variant text-sm">The unverified ending investigation</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Null Route Theory →</div>
                  <div className="text-on-surface-variant text-sm">Community theories about this route</div>
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
