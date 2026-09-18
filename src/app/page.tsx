import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeHero from '@/components/home/HomeHero';
import AboutTheGame from '@/components/home/AboutTheGame';
import MainCharacters from '@/components/home/MainCharacters';
import QuickNav from '@/components/home/QuickNav';
import TrendingTheories from '@/components/TrendingTheories';
import TrustSection from '@/components/TrustSection';
import FAQSection from '@/components/FAQSection';
import ArchiveIndex from '@/components/home/ArchiveIndex';
import FinalCTA from '@/components/FinalCTA';
import LatestDiscoveries from '@/components/home/LatestDiscoveries';
import PopularPages from '@/components/home/PopularPages';
import EndingHubPreview from '@/components/home/EndingHubPreview';
import CharacterRelationshipMap from '@/components/home/CharacterRelationshipMap';
import SpoilerFreeGuide from '@/components/home/SpoilerFreeGuide';
import JsonLd from '@/components/JsonLd';
import ScrollReveal from '@/components/archive/ScrollReveal';

export const metadata: Metadata = {
  title: 'The Freak Circus Guide, Endings, Characters & Lore | Freak Circus Hub',
  description: 'The Freak Circus guide covering characters, walkthroughs, endings, lore and community theories, with confirmed and unverified information clearly separated.',
  keywords: ['The Freak Circus', 'The Freak Circus guide', 'The Freak Circus endings', 'The Freak Circus characters', 'The Freak Circus lore', 'The Freak Circus walkthrough', 'horror visual novel', 'Pierrot', 'Harlequin', 'The Doctor', 'Columbina', 'endings guide', 'hidden routes', 'lore archive', 'community theories'],
  openGraph: {
    title: 'The Freak Circus Guide, Endings, Characters & Lore',
    description: 'The Freak Circus guide covering characters, walkthroughs, endings, lore and community theories, with confirmed and unverified information clearly separated.',
    type: 'website',
    url: 'https://freak-circus.com',
    siteName: 'Freak Circus Hub',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Freak Circus Guide — Endings, Characters & Lore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Freak Circus Guide, Endings, Characters & Lore',
    description: 'The Freak Circus guide with confirmed and unverified information clearly separated.',
    images: ['/twitter-image.png'],
  },
  alternates: { canonical: 'https://freak-circus.com' },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeHero />
      <ScrollReveal><SpoilerFreeGuide /></ScrollReveal>
      <ScrollReveal><LatestDiscoveries /></ScrollReveal>
      <ScrollReveal><PopularPages /></ScrollReveal>
      <ScrollReveal><EndingHubPreview /></ScrollReveal>
      <ScrollReveal><MainCharacters /></ScrollReveal>
      <ScrollReveal><CharacterRelationshipMap /></ScrollReveal>
      <ScrollReveal><AboutTheGame /></ScrollReveal>
      <ScrollReveal><QuickNav /></ScrollReveal>
      <ScrollReveal><TrendingTheories /></ScrollReveal>
      <ScrollReveal><TrustSection /></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
      <ScrollReveal><ArchiveIndex /></ScrollReveal>
      <FinalCTA />
      <Footer />
      <JsonLd />
    </main>
  );
}
