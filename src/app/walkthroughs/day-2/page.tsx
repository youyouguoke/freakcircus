import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { PLAYTIME_LABEL } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "Day 2 Walkthrough | Freak Circus — Doctor, Jester & New Characters",
  description:
    "Day 2 walkthrough for The Freak Circus. Doctor, Jester, and Ticket Taker expansion. Tent content, Mirror Hall, Purple Tent puppet show, and Columbina backstory.",
  keywords: [
    "Freak Circus day 2",
    "day 2 walkthrough",
    "Doctor encounter",
    "Jester sighting",
    "Purple Tent",
    "Columbina backstory",
    "Mirror Hall",
  ],
  openGraph: {
    title: "Day 2 Walkthrough | Freak Circus — Doctor, Jester & New Characters",
    description:
      "Day 2 walkthrough. Doctor, Jester, Ticket Taker expansion. Tent content and Columbina backstory.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/day-2",
    siteName: "Freak Circus Hub",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/day-2",
  },
};

export default function Day2Page() {
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
            Day 2 Walkthrough
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Day 2 introduces three new characters — Doctor, Jester, and an expanded role for Ticket Taker. Tent-based content, Mirror Hall scenes, and the Columbina backstory revelation.
          </p>
          <div className="bg-surface-container border-2 border-primary/40 p-6 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-[JetBrains_Mono] text-xs text-primary">QUICK ANSWER</span>
            </div>
            <p className="text-foreground text-lg font-bold mb-2">
              Day 2 adds Doctor, Jester, and expands Ticket Taker.
            </p>
            <p className="text-on-surface-variant text-sm">
              Day 2 is the content update that introduced Doctor (circus physician), Jester (trickster/observer), and expanded Ticket Taker&apos;s role. Key content includes tent-based scenes, Mirror Hall appearances, and the Purple Tent puppet show that reveals Columbina&apos;s backstory.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Sources */}
      <section className="bg-surface py-8 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-on-surface-variant text-xs leading-relaxed">
            <strong>Sources:</strong> Consistent with /characters/doctor and /characters/jester pages · Multiple independent player reports · Cross-referenced with community playthroughs. Last verified: August 2026.
          </p>
          <p className="text-on-surface-variant text-xs leading-relaxed mt-2">
            The fact that Day 2 introduces Doctor, Jester, and Ticket Taker expansion is confirmed across multiple pages on this site and independent sources. Specific scene details come from community reports and have not been verified against game files line-by-line.
          </p>
        </div>
      </section>

      {/* Verified Core */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
            ✓ Verified — Confirmed New Characters
          </h2>
          <div className="bg-surface-container border border-primary/20 p-6 mb-6">
            <h3 className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-wider mb-3">
              Day 2 Character Additions
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Multiple independent sources confirm that Day 2 introduced three characters:
            </p>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>The Doctor</strong> — circus physician, appears in tent-based content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Jester</strong> — trickster/observer, appears in peripheral scenes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Ticket Taker</strong> — expanded role from Day 1 gatekeeper</span>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container border border-primary/20 p-6">
            <h3 className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-wider mb-3">
              Cross-Page Consistency
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              This information is consistent across:
            </p>
            <ul className="space-y-1 text-on-surface-variant text-sm mt-2">
              <li>• /characters/doctor — &quot;The Doctor is one of three characters added in the Day 2 update&quot;</li>
              <li>• /characters/jester — &quot;Day 2 Sightings &amp; Known Scenes&quot;</li>
              <li>• /ticket-taker — Ticket Taker appears in Day 2 content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Doctor Content */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Doctor — Day 2 Content
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Status: Unverified — specific scene details pending confirmation
          </p>
          <div className="bg-surface-container border border-outline/20 p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              The Doctor appears in tent-based horror scenes in Day 2 content. Whether The Doctor has a dedicated playable route with specific endings is unverified. Community members speculate about hidden mechanics, but no independent verification exists.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed mt-3">
              For the full character analysis, see the <Link href="/characters/doctor" className="text-primary hover:underline">Doctor character page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Jester Content */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Jester — Day 2 Sightings
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Status: Multi-source — multiple independent player reports
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Mirror Hall Appearance",
                status: "MULTI-SOURCE",
                desc: "Jester's reflection appears in the Mirror Hall independently of Jester being physically present. The reflection moves on a slight delay from the player character.",
              },
              {
                title: "UI Text Corruption",
                status: "MULTI-SOURCE",
                desc: "While Jester is on-screen, dialogue text occasionally displays scrambled characters or drops frames. This does not occur with other characters.",
              },
              {
                title: "Purple Tent — Puppet Show",
                status: "MULTI-SOURCE",
                desc: "A puppet show in the purple tent reveals backstory elements connected to Columbina. Jester appears to be the puppeteer. Can be missed if entering at a specific time.",
              },
            ].map((scene) => (
              <div key={scene.title} className="archive-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[Epilogue] text-sm font-bold text-foreground">
                    {scene.title}
                  </h3>
                  <span className="font-[JetBrains_Mono] text-[10px] text-on-surface-variant px-2 py-0.5 border border-outline/20">
                    {scene.status}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">{scene.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-surface-container border border-outline/20 p-4">
            <p className="text-on-surface-variant text-sm">
              ⚠️ The above content comes from multiple independent player reports and has not been verified against the current game build. For the full character analysis, see the <Link href="/characters/jester" className="text-primary hover:underline">Jester character page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Columbina Backstory */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Columbina Backstory — Revealed in Day 2
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Status: Multi-source — confirmed across multiple independent sources
          </p>
          <div className="bg-surface-container border border-primary/20 p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              The Purple Tent puppet show in Day 2 reveals key backstory elements about Columbina:
            </p>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li>• Columbina was Pierrot&apos;s former partner</li>
              <li>• Harlequin poisoned and killed Columbina</li>
              <li>• Her last words were &quot;save me&quot;, which Harlequin misinterpreted</li>
              <li>• The MC resembles Columbina, which is why Pierrot transfers his obsession</li>
            </ul>
            <p className="text-on-surface-variant text-xs mt-4">
              Sources: Multiple independent player reports, community playthroughs, consistent with /characters/columbina page
            </p>
          </div>
        </div>
      </section>

      {/* Ticket Taker */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Ticket Taker — Day 2 Expansion
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Status: Unverified — specific mechanics pending confirmation
          </p>
          <div className="bg-surface-container border border-outline/20 p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Ticket Taker&apos;s role expands in Day 2 content. Specific mechanics and scenes are pending verification. Community members have speculated about mirror-related interactions, but the exact details are unverified.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed mt-3">
              For the full character analysis, see the <Link href="/characters/ticket-taker" className="text-primary hover:underline">Ticket Taker page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
            FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What happens in Day 2?",
                a: "Day 2 introduces Doctor, Jester, and expands Ticket Taker's role. Known content includes Jester-related scenes (Mirror Hall reflection, UI text corruption, Purple Tent puppet show) and the Columbina backstory revelation. Specific scene-by-scene order is still being verified.",
              },
              {
                q: "How long does Day 2 take?",
                a: `Community reports estimate ${PLAYTIME_LABEL} for Day 1 + Day 2 combined. There is no separate verified timing for Day 2 alone.`,
              },
              {
                q: "Does The Doctor have a route in Day 2?",
                a: "Whether The Doctor has a dedicated playable route with specific endings is unverified. Community members speculate about hidden mechanics, but no independent verification exists. This is consistent with the Doctor character page.",
              },
              {
                q: "Is Jester the same as Ticket Taker?",
                a: "Community debate continues. Some theorists believe they are the same entity. Others argue they are distinct. No official confirmation exists either way. See the Jester and Ticket Taker character pages for the full discussion.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-surface-container border border-outline/20 p-6 group">
                <summary className="font-[Epilogue] text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform text-xl">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
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
            <Link href="/characters/doctor" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Doctor Character →</Link>
            <Link href="/characters/jester" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Jester Character →</Link>
            <Link href="/characters/ticket-taker" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Ticket Taker →</Link>
            <Link href="/characters/columbina" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Columbina →</Link>
            <Link href="/walkthroughs/day-1" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Day 1 →</Link>
            <Link href="/day-3" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Day 3 →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
