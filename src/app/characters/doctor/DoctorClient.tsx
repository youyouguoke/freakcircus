"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--doctor)";

const profile = {
  role: "THE PHYSICIAN", status: "ACTIVE", route: "AVAILABLE",
  firstEncounter: "Medical Tent (Day 1)", keyMechanic: "Collect Medical Files",
  endings: "Doctor\'s Note / Unnamed Open Ending",
  loopAwareness: 95, threatLevel: 85, emotionalAttachment: 30, stability: 60, fourthWallAwareness: 98,
};

const endings = [
  { name: "Doctor\'s Note", type: "MAIN", desc: "Collect at least 3 medical files and accept his diagnosis. The prescription appears in your next route." },
  { name: "Unnamed Open Ending", type: "SECRET", desc: "Find all 5 medical files, trigger the mirror connection, select \'Ask about the white room\' in Scene 12. Screen fades to white for 2 minutes." },
  { name: "Unnamed Open Ending", type: "STANDARD", desc: "Complete the route without finding enough medical files. The Doctor dismisses the player with a prescription that references other routes." },
];

const hiddenTriggers = [
  { title: "Precognitive Dialogue (Scene 7)", desc: "The Doctor describes the Unnamed Open Ending ending with disturbing accuracy — three routes before it becomes accessible. His description matches a Unity testing environment." },
  { title: "5 Hidden Medical Files", desc: "File 1 (Scene 2 drawer): Pierrot — chronic dissociative episodes. File 2 (Scene 4 cabinet): Harlequin — rapid affective switching. File 3 (Scene 6 floorboard): Columbina — persecutory delusions. File 4 (Scene 8 bookshelf): The Doctor himself — blank except \'Subject is aware of observation.\' File 5 (Scene 10 desk): The player\'s behavioral profile." },
  { title: "Mirror Connection", desc: "The mirror in Scene 9 shows Columbina\'s reflection when The Doctor looks. This only appears after failing his main route once." },
];

const personalityTraits = [
  { title: "Clinical Detachment", text: "The Doctor observes without emotional involvement. His medical notes are clinical, precise, and occasionally reference things he shouldn\'t know about." },
  { title: "Precognitive Awareness", text: "He describes endings before they occur and references file paths that only exist in the game\'s internal directory structure." },
  { title: "Meta-Narrative Voice", text: "Community analysis suggests The Doctor represents the game\'s developer consciousness within the narrative — aware of the engine, the save system, and the player." },
  { title: "Connection to Ticket Taker", text: "Multiple evidence points: identical height (188cm), shared vocal frequency patterns, matching robe wallpaper patterns, and they never appear in the same scene." },
];

const theories = [
  { title: "The Doctor Is The Observer", confidence: 67, evidence: 4, status: "likely", summary: "The Doctor may be aware of the player directly, breaking the fourth wall through clinical observations.", items: ["Scene 7 precognitive dialogue", "File 5 contains player behavioral profile", "Description matches Unity testing room"] },
  { title: "Doctor Created The Circus", confidence: 55, evidence: 3, status: "unverified", summary: "Some theorists believe The Doctor created the circus as a psychological experiment, with the other characters as test subjects.", items: ["Medical files reference all characters", "Unnamed Open Ending may be observation room", "He is the only character with admin-level knowledge"] },
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

export default function DoctorClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/doctor-hero-new.webp" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3"><span className="inline-block w-8 h-px" style={{ background: accent }} />CASE FILE 03</div>
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>THE DOCTOR</h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">STATUS: {profile.status}</span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">FIRST ENCOUNTER: {profile.firstEncounter}</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[{ label: "ROLE", value: "Circus Physician" }, { label: "KEY MECHANIC", value: "Medical Files" }, { label: "ENDINGS", value: "3 Known" }, { label: "AWARENESS", value: "★★★★★" }].map((i) => (
              <div key={i.label} className="bg-void-black p-4"><div className="font-label text-[0.5rem] text-faint-paper mb-1">{i.label}</div><div className="text-paper text-sm font-medium">{i.value}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT ANALYSIS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is The Doctor?</h2>
            <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">The Doctor</strong> is the circus physician whose clinical detachment masks unsettling awareness. He describes the Unnamed Open Ending ending in Scene 7 with disturbing accuracy and his medical files contain a psychological profile that matches the player&apos;s choice patterns.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">The Doctor references endings before they occur and his medical files contain timestamps matching real-world save creation dates. His Scene 7 description of the Unnamed Open Ending matches unused files found in build 1.04.</p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img src="/doctor-hero-new.webp" alt="Doctor portrait" className="w-full object-cover img-cinematic" />
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
                <StatBar label="4TH WALL" value={profile.fourthWallAwareness} color="var(--blood-red)" />
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">CLASSIFICATION DATA</div>
              <div className="space-y-4">
                {[{ l: "DESIGNATION", v: "The Doctor" }, { l: "CLASSIFICATION", v: "Circus Entity" }, { l: "ROLE", v: "Circus Physician" }, { l: "KEY MECHANIC", v: "Collect Medical Files" }, { l: "SECRET ENDING", v: "Unnamed Open Ending" }, { l: "KNOWN ASSOCIATIONS", v: "Columbina / Ticket Taker / Player" }].map((i) => (
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Doctor Route Endings</h2>
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
                <div className="flex items-center gap-4 mb-3 pb-3 border-b border-dark-border"><span className="font-label text-[0.5rem] text-faint-paper">{t.evidence} EVIDENCE</span><span className="font-label text-[0.5rem] text-faint-paper">{t.confidence}% CONFIDENCE</span></div>
                <ul className="space-y-1">{t.items.map((e, j) => (<li key={j} className="text-faint-paper text-sm flex items-start gap-2"><span className="text-circus-red mt-1">▸</span> {e}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[{ l: "Doctor Memory Route", h: "/walkthroughs/doctor-memory-route" }, { l: "All Endings", h: "/endings" }, { l: "Unnamed Open Ending Lore", h: "/lore/mirror-hall" }, { l: "Columbina Character", h: "/characters/columbina" }].map((lnk) => (
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
