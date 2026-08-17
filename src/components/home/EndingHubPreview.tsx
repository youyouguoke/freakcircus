'use client';

import Link from 'next/link';

const endings = [
  {
    name: 'Missing',
    type: 'BAD ENDING',
    difficulty: 'Unknown',
    status: 'confirmed',
    desc: 'The only confirmed ending. The player character goes missing and is never found. Triggers when trust thresholds are not met by end of Day 2.',
    href: '/endings',
  },
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
            Confirmed Ending
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            Only 1 ending has been independently verified. 3 additional open endings exist but remain unnamed.
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
