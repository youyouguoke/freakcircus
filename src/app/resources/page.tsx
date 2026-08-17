import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Freak Circus Resources | Embed Charts, Share Guides & Link Assets",
  description: "Free embeddable resources for Freak Circus content creators: ending charts, character guides, tier lists, and social media cards. Link to the archive.",
  keywords: [
    "Freak Circus resources",
    "Freak Circus embed",
    "Freak Circus chart",
    "Freak Circus tier list",
    "Freak Circus infographic",
    "visual novel resources",
    "embeddable guide",
  ],
  openGraph: {
    title: "Freak Circus Resources — Free Embeddable Content",
    description: "Free embeddable resources for content creators: ending charts, character guides, and social media cards.",
    type: "website",
    url: "https://freak-circus.com/resources",
    siteName: "Freak Circus Hub",
  },
  alternates: {
    canonical: "https://freak-circus.com/resources",
  },
};

const embeddableCharts = [
  {
    title: "All Endings Overview",
    description: "Complete visual chart of all 14 endings with unlock conditions, difficulty ratings, and character routes.",
    url: "https://freak-circus.com/endings",
    embedCode: `<a href="https://freak-circus.com/endings" title="Freak Circus All Endings Guide">Freak Circus Endings Chart</a> — <a href="https://freak-circus.com">Freak Circus Hub</a>`,
    tags: ["endings", "chart", "reference"],
  },
  {
    title: "Character Route Map",
    description: "Interactive character relationship map showing all routes, dependencies, and hidden connections.",
    url: "https://freak-circus.com/characters",
    embedCode: `<a href="https://freak-circus.com/characters" title="Freak Circus Character Guide">Freak Circus Characters</a> — <a href="https://freak-circus.com">Freak Circus Hub</a>`,
    tags: ["characters", "routes", "map"],
  },
  {
    title: "Ending Difficulty Tier List",
    description: "Community-ranked tier list of all endings by difficulty. Updated with each new discovery.",
    url: "https://freak-circus.com/endings",
    embedCode: `<a href="https://freak-circus.com/endings" title="Freak Circus Ending Difficulty Rankings">Ending Difficulty Rankings</a> — <a href="https://freak-circus.com">Freak Circus Hub</a>`,
    tags: ["tier-list", "difficulty", "rankings"],
  },
  {
    title: "Save Points Guide",
    description: "Essential save locations for all routes with hidden counter explanations.",
    url: "https://freak-circus.com/walkthroughs/save-guide",
    embedCode: `<a href="https://freak-circus.com/walkthroughs/save-guide" title="Freak Circus Save Guide">Save Points Guide</a> — <a href="https://freak-circus.com">Freak Circus Hub</a>`,
    tags: ["save", "guide", "essential"],
  },
];

