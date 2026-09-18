import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ContinueExploring from '@/components/ContinueExploring';
import QuickPeek from '@/components/QuickPeek';
import {
  CURRENT_VERSION,
  ENDINGS_CONFIRMED,
  ENDINGS_PLANNED,
  ITCH_IO_URL,
  LAST_VERIFIED_LABEL,
  RELEASED_DAYS_LABEL,
} from '@/lib/site-facts';

export const metadata: Metadata = {
  title: 'The Freak Circus Download — Official itch.io Source | Freak Circus Hub',
  description: 'Download The Freak Circus from the official itch.io source. Current build, platform safety notes, verification guidance, and official-source warnings.',
  keywords: ['The Freak Circus download', 'official source', 'itch.io', 'Windows', 'macOS', 'Linux', 'visual novel', 'horror game'],
  openGraph: {
    title: 'The Freak Circus Download — Official itch.io Source',
    description: 'Download The Freak Circus from the official itch.io source with platform safety notes.',
    type: 'website',
    url: 'https://freak-circus.com/download',
    siteName: 'Freak Circus Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Freak Circus Download — Official itch.io Source',
    description: 'Download from the official source with safety and verification notes.',
  },
  alternates: { canonical: 'https://freak-circus.com/download' },
};

const platforms = [
  { name: 'Windows', note: 'Open the official itch.io page and choose the current Windows build. If Windows Defender shows a SmartScreen warning, verify the source is the official itch.io page before running the file.' },
  { name: 'macOS', note: 'Open the official itch.io page and choose the current macOS build. If Gatekeeper blocks the app, verify the download source first, then use macOS Privacy & Security settings to open it.' },
  { name: 'Linux', note: 'Open the official itch.io page and choose the current Linux build. Follow the included launch instructions and verify the source before making any file executable.' },
];

