import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  statusCards,
  quickFacts,
  atAGlance,
  overview,
  appearance,
  personality,
  psychologicalProfile,
  roleInStory,
  evidenceTimeline,
  relationships,
  quotes,
  hiddenDetails,
  easterEggs,
  theories,
  symbolism,
  futureRoute,
  faqs,
  relatedArticles,
  communitySpotlight,
} from "./data";
import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  title: "Jester (The Freak Circus): Character Guide, Lore, Theories & Relationships",
  description:
    "Discover everything about Jester in The Freak Circus, including personality analysis, relationships, hidden lore, community theories, story role, future route predictions, quotes, easter eggs, and more.",
  keywords: [
    "Jester",
    "The Freak Circus Jester",
    "Who is Jester",
    "Jester route",
    "Jester ending",
    "Jester lore",
    "Jester theory",
    "Jester relationship",
    "Jester quotes",
    "Jester personality",
  ],
  openGraph: {
    title: "Jester (The Freak Circus): Character Guide, Lore, Theories & Relationships",
    description:
      "The most comprehensive Jester guide for The Freak Circus. Personality, lore, theories, relationships, hidden details, and future route predictions.",
    type: "article",
    url: "https://freak-circus.com/characters/jester",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jester (The Freak Circus): Character Guide, Lore, Theories & Relationships",
    description: "The most comprehensive Jester guide for The Freak Circus.",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/jester",
  },
};