const socialCards = [
  {
    platform: "Reddit",
    title: "I found all 14 endings in The Freak Circus — here's the complete guide",
    body: "After 20+ hours of investigation, I documented every confirmed ending with unlock conditions, step-by-step walkthroughs, and hidden triggers. Includes the secret Eternal Silence ending and the three-loop Columbina's Truth.\n\nFull guide: https://freak-circus.com/endings\n\nThis is a fan-maintained archive, not affiliated with the developer. Corrections welcome!",
    subreddit: "r/visualnovels",
  },
  {
    platform: "Reddit",
    title: "The Freak Circus has a hidden counter at offset 0x4A20 that tracks your playthroughs",
    body: "Data miners found that the game tracks your history across save files using a hidden memory counter. This explains why some endings require multiple playthroughs — the game literally remembers what you've done before.\n\nFull technical breakdown: https://freak-circus.com/walkthroughs/save-guide\n\nHas anyone else noticed dialogue changing after repeated playthroughs?",
    subreddit: "r/horrorgaming",
  },
  {
    platform: "Reddit",
    title: "Pierrot remembers: Evidence that The Freak Circus tracks player behavior across saves",
    body: "I've been documenting Pierrot's dialogue changes across multiple playthroughs. After completing the game 3 times, Pierrot's dialogue in Act I references choices I made in PREVIOUS playthroughs.\n\nEvidence and analysis: https://freak-circus.com/theories/pierrot-remembers-routes\n\nThe loop theory is real. The game breaks the fourth wall in ways I haven't seen since Undertale.",
    subreddit: "r/visualnovels",
  },
  {
    platform: "Tumblr",
    title: "The Freak Circus endings guide — all 14 endings explained with unlock conditions",
    body: "For anyone trying to get all the endings in The Freak Circus, I put together a comprehensive guide covering every confirmed ending.\n\n🎭 8 confirmed endings (6 more under investigation)\n🎪 Secret endings require replay awareness\n🔮 Columbina's Truth needs 3 perfect loops\n💫 The game tracks your history across saves\n\nFull guide: https://freak-circus.com/endings\nCharacter guides: https://freak-circus.com/characters\n\n#freakcircus #the-freak-circus #visualnovel #horrorgame #indiegame",
    tags: ["freakcircus", "visualnovel", "horrorgame"],
  },
  {
    platform: "Tumblr",
    title: "Freak Circus character analysis — why Pierrot is the most complex horror VN protagonist",
    body: "Pierrot in The Freak Circus isn't just a sad clown — he's a character who appears to REMEMBER your choices across playthroughs. The community has documented dialogue changes that reference previous runs.\n\nFull analysis: https://freak-circus.com/characters/pierrot\n\nThe meta-narrative in this game is genuinely unsettling. It's free to play on itch.io.\n\n#freakcircus #pierrot #visualnovel #horrorgame #characteranalysis",
    tags: ["freakcircus", "pierrot", "characteranalysis"],
  },
];

const quickLinks = [
  { label: "All Endings Guide", href: "/endings", description: "14 endings with unlock conditions" },
  { label: "Character Guides", href: "/characters", description: "Route walkthroughs for every character" },
  { label: "Walkthroughs", href: "/walkthroughs", description: "Day-by-day guides for all routes" },
  { label: "Lore Archive", href: "/lore", description: "Timeline, symbols, and hidden meanings" },
  { label: "Community Theories", href: "/theories", description: "Fan investigations and analysis" },
  { label: "Save Guide", href: "/walkthroughs/save-guide", description: "Key save locations and hidden counters" },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="bg-surface min-h-[40vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface" />
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">EMBED</span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">SHARE</span>
            <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">LINK</span>
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-6">
            Link & Share Resources
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Free embeddable content for content creators, wiki editors, and community members. Link back to the archive and help players find the information they need.
          </p>
        </div>
      </section>

      {/* Embeddable Charts */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">Embeddable Charts & Guides</h2>
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl">
            Copy the HTML snippet to embed these resources in your wiki, blog, or forum post. All we ask is a link back to Freak Circus Hub.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {embeddableCharts.map((chart) => (
              <div key={chart.title} className="bg-surface-container border border-outline/20 p-6">
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{chart.title}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{chart.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {chart.tags.map((tag) => (
                    <span key={tag} className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="bg-surface border border-outline/20 p-3 mb-4">
                  <code className="text-xs text-on-surface-variant break-all">{chart.embedCode}</code>
                </div>
                <Link href={chart.url} className="font-[JetBrains_Mono] text-xs text-primary hover:underline">
                  VIEW PAGE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Cards */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">Ready-Made Posts</h2>
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl">
            Pre-written posts for Reddit, Tumblr, and other platforms. Copy, customize, and post — just add your own experience.
          </p>
          <div className="space-y-6">
            {socialCards.map((card) => (
              <div key={card.title} className="bg-surface-container border border-outline/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[JetBrains_Mono] text-xs px-3 py-1 bg-primary text-surface">{card.platform}</span>
                  {card.subreddit && (
                    <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{card.subreddit}</span>
                  )}
                </div>
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <div className="bg-surface border border-outline/20 p-4 mb-4">
                  <pre className="text-sm text-on-surface-variant whitespace-pre-wrap font-sans">{card.body}</pre>
                </div>
                {card.tags && (
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="font-[JetBrains_Mono] text-xs text-primary">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">Quick Link Directory</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors group"
              >
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">DIRECT LINK</div>
                <div className="font-[Epilogue] text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </div>
                <div className="text-on-surface-variant text-sm mt-1">{link.description}</div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-2 break-all">
                  freak-circus.com{link.href}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
