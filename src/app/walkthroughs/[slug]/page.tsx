import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const routes: Record<string, {
  title: string;
  description: string;
  verified: boolean;
  fullDescription: string;
  whatWeKnow: string[];
  communityReports: string[];
  tips: string[];
  sources: string[];
}> = {
  "pierrot-main-route": {
    title: "Pierrot Route",
    description: "The melancholic clown — one of the two main character routes.",
    verified: true,
    fullDescription:
      "Pierrot is introduced in Day 1 as a silent, melancholic figure. His route is one of the two primary story paths in the game (the other being Harlequin). Day 2 deepens his character through tent routes and the Columbina legend, which reveals the backstory behind Pierrot and Harlequin's rivalry.",
    whatWeKnow: [
      "Pierrot is one of the two main characters introduced in Day 1",
      "He is described as a 'yandere' character — obsessive and possessive",
      "Day 2 reveals the Columbina legend, explaining Pierrot and Harlequin's rivalry",
      "Multiple endings are associated with his route (specific names unconfirmed)",
    ],
    communityReports: [
      "Players describe dialogue choices that affect relationship outcomes",
      "Some report 'comfort' vs 'confess' type choices in Day 1",
      "Day 2 reportedly features tent-based scenes involving Pierrot",
    ],
    tips: [
      "Save before major dialogue choices",
      "Complete Day 1 first to unlock Day 2 content",
      "Pay attention to the Columbina legend in Day 2",
    ],
    sources: [
      "thefreakcircus.org — Character descriptions",
      "YouTube playthroughs — Day 1 & 2 content confirmation",
    ],
  },
  "harlequin-true-route": {
    title: "Harlequin Route",
    description: "The seductive rival — home of the confirmed 'Missing' bad ending.",
    verified: true,
    fullDescription:
      "Harlequin is introduced in Day 1 as Pierrot's seductive rival. He enters the story as a competing force, creating a triangle of desire, manipulation, and psychological tension. The confirmed bad ending 'Missing' is associated with his route.",
    whatWeKnow: [
      "Harlequin is one of the two main characters introduced in Day 1",
      "He is described as seductive, manipulative, and obsessive",
      "The 'Missing' bad ending is confirmed to be associated with his route",
      "His rivalry with Pierrot is a central plot element",
    ],
    communityReports: [
      "Players report aggressive and comedic dialogue options",
      "Day 2 features tent-based scenes involving Harlequin",
      "Some describe a 'comedy vs aggression' choice system",
    ],
    tips: [
      "Save before major dialogue choices",
      "The 'Missing' ending appears to be the default — try different choices for alternatives",
      "Understanding the Columbina legend adds context to Harlequin's motivations",
    ],
    sources: [
      "thefreakcircus.wiki.gg — 'Missing' ending confirmed",
      "thefreakcircus.org — Character descriptions",
      "YouTube — 'Bad End' scene videos",
    ],
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = routes[slug];
  if (!route) return { title: "Route Not Found" };
  return {
    title: `${route.title} Guide — Freak Circus Hub`,
    description: route.description,
    alternates: { canonical: `https://freak-circus.com/walkthroughs/${slug}` },
  };
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = routes[slug];
  if (!route) notFound();

  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // {slug.toUpperCase().replace(/-/g, "_")}
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            {route.title}
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">{route.description}</p>

          {/* Verification badge */}
          <div className={`inline-block px-3 py-1 mb-8 text-xs font-mono uppercase tracking-widest ${
            route.verified
              ? "bg-green-900/30 text-green-400 border border-green-500/30"
              : "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30"
          }`}>
            {route.verified ? "✓ Route Confirmed" : "⚠ Unverified Route"}
          </div>

          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">{route.fullDescription}</p>
            </section>

            {/* What We Know */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Know (Verified)</h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                {route.whatWeKnow.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Community Reports */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Community Reports (Unverified)</h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <p className="text-on-surface/60 text-sm mb-4">
                  The following details are reported by community members but have not been independently verified:
                </p>
                <ul className="space-y-2 text-on-surface/50 text-sm">
                  {route.communityReports.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tips</h2>
              <div className="glass-card p-6">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  {route.tips.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sources */}
            <section>
              <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">Sources</h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                {route.sources.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/walkthroughs" className="font-mono text-xs text-primary uppercase hover:underline">
              ← Back to Walkthrough Hub
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
