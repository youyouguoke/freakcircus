import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline/10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <img
            src="/favicon-32x32.png"
            alt="Freak Circus Hub"
            className="w-8 h-8 rounded-sm"
          />
          <span className="font-[Epilogue] text-lg font-bold text-foreground">
            FREAK CIRCUS HUB
          </span>
          <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant opacity-60">
            © 2026
          </span>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-on-surface-variant opacity-60 text-center max-w-md">
          Not affiliated with the original game or its developers. All trademarks belong to their respective owners.{" "}
          <a href="mailto:hello@freak-circus.com" className="underline hover:text-primary transition-colors">
            Contact us for removal requests
          </a>
        </div>

        {/* Links */}
        <div className="flex gap-4">
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
          <a
            href="mailto:hello@freak-circus.com"
            className="font-[JetBrains_Mono] text-xs uppercase text-on-surface-variant opacity-60 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
