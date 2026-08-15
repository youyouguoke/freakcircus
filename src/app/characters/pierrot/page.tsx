import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pierrot — Character Profile, Route Guide & Hidden Triggers | Freak Circus Hub",
  description: "Complete Pierrot character analysis for The Freak Circus. Covers his melancholic clown persona, route guide, hidden dialogue triggers, garden scene mechanics, and the Eternal Silence ending.",
  keywords: ["Pierrot", "The Freak Circus Pierrot", "Pierrot route guide", "melancholic clown", "silent route", "Eternal Silence", "hidden triggers", "garden scene"],
  openGraph: {
    title: "Pierrot — Character Profile, Route Guide & Hidden Triggers",
    description: "Complete Pierrot character analysis, route walkthrough, hidden triggers, and Eternal Silence ending.",
    type: "article",
    url: "https://freak-circus.com/characters/pierrot",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/pierrot",
  },
};

const faqData = [
  {
    question: "Who is Pierrot in The Freak Circus?",
    answer: "Pierrot is the melancholic clown and often the first route players encounter. His storyline explores forgotten identity, repeated loops, and awareness that extends beyond the fourth wall. He is romanceable and has both a main ending (Smile For Me) and a secret ending (Eternal Silence).",
  },
  {
    question: "How do you unlock the Eternal Silence ending?",
    answer: "Refuse all dialogue options in Scenes 10, 11, and 12. Do not select Comfort or Confess in the garden scene. Ignore Pierrot's direct questions in Scene 14. The screen will remain black for 3-4 minutes before credits roll.",
  },
  {
    question: "Does Pierrot remember previous playthroughs?",
    answer: "Yes. On the 4th playthrough, Pierrot begins referencing events from previous routes. The line 'You chose differently last time' appears regardless of whether the player actually selected that choice. A hidden counter at save offset 0x4A20 triggers replay-aware dialogue.",
  },
  {
    question: "What is the garden scene hidden choice?",
    answer: "After failing Pierrot's route once, the garden scene in Act III gains a third option: 'Say Nothing.' This option does not appear in the script files and was discovered through data mining in build 1.03.",
  },
  {
    question: "Is Pierrot yandere?",
    answer: "Community analysis suggests Pierrot exhibits yandere tendencies — possessive, protective, emotionally dependent behavior that escalates when the player engages with other characters. His loop-awareness mechanic reinforces this interpretation.",
  },
];

const pierrotJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
        { "@type": "ListItem", position: 2, name: "Characters", item: "https://freak-circus.com/characters" },
        { "@type": "ListItem", position: 3, name: "Pierrot", item: "https://freak-circus.com/characters/pierrot" },
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

