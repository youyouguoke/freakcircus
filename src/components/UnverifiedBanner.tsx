/**
 * Unverified Content Banner
 *
 * Display at the top of any page that contains community-sourced
 * or unverified game data (endings, routes, lore details).
 *
 * Usage:
 *   <UnverifiedBanner />
 *   <UnverifiedBanner level="high" />
 *   <UnverifiedBanner level="medium" />
 */

type BannerLevel = "high" | "medium" | "low";

interface UnverifiedBannerProps {
  level?: BannerLevel;
  className?: string;
}

const BANNER_COPY: Record<BannerLevel, { bg: string; border: string; icon: string; title: string; body: string }> = {
  high: {
    bg: "bg-red-950/30",
    border: "border-circus-red/40",
    icon: "🔴",
    title: "UNVERIFIED CONTENT",
    body: "This page contains game data that has NOT been confirmed by official sources or cross-referenced databases. Ending names, route details, and character information below may be speculative, community-reported, or inaccurate. Only the \"Missing\" Bad Ending (Day 2) has been independently confirmed.",
  },
  medium: {
    bg: "bg-amber-950/20",
    border: "border-amber-500/30",
    icon: "🟡",
    title: "PARTIALLY VERIFIED",
    body: "Some information on this page is confirmed (character names, basic game structure), but specific details like ending names, route mechanics, and scene descriptions are based on community reports and have not been independently verified.",
  },
  low: {
    bg: "bg-blue-950/20",
    border: "border-blue-400/30",
    icon: "🔵",
    title: "COMMUNITY CONTENT",
    body: "This page contains community analysis and fan theories. While the underlying game facts have been verified, interpretations and connections drawn here are speculative.",
  },
};

export default function UnverifiedBanner({ level = "high", className = "" }: UnverifiedBannerProps) {
  const copy = BANNER_COPY[level];

  return (
    <div className={`${copy.bg} ${copy.border} border rounded-lg px-4 py-3 mb-6 ${className}`}>
      <p className="font-[JetBrains_Mono] text-xs font-bold text-paper mb-1">
        {copy.icon} {copy.title}
      </p>
      <p className="text-paper/70 text-xs leading-relaxed">
        {copy.body}
      </p>
      <p className="text-paper/50 text-[10px] mt-2 font-[JetBrains_Mono]">
        Sources: VNDB · itch.io · thefreakcircus.org · YouTube · Last verified: Aug 2026
      </p>
    </div>
  );
}
