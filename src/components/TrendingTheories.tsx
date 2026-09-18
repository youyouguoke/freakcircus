'use client';

import Link from 'next/link';

const theories = [
  {
    id: 'T_03',
    title: "Columbina's Death Drives Everything",
    status: 'PARTIALLY VERIFIED',
    desc: "The Columbina legend is confirmed to appear in Day 2, explaining Pierrot and Harlequin's rivalry. Columbina was killed by Harlequin — this is the central event driving the story.",
    href: '/theories',
  },
  {
    id: 'T_05',
    title: 'Pierrot Remembers Previous Playthroughs',
    status: 'UNVERIFIED',
    desc: "Some players report Pierrot's dialogue changes after repeated playthroughs. Claims about specific save file mechanics (e.g., hidden counters) are unconfirmed community speculation.",
    href: '/theories/pierrot-remembers-routes',
  },
  {
    id: 'T_06',
    title: 'The Circus Is A Loop',
    status: 'SPECULATION',
    desc: "The theory that the entire circus operates as a repeating loop, with characters retaining fragments of memory across cycles. No official confirmation.",
    href: '/theories',
  },
];

function StatusPill({ status }: { status: string }) {
  const colors: Record<string, { c: string; b: string; bd: string }> = {
    'PARTIALLY VERIFIED': { c: 'var(--status-likely)', b: 'rgba(196,154,60,0.08)', bd: 'rgba(196,154,60,0.3)' },
    'UNVERIFIED': { c: 'var(--status-unverified)', b: 'rgba(138,128,120,0.08)', bd: 'rgba(138,128,120,0.3)' },
    'SPECULATION': { c: 'var(--status-unverified)', b: 'rgba(138,128,120,0.08)', bd: 'rgba(138,128,120,0.3)' },
  };
  const s = colors[status] || colors['UNVERIFIED'];
  return (
    <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: s.c, border: `1px solid ${s.bd}`, background: s.b }}>
      {status}
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
            Community Theories
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
                <span className="font-label text-[0.55rem] text-circus-red flex items-center gap-1">
                  VIEW THEORY <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/theories" className="btn-archive">
            VIEW ALL THEORIES
          </Link>
        </div>
      </div>
    </section>
  );
}
