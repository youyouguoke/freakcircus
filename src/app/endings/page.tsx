import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EndingsHero from "@/components/endings/EndingsHero";
import EndingOverview from "@/components/endings/EndingOverview";
import EndingComparisonTable from "@/components/endings/EndingComparisonTable";
import EndingCategories from "@/components/endings/EndingCategories";
import EndingArchiveGrid from "@/components/endings/EndingArchiveGrid";
import EndingSpotlight from "@/components/endings/EndingSpotlight";
import RouteGraph from "@/components/endings/RouteGraph";
import CommunityDiscoveries from "@/components/endings/CommunityDiscoveries";
import EndingDifficultyRanking from "@/components/endings/EndingDifficultyRanking";
import EndingTimeline from "@/components/endings/EndingTimeline";
import EndingsFAQ from "@/components/endings/EndingsFAQ";
import EndingExplained from "@/components/endings/EndingExplained";
import PopularEndingGuides from "@/components/endings/PopularEndingGuides";
import EndingTableOfContents from "@/components/endings/EndingTableOfContents";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freak Circus Endings Guide (2026) | All Endings, Routes, Requirements & Explained",
  description: "Complete Freak Circus endings guide. All 8+ endings explained: unlock conditions, step-by-step walkthroughs, requirements, rewards, and fan interpretations. Covers Pierrot, Harlequin, Doctor, and Columbina endings.",
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
    description: "Complete Freak Circus endings guide. All 8+ endings explained with unlock conditions, walkthroughs, and requirements.",
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
      <EndingsHero />
      <EndingTableOfContents />
      <EndingOverview />
      <EndingComparisonTable />
      <EndingCategories />
      <EndingArchiveGrid />
      <EndingSpotlight />
      <EndingExplained />
      <RouteGraph />
      <CommunityDiscoveries />
      <EndingDifficultyRanking />
      <EndingTimeline />
      <EndingsFAQ />
      <PopularEndingGuides />
      <ArchiveIndex />
      <Footer />
      <JsonLd />
    </main>
  );
}
