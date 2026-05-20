import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TrendingTheories from "@/components/TrendingTheories";
import FeaturesSection from "@/components/FeaturesSection";
import RelationshipMap from "@/components/RelationshipMap";
import CommunitySupport from "@/components/CommunitySupport";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <TrendingTheories />
      <FeaturesSection />
      <RelationshipMap />
      <CommunitySupport />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
