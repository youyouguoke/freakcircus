'use client';

import Link from 'next/link';

const symbols = [
  {
    name: 'Red Thread',
    meaning: 'A single red thread appears in the post-credits of Pierrot\'s Open Ending B (unnamed) ending. It represents the connection between the player and the circus — a thread that cannot be cut, only tangled.',
    appearances: 'Post-credits (Open Ending B (unnamed)), Pierrot\'s garden (Scene 2), Harlequin\'s ribbon (Scene 5), Columbina\'s bracelet (Scene 8)',
    evidence: 'The thread is visible in 4 different routes but only mentioned in dialogue once. Players report seeing it \'move\' in the background of static scenes.',
    related: 'Pierrot Loop Theory, Timeline Reset Theory',
    href: '/lore/founding-myth',
  },
  {
    name: 'Broken Mirror',
    meaning: 'The mirror in Scene 9 reflects the player\'s previous route character, not their current one. Breaking it reveals a hidden file. The mirror represents fractured memory.',
    appearances: 'Scene 9 (all routes), Doctor\'s laboratory (Scene 10), Unnamed Open Ending description',
    evidence: 'Datamined files show the mirror uses a variable called \'PREVIOUS_ROUTE_SPRITE\' that persists across save files.',
    related: 'Doctor Awareness Theory, Timeline Reset Theory',
    href: '/lore/mirror-hall',
  },
  {
    name: 'Unnamed Open Ending',
    meaning: 'A space with no walls, no ceiling, no floor. Only light. And a chair facing a mirror that shows nothing. Described by The Doctor in Scene 7 but never found by players.',
    appearances: 'Doctor\'s dialogue (Scene 7), datamined files (1.03 patch notes), unused texture files',
    evidence: 'The Doctor\'s description matches the layout of a standard Unity testing room.',
    related: 'Doctor Awareness Theory, Unnamed Open Ending Is The Developer Room',
    href: '/lore/mirror-hall',
  },
  {
    name: 'Mask',
    meaning: 'Every performer wears a mask, but the masks are never mentioned in dialogue. They appear in sprites, backgrounds, and cutscenes. The masks may represent the \'roles\' the characters are forced to play.',
    appearances: 'All character sprites, Mirror Hall background, Title screen, Post-credits scene',
    evidence: 'The mask sprites are separate layers from the character faces. In datamined files, they are labeled \'MASK_PERMANENT\'.',
    related: 'Columbina Watches Player Theory, Pierrot Loop Theory',
    href: '/lore/mask-ceremony',
  },
  {
    name: 'Clock',
    meaning: 'A broken clock appears in the background of Scene 3. The hands are stuck at 11:47. This time appears in multiple routes and may represent the moment the timeline fractured.',
    appearances: 'Scene 3 (all routes), Doctor\'s notes, Timeline Fracture Memo',
    evidence: '11:47 appears in 6 different contexts across all routes. The time is never referenced in dialogue but appears in background art.',
    related: 'Timeline Reset Theory',
    href: '/lore',
  },
];

export default function SymbolEncyclopedia() {
  return (
    <section id="symbols" className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          SYMBOL DATABASE
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Symbol Encyclopedia</h2>
        <p className="text-faint-paper text-sm mb-8 max-w-2xl">
          The recurring symbols that form the visual language of The Freak Circus — each one carrying meaning across multiple routes.
        </p>

        <div className="space-y-4">
          {symbols.map((sym) => (
            <div key={sym.name} className="archive-card" style={{ borderLeft: '3px solid var(--circus-red)' }}>
              <h3 className="font-archive text-xl text-paper mb-3">{sym.name}</h3>
              <p className="text-faint-paper text-sm leading-relaxed mb-4">{sym.meaning}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="font-label text-[0.5rem] text-circus-red mb-1">APPEARANCES</div>
                  <p className="text-dim-paper text-xs leading-relaxed">{sym.appearances}</p>
                </div>
                <div>
                  <div className="font-label text-[0.5rem] text-circus-red mb-1">EVIDENCE</div>
                  <p className="text-dim-paper text-xs leading-relaxed">{sym.evidence}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-dark-border">
                <span className="font-label text-[0.5rem] text-faint-paper">RELATED: {sym.related}</span>
                <Link href={sym.href} className="font-label text-[0.55rem] text-circus-red ml-auto hover:underline">
                  EXPLORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
