import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-fixed w-full mt-auto relative overflow-hidden border-t-4 border-dashed border-on-secondary-fixed-variant flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8 gap-6">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="flex flex-wrap gap-4 p-4">
          <span className="text-xs font-[JetBrains_Mono] border border-black p-1 rotate-12">
            ADMIT ONE
          </span>
          <span className="text-xs font-[JetBrains_Mono] border border-black p-1 -rotate-6">
            SECTION B
          </span>
          <span className="text-xs font-[JetBrains_Mono] border border-black p-1 rotate-45">
            VOID
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 z-10">
        <div className="font-[Epilogue] text-xl md:text-2xl font-semibold text-on-secondary-fixed">
          FREAK CIRCUS HUB
        </div>
        <div className="font-[JetBrains_Mono] text-xs uppercase text-on-secondary-fixed opacity-70 text-center md:text-left">
          © 1988-2025 ARCHIVE DATA CORRUPTION DETECTED. ALL RIGHTS RESERVED.
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 z-10 flex-wrap justify-center">
        <Link
          href="/privacy-policy"
          className="font-[JetBrains_Mono] text-xs uppercase text-on-secondary-fixed-variant font-black underline"
        >
          Privacy Redacted
        </Link>
        <Link
          href="/terms-of-service"
          className="font-[JetBrains_Mono] text-xs uppercase text-on-secondary-fixed opacity-70 hover:bg-on-secondary-fixed/10 transition-all px-2"
        >
          Terms of Service
        </Link>
        <a
          href="mailto:hello@freak-circus.com"
          className="font-[JetBrains_Mono] text-xs uppercase text-on-secondary-fixed opacity-70 hover:bg-on-secondary-fixed/10 transition-all px-2"
        >
          Contact Archivist
        </a>
      </div>
    </footer>
  );
}
