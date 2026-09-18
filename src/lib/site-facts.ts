/**
 * Site-Wide Fact Consistency — Single Source of Truth
 *
 * All pages MUST import numbers/labels from here instead of hardcoding.
 * When a fact changes, update THIS FILE ONLY — every page picks it up.
 *
 * Last reviewed: 2026-08-17 (7th review — enriched with multi-source data)
 * Sources: VNDB, itch.io, YouTube
 *
 * VERIFICATION STATUS LEGEND:
 *   ✅ CONFIRMED           — official source or repeatable in-game verification
 *   ◐ COMMUNITY REPORTED  — multiple player reports, not official/game-verified
 *   △ UNVERIFIED          — claim exists, evidence is insufficient
 *   🧠 THEORY             — explanatory/community interpretation
 *   ⏳ OUTDATED           — was true in an older build, now superseded
 */

export type FactStatus =
  | "confirmed"
  | "community_reported"
  | "unverified"
  | "theory"
  | "outdated";

export type FactSource = "official" | "community" | "unknown";

export interface GameFact<T> {
  value: T;
  source: FactSource;
  confidence?: "confirmed" | "reported" | "speculative";
  lastVerified: string;
  sources: readonly string[];
  note?: string;
}

export const FACT_STATUS_LABELS: Record<FactStatus, string> = {
  confirmed: "Confirmed",
  community_reported: "Community Reported",
  unverified: "Unverified",
  theory: "Theory",
  outdated: "Outdated",
};

export const FACT_STATUS_ICONS: Record<FactStatus, string> = {
  confirmed: "✓",
  community_reported: "◐",
  unverified: "△",
  theory: "🧠",
  outdated: "⏳",
};

// ── Game Info ──────────────────────────────────────────────────
// ✅ CONFIRMED: thefreakcircus.org meta tags
export const DEVELOPER = "Neko Bueno";
// ✅ CONFIRMED: thefreakcircus.my states "Day 2 (released on 2025-12-03)"
export const DAY2_RELEASE_DATE = "December 3, 2025";
// ✅ CONFIRMED: thefreakcircus.org, thefreakcircus.my
export const GAME_GENRE = "18+ Psychological Horror Visual Novel";
export const GAME_SETTING = "A café worker is dragged into a traveling circus — the Circus of Horrors — where obsession, rivalry, and survival collide.";
// ✅ CONFIRMED: GamerSault YouTube (91K views) — "monstrous clowns", "grim history", "mysterious disappearances"
export const GAME_TONE = "Dark yandere horror with monstrous performers, mysterious disappearances, and choice-driven narrative";
// ✅ CONFIRMED: itch.io (garula.itch.io)
export const ITCH_IO_URL = "https://garula.itch.io/the-freak-circus";

// ── Current Game Status — structured fact registry ─────────────
// This is the V2 single source of truth for version/days/playtime.
// Pages should render these values instead of hardcoding numbers.
export const GAME_STATUS = {
  version: {
    value: "v0.2 Prototype",
    source: "official",
    confidence: "confirmed",
    lastVerified: "2026-08-17",
    sources: ["Official itch.io page"],
  },
  releasedDays: {
    value: ["Day 1", "Day 2"],
    source: "official",
    confidence: "confirmed",
    lastVerified: "2026-08-17",
    sources: ["Official itch.io page", "Official devlog/update notes"],
  },
  confirmedEndings: {
    value: 1,
    source: "official",
    confidence: "confirmed",
    lastVerified: "2026-08-17",
    sources: ["Official itch.io page"],
  },
  plannedEndings: {
    value: 4,
    source: "official",
    confidence: "confirmed",
    lastVerified: "2026-08-17",
    sources: ["Official itch.io page"],
    note: "Planned by the developer; not implemented in the current build.",
  },
  playtime: {
    value: "≈1h17m",
    source: "community",
    confidence: "reported",
    lastVerified: "2026-08-17",
    sources: ["Community playthrough reports"],
    note: "Community-reported estimate for Day 1 + Day 2 combined. Treat as approximate.",
  },
  officialPlatform: {
    value: "itch.io",
    source: "official",
    confidence: "confirmed",
    lastVerified: "2026-08-17",
    sources: ["Official itch.io page"],
  },
  lastVerified: "2026-08-17",
  sources: ["Official itch.io page", "Community playthrough reports"],
} as const;

export const CURRENT_VERSION = GAME_STATUS.version.value;
export const RELEASED_DAYS = GAME_STATUS.releasedDays.value;
export const RELEASED_DAYS_LABEL = GAME_STATUS.releasedDays.value.join(" & ");
export const PLAYTIME_VALUE = GAME_STATUS.playtime.value;
export const PLAYTIME_LABEL = `${PLAYTIME_VALUE} (community-reported)`;
export const OFFICIAL_PLATFORM_LABEL = GAME_STATUS.officialPlatform.value;
export const LAST_VERIFIED_LABEL = GAME_STATUS.lastVerified;

