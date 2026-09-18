import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import QuickPeek from "@/components/QuickPeek";
import {
  CURRENT_VERSION,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  GAME_GENRE,
  ITCH_IO_URL,
  LAST_VERIFIED_LABEL,
  PLAYTIME_LABEL,
  RELEASED_DAYS_LABEL,
} from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "Where to Play The Freak Circus — Official itch.io Source | Freak Circus Hub",
  description: "Play The Freak Circus through the official itch.io source. Current build, platform, content status, safety notes, and spoiler-aware getting-started guide.",
  keywords: ["The Freak Circus", "play online", "official source", "itch.io", "horror visual novel", "browser game"],
  openGraph: {
    title: "Where to Play The Freak Circus — Official itch.io Source",
    description: "Current build, platform, content status, safety notes, and getting-started guide for The Freak Circus.",
    type: "website",
    url: "https://freak-circus.com/play-online",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Play The Freak Circus — Official itch.io Source",
    description: "Current build, platform, content status, and safety notes.",
  },
  alternates: {
    canonical: "https://freak-circus.com/play-online",
  },
};

export default function PlayOnline() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-surface min-h-[60vh] flex flex-col justify-center py-16 px-4 md:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-widest">
            {CURRENT_VERSION} | Last verified: {LAST_VERIFIED_LABEL}
          </div>
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-6 leading-none">
            Play The Freak Circus Online
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Experience the official demo directly in your browser. No download required. Rated 18+ for psychological horror and unsettling narrative content.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={ITCH_IO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-surface font-[JetBrains_Mono] text-sm uppercase hover:bg-primary/90 transition-colors"
            >
              Play Official Demo →
            </a>
            <Link
              href="/download"
              className="inline-block px-8 py-4 border border-primary text-primary font-[JetBrains_Mono] text-sm uppercase hover:bg-primary hover:text-surface transition-colors"
            >
              Download Game
            </Link>
            <Link
              href="/android-installation"
              className="inline-block px-8 py-4 border border-primary text-primary font-[JetBrains_Mono] text-sm uppercase hover:bg-primary hover:text-surface transition-colors"
            >
              Android Installation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            About The Game
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
            The Freak Circus is a {GAME_GENRE} that hides more than it reveals. Released content currently covers {RELEASED_DAYS_LABEL}; Day 3 is planned. The game uses choice-driven scenes, and community reports suggest some replay-aware behavior — but specific technical mechanics remain unverified.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
            The current build is rated 18+ for mature themes including psychological horror and unsettling narrative content. Route structure is still being documented; treat specific route-completion claims as community-reported unless confirmed on the relevant guide page.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[Creepster] text-2xl text-primary">Free</div>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Price</div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[Creepster] text-2xl text-primary">{PLAYTIME_LABEL}</div>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Demo Length (community)</div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[Creepster] text-2xl text-primary">Browser</div>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Platform</div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-4 text-center">
              <div className="font-[Creepster] text-2xl text-primary">18+</div>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            How to Play
          </h2>
          <div className="space-y-6">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                1. Choose Your Route
              </h3>
              <p className="text-on-surface-variant text-sm">
                Start with Pierrot's route — it is the most accessible for new players and introduces core mechanics including the dialogue choice system and the comfort/confess dynamic. The demo also includes partial access to Harlequin's route.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                2. Make Dialogue Choices
              </h3>
              <p className="text-on-surface-variant text-sm">
                The game presents dialogue choices that affect character relationships and route outcomes. Some choices only appear after multiple playthroughs. The game appears to track play history, but specific technical details have not been independently verified.
              </p>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                3. Discover Hidden Content
              </h3>
              <p className="text-on-surface-variant text-sm">
                The Freak Circus rewards repeated playthroughs. Community reports suggest characters may reference previous choices. The demo contains Day 1 and Day 2 content with 1 confirmed ending.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Controls
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                Keyboard
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Advance text</span>
                  <span className="font-[JetBrains_Mono] text-primary">Space / Enter</span>
                </div>
                <div className="flex justify-between">
                  <span>Make choice</span>
                  <span className="font-[JetBrains_Mono] text-primary">1 / 2 / 3 / 4</span>
                </div>
                <div className="flex justify-between">
                  <span>Auto mode</span>
                  <span className="font-[JetBrains_Mono] text-primary">A</span>
                </div>
                <div className="flex justify-between">
                  <span>Skip mode</span>
                  <span className="font-[JetBrains_Mono] text-primary">Ctrl</span>
                </div>
                <div className="flex justify-between">
                  <span>Save / Load</span>
                  <span className="font-[JetBrains_Mono] text-primary">S / L</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                Mouse / Touch
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Advance text</span>
                  <span className="font-[JetBrains_Mono] text-primary">Click / Tap</span>
                </div>
                <div className="flex justify-between">
                  <span>Make choice</span>
                  <span className="font-[JetBrains_Mono] text-primary">Click option</span>
                </div>
                <div className="flex justify-between">
                  <span>Open menu</span>
                  <span className="font-[JetBrains_Mono] text-primary">Right-click</span>
                </div>
                <div className="flex justify-between">
                  <span>Scroll backlog</span>
                  <span className="font-[JetBrains_Mono] text-primary">Scroll wheel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Demo Length
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Community players report {PLAYTIME_LABEL} for {RELEASED_DAYS_LABEL} combined. The current build has {ENDINGS_CONFIRMED} confirmed ending (&quot;Missing&quot;). The developer has listed {ENDINGS_PLANNED} planned endings, but they are not implemented yet.
          </p>
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">DEMO CONTENT</div>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>• Day 1 and Day 2 content</li>
              <li>• Pierrot and Harlequin routes</li>
              <li>• 1 confirmed ending (&quot;Missing&quot;)</li>
              <li>• Columbina legend (backstory, not playable)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Play or Download
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Choose how you want to experience the demo. The browser version runs instantly, while the downloadable version supports offline play on PC, Mac, Linux, and Android.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Play in Browser
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                No download required. Your progress saves automatically in the browser.
              </p>
              <a
                href={ITCH_IO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Play Online →
              </a>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Download
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Get the demo for Windows, macOS, or Linux from the official itch.io page.
              </p>
              <Link href="/download" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                Download Guide →
              </Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Android
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Install the APK on Android. Includes step-by-step setup and known issues.
              </p>
              <Link href="/android-installation" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                Install on Android →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Related Guides
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            After playing the demo, explore these guides to discover hidden content and prepare for the full experience
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Endings
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                All confirmed endings with unlock conditions. The demo contains previews of endings that fully unlock in the complete version.
              </p>
              <Link href="/endings" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                Browse Endings →
              </Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Characters
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Meet the 5 main characters: Pierrot, Harlequin, The Doctor, Jester, and Ticket Taker. Columbina is a deceased character in the backstory.
              </p>
              <Link href="/characters" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                Explore Characters →
              </Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                Walkthroughs
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Step-by-step route guides for every character. Perfect alignment guides, hidden trigger locations, and choice mapping.
              </p>
              <Link href="/walkthroughs" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                View Walkthroughs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Enter the Circus?
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl mx-auto">
            The demo is free and runs directly in your browser. No account required. Your progress saves automatically.
          </p>
          <a
            href="https://garula.itch.io/the-freak-circus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-surface font-[JetBrains_Mono] text-sm uppercase hover:bg-primary/90 transition-colors"
          >
            Play Official Demo →
          </a>
        </div>
      </section>

      <QuickPeek theme="surface" />

      <Footer />
    </main>
  );
}
