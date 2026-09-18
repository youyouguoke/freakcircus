'use client';

import Link from 'next/link';

const endings = [
  {
    name: 'Missing',
    type: 'BAD ENDING',
    status: 'confirmed',
    desc: 'The only confirmed ending in the current build. The player character goes missing and is never found. Associated with Harlequin\'s route.',
    href: '/endings',
  },
];

const planned = [
  "Pierrot's ending",
  "Harlequin's ending",
  "Protagonist's ending",
  "All together (MC with both Pierrot and Harlequin)",
];

export default function EndingHubPreview() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            ENDING CATALOGUE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Endings
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            1 confirmed ending. 4 planned endings listed by the developer (not yet implemented).
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {endings.map((ending, i) => (
            <Link key={i} href={ending.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-label text-[0.55rem] px-2 py-0.5 border border-blood-red/30 text-blood-red bg-blood-red/8">{ending.type}</span>
                  <span className="ml-auto font-label text-[0.5rem] px-1.5 py-0.5 border border-status-confirmed/30 text-status-confirmed bg-status-confirmed/5">VERIFIED</span>
                </div>
                <h3 className="font-archive text-lg text-paper mb-3 group-hover:text-circus-red transition-colors duration-300">{ending.name}</h3>
                <p className="text-faint-paper text-sm leading-relaxed mb-4">{ending.desc}</p>
                <span className="font-label text-[0.55rem] text-circus-red flex items-center gap-1">
                  LEARN MORE <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}

          <div className="archive-card">
            <div className="font-label text-[0.55rem] px-2 py-0.5 border border-amber-500/30 text-amber-400 bg-amber-500/8 inline-block mb-4">PLANNED — NOT IN GAME</div>
            <ul className="space-y-2">
              {planned.map((name) => (
                <li key={name} className="text-faint-paper text-sm flex items-center gap-2">
                  <span className="text-amber-400">📋</span> {name}
                </li>
              ))}
            </ul>
            <p className="text-dim-paper text-xs mt-4">
              Source: itch.io &quot;What is planned?&quot;
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/endings" className="btn-archive">
            VIEW ENDING DETAILS
          </Link>
        </div>
      </div>
    </section>
  );
}