export function currentBuildSummary(): string {
  return `${CURRENT_VERSION} — ${RELEASED_DAYS_LABEL} available. Day 3 planned.`;
}

// ── Ending Counts ──────────────────────────────────────────────
// ✅ CONFIRMED: itch.io "Current Features" — "1 Bad ending"
// ✅ CONFIRMED: itch.io "What is planned?" — 4 planned endings:
//    Pierrot's ending, Harlequin's ending, Protagonist's ending, All together
// ⚠️ NOTE: Developer states "the script is still a work in progress, so no endings are fully planned yet"
export const ENDINGS_CONFIRMED = 1;
export const ENDINGS_BAD = 1;           // "Missing" (Day 2)
export const ENDINGS_PLANNED = 4;       // Not yet implemented
export const ENDINGS_UNVERIFIED = 0;
export const ENDINGS_TOTAL = 1;         // Only 1 exists in current build

// ── Time & Playthroughs ────────────────────────────────────────
// ◐ COMMUNITY REPORTED — approximate Day 1 + Day 2 playtime
export const SINGLE_ROUTE_HOURS = PLAYTIME_LABEL;
export const TOTAL_COMPLETION_HOURS = "TBD";
export const PLAYTHROUGHS_NEEDED = "TBD";

// ── Characters ─────────────────────────────────────────────────
// ✅ CONFIRMED: 5 main characters (thefreakcircus.org, thefreakcircus.my, YouTube)
// Columbina is deceased (killed by Harlequin) — NOT a main character
export const CHARACTERS_COUNT = 5;
export const MAIN_CHARACTERS = [
  "Pierrot",
  "Harlequin",
  "The Doctor",
  "Jester",
  "Ticket Taker",
] as const;

// Deceased / supporting characters (NOT counted in CHARACTERS_COUNT)
export const DECEASED_CHARACTERS = ["Columbina"] as const;
export const SUPPORTING_CHARACTERS = ["MC (Protagonist)"] as const;

// ── Languages ──────────────────────────────────────────────────
// ✅ CONFIRMED: thefreakcircus.org — "English, Portuguese (BR), and Chinese"
// ✅ CONFIRMED: thefreakcircus.my — fan localizations for Spanish, Russian, Indonesian
export const OFFICIAL_LANGUAGES = ["English", "Portuguese (BR)", "Chinese"] as const;
export const FAN_LANGUAGES = ["Spanish", "Russian", "Indonesian"] as const;

// ── Platforms ──────────────────────────────────────────────────
// ✅ CONFIRMED: itch.io, thefreakcircus.org
export const PLATFORMS = ["Windows", "macOS", "Linux", "Web Browser"] as const;

// ── Route Structure ────────────────────────────────────────────
// ✅ CONFIRMED: Day-based progression (Day 1 → Day 2 → Day 3 planned)
// ⚠️ LIKELY: Pierrot route / Harlequin route exist as Day-internal branches
export const ROUTE_STRUCTURE = "Day-based with character branches" as const;

// ── Verified Character Traits ──────────────────────────────────
// ✅ CONFIRMED via multiple sources
export const PIERROT_HEIGHT = "198cm";
export const PIERROT_EYES = "Golden";
export const PIERROT_ARCHETYPE = "Silent Yandere";
// ✅ CONFIRMED: thefreakcircus.my — "Quiet, watchful, and deeply possessive"
export const PIERROT_DESCRIPTION = "Quiet, watchful, and deeply possessive. Pierrot rarely says more than necessary, yet his presence is impossible to ignore.";

export const HARLEQUIN_HEIGHT = "187cm";
export const HARLEQUIN_EYES = "Poisonous Green";
export const HARLEQUIN_GENDER = "Male";
export const HARLEQUIN_ARCHETYPE = "Seductive Rival";
// ✅ CONFIRMED: thefreakcircus.my — "charismatic rival who turns every interaction into a dangerous test"
export const HARLEQUIN_DESCRIPTION = "A charismatic rival who turns every interaction into a dangerous test.";

// ── Derived Strings (for display) ──────────────────────────────
export const ENDINGS_SUMMARY = `${ENDINGS_BAD} Confirmed · ${ENDINGS_PLANNED} Planned (not yet in game)`;
export const ENDINGS_STAT_LABEL = `${ENDINGS_BAD} Bad · ${ENDINGS_PLANNED} Planned`;
export const PLANNED_ENDINGS_LIST = [
  "Pierrot's ending",
  "Harlequin's ending",
  "Protagonist's ending",
  "All together (MC with both Pierrot and Harlequin)",
] as const;
export const UNVERIFIED_STAT_LABEL = "Only 'Missing' confirmed by name";
