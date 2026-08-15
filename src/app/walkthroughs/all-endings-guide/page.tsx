import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import Link from "next/link";
import { ENDINGS_CONFIRMED, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "All Endings Guide — Freak Circus Complete Ending Walkthrough (2026)",
  description: "Step-by-step guide to unlock every ending in The Freak Circus. Covers all 8+ endings: Grand Finale, Smile For Me, Doctor's Note, Eternal Silence, Columbina's Truth, White Room, Corrupted Data, and Harlequin's Laughter. Requirements, choices, and tips.",
  keywords: [
    "Freak Circus all endings",
    "Freak Circus endings guide",
    "how to unlock all endings Freak Circus",
    "Freak Circus ending walkthrough",
    "Freak Circus ending order",
    "Freak Circus true ending",
    "Freak Circus secret endings",
    "Freak Circus Eternal Silence unlock",
    "Freak Circus Columbina Truth unlock",
    "Freak Circus Doctor Note unlock",
  ],
  openGraph: {
    title: "All Endings Guide — Freak Circus Complete Ending Walkthrough",
    description: "Step-by-step guide to unlock every ending in The Freak Circus. All 8+ endings with requirements, choices, and tips.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/all-endings-guide",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/all-endings-guide",
  },
};

const endingSteps = [
  {
    ending: "Grand Finale",
    character: "Harlequin",
    difficulty: "Normal",
    type: "Canon",
    time: "45-60 min",
    steps: [
      "Start Harlequin's route on Day 1 by visiting the Stage.",
      "Choose comedic dialogue options in Scenes 1-6.",
      "In Scene 9, select the aggressive option ('Mock her performance').",
      "Continue through Act III with standard choices.",
      "The ending triggers automatically after the final scene.",
    ],
    tip: "This is the easiest ending and recommended for first-time players. No special conditions required.",
  },
  {
    ending: "Smile For Me",
    character: "Pierrot",
    difficulty: "Normal",
    type: "Canon",
    time: "50-70 min",
    steps: [
      "Start Pierrot's route by visiting the Garden on Day 1.",
      "Approach Pierrot in Scene 3 and choose 'Stay a while.'",
      "In Scene 6, accept his offer to sit together.",
      "In Scene 9, select 'I trust you.'",
      "In the Act III garden scene, accept Pierrot's offer.",
    ],
    tip: "Pierrot's route is the most commonly recommended starting point. The garden scene is the key decision point.",
  },
  {
    ending: "Harlequin's Laughter",
    character: "Harlequin",
    difficulty: "Hidden",
    type: "Joke",
    time: "60-90 min",
    steps: [
      "Start a new Harlequin route playthrough.",
      "Select EVERY comedic dialogue option in Scenes 1-8.",
      "Do NOT select any aggressive options.",
      "In Scene 9, choose the comedic option (not aggressive).",
      "The ending triggers after Act III with a fourth-wall-breaking finale.",
    ],
    tip: "This ending is easy to miss because it requires 100% comedic choices. One aggressive option locks it out.",
  },
  {
    ending: "Doctor's Note",
    character: "The Doctor",
    difficulty: "Hard",
    type: "Secret",
    time: "4-6 hours",
    steps: [
      "Start The Doctor's route by visiting the Medical Tent on Day 1.",
      "Find Medical File 1 in Scene 2 (drawer in the examination room).",
      "Find Medical File 2 in Scene 4 (cabinet behind the curtain).",
      "Find Medical File 3 in Scene 6 (floorboard under the bed).",
      "Find Medical File 4 in Scene 8 (bookshelf, third shelf from top).",
      "Find Medical File 5 in Scene 10 (desk, under the newspaper).",
      "In Scene 12, accept The Doctor's diagnosis.",
    ],
    tip: "File 5 is the hardest to find — it's hidden under a newspaper on the desk. Inspect every object in Scene 10.",
  },
  {
    ending: "Eternal Silence",
    character: "Pierrot",
    difficulty: "Hard",
    type: "Secret",
    time: "1.5-2 hours",
    steps: [
      "Complete Pierrot's main route at least once (to unlock the silence mechanic).",
      "Start a new Pierrot route playthrough.",
      "In Scenes 10, 11, and 12, REFUSE all dialogue options. Do not select anything.",
      "In the garden scene, do NOT select Comfort or Confess. Leave both unselected.",
      "In Scene 14, ignore Pierrot's direct questions. Stay silent.",
      "The screen will remain black for 3-4 minutes. Do not close the game.",
      "Credits will roll after the black screen. Post-credits narration references previous playthroughs.",
    ],
    tip: "This ending breaks the fourth wall. The black screen is intentional — do not assume the game has crashed.",
  },
  {
    ending: "Columbina's Truth",
    character: "Columbina",
    difficulty: "Very Hard",
    type: "Secret",
    time: "6-8 hours",
    steps: [
      "Loop 1: Select all 'graceful' options (accept, comfort, encourage) in every scene.",
      "Loop 2: Select all 'precise' options (observe, mirror, follow) in every scene.",
      "Loop 3: Select all 'silent' options (watch, wait, listen) in every scene.",
      "Any deviation in any loop resets you to Loop 1, Scene 1 with no notification.",
      "After three perfect loops, the hallway in Act III gains a fourth door.",
      "Enter the fourth door to trigger the memory fragment and ending.",
    ],
    tip: "This is the hardest ending in the game. Use a guide for each loop's correct choices. One wrong selection means starting over.",
  },
  {
    ending: "White Room",
    character: "Unknown",
    difficulty: "Impossible",
    type: "Unverified",
    time: "Unknown",
    steps: [
      "Mentioned in patch notes 1.03 but never officially unlocked.",
      "The Doctor describes it in Scene 7: 'A room with no walls, no ceiling, no floor. Only light.'",
      "No player has confirmed the unlock conditions.",
      "May require completing all other endings in a specific order.",
    ],
    tip: "This ending may be cut content or an intentional mystery. The community maintains a $500 bounty for confirmed unlock conditions.",
  },
  {
    ending: "Corrupted Data",
    character: "???",
    difficulty: "Impossible",
    type: "Corrupted",
    time: "Unknown",
    steps: [
      "Found only in modified game files through data mining.",
      "The screen displays raw hex before the game crashes.",
      "The hex, when converted to ASCII, reads: 'The show is over. The audience has left. Why are you still here?'",
      "No legitimate unlock conditions have been discovered.",
    ],
    tip: "This may be a debug remnant, ARG element, or intentionally hidden ending. It cannot be unlocked through normal gameplay.",
  },
];

