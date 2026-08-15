import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Doctor — Character Profile, Route Guide & Medical Files | Freak Circus Hub",
  description: "Complete The Doctor character analysis for The Freak Circus. Covers his circus physician persona, memory route unlock conditions, five hidden medical files, mirror connections, and precognitive dialogue.",
  keywords: ["The Doctor", "The Freak Circus Doctor", "Doctor route guide", "circus physician", "memory route", "medical files", "mirror connection", "White Room"],
  openGraph: {
    title: "The Doctor — Character Profile, Route Guide & Medical Files",
    description: "Complete The Doctor character analysis, memory route walkthrough, hidden medical files, and precognitive dialogue.",
    type: "article",
    url: "https://freak-circus.com/characters/doctor",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/doctor",
  },
};

const faqData = [
  { question: "Who is The Doctor in The Freak Circus?", answer: "The Doctor is the circus physician whose clinical detachment masks unsettling awareness. His route requires finding 5 hidden medical files and features precognitive dialogue — he describes the White Room ending in Scene 7, three routes before it becomes accessible." },
  { question: "How do you unlock the White Room ending?", answer: "Find all 5 medical files, trigger the mirror connection (requires failing his main route once), and select 'Ask about the white room' in Scene 12. The screen fades to white and remains so for 2 minutes with breathing and medical equipment sounds." },
  { question: "What are the 5 medical files?", answer: "File 1 (Scene 2 drawer): Pierrot — chronic dissociative episodes. File 2 (Scene 4 cabinet): Harlequin — rapid affective switching. File 3 (Scene 6 floorboard): Columbina — persecutory delusions. File 4 (Scene 8 bookshelf): The Doctor himself — blank except 'Subject is aware of observation.' File 5 (Scene 10 desk): The player's behavioral profile." },
  { question: "Does The Doctor know about the player?", answer: "Yes. File 5 contains a psychological profile that matches the player's choice patterns, suggesting the game generates this file based on observed behavior. His precognitive dialogue in Scene 7 describes the White Room ending with disturbing accuracy." },
  { question: "Is The Doctor connected to Ticket Taker?", answer: "Multiple evidence points suggest a connection: identical height (188cm), shared vocal frequency patterns, matching robe wallpaper patterns, and the fact they never appear in the same scene." },
];

const doctorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
      { "@type": "ListItem", position: 2, name: "Characters", item: "https://freak-circus.com/characters" },
      { "@type": "ListItem", position: 3, name: "The Doctor", item: "https://freak-circus.com/characters/doctor" },
    ]},
    { "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
  ],
};

