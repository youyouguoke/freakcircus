"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "var(--columbina)";

const profile = {
  role: "THE BALLERINA",
  status: "DECEASED",
  route: "NONE — NOT PLAYABLE",
  firstEncounter: "Referenced in Day 2 backstory",
  keyMechanic: "N/A (deceased character)",
  endings: "None",
};

export default function ColumbinaClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
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
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-deceased border border-status-deceased/30 bg-status-deceased/8">STATUS: {profile.status}</span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">ROUTE: NONE</span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[{ label: "ROLE", value: "Ballerina (lore)" }, { label: "STATUS", value: "Deceased" }, { label: "ROUTE", value: "None" }, { label: "ENDINGS", value: "0" }].map((i) => (
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
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>⚠️ DECEASED CHARACTER — NOT PLAYABLE</div>
              <p className="text-faint-paper text-sm leading-relaxed"><strong className="text-paper">Columbina</strong> is a deceased character in The Freak Circus. She was Pierrot&apos;s former partner and was killed (poisoned and eaten) by Harlequin. She does NOT have a playable route, does NOT appear as an interactive character, and has NO associated endings. She exists only in backstory and the &quot;Columbina legend&quot; referenced in Day 2.</p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">Previously, this site incorrectly presented Columbina as a playable character with a &quot;three-loop route&quot; and endings. This has been corrected. Columbina is a lore-only character who provides backstory context for Pierrot and Harlequin&apos;s rivalry.</p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img src="/columbina-hero-new.png" alt="Columbina portrait" className="w-full object-cover img-cinematic" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4"><div className="font-label text-[0.5rem] text-faint-paper">SUBJECT PORTRAIT (lore only)</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />WHAT HAPPENED TO COLUMBINA</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">The Columbina Legend</h2>
          <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
            <p className="text-faint-paper text-sm leading-relaxed mb-4">According to community sources and YouTube playthroughs:</p>
            <ul className="space-y-2 text-faint-paper text-sm">
              <li>• Columbina was Pierrot&apos;s former partner</li>
              <li>• Harlequin poisoned and ate Columbina</li>
              <li>• Her last words were &quot;save me&quot;, which Harlequin misinterpreted as permission to consume her</li>
              <li>• The MC resembles Columbina, which is why Pierrot transfers his obsession to the MC</li>
              <li>• This backstory is referenced in Day 2 content</li>
            </ul>
            <p className="text-muted-paper text-xs mt-4">Sources: YouTube playthroughs, community reports</p>
          </div>
        </div>
      </section>

      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}><span className="inline-block w-6 h-px" style={{ background: accent }} />CORRECTION NOTICE</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Previous Errors on This Site</h2>
          <div className="archive-card border border-red-500/30">
            <p className="text-faint-paper text-sm leading-relaxed mb-4">This page previously contained fabricated content including:</p>
            <ul className="space-y-2 text-faint-paper text-sm">
              <li>❌ &quot;Three-loop alignment route&quot; — Columbina has no playable route</li>
              <li>❌ &quot;Columbina&apos;s Truth ending&quot; — No such ending exists</li>
              <li>❌ &quot;Fourth door appears after three loops&quot; — Fabricated mechanic</li>
              <li>❌ &quot;Cross-route awareness&quot; — Not a verified game feature</li>
              <li>❌ Status shown as &quot;ACTIVE&quot; with &quot;AVAILABLE&quot; route — Columbina is deceased</li>
            </ul>
            <p className="text-muted-paper text-xs mt-4">These errors have been corrected. Columbina is a deceased lore-only character with no playable route or endings.</p>
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
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none"><span className="pr-4">{f.question}</span><span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span><span className="font-label text-[0.55rem] hidden group-open:inline shrink-0" style={{ color: accent }}>[-]</span></summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