const faqData = [
  { question: "What order should I unlock endings?", answer: "Recommended order: 1) Grand Finale (Harlequin), 2) Smile For Me (Pierrot), 3) Harlequin's Laughter, 4) Doctor's Note, 5) Eternal Silence, 6) Columbina's Truth. Save unverified endings for last." },
  { question: "Can I get all endings in one playthrough?", answer: "No. At least 4 playthroughs are required due to replay dependencies. Columbina's Truth alone needs 3 perfect loops." },
  { question: "What is the easiest ending?", answer: "Grand Finale (Harlequin) and Smile For Me (Pierrot) are the easiest — both achievable on first playthrough with no special conditions." },
  { question: "What is the hardest ending?", answer: "Columbina's Truth requires perfect alignment across 3 loops with zero mistakes. Any deviation resets to Loop 1." },
  { question: "Do endings affect each other?", answer: "Yes. A hidden counter at offset 0x4A20 tracks your completion history. Some endings only become available after seeing others first." },
  { question: "How long to get all endings?", answer: `${TOTAL_COMPLETION_HOURS} for all ${ENDINGS_CONFIRMED} confirmed endings. Columbina's Truth alone takes 12+ hours across 3 loops.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "All Endings Guide — Freak Circus Complete Ending Walkthrough",
      description: "Step-by-step guide to unlock every ending in The Freak Circus.",
      url: "https://freak-circus.com/walkthroughs/all-endings-guide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
        { "@type": "ListItem", position: 2, name: "Walkthroughs", item: "https://freak-circus.com/walkthroughs" },
        { "@type": "ListItem", position: 3, name: "All Endings Guide", item: "https://freak-circus.com/walkthroughs/all-endings-guide" },
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

export default function AllEndingsGuidePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Walkthrough // All Endings
          </div>

          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="All endings guide for The Freak Circus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/hero-corridor.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">
                  All Endings Guide
                </h1>
                <p className="font-[Epilogue] italic opacity-60">
                  Every ending, every unlock condition, every secret — step by step.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Total Endings</h4>
                <p className="font-[Epilogue]">8+ Confirmed</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Time Required</h4>
                <p className="font-[Epilogue]">15-20 Hours</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Playthroughs</h4>
                <p className="font-[Epilogue]">4+ Required</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Hardest</h4>
                <p className="font-[Epilogue] text-primary font-bold">Columbina&apos;s Truth</p>
              </div>
            </div>
          </section>

          {/* Quick Answer */}
          <section className="mb-12">
            <div className="bg-surface-container border border-primary/20 p-6 border-l-4 border-l-primary">
              <div className="font-[JetBrains_Mono] text-[10px] text-primary mb-2 uppercase tracking-widest">Quick Answer</div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <strong className="text-foreground">How many endings are in The Freak Circus?</strong> The community has confirmed 8 endings across standard, secret, and corrupted categories. The easiest are Grand Finale and Smile For Me (first playthrough). The hardest is Columbina&apos;s Truth (3 perfect loops, 6-8 hours). Recommended order: Grand Finale → Smile For Me → Harlequin&apos;s Laughter → Doctor&apos;s Note → Eternal Silence → Columbina&apos;s Truth.
              </p>
            </div>
          </section>

          {/* Ending Steps */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
              Step-by-Step Ending Guides
            </h2>
            <div className="space-y-8">
              {endingSteps.map((ending, i) => (
                <div key={ending.ending} className="bg-surface-container border border-outline/20 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-[Epilogue] text-xl font-bold text-foreground">{ending.ending}</h3>
                      <p className="text-on-surface-variant text-sm">{ending.character} · {ending.type} · {ending.time}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`font-[JetBrains_Mono] text-[10px] px-2 py-1 border ${
                        ending.difficulty === 'Normal' ? 'border-primary text-primary' :
                        ending.difficulty === 'Impossible' ? 'border-outline/30 text-on-surface-variant' :
                        'border-blood text-blood'
                      }`}>{ending.difficulty}</span>
                      <span className="font-[JetBrains_Mono] text-[10px] px-2 py-1 border border-outline/30 text-on-surface-variant">{ending.type}</span>
                    </div>
                  </div>
                  <ol className="space-y-2 mb-4">
                    {ending.steps.map((step, j) => (
                      <li key={j} className="text-on-surface-variant text-sm flex gap-3">
                        <span className="font-[JetBrains_Mono] text-xs text-primary mt-0.5">{j + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="bg-surface-container-high/30 p-4 border-l border-secondary">
                    <p className="text-on-surface-variant text-sm">
                      <strong className="text-secondary">Tip:</strong> {ending.tip}
                    </p>
                  </div>
                </div>
              ))}
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

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Route Walkthroughs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Pierrot Main Route", href: "/walkthroughs/pierrot-main-route", desc: "Melancholic clown. Memory loops & silence mechanics." },
                { name: "Pierrot Silent Route", href: "/walkthroughs/pierrot-silent-route", desc: "Secret ending path. Refuse all dialogue." },
                { name: "Harlequin True Route", href: "/walkthroughs/harlequin-true-route", desc: "Chaotic performer. Comedy/aggression system." },
                { name: "Doctor Memory Route", href: "/walkthroughs/doctor-memory-route", desc: "Circus physician. 5 hidden medical files." },
                { name: "Columbina Fractured Route", href: "/walkthroughs/columbina-fractured-route", desc: "Ballerina. Three-loop alignment mechanic." },
                { name: "Null Route", href: "/walkthroughs/null-route", desc: "Corrupted route. Unused endings." },
              ].map((route) => (
                <Link key={route.href} href={route.href} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{route.name}</h3>
                  <p className="text-on-surface-variant text-sm">{route.desc}</p>
                </Link>
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