const faqs = [
  { question: 'Is this the official download source?', answer: `No. This page links to the official itch.io page (${ITCH_IO_URL}). We do not host, mirror, or redistribute the game.` },
  { question: 'Does the download cost anything?', answer: 'No. The official public build is free through itch.io. If a name-your-price option appears, you can enter $0.' },
  { question: 'How do I verify I downloaded the real game?', answer: 'Download only from the official itch.io page, check the creator name, and avoid APKs, mirrors, reposted builds, or sites promising leaked Day 3 content.' },
  { question: 'What content is in the current build?', answer: `The current build is ${CURRENT_VERSION} with ${RELEASED_DAYS_LABEL} available. It has ${ENDINGS_CONFIRMED} confirmed ending and ${ENDINGS_PLANNED} planned endings that are not implemented yet.` },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero — simplest, most direct */}
      <section className="bg-void-black min-h-[50vh] flex flex-col justify-center py-20 md:py-28 px-4 md:px-12 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero-corridor.jpg" alt="" className="w-full h-full object-cover object-center opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/70 to-void-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/40" />
          <div className="absolute inset-0 vhs-scanlines opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-circus-red" />
            {CURRENT_VERSION} · LAST VERIFIED: {LAST_VERIFIED_LABEL}
          </div>
          <h1 className="font-archive text-5xl md:text-7xl text-paper leading-[0.9] mb-6">
            DOWNLOAD
            <br />
            <span className="text-circus-red">THE FREAK CIRCUS</span>
          </h1>
          <p className="text-faint-paper text-lg max-w-xl mb-8">
            Cross-platform download guide. Get the official demo for Windows, macOS, and Linux from itch.io.
          </p>
          <a
            href={ITCH_IO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-archive btn-archive--filled text-base py-3 px-8"
          >
            DOWNLOAD FROM ITCH.IO →
          </a>
        </div>
      </section>

      {/* Safety notice */}
      <section className="bg-archive-black py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="archive-card border-circus-red/20">
            <div className="font-label text-[0.55rem] text-circus-red mb-2">SAFETY NOTICE</div>
            <p className="text-faint-paper text-sm leading-relaxed">
              itch.io is the <strong className="text-paper">only official download source</strong> for The Freak Circus. The developer explicitly does not allow re-uploading or reposting. Versions downloaded from other websites may be tampered with or contain malware.
            </p>
          </div>
        </div>
      </section>

      {/* Platform downloads */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            PLATFORMS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Downloads by Platform</h2>

          <div className="space-y-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="archive-card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-paper">{platform.name}</h3>
                  <p className="text-faint-paper text-sm mt-2">{platform.note}</p>
                </div>
                <a
                  href={ITCH_IO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-archive shrink-0"
                >
                  DOWNLOAD
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            FREQUENTLY ASKED
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Questions & Answers</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group archive-card">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">[+]</span>
                  <span className="font-label text-[0.55rem] text-circus-red hidden group-open:inline shrink-0">[−]</span>
                </summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Before you play */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            BEFORE YOU PLAY
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Getting Started</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="archive-card" style={{ borderLeft: '3px solid var(--pierrot)' }}>
              <h3 className="font-heading text-base font-bold text-paper mb-2">Recommended First Route</h3>
              <p className="text-faint-paper text-sm mb-4">Start with Pierrot&apos;s route — it introduces core mechanics and has the most community documentation.</p>
              <Link href="/characters/pierrot" className="font-label text-[0.55rem] text-circus-red hover:underline">PIERROT GUIDE →</Link>
            </div>
            <div className="archive-card" style={{ borderLeft: '3px solid var(--harlequin)' }}>
              <h3 className="font-heading text-base font-bold text-paper mb-2">Save Tips</h3>
              <p className="text-faint-paper text-sm mb-4">Save before every major choice. Some dialogue options only appear once and affect multiple endings.</p>
              <Link href="/walkthroughs" className="font-label text-[0.55rem] text-circus-red hover:underline">WALKTHROUGH GUIDE →</Link>
            </div>
            <div className="archive-card" style={{ borderLeft: '3px solid var(--blood-red)' }}>
              <h3 className="font-heading text-base font-bold text-paper mb-2">Content Warning</h3>
              <p className="text-faint-paper text-sm">The Freak Circus contains psychological horror themes, disturbing imagery, and mature content. Rated 18+.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the archive */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            NEXT STEPS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Explore The Archive</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/characters" className="group block">
              <div className="archive-card h-full text-center transition-all duration-300 group-hover:border-circus-red/40">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-heading text-base font-bold text-paper mb-2 group-hover:text-circus-red transition-colors">Character Guides</h3>
                <p className="text-faint-paper text-sm">Route walkthroughs, personality analysis, hidden triggers, and endings for every character.</p>
              </div>
            </Link>
            <Link href="/endings" className="group block">
              <div className="archive-card h-full text-center transition-all duration-300 group-hover:border-circus-red/40">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="font-heading text-base font-bold text-paper mb-2 group-hover:text-circus-red transition-colors">Complete The Story</h3>
                <p className="text-faint-paper text-sm">All endings, secret routes, and hidden content explained with unlock conditions.</p>
              </div>
            </Link>
            <Link href="/theories" className="group block">
              <div className="archive-card h-full text-center transition-all duration-300 group-hover:border-circus-red/40">
                <div className="text-3xl mb-3">🧩</div>
                <h3 className="font-heading text-base font-bold text-paper mb-2 group-hover:text-circus-red transition-colors">Community Theories</h3>
                <p className="text-faint-paper text-sm">Fan investigations, conspiracy boards, and the deepest lore analysis from the community.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ContinueExploring />

      {/* Final CTA */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-archive text-3xl md:text-4xl text-paper mb-4">Get the Official Demo</h2>
          <p className="text-faint-paper text-sm mb-8 max-w-xl mx-auto">
            Download the latest version safely from the official itch.io page. Free, no account required.
          </p>
          <a
            href={ITCH_IO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-archive btn-archive--filled text-base py-3 px-8"
          >
            GO TO ITCH.IO OFFICIAL PAGE →
          </a>
        </div>
      </section>

      <QuickPeek theme="archive" />

      <Footer />
    </main>
  );
}
