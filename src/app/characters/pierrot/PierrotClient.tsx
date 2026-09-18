'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import CharacterPageNav from '@/components/archive/CharacterPageNav';
import { PLAYTIME_LABEL, CURRENT_VERSION } from '@/lib/site-facts';

const accent = 'var(--pierrot)';

const charNavItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Route', href: '#route' },
  { label: 'Endings', href: '#endings' },
  { label: 'Personality', href: '#personality' },
  { label: 'Theories', href: '#theories' },
  { label: 'FAQ', href: '#faq' },
];

const profile = {
  role: 'THE CLOWN',
  status: 'ACTIVE',
  route: 'AVAILABLE',
  firstEncounter: 'Day 1',
  endings: '0 confirmed (1 planned)',
};

export default function PierrotClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <CharacterPageNav items={charNavItems} accentColor={accent} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/pierrot-hero.webp" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background: accent }} />
              CASE FILE 01
            </div>
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>
              PIERROT
            </h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">
                STATUS: {profile.status}
              </span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">
                ROUTE: {profile.route}
              </span>
            </div>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {[
              { label: 'HEIGHT', value: '198cm' },
              { label: 'EYES', value: 'Golden' },
              { label: 'ENDINGS', value: profile.endings },
              { label: 'ARCHETYPE', value: 'Silent Yandere' },
            ].map((item) => (
              <div key={item.label} className="bg-void-black p-4">
                <div className="font-label text-[0.5rem] text-faint-paper mb-1">{item.label}</div>
                <div className="text-paper text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-fade-in-slow" style={{ animationDelay: '1.5s' }}>
          <span className="font-label text-dim-paper text-[0.5rem] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-6 bg-gradient-to-b from-dim-paper to-transparent" />
        </div>
      </section>

      {/* ═══ WHO IS PIERROT ═══ */}
      <section id="profile" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
                <span className="inline-block w-6 h-px" style={{ background: accent }} />
                SUBJECT ANALYSIS
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Pierrot?</h2>
              <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
                <p className="text-faint-paper text-sm leading-relaxed">
                  <strong className="text-paper">Pierrot</strong> is a 198cm tall performer with golden eyes, described as a silent yandere. He becomes obsessed with the MC after they defend him from an attacker. His former partner Columbina was killed (poisoned and eaten) by Harlequin. The developer has planned a dedicated ending for Pierrot, but it is not yet implemented.
                </p>
              </div>
              <p className="text-faint-paper text-sm leading-relaxed mb-4">
                Pierrot is one of the two main characters in The Freak Circus, introduced in Day 1. He is described as quiet, watchful, and deeply possessive. The Columbina legend in Day 2 reveals the backstory behind his rivalry with Harlequin.
              </p>
              <p className="text-faint-paper text-sm leading-relaxed">
                Some community members report that Pierrot&apos;s dialogue may change across playthroughs, suggesting possible replay-aware behavior. However, specific mechanics like hidden counters remain unverified community speculation.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="relative overflow-hidden">
                <img src="/pierrot-hero.webp" alt="Pierrot portrait" className="w-full object-cover img-cinematic" />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-label text-[0.5rem] text-faint-paper">SUBJECT PORTRAIT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ROUTE OVERVIEW ═══ */}
      <section id="route" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            ROUTE DATA
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Pierrot&apos;s Route</h2>
          <div className="space-y-4 max-w-3xl">
            <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
              <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>✓ VERIFIED</div>
              <ul className="space-y-2 text-faint-paper text-sm">
                <li>• Pierrot is one of the two main character routes (alongside Harlequin)</li>
                <li>• Introduced in Day 1, story deepens in Day 2 tent routes</li>
                <li>• The Columbina legend in Day 2 explains his rivalry with Harlequin</li>
                <li>• Community players report approximately {PLAYTIME_LABEL} for both days combined</li>
              </ul>
            </div>
            <div className="archive-card" style={{ borderLeft: '3px solid var(--status-unverified)' }}>
              <div className="font-label text-[0.55rem] mb-2 text-status-unverified">? UNVERIFIED</div>
              <ul className="space-y-2 text-faint-paper text-sm">
                <li>• Whether Pierrot has multiple ending paths in the current build is unknown</li>
                <li>• Specific dialogue triggers and scene numbers have not been independently confirmed</li>
                <li>• Whether &quot;replay-aware dialogue&quot; exists is debated in the community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENDINGS ═══ */}
      <section id="endings" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            ENDING STATUS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Pierrot&apos;s Endings</h2>

          <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
            <div className="font-label text-[0.55rem] px-2 py-0.5 border border-amber-500/30 text-amber-400 bg-amber-500/8 inline-block mb-3">
              PLANNED — NOT IN GAME
            </div>
            <h3 className="font-archive text-lg text-paper mb-2">Pierrot&apos;s ending</h3>
            <p className="text-faint-paper text-sm leading-relaxed">
              The developer has listed a planned ending for Pierrot on the official itch.io page under &quot;What is planned?&quot;.
              This ending is <strong>not yet implemented</strong> in the current {CURRENT_VERSION} build.
              The developer also states: &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;
            </p>
            <p className="text-dim-paper text-xs mt-3">Source: itch.io (garula.itch.io/the-freak-circus)</p>
          </div>

          <div className="archive-card" style={{ borderLeft: '3px solid var(--status-unverified)' }}>
            <div className="font-label text-[0.55rem] mb-2 text-status-unverified">NOTE</div>
            <p className="text-faint-paper text-sm leading-relaxed">
              The only ending confirmed to exist in the current build is &quot;Missing&quot; (Bad Ending), which is associated with <strong>Harlequin&apos;s</strong> route, not Pierrot&apos;s.
              Whether Pierrot&apos;s route has any endings in the current build is unverified.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PERSONALITY ═══ */}
      <section id="personality" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            BEHAVIORAL ANALYSIS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Personality Analysis</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Quiet & Watchful', text: 'Pierrot\'s default state is quiet observation. He watches rather than participates, speaks in fragments, and reacts to player choices with delayed emotional responses. Described as "quiet, watchful, and deeply possessive."' },
              { title: 'Possessive Attachment', text: 'When the player engages with other characters, Pierrot\'s dialogue shifts. He references the player\'s absence, questions their loyalty, and in later scenes, may directly confront the player about other relationships.' },
              { title: 'Yandere Tendencies', text: 'Community analysis identifies classic yandere patterns: initial gentleness that masks obsessive behavior, emotional dependency that becomes controlling. This is a community interpretation.' },
              { title: 'Driven by Columbina Legend', text: 'The Columbina legend in Day 2 provides context for Pierrot\'s behavior. Because the MC resembles Columbina (who was killed by Harlequin), Pierrot transferred his obsession to the MC.' },
            ].map((trait, i) => (
              <div key={i} className="archive-card">
                <h3 className="font-heading text-base font-bold text-paper mb-2">{trait.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{trait.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMUNITY TIPS ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            COMMUNITY TIPS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Playing Pierrot&apos;s Route</h2>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl">
            {[
              'Save before major dialogue choices — some may lock you into specific paths',
              'Pay attention to the Columbina legend in Day 2 for context',
              'Day 1 establishes the Pierrot vs Harlequin dynamic — choose carefully',
              'Multiple playthroughs may reveal different dialogue variations (unverified)',
            ].map((step, i) => (
              <div key={i} className="archive-card flex items-start gap-3 py-3 px-4">
                <span className="font-label text-[0.5rem] shrink-0 mt-0.5" style={{ color: accent }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-faint-paper text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THEORIES ═══ */}
      <section id="theories" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            COMMUNITY THEORIES
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Related Theories</h2>
          <div className="space-y-4">
            {[
              { title: 'Pierrot Remembers Previous Playthroughs', status: 'UNVERIFIED', desc: 'Some players report that Pierrot\'s dialogue changes after repeated playthroughs. Claims about specific save file mechanics (e.g., hidden counters at offset 0x4A20) are unconfirmed community speculation. See /theories for the full community discussion.' },
              { title: 'Columbina\'s Death Drives Everything', status: 'PARTIALLY VERIFIED', desc: 'The Columbina legend is confirmed to appear in Day 2. It explains the rivalry between Pierrot and Harlequin: Harlequin killed Columbina, Pierrot\'s former partner. This is the central event driving the story.' },
            ].map((t, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg font-bold text-paper">{t.title}</h3>
                  <span className={`font-label text-[0.5rem] px-2 py-0.5 ${t.status === 'PARTIALLY VERIFIED' ? 'text-amber-400 border border-amber-500/30 bg-amber-500/8' : 'text-status-unverified border border-status-unverified/30 bg-status-unverified/8'}`}>
                    {t.status}
                  </span>
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
              { label: 'Harlequin Character', href: '/characters/harlequin' },
              { label: 'Columbina (Deceased)', href: '/characters/columbina' },
              { label: 'All Endings', href: '/endings' },
              { label: 'Theories', href: '/theories' },
              { label: 'Pierrot Route Walkthrough', href: '/walkthroughs/pierrot-main-route' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            FREQUENTLY ASKED
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Questions & Answers</h2>
          <div className="space-y-3">
            {faqData.map((f, i) => (
              <details key={i} className="group archive-card">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                  <span className="pr-4">{f.question}</span>
                  <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span>
                  <span className="font-label text-[0.55rem] hidden group-open:inline shrink-0" style={{ color: accent }}>[−]</span>
                </summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
