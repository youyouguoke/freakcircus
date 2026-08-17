import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContinueExploring from '@/components/ContinueExploring';
import JsonLd from '@/components/JsonLd';
import PierrotClient from './PierrotClient';

export const metadata: Metadata = {
  title: 'Pierrot — Character Profile, Route Guide & Hidden Triggers | Freak Circus Hub',
  description: 'Complete Pierrot character analysis for The Freak Circus. Covers his melancholic clown persona, 198cm height, golden eyes, silent yandere archetype, and relationship with Harlequin.',
  keywords: ['Pierrot', 'The Freak Circus Pierrot', 'Pierrot character', 'melancholic clown', 'silent yandere', '198cm'],
  openGraph: {
    title: 'Pierrot — Character Profile, Route Guide & Hidden Triggers',
    description: 'Complete Pierrot character analysis — 198cm, golden eyes, silent yandere. Verified character data from developer AMA.',
    type: 'article',
    url: 'https://freak-circus.com/characters/pierrot',
  },
  alternates: { canonical: 'https://freak-circus.com/characters/pierrot' },
};

const faqData = [
  { question: 'Who is Pierrot in The Freak Circus?', answer: 'Pierrot is a 198cm tall performer with golden eyes, described as a silent yandere. He becomes obsessed with the MC after they defend him from an attacker while he was handing out circus flyers.' },
  { question: 'What happened between Pierrot and Harlequin?', answer: 'Pierrot stabbed Harlequin 5 times. Harlequin killed and ate Columbina (Pierrot\'s former partner). Because the MC resembles Columbina, Pierrot became obsessed with them.' },
  { question: 'Does Pierrot remember previous playthroughs?', answer: 'Yes. On the 4th playthrough, Pierrot begins referencing events from previous routes. The line \'You chose differently last time\' appears regardless of whether the player actually selected that choice. A hidden counter at save offset 0x4A20 triggers replay-aware dialogue.' },
  { question: 'What is the garden scene hidden choice?', answer: 'After failing Pierrot\'s route once, the garden scene in Act III gains a third option: \'Say Nothing.\' This option does not appear in the script files and was discovered through data mining in build 1.03.' },
  { question: 'Is Pierrot yandere?', answer: 'Community analysis suggests Pierrot exhibits yandere tendencies — possessive, protective, emotionally dependent behavior that escalates when the player engages with other characters.' },
];

const pierrotJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freak-circus.com' },
        { '@type': 'ListItem', position: 2, name: 'Characters', item: 'https://freak-circus.com/characters' },
        { '@type': 'ListItem', position: 3, name: 'Pierrot', item: 'https://freak-circus.com/characters/pierrot' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export default function PierrotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pierrotJsonLd) }} />
      <PierrotClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
