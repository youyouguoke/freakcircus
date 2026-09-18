"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--harlequin)";

const profile = {
  role: "THE PERFORMER", status: "ACTIVE", route: "AVAILABLE",
  firstEncounter: "Day 1",
  endings: "1 confirmed (Missing) + 1 planned",
};

const endings = [
  { name: "Missing (Bad Ending)", type: "CONFIRMED", desc: "The only ending confirmed by name. Associated with Harlequin's route. Most players encounter this on their first playthrough." },
  { name: "Harlequin's ending (planned)", type: "PLANNED", desc: "Listed by the developer on itch.io under 'What is planned?'. Not yet implemented in the current build." },
];

const verifiedFacts = [
  { title: "Harlequin is one of the two main characters", desc: "Introduced in Day 1 alongside Pierrot. One of the two primary character routes in the game." },
  { title: "The 'Missing' ending is associated with Harlequin", desc: "The only ending confirmed by name in any official or wiki source. Community reports and YouTube playthroughs confirm this." },
  { title: "Harlequin killed Columbina", desc: "Harlequin poisoned and ate Columbina (Pierrot's former partner). This is the central event driving the Pierrot-Harlequin rivalry." },
  { title: "Day 2 tent content exists", desc: "Harlequin has tent-based scenes in Day 2. Specific triggers and dialogue branches are unverified." },
];

const unverifiedReports = [
  { title: "'You again' replay dialogue", desc: "Some players report Harlequin saying 'You again' on repeated playthroughs. Whether this is a real in-game line or community fabrication has not been verified." },
  { title: "Aggressive vs comedic choice system", desc: "Community members describe dialogue options that shift between playful and aggressive tones. Whether these lead to different outcomes is unverified." },
  { title: "Multiple ending paths", desc: "Whether Harlequin's route has multiple endings in the current build (beyond the confirmed 'Missing') is unknown." },
];

const personalityTraits = [
  { title: "Chaotic Energy", text: "Harlequin's dialogue shifts unpredictably between playful comedy and genuine menace. Players can never be sure which version they're talking to." },
  { title: "Seductive Rival", text: "Described as 'a charismatic rival who turns every interaction into a dangerous test.' She competes with Pierrot for the player's attention." },
  { title: "Driven by Columbina Legend", text: "The Columbina legend in Day 2 reveals that Harlequin killed Columbina (poisoned and ate her). This event is the origin of the Pierrot-Harlequin rivalry." },
  { title: "Male Character", text: "Harlequin is male (confirmed by VNDB). Some community members initially assumed otherwise due to the 'seductive rival' description." },
];

const theories = [
  { title: "Harlequin Remembers Previous Playthroughs", status: "UNVERIFIED", desc: "Some players report dialogue changes on repeated playthroughs. Whether Harlequin has 'replay awareness' similar to what's reported for Pierrot is unverified." },
  { title: "Columbina's Death Drives Everything", status: "PARTIALLY VERIFIED", desc: "The Columbina legend is confirmed to appear in Day 2. Harlequin killed Columbina, which explains the central rivalry with Pierrot. This is the most supported theory about the game's narrative structure." },
];

