import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import HarlequinClient from "./HarlequinClient";

export const metadata: Metadata = {
  title: "Harlequin in The Freak Circus — Missing Ending & Character Guide",
  description: "Harlequin is one of The Freak Circus's main characters and the route associated with the confirmed “Missing” ending. See verified facts, Day 1–2 appearances, and route information.",
  keywords: ["The Freak Circus Harlequin", "Harlequin", "Harlequin route guide", "Harlequin character", "Freak Circus characters", "Missing ending"],
  openGraph: { title: "Harlequin in The Freak Circus — Missing Ending & Character Guide", description: "Harlequin is one of The Freak Circus's main characters and the route associated with the confirmed “Missing” ending. See verified facts, Day 1–2 appearances, and route information.", type: "article", url: "https://freak-circus.com/characters/harlequin" },
  alternates: { canonical: "https://freak-circus.com/characters/harlequin" },
};

const faqData = [
  { question: "Who is Harlequin in The Freak Circus?", answer: "Harlequin is one of the two main characters in The Freak Circus, introduced in Day 1 as Pierrot\'s seductive rival. He is described as manipulative and obsessive, creating a triangle of desire with the player character." },
  { question: "What endings are associated with Harlequin?", answer: "The confirmed bad ending \'Missing\' is associated with Harlequin\'s route. This is the only ending confirmed by name in any official source. Community reports suggest at least one open ending is also tied to his route." },
  { question: "Is Harlequin romanceable?", answer: "Harlequin is one of the main character routes in The Freak Circus. The game features branching paths based on player choices, and Harlequin\'s route is one of the primary story paths alongside Pierrot." },
  { question: "What is the Mirror Scene?", answer: "The Mirror Scene is a key story moment in Day 2 that is confirmed to exist by multiple YouTube playthroughs. It appears to be a turning point in the narrative involving Pierrot and Harlequin\'s rivalry." },
  { question: "What is Harlequin\'s relationship with Pierrot?", answer: "Harlequin and Pierrot are rivals. The Columbina legend in Day 2 reveals the backstory behind their animosity. This rivalry is a central plot element of the game." },
];

export default function HarlequinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HarlequinClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      
    </main>
  );
}
