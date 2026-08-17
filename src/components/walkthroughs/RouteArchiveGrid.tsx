'use client';

import Link from 'next/link';
import { SINGLE_ROUTE_HOURS } from '@/lib/site-facts';

const routes = [
  {
    title: 'Pierrot Main Route', character: 'Pierrot', characterColor: 'var(--pierrot)',
    difficulty: 'Beginner', ending: 'Good Ending', unlock: 'Available from start',
    summary: 'The standard introduction to The Freak Circus. Complete standard dialogue choices to reach the Smile For Me ending.',
    playtime: SINGLE_ROUTE_HOURS, href: '/walkthroughs/pierrot-main-route',
  },
  {
    title: 'Pierrot Silent Route', character: 'Pierrot', characterColor: 'var(--pierrot)',
    difficulty: 'Very Hard', ending: 'Eternal Silence (Secret)', unlock: 'Complete Pierrot Main + Fail Harlequin True + Stay silent 3+ times',
    summary: 'A replay-aware route where Pierrot begins remembering previous loops. Requires refusing all dialogue for three consecutive scenes.',
    playtime: '4-6 hours', href: '/walkthroughs/pierrot-silent-route',
  },
  {
    title: 'Harlequin True Route', character: 'Harlequin', characterColor: 'var(--harlequin)',
    difficulty: 'Hard', ending: 'Grand Finale (Bad)', unlock: 'Available from start — select all aggressive options',
    summary: 'The aggressive route through Harlequin\'s storyline. Contains 7 undocumented hidden scenes that only appear on replay.',
    playtime: '3-4 hours', href: '/walkthroughs/harlequin-true-route',
  },
  {
    title: 'Doctor Memory Route', character: 'The Doctor', characterColor: 'var(--doctor)',
    difficulty: 'Hard', ending: "Doctor's Note (False)", unlock: 'Complete Doctor Main + Find 5 hidden medical files',
    summary: 'Requires collecting 5 hidden medical files scattered across scenes. The mirror connection in Scene 9 only appears after failing once.',
    playtime: '4-5 hours', href: '/walkthroughs/doctor-memory-route',
  },
  {
    title: 'Null Route', character: 'Unknown', characterColor: 'var(--status-corrupted)',
    difficulty: 'Unknown', ending: 'Corrupted', unlock: 'Found in unused game files — unlock conditions unknown',
    summary: 'No character appears. Player walks through empty corridors until soft-lock. Found in unused game files.',
    playtime: 'Unknown', href: '/walkthroughs/null-route',
  },
];

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, { c: string; b: string; bd: string }> = {
    Beginner: { c: 'var(--status-confirmed)', b: 'rgba(76,175,110,0.08)', bd: 'rgba(76,175,110,0.3)' },
    Hard: { c: 'var(--status-likely)', b: 'rgba(196,154,60,0.08)', bd: 'rgba(196,154,60,0.3)' },
    'Very Hard': { c: 'var(--blood-red)', b: 'rgba(179,58,53,0.08)', bd: 'rgba(179,58,53,0.3)' },
    Unknown: { c: 'var(--status-corrupted)', b: 'rgba(179,58,53,0.08)', bd: 'rgba(179,58,53,0.3)' },
  };
  const s = colors[level] || colors.Unknown;
  return (
    <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: s.c, border: `1px solid ${s.bd}`, background: s.b }}>
      {level.toUpperCase()}
    </span>
  );
}

export default function RouteArchiveGrid() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          ALL ROUTES
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Route Archive</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route, i) => (
            <Link key={i} href={route.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40" style={{ borderLeft: `3px solid ${route.characterColor}` }}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <DifficultyBadge level={route.difficulty} />
                  <span className="font-label text-[0.5rem] text-faint-paper">{route.playtime}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-base font-bold text-paper mb-1 group-hover:text-circus-red transition-colors">
                  {route.title}
                </h3>
                <p className="font-label text-[0.5rem] text-faint-paper mb-3">{route.character}</p>

                {/* Ending */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-label text-[0.5rem] text-dim-paper">ENDING:</span>
                  <span className="text-faint-paper text-sm">{route.ending}</span>
                </div>

                {/* Summary */}
                <p className="text-faint-paper text-sm leading-relaxed mb-4 line-clamp-3">{route.summary}</p>

                {/* Unlock */}
                <div className="pt-3 border-t border-dark-border">
                  <div className="font-label text-[0.5rem] text-circus-red mb-1">UNLOCK</div>
                  <p className="text-dim-paper text-xs">{route.unlock}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
