import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import AboutTheGame from "@/components/home/AboutTheGame";
import MainCharacters from "@/components/home/MainCharacters";
import QuickNav from "@/components/home/QuickNav";
import TrendingTheories from "@/components/TrendingTheories";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import FinalCTA from "@/components/FinalCTA";
import LatestDiscoveries from "@/components/home/LatestDiscoveries";
import PopularPages from "@/components/home/PopularPages";
import EndingHubPreview from "@/components/home/EndingHubPreview";
import CharacterRelationshipMap from "@/components/home/CharacterRelationshipMap";
import SpoilerFreeGuide from "@/components/home/SpoilerFreeGuide";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Freak Circus Guide, Endings, Characters & Hidden Lore Archive | Freak Circus Hub",
  description: "The ultimate fan archive for The Freak Circus horror visual novel. Explore character guides, all endings explained, walkthroughs, hidden routes, timeline lore, and community theories. Discover Pierrot, Harlequin, The Doctor, and Columbina.",
  keywords: ["The Freak Circus", "The Freak Circus guide", "The Freak Circus endings", "The Freak Circus characters", "The Freak Circus lore", "The Freak Circus walkthrough", "horror visual novel", "Pierrot", "Harlequin", "The Doctor", "Columbina", "endings guide", "hidden routes", "lore archive", "community theories"],
  openGraph: {
    title: "The Freak Circus Guide, Endings, Characters & Hidden Lore Archive",
    description: "The ultimate fan archive for The Freak Circus horror visual novel. Explore character guides, all endings explained, walkthroughs, hidden routes, timeline lore, and community theories.",
    type: "website",
    url: "https://freak-circus.com",
    siteName: "Freak Circus Hub",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "The Freak Circus Guide — Endings, Characters & Hidden Lore Archive",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Freak Circus Guide, Endings, Characters & Hidden Lore Archive",
    description: "The ultimate fan archive for The Freak Circus horror visual novel.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://freak-circus.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeHero />
      <SpoilerFreeGuide />
      <LatestDiscoveries />
      <PopularPages />
      <EndingHubPreview />
      <MainCharacters />
      <CharacterRelationshipMap />
      <AboutTheGame />
      <QuickNav />
      <TrendingTheories />
      <TrustSection />
      <FAQSection />
      <ArchiveIndex />
      <FinalCTA />
      <Footer />
      <JsonLd />
    </main>
  );
}
