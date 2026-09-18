import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Freak Circus Guide, Endings, Characters & Lore | Freak Circus Hub",
  description:
    "The Freak Circus guide covering characters, walkthroughs, endings, lore and community theories, with confirmed and unverified information clearly separated.",
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
    title: "The Freak Circus Guide, Endings, Characters & Lore",
    description:
      "The Freak Circus guide covering characters, walkthroughs, endings, lore and community theories, with confirmed and unverified information clearly separated.",
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
    title: "The Freak Circus Guide, Endings, Characters & Lore",
    description:
      "The Freak Circus guide with confirmed and unverified information clearly separated.",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
          href="https://fonts.googleapis.com/css2?family=Creepster&family=Epilogue:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3GS2W560EC"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3GS2W560EC');
        `}} />
        <script async src="https://plausible.shipsolo.io/js/pa-ew39StHckGexwKZs37REB.js"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments)
          };
          window.plausible.init = window.plausible.init || function(i) {
            window.plausible.o = i || {};
          };
          window.plausible.init();
        `}} />
      </head>
      <body className="font-sans antialiased">
        <div className="grain-overlay" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var s = document.createElement('script');
                s.src = 'https://feedback-hub.youyouguoke.workers.dev/widget.js';
                s.setAttribute('data-site-id', 'freak-circus');
                s.defer = true;
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
