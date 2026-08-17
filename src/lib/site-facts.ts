/**
 * Site-Wide Fact Consistency — Single Source of Truth
 *
 * All pages MUST import numbers/labels from here instead of hardcoding.
 * When a fact changes, update THIS FILE ONLY — every page picks it up.
 *
 * Last reviewed: 2026-08-17 (5th review — multi-source deep verification)
 * Sources: VNDB, itch.io, thefreakcircus.org, thefreakcircus.wiki, YouTube
 *
 * VERIFICATION STATUS LEGEND:
 *   ✅ CONFIRMED  — multiple independent sources agree
 *   ⚠️ LIKELY     — strong single-source evidence, not yet independently verified
 *   ❓ UNKNOWN    — no reliable source confirms or denies
 */

// ── Ending Counts ──────────────────────────────────────────────
// ✅ CONFIRMED: thefreakcircus.org wiki + download page both state
//    "1 bad ending and 3 open endings with more planned"
export const ENDINGS_CONFIRMED = 4;     // 1 bad + 3 open
export const ENDINGS_BAD = 1;           // "Missing" (Day 2)
export const ENDINGS_OPEN = 3;          // names TBD
export const ENDINGS_UNVERIFIED = 0;    // all 4 are confirmed
export const ENDINGS_TOTAL = ENDINGS_CONFIRMED; // 4

// ── Time & Playthroughs ────────────────────────────────────────
// ❓ UNKNOWN — no reliable source gives playtime estimates
export const SINGLE_ROUTE_HOURS = "TBD";
export const TOTAL_COMPLETION_HOURS = "TBD";
export const PLAYTHROUGHS_NEEDED = "TBD";

// ── Characters ─────────────────────────────────────────────────
// ✅ CONFIRMED: 5 main playable characters
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

// ── Route Structure ────────────────────────────────────────────
// ✅ CONFIRMED: Day-based progression (Day 1 → Day 2 → Day 3)
// ⚠️ LIKELY: Pierrot route / Harlequin route exist as Day-internal branches
// ❓ UNKNOWN: Doctor/Jester/Ticket Taker independent routes
export const ROUTE_STRUCTURE = "Day-based with character branches" as const;

// ── Grand Finale (canonical ending) ────────────────────────────
// ❓ UNKNOWN — "Grand Finale" ending name is NOT verified by any external source
export const GRAND_FINALE_ROUTE = "TBD";
export const GRAND_FINALE_CONDITION = "TBD";

// ── Verified Character Traits ──────────────────────────────────
// ✅ CONFIRMED via developer AMA + multiple sources
export const PIERROT_HEIGHT = "198cm";
export const PIERROT_EYES = "Golden";
export const PIERROT_ARCHETYPE = "Silent Yandere";

export const HARLEQUIN_HEIGHT = "187cm";
export const HARLEQUIN_EYES = "Poisonous Green";
export const HARLEQUIN_GENDER = "Male"; // ✅ CONFIRMED — was incorrectly listed as Female
export const HARLEQUIN_ARCHETYPE = "Seductive Rival";

// ── Derived Strings (for display) ──────────────────────────────
export const ENDINGS_SUMMARY = `${ENDINGS_TOTAL} Confirmed Endings · More Coming`;
export const ENDINGS_STAT_LABEL = `${ENDINGS_BAD} Bad · ${ENDINGS_OPEN} Open`;
export const UNVERIFIED_STAT_LABEL = `All ${ENDINGS_TOTAL} Confirmed`;
