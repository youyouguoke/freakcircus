import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";

export const metadata: Metadata = {
  title: "Freak Circus Save Guide — Best Save Points, Save Tips & Data Management",
  description: "Complete save guide for The Freak Circus. Best save points for each route, how save data affects endings, hidden counter at offset 0x4A20, and tips for managing multiple playthroughs without losing progress.",
  keywords: [
    "Freak Circus save guide",
    "Freak Circus save points",
    "Freak Circus save data",
    "Freak Circus save tips",
    "Freak Circus save management",
    "Freak Circus hidden counter",
    "Freak Circus save file location",
    "Freak Circus multiple playthroughs",
    "Freak Circus best save points",
    "Freak Circus save corruption",
  ],
  openGraph: {
    title: "Freak Circus Save Guide — Best Save Points & Data Management",
    description: "Best save points for each route, how save data affects endings, hidden counter mechanics, and tips for managing multiple playthroughs.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/save-guide",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/save-guide",
  },
};

const savePoints = [
  { scene: "Day 1 — Cafe", route: "All Routes", reason: "Before meeting Ticket Taker. Last chance to explore without route commitment.", priority: "Essential" },
  { scene: "Day 1 — Garden", route: "Pierrot", reason: "Before first Pierrot dialogue. Comfort/Confess choice is irreversible.", priority: "Essential" },
  { scene: "Day 1 — Stage", route: "Harlequin", reason: "Before comedy/aggression system activates. Wrong choice locks out Fractured Route.", priority: "Essential" },
  { scene: "Day 1 — Medical Tent", route: "Doctor", reason: "Before first medical file opportunity. Files are missable.", priority: "Essential" },
  { scene: "Day 2 — Mirror Hall", route: "All Routes", reason: "Before the mirror scene. Ticket Taker encounter affects all routes.", priority: "Essential" },
  { scene: "Day 2 — Backstage", route: "Jester", reason: "Before Jester encounter. Dialogue options affect future predictions.", priority: "Recommended" },
  { scene: "Day 3 — Decision Point", route: "All Routes", reason: "Final branching point. Most endings lock here.", priority: "Essential" },
  { scene: "Act III — Garden", route: "Pierrot", reason: "Before Smile For Me / Eternal Silence split.", priority: "Essential" },
  { scene: "Act III — Scene 9", route: "Harlequin", reason: "Before comedy/aggression contradiction for Fractured Route.", priority: "Essential" },
  { scene: "Act III — Scene 12", route: "Doctor", reason: "Before diagnosis acceptance. Doctor's Note vs Medical Failure.", priority: "Essential" },
];

