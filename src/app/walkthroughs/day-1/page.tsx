import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 1 Walkthrough | Freak Circus — Pierrot Encounter, Cafe & Circus",
  description:
    "Day 1 walkthrough for The Freak Circus. Pierrot street encounter, café scene, circus entrance, and Day 1 ending. Based on official sources and community reports.",
  keywords: [
    "Freak Circus day 1",
    "day 1 walkthrough",
    "Pierrot encounter",
    "cafe scene",
    "circus entrance",
    "first day guide",
  ],
  openGraph: {
    title: "Day 1 Walkthrough | Freak Circus — Pierrot Encounter, Cafe & Circus",
    description:
      "Day 1 walkthrough for The Freak Circus. Pierrot street encounter, café scene, circus entrance.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/day-1",
    siteName: "Freak Circus Hub",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/day-1",
  },
};

export default function Day1Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="bg-surface min-h-[50vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface" />
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
              PARTIALLY VERIFIED
            </span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
              WALKTHROUGH
            </span>
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-6">
            Day 1 Walkthrough
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Day 1 of The Freak Circus — the player&apos;s first encounter with Pierrot, the café scene, and the beginning of his obsession. Based on official itch.io description and community reports.
          </p>
          <div className="bg-surface-container border-2 border-primary/40 p-6 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-[JetBrains_Mono] text-xs text-primary">QUICK ANSWER</span>
            </div>
            <p className="text-foreground text-lg font-bold mb-2">
              Day 1 is about meeting Pierrot.
            </p>
            <p className="text-on-surface-variant text-sm">
              The core of Day 1 is the player&apos;s first encounter with Pierrot — witnessing him being harassed, choosing to help, and becoming the target of his obsession. Day 1 ends when the player is kidnapped by Pierrot or leaves the circus for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Sources */}
      <section className="bg-surface py-8 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-on-surface-variant text-xs leading-relaxed">
            <strong>Sources:</strong> garula.itch.io/the-freak-circus (official) · Multiple independent player reports · Cross-referenced with community playthroughs. Last verified: August 2026.
          </p>
          <p className="text-on-surface-variant text-xs leading-relaxed mt-2">
            Day 1&apos;s overall flow is confirmed by the official itch.io description. Specific scene details and dialogue options come from multiple independent player reports and have not been verified against game files line-by-line.
          </p>
        </div>
      </section>

      {/* Verified Core */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
            ✓ Verified — Official Core
          </h2>
          <div className="bg-surface-container border border-primary/20 p-6 mb-6">
            <h3 className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-wider mb-3">
              Official itch.io Description
            </h3>
            <blockquote className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/40 pl-4 mb-4">
              &quot;You work at a café, and one day, on your way to work, fate leads you to cross paths with Pierrot. That&apos;s when his obsession begins. But he&apos;s not alone, his stage rival decides to join the game...&quot;
            </blockquote>
            <p className="text-on-surface-variant text-xs">
              Source: garula.itch.io/the-freak-circus
            </p>
          </div>
          <div className="bg-surface-container border border-primary/20 p-6">
            <h3 className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-wider mb-3">
              Official Comment — Day 1 Ending
            </h3>
            <blockquote className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/40 pl-4 mb-4">
              &quot;Day 1 ends when you are kidnapped by Pierrot or leave the circus for the first time.&quot;
            </blockquote>
            <p className="text-on-surface-variant text-xs">
              Source: itch.io official comments
            </p>
          </div>
          <div className="mt-6 space-y-2 text-on-surface-variant text-sm">
            <p><strong>Confirmed facts:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Day 1 core = player meets Pierrot, his obsession begins</li>
              <li>Harlequin enters as Pierrot&apos;s &quot;stage rival&quot;</li>
              <li>Day 1 ends: kidnapped by Pierrot OR leave circus</li>
              <li>Doctor does NOT appear in Day 1 (confirmed Day 2 addition)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Timeline
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Scene order based on multiple independent player reports. Specific dialogue and exact scene boundaries may vary.
          </p>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {[
              {
                time: "Morning",
                title: "Street — Pierrot Encounter",
                desc: "Player is on their way to work. Witnesses Pierrot being harassed by passersby. Choice: help him or walk away.",
                status: "Multi-source",
              },
              {
                time: "↓",
                title: "Café",
                desc: "If player helped Pierrot, he follows to the café. Brief interaction — Pierrot indicates he cannot speak during performances. Thanks the player.",
                status: "Multi-source",
              },
              {
                time: "↓",
                title: "Home",
                desc: "Player closes the café and goes home. A figure (possibly Pierrot) is seen outside the window. A dream sequence follows — Pierrot expresses his obsession.",
                status: "Community report",
              },
              {
                time: "↓",
                title: "Circus Entrance",
                desc: "Player arrives at the circus with a ticket. Ticket Taker is at the entrance, checking tickets and acting as gatekeeper.",
                status: "Multi-source",
              },
              {
                time: "↓",
                title: "Tents",
                desc: "Player can explore different colored tents. Different tents contain different characters and story线索.",
                status: "Community report",
              },
              {
                time: "↓",
                title: "Pierrot's Performance",
                desc: "Player watches Pierrot perform in one of the tents.",
                status: "Community report",
              },
              {
                time: "↓",
                title: "Branch Point",
                desc: "Whether the player accepts food from the circus affects the outcome. One path leads to being drugged/kidnapped, connecting to Day 2.",
                status: "Community report",
              },
              {
                time: "Night",
                title: "Day 1 Ends",
                desc: "Player is kidnapped by Pierrot OR leaves the circus voluntarily. This connects to Day 2 content.",
                status: "Official",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 bg-primary rounded-full" />
                <span className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-widest block mb-1">
                  {step.time}
                </span>
                <h3 className="text-foreground text-sm font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-1">
                  {step.desc}
                </p>
                <span className="text-on-surface-variant text-xs">
                  Status: {step.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
            Characters Appearing in Day 1
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Pierrot",
                role: "Core character — Day 1 protagonist",
                desc: "The player's first encounter with Pierrot is the central event of Day 1. His obsession begins here.",
                href: "/characters/pierrot",
                status: "Confirmed (official)",
              },
              {
                name: "Harlequin",
                role: "Pierrot's stage rival",
                desc: "Enters as Pierrot's competitor. The official description mentions 'his stage rival decides to join the game.'",
                href: "/characters/harlequin",
                status: "Confirmed (official)",
              },
              {
                name: "Ticket Taker",
                role: "Circus entrance gatekeeper",
                desc: "Appears at the circus entrance to check tickets. Not in the café scene.",
                href: "/characters/ticket-taker",
                status: "Multi-source",
              },
            ].map((char) => (
              <Link
                key={char.name}
                href={char.href}
                className="archive-card group hover:border-circus-red/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {char.name}
                  </h3>
                  <span className="font-[JetBrains_Mono] text-[10px] text-on-surface-variant px-2 py-0.5 border border-outline/20">
                    {char.status}
                  </span>
                </div>
                <p className="text-primary text-xs mb-2">{char.role}</p>
                <p className="text-on-surface-variant text-sm">{char.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 bg-surface-container border border-outline/20 p-4">
            <p className="text-on-surface-variant text-sm">
              <strong>Note:</strong> The Doctor does NOT appear in Day 1. The Doctor is one of three characters added in the Day 2 update, appearing in tent-based content alongside Jester and Ticket Taker. This is confirmed on the <Link href="/characters/doctor" className="text-primary hover:underline">Doctor character page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Unverified */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
            ⚠️ Unverified — Pending Confirmation
          </h2>
          <div className="space-y-4">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[JetBrains_Mono] text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                Specific Dialogue Options
              </h3>
              <p className="text-on-surface-variant text-sm">
                The exact dialogue choices (e.g., &quot;Ask / Ignore / Stay Silent&quot;) and their specific flag mechanics have not been verified against the game file. Community reports describe general choice directions, but the exact text and outcomes are unconfirmed.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[JetBrains_Mono] text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                Dream Sequence Content
              </h3>
              <p className="text-on-surface-variant text-sm">
                Multiple players report a dream sequence after the home scene, but the exact content and whether it varies based on choices is unverified.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[JetBrains_Mono] text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                Food/Branch Point Details
              </h3>
              <p className="text-on-surface-variant text-sm">
                Community reports mention accepting food from the circus as a branch point, but the exact mechanics and all possible outcomes are unverified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Related Guides
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/characters/pierrot" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Pierrot Character →</Link>
            <Link href="/characters/harlequin" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Harlequin Character →</Link>
            <Link href="/characters/ticket-taker" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Ticket Taker →</Link>
            <Link href="/walkthroughs/day-2" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Day 2 Walkthrough →</Link>
            <Link href="/endings" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">All Endings →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
