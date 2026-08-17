'use client';

import Link from 'next/link';
import { SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from '@/lib/site-facts';

const aboutCards = [
  {
    title: 'What Is The Freak Circus?',
    content: `Many players first discover The Freak Circus through TikTok clips featuring Pierrot's route. What initially appears to be a simple horror visual novel quickly turns into a community-wide investigation into hidden dialogue, route memory, and contradictory endings. The game has no traditional jump scares — it builds dread through silence, repetition, and the growing realization that the characters know more than they should.`,
    extra: 'The community has spent over two years mapping routes, and new triggers are still being found. This archive collects everything verified by multiple players, separating confirmed mechanics from speculation.',
  },
  {
    title: 'Why This Game Works',
    content: `Unlike most horror visual novels, The Freak Circus turns replaying into part of the narrative itself. The game encourages players to question whether they are discovering new content or remembering content that was always there.`,
    extra: 'The replay-aware mechanics are narrative devices. When Pierrot references a choice you made three routes ago, the game suggests that the circus exists outside the save file system.',
  },
  {
    title: 'How Many Endings?',
    content: `The community has confirmed 11 endings through repeated testing. Standard routes include Grand Finale, Smile For Me, and Doctor's Note. Secret endings like Eternal Silence and Columbina's Truth require specific conditions across multiple playthroughs.`,
    link: { label: 'View all endings', href: '/endings' },
  },
  {
    title: 'Where To Play',
    content: `The game is available on itch.io and runs directly in your browser without installation. It is rated 18+ for psychological horror. A single route takes ${SINGLE_ROUTE_HOURS}, but full completion requires ${TOTAL_COMPLETION_HOURS}.`,
    link: { label: 'Download / Play', href: '/download' },
  },
];

export default function AboutTheGame() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            BACKGROUND DOSSIER
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            About The Freak Circus
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {aboutCards.map((card, i) => (
            <div
              key={i}
              className={`archive-card ${i === 3 ? 'md:col-span-2' : ''}`}
            >
              <h3 className="font-heading text-lg font-bold text-paper mb-4">
                {card.title}
              </h3>
              <p className="text-faint-paper text-sm leading-relaxed mb-3">
                {card.content}
              </p>
              {card.extra && (
                <p className="text-dim-paper text-sm leading-relaxed">
                  {card.extra}
                </p>
              )}
              {card.link && (
                <Link
                  href={card.link.href}
                  className="font-label text-[0.6rem] text-circus-red hover:underline mt-3 inline-block"
                >
                  {card.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
