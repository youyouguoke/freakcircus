"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--doctor)";

const profile = {
  role: "THE PHYSICIAN", status: "ACTIVE", route: "NOT CONFIRMED",
  firstEncounter: "Medical Tent (Day 1)",
};

const endings: { name: string; type: string; desc: string }[] = [
  // No confirmed endings for The Doctor
];

const hiddenTriggers = [
  { title: "Community-Observed Behavior", desc: "Players have reported The Doctor exhibiting unusual dialogue patterns in Day 2 content. Whether these observations represent intentional design or player interpretation is unverified." },
  { title: "Reported Hidden Content", desc: "Community members have speculated about hidden files or items related to The Doctor. No independent verification exists for specific locations or contents." },
];

const personalityTraits = [
  { title: "Clinical Demeanor", text: "The Doctor presents as detached and clinical in his interactions. Whether this masks deeper awareness or is simply his character archetype is unverified." },
  { title: "Observer Role", text: "Community members have noted The Doctor appears to observe other characters and events. Whether this constitutes meta-awareness or is standard narrative function is unverified." },
  { title: "Connection to Ticket Taker", text: "Both characters appear in Day 2 tent-based content. Whether they have a deeper narrative connection is unverified community speculation." },
];

const theories: { title: string; confidence: number; evidence: number; status: string; summary: string; items: string[] }[] = [
  // Removed local theory database — theories are maintained on /theories page
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
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
            {[{ label: "ROLE", value: "Circus Physician" }, { label: "STATUS", value: "Active" }, { label: "ENDINGS", value: "None confirmed" }, { label: "AWARENESS", value: "★★★★★" }].map((i) => (
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
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">The Doctor</strong> is a circus physician who appears in Day 2 tent-based content. He presents as clinical and detached. Whether he has deeper narrative significance or meta-awareness is unverified community speculation.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">Community reports suggest The Doctor may reference events before they occur. Whether this is intentional design or player interpretation remains unverified.</p>
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
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">COMMUNITY ASSESSMENT</div>
              <div className="space-y-3">
                <div>
                  <div className="font-label text-[0.5rem] text-faint-paper mb-1">THREAT LEVEL</div>
                  <p className="text-faint-paper text-sm">The Doctor's threat level is unclear — his clinical demeanor unsettles some players, but whether this indicates danger is unverified.</p>
                </div>
                <div>
                  <div className="font-label text-[0.5rem] text-faint-paper mb-1">AWARENESS</div>
                  <p className="text-faint-paper text-sm">Some players interpret The Doctor's dialogue as meta-awareness, but this remains unverified speculation.</p>
                </div>
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">CLASSIFICATION DATA</div>
              <div className="space-y-4">
                {[{ l: "DESIGNATION", v: "The Doctor" }, { l: "CLASSIFICATION", v: "Circus Entity" }, { l: "ROLE", v: "Circus Physician" }, { l: "CONFIRMED ENDINGS", v: "None" }, { l: "KNOWN APPEARANCES", v: "Day 2 tent routes" }].map((i) => (
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
          <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label text-[0.55rem] px-2 py-0.5 border border-status-unverified/30 text-status-unverified bg-status-unverified/8">NO CONFIRMED ENDINGS</span>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">The Doctor has no confirmed endings associated with a dedicated route. Whether any endings are specifically tied to The Doctor is unverified.</p>
            <p className="text-muted-paper text-xs mt-3">The current build has 1 confirmed ending (Missing). The developer has planned 4 additional endings, but none are implemented yet.</p>
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
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />THEORY CONNECTIONS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Fan Theories</h2>
          <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
            <p className="text-faint-paper text-sm leading-relaxed mb-4">Community members have speculated about The Doctor's role in the narrative, including theories about meta-awareness and connections to the circus's nature. Whether any of these theories are correct is unverified.</p>
            <p className="text-faint-paper text-sm leading-relaxed">For the complete list of community theories, see the <Link href="/theories" className="text-paper hover:text-circus-red transition-colors underline underline-offset-2">Theories Hub</Link>.</p>
          </div>
        </div>
      </section>

      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[{ l: "All Characters", h: "/characters" }, { l: "Ticket Taker", h: "/ticket-taker" }, { l: "All Theories", h: "/theories" }, { l: "All Endings", h: "/endings" }].map((lnk) => (
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