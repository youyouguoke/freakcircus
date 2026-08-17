'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import CharacterPageNav from '@/components/archive/CharacterPageNav';

const accent = 'var(--pierrot)';
const accentGlow = 'var(--pierrot-glow)';

const charNavItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Stats', href: '#stats' },
  { label: 'Route', href: '#route' },
  { label: 'Triggers', href: '#triggers' },
  { label: 'Endings', href: '#endings' },
  { label: 'Theories', href: '#theories' },
  { label: 'FAQ', href: '#faq' },
];

const profile = {
  role: 'THE CLOWN',
  status: 'ACTIVE',
  route: 'AVAILABLE',
  firstEncounter: 'The Garden (Day 1)',
  keyMechanic: 'Comfort / Confess',
  endings: 'Open Ending B (unnamed) / Open Ending C (unnamed)',
  loopAwareness: 95,
  threatLevel: 40,
  emotionalAttachment: 95,
  stability: 15,
  fourthWallAwareness: 90,
};

const endings = [
  { name: 'Open Ending B (unnamed)', type: 'MAIN', desc: 'Accept Pierrot\'s offer in the garden scene. Standard ending with bittersweet conclusion.' },
  { name: 'Open Ending C (unnamed)', type: 'SECRET', desc: 'Refuse all dialogue in the final act. Screen remains black for 3-4 minutes. Pierrot references previous unselected choices.' },
  { name: 'Unnamed Open Ending', type: 'CORRUPTED', desc: 'Found in unused game files. No character appears. Player walks through empty corridors until soft-lock.' },
];

const hiddenTriggers = [
  { title: 'Day 1 First Encounter', desc: 'Pierrot is introduced in Day 1 alongside Harlequin. The initial encounter sets up their rivalry and the player\'s first choice between the two characters.' },
  { title: 'Day 2 Tent Content', desc: 'Day 2 features tent-based scenes involving Pierrot. The Columbina legend is revealed, providing context for Pierrot and Harlequin\'s rivalry.' },
  { title: 'Multiple Endings', desc: 'Community reports suggest Pierrot\'s route has multiple ending paths, though only "Missing" (associated with Harlequin) has been confirmed by name.' },
];

const personalityTraits = [
  { title: 'Melancholic Withdrawal', text: 'Pierrot\'s default state is quiet observation. He watches rather than participates, speaks in fragments, and reacts to player choices with delayed emotional responses.' },
  { title: 'Possessive Attachment', text: 'When the player engages with other characters, Pierrot\'s dialogue shifts. He references the player\'s absence, questions their loyalty, and in later scenes, directly confronts the player about other relationships.' },
  { title: 'Mystery', text: 'Pierrot\'s true motivations remain partially hidden. The Columbina legend in Day 2 provides some context, but much about his character is left for players to interpret.' },
  { title: 'Yandere Tendencies', text: 'Community analysis identifies classic yandere patterns: initial gentleness that masks obsessive behavior, emotional dependency that becomes controlling.' },
];

