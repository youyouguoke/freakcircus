"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--harlequin)";
const accentGlow = "var(--harlequin-glow)";

const profile = {
  role: "THE PERFORMER", status: "ACTIVE", route: "AVAILABLE",
  firstEncounter: "Main Stage (Day 1)", keyMechanic: "Mock / Laugh",
  endings: "No confirmed endings yet (Day 3 pending)",
  loopAwareness: 80, threatLevel: 70, emotionalAttachment: 60, stability: 45, fourthWallAwareness: 75,
};

const endings = [
  { name: "Harlequin\'s Laughter", type: "MAIN", desc: "Maintain comedic choices through Acts I-II, then select the aggressive option in Scene 9. Standard ending with chaotic energy." },
  { name: "No confirmed ending yet", type: "TBD", desc: "Day 3 content will likely include Harlequin-specific endings." },
  { name: "Fractured Route Ending", type: "SECRET", desc: "Choose aggressive in Scene 4, then comedic in Scene 9. This contradiction triggers 7 undocumented hidden scenes." },
];

const hiddenTriggers = [
  { title: "\'You Again\' Replay Dialogue", desc: "On the 4th playthrough, Harlequin looks directly at the screen and says \'You again.\' This line does not appear in the script files of any known build." },
  { title: "Mirror Hall Cross-Route", desc: "After completing both Pierrot and Harlequin routes, the Mirror Hall scene changes. Harlequin\'s reflection appears in Pierrot\'s mirror, and vice versa." },
  { title: "Scene 12 Soft-Lock Pattern", desc: "Harlequin\'s fractured route shares the same soft-lock pattern in Scene 12 as The Doctor\'s route, suggesting a hidden connection." },
];

const personalityTraits = [
  { title: "Chaotic Energy", text: "Harlequin\'s dialogue shifts unpredictably between playful comedy and genuine menace. Players can never be sure which version they\'re talking to." },
  { title: "Hidden Awareness", text: "Her \'You again\' line on the 4th playthrough suggests she remembers the player across routes, similar to Pierrot but expressed through aggression rather than melancholy." },
  { title: "Performative Mask", text: "Unlike other characters, Harlequin\'s mask seems to change expressions. Datamined files show 12 different mask states, more than any other character." },
  { title: "Cross-Route Memory", text: "Her fractured route contains medical terminology only The Doctor uses, and her routes share the same soft-lock pattern as The Doctor\'s route in Scene 12." },
];

const theories = [
  { title: "Harlequin Is Not Human", confidence: 65, evidence: 4, status: "unverified", summary: "Her mask has 12 states (most characters have 3), her dialogue references events from outside the game\'s timeline, and she never removes her mask in any route.", items: ["12 mask sprite states", "References pre-1887 events", "Never appears without mask"] },
  { title: "Harlequin Remembers All Routes", confidence: 71, evidence: 3, status: "likely", summary: "Her \'You again\' line on the 4th playthrough is not in any script file. She may have her own form of loop memory independent of Pierrot.", items: ["\'You again\' not in script files", "Dialogue changes on replay", "References player behavior"] },
];

function StatBar({ label, value, color = accent }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-label text-[0.55rem] text-faint-paper w-28 shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-dark-border overflow-hidden">
        <div className="h-full transition-all duration-1000" style={{ width: `${value}%`, background: color }} />
      </div>
      <span className="font-label text-[0.5rem] text-faint-paper w-8 text-right">{value}%</span>
    </div>
  );
}

export default function HarlequinClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
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
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">FIRST ENCOUNTER: {profile.firstEncounter}</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[{ label: "ROLE", value: "Chaotic Performer" }, { label: "KEY MECHANIC", value: profile.keyMechanic }, { label: "ENDINGS", value: "3 Known" }, { label: "LOOP AWARE", value: "★★★★☆" }].map((item) => (
              <div key={item.label} className="bg-void-black p-4">
                <div className="font-label text-[0.5rem] text-faint-paper mb-1">{item.label}</div>
                <div className="text-paper text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT ANALYSIS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Harlequin?</h2>
            <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">Harlequin</strong> is the chaotic performer of The Freak Circus. Her dialogue shifts between playful and menacing. Players report her saying &ldquo;You again&rdquo; on the 4th playthrough — a line not found in any script file. She is romanceable and has multiple endings.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed mb-4">Harlequin brings unpredictable energy that shifts between playful comedy and genuine menace. Her route contains the most discussed hidden scenes in the community, including the famous &ldquo;You again&rdquo; replay dialogue that breaks the fourth wall.</p>
            <p className="text-faint-paper text-sm leading-relaxed">Her fractured route requires choosing contradictory dialogue options — aggressive in one scene, comedic in another. This contradiction triggers 7 undocumented hidden scenes that were discovered through community data mining.</p>
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

      {/* PROFILE STATS */}
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
                <StatBar label="STABILITY" value={profile.stability} color="var(--blood-red)" />
                <StatBar label="4TH WALL" value={profile.fourthWallAwareness} color="var(--doctor)" />
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">CLASSIFICATION DATA</div>
              <div className="space-y-4">
                {[{ l: "DESIGNATION", v: "Harlequin" }, { l: "CLASSIFICATION", v: "Circus Entity" }, { l: "ROLE", v: "Chaotic Performer" }, { l: "KEY MECHANIC", v: "Mock / Laugh" }, { l: "MAIN ENDING", v: "Harlequin\'s Laughter" }, { l: "KNOWN ASSOCIATIONS", v: "Pierrot / The Doctor / Player" }].map((i) => (
                  <div key={i.l} className="flex items-baseline gap-4"><span className="font-label text-[0.5rem] text-faint-paper w-32 shrink-0">{i.l}</span><span className="text-paper text-sm">{i.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIDDEN TRIGGERS */}
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

      {/* ENDINGS */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />ENDING CATALOGUE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Harlequin Route Endings</h2>
          <div className="grid md:grid-cols-3 gap-4">
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

      {/* PERSONALITY */}
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

      {/* THEORIES */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />THEORY DATABASE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Fan Theories</h2>
          <div className="space-y-4">
            {theories.map((t, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label text-[0.55rem] text-faint-paper">T_{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: t.status === "confirmed" ? "var(--status-confirmed)" : t.status === "likely" ? "var(--status-likely)" : "var(--status-unverified)", border: `1px solid ${t.status === "confirmed" ? "rgba(76,175,110,0.3)" : t.status === "likely" ? "rgba(196,154,60,0.3)" : "rgba(138,128,120,0.3)"}`, background: t.status === "confirmed" ? "rgba(76,175,110,0.08)" : t.status === "likely" ? "rgba(196,154,60,0.08)" : "rgba(138,128,120,0.08)" }}>{t.status.toUpperCase()}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-paper mb-2">{t.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed mb-4">{t.summary}</p>
                <div className="flex items-center gap-4 mb-3 pb-3 border-b border-dark-border">
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.evidence} EVIDENCE</span>
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.confidence}% CONFIDENCE</span>
                </div>
                <ul className="space-y-1">{t.items.map((e, j) => (<li key={j} className="text-faint-paper text-sm flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> {e}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[{ l: "Harlequin True Route", h: "/walkthroughs/harlequin-true-route" }, { l: "All Endings", h: "/endings" }, { l: "Pierrot Character", h: "/characters/pierrot" }, { l: "Mirror Hall Lore", h: "/lore/mirror-hall" }].map((lnk) => (
              <Link key={lnk.h} href={lnk.h} className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors">{lnk.l}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
