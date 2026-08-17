'use client';

import Link from 'next/link';

const discoveries = [
  {
    date: 'June 2026',
    tag: 'NEW',
    tagColor: 'var(--status-confirmed)',
    title: 'Build 1.04 Unused Ending Investigation',
    desc: 'Data miners discovered references to a 13th ending in the latest build. Corrupted hex patterns suggest a route that was cut before release but remains partially accessible through file manipulation.',
    evidence: 3,
    href: '/endings',
    source: { label: 'Reddit r/horrorgaming', url: 'https://www.reddit.com/r/horrorgaming/' },
  },
  {
    date: 'June 2026',
    tag: 'UPDATE',
    tagColor: 'var(--status-likely)',
    title: 'Doctor Route Hidden Dialogue Analysis',
    desc: 'New community testing confirmed Scene 7 precognitive dialogue triggers across all save slots, not just slot 1. The Unnamed Open Ending reference appears even on first playthrough under specific conditions.',
    evidence: 5,
    href: '/characters/doctor',
    source: { label: 'Community Testing Doc', url: '#' },
  },
  {
    date: 'June 2026',
    tag: 'THEORY',
    tagColor: 'var(--doctor)',
    title: 'New Columbina Loop Theory',
    desc: 'u/loop_architect proposes that Columbina\'s three-loop structure mirrors the game\'s overall narrative architecture — suggesting the entire circus is a single loop containing smaller loops within each character route.',
    evidence: 4,
    href: '/theories',
    source: { label: 'Reddit Post', url: 'https://www.reddit.com/r/visualnovels/' },
  },
  {
    date: 'May 2026',
    tag: 'DISCOVERY',
    tagColor: 'var(--pierrot)',
    title: 'Hidden Counter at Save Offset 0x4A20 Confirmed',
    desc: 'Cross-platform testing by 12 community members confirmed the hidden counter affects dialogue options across all builds. Counter value 4 triggers Pierrot\'s replay-aware dialogue regardless of current route choices.',
    evidence: 8,
    href: '/theories/pierrot-remembers-routes',
    source: { label: 'Community Verification Thread', url: '#' },
  },
];

export default function LatestDiscoveries() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-circus-red" />
              INVESTIGATION LOG
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
              Latest Discoveries
            </h2>
          </div>
          <span className="font-label text-[0.55rem] text-status-confirmed border border-status-confirmed/30 px-3 py-1.5 bg-status-confirmed/5 hidden md:inline-flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-status-confirmed rounded-full animate-pulse-slow" />
            LIVE FEED
          </span>
        </div>

        {/* Discovery cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {discoveries.map((d, i) => (
            <Link key={i} href={d.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40">
                {/* Top bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-label text-[0.55rem] px-2 py-0.5"
                    style={{
                      color: d.tagColor,
                      border: `1px solid ${d.tagColor}33`,
                      background: `${d.tagColor}0D`,
                    }}
                  >
                    {d.tag}
                  </span>
                  <span className="font-label text-[0.55rem] text-faint-paper">{d.date}</span>
                  <span className="ml-auto font-label text-[0.5rem] text-faint-paper">
                    {d.evidence} EVIDENCE
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-paper mb-3 group-hover:text-circus-red transition-colors duration-300">
                  {d.title}
                </h3>

                {/* Description */}
                <p className="text-faint-paper text-sm leading-relaxed mb-4">
                  {d.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 pt-3 border-t border-dark-border">
                  <span className="font-label text-[0.55rem] text-circus-red flex items-center gap-1">
                    READ MORE <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  {d.source && (
                    <span className="font-label text-[0.5rem] text-dim-paper ml-auto">
                      SRC: {d.source.label}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