export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }} />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // The Doctor
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="The Doctor in the medical tent surrounded by files"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Doctor-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">Memory Route</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">Romanceable</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Precognition ★★★★☆</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">The Doctor</h1>
                <p className="font-[Epilogue] italic opacity-60">The circus physician — clinical detachment, hidden medical files, and knowledge that arrives before its time.</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Role</h4>
                <p className="font-[Epilogue]">Circus Physician</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">Medical Tent (Day 1)</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Key Mechanic</h4>
                <p className="font-[Epilogue]">Hidden Medical Files</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Secret Ending</h4>
                <p className="font-[Epilogue] text-primary font-bold">White Room</p>
              </div>
            </div>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is The Doctor?
              </h2>
              {/* Quick Answer for AI SEO */}
              <div className="bg-surface-container border border-primary/20 p-6 mb-6 border-l-4 border-l-primary">
                <div className="font-[JetBrains_Mono] text-[10px] text-primary mb-2 uppercase tracking-widest">Quick Answer</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  <strong className="text-foreground">Who is The Doctor?</strong> The Doctor is the circus physician of The Freak Circus. He is romanceable, requires finding 5 hidden medical files, and has precognitive dialogue — he describes the White Room ending three routes before it's accessible. His secret ending (White Room) reveals the circus's medical experiments.
                </p>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">
                The Doctor serves as the circus physician in The Freak Circus, but his medical knowledge extends into territory that players find increasingly unsettling. His clinical, detached demeanor masks an awareness that seems to transcend the narrative — he references endings before they occur and demonstrates knowledge of events the player has not yet experienced.
              </p>
              <p className="text-on-surface-variant text-sm">
                His route requires finding five hidden medical files scattered across scenes, each revealing more about the circus's true purpose. The mirror connection only appears in Scene 9 after failing his route once. Most disturbing is his precognitive dialogue — in Scene 7, he describes the White Room ending with disturbing accuracy, three routes before it becomes accessible to the player.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                The Doctor Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Doctor's main route is the most disturbing in The Freak Circus and has the highest completion difficulty. Unlike other routes that focus on emotional choices, the Doctor route requires systematic investigation — players must find hidden objects, decode medical terminology, and recognize when his clinical observations break the fourth wall.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Doctor's Note," triggers when players collect at least three medical files and accept his final diagnosis in Scene 12. However, the route contains multiple soft-lock points where incorrect choices send the player back to Scene 1 with no explanation, suggesting the game is testing the player's persistence.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Memory Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Memory Route is The Doctor's secret path and reveals the connection between his medical knowledge and the circus's true nature. It requires finding all five hidden medical files and failing his main route once — the mirror connection in Scene 9 only appears after this failure condition.
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Find all 5 hidden medical files (locations: Scene 2 drawer, Scene 4 cabinet, Scene 6 floorboard, Scene 8 bookshelf, Scene 10 desk)</li>
                <li>• Fail the main route by refusing the diagnosis in Scene 12</li>
                <li>• Restart the route — the mirror connection appears in Scene 9</li>
                <li>• Scene 9 mirror scene contains a 6th medical file not listed in any guide</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                The Memory Route reveals that The Doctor's medical files are not about the characters — they are about the player. File 5 contains a psychological profile that matches the player's choice patterns, suggesting the game generates this file based on observed behavior.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hidden Medical Files & Precognitive Dialogue
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">The Five Medical Files</h3>
                  <p className="text-on-surface-variant text-sm">Each medical file contains a character profile written in clinical terminology. File 1 (Pierrot) describes "chronic dissociative episodes." File 2 (Harlequin) notes "rapid affective switching consistent with bipolar I." File 3 (Columbina) records "persecutory delusions with organized structure." File 4 (The Doctor himself) is blank except for a single line: "Subject is aware of observation." File 5 contains player behavioral analysis.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Scene 7 Precognition</h3>
                  <p className="text-on-surface-variant text-sm">In Scene 7, The Doctor describes the White Room ending with disturbing accuracy: "You will find yourself in a white room. No doors, no windows. You will wonder how you got there. You will wonder why you keep coming back." The White Room ending is not accessible until three routes later, and no other character references it.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Unused Voice Lines</h3>
                  <p className="text-on-surface-variant text-sm">Data miners discovered unused voice lines in build 1.04 where The Doctor speaks in a different voice — deeper, more aggressive, without the clinical detachment. These lines suggest he was originally designed as the primary antagonist, and the "circus physician" persona was added later in development.</p>
                </div>
              </div>
            </section>

            <section id="endings">
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                The Doctor Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Doctor's Note (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Collect at least 3 medical files and accept the diagnosis in Scene 12. The Doctor writes a prescription that the player cannot read — the text is corrupted. Post-credits, the prescription appears in the player's inventory in the next route.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">White Room (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Find all 5 medical files, trigger the mirror connection, and select "Ask about the white room" in Scene 12. The screen fades to white and remains so for 2 minutes. Audio contains breathing and medical equipment sounds. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Corrupted Diagnosis (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. The Doctor's sprite is replaced with a black silhouette. All dialogue is corrupted hex. No known unlock conditions — may require modified save file.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">All Endings Explained</a>
                <a href="/walkthroughs/doctor-memory-route" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Doctor Memory Route</a>
                <a href="/lore/mirror-hall" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Mirror Hall Lore</a>
                <a href="/theories" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Community Theories</a>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Personality Analysis</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Clinical Detachment", text: "The Doctor speaks in medical terminology even during emotional scenes. His observations are clinical, precise, and deliberately unsettling — he describes other characters as patients rather than people." },
                  { title: "Precognitive Knowledge", text: "In Scene 7, he describes the White Room ending with disturbing accuracy, three routes before it becomes accessible. This is not metaphorical — the description matches the actual ending scene-for-scene." },
                  { title: "Self-Awareness", text: "File 4 (about himself) is blank except for one line: 'Subject is aware of observation.' This suggests The Doctor knows he is being watched — by the player, not by other characters." },
                  { title: "Hidden Aggression", text: "Unused voice lines in build 1.04 reveal a different Doctor — deeper voice, no clinical detachment, direct threats. The 'circus physician' persona may be a mask over a primary antagonist." },
                ].map((trait) => (
                  <div key={trait.title} className="bg-surface-container border border-outline/20 p-5">
                    <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-2">{trait.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{trait.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Fan Theories</h2>
              <div className="space-y-4">
                {[
                  { title: "The Doctor Is Ticket Taker", score: "★★★★☆", summary: "Identical height (188cm), shared vocal frequency, matching robe patterns, and they never appear in the same scene. The Doctor's clinical persona may be a disguise for the gatekeeper entity.", evidence: ["188cm height match", "Never appear together", "Vocal frequency analysis matches", "Robe wallpaper patterns identical"] },
                  { title: "The Doctor Is the True Antagonist", score: "★★★★★", summary: "Unused voice lines in build 1.04 show The Doctor without his clinical mask — aggressive, threatening, aware. The 'circus physician' persona was added later in development, suggesting the original design was as primary villain.", evidence: ["Unused voice lines in build 1.04", "File 5 contains player behavioral profile", "Precognitive dialogue proves meta-awareness", "White Room ending suggests containment role"] },
                ].map((t) => (
                  <div key={t.title} className="bg-surface-container border border-outline/20 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{t.title}</h3>
                      <div className="font-[Creepster] text-xl text-primary">{t.score}</div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{t.summary}</p>
                    <div className="font-[JetBrains_Mono] text-xs text-green-400 uppercase mb-2">Evidence</div>
                    <ul className="space-y-1 text-on-surface-variant text-sm">{t.evidence.map((e, i) => <li key={i}>• {e}</li>)}</ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
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
        </div>
      </article>
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