export default function HarlequinClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/harlequin-hero-new.webp" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background: accent }} /> CASE FILE 02
            </div>
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>HARLEQUIN</h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">STATUS: {profile.status}</span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">ROUTE: {profile.route}</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { label: "HEIGHT", value: "187cm" },
              { label: "EYES", value: "Poisonous Green" },
              { label: "ENDINGS", value: profile.endings },
              { label: "GENDER", value: "Male" },
            ].map((item) => (
              <div key={item.label} className="bg-void-black p-4">
                <div className="font-label text-[0.5rem] text-faint-paper mb-1">{item.label}</div>
                <div className="text-paper text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IS ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT ANALYSIS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Harlequin?</h2>
            <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">Harlequin</strong> is 187cm tall with poisonous green eyes. He is Pierrot&apos;s seductive rival and the character associated with the confirmed &quot;Missing&quot; bad ending. Harlequin killed Columbina (poisoned and ate her), which is the central event driving the Pierrot-Harlequin rivalry.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed mb-4">Harlequin is one of the two main characters in The Freak Circus, introduced in Day 1. He is described as a charismatic rival who turns every interaction into a dangerous test. The Columbina legend in Day 2 reveals the backstory behind his conflict with Pierrot.</p>
            <p className="text-faint-paper text-sm leading-relaxed">The confirmed ending &quot;Missing&quot; is associated with Harlequin&apos;s route. The developer has also listed a planned ending for Harlequin on itch.io, but it is not yet implemented.</p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img src="/harlequin-hero-new.webp" alt="Harlequin portrait" className="w-full object-cover img-cinematic" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><div className="font-label text-[0.5rem] text-faint-paper">SUBJECT PORTRAIT</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VERIFIED FACTS ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />VERIFIED FACTS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">What We Know</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {verifiedFacts.map((fact, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="font-label text-[0.55rem] mb-2 text-status-confirmed">✓ VERIFIED</div>
                <h3 className="font-heading text-base font-bold text-paper mb-2">{fact.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UNVERIFIED ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />UNVERIFIED REPORTS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Community Reports</h2>
          <div className="glass-card p-6 border-l-4 border-l-yellow-500 mb-6">
            <p className="text-on-surface/60 text-sm">The following details are reported by community members but have NOT been independently verified.</p>
          </div>
          <div className="space-y-4">
            {unverifiedReports.map((r, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: '3px solid var(--status-unverified)' }}>
                <div className="font-label text-[0.55rem] mb-2 text-status-unverified">? UNVERIFIED</div>
                <h3 className="font-heading text-base font-bold text-paper mb-2">{r.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENDINGS — CONFIRMED/PLANNED TEMPLATE ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />ENDING CATALOGUE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Harlequin Route Endings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {endings.map((e, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${e.type === "CONFIRMED" ? "var(--status-confirmed)" : "var(--status-likely)"}` }}>
                <span className="font-label text-[0.5rem] px-2 py-0.5 mb-3 inline-block" style={{
                  color: e.type === "CONFIRMED" ? "var(--status-confirmed)" : "var(--status-likely)",
                  border: `1px solid ${e.type === "CONFIRMED" ? "rgba(76,175,110,0.3)" : "rgba(196,154,60,0.3)"}`,
                  background: e.type === "CONFIRMED" ? "rgba(76,175,110,0.08)" : "rgba(196,154,60,0.08)",
                }}>{e.type}</span>
                <h3 className="font-archive text-lg text-paper mb-2">{e.name}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-dim-paper text-xs mt-6">Source: itch.io (garula.itch.io/the-freak-circus) — &quot;Current Features&quot; and &quot;What is planned?&quot;</p>
        </div>
      </section>

      {/* ═══ PERSONALITY ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />BEHAVIORAL ANALYSIS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Personality Analysis</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {personalityTraits.map((t, i) => (
              <div key={i} className="archive-card"><h3 className="font-heading text-base font-bold text-paper mb-2">{t.title}</h3><p className="text-faint-paper text-sm leading-relaxed">{t.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THEORIES ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />COMMUNITY THEORIES</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Related Theories</h2>
          <div className="space-y-4">
            {theories.map((t, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg font-bold text-paper">{t.title}</h3>
                  <span className={`font-label text-[0.5rem] px-2 py-0.5 ${t.status === "PARTIALLY VERIFIED" ? "text-amber-400 border border-amber-500/30 bg-amber-500/8" : "text-status-unverified border border-status-unverified/30 bg-status-unverified/8"}`}>{t.status}</span>
                </div>
                <p className="text-faint-paper text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/theories" className="font-label text-[0.55rem] text-primary hover:underline">VIEW ALL THEORIES →</Link>
          </div>
        </div>
      </section>

      {/* ═══ RELATED ═══ */}
      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[
              { l: "Pierrot Character", h: "/characters/pierrot" },
              { l: "Columbina (Deceased)", h: "/characters/columbina" },
              { l: "All Endings", h: "/endings" },
              { l: "Theories", h: "/theories" },
              { l: "Harlequin Route Walkthrough", h: "/walkthroughs/harlequin-true-route" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h} className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors">{lnk.l}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />FREQUENTLY ASKED</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Questions & Answers</h2>
          <div className="space-y-3">
            {faqData.map((f, i) => (
              <details key={i} className="group archive-card">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                  <span className="pr-4">{f.question}</span>
                  <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span>
                  <span className="font-label text-[0.55rem] hidden group-open:inline shrink-0" style={{ color: accent }}>[−]</span>
                </summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
