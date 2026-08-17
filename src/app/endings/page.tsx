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
import UnverifiedBanner from "@/components/UnverifiedBanner";
import { ENDINGS_CONFIRMED, ENDINGS_BAD, ENDINGS_OPEN, ENDINGS_TOTAL, SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

const endingsFaqData = [
  { question: "How many endings are there in Freak Circus?", answer: `The confirmed count is ${ENDINGS_TOTAL} endings: ${ENDINGS_BAD} bad ending ("Missing") and ${ENDINGS_OPEN} open endings. Additional ending names and details below are based on community reports and have not been independently verified.` },
  { question: "What is the true ending of Freak Circus?", answer: "No single ending is universally accepted as the true ending. The developer has not confirmed a canonical ending." },
  { question: "What is the confirmed bad ending?", answer: "\"Missing\" is the only independently confirmed ending. It is a Bad Ending triggered during Day 2." },
  { question: "How long does it take to get all endings?", answer: `Playtime estimates are not yet confirmed. The game has ${ENDINGS_TOTAL} confirmed endings total.` },
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
  description: "Freak Circus endings guide. 4 endings confirmed: 1 bad ending (Missing) and 3 unnamed open endings. Only Missing has been verified by name.",
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
    "Open Ending C (unnamed)",
    "Unnamed Open Ending",
    "Unnamed Open Ending",
    "Open Ending A (unnamed)",
    "all endings",
    "ending order",
    "ending timeline",
  ],
  openGraph: {
    title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
    description: "Freak Circus endings guide. 4 endings confirmed: 1 bad ending (Missing) and 3 unnamed open endings.",
    type: "website",
    url: "https://freak-circus.com/endings",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
    description: "Freak Circus endings guide. 4 endings confirmed — only Missing verified by name.",
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
      <div className="max-w-6xl mx-auto px-4 md:px-16 pt-4">
        <UnverifiedBanner level="high" />
      </div>
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
