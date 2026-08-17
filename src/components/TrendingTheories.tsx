'use client';

import Link from 'next/link';

const theories = [
  {
    id: 'THEORY_07',
    title: 'Pierrot Remembers Every Loop',
    status: 'confirmed',
    evidence: 5,
    confidence: 82,
    desc: 'Evidence suggests Pierrot reacts differently after repeated failed endings, retaining knowledge across timelines. On the 4th playthrough, he references choices from previous routes that the player never selected in the current save.',
    href: '/theories',
  },
  {
    id: 'THEORY_15',
    title: 'Red Thread Connects All Routes',
    status: 'confirmed',
    evidence: 7,
    confidence: 85,
    desc: 'The red thread appears in every character route and seems to physically connect characters across timelines. Cutting the thread in one route affects dialogue in others.',
    href: '/theories',
  },
  {
    id: 'THEORY_11',
    title: 'The Doctor Is The Observer',
    status: 'likely',
    evidence: 4,
    confidence: 67,
    desc: 'The Doctor may be aware of the player directly, breaking the fourth wall through clinical observations. His Scene 7 description of the White Room ending matches unused files found in build 1.04.',
    href: '/theories',
  },
];

function StatusPill({ status }: { status: string }) {
  const colors: Record<string, { c: string; b: string; bd: string }> = {
    confirmed: { c: 'var(--status-confirmed)', b: 'rgba(76,175,110,0.08)', bd: 'rgba(76,175,110,0.3)' },
    likely: { c: 'var(--status-likely)', b: 'rgba(196,154,60,0.08)', bd: 'rgba(196,154,60,0.3)' },
    unverified: { c: 'var(--status-unverified)', b: 'rgba(138,128,120,0.08)', bd: 'rgba(138,128,120,0.3)' },
  };
  const s = colors[status] || colors.unverified;
  return (
    <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: s.c, border: `1px solid ${s.bd}`, background: s.b }}>
      {status.toUpperCase()}
    </span>
  );
}

export default function TrendingTheories() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            THEORY DATABASE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Trending Theories
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {theories.map((t) => (
            <Link key={t.id} href={t.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[0.55rem] text-faint-paper">{t.id}</span>
                  <StatusPill status={t.status} />
                </div>
                <h3 className="font-heading text-base font-bold text-paper mb-3 group-hover:text-circus-red transition-colors">{t.title}</h3>
                <p className="text-faint-paper text-sm leading-relaxed mb-4 line-clamp-3">{t.desc}</p>
                <div className="flex items-center gap-4 pt-3 border-t border-dark-border">
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.evidence} EVIDENCE</span>
                  <span className="font-label text-[0.5rem] text-faint-paper">{t.confidence}% CONF</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
