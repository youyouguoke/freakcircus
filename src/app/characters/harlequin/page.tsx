import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import HarlequinClient from "./HarlequinClient";

export const metadata: Metadata = {
  title: "Harlequin — Character Profile, Route Guide & Hidden Scenes | Freak Circus Hub",
  description: "Harlequin character in The Freak Circus. Main character, seductive rival. Community analysis and fractured route unlock conditions, hidden scenes, and the \'You again\' replay dialogue.",
  keywords: ["Harlequin", "The Freak Circus Harlequin", "Harlequin route guide", "chaotic performer", "fractured route", "hidden scenes"],
  openGraph: { title: "Harlequin — Character Profile, Route Guide & Hidden Scenes", description: "Complete Harlequin character analysis, fractured route walkthrough, hidden scenes, and replay-aware mechanics.", type: "article", url: "https://freak-circus.com/characters/harlequin" },
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
      <JsonLd />
    </main>
  );
}
