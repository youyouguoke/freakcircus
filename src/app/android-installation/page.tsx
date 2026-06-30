import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Freak Circus Android — APK Download & Install | Freak Circus Hub",
  description: "Install The Freak Circus on Android. Download the official APK from itch.io, enable unknown sources, and follow the step-by-step installation guide. Includes known issues and safety notes.",
  keywords: ["The Freak Circus Android", "APK download", "install", "Android", "itch.io", "mobile", "visual novel"],
  openGraph: {
    title: "The Freak Circus Android — APK Download & Install",
    description: "Download and install The Freak Circus official APK on Android from itch.io.",
    type: "website",
    url: "https://freak-circus.com/android-installation",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Freak Circus Android — APK Download & Install",
    description: "Download and install the official APK on Android.",
  },
  alternates: {
    canonical: "https://freak-circus.com/android-installation",
  },
};

const fileInfo = [
  { label: "File Name", value: "garula.thefreakcircus-0.2.apk" },
  { label: "Size", value: "423 MB" },
  { label: "Version", value: "0.2" },
  { label: "Download Source", value: "itch.io Official Page", href: "https://garula.itch.io/the-freak-circus" },
];

const steps = [
  {
    step: "01",
    title: "Download the APK",
    description: "Go to the itch.io official page and download the Android APK file to your phone.",
  },
  {
    step: "02",
    title: "Allow Unknown Sources",
    description: "Open Settings → Security (or Apps) → enable Install from unknown sources. The exact path varies by manufacturer.",
  },
  {
    step: "03",
    title: "Install the APK",
    description: "Open the downloaded file from your notification shade or Downloads folder, then follow the prompts to install.",
  },
  {
    step: "04",
    title: "Launch and Configure",
    description: "Open the game and select your preferred language in settings. Your progress saves locally on the device.",
  },
];

const knownIssues = [
  { issue: "Android name input bug", status: "Known" },
  { issue: "Android text overflows screen", status: "Known" },
];

const faqs = [
  {
    question: "How large is the Android version?",
    answer: "The APK is approximately 423 MB. Make sure you have enough free storage and a stable Wi-Fi connection before downloading.",
  },
  {
    question: "Can I play on iOS?",
    answer: "No. The Freak Circus is not currently available for iOS. Android, Windows, macOS, and Linux are supported.",
  },
  {
    question: "Does the Android version have bugs?",
    answer: "Yes. The Android port has known issues including a name input bug and text overflow on some screen sizes. These are acknowledged by the developer.",
  },
];

export default function AndroidInstallationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-surface min-h-[50vh] flex flex-col justify-center py-16 px-4 md:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-widest">
            v0.2 Prototype | Last updated: 2026-02-22
          </div>
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-6 leading-none">
            The Freak Circus Android Version
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
            Mobile installation guide. Download the official APK from itch.io and install it on your Android phone.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {fileInfo.map((item) => (
              <div key={item.label} className="bg-surface-container border border-outline/20 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[Epilogue] text-sm font-bold text-primary hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{item.value}</div>
                )}
              </div>
            ))}
          </div>

          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Installation Steps
          </h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-surface-container border border-outline/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="font-[JetBrains_Mono] text-2xl text-primary">{s.step}</div>
                  <div>
                    <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-6">
            Android Known Issues
          </h2>
          <div className="space-y-3 mb-8">
            {knownIssues.map((item) => (
              <div key={item.issue} className="flex justify-between items-center bg-surface-container border border-outline/20 p-4">
                <span className="text-on-surface-variant text-sm">{item.issue}</span>
                <span className="font-[JetBrains_Mono] text-xs text-primary uppercase">{item.status}</span>
              </div>
            ))}
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2 uppercase tracking-widest">Safety Notice</div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Only download the APK from the itch.io official page. Versions downloaded from other websites may be tampered with or contain malware.
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
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">All Platforms Download</h3>
              <p className="text-on-surface-variant text-sm mb-4">Get the demo for Windows, macOS, and Linux.</p>
              <Link href="/download" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">Download Guide →</Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">Play in Browser</h3>
              <p className="text-on-surface-variant text-sm mb-4">Run the demo instantly without installing anything.</p>
              <Link href="/play-online" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">Play Online →</Link>
            </div>
            <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">FAQ</h3>
              <p className="text-on-surface-variant text-sm mb-4">General questions about the game and archive.</p>
              <Link href="/faq" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">View FAQ →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Install on Android
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl mx-auto">
            Download the official APK from itch.io and follow the steps above. Free, no account required.
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
