import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoreHero from "@/components/lore/LoreHero";
import CompleteTimeline from "@/components/lore/CompleteTimeline";
import SymbolEncyclopedia from "@/components/lore/SymbolEncyclopedia";
import CharacterLoreConnections from "@/components/lore/CharacterLoreConnections";
import HistoricalDocuments from "@/components/lore/HistoricalDocuments";
import LoreEvidenceBoard from "@/components/lore/LoreEvidenceBoard";
import LoreQuestions from "@/components/lore/LoreQuestions";
import LoreNavigationHub from "@/components/lore/LoreNavigationHub";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Freak Circus Lore Encyclopedia — History, Symbols, Timeline & Hidden Meanings",
  description: "The ultimate story and worldbuilding guide for The Freak Circus. Complete timeline, symbol encyclopedia, character lore connections, historical documents, evidence board, and 25 lore questions answered.",
  keywords: [
    "The Freak Circus lore",
    "The Freak Circus lore encyclopedia",
    "The Freak Circus story",
    "The Freak Circus worldbuilding",
    "The Freak Circus timeline",
    "The Freak Circus symbols",
    "The Freak Circus history",
    "The Freak Circus meaning",
    "The Freak Circus explained",
    "The Freak Circus hidden meanings",
    "lore guide",
    "story guide",
    "worldbuilding guide",
    "timeline of events",
    "symbol encyclopedia",
    "red thread meaning",
    "broken mirror symbolism",
    "white room symbolism",
    "mask symbolism",
    "clock meaning",
    "what is The Freak Circus about",
    "is the circus real",
    "why does time repeat",
    "what happened before the game",
    "who created the circus",
    "what is the white room",
  ],
  openGraph: {
    title: "The Freak Circus Lore Encyclopedia — History, Symbols, Timeline & Hidden Meanings",
    description: "The ultimate story and worldbuilding guide for The Freak Circus. Complete timeline, symbol encyclopedia, and 25 lore questions answered.",
    type: "website",
    url: "https://freak-circus.com/lore",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Freak Circus Lore Encyclopedia — History, Symbols, Timeline & Hidden Meanings",
    description: "The ultimate story and worldbuilding guide for The Freak Circus.",
  },
  alternates: {
    canonical: "https://freak-circus.com/lore",
  },
};

export default function LorePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <LoreHero />
        <CompleteTimeline />
        <SymbolEncyclopedia />
        <CharacterLoreConnections />
        <HistoricalDocuments />
        <LoreEvidenceBoard />
        <LoreQuestions />
        <LoreNavigationHub />
        <ArchiveIndex />
        <Footer />
        <JsonLd />
      </div>
    </main>
  );
}
