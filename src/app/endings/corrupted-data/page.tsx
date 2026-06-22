import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Corrupted Data Ending — What We Know, File Analysis & Theories | Freak Circus Hub",
  description: "Complete analysis of the Corrupted Data ending in The Freak Circus. Covers data mining discoveries, hex patterns, crash logs, and community theories about this unverified ending.",
  keywords: ["Corrupted Data", "The Freak Circus endings", "unverified ending", "data mining", "hex dump", "crash analysis"],
  alternates: {
    canonical: "https://freak-circus.com/endings/corrupted-data",
  },
};

export default function CorruptedDataPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_ANALYSIS // CORRUPTED_DATA
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Corrupted Data
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The unverified ending found in unused game files — complete data mining analysis and community theories.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                Corrupted Data is an unverified ending found in unused game files by data miners in build 1.04. No player has legitimately unlocked this ending, and its conditions remain unknown. When triggered through file manipulation, the screen displays raw hexadecimal data before the application crashes. The community is divided on whether this is a debug remnant, an intentionally hidden ARG element, or cut content from a planned true ending.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">What We Know</h2>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• File name: ending_13_corrupted.dat — found in build 1.04, not present in 1.02</li>
                <li>• Memory addresses referenced in crash logs do not match any known scene IDs</li>
                <li>• Contains placeholder dialogue: "No one is here. No one was ever here."</li>
                <li>• Map file shows empty corridors with no character sprites</li>
                <li>• Soft-locks after 5 minutes of walking, then displays hex dump</li>
                <li>• Crash dump saved to: /logs/crash_13.dat — contains references to ENDING_13_PTR</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hex Dump Analysis</h2>
              <div className="bg-surface-container border border-outline/20 p-6">
                <div className="font-[JetBrains_Mono] text-xs text-primary space-y-1">
                  <div>7F 45 4C 46 02 01 01 00 00 00 00 00 00 00 00 00</div>
                  <div>03 00 3E 00 01 00 00 00 C0 1A 00 00 00 00 00 00</div>
                  <div>40 00 00 00 00 00 00 00 00 20 03 00 00 00 00 00</div>
                  <div>FF FF FF FF 00 00 00 00 — ENDING_13_PTR</div>
                  <div>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00</div>
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-blood mt-4">
                  MEMORY_CORRUPTION_DETECTED
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant space-y-1 mt-2">
                  <div>[00:14:22] Scene load initiated: unknown_id</div>
                  <div>[00:14:23] WARNING: Character manifest empty</div>
                  <div>[00:14:23] WARNING: Dialogue bank null</div>
                  <div>[00:14:24] FATAL: Render target invalid</div>
                  <div>[00:14:24] Crash dump saved to: /logs/crash_13.dat</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Theories</h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: Debug Remnant</h3>
                  <p className="text-on-surface-variant text-sm">The ending may be a debug tool left in the game files by developers. The hex dump shows standard ELF header patterns, suggesting it is not encrypted narrative content but a system crash.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: ARG Element</h3>
                  <p className="text-on-surface-variant text-sm">The ending may be part of an alternate reality game that requires solving puzzles outside the game client. The ENDING_13_PTR reference suggests a pointer to external content.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Theory: Cut True Ending</h3>
                  <p className="text-on-surface-variant text-sm">Some players believe Corrupted Data was the intended true ending before being cut during development. The placeholder dialogue and map file suggest a complete narrative was planned.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Has anyone unlocked this legitimately?</h3>
                  <p className="text-on-surface-variant text-sm">No. Despite six months of community attempts, no player has verified legitimate unlock conditions.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Can you trigger it through file editing?</h3>
                  <p className="text-on-surface-variant text-sm">Yes, but this requires modifying save files and is not considered a legitimate unlock. The game crashes immediately after displaying hex data.</p>
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
