/**
 * Site-Wide Fact Consistency — Single Source of Truth
 *
 * All pages MUST import numbers/labels from here instead of hardcoding.
 * When a fact changes, update THIS FILE ONLY — every page picks it up.
 *
 * Last reviewed: 2026-08-14 (4th review round)
 */

// ── Ending Counts ──────────────────────────────────────────────
export const ENDINGS_CONFIRMED = 11;
export const ENDINGS_UNVERIFIED = 3;
export const ENDINGS_TOTAL = ENDINGS_CONFIRMED + ENDINGS_UNVERIFIED; // 14

// ── Time & Playthroughs ────────────────────────────────────────
export const SINGLE_ROUTE_HOURS = "4-6 hours";
export const TOTAL_COMPLETION_HOURS = "40+ hours";
export const PLAYTHROUGHS_NEEDED = "6+";

// ── Characters ─────────────────────────────────────────────────
export const CHARACTERS_COUNT = 6;
export const MAIN_CHARACTERS = [
  "Pierrot",
  "Harlequin",
  "The Doctor",
  "Columbina",
  "Jester",
  "Ticket Taker",
] as const;

// ── Grand Finale (canonical ending) ────────────────────────────
export const GRAND_FINALE_ROUTE = "Harlequin";
export const GRAND_FINALE_CONDITION =
  "Complete the Harlequin route with standard dialogue choices";

// ── Derived Strings (for display) ──────────────────────────────
export const ENDINGS_SUMMARY = `${ENDINGS_TOTAL} Endings · ${TOTAL_COMPLETION_HOURS} · ${PLAYTHROUGHS_NEEDED} Playthroughs`;
export const ENDINGS_STAT_LABEL = `${ENDINGS_CONFIRMED} Confirmed`;
export const UNVERIFIED_STAT_LABEL = `${ENDINGS_UNVERIFIED} Unverified`;
