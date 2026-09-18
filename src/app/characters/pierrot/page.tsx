import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContinueExploring from '@/components/ContinueExploring';
import PierrotClient from './PierrotClient';

export const metadata: Metadata = {
  title: 'Pierrot — Character Profile & Route Guide | Freak Circus Hub',
  description: 'Pierrot character profile for The Freak Circus. 198cm, golden eyes, silent yandere. One of the two main character routes. A planned ending exists but is not yet implemented.',
  keywords: ['Pierrot', 'The Freak Circus Pierrot', 'Pierrot character', 'melancholic clown', 'silent yandere', '198cm'],
  alternates: { canonical: 'https://freak-circus.com/characters/pierrot' },
  openGraph: {
    title: 'Pierrot — Character Profile & Route Guide | Freak Circus Hub',
    description: 'Pierrot character profile for The Freak Circus. 198cm, golden eyes, silent yandere. One of the two main character routes.',
    type: 'website',
    url: 'https://freak-circus.com/characters/pierrot',
    siteName: 'Freak Circus Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pierrot — Character Profile & Route Guide | Freak Circus Hub',
    description: 'Pierrot character profile for The Freak Circus. 198cm, golden eyes, silent yandere. One of the two main character routes.',
  },
};

const faqData = [
  { question: 'Who is Pierrot in The Freak Circus?', answer: 'Pierrot is a 198cm tall performer with golden eyes, described as a silent yandere. He becomes obsessed with the MC after they defend him from an attacker while he was handing out circus flyers.' },
  { question: 'What happened between Pierrot and Harlequin?', answer: 'Pierrot stabbed Harlequin 5 times. Harlequin killed and ate Columbina (Pierrot\'s former partner). Because the MC resembles Columbina, Pierrot became obsessed with them.' },
  { question: 'Does Pierrot remember previous playthroughs?', answer: 'Some players report that Pierrot\'s dialogue seems to change after repeated playthroughs, potentially referencing previous choices. However, this has not been independently verified, and claims about specific save file mechanics (like hidden counters) are unconfirmed community speculation.' },
  { question: 'Does Pierrot have a confirmed ending?', answer: 'No. The only confirmed ending in the current build is "Missing" (associated with Harlequin\'s route). The developer has listed a planned ending for Pierrot on itch.io, but it is not yet implemented.' },
  { question: 'Is Pierrot yandere?', answer: 'Community analysis suggests Pierrot exhibits yandere tendencies — possessive, protective, emotionally dependent behavior that escalates when the player engages with other characters. This is a community interpretation, not an official label.' },
];

export default function PierrotPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PierrotClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      
    </main>
  );
}