const theories = [
  { title: 'Pierrot\'s Yandere Nature', confidence: 90, evidence: 8, status: 'likely', summary: 'Community analysis identifies classic yandere patterns in Pierrot: initial gentleness masking obsessive behavior, emotional dependency that becomes controlling.', items: ['Described as yandere by official sources', 'Possessive behavior toward the player character', 'Rivalry with Harlequin driven by obsession'] },
  { title: 'Pierrot and Columbina Connection', confidence: 85, evidence: 5, status: 'likely', summary: 'The Columbina legend in Day 2 reveals a tragic backstory connecting Pierrot and Harlequin. This is confirmed by multiple community sources.', items: ['Columbina legend appears in Day 2', 'Explains the rivalry between Pierrot and Harlequin', 'Referenced by thefreakcircus.org and YouTube playthroughs'] },
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

export default function PierrotClient({ faqData }: { faqData: { question: string; answer: string }[] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <article>
      <CharacterPageNav items={charNavItems} accentColor={accent} />

      {/* ═══════════════════════════════════════════
          SCREEN 1 — CHARACTER DOSSIER HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src="/pierrot-hero.webp" alt="" className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Case file number */}
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background: accent }} />
              CASE FILE 01
            </div>

            {/* Character name */}
            <h1 className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2" style={{ color: accent }}>
              PIERROT
            </h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">{profile.role}</p>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">
                STATUS: {profile.status}
              </span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">
                ROUTE: {profile.route}
              </span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">
                FIRST ENCOUNTER: {profile.firstEncounter}
              </span>
            </div>
          </div>

          {/* Quick info grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {[
              { label: 'ROLE', value: 'Melancholic Clown' },
              { label: 'KEY MECHANIC', value: profile.keyMechanic },
              { label: 'ENDINGS', value: '2 Known' },
              { label: 'LOOP AWARE', value: '★★★★★' },
            ].map((item) => (
              <div key={item.label} className="bg-void-black p-4">
                <div className="font-label text-[0.5rem] text-faint-paper mb-1">{item.label}</div>
                <div className="text-paper text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-fade-in-slow" style={{ animationDelay: '1.5s' }}>
          <span className="font-label text-dim-paper text-[0.5rem] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-6 bg-gradient-to-b from-dim-paper to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SCREEN 2 — WHO IS PIERROT?
          ═══════════════════════════════════════════ */}
      <section id="profile" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Left: text */}
            <div className="md:col-span-3">
              <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
                <span className="inline-block w-6 h-px" style={{ background: accent }} />
                SUBJECT ANALYSIS
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Who Is Pierrot?</h2>

              {/* Quick Answer — SEO */}
              <div className="archive-card mb-6" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="font-label text-[0.55rem] mb-2" style={{ color: accent }}>QUICK ANSWER</div>
                <p className="text-faint-paper text-sm leading-relaxed">
                  <strong className="text-paper">Who is Pierrot?</strong> Pierrot is the melancholic clown of The Freak Circus, often the first route players encounter. He is romanceable, loop-aware (references previous playthroughs), and has two endings: Open Ending B (unnamed) (main) and Open Ending C (unnamed) (secret). His personality combines melancholy, possessiveness, and emotional dependency — community analysis identifies strong yandere tendencies.
                </p>
              </div>

              <p className="text-faint-paper text-sm leading-relaxed mb-4">
                Pierrot is the melancholic clown of The Freak Circus and often the first route players encounter. Beneath his withdrawn, observant demeanor lies one of the most complex character arcs in the game. His storyline explores themes of forgotten identity, repeated loops, and awareness that extends beyond the fourth wall.
              </p>
              <p className="text-faint-paper text-sm leading-relaxed">
                The loop theory suggests Pierrot remembers player behavior across save files, adjusting his dialogue and reactions accordingly. His garden scene contains hidden triggers that only appear after failing his route once, and the silence mechanic in his route leads to the Open Ending C (unnamed) ending — one of the most discussed outcomes in the community.
              </p>
            </div>

            {/* Right: portrait */}
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

      {/* ═══════════════════════════════════════════
          SCREEN 3 — CHARACTER PROFILE (STAT BARS)
          ═══════════════════════════════════════════ */}
      <section id="stats" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            SUBJECT PROFILE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Character Profile</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Stat bars */}
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

            {/* Profile info */}
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">CLASSIFICATION DATA</div>
              <div className="space-y-4">
                {[
                  { label: 'DESIGNATION', value: 'Pierrot' },
                  { label: 'CLASSIFICATION', value: 'Circus Entity' },
                  { label: 'ROLE', value: 'Melancholic Clown' },
                  { label: 'KEY MECHANIC', value: 'Comfort / Confess' },
                  { label: 'MAIN ENDING', value: 'Open Ending B (unnamed)' },
                  { label: 'SECRET ENDING', value: 'Open Ending C (unnamed)' },
                  { label: 'KNOWN ASSOCIATIONS', value: 'Columbina / Harlequin / Player' },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4">
                    <span className="font-label text-[0.5rem] text-faint-paper w-32 shrink-0">{item.label}</span>
                    <span className="text-paper text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ROUTE OVERVIEW
          ═══════════════════════════════════════════ */}
      <section id="route" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            ROUTE DATA
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Pierrot Main Route Overview</h2>
          <p className="text-faint-paper text-sm leading-relaxed mb-4 max-w-3xl">
            Pierrot&apos;s main route is the most commonly recommended starting point for new players. It introduces core mechanics including the dialogue choice system, the comfort/confess dynamic, and the first instance of replay-aware dialogue. The route takes approximately 4-6 hours for a first playthrough and contains 12 major scenes with branching decisions.
          </p>
          <p className="text-faint-paper text-sm leading-relaxed max-w-3xl">
            The main route ending, &ldquo;Open Ending B (unnamed),&rdquo; triggers when players accept Pierrot&apos;s offer during the garden scene in Act III. However, community testing has revealed that this ending is not the full picture — Pierrot&apos;s route contains hidden content that only appears after specific refusal conditions and cross-route dependencies.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMMUNITY TIPS
          ═══════════════════════════════════════════ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            COMMUNITY TIPS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">Playing Pierrot&apos;s Route</h2>
          <p className="text-faint-paper text-sm leading-relaxed mb-6 max-w-3xl">
            Pierrot is one of the two main character routes in The Freak Circus. Here are community tips for getting the most out of his storyline.
          </p>

          <div className="grid md:grid-cols-2 gap-3 max-w-3xl">
            {['Save before major dialogue choices — some may lock you into specific paths', 'Pay attention to the Columbina legend in Day 2 for context', 'Multiple playthroughs may be needed to see all Pierrot content', 'Day 1 establishes the Pierrot vs Harlequin dynamic — choose carefully'].map((step, i) => (
              <div key={i} className="archive-card flex items-start gap-3 py-3 px-4">
                <span className="font-label text-[0.5rem] shrink-0 mt-0.5" style={{ color: accent }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-faint-paper text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HIDDEN TRIGGERS
          ═══════════════════════════════════════════ */}
      <section id="triggers" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            HIDDEN MECHANICS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Hidden Dialogue Triggers</h2>

          <div className="space-y-4">
            {hiddenTriggers.map((trigger, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: accent, border: `1px solid ${accent}33`, background: `${accent}0D` }}>
                    EVIDENCE {String(i + 1).padStart(3, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-paper mb-2">{trigger.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{trigger.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ENDINGS
          ═══════════════════════════════════════════ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12" id="endings">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            ENDING CATALOGUE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Pierrot Route Endings</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {endings.map((ending, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${ending.type === 'SECRET' ? 'var(--blood-red)' : ending.type === 'CORRUPTED' ? 'var(--status-corrupted)' : accent}` }}>
                <span className="font-label text-[0.5rem] px-2 py-0.5 mb-3 inline-block"
                  style={{
                    color: ending.type === 'SECRET' ? 'var(--blood-red)' : ending.type === 'CORRUPTED' ? 'var(--status-corrupted)' : accent,
                    border: `1px solid ${ending.type === 'SECRET' ? 'rgba(179,58,53,0.3)' : ending.type === 'CORRUPTED' ? 'rgba(179,58,53,0.3)' : `${accent}33`}`,
                    background: ending.type === 'SECRET' ? 'rgba(179,58,53,0.08)' : ending.type === 'CORRUPTED' ? 'rgba(179,58,53,0.08)' : `${accent}0D`,
                  }}
                >
                  {ending.type}
                </span>
                <h3 className="font-archive text-lg text-paper mb-2">{ending.name}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{ending.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PERSONALITY ANALYSIS
          ═══════════════════════════════════════════ */}
      <section id="personality" className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            BEHAVIORAL ANALYSIS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Personality Analysis</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {personalityTraits.map((trait, i) => (
              <div key={i} className="archive-card">
                <h3 className="font-heading text-base font-bold text-paper mb-2">{trait.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed">{trait.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAN THEORIES
          ═══════════════════════════════════════════ */}
      <section id="theories" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-3 flex items-center gap-3" style={{ color: accent }}>
            <span className="inline-block w-6 h-px" style={{ background: accent }} />
            THEORY DATABASE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Fan Theories</h2>

          <div className="space-y-4">
            {theories.map((t, i) => (
              <div key={i} className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label text-[0.55rem] text-faint-paper">T_{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-label text-[0.5rem] px-2 py-0.5"
                    style={{
                      color: t.status === 'confirmed' ? 'var(--status-confirmed)' : 'var(--status-likely)',
                      border: `1px solid ${t.status === 'confirmed' ? 'rgba(76,175,110,0.3)' : 'rgba(196,154,60,0.3)'}`,
                      background: t.status === 'confirmed' ? 'rgba(76,175,110,0.08)' : 'rgba(196,154,60,0.08)',
                    }}
                  >
                    {t.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-paper mb-2">{t.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed mb-4">{t.summary}</p>
                <div className="flex items-center gap-4 mb-3 pb-3 border-b border-dark-border">
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.evidence} EVIDENCE</span>
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.confidence}% CONFIDENCE</span>
                </div>
                <div className="font-label text-[0.5rem] mb-2" style={{ color: accent }}>EVIDENCE</div>
                <ul className="space-y-1">
                  {t.items.map((e, j) => (
                    <li key={j} className="text-faint-paper text-sm flex items-start gap-2">
                      <span className="text-circus-red mt-1">▸</span> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RELATED CONTENT
          ═══════════════════════════════════════════ */}
      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>RELATED FILES</div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Pierrot Endings Guide', href: '/characters/pierrot-endings' },
              { label: 'All Endings Guide', href: '/walkthroughs/all-endings-guide' },
              { label: 'Pierrot Loop Theory', href: '/theories/pierrot-remembers-routes' },
              { label: 'Mirror Hall Lore', href: '/lore/mirror-hall' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════ */}
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
