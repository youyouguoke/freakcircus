import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doctor Memory Route Guide — Hidden Files & Doctor Note | Freak Circus Hub",
  description: "Complete walkthrough for The Doctor's Memory Route in The Freak Circus. Covers all 5 hidden medical files, mirror connection, and how to unlock the Doctor Note ending.",
  keywords: ["Doctor route guide", "Doctor Memory Route", "Doctor Note", "The Freak Circus walkthrough", "hidden medical files"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/doctor-memory-route",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // DOCTOR_MEMORY
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Doctor Memory Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Requires collecting 5 hidden medical files across multiple playthroughs.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">The Doctor's Memory Route is a file-collection route that requires finding 5 hidden medical files scattered across scenes. The files reference experiments, patient records, and the founding myth of the circus. The route requires completing the Doctor's Main Route first, then replaying to find the files. The mirror connection in Scene 9 only appears after failing the route once, making this one of the most demanding routes to unlock.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Complete Doctor Main Route
• Collect 5 hidden medical files across scenes
• Scene 9 mirror must be visible (requires failing Doctor route once)
• Files 3 and 5 require cross-route awareness flags
• Estimated playtime: 4-5 hours (with replays)</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Step-by-Step Guide</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Act I — The Examination (Scenes 1-4): Standard introduction. The Doctor examines you with clinical detachment. No special choices required in this act.

Act II — The Records (Scenes 5-8): File collection begins. File 1 is behind the curtain in the examination room (Scene 5). File 2 is in the drawer labeled "DISCARDED" (Scene 6). File 3 requires failing the route once to unlock — it appears in Scene 7 only after a failed playthrough.

Act III — The Mirror (Scenes 9-12): The mirror connection appears in Scene 9 after failing the route once. Examining the mirror reveals File 4's location. File 5 is hidden in the patient's belongings in Scene 11.

Finale (Scene 13-14): With all 5 files collected, The Doctor's dialogue changes. He reveals the circus was founded after a medical experiment gone wrong.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hidden Triggers</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Memory Route contains two hidden triggers:

1. Fail the route once: The mirror in Scene 9 only appears after a failed playthrough. This is not documented in the game and was discovered through community testing.

2. Cross-route awareness: Files 3 and 5 require completing other character routes first. The game checks a hidden flag at offset 0x4A20 to determine if these files should appear.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Ending Outcome</h2>
              <p className="text-on-surface-variant text-sm">The Doctor's Note ending shows The Doctor writing in a medical journal. The camera zooms in on the page, revealing patient records for all four characters — including entries dated before the circus existed. The final image is a photograph of the original performers, who look identical to the current characters. The Doctor's voiceover says: "They don't remember. But I do." This ending suggests the current characters are replacements or reconstructions of the original performers.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/endings/doctors-note" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Doctor's Note →</div>
                  <div className="text-on-surface-variant text-sm">The secret ending for this route</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Doctor Created Circus →</div>
                  <div className="text-on-surface-variant text-sm">Community theory about medical experiments</div>
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
