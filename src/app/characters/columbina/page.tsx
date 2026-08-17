import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import ColumbinaClient from "./ColumbinaClient";

export const metadata: Metadata = {
  title: "Columbina — Character Profile, Route Guide & Three-Loop Mystery | Freak Circus Hub",
  description: "Complete Columbina character analysis for The Freak Circus. Covers her ballerina persona, three-loop perfection route, hallway architecture, memory fragments, and the theory that she alone understands the circus.",
  keywords: ["Columbina", "The Freak Circus Columbina", "Columbina route guide", "ballerina", "three-loop route", "Columbina\'s Truth"],
  openGraph: { title: "Columbina — Character Profile, Route Guide & Three-Loop Mystery", description: "Complete Columbina character analysis, three-loop route walkthrough, hallway architecture, and memory fragments.", type: "article", url: "https://freak-circus.com/characters/columbina" },
  alternates: { canonical: "https://freak-circus.com/characters/columbina" },
};

const faqData = [
  { question: "Who is Columbina in The Freak Circus?", answer: "Columbina is the ballerina of The Freak Circus. Her route uses a three-loop alignment mechanic where any deviation resets to Loop 1. She is the only character with cross-route awareness." },
  { question: "How do you unlock Columbina\'s Truth ending?", answer: "Complete three perfect loops: Loop 1 (graceful), Loop 2 (precise), Loop 3 (silent). Any deviation resets to Loop 1. After three perfect loops, a fourth door appears." },
  { question: "Does Columbina know about other routes?", answer: "Yes. Her memory fragments reference events from all four character routes, including routes the player has not completed. This suggests her awareness is global." },
  { question: "What is behind the fourth door?", answer: "After three perfect loops, the hallway gains a fourth door containing a memory fragment that describes Pierrot\'s garden scene from a perspective the player never sees." },
];

export default function ColumbinaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ColumbinaClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
