"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--ticket-taker)";

const profile = {
  role: "THE GATEKEEPER", status: "ACTIVE", route: "AVAILABLE",
  firstEncounter: "Circus Entrance (Day 1)", keyMechanic: "Mirror Scene",
  endings: "Multiple (cross-route)",
  loopAwareness: 75, threatLevel: 60, emotionalAttachment: 50, stability: 55, fourthWallAwareness: 80,
};

function StatBar({ label, value, color = accent }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-label text-[0.55rem] text-faint-paper w-28 shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-dark-border overflow-hidden"><div className="h-full transition-all duration-1000" style={{ width: `${value}%`, background: color }} /></div>
      <span className="font-label text-[0.5rem] text-faint-paper w-8 text-right">{value}%</span>
    </div>
  );
}

export default function TicketTakerClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/tickettaker-hero-new.webp" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3"><span className="inline-block w-8 h-px" style={{ background: accent }} />CASE FILE 06</div>
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>TICKET TAKER</h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">STATUS: {profile.status}</span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">FIRST ENCOUNTER: {profile.firstEncounter}</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[{ label: "ROLE", value: "Gatekeeper" }, { label: "KEY MECHANIC", value: "Mirror Scene" }, { label: "ENDINGS", value: "Cross-route" }, { label: "AWARENESS", value: "★★★★☆" }].map((i) => (
              <div key={i.label} className="bg-void-black p-4"><div className="font-label text-[0.5rem] text-faint-paper mb-1">{i.label}</div><div className="text-paper text-sm font-medium">{i.value}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />SUBJECT ANALYSIS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Ticket Taker?</h2>
            <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">Ticket Taker</strong> is the enigmatic sentinel at the threshold of The Freak Circus. The mirror scene where the player sees themselves wearing the mask spawned the Time-Loop Theory. Ticket Taker is the first and last character the player encounters.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">Ticket Taker exists at the boundary between the player and the circus. The mirror scene — where the player sees themselves wearing the mask — is one of the most discussed moments in the game and spawned the Time-Loop Theory.</p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img src="/tickettaker-hero-new.webp" alt="Ticket Taker portrait" className="w-full object-cover img-cinematic" />
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
                {[{ l: "DESIGNATION", v: "Ticket Taker" }, { l: "CLASSIFICATION", v: "Circus Entity" }, { l: "ROLE", v: "Gatekeeper" }, { l: "KEY MECHANIC", v: "Mirror Scene" }, { l: "KNOWN ASSOCIATIONS", v: "The Doctor / All Characters" }].map((i) => (
                  <div key={i.l} className="flex items-baseline gap-4"><span className="font-label text-[0.5rem] text-faint-paper w-32 shrink-0">{i.l}</span><span className="text-paper text-sm">{i.v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[{ l: "All Characters", h: "/characters" }, { l: "Doctor Character", h: "/characters/doctor" }, { l: "Lore Archive", h: "/lore" }, { l: "Theories", h: "/theories" }].map((lnk) => (
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
