import Link from "next/link";

const exploreLinks = [
  { label: "Characters", href: "/characters" },
  { label: "Walkthroughs", href: "/walkthroughs" },
  { label: "Endings", href: "/endings" },
  { label: "Lore Archive", href: "/lore" },
  { label: "Theories", href: "/theories" },
];

const resourceLinks = [
  { label: "Contribute", href: "/contribute" },
  { label: "Resources", href: "/resources" },
  { label: "Download", href: "/download" },
  { label: "Play Online", href: "/play-online" },
  { label: "FAQ", href: "/faq" },
  { label: "Day 3 Status", href: "/day-3-release-date" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline/10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-16 py-12">
        {/* Top: Logo + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon-32x32.png"
                alt="Freak Circus Hub"
                className="w-8 h-8 rounded-sm"
              />
              <span className="font-[Epilogue] text-lg font-bold text-foreground">
                FREAK CIRCUS HUB
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              A fan-maintained archive documenting characters, endings, theories, and hidden routes for The Freak Circus.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[JetBrains_Mono] text-xs uppercase tracking-wider text-primary mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-[JetBrains_Mono] text-xs uppercase tracking-wider text-primary mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-[JetBrains_Mono] text-xs uppercase tracking-wider text-primary mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reddit.com/r/visualnovels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                >
                  Reddit r/visualnovels
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/horrorgaming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                >
                  Reddit r/horrorgaming
                </a>
              </li>
              <li>
                <a
                  href="https://www.tumblr.com/tagged/freakcircus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                >
                  Tumblr #freakcircus
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@freak-circus.com"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outline/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-on-surface-variant opacity-60 text-center md:text-left max-w-lg">
            Not affiliated with the original game or its developers. All trademarks belong to their respective owners.{" "}
            <a href="mailto:hello@freak-circus.com" className="underline hover:text-primary transition-colors">
              Contact for removal requests
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant opacity-60 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant opacity-60 hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant opacity-60">
              © 2026 Freak Circus Hub
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
