'use client';

import Link from 'next/link';

const discoveries = [
  {
    date: 'Sep 2026',
    tag: 'MERCH',
    tagColor: 'var(--status-info, #60a5fa)',
    title: 'Official Merch — Pierrot Plush & Partnership',
    desc: 'Garula announced official The Freak Circus merchandise including a limited-time Pierrot plush. Available via the itch.io page.',
    href: 'https://garula.itch.io/the-freak-circus/devlog/1585532/official-merch-plush-and-partnership',
    source: 'itch.io devlog',
  },
  {
    date: 'Aug 2026',
    tag: 'UPDATE',
    tagColor: 'var(--status-confirmed)',
    title: 'Site-wide Content Verification Complete',
    desc: 'Character pages, theories, lore, and endings have been cross-checked against itch.io official data. Fabricated content removed. All pages now use consistent, verified information.',
    href: '/endings',
    source: 'Site update',
  },
];

export default function LatestDiscoveries() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Latest Updates
        </h2>
        <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
          {discoveries.map((d, i) => (
            <Link key={i} href={d.href} className="glass-card p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[9px] text-on-surface/40">{d.date}</span>
                <span className="font-mono text-[9px] px-2 py-0.5 uppercase" style={{ color: d.tagColor, background: 'var(--surface-container)' }}>{d.tag}</span>
              </div>
              <h3 className="font-display text-base text-on-surface mb-2">{d.title}</h3>
              <p className="text-on-surface/60 text-sm">{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
