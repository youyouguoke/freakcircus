'use client';

import Link from 'next/link';

const endings = [
  {
    name: 'Grand Finale',
    type: 'STANDARD',
    difficulty: 'Normal',
    status: 'confirmed',
    desc: 'The default ending most players see on first playthrough. Complete the Harlequin route with standard dialogue choices.',
    href: '/endings/the-grand-finale',
  },
  {
    name: 'Smile For Me',
    type: 'STANDARD',
    difficulty: 'Normal',
    status: 'confirmed',
    desc: 'Pierrot\'s main ending. Accept his offer in the garden scene during Act III. Post-credits shows a single red thread.',
    href: '/characters/pierrot',
  },
  {
    name: 'Doctor\'s Note',
    type: 'STANDARD',
    difficulty: 'Hard',
    status: 'confirmed',
    desc: 'The Doctor\'s main ending. Collect at least 3 medical files and accept his diagnosis. The prescription appears in your next route.',
    href: '/characters/doctor',
  },
  {
    name: 'Eternal Silence',
    type: 'SECRET',
    difficulty: 'Very Hard',
    status: 'confirmed',
    desc: 'Pierrot\'s secret ending. Refuse all dialogue for 3 consecutive scenes. Screen stays black for 4 minutes. Post-credits breaks the fourth wall.',
    href: '/endings/eternal-silence',
  },
  {
    name: 'Columbina\'s Truth',
    type: 'SECRET',
    difficulty: 'Very Hard',
    status: 'confirmed',
    desc: 'Complete three perfect loops with Columbina. Any deviation resets progress. The fourth door reveals the circus\'s true nature.',
    href: '/endings/columbinas-truth',
  },
  {
    name: 'White Room',
    type: 'UNKNOWN',
    difficulty: 'Unknown',
    status: 'unverified',
    desc: 'Referenced by The Doctor in Scene 7 but never officially found. May require cross-route completion of all other endings first.',
    href: '/characters/doctor',
  },
];

export default function EndingHubPreview() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            ENDING CATALOGUE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            All Confirmed Endings
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            The community has verified 11 endings across standard, secret, and corrupted categories. Each requires specific unlock conditions.
          </p>
        </div>

        {/* Ending grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {endings.map((ending, i) => (
            <Link key={i} href={ending.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40">
                {/* Type & difficulty */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-label text-[0.55rem] px-2 py-0.5"
                    style={{
                      color: ending.type === 'SECRET' ? 'var(--blood-red)' :
                             ending.type === 'UNKNOWN' ? 'var(--status-unverified)' : 'var(--muted-paper)',
                      border: `1px solid ${ending.type === 'SECRET' ? 'rgba(179,58,53,0.3)' :
                               ending.type === 'UNKNOWN' ? 'rgba(138,128,120,0.3)' : 'rgba(184,174,165,0.2)'}`,
                      background: ending.type === 'SECRET' ? 'rgba(179,58,53,0.08)' :
                                  ending.type === 'UNKNOWN' ? 'rgba(138,128,120,0.08)' : 'rgba(184,174,165,0.05)',
                    }}
                  >
                    {ending.type}
                  </span>
                  <span className="font-label text-[0.5rem] text-faint-paper">{ending.difficulty}</span>
                  <span
                    className="ml-auto font-label text-[0.5rem] px-1.5 py-0.5"
                    style={{
                      color: ending.status === 'confirmed' ? 'var(--status-confirmed)' : 'var(--status-unverified)',
                      border: `1px solid ${ending.status === 'confirmed' ? 'rgba(76,175,110,0.3)' : 'rgba(138,128,120,0.3)'}`,
                      background: ending.status === 'confirmed' ? 'rgba(76,175,110,0.05)' : 'rgba(138,128,120,0.05)',
                    }}
                  >
                    {ending.status === 'confirmed' ? 'VERIFIED' : 'UNVERIFIED'}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-archive text-lg text-paper mb-3 group-hover:text-circus-red transition-colors duration-300">
                  {ending.name}
                </h3>

                {/* Description */}
                <p className="text-faint-paper text-sm leading-relaxed mb-4">
                  {ending.desc}
                </p>

                {/* Link */}
                <span className="font-label text-[0.55rem] text-circus-red flex items-center gap-1">
                  UNLOCK CONDITIONS <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/endings" className="btn-archive">
            VIEW FULL ENDING CATALOGUE
          </Link>
        </div>
      </div>
    </section>
  );
}
