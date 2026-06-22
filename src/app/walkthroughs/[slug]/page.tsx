import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const routes = {
  "pierrot-main-route": {
    title: "Pierrot Main Route",
    description: "The standard route introducing core mechanics and memory system.",
    steps: 31,
    endings: 3,
    difficulty: "Medium",
    fullDescription: "Pierrot's main route serves as the entry point for new players. It establishes the game's core mechanics including the memory system, dialogue trees, and relationship tracking. The route features 31 key decision points that branch into 3 distinct endings based on player choices in Act 2 and Act 3.",
    requirements: ["None - Available from start"],
    keyScenes: [
      "Act 1: The Welcome - Introduces Pierrot and the circus setting",
      "Act 2: The Mirror Hall - First major branching point",
      "Act 3: The Performance - Final decision point affecting endings",
    ],
  },
  "pierrot-silent-route": {
    title: "Pierrot Silent Route",
    description: "Hidden route requiring silence conditions. The most technically demanding.",
    steps: 42,
    endings: 2,
    difficulty: "Hard",
    fullDescription: "The Pierrot Silent Route is a hidden path that requires the player to remain silent for three consecutive scenes in Act 2. This route reveals deeper lore connections and features 42 decision points with 2 endings. It is considered the most technically demanding route due to precise timing requirements.",
    requirements: ["Complete Pierrot Main Route", "Do not speak for 3 consecutive scenes in Act 2"],
    keyScenes: [
      "Act 1: The Welcome - Standard introduction",
      "Act 2: The Silence - Hidden trigger point",
      "Act 3: The Revelation - Unlocks deepest lore",
    ],
  },
  "harlequin-true-route": {
    title: "Harlequin True Route",
    description: "Harlequin's complete story with emotional depth and 4 endings.",
    steps: 24,
    endings: 4,
    difficulty: "Hard",
    fullDescription: "Harlequin's True Route explores the character's complex emotional landscape and hidden motivations. The route features 24 decision points with 4 distinct endings, making it one of the most branching paths in the game. Certain choices only unlock after failed attempts on other routes.",
    requirements: ["Complete Pierrot Main Route", "Choose 'Look away' in Mirror Hall scene"],
    keyScenes: [
      "Act 1: The Mask - Introduces Harlequin's dual nature",
      "Act 2: The Confession - Major emotional branching point",
      "Act 3: The Truth - Final revelation with 4 endings",
    ],
  },
  "doctor-memory-route": {
    title: "Doctor Memory Route",
    description: "Unlocks medical archive records and reveals institutional secrets.",
    steps: 18,
    endings: 2,
    difficulty: "Medium",
    fullDescription: "The Doctor Memory Route focuses on the medical archive and institutional records within the circus. With 18 decision points and 2 endings, this route provides crucial context for understanding the circus's history. The Doctor's medical notes reference events from routes the player has not yet started.",
    requirements: ["Complete any one route", "Access medical archive in Act 1"],
    keyScenes: [
      "Act 1: The Archive - Medical records introduction",
      "Act 2: The Patient - Reveals hidden connections",
      "Act 3: The Prescription - Final choice with 2 endings",
    ],
  },
  "columbina-fractured-route": {
    title: "Columbina Fractured Route",
    description: "Timeline-fragmented narrative requiring knowledge from previous routes.",
    steps: 27,
    endings: 3,
    difficulty: "Very Hard",
    fullDescription: "Columbina's Fractured Route presents a timeline-fragmented narrative that requires knowledge from previous routes to fully understand. With 27 decision points and 3 endings, this route challenges players to piece together events from multiple playthroughs. The route's structure mirrors the character's fractured memory.",
    requirements: ["Complete at least 3 other routes", "Collect all Mirror Hall observations"],
    keyScenes: [
      "Act 1: The Fragments - Scattered timeline introduction",
      "Act 2: The Connection - Links previous route events",
      "Act 3: The Whole - Final synthesis with 3 endings",
    ],
  },
  "null-route": {
    title: "Null Route",
    description: "The hidden final route. Requires all previous endings.",
    steps: 56,
    endings: 1,
    difficulty: "Extreme",
    fullDescription: "The Null Route is the hidden final route that requires completion of all other routes and their endings. With 56 decision points and a single ending, this route serves as the ultimate challenge for completionist players. The route reveals the true nature of the circus and connects all previous narrative threads.",
    requirements: ["Complete all 15 endings from other routes", "Wait 30 seconds on title screen"],
    keyScenes: [
      "Act 1: The Void - Empty circus introduction",
      "Act 2: The Echoes - References all previous routes",
      "Act 3: The Null - Final revelation with single ending",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = routes[slug as keyof typeof routes];
  if (!route) return { title: "Not Found" };
  return {
    title: `${route.title} | Walkthroughs | Freak Circus Hub`,
    description: route.description,
  };
}

export default async function WalkthroughDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routes[slug as keyof typeof routes];
  if (!route) notFound();

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/walkthroughs" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Walkthroughs
          </Link>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">{route.title}</h1>
          <p className="text-on-surface-variant text-lg mb-8">{route.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-2xl text-primary">{route.steps}</div>
              <div className="text-xs text-on-surface-variant uppercase">Steps</div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-2xl text-primary">{route.endings}</div>
              <div className="text-xs text-on-surface-variant uppercase">Endings</div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-2xl text-primary">{route.difficulty}</div>
              <div className="text-xs text-on-surface-variant uppercase">Difficulty</div>
            </div>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 mb-8">
            <h2 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">Route Overview</h2>
            <p className="text-on-surface-variant">{route.fullDescription}</p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 mb-8">
            <h2 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">Unlock Requirements</h2>
            <ul className="space-y-2">
              {route.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                  <span className="text-primary mt-1">▸</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 mb-8">
            <h2 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">Key Scenes</h2>
            <div className="space-y-4">
              {route.keyScenes.map((scene, i) => (
                <div key={i} className="border-l-2 border-primary pl-4">
                  <p className="text-on-surface-variant">{scene}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
