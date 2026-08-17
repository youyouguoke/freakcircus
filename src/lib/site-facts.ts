/**
 * Site-Wide Fact Consistency — Single Source of Truth
 *
 * All pages MUST import numbers/labels from here instead of hardcoding.
 * When a fact changes, update THIS FILE ONLY — every page picks it up.
 *
 * Last reviewed: 2026-08-17 (7th review — enriched with multi-source data)
 * Sources: VNDB, itch.io, thefreakcircus.org, thefreakcircus.my, thefreakcircus.wiki, YouTube, freakcircus.site
 *
 * VERIFICATION STATUS LEGEND:
 *   ✅ CONFIRMED  — multiple independent sources agree
 *   ⚠️ LIKELY     — strong single-source evidence, not yet independently verified
 *   ❓ UNKNOWN    — no reliable source confirms or denies
 */

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

// ── Ending Counts ──────────────────────────────────────────────
// ✅ CONFIRMED: thefreakcircus.wiki Endings page
// ✅ CONFIRMED: thefreakcircus.org wiki + download page
export const ENDINGS_CONFIRMED = 1;
export const ENDINGS_BAD = 1;           // "Missing" (Day 2)
export const ENDINGS_OPEN = 3;          // exist but names UNKNOWN
export const ENDINGS_UNVERIFIED = 0;
export const ENDINGS_TOTAL = 4;         // 1 confirmed + 3 unnamed open

// ── Time & Playthroughs ────────────────────────────────────────
// ❓ UNKNOWN — no reliable source gives playtime estimates
export const SINGLE_ROUTE_HOURS = "~1h17m (Day 1+2 full walkthrough)";
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
export const ENDINGS_SUMMARY = `${ENDINGS_BAD} Confirmed · ${ENDINGS_OPEN} Open (unnamed)`;
export const ENDINGS_STAT_LABEL = `${ENDINGS_BAD} Bad · ${ENDINGS_OPEN} Open`;
export const UNVERIFIED_STAT_LABEL = "All names unverified except Missing";
