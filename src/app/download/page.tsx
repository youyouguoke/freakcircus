import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download The Freak Circus — PC, Mac, Linux | Freak Circus Hub",
  description: "Download The Freak Circus official demo for Windows, macOS, and Linux. Get the latest version safely from itch.io, with platform-specific install notes and save compatibility details.",
  keywords: ["The Freak Circus download", "PC", "Mac", "Linux", "itch.io", "official demo", "visual novel", "horror game"],
  openGraph: {
    title: "Download The Freak Circus — PC, Mac, Linux",
    description: "Download The Freak Circus official demo for Windows, macOS, and Linux from itch.io.",
    type: "website",
    url: "https://freak-circus.com/download",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download The Freak Circus — PC, Mac, Linux",
    description: "Download the official demo for Windows, macOS, and Linux.",
  },
  alternates: {
    canonical: "https://freak-circus.com/download",
  },
};

const platforms = [
  {
    name: "Windows",
    file: "the-freak-circus-windows.zip",
    note: "Extract and run the .exe inside the folder. Windows Defender may show a SmartScreen warning because the executable is unsigned; click More info → Run anyway.",
  },
  {
    name: "macOS",
    file: "the-freak-circus-mac.zip",
    note: "Extract the .app and move it to Applications. If Gatekeeper blocks the app, right-click the icon and choose Open, or go to System Settings → Privacy & Security → Allow.",
  },
  {
    name: "Linux",
    file: "the-freak-circus-linux.zip",
    note: "Extract the archive and run the shell script or executable. You may need to chmod +x the launcher from a terminal.",
  },
];

const faqs = [
  {
    question: "How large is the game?",
    answer: "The downloadable demo is approximately 400–500 MB depending on platform. The Android APK is around 423 MB.",
  },
  {
    question: "Does the download cost anything?",
    answer: "No. The demo is free to download and play. itch.io may show a 'Name your price' option, but you can enter $0 to download at no cost.",
  },
  {
    question: "Are saves compatible across versions?",
    answer: "Yes, saves from the demo carry over to newer demo builds and are intended to carry over to the full release. Keep your save files backed up before switching versions.",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-surface min-h-[50vh] flex flex-col justify-center py-16 px-4 md:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-widest">
            v0.2 Prototype | Last updated: 2026-02-22
          </div>
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-6 leading-none">
            Download The Freak Circus
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Cross-platform download guide. Get the official demo for Windows, macOS, and Linux from itch.io.
          </p>
          <a
            href="https://garula.itch.io/the-freak-circus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-surface font-[JetBrains_Mono] text-sm uppercase hover:bg-primary/90 transition-colors"
          >
            Go to itch.io Official Page →
          </a>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-container border border-outline/20 p-6 mb-8">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2 uppercase tracking-widest">Safety Notice</div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              itch.io is the <strong className="text-foreground">only official download source</strong> for The Freak Circus. The developer explicitly does not allow re-uploading or reposting. Versions downloaded from other websites may be tampered with or contain malware.
            </p>
          </div>

          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Downloads by Platform
          </h2>
          <div className="space-y-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-surface-container border border-outline/20 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{platform.name}</h3>
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">{platform.file}</div>
                  </div>
                  <a
                    href="https://garula.itch.io/the-freak-circus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 bg-primary text-surface font-[JetBrains_Mono] text-xs uppercase hover:bg-primary/90 transition-colors text-center"
                  >
                    Download
                  </a>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{platform.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Download Notes
          </h2>
          <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
            <p>
              The demo is distributed through itch.io as a free download. You do not need an account to download, but creating one lets you receive update notifications when new builds are released.
            </p>
            <p>
              Save files are stored locally on your device. If you switch computers or reinstall the game, copy your save folder to the new installation to preserve progress.
            </p>
            <p>
              For mobile players, see the Android installation guide below. iOS is not supported at this time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-surface-container border border-outline/20">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-[Epilogue] text-lg font-semibold text-foreground list-none">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-outline/10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Related Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Play Online</h3>
              <p className="text-on-surface-variant text-sm mb-4">Run the demo directly in your browser without downloading.</p>
              <Link href="/play-online" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">Play Online →</Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Android Install</h3>
              <p className="text-on-surface-variant text-sm mb-4">Install the APK on Android with step-by-step instructions.</p>
              <Link href="/android-installation" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">Install on Android →</Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">FAQ</h3>
              <p className="text-on-surface-variant text-sm mb-4">General questions about the archive, spoilers, and updates.</p>
              <Link href="/faq" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">View FAQ →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Get the Official Demo
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl mx-auto">
            Download the latest version safely from the official itch.io page. Free, no account required.
          </p>
          <a
            href="https://garula.itch.io/the-freak-circus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-surface font-[JetBrains_Mono] text-sm uppercase hover:bg-primary/90 transition-colors"
          >
            Go to itch.io Official Page →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
