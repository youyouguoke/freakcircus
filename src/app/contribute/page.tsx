import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contribute to Freak Circus Hub | Community Theories, Guides & Corrections",
  description: "Help expand the Freak Circus archive. Submit theories, correct guides, share hidden discoveries, or contribute walkthroughs. The community keeps the circus alive.",
  keywords: [
    "Freak Circus contribute",
    "Freak Circus community",
    "submit theory",
    "fan theories",
    "Freak Circus wiki",
    "Freak Circus corrections",
    "community guide",
  ],
  openGraph: {
    title: "Contribute to Freak Circus Hub",
    description: "Submit theories, correct guides, share hidden discoveries. The community keeps the circus alive.",
    type: "website",
    url: "https://freak-circus.com/contribute",
    siteName: "Freak Circus Hub",
  },
  alternates: {
    canonical: "https://freak-circus.com/contribute",
  },
};

const contributionTypes = [
  {
    icon: "🧩",
    title: "Submit a Theory",
    description: "Have a theory about the circus's lore, character connections, or hidden meanings? We publish well-researched fan theories with full credit.",
    examples: [
      "Columbina's connection to the First Circus Fire",
      "The Doctor's true identity theory",
      "Why Pierrot remembers across loops",
    ],
    link: "/theories",
  },
  {
    icon: "📝",
    title: "Correct a Guide",
    description: "Found an error in our walkthroughs, ending conditions, or character analysis? Help us keep the archive accurate.",
    examples: [
      "Wrong dialogue choice listed",
      "Ending unlock condition updated",
      "Missing hidden trigger",
    ],
    link: "/walkthroughs",
  },
  {
    icon: "🔍",
    title: "Share a Discovery",
    description: "Found something hidden in the game files, a new secret, or an undocumented interaction? We'll verify and add it with credit.",
    examples: [
      "New hidden dialogue after patch 1.04",
      "Unused sprite found in game files",
      "New ending condition discovered",
    ],
    link: "/lore",
  },
  {
    icon: "📖",
    title: "Write a Walkthrough",
    description: "Have detailed knowledge of a specific route? Contribute a day-by-day walkthrough for character routes we haven't covered yet.",
    examples: [
      "Columbina's three-loop walkthrough",
      "Doctor's hidden files guide",
      "Ticket Taker route speculation",
    ],
    link: "/walkthroughs",
  },
];

const communityStats = [
  { label: "Community Theories", value: "25+" },
  { label: "Ending Variations", value: "14" },
  { label: "Character Routes", value: "8+" },
  { label: "Hidden Secrets", value: "40+" },
];

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="bg-surface min-h-[50vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface" />
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">SUBMIT</span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">VERIFY</span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">CREDIT</span>
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-6">
            The Circus Needs You
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Freak Circus Hub is community-maintained. Every theory, correction, and discovery comes from players like you. Submit your findings and get credited in the archive.
          </p>
          <div className="flex flex-wrap gap-8 mb-8">
            {communityStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[Creepster] text-2xl text-primary">{stat.value}</div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">How to Contribute</h2>
          <p className="text-on-surface-variant text-sm mb-10 max-w-2xl">
            Choose your contribution type. All submissions are reviewed and credited.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {contributionTypes.map((type) => (
              <div key={type.title} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <h3 className="font-[Epilogue] text-xl font-bold text-foreground">{type.title}</h3>
                    <p className="text-on-surface-variant text-sm mt-1">{type.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">EXAMPLES</div>
                  <ul className="space-y-1">
                    {type.examples.map((ex) => (
                      <li key={ex} className="text-on-surface-variant text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">›</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={type.link} className="font-[JetBrains_Mono] text-xs text-primary hover:underline">
                  VIEW RELATED PAGES →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">Submission Guidelines</h2>
          <div className="space-y-6">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Evidence Required</h3>
              <p className="text-on-surface-variant text-sm">
                All submissions must include evidence: screenshots, game file data, video timestamps, or reproducible steps. Unverified claims are marked as &quot;Under Investigation&quot; with full credit to the discoverer.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Credit & Attribution</h3>
              <p className="text-on-surface-variant text-sm">
                Contributors are credited by name (or handle) on the relevant page. Major discoveries are featured in our Community Discoveries section. You retain full ownership of your findings.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">No Spoilers Without Tags</h3>
              <p className="text-on-surface-variant text-sm">
                All ending details, secret conditions, and plot revelations must be marked with spoiler warnings. We protect first-time players while documenting everything for completionists.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Game Version</h3>
              <p className="text-on-surface-variant text-sm">
                Always specify the game version when reporting discoveries. Content may change between patches. Current known version: v0.2 Prototype (2026-02-22).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Submit?</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Send your discovery, theory, or correction to our team. We review every submission within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@freak-circus.com?subject=Community Submission: [Your Topic]"
              className="px-8 py-4 bg-primary text-surface font-[JetBrains_Mono] text-sm uppercase hover:bg-primary/90 transition-colors border-2 border-primary shadow-[4px_4px_0px_#000]"
            >
              Email Your Submission
            </a>
            <Link
              href="/faq"
              className="px-8 py-4 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-sm uppercase"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">Join the Community</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Reddit</h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Join discussions on r/visualnovels and r/horrorgaming. Share your theories and findings with the community.
              </p>
              <span className="font-[JetBrains_Mono] text-xs text-primary">r/visualnovels · r/horrorgaming</span>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Tumblr</h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Follow #freakcircus and #the-freak-circus for fan art, theories, and community content.
              </p>
              <span className="font-[JetBrains_Mono] text-xs text-primary">#freakcircus · #visualnovel</span>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">YouTube</h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Watch playthroughs, theory videos, and ending compilations. Create your own and link back to the archive.
              </p>
              <span className="font-[JetBrains_Mono] text-xs text-primary">Let&apos;s Plays · Theory Videos</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
