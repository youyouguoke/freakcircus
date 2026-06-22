import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TheoriesHero from "@/components/theories/TheoriesHero";
import EvidenceWall from "@/components/theories/EvidenceWall";
import TheoryIndexing from "@/components/theories/TheoryIndexing";
import FeaturedTheory from "@/components/theories/FeaturedTheory";
import TheoryArchiveGrid from "@/components/theories/TheoryArchiveGrid";
import ConspiracyBoard from "@/components/theories/ConspiracyBoard";
import CorruptedInvestigations from "@/components/theories/CorruptedInvestigations";
import SymbolAnalysis from "@/components/theories/SymbolAnalysis";
import TimelineCorruption from "@/components/theories/TimelineCorruption";
import CommunityInvestigations from "@/components/theories/CommunityInvestigations";
import SubmitInvestigation from "@/components/theories/SubmitInvestigation";
import TheoriesFAQ from "@/components/theories/TheoriesFAQ";
import TheoriesFooter from "@/components/theories/TheoriesFooter";
import TheoryMatrix from "@/components/theories/TheoryMatrix";
import CompleteTimeline from "@/components/theories/CompleteTimeline";
import TheoryEndingsLink from "@/components/theories/TheoryEndingsLink";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freak Circus Theories, Timeline Analysis & Hidden Lore | Lore Guide & Fan Theories",
  description: "Complete Freak Circus theories guide. Explore Pierrot loop theory, Doctor awareness theory, timeline corruption, hidden lore, memory glitches, and community investigations. All fan theories explained with evidence and analysis.",
  keywords: [
    "Freak Circus theories",
    "Freak Circus lore",
    "Freak Circus timeline",
    "Freak Circus hidden meaning",
    "Pierrot theory",
    "Doctor theory",
    "timeline corruption",
    "memory glitch",
    "hidden lore",
    "fan theories",
    "theory explained",
    "circus theories",
    "loop theory",
    "replay anomaly",
    "character theories",
  ],
  openGraph: {
    title: "Freak Circus Theories, Timeline Analysis & Hidden Lore | Lore Guide & Fan Theories",
    description: "Complete Freak Circus theories guide. Pierrot loop theory, Doctor awareness, timeline corruption, hidden lore, and community investigations.",
    type: "website",
    url: "https://freak-circus.com/theories",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Theories, Timeline Analysis & Hidden Lore | Lore Guide & Fan Theories",
    description: "Complete Freak Circus theories guide. All fan theories explained with evidence and analysis.",
  },
  alternates: {
    canonical: "https://freak-circus.com/theories",
  },
};

export default function TheoriesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <TheoriesHero />
      <EvidenceWall />
      <TheoryIndexing />
      <FeaturedTheory />
      <TheoryArchiveGrid />
      <TheoryMatrix />
      <ConspiracyBoard />
      <CorruptedInvestigations />
      <SymbolAnalysis />
      <TimelineCorruption />
      <CompleteTimeline />
      <CommunityInvestigations />
      <TheoryEndingsLink />
      <SubmitInvestigation />
      <TheoriesFAQ />
      <TheoriesFooter />
      <Footer />
      <JsonLd />
    </main>
  );
}
