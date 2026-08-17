'use client';

import Link from 'next/link';

const faqs = [
  { q: 'Is the circus real in Freak Circus?', a: 'The \'Circus Does Not Exist\' theory suggests the circus is not a physical location but a psychological space. Evidence includes inconsistent map geometry and Columbina\'s memories containing circus imagery from before she arrived.', link: { label: 'Full analysis', href: '/theories' } },
  { q: 'Does Pierrot remember previous playthroughs?', a: 'Community testing has confirmed a hidden counter at save offset 0x4A20. When this counter reaches 4, Pierrot begins referencing events from routes the player hasn\'t completed in the current save. This is the strongest evidence for replay-aware mechanics.', link: { label: 'Pierrot theory', href: '/theories/pierrot-remembers-routes' } },
  { q: 'What is the Loop Theory?', a: 'The Loop Theory proposes that characters forget but the world remembers. Evidence includes Pierrot\'s replay-aware dialogue, Harlequin\'s "You again" line, and Columbina\'s cross-route memory fragments.', link: { label: 'All theories', href: '/theories' } },
  { q: 'What does the Doctor know?', a: 'The Doctor references endings before they occur and his medical files contain timestamps matching real-world save creation dates. His Scene 7 description of the Unnamed Open Ending matches unused files in build 1.04.', link: { label: 'Doctor analysis', href: '/characters/doctor' } },
  { q: 'What is timeline corruption?', a: 'Timeline corruption refers to instances where the game\'s narrative continuity appears to break. Characters reference events from different timelines, locations change between playthroughs, and some dialogue options reference choices the player never made.', link: { label: 'Timeline', href: '/lore' } },
  { q: 'Are the developers aware of the theories?', a: 'The developers have not directly confirmed or denied any community theories. However, build 1.04 expanded several mechanics that align with popular theories, suggesting they are at least aware of community investigation efforts.', link: null },
  { q: 'What is the Mirror Hall theory?', a: 'The Mirror Hall appears in all character routes but with different physical properties each time. Some theorists believe it represents the boundary between the player\'s reality and the game world, functioning as a liminal space.', link: { label: 'Mirror Hall', href: '/lore/mirror-hall' } },
  { q: 'How do I contribute to the investigation?', a: 'Community testing is the backbone of Freak Circus theory verification. Document your playthroughs with timestamps, save file hashes, and exact dialogue selections. Cross-reference findings with other players before claiming discoveries.', link: { label: 'Contribute', href: '/contribute' } },
];

export default function TheoriesFAQ() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          FREQUENTLY ASKED
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Questions & Answers</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group archive-card">
              <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                <span className="pr-4">{faq.q}</span>
                <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span>
                <span className="font-label text-[0.55rem] text-circus-red hidden group-open:inline shrink-0">[−]</span>
              </summary>
              <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">
                {faq.a}
                {faq.link && (
                  <Link href={faq.link.href} className="text-circus-red hover:underline ml-1">
                    {faq.link.label} →
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