const faqData = [
  { question: "Where are Freak Circus save files stored?", answer: "Save files are stored locally in the game's directory. On Windows: %APPDATA%/TheFreakCircus/saves/. On macOS: ~/Library/Application Support/TheFreakCircus/saves/. On Linux: ~/.local/share/TheFreakCircus/saves/." },
  { question: "Does deleting saves reset the hidden counter?", answer: "Yes. The hidden counter at offset 0x4A20 tracks your completion history across all saves. Deleting all save files resets this counter, which affects replay-aware dialogue and ending availability." },
  { question: "How many save slots does Freak Circus have?", answer: "The game has 10 save slots plus 3 auto-save slots. Auto-saves overwrite at scene transitions. Manual saves are permanent until manually deleted." },
  { question: "Can I back up my saves?", answer: "Yes. Copy the entire saves folder to a safe location. This preserves both your progress and the hidden counter. Restoring a backup also restores replay-aware dialogue triggers." },
  { question: "Do saves carry over between versions?", answer: "Yes, saves from the demo carry over to newer demo builds and are intended to carry over to the full release. Always back up before switching versions." },
  { question: "What is the hidden counter at 0x4A20?", answer: "A hidden counter in the save file that increments on every route completion. When it reaches 4, Pierrot begins referencing events from previous routes. This counter affects dialogue across all builds." },
  { question: "Should I use different save slots for different routes?", answer: "Yes. Use separate slots for each route to preserve your progress. The game tracks the hidden counter globally, so using different slots does not affect replay-aware mechanics." },
  { question: "Can save corruption affect endings?", answer: "Rare cases of save corruption have been reported after force-closing during the Eternal Silence black screen. Always wait for credits to roll naturally." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Freak Circus Save Guide — Best Save Points & Data Management",
      description: "Complete save guide for The Freak Circus. Best save points, save data mechanics, and tips for managing multiple playthroughs.",
      url: "https://freak-circus.com/walkthroughs/save-guide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
        { "@type": "ListItem", position: 2, name: "Walkthroughs", item: "https://freak-circus.com/walkthroughs" },
        { "@type": "ListItem", position: 3, name: "Save Guide", item: "https://freak-circus.com/walkthroughs/save-guide" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function SaveGuidePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Walkthrough // Save Guide
          </div>

          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Freak Circus save guide — best save points and data management"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/hero-corridor.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">
                  Save Guide
                </h1>
                <p className="font-[Epilogue] italic opacity-60">
                  Never lose progress. Every critical save point, the hidden counter, and multi-playthrough management.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Answer */}
          <section className="mb-12">
            <div className="bg-surface-container border border-primary/20 p-6 border-l-4 border-l-primary">
              <div className="font-[JetBrains_Mono] text-[10px] text-primary mb-2 uppercase tracking-widest">Quick Answer</div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <strong className="text-foreground">Where should I save in Freak Circus?</strong> Save at every scene transition. The most critical save points are: Day 1 Cafe (before route commitment), Day 2 Mirror Hall (before Ticket Taker), and Day 3 Decision Point (before ending lock). The game has 10 manual slots + 3 auto-saves. A hidden counter at offset 0x4A20 tracks your completion history globally — deleting all saves resets it.
              </p>
            </div>
          </section>

          {/* Save Points Table */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
              Critical Save Points
            </h2>
            <p className="text-on-surface-variant text-sm mb-6">
              Save before each of these scenes. Missing a save point can mean replaying hours of content.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-outline/20">
                    <th className="text-left p-3 text-foreground">Scene</th>
                    <th className="text-left p-3 text-foreground">Route</th>
                    <th className="text-left p-3 text-foreground">Why Save Here</th>
                    <th className="text-left p-3 text-foreground">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {savePoints.map((point, i) => (
                    <tr key={i} className="border-b border-outline/10">
                      <td className="p-3 text-foreground font-bold">{point.scene}</td>
                      <td className="p-3 text-on-surface-variant">{point.route}</td>
                      <td className="p-3 text-on-surface-variant text-xs">{point.reason}</td>
                      <td className="p-3">
                        <span className={`font-[JetBrains_Mono] text-[10px] px-2 py-1 border ${
                          point.priority === 'Essential' ? 'border-primary text-primary' : 'border-secondary text-secondary'
                        }`}>{point.priority}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Hidden Counter */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
              The Hidden Counter (0x4A20)
            </h2>
            <div className="bg-surface-container border border-outline/20 p-6 mb-6">
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                The Freak Circus tracks your completion history using a hidden counter at save file offset 0x4A20. This counter increments on every route completion and affects dialogue options across all builds. Community testing by 12 members confirmed that counter value 4 triggers Pierrot&apos;s replay-aware dialogue regardless of current route choices.
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Key facts:</strong>
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• The counter is global — it persists across all save slots</li>
                <li>• Deleting all saves resets the counter to 0</li>
                <li>• Backing up and restoring saves preserves the counter</li>
                <li>• Counter value 4: Pierrot references previous routes</li>
                <li>• Counter value 7: Harlequin says &quot;You again&quot;</li>
                <li>• Counter value 10: Doctor describes White Room ending</li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
            <div className="space-y-4">
              {faqData.map((f, i) => (
                <details key={i} className="group bg-surface-container border border-outline/20">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-[Epilogue] text-base font-semibold text-foreground list-none">
                    <span>{f.question}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline/10 leading-relaxed">{f.answer}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>

      <ContinueExploring />
      <Footer />
    </main>
  );
}