export default function PierrotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pierrotJsonLd) }} />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // Pierrot
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Pierrot standing alone in the wilted garden"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Pierrot.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">First Route</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">Romanceable</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Loop Aware ★★★★☆</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">Pierrot</h1>
                <p className="font-[Epilogue] italic opacity-60">The melancholic clown — first route, hidden triggers, and the silence that remembers.</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Role</h4>
                <p className="font-[Epilogue]">Melancholic Clown</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">The Garden (Day 1)</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Key Mechanic</h4>
                <p className="font-[Epilogue]">Comfort / Confess</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Secret Ending</h4>
                <p className="font-[Epilogue] text-primary font-bold">Eternal Silence</p>
              </div>
            </div>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is Pierrot?
              </h2>
              {/* Quick Answer for AI SEO */}
              <div className="bg-surface-container border border-primary/20 p-6 mb-6 border-l-4 border-l-primary">
                <div className="font-[JetBrains_Mono] text-[10px] text-primary mb-2 uppercase tracking-widest">Quick Answer</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  <strong className="text-foreground">Who is Pierrot?</strong> Pierrot is the melancholic clown of The Freak Circus, often the first route players encounter. He is romanceable, loop-aware (references previous playthroughs), and has two endings: Smile For Me (main) and Eternal Silence (secret). His personality combines melancholy, possessiveness, and emotional dependency — community analysis identifies strong yandere tendencies.
                </p>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot is the melancholic clown of The Freak Circus and often the first route players encounter. Beneath his withdrawn, observant demeanor lies one of the most complex character arcs in the game. His storyline explores themes of forgotten identity, repeated loops, and awareness that extends beyond the fourth wall.
              </p>
              <p className="text-on-surface-variant text-sm">
                The loop theory suggests Pierrot remembers player behavior across save files, adjusting his dialogue and reactions accordingly. His garden scene contains hidden triggers that only appear after failing his route once, and the silence mechanic in his route leads to the Eternal Silence ending — one of the most discussed outcomes in the community.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Pierrot Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot's main route is the most commonly recommended starting point for new players. It introduces core mechanics including the dialogue choice system, the comfort/confess dynamic, and the first instance of replay-aware dialogue. The route takes approximately 4-6 hours for a first playthrough and contains 12 major scenes with branching decisions.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Smile For Me," triggers when players accept Pierrot's offer during the garden scene in Act III. However, community testing has revealed that this ending is not the full picture — Pierrot's route contains hidden content that only appears after specific refusal conditions and cross-route dependencies.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Silent Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Silent Route is Pierrot's secret ending path and requires refusing every major dialogue interaction during the final act. This is not a passive ending — silence becomes a deliberate choice that breaks the game's narrative contract. The unlock conditions are:
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Refuse all dialogue options in Scenes 10, 11, and 12</li>
                <li>• Do not select Comfort or Confess in the garden scene</li>
                <li>• Ignore Pierrot's direct questions in Scene 14</li>
                <li>• The screen will remain black for 3-4 minutes before credits roll</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                Players report that Pierrot references previous unselected choices during the silent route, suggesting the game maintains memory of player behavior across saves. This mechanic is not documented in the official guide and was discovered through community testing in 2025.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hidden Dialogue Triggers
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot's route contains multiple hidden dialogue triggers that require specific conditions:
              </p>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Garden Scene Hidden Choice</h3>
                  <p className="text-on-surface-variant text-sm">After failing Pierrot's route once, the garden scene in Act III gains a third option: "Say Nothing." This option does not appear in the script files and was discovered through data mining in build 1.03.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Scene 14 Replay Dialogue</h3>
                  <p className="text-on-surface-variant text-sm">On the 4th playthrough, Pierrot begins referencing events from previous routes. The line "You chose differently last time" appears regardless of whether the player actually selected that choice.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Post-Credits Scene</h3>
                  <p className="text-on-surface-variant text-sm">After completing the Silent Route, wait through the full credits. A 30-second scene plays showing Pierrot alone in the garden, speaking to an empty chair. The dialogue references the player's real-world playtime.</p>
                </div>
              </div>
            </section>

            <section id="endings">
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Pierrot Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Smile For Me (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Accept Pierrot's offer in the garden scene. Standard ending with bittersweet conclusion. Unlocked by default on first playthrough.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Eternal Silence (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Refuse all dialogue in the final act. Screen remains black for 3-4 minutes. Pierrot references previous unselected choices. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Null Route (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. No character appears. Player walks through empty corridors until soft-lock. Unlock conditions unknown.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/characters/pierrot-endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Endings Guide</a>
                <a href="/endings/eternal-silence" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Eternal Silence Ending</a>
                <a href="/theories/pierrot-remembers-routes" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Pierrot Loop Theory</a>
                <a href="/lore/mirror-hall" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Mirror Hall Lore</a>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Personality Analysis
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Melancholic Withdrawal", text: "Pierrot's default state is quiet observation. He watches rather than participates, speaks in fragments, and reacts to player choices with delayed emotional responses. This withdrawal is not passive — it is a defense mechanism that breaks when the player makes choices that threaten his connection." },
                  { title: "Possessive Attachment", text: "When the player engages with other characters, Pierrot's dialogue shifts. He references the player's absence, questions their loyalty, and in later scenes, directly confronts the player about other relationships. This escalates across playthroughs." },
                  { title: "Loop Awareness", text: "Pierrot's most unsettling trait is his awareness of repeated playthroughs. He references previous choices, acknowledges the player's return, and in the silent route, addresses the player directly. This breaks the fourth wall in a way no other character does." },
                  { title: "Yandere Tendencies", text: "Community analysis identifies classic yandere patterns: initial gentleness that masks obsessive behavior, emotional dependency that becomes controlling, and a willingness to punish the player for perceived betrayal through the silent route mechanic." },
                ].map((trait) => (
                  <div key={trait.title} className="bg-surface-container border border-outline/20 p-5">
                    <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-2">{trait.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{trait.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Fan Theories
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Pierrot Is the Player's Reflection", score: "★★★★☆", summary: "The loop-awareness mechanic suggests Pierrot is not a separate character but a reflection of the player's own behavior across playthroughs. His garden scene mirrors the player's real-world choices.", evidence: ["References player's actual playtime", "Garden scene changes based on real-world time between sessions", "Silent route breaks fourth wall entirely"] },
                  { title: "Pierrot Remembers All Routes", score: "★★★★★", summary: "Community testing confirmed the hidden counter at save offset 0x4A20. When counter reaches 4, Pierrot begins referencing events from routes the player hasn't completed yet.", evidence: ["Counter at 0x4A20 verified across 12 players", "Dialogue references appear regardless of current route", "Build 1.04 expanded cross-route memory"] },
                ].map((t) => (
                  <div key={t.title} className="bg-surface-container border border-outline/20 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{t.title}</h3>
                      <div className="font-[Creepster] text-xl text-primary">{t.score}</div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{t.summary}</p>
                    <div className="font-[JetBrains_Mono] text-xs text-green-400 uppercase mb-2">Evidence</div>
                    <ul className="space-y-1 text-on-surface-variant text-sm">
                      {t.evidence.map((e, i) => <li key={i}>• {e}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                FAQ
              </h2>
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
        </div>
      </article>
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
