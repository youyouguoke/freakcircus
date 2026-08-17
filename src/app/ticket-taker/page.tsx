import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import TicketTakerClient from "./TicketTakerClient";

export const metadata: Metadata = {
  title: "Ticket Taker — Character Profile & Gatekeeper Analysis | Freak Circus Hub",
  description: "Complete Ticket Taker character analysis for The Freak Circus. Covers the gatekeeper persona, mirror scene mechanics, Time-Loop Theory, and the enigmatic sentinel at the threshold.",
  keywords: ["Ticket Taker", "The Freak Circus Ticket Taker", "gatekeeper", "mirror scene", "Time-Loop Theory", "threshold"],
  openGraph: { title: "Ticket Taker — Character Profile & Gatekeeper Analysis", description: "Complete Ticket Taker character analysis, mirror scene mechanics, and Time-Loop Theory.", type: "article", url: "https://freak-circus.com/ticket-taker" },
  alternates: { canonical: "https://freak-circus.com/ticket-taker" },
};

const faqData = [
  { question: "Who is Ticket Taker in The Freak Circus?", answer: "Ticket Taker is the enigmatic sentinel at the threshold of The Freak Circus. The mirror scene where the player sees themselves wearing the mask spawned the Time-Loop Theory." },
  { question: "Is Ticket Taker connected to The Doctor?", answer: "Multiple evidence points suggest a connection: identical height (188cm), shared vocal frequency patterns, matching robe wallpaper patterns, and they never appear in the same scene." },
  { question: "What is the mirror scene?", answer: "The mirror scene is a pivotal moment where the player sees themselves wearing Ticket Taker\'s mask. This spawned the Time-Loop Theory — suggesting the player has always been part of the circus." },
];

export default function TicketTakerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TicketTakerClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
