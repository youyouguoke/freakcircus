import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import HarlequinClient from "./HarlequinClient";

export const metadata: Metadata = {
  title: "Harlequin — Character Profile, Route Guide & Hidden Scenes | Freak Circus Hub",
  description: "Complete Harlequin character analysis for The Freak Circus. Covers his chaotic performer persona, fractured route unlock conditions, hidden scenes, and the \'You again\' replay dialogue.",
  keywords: ["Harlequin", "The Freak Circus Harlequin", "Harlequin route guide", "chaotic performer", "fractured route", "hidden scenes"],
  openGraph: { title: "Harlequin — Character Profile, Route Guide & Hidden Scenes", description: "Complete Harlequin character analysis, fractured route walkthrough, hidden scenes, and replay-aware mechanics.", type: "article", url: "https://freak-circus.com/characters/harlequin" },
  alternates: { canonical: "https://freak-circus.com/characters/harlequin" },
};

const faqData = [
  { question: "Who is Harlequin in The Freak Circus?", answer: "Harlequin is the chaotic performer of The Freak Circus, bringing unpredictable energy that shifts between playful and menacing. Her route contains the most discussed hidden scenes in the community, including the \'You again\' replay dialogue." },
  { question: "How do you unlock the Fractured Route?", answer: "Choose aggressive options in Scene 4 (\'Mock her performance\'), then switch to comedic options in Scene 9 (\'Laugh with her\'). This contradiction triggers the Fractured Route flag. Scene 10 onwards contains 7 undocumented hidden scenes." },
  { question: "What is the \'You again\' line?", answer: "On the 4th playthrough, Harlequin looks directly at the screen and says \'You again.\' This line does not appear in the script files of any known build and was first reported by u/harlequin_hunter in 2024." },
  { question: "Is Harlequin romanceable?", answer: "Yes. Harlequin is one of the four romanceable characters in The Freak Circus. Her main ending requires maintaining comedic choices through Acts I-II, then selecting the aggressive option in Scene 9." },
  { question: "What happens in the Mirror Hall after completing both Pierrot and Harlequin routes?", answer: "After completing both routes, the Mirror Hall scene changes. Harlequin\'s reflection appears in Pierrot\'s mirror, and vice versa. This connection was discovered through community cross-referencing." },
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
