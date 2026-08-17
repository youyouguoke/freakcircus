'use client';

import Link from 'next/link';
import { SINGLE_ROUTE_HOURS } from '@/lib/site-facts';

const faqs = [
  { q: 'What is the recommended route order?', a: 'The recommended order is: 1) Pierrot Main Route, 2) Harlequin Main Route, 3) Doctor Main Route, 4) Harlequin True Route, 5) Doctor Memory Route, 6) Pierrot Silent Route, 7) Columbina Main Route, 8) Columbina Fractured Route. This order minimizes spoilers and ensures prerequisites for secret routes.', link: null },
  { q: 'How long is a Freak Circus playthrough?', a: `A single playthrough takes ${SINGLE_ROUTE_HOURS} for a main route. Secret routes take 4-6 hours due to replay requirements. Columbina's Fractured Route takes 6-8 hours due to the 3-loop perfection requirement.`, link: null },
  { q: 'Which route should I play first?', a: 'Start with Pierrot Main Route or Harlequin Main Route. Both are beginner-friendly, require no prerequisites, and teach the game\'s core mechanics. Avoid secret routes on your first playthrough.', link: { label: 'Pierrot guide', href: '/characters/pierrot' } },
  { q: 'How do I unlock the Pierrot Silent Route?', a: 'Complete Pierrot Main Route first, then fail Harlequin True Route once. In your next playthrough of Pierrot\'s route, refuse all dialogue for three consecutive scenes in Act III (Scenes 10-12). The screen stays black for 4 minutes before the Open Ending C (unnamed) ending plays.', link: { label: 'Full guide', href: '/walkthroughs/pierrot-silent-route' } },
  { q: 'How do I unlock the Doctor Memory Route?', a: 'Complete Doctor Main Route first. Find all 5 hidden medical files: File 1 in Scene 2 (drawer), File 2 in Scene 4 (cabinet), File 3 in Scene 6 (floorboard), File 4 in Scene 8 (bookshelf), File 5 in Scene 10 (desk).', link: { label: 'Full guide', href: '/walkthroughs/doctor-memory-route' } },
  { q: 'How do I unlock Columbina\'s Truth ending?', a: 'Complete Pierrot Main, Doctor Memory, and Harlequin True routes first. Then achieve perfect alignment across three loops: Loop 1 — gentle responses, Loop 2 — truthful responses, Loop 3 — accepting responses. Any deviation resets to Loop 1.', link: { label: 'Full guide', href: '/walkthroughs/columbina-fractured-route' } },
  { q: 'Can I get all endings in one save file?', a: 'No. The game tracks player behavior across saves and playthroughs. Some endings require failing specific routes first. A hidden counter at save offset 0x4A20 affects available choices.', link: null },
  { q: 'What is the fastest ending to unlock?', a: 'Open Ending A (unnamed) (Harlequin Main Route) can be completed in approximately 45 minutes on a speed run. Open Ending B (unnamed) (Pierrot Main Route) takes about 50 minutes. Both are available from the start.', link: null },
];

export default function WalkthroughFAQ() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          FREQUENTLY ASKED
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Route Questions</h2>

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
