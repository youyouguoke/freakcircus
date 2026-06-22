import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WalkthroughHero from "@/components/walkthroughs/WalkthroughHero";
import WalkthroughOverview from "@/components/walkthroughs/WalkthroughOverview";
import RouteComparisonTable from "@/components/walkthroughs/RouteComparisonTable";
import RouteOrderGuide from "@/components/walkthroughs/RouteOrderGuide";
import RouteArchiveGrid from "@/components/walkthroughs/RouteArchiveGrid";
import FeaturedRoute from "@/components/walkthroughs/FeaturedRoute";
import BranchMap from "@/components/walkthroughs/BranchMap";
import DependencyAnalysis from "@/components/walkthroughs/DependencyAnalysis";
import HiddenTriggerArchive from "@/components/walkthroughs/HiddenTriggerArchive";
import CommunityRouteNotes from "@/components/walkthroughs/CommunityRouteNotes";
import RouteDifficultyRanking from "@/components/walkthroughs/RouteDifficultyRanking";
import RouteSymbolism from "@/components/walkthroughs/RouteSymbolism";
import WalkthroughFAQ from "@/components/walkthroughs/WalkthroughFAQ";
import RouteFlowchart from "@/components/walkthroughs/RouteFlowchart";
import ChoiceConsequenceTable from "@/components/walkthroughs/ChoiceConsequenceTable";
import CompletionChecklist from "@/components/walkthroughs/CompletionChecklist";
import MissableContent from "@/components/walkthroughs/MissableContent";
import WalkthroughLinkMatrix from "@/components/walkthroughs/WalkthroughLinkMatrix";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freak Circus Walkthrough Guide (2026) | All Routes, Choices, Hidden Triggers & Endings",
  description: "Complete Freak Circus walkthrough guide. Step-by-step guides for Pierrot, Harlequin, Doctor, and Columbina routes. All choices, hidden triggers, secret endings, missable content, and 100% completion checklist.",
  keywords: [
    "Freak Circus walkthrough",
    "Freak Circus walkthrough guide",
    "walkthrough",
    "guide",
    "routes",
    "choices",
    "endings",
    "hidden triggers",
    "Pierrot walkthrough",
    "Harlequin walkthrough",
    "Doctor walkthrough",
    "Columbina walkthrough",
    "secret route",
    "true route",
    "how to unlock",
    "choice guide",
    "missable content",
    "100% completion",
    "route difficulty",
    "step by step",
    "walkthrough guide",
  ],
  openGraph: {
    title: "Freak Circus Walkthrough Guide (2026) | All Routes, Choices, Hidden Triggers & Endings",
    description: "Complete Freak Circus walkthrough guide. Step-by-step guides for all routes with hidden triggers, choices, and endings.",
    type: "website",
    url: "https://freak-circus.com/walkthroughs",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Walkthrough Guide (2026) | All Routes, Choices, Hidden Triggers & Endings",
    description: "Complete Freak Circus walkthrough guide. All routes, choices, hidden triggers, and endings.",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs",
  },
};

export default function WalkthroughsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WalkthroughHero />
      <RouteFlowchart />
      <WalkthroughOverview />
      <RouteComparisonTable />
      <RouteOrderGuide />
      <RouteArchiveGrid />
      <ChoiceConsequenceTable />
      <FeaturedRoute />
      <BranchMap />
      <DependencyAnalysis />
      <HiddenTriggerArchive />
      <MissableContent />
      <CompletionChecklist />
      <CommunityRouteNotes />
      <RouteDifficultyRanking />
      <RouteSymbolism />
      <WalkthroughFAQ />
      <WalkthroughLinkMatrix />
      <ArchiveIndex />
      <Footer />
      <JsonLd />
    </main>
  );
}
