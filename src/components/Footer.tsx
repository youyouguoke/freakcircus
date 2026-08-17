import Link from 'next/link';

const exploreLinks = [
  { label: 'Characters', href: '/characters' },
  { label: 'Walkthroughs', href: '/walkthroughs' },
  { label: 'Endings', href: '/endings' },
  { label: 'Lore Archive', href: '/lore' },
  { label: 'Theories', href: '/theories' },
];

const resourceLinks = [
  { label: 'Contribute', href: '/contribute' },
  { label: 'Resources', href: '/resources' },
  { label: 'Download', href: '/download' },
  { label: 'Play Online', href: '/play-online' },
  { label: 'FAQ', href: '/faq' },
];

const communityLinks = [
  { label: 'Reddit r/visualnovels', url: 'https://www.reddit.com/r/visualnovels/' },
  { label: 'Reddit r/horrorgaming', url: 'https://www.reddit.com/r/horrorgaming/' },
  { label: 'Tumblr #freakcircus', url: 'https://www.tumblr.com/tagged/freakcircus' },
];

const languageLinks = [
  { label: '🇪🇸 Español', url: 'https://thefreakcircus.my/the-freak-circus-espanol' },
  { label: '🇷🇺 Русский', url: 'https://thefreakcircus.my/the-freak-circus-na-russkom' },
  { label: '🇮🇩 Bahasa Indonesia', url: 'https://thefreakcircus.my/the-freak-circus-bahasa-indonesia' },
];

export default function Footer() {
  return (
    <footer className="bg-void-black border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon-32x32.png" alt="Freak Circus Hub" className="w-7 h-7 opacity-80" />
              <span className="font-archive text-sm text-paper tracking-[0.15em]">FREAK CIRCUS HUB</span>
            </div>
            <p className="text-faint-paper text-xs leading-relaxed">
              A fan-maintained archive documenting characters, endings, theories, and hidden routes for The Freak Circus.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-label text-[0.6rem] text-circus-red mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-faint-paper text-sm hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-label text-[0.6rem] text-circus-red mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-faint-paper text-sm hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-label text-[0.6rem] text-circus-red mb-4">COMMUNITY</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-faint-paper text-xs hover:text-paper transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-label text-[0.6rem] text-circus-red mb-4">FAN TRANSLATIONS</h3>
            <ul className="space-y-2">
              {languageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-faint-paper text-xs hover:text-paper transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-faint-paper/50 text-[10px] mt-3">
              Official: English, Português, 中文
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] text-dim-paper text-center md:text-left max-w-lg">
            Not affiliated with the original game or its developers. All trademarks belong to their respective owners.{' '}
            <a href="mailto:hello@freak-circus.com" className="underline hover:text-faint-paper transition-colors">
              Contact for removal
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="font-label text-[0.55rem] text-dim-paper hover:text-faint-paper transition-colors">
              PRIVACY
            </Link>
            <Link href="/terms-of-service" className="font-label text-[0.55rem] text-dim-paper hover:text-faint-paper transition-colors">
              TERMS
            </Link>
            <span className="font-label text-[0.55rem] text-dim-paper">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
