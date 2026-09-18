'use client';

import Link from 'next/link';
import {
  CURRENT_VERSION,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  ITCH_IO_URL,
  PLAYTIME_LABEL,
  RELEASED_DAYS_LABEL,
} from '@/lib/site-facts';

const aboutCards = [
  {
    title: 'What Is The Freak Circus?',
    content: `The Freak Circus is an 18+ psychological horror visual novel by Neko Bueno. A café worker is dragged into a traveling circus — the Circus of Horrors — where obsession, rivalry, and survival collide. The game has no traditional jump scares — it builds dread through silence, repetition, and the growing realization that the characters know more than they should.`,
    extra: 'This fan archive collects everything verified by multiple sources, separating confirmed facts from speculation.',
  },
  {
    title: 'Why This Game Works',
    content: `Unlike most horror visual novels, The Freak Circus uses repetition and silence to build psychological tension. Community members debate whether the game tracks player behavior across playthroughs — some report dialogue changes after repeated runs, but this remains unverified.`,
    extra: 'Whether the game truly "remembers" your previous choices or whether this is player perception is one of the community\'s most active debates.',
  },
  {
    title: 'How Many Endings?',
    content: `The current build (${CURRENT_VERSION}) has ${ENDINGS_CONFIRMED} confirmed ending: "Missing" (Bad Ending). The developer has listed ${ENDINGS_PLANNED} planned endings on itch.io, but none are implemented yet.`,
    link: { label: 'View all endings', href: '/endings' },
  },
  {
    title: 'Where To Play',
    content: `The official source is itch.io (${ITCH_IO_URL}). Community players report ${PLAYTIME_LABEL} for ${RELEASED_DAYS_LABEL} combined. It is rated 18+ for psychological horror.`,
    link: { label: 'Download / Play', href: '/download' },
  },
];

export default function AboutTheGame() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          About The Game
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {aboutCards.map((card, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">{card.title}</h3>
              <p className="text-on-surface/60 text-sm mb-3">{card.content}</p>
              {card.extra && <p className="text-on-surface/40 text-xs">{card.extra}</p>}
              {card.link && (
                <Link href={card.link.href} className="text-primary font-mono text-xs hover:underline mt-3 inline-block">
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
