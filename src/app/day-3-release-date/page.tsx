import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freak Circus Day 3 Release Date (2026) | Official Status & Development Timeline",
  description:
    "Is Freak Circus Day 3 out yet? No — Day 3 is not confirmed as playable. Check the official roadmap status, development timeline, verified community signals, and what to do while waiting.",
  keywords: [
    "Freak Circus Day 3 release date",
    "Freak Circus v0.3",
    "Day 3 release",
    "Freak Circus update",
    "Day 3 confirmed",
    "Freak Circus development",
    "Day 3 status",
    "Freak Circus roadmap",
  ],
  openGraph: {
    title: "Freak Circus Day 3 Release Date (2026) | Official Status & Development Timeline",
    description:
      "Is Freak Circus Day 3 out yet? No — Day 3 is not confirmed as playable. Official roadmap status, development timeline, and verified signals.",
    type: "article",
    url: "https://freak-circus.com/day-3-release-date",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Day 3 Release Date (2026) | Official Status & Development Timeline",
    description:
      "Is Freak Circus Day 3 out yet? No — Day 3 is not confirmed as playable. Official status and timeline.",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-3-release-date",
  },
};

const faqData = [
  {
    q: "When is the Freak Circus Day 3 release date?",
    a: "No official release date has been announced. The developer has not provided a specific date, beta access window, or playable build for Day 3.",
  },
  {
    q: "Is Day 3 confirmed?",
    a: "Day 3 is in active development — confirmed by the developer's public roadmap and weekly blog updates. However, \"in development\" is not the same as \"released\" or \"date announced.\"",
  },
  {
    q: "What is the latest development update?",
    a: "As of August 2026, the developer's roadmap marks script writing, script revision, and older code/bug fixes as complete. The next milestone is beginning programming for the update. A July 24 blog post reported café-scene programming progress.",
  },
  {
    q: "Can I play Day 3 now?",
    a: "No. There is no public Day 3 build, beta, or early access. The current public version is v0.2 (Prototype). Any site claiming to offer a Day 3 download, APK, or leaked build is unverified and potentially unsafe.",
  },
  {
    q: "Will my saves carry over to Day 3?",
    a: "The developer has not confirmed save compatibility details. Based on typical visual novel practices, saves may carry over, but this is not guaranteed.",
  },
  {
    q: "What content will Day 3 include?",
    a: "No official content list has been published. Community speculation includes new endings, expanded character routes, and the Ticket Taker storyline — but none of this is confirmed.",
  },
  {
    q: "Are YouTube Day 3 videos real?",
    a: "No. As of August 2026, no public Day 3 build exists. YouTube videos claiming to show Day 3 content, leaks, or unlocked scenes use fabricated, modded, or speculative content.",
  },
  {
    q: "What should I do while waiting for Day 3?",
    a: "Play the current v0.2 build. Explore all endings (8+ confirmed), try different character routes, read the lore archive, and save before every major choice. Multi-run awareness is built into the game.",
  },
];

const timelineEvents = [
  {
    date: "Early 2025",
    signal: "Official itch.io page states the story continues for one more in-game day, still in development",
    source: "Official itch.io listing",
    status: "Official — confirms development direction",
  },
  {
    date: "Mid 2025",
    signal: "Community discussion grows; players begin asking about Day 3 in itch.io comments and on social platforms",
    source: "itch.io comments, Reddit, Tumblr",
    status: "Community observation — not a release signal",
  },
  {
    date: "Late 2025",
    signal: "Creator-linked notes mention progress on the new update script",
    source: "Creator Tumblr",
    status: "Progress signal — not a public build or date",
  },
  {
    date: "Early 2026",
    signal: "Creator confirms the new-update script is finished; code fixing and minor-bug cleanup are underway",
    source: "Creator Tumblr / community report",
    status: "Progress signal — stronger than no news, but not a release date",
  },
  {
    date: "Mid 2026",
    signal: "YouTube videos and Shorts use Day 3 leak or unlocked scene titles",
    source: "YouTube",
    status: "Unverified community content — not proof of a playable build",
  },
  {
    date: "2026-07-08",
    signal: "Official itch.io page, devlog, and creator Tumblr checked. itch.io still shows public v0.2 files; latest visible devlog item is a Chinese language update, not a Day 3 release notice",
    source: "Official itch.io + devlog + creator Tumblr",
    status: "No official public Day 3 build confirmed",
  },
  {
    date: "2026-07-10",
    signal: "Official TFC Blog says development for the next update is underway after code cleanup; first weekly Day 3 development update available on Patreon",
    source: "Official TFC Blog",
    status: "Confirmed development progress — not a playable-build announcement",
  },
  {
    date: "2026-07-17",
    signal: "Public weekly update says work is still near the beginning of the Day 3 script, with several new sprites added, two backgrounds updated, and a long coffee-shop scene in progress",
    source: "Official TFC Blog",
    status: "Confirmed public development detail — not a playable-build announcement",
  },
  {
    date: "2026-07-24",
    signal: "Public weekly update says a good portion of the café scene has already been programmed; a few simple sprites are still needed, temporary placeholders may be used, and those sprites may be completed after beta testing",
    source: "Official TFC Blog",
    status: "Confirmed programming progress — not a public beta or release date",
  },
  {
    date: "Checked 2026-08-03",
    signal: "Creator roadmap checklist marks script writing, script revision, and older code/bug fixes complete; \"Begin programming the update\" is the next unchecked milestone",
    source: "Creator Tumblr roadmap",
    status: "Confirmed milestone checklist — progress only, not a release or date",
  },
];

