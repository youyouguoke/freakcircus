import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import UnverifiedBanner from "@/components/UnverifiedBanner";
import ColumbinaClient from "./ColumbinaClient";

export const metadata: Metadata = {
  title: "Columbina — Deceased Character, Lore & Community Theories | Freak Circus Hub",
  description: "Columbina character analysis for The Freak Circus. NOTE: Columbina is a DECEASED character (killed by Harlequin), not a playable route. This page covers community theories and lore about her role in the story.",
  keywords: ["Columbina", "The Freak Circus Columbina", "Columbina deceased", "ballerina", "Columbina lore"],
  openGraph: { title: "Columbina — Deceased Character & Lore Analysis", description: "Columbina is deceased (killed by Harlequin). Community theories and lore analysis.", type: "article", url: "https://freak-circus.com/characters/columbina" },
  alternates: { canonical: "https://freak-circus.com/characters/columbina" },
};

const faqData = [
  { question: "Who is Columbina in The Freak Circus?", answer: "Columbina is a DECEASED character in The Freak Circus. She was Pierrot's former partner and was killed (poisoned and eaten) by Harlequin. She is NOT a playable character — she only appears in backstory and memories." },
  { question: "Is Columbina a playable character?", answer: "No. Columbina is deceased. She was killed by Harlequin before the events of the game. She appears only in backstory, memories, and the 'Columbina legend' referenced in Day 2." },
  { question: "What happened to Columbina?", answer: "According to developer AMA and multiple sources: Harlequin poisoned and ate Columbina. Her last words were 'save me', which Harlequin misinterpreted as permission to consume her." },
  { question: "Why does Pierrot care about the MC?", answer: "Because the MC resembles Columbina. Pierrot transferred his obsession from Columbina to the MC." },
];

export default function ColumbinaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 md:px-16 pt-4">
        <UnverifiedBanner level="high" />
      </div>
      <ColumbinaClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
