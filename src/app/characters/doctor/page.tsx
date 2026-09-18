import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import DoctorClient from "./DoctorClient";

export const metadata: Metadata = {
  title: "The Doctor — Character Profile & Community Analysis | Freak Circus Hub",
  description: "The Doctor character in The Freak Circus. Day 2 character, circus physician. Community analysis and observations.",
  keywords: ["The Doctor", "The Freak Circus Doctor", "Doctor character", "circus physician", "Day 2 character", "character analysis"],
  openGraph: { title: "The Doctor — Character Profile & Community Analysis", description: "The Doctor character in The Freak Circus. Community analysis and observations.", type: "article", url: "https://freak-circus.com/characters/doctor" },
  alternates: { canonical: "https://freak-circus.com/characters/doctor" },
};

const faqData = [
  { question: "Who is The Doctor in The Freak Circus?", answer: "The Doctor is a circus physician introduced in Day 2. He appears in tent-based horror scenes alongside Ticket Taker. His character is clinical and detached." },
  { question: "Does The Doctor have a route?", answer: "The Doctor appears in Day 2 tent routes. Whether he has a dedicated playable route with specific endings is unverified. Community members speculate about hidden mechanics, but no independent verification exists." },
  { question: "Is The Doctor connected to Ticket Taker?", answer: "Both appear in Day 2 tent routes. Whether they have a deeper connection is unverified community speculation." },
  { question: "Does The Doctor have endings?", answer: "The current build has 1 confirmed ending (Missing). The developer has planned 4 additional endings, but none are implemented yet. Whether any are tied to The Doctor is unverified." },
  { question: "What is The Doctor's role in the story?", answer: "The Doctor is one of three characters added in the Day 2 update. He appears in tent-based content alongside Jester and Ticket Taker." },
];

export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DoctorClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      
    </main>
  );
}