export default function JesterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://freak-circus.com" },
          { "@type": "ListItem", position: 2, name: "Characters", item: "https://freak-circus.com/characters" },
          { "@type": "ListItem", position: 3, name: "Jester", item: "https://freak-circus.com/characters/jester" },
        ],
      },
      {
        "@type": "Article",
        headline: "Jester (The Freak Circus): Character Guide, Lore, Theories & Relationships",
        description:
          "The most comprehensive Jester guide for The Freak Circus. Personality, lore, theories, relationships, hidden details, and future route predictions.",
        url: "https://freak-circus.com/characters/jester",
        image: "https://freak-circus.com/Jester.jpg",
        author: { "@type": "Organization", name: "Freak Circus Hub" },
        publisher: {
          "@type": "Organization",
          name: "Freak Circus Hub",
          logo: { "@type": "ImageObject", url: "https://freak-circus.com/Logo.png" },
        },
        dateModified: "2026-06-30",
      },
      {
        "@type": "Person",
        name: "Jester",
        alternateName: "The Trickster",
        description:
          "A chaotic, manipulative trickster who appears behind the scenes of The Freak Circus. Jester seems aware of the game's looping structure and speaks to the player with unsettling familiarity.",
        url: "https://freak-circus.com/characters/jester",
        image: "https://freak-circus.com/Jester.jpg",
        affiliation: { "@type": "Organization", name: "The Freak Circus" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "ImageObject",
        contentUrl: "https://freak-circus.com/Jester.jpg",
        description: "Jester character portrait from The Freak Circus",
        name: "Jester Portrait",
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // Jester
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Jester character portrait from The Freak Circus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Jester-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">Appears Day 2</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">No Route</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Mystery ★★★★☆</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">Jester</h1>
                <p className="font-[Epilogue] italic opacity-60">The Trickster Behind the Circus</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">True Identity</h4>
                <p className="font-[Epilogue]">Unknown</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Affiliation</h4>
                <p className="font-[Epilogue]">The Freak Circus</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">Day 2 Backstage</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Threat Level</h4>
                <p className="font-[Epilogue] text-primary font-bold">????</p>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="https://garula.itch.io/the-freak-circus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-surface font-[JetBrains_Mono] text-xs uppercase hover:bg-primary/90 transition-colors"
            >
              Play the Demo →
            </a>
            <Link
              href="/characters"
              className="inline-block px-6 py-3 border border-primary text-primary font-[JetBrains_Mono] text-xs uppercase hover:bg-primary hover:text-surface transition-colors"
            >
              All Characters
            </Link>
          </div>

          {/* Quick Facts */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-surface-container border border-outline/20 p-4 flex justify-between items-center">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant uppercase">{fact.label}</span>
                  <span className="font-[Epilogue] text-sm font-bold text-foreground text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* At a Glance */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">At a Glance</h2>
            <div className="bg-surface-container border border-outline/20 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {atAGlance.map((row) => (
                    <tr key={row.attribute} className="border-b border-outline/10 last:border-0">
                      <td className="p-4 font-[JetBrains_Mono] text-xs text-on-surface-variant uppercase w-1/3">{row.attribute}</td>
                      <td className="p-4 text-foreground">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Character Overview */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Character Overview</h2>
            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
              {overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Appearance */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Appearance</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {appearance.map((item) => (
                <div key={item.label} className="bg-surface-container border border-outline/20 overflow-hidden">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1 bg-surface-dim border-r border-outline/10">
                      <div className="aspect-square w-full h-full">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 p-5 flex flex-col justify-center">
                      <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-2">{item.label}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Personality Analysis */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Personality Analysis</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {personality.map((trait) => (
                <div key={trait.title} className="bg-surface-container border border-outline/20 p-5">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{trait.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{trait.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Psychological Profile */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Psychological Profile</h2>
            <div className="bg-surface-container border border-outline/20 p-6">
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{psychologicalProfile.summary}</p>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                {psychologicalProfile.traits.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Role in Story */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Role in Story</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{roleInStory.intro}</p>
            <div className="space-y-4">
              {roleInStory.points.map((point) => (
                <div key={point.title} className="bg-surface-container border border-outline/20 p-5">
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-1">{point.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence Timeline */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Evidence Timeline</h2>
            <div className="relative border-l-2 border-primary/30 ml-4 space-y-8">
              {evidenceTimeline.map((item) => (
                <div key={item.phase} className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface" />
                  <div className="font-[JetBrains_Mono] text-xs text-primary uppercase mb-1">{item.phase}</div>
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-[JetBrains_Mono] text-[10px] uppercase px-2 py-1 border ${
                          tag === "Confirmed"
                            ? "border-green-500/50 text-green-400"
                            : tag === "Implied"
                            ? "border-yellow-500/50 text-yellow-400"
                            : "border-purple-500/50 text-purple-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Relationships */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Relationships</h2>
            <div className="space-y-4">
              {relationships.map((rel) => (
                <div key={rel.pair} className="bg-surface-container border border-outline/20 p-6">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{rel.pair}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{rel.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quotes */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Quotes</h2>
            <div className="space-y-4">
              {quotes.map((q, i) => (
                <div key={i} className="bg-surface-container border border-outline/20 p-6">
                  <blockquote className="font-[Creepster] text-xl text-primary mb-3">“{q.quote}”</blockquote>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">Context: {q.context}</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{q.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hidden Details */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Hidden Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {hiddenDetails.map((item) => (
                <div key={item.label} className="bg-surface-container border border-outline/20 p-5">
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Easter Eggs */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Easter Eggs</h2>
            <div className="space-y-4">
              {easterEggs.map((egg) => (
                <div key={egg.title} className="bg-surface-container border border-outline/20 p-5">
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-1">{egg.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{egg.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Theory Scoreboard */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Theory Scoreboard</h2>
            <div className="space-y-4">
              {theories.map((t) => (
                <div key={t.title} className="bg-surface-container border border-outline/20 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{t.title}</h3>
                    <div className="font-[Creepster] text-xl text-primary">{t.score}</div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{t.summary}</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-[JetBrains_Mono] text-xs text-green-400 uppercase mb-1">Evidence For</div>
                      <ul className="space-y-1 text-on-surface-variant">
                        {t.evidenceFor.map((e, i) => (
                          <li key={i}>• {e}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-[JetBrains_Mono] text-xs text-red-400 uppercase mb-1">Evidence Against</div>
                      <ul className="space-y-1 text-on-surface-variant">
                        {t.evidenceAgainst.map((e, i) => (
                          <li key={i}>• {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Symbolism */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Symbolism</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {symbolism.map((sym) => (
                <div key={sym.symbol} className="bg-surface-container border border-outline/20 p-5">
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-1">{sym.symbol}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{sym.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Future Route Prediction */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Future Route Prediction</h2>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Will Jester become romanceable?</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{futureRoute.summary}</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary uppercase mb-1">Likelihood</div>
                  <div className="text-foreground">{futureRoute.likelihood}</div>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary uppercase mb-1">Evidence</div>
                  <div className="text-on-surface-variant">{futureRoute.evidence}</div>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary uppercase mb-1">Community Expectations</div>
                  <div className="text-on-surface-variant">{futureRoute.expectations}</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-surface-container border border-outline/20">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-[Epilogue] text-base font-semibold text-foreground list-none">
                    <span>{f.question}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline/10 leading-relaxed">{f.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Read Next</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="bg-surface-container border border-outline/20 p-5 hover:border-primary transition-colors"
                >
                  <h3 className="font-[Epilogue] text-base font-bold text-foreground mb-2">{article.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-3">{article.description}</p>
                  <span className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Community Spotlight */}
          <section className="mb-12">
            <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">Community Spotlight</h2>
            <div className="bg-surface-container border border-outline/20 p-6">
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{communitySpotlight.summary}</p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                {communitySpotlight.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Last updated: {communitySpotlight.lastUpdated}</div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
