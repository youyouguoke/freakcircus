import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freak Circus Hub — Lore Archive & Theory Hub",
  description:
    "A fan-made archive for The Freak Circus visual novel. Explore all endings, character relationships, hidden lore, and community theories.",
  keywords: [
    "Freak Circus",
    "visual novel",
    "horror VN",
    "endings guide",
    "character lore",
    "fan theories",
    "walkthrough",
  ],
  authors: [{ name: "Freak Circus Hub" }],
  creator: "Freak Circus Hub",
  publisher: "Freak Circus Hub",
  metadataBase: new URL("https://freak-circus.com"),
  openGraph: {
    title: "Freak Circus Hub — You Still Don't Understand the Ending",
    description:
      "Every ending mapped. Every character connected. Every theory documented.",
    url: "https://freak-circus.com",
    siteName: "Freak Circus Hub",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Freak Circus Hub — Every ending mapped, every character connected, every theory documented",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Hub — Lore Archive & Theory Hub",
    description:
      "Every ending mapped. Every character connected. Every theory documented.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://freak-circus.com",
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Creepster&family=Epilogue:wght@600;700;800&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
