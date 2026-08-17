"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--columbina)";

const profile = {
  role: "THE BALLERINA", status: "ACTIVE", route: "AVAILABLE",
  firstEncounter: "Hallway (Day 2)", keyMechanic: "Three-Loop Alignment",
  endings: "Unnamed Open Ending / Columbina\'s Truth",
  loopAwareness: 100, threatLevel: 20, emotionalAttachment: 80, stability: 70, fourthWallAwareness: 85,
};

const endings = [
  { name: "Unnamed Open Ending", type: "MAIN", desc: "Complete Columbina\'s route with graceful options. Standard ending with a bittersweet dance sequence." },
  { name: "Columbina\'s Truth", type: "SECRET", desc: "Complete three perfect loops with perfect dialogue alignment. Any deviation resets to Loop 1. After three perfect loops, a fourth door appears." },
];

const hiddenTriggers = [
  { title: "Three-Loop Perfection", desc: "Loop 1: accept, comfort, encourage. Loop 2: observe, mirror, follow. Loop 3: watch, wait, listen. The game tracks deviations with hidden precision. Any deviation resets to Loop 1 with no notification." },
  { title: "Fourth Door Appearance", desc: "After three perfect loops, the hallway gains a fourth door. The door was always in the background files but invisible. The unlock condition requires cross-route completion." },
  { title: "Cross-Route Memory Fragments", desc: "Columbina\'s memory fragments reference events from all four character routes, including routes the player has not completed. This suggests her awareness is global." },
];

const personalityTraits = [
  { title: "Perfect Memory", text: "Columbina is the only character with cross-route awareness. Her memory fragments reference events from all other routes, suggesting she experiences the entire circus as a single continuous narrative." },
  { title: "Silent Observer", text: "Unlike other characters who actively engage, Columbina watches and waits. Her three-loop route requires the player to match her patience — any rush resets progress." },
  { title: "The Key Holder", text: "Many believe Columbina is the only character who truly understands the circus. Her Truth ending reveals content that recontextualizes all other routes." },
  { title: "Loop Architecture", text: "Her three-loop structure mirrors the game\'s overall narrative architecture, suggesting the entire circus is a single loop containing smaller loops within each character route." },
];

function StatBar({ label, value, color = accent }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-label text-[0.55rem] text-faint-paper w-28 shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-dark-border overflow-hidden"><div className="h-full transition-all duration-1000" style={{ width: `${value}%`, background: color }} /></div>
      <span className="font-label text-[0.5rem] text-faint-paper w-8 text-right">{value}%</span>
    </div>
  );
}

export default function ColumbinaClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/columbina-hero-new.png" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3"><span className="inline-block w-8 h-px" style={{ background: accent }} />CASE FILE 04</div>
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>COLUMBINA</h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">STATUS: {profile.status}</span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">FIRST ENCOUNTER: {profile.firstEncounter}</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[{ label: "ROLE", value: "Ballerina" }, { label: "KEY MECHANIC", value: "Three-Loop" }, { label: "ENDINGS", value: "2 Known" }, { label: "AWARENESS", value: "★★★★★" }].map((i) => (
              <div key={i.label} className="bg-void-black p-4"><div className="font-label text-[0.5rem] text-faint-paper mb-1">{i.label}</div><div className="text-paper text-sm font-medium">{i.value}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT ANALYSIS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Columbina?</h2>
            <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">Columbina</strong> is the ballerina of The Freak Circus. Her route uses a three-loop alignment mechanic where any deviation resets to Loop 1. She is the only character with cross-route awareness — her memory fragments reference events from all other routes.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">Columbina is the only character who truly understands the circus. Her three-loop route requires perfect dialogue alignment, and any deviation resets everything. After three perfect loops, a fourth door appears in her hallway.</p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img src="/columbina-hero-new.png" alt="Columbina portrait" className="w-full object-cover img-cinematic" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><div className="font-label text-[0.5rem] text-faint-paper">SUBJECT PORTRAIT</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT PROFILE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Character Profile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">PSYCHOLOGICAL METRICS</div>
              <div className="space-y-4">
                <StatBar label="LOOP AWARENESS" value={profile.loopAwareness} />
                <StatBar label="THREAT LEVEL" value={profile.threatLevel} />
                <StatBar label="ATTACHMENT" value={profile.emotionalAttachment} />
                <StatBar label="STABILITY" value={profile.stability} />
                <StatBar label="4TH WALL" value={profile.fourthWallAwareness} color="var(--doctor)" />
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">CLASSIFICATION DATA</div>
              <div className="space-y-4">
                {[{ l: "DESIGNATION", v: "Columbina" }, { l: "CLASSIFICATION", v: "Circus Entity" }, { l: "ROLE", v: "Ballerina" }, { l: "KEY MECHANIC", v: "Three-Loop Alignment" }, { l: "SECRET ENDING", v: "Columbina\'s Truth" }, { l: "KNOWN ASSOCIATIONS", v: "Pierrot / The Doctor / Player" }].map((i) => (
                  <div key={i.l} className="flex items-baseline gap-4"><span className="font-label text-[0.5rem] text-faint-paper w-32 shrink-0">{i.l}</span><span className="text-paper text-sm">{i.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />HIDDEN MECHANICS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Hidden Dialogue Triggers</h2>
          <div className="space-y-4">
            {hiddenTriggers.map((t, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <span className="font-label text-[0.5rem] px-2 py-0.5 mb-3 inline-block" style={{ color: accent, border: `1px solid ${accent}33`, background: `${accent}0D` }}>EVIDENCE {String(i + 1).padStart(3, "0")}</span>
                <h3 className="font-heading text-lg font-bold text-paper mb-2">{t.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />ENDING CATALOGUE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Columbina Route Endings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {endings.map((e, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${e.type === "SECRET" ? "var(--blood-red)" : accent}` }}>
                <span className="font-label text-[0.5rem] px-2 py-0.5 mb-3 inline-block" style={{ color: e.type === "SECRET" ? "var(--blood-red)" : accent, border: `1px solid ${e.type === "SECRET" ? "rgba(179,58,53,0.3)" : accent + "33"}`, background: e.type === "SECRET" ? "rgba(179,58,53,0.08)" : accent + "0D" }}>{e.type}</span>
                <h3 className="font-archive text-lg text-paper mb-2">{e.name}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[{ l: "Lore Archive", h: "/lore" }, { l: "All Endings", h: "/endings" }, { l: "Pierrot Character", h: "/characters/pierrot" }, { l: "Doctor Character", h: "/characters/doctor" }].map((lnk) => (
              <Link key={lnk.h} href={lnk.h} className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors">{lnk.l}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />FREQUENTLY ASKED</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Questions & Answers</h2>
          <div className="space-y-3">
            {faqData.map((f, i) => (
              <details key={i} className="group archive-card">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none"><span className="pr-4">{f.question}</span><span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span><span className="font-label text-[0.55rem] hidden group-open:inline shrink-0" style={{ color: accent }}>[−]</span></summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
