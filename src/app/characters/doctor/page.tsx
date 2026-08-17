import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import JsonLd from "@/components/JsonLd";
import DoctorClient from "./DoctorClient";

export const metadata: Metadata = {
  title: "The Doctor — Character Profile, Route Guide & Medical Files | Freak Circus Hub",
  description: "Complete The Doctor character analysis for The Freak Circus. Covers his circus physician persona, memory route unlock conditions, five hidden medical files, mirror connections, and precognitive dialogue.",
  keywords: ["The Doctor", "The Freak Circus Doctor", "Doctor route guide", "circus physician", "memory route", "medical files", "White Room"],
  openGraph: { title: "The Doctor — Character Profile, Route Guide & Medical Files", description: "Complete The Doctor character analysis, memory route walkthrough, hidden medical files, and precognitive dialogue.", type: "article", url: "https://freak-circus.com/characters/doctor" },
  alternates: { canonical: "https://freak-circus.com/characters/doctor" },
};

const faqData = [
  { question: "Who is The Doctor in The Freak Circus?", answer: "The Doctor is the circus physician whose clinical detachment masks unsettling awareness. His route requires finding 5 hidden medical files and features precognitive dialogue." },
  { question: "How do you unlock the White Room ending?", answer: "Find all 5 medical files, trigger the mirror connection (requires failing his main route once), and select \'Ask about the white room\' in Scene 12." },
  { question: "What are the 5 medical files?", answer: "File 1 (Scene 2): Pierrot. File 2 (Scene 4): Harlequin. File 3 (Scene 6): Columbina. File 4 (Scene 8): The Doctor — blank except \'Subject is aware of observation.\' File 5 (Scene 10): The player\'s behavioral profile." },
  { question: "Does The Doctor know about the player?", answer: "Yes. File 5 contains a psychological profile that matches the player\'s choice patterns, suggesting the game generates this file based on observed behavior." },
  { question: "Is The Doctor connected to Ticket Taker?", answer: "Multiple evidence points suggest a connection: identical height (188cm), shared vocal frequency patterns, and they never appear in the same scene." },
];

export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DoctorClient faqData={faqData} />
      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
