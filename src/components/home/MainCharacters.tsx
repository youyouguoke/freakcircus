'use client';

import Link from 'next/link';

const characters = [
  {
    name: 'Pierrot',
    role: 'THE CLOWN',
    caseFile: '01',
    image: '/Pierrot.jpg',
    accent: 'var(--pierrot)',
    glow: 'var(--pierrot-glow)',
    status: 'ACTIVE',
    desc: 'Often the first route players encounter. His silence mechanic and replay-aware dialogue make him the center of the Loop Theory debate.',
    stats: { threat: 40, mystery: 90, attachment: 95 },
    href: '/characters/pierrot',
  },
  {
    name: 'Harlequin',
    role: 'THE PERFORMER',
    caseFile: '02',
    image: '/Harlequin.jpg',
    accent: 'var(--harlequin)',
    glow: 'var(--harlequin-glow)',
    status: 'ACTIVE',
    desc: 'Her dialogue shifts between playful and menacing. Players report her saying "You again" on the 4th playthrough — a line not found in any script file.',
    stats: { threat: 70, mystery: 80, attachment: 60 },
    href: '/characters/harlequin',
  },
  {
    name: 'The Doctor',
    role: 'THE PHYSICIAN',
    caseFile: '03',
    image: '/Doctor.jpg',
    accent: 'var(--doctor)',
    glow: 'var(--doctor-glow)',
    status: 'ACTIVE',
    desc: 'References endings before they occur. His five hidden medical files and the Unnamed Open Ending prediction in Scene 7 remain deeply unsettling.',
    stats: { threat: 85, mystery: 95, attachment: 30 },
    href: '/characters/doctor',
  },
  {
    name: 'Jester',
    role: 'THE TRICKSTER',
    caseFile: '05',
    image: '/Jester2.png',
    accent: 'var(--jester)',
    glow: 'var(--jester-glow)',
    status: 'UNKNOWN',
    desc: 'Operates at the edges of the narrative — watching, commenting, and delivering lines dense with double meanings that fuel theory-crafting.',
    stats: { threat: 50, mystery: 85, attachment: 40 },
    href: '/characters/jester',
  },
  {
    name: 'Ticket Taker',
    role: 'THE GATEKEEPER',
    caseFile: '06',
    image: '/tickettaker.jpg',
    accent: 'var(--ticket-taker)',
    glow: 'var(--ticket-taker-glow)',
    status: 'ACTIVE',
    desc: 'The enigmatic sentinel at the threshold. The mirror scene where the player sees themselves wearing the mask spawned the Time-Loop Theory.',
    stats: { threat: 60, mystery: 75, attachment: 50 },
    href: '/ticket-taker',
  },
];

function StatMini({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-label text-[0.5rem] text-faint-paper w-16">{label}</span>
      <div className="flex-1 h-[2px] bg-dark-border overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function MainCharacters() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            SUBJECT DOSSIERS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Meet The Cast
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            The six central figures of The Freak Circus, each with their own route, hidden triggers, and disturbing revelations.
          </p>
        </div>

        {/* Character grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((char) => (
            <Link
              key={char.name}
              href={char.href}
              className="group block"
            >
              <div
                className="archive-card relative overflow-hidden transition-all duration-300 group-hover:border-opacity-100 h-full"
                style={{ borderLeft: `3px solid ${char.accent}` }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${char.glow}` }}
                />

                {/* Case file number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[0.55rem] text-faint-paper">
                    CASE FILE {char.caseFile}
                  </span>
                  <span
                    className="font-label text-[0.5rem] px-2 py-0.5"
                    style={{
                      color: char.status === 'ACTIVE' ? 'var(--status-confirmed)' : 'var(--status-unverified)',
                      border: `1px solid ${char.status === 'ACTIVE' ? 'rgba(76,175,110,0.3)' : 'rgba(138,128,120,0.3)'}`,
                      background: char.status === 'ACTIVE' ? 'rgba(76,175,110,0.08)' : 'rgba(138,128,120,0.08)',
                    }}
                  >
                    {char.status}
                  </span>
                </div>

                {/* Character image */}
                <div className="relative mb-4 overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-48 object-cover img-cinematic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-archive-black via-transparent to-transparent" />
                </div>

                {/* Name & role */}
                <h3
                  className="font-archive text-xl mb-0.5 transition-colors duration-300"
                  style={{ color: char.accent }}
                >
                  {char.name}
                </h3>
                <p className="font-label text-[0.6rem] text-faint-paper mb-3">
                  {char.role}
                </p>

                {/* Stats */}
                <div className="space-y-1.5 mb-4">
                  <StatMini label="THREAT" value={char.stats.threat} color={char.accent} />
                  <StatMini label="MYSTERY" value={char.stats.mystery} color={char.accent} />
                  <StatMini label="BOND" value={char.stats.attachment} color={char.accent} />
                </div>

                {/* Description */}
                <p className="text-faint-paper text-xs leading-relaxed mb-4 line-clamp-3">
                  {char.desc}
                </p>

                {/* View file link */}
                <div
                  className="font-label text-[0.6rem] flex items-center gap-2 transition-colors duration-300"
                  style={{ color: char.accent }}
                >
                  VIEW FILE
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
