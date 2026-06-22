import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CharactersHero from "@/components/characters/CharactersHero";
import CharacterCards from "@/components/characters/CharacterCards";
import CharacterRelationships from "@/components/characters/CharacterRelationships";
import CharacterPopularity from "@/components/characters/CharacterPopularity";
import CharacterRouteHub from "@/components/characters/CharacterRouteHub";
import CharacterEndingsHub from "@/components/characters/CharacterEndingsHub";
import CharacterTheories from "@/components/characters/CharacterTheories";
import CharacterFAQ from "@/components/characters/CharacterFAQ";
import CharactersAbout from "@/components/characters/CharactersAbout";
import MostSearchedQuestions from "@/components/characters/MostSearchedQuestions";
import CharacterRecommendations from "@/components/characters/CharacterRecommendations";
import ArchiveIndex from "@/components/home/ArchiveIndex";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freak Circus Characters — Pierrot, Harlequin, Doctor & Columbina Guide",
  description: "Meet every Freak Circus character: Pierrot the melancholic clown, Harlequin the chaotic performer, The Doctor the circus physician, and Columbina the ballerina. Full route guides, all endings, relationships, walkthroughs, and community theories for each performer.",
  keywords: [
    "freak circus characters",
    "Freak Circus character guide",
    "Pierrot Freak Circus",
    "Harlequin Freak Circus",
    "Doctor Freak Circus",
    "Columbina Freak Circus",
    "freak circus character endings",
    "freak circus character routes",
    "freak circus character walkthrough",
    "freak circus character relationships",
    "Pierrot ending",
    "Harlequin route",
    "Doctor good ending",
    "Columbina relationship",
    "Freak Circus all endings",
    "Pierrot route guide",
    "Harlequin ending",
    "Doctor route",
    "Columbina ending",
    "Freak Circus routes",
    "character endings",
    "character walkthroughs",
  ],
  openGraph: {
    title: "Freak Circus Characters — Pierrot, Harlequin, Doctor & Columbina Guide",
    description: "Meet every Freak Circus character. Full route guides, all endings, relationships, walkthroughs, and community theories for each performer.",
    type: "website",
    url: "https://freak-circus.com/characters",
    siteName: "Freak Circus Hub",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Freak Circus Characters — Pierrot, Harlequin, Doctor and Columbina character guide",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Characters — Pierrot, Harlequin, Doctor & Columbina Guide",
    description: "Meet every Freak Circus character. Full route guides, all endings, relationships, walkthroughs, and community theories.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://freak-circus.com/characters",
  },
};

export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <CharactersHero />
      <CharacterCards />
      <CharacterRelationships />
      <CharacterPopularity />
      <CharacterRouteHub />
      <CharacterEndingsHub />
      <CharacterTheories />
      <CharacterRecommendations />
      <MostSearchedQuestions />
      <CharacterFAQ />
      <CharactersAbout />
      <ArchiveIndex />
      <Footer />
      <JsonLd />
    </main>
  );
}