export default function Day3ReleaseDatePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero + Quick Answer */}
      <section className="bg-surface min-h-[50vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface" />
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">STATUS CHECK</span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">FAN-MAINTAINED</span>
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-6">
            Day 3 Release Date
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Is Freak Circus Day 3 out yet? Everything we know from official sources, developer roadmaps, and verified community signals.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-surface-container border-2 border-primary/40 p-6 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-[JetBrains_Mono] text-xs text-primary">QUICK ANSWER</span>
            </div>
            <p className="text-foreground text-lg font-bold mb-2">
              No. Day 3 is not publicly confirmed as playable yet.
            </p>
            <p className="text-on-surface-variant text-sm">
              No official release date has been announced. The developer has not provided a specific date, beta access window, or playable build. The current public version remains v0.2 (Prototype).
            </p>
          </div>
        </div>
      </section>

      {/* Current Status Table */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">Current Status</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-outline/20">
              <tbody>
                {[
                  { field: "Released?", value: "Not officially released yet" },
                  { field: "Latest progress source checked", value: "2026-08-03 — creator roadmap checklist plus official TFC Blog July 24 weekly update" },
                  { field: "Official source reading", value: "Roadmap: script writing complete, script revision complete, older code/bug fixes complete, with programming as the next unchecked milestone. July 24 post: café-scene programming progress was also shown" },
                  { field: "Confirmed", value: "Development is active. A progress checklist or weekly update is not a playable-build, public-beta, or release-date announcement" },
                  { field: "Unconfirmed", value: "Exact release date, full route changes, ending impact, Chapter 3 wording, public build timing, APKs, mirrors, and reposted downloads" },
                ].map((row) => (
                  <tr key={row.field} className="border-b border-outline/10">
                    <td className="p-4 text-foreground font-bold bg-surface-container/50 whitespace-nowrap">{row.field}</td>
                    <td className="p-4 text-on-surface-variant">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to Do While Waiting */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">No Date Yet? Choose What to Do Next</h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Most visitors land here for one answer: Day 3 is not publicly confirmed as playable yet. Don&apos;t keep hunting rumor pages — pick the action that matches your goal.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/play-online" className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">PLAY NOW</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">Play the Current Build</h3>
              <p className="text-on-surface-variant text-sm">Play the official v0.2 build (Day 1 &amp; Day 2) through the official source route. Avoid APKs, mirrors, and reposted downloads.</p>
            </Link>
            <Link href="/endings" className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">COMPLETE</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">Unlock All Endings</h3>
              <p className="text-on-surface-variant text-sm">8+ confirmed endings across all routes. Some require replay awareness and cross-route dependencies. Save before every major choice.</p>
            </Link>
            <Link href="/walkthroughs/save-guide" className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">PREPARE</div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">Set Up Save Files</h3>
              <p className="text-on-surface-variant text-sm">Create separate saves for each route. The game tracks your history using a hidden counter — multi-run awareness is built in.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">Timeline of Public Day 3 Signals</h2>
          <p className="text-on-surface-variant text-sm mb-8">
            This timeline tracks creator-linked and community-observed signals about Day 3 progress. Each entry is a public signal, not a release confirmation.
          </p>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 bg-primary rounded-full" />
                <span className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-widest block mb-1">
                  {event.date}
                </span>
                <h3 className="text-foreground text-sm font-bold mb-1">{event.signal}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-on-surface-variant text-xs">Source: {event.source}</span>
                  <span className="text-on-surface-variant text-xs">Status: {event.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rumor Warning */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">Rumor &amp; Unverified Content Warning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[JetBrains_Mono] text-xs text-blood uppercase tracking-wider mb-3">⚠️ NOT VERIFIED</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2"><span className="text-blood mt-1">✗</span> YouTube &quot;Day 3 leak&quot; or &quot;unlocked scene&quot; videos</li>
                <li className="flex items-start gap-2"><span className="text-blood mt-1">✗</span> APK downloads claiming to be Day 3</li>
                <li className="flex items-start gap-2"><span className="text-blood mt-1">✗</span> Play Store or third-party reposts of the game</li>
                <li className="flex items-start gap-2"><span className="text-blood mt-1">✗</span> &quot;Confirmed release date&quot; claims without official source</li>
                <li className="flex items-start gap-2"><span className="text-blood mt-1">✗</span> Screenshots or CG previews not from official channels</li>
              </ul>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[JetBrains_Mono] text-xs text-primary uppercase tracking-wider mb-3">✓ VERIFIED SOURCES</h3>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Official itch.io listing and devlog</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Official TFC Blog weekly updates</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Creator Tumblr roadmap checklist</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Patreon early-access updates (creator-linked)</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> This page (Freak Circus Hub) — sourced from the above</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-surface-container border border-outline/20 p-6 group">
                <summary className="font-[Epilogue] text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform text-xl">expand_more</span>
                </summary>
                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Related Guides</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/day-2" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Day 2 Walkthrough →</Link>
            <Link href="/day-3" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Day 3 Preview →</Link>
            <Link href="/endings" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">All Endings →</Link>
            <Link href="/characters" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Characters →</Link>
            <Link href="/ticket-taker" className="text-primary hover:underline text-sm font-[JetBrains_Mono]">Ticket Taker →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqData.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
      <JsonLd />
    </main>
  );
}
