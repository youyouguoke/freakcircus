import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EndingsHero from "@/components/endings/EndingsHero";
import EndingComparisonTable from "@/components/endings/EndingComparisonTable";
import EndingArchiveGrid from "@/components/endings/EndingArchiveGrid";
import RouteGraph from "@/components/endings/RouteGraph";
import CommunityDiscoveries from "@/components/endings/CommunityDiscoveries";
import EndingTimeline from "@/components/endings/EndingTimeline";
import EndingsFAQ from "@/components/endings/EndingsFAQ";
import EndingExplained from "@/components/endings/EndingExplained";
import PopularEndingGuides from "@/components/endings/PopularEndingGuides";
import EndingTableOfContents from "@/components/endings/EndingTableOfContents";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import JsonLd from "@/components/JsonLd";
import ContinueExploring from "@/components/ContinueExploring";
import { ENDINGS_CONFIRMED, ENDINGS_UNVERIFIED, ENDINGS_TOTAL, SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

const endingsFaqData = [
  { question: "How many endings are there in Freak Circus?", answer: "The community has confirmed 11 endings including Grand Finale, Smile For Me, Doctor's Note, Eternal Silence, Columbina's Truth, Harlequin's Laughter, Fractured Ending, Medical Failure, and Eternal Dance. Additionally, 3 endings remain unverified: White Room, Corrupted Data, and Null Route. Total: 14 documented." },
  { question: "What is the true ending of Freak Circus?", answer: "No single ending is universally accepted as the true ending. Columbina's Truth is widely considered the closest because it reveals the circus's origin, but this remains unverified by the developer." },
  { question: "How to unlock Pierrot secret ending Eternal Silence?", answer: "Refuse all dialogue for three consecutive scenes in Act III. The screen remains black for 4 minutes before credits roll. Post-credits narration references previous playthroughs." },
  { question: "Can you get all endings in one playthrough?", answer: "No. Several endings require replay awareness and cross-route dependencies. The game tracks history using a hidden counter at offset 0x4A20. Columbina's Truth requires 3 perfect loops." },
  { question: "What is the hardest ending to unlock?", answer: "Columbina's Truth requires perfect alignment across three loops with no mistakes. Corrupted Data may be impossible to unlock legitimately." },
  { question: "Which ending should I get first?", answer: "Start with Grand Finale (Harlequin route) or Smile For Me (Pierrot route). These are canon endings with no special requirements." },
  { question: "Do endings change after replaying?", answer: "Yes. Four endings require replay awareness: Eternal Silence, Columbina's Truth, Doctor's Note, and Harlequin's Laughter. Pierrot's dialogue changes after repeated playthroughs." },
  { question: "How long does it take to get all endings?", answer: `All ${ENDINGS_CONFIRMED} confirmed endings require ${TOTAL_COMPLETION_HOURS} including multiple playthroughs. Columbina's Truth alone needs 3 perfect loops at 4+ hours each.` },
];

const endingsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: endingsFaqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
  description: "Complete Freak Circus endings guide. All 14 endings explained: unlock conditions, step-by-step walkthroughs, requirements, rewards, and fan interpretations. Covers Pierrot, Harlequin, Doctor, and Columbina endings.",
  keywords: [
    "Freak Circus endings",
    "Freak Circus endings guide",
    "ending guide",
    "routes",
    "requirements",
    "explained",
    "how to unlock",
    "ending walkthrough",
    "unlock ending",
    "Pierrot endings",
    "Harlequin endings",
    "Doctor endings",
    "Columbina endings",
    "true ending",
    "secret ending",
    "hidden ending",
    "canon ending",
    "Eternal Silence",
    "Corrupted Data",
    "Columbina's Truth",
    "Grand Finale",
    "all endings",
    "ending order",
    "ending timeline",
  ],
  openGraph: {
    title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
    description: "Complete Freak Circus endings guide. All 14 endings explained with unlock conditions, walkthroughs, and requirements.",
    type: "website",
    url: "https://freak-circus.com/endings",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
    description: "Complete Freak Circus endings guide. All endings, routes, requirements, and explained.",
  },
  alternates: {
    canonical: "https://freak-circus.com/endings",
  },
};

export default function EndingsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(endingsJsonLd) }} />
      <EndingsHero />
      {/* Step-by-step guides banner */}
      <section className="bg-surface py-8 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <Link href="/walkthroughs/all-endings-guide" className="flex-1 min-w-[260px] bg-surface-container border-2 border-primary/40 p-5 hover:border-primary transition-colors group">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">STEP-BY-STEP</div>
            <div className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors">All Endings Unlock Guide</div>
            <p className="text-on-surface-variant text-sm mt-1">Detailed walkthrough for every ending — step by step</p>
          </Link>
          <Link href="/walkthroughs/save-guide" className="flex-1 min-w-[260px] bg-surface-container border-2 border-primary/40 p-5 hover:border-primary transition-colors group">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">ESSENTIAL</div>
            <div className="font-[Epilogue] text-lg font-bold text-foreground group-hover:text-primary transition-colors">Save Points & Data Guide</div>
            <p className="text-on-surface-variant text-sm mt-1">Key save locations, hidden counters, and multi-run strategy</p>
          </Link>
        </div>
      </section>
      <EndingTableOfContents />
      <EndingComparisonTable />
      <EndingArchiveGrid />
      <EndingExplained />
      <RouteGraph />
      <CommunityDiscoveries />
      <EndingTimeline />
      <EndingsFAQ />
      <PopularEndingGuides />
      <ArchiveIndex />
      <ContinueExploring title="Explore More" />
      <Footer />
      <JsonLd />
    </main>
  );
}
