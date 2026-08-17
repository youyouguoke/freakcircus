"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ENDINGS_CONFIRMED, ENDINGS_TOTAL } from "@/lib/site-facts";

const accent = "var(--jester)";

const profile = {
  role: "THE TRICKSTER",
  status: "UNKNOWN",
  route: "NOT CONFIRMED",
  firstEncounter: "Edges of narrative",
  keyMechanic: "Observation / Commentary",
  endings: "Unknown",
  loopAwareness: 85,
  threatLevel: 50,
  emotionalAttachment: 40,
  stability: 30,
  fourthWallAwareness: 70,
};

/* ─── Day 2 sightings ─── */
const day2Sightings = [
  {
    scene: "Mirror Hall Appearance",
    detail:
      "Jester's reflection appears in the Mirror Hall independently of Jester being physically present in the scene. The reflection moves on a slight delay from the player character.",
    confidence: "multi-source",
  },
  {
    scene: "UI Text Corruption",
    detail:
      "While Jester is on-screen, dialogue text occasionally displays scrambled characters or drops frames. This does not occur with other characters in the same scenes.",
    confidence: "multi-source",
  },
  {
    scene: "Purple Tent — Puppet Show",
    detail:
      "A puppet show in the purple tent reveals backstory elements connected to Columbina. Jester appears to be the puppeteer, though the scene can be missed if the player enters the tent at a specific time.",
    confidence: "multi-source",
  },
];

/* ─── Character connections ─── */
const connections = [
  {
    name: "Ticket Taker",
    href: "/characters/ticket-taker",
    relation: "Possible shared identity",
    detail:
      "Overlapping dialogue patterns and the fact that both appear at narrative edges. Community debate is active on whether they are the same entity.",
    confidence: "unverified",
  },
  {
    name: "The Doctor",
    href: "/characters/doctor",
    relation: "Strategic alignment",
    detail:
      "Some community reports describe Jester and The Doctor as the circus's 'rational / strategic core.' Jester defers to Doctor in at least one scene.",
    confidence: "unverified",
  },
  {
    name: "Columbina",
    href: "/characters/columbina",
    relation: "Backstory exposure",
    detail:
      "The purple tent puppet show connects Jester to Columbina's revealed backstory. Jester may know more about Columbina's past than Columbina herself.",
    confidence: "multi-source",
  },
  {
    name: "Harlequin",
    href: "/characters/harlequin",
    relation: "Fear / Deference",
    detail:
      "One community report describes Harlequin visibly recoiling when Jester enters a scene. Whether this is fear, respect, or something else is unconfirmed.",
    confidence: "single-source",
  },
];

/* ─── Related theories ─── */
const relatedTheories = [
  {
    title: "Masks Hide The Same Face",
    href: "/theories",
    tag: "Symbol Theory",
    connection:
      "Jester's mask is the most concealing of any character. This theory posits all characters are fragments of the same entity — Jester's mask may hide the most important identity, or the least.",
  },
  {
    title: "The Circus Does Not Exist",
    href: "/theories",
    tag: "Meta Theory",
    connection:
      "Jester's fourth-wall-aware dialogue and peripheral presence support the theory that the circus is a construct Jester may be orchestrating.",
  },
  {
    title: "Red Thread Connects All Routes",
    href: "/theories",
    tag: "Symbol Theory",
    connection:
      "Jester is the only character who appears in scenes of every other route without having a dedicated route. The red thread metaphor maps directly to Jester's connective presence.",
  },
];

function StatBar({
  label,
  value,
  color = accent,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-label text-[0.55rem] text-faint-paper w-28 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-1 bg-dark-border overflow-hidden">
        <div
          className="h-full transition-all duration-1000"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span className="font-label text-[0.5rem] text-faint-paper w-8 text-right">
        {value}%
      </span>
    </div>
  );
}

function ConfidenceBadge({ level }: { level: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    verified: { label: "VERIFIED", cls: "text-status-verified border-status-verified/30 bg-status-verified/8" },
    "multi-source": { label: "MULTI-SOURCE", cls: "text-gold-accent border-gold-accent/30 bg-gold-accent/8" },
    unverified: { label: "UNVERIFIED", cls: "text-status-unverified border-status-unverified/30 bg-status-unverified/8" },
    "single-source": { label: "SINGLE SOURCE", cls: "text-status-unverified border-status-unverified/30 bg-status-unverified/8" },
  };
  const info = map[level] || map["unverified"];
  return (
    <span className={`font-label text-[0.5rem] px-2 py-0.5 border ${info.cls}`}>
      {info.label}
    </span>
  );
}

export default function JesterClient({
  faqData,
}: {
  faqData: { question: string; answer: string }[];
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <article>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jester-hero-new.webp"
            alt=""
            className="w-full h-full object-cover object-top opacity-45 img-cinematic animate-breathe"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/60 to-void-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/25" />
          <div className="absolute inset-0 vhs-scanlines opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-12 pb-16 pt-32">
          <div
            className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="font-label text-faint-paper text-[0.6rem] mb-4 flex items-center gap-3">
              <span
                className="inline-block w-8 h-px"
                style={{ background: accent }}
              />
              CASE FILE 05
            </div>
            <h1
              className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2"
              style={{ color: accent }}
            >
              JESTER
            </h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">
              {profile.role}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-unverified border border-status-unverified/30 bg-status-unverified/8">
                STATUS: {profile.status}
              </span>
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-muted-paper border border-dark-border">
                ROUTE: {profile.route}
              </span>
            </div>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-2xl transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {[
              { label: "ROLE", value: "Trickster" },
              { label: "PRESENCE", value: "Peripheral" },
              { label: "ROUTE", value: "Unconfirmed" },
              { label: "AWARENESS", value: "★★★★☆" },
            ].map((i) => (
              <div key={i.label} className="bg-void-black p-4">
                <div className="font-label text-[0.5rem] text-faint-paper mb-1">
                  {i.label}
                </div>
                <div className="text-paper text-sm font-medium">{i.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IS JESTER ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div
              className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
              style={{ color: accent }}
            >
              <span
                className="inline-block w-6 h-px"
                style={{ background: accent }}
              />
              SUBJECT ANALYSIS
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-6">
              Who Is Jester?
            </h2>
            <div
              className="archive-card mb-6"
              style={{ borderLeft: `3px solid ${accent}` }}
            >
              <div
                className="font-label text-[0.55rem] mb-2"
                style={{ color: accent }}
              >
                QUICK ANSWER
              </div>
              <p className="text-faint-paper text-sm leading-relaxed">
                <strong className="text-paper">Jester</strong> operates at the
                edges of the narrative — watching, commenting, and delivering
                lines dense with double meanings that fuel theory-crafting.
                Unlike other characters, Jester has no confirmed route and
                appears in the peripheral vision of other characters&apos;
                stories.
              </p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">
              Jester is the most enigmatic figure in The Freak Circus. While
              other characters have defined routes and endings, Jester exists in
              the margins — appearing briefly in other characters&apos; scenes,
              delivering cryptic commentary, and vanishing before the player can
              fully engage. Some community members theorize Jester may be the
              circus&apos;s central orchestrator, but this remains unconfirmed.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img
                src="/jester-hero-new.webp"
                alt="Jester portrait"
                className="w-full object-cover img-cinematic"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-label text-[0.5rem] text-faint-paper">
                  SUBJECT PORTRAIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DAY 2 SIGHTINGS ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            FIELD REPORTS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-3">
            Day 2 Sightings &amp; Known Scenes
          </h2>
          <p className="text-faint-paper text-sm mb-8 max-w-2xl">
            Community-reported scenes featuring Jester on Day 2. These are
            sourced from multiple independent player reports but have not been
            independently verified against the current game build.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {day2Sightings.map((s) => (
              <div
                key={s.scene}
                className="archive-card flex flex-col gap-3"
                style={{ borderLeft: `3px solid ${accent}` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="font-label text-[0.6rem] text-paper">
                    {s.scene}
                  </div>
                  <ConfidenceBadge level={s.confidence} />
                </div>
                <p className="text-faint-paper text-sm leading-relaxed flex-1">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHARACTER PROFILE ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            SUBJECT PROFILE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">
            Character Profile
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">
                PSYCHOLOGICAL METRICS
              </div>
              <div className="space-y-4">
                <StatBar label="LOOP AWARENESS" value={profile.loopAwareness} />
                <StatBar label="THREAT LEVEL" value={profile.threatLevel} />
                <StatBar
                  label="ATTACHMENT"
                  value={profile.emotionalAttachment}
                />
                <StatBar
                  label="STABILITY"
                  value={profile.stability}
                  color="var(--blood-red)"
                />
                <StatBar
                  label="4TH WALL"
                  value={profile.fourthWallAwareness}
                  color="var(--doctor)"
                />
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">
                CLASSIFICATION DATA
              </div>
              <div className="space-y-4">
                {[
                  { l: "DESIGNATION", v: "Jester" },
                  { l: "CLASSIFICATION", v: "Unknown" },
                  { l: "ROLE", v: "Trickster / Observer" },
                  { l: "ROUTE STATUS", v: "Unconfirmed" },
                  {
                    l: "KNOWN ASSOCIATIONS",
                    v: "All characters (peripheral)",
                  },
                ].map((i) => (
                  <div key={i.l} className="flex items-baseline gap-4">
                    <span className="font-label text-[0.5rem] text-faint-paper w-32 shrink-0">
                      {i.l}
                    </span>
                    <span className="text-paper text-sm">{i.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHARACTER CONNECTIONS ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            NETWORK MAP
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-3">
            Character Connections
          </h2>
          <p className="text-faint-paper text-sm mb-8 max-w-2xl">
            Known and theorized relationships between Jester and other
            characters. Confidence levels reflect how many independent sources
            corroborate the connection.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {connections.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="archive-card group hover:border-circus-red/50 transition-colors flex flex-col gap-3"
                style={{ borderLeft: `3px solid ${accent}` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="font-label text-[0.65rem] text-paper group-hover:text-circus-red transition-colors">
                    {c.name}
                  </div>
                  <ConfidenceBadge level={c.confidence} />
                </div>
                <div className="font-label text-[0.55rem] text-faint-paper">
                  {c.relation}
                </div>
                <p className="text-faint-paper text-sm leading-relaxed flex-1">
                  {c.detail}
                </p>
                <div className="font-label text-[0.5rem] text-faint-paper group-hover:text-circus-red transition-colors">
                  VIEW PROFILE →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RELATED THEORIES ═══ */}
      <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            THEORY CONNECTIONS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-3">
            Related Theories
          </h2>
          <p className="text-faint-paper text-sm mb-8 max-w-2xl">
            Community theories that reference or rely on Jester&apos;s behavior
            and presence.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedTheories.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="archive-card group hover:border-circus-red/50 transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="font-label text-[0.65rem] text-paper group-hover:text-circus-red transition-colors">
                    {t.title}
                  </div>
                  <span className="font-label text-[0.5rem] px-2 py-0.5 border border-gold-accent/30 text-gold-accent bg-gold-accent/8">
                    {t.tag}
                  </span>
                </div>
                <p className="text-faint-paper text-sm leading-relaxed flex-1">
                  {t.connection}
                </p>
                <div className="font-label text-[0.5rem] text-faint-paper group-hover:text-circus-red transition-colors">
                  VIEW THEORY →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALL ENDINGS ═══ */}
      <section className="bg-archive-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            ENDINGS STATUS
          </div>
          <h2 className="font-heading text-2xl font-bold text-paper mb-4">
            All Endings
          </h2>
          <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label text-[0.55rem] px-2 py-0.5 border border-status-unverified/30 text-status-unverified bg-status-unverified/8">
                NO CONFIRMED ENDINGS
              </span>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">
              Jester has no confirmed endings associated with a dedicated route.
              Placeholder dialogue files labeled &apos;JESTER_ROUTE&apos; exist
              in the game data but are empty. The developer has listed
              Jester&apos;s route as &quot;planned&quot; without a target date.
            </p>
            <p className="text-muted-paper text-xs mt-3">
              The Freak Circus has {ENDINGS_TOTAL} documented endings across all
              characters ({ENDINGS_CONFIRMED} confirmed). See the{" "}
              <Link href="/endings" className="text-paper hover:text-circus-red transition-colors underline underline-offset-2">
                Endings Archive
              </Link>{" "}
              for the complete list.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ RELATED FILES ═══ */}
      <section className="bg-void-black py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="font-label text-[0.6rem] mb-4" style={{ color: accent }}>
            RELATED FILES
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { l: "All Characters", h: "/characters" },
              { l: "Ticket Taker", h: "/characters/ticket-taker" },
              { l: "All Theories", h: "/theories" },
              { l: "Endings Archive", h: "/endings" },
              { l: "Lore Archive", h: "/lore" },
              { l: "Walkthroughs", h: "/walkthroughs" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="font-label text-[0.55rem] px-3 py-1.5 border border-dark-border text-faint-paper hover:border-circus-red hover:text-paper transition-colors"
              >
                {lnk.l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="font-label text-[0.6rem] mb-3 flex items-center gap-3"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: accent }}
            />
            FREQUENTLY ASKED
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">
            Questions &amp; Answers
          </h2>
          <div className="space-y-3">
            {faqData.map((f, i) => (
              <details key={i} className="group archive-card">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-paper hover:text-circus-red transition-colors list-none">
                  <span className="pr-4">{f.question}</span>
                  <span className="font-label text-[0.55rem] text-faint-paper group-open:hidden shrink-0">
                    [+]
                  </span>
                  <span
                    className="font-label text-[0.55rem] hidden group-open:inline shrink-0"
                    style={{ color: accent }}
                  >
                    [−]
                  </span>
                </summary>
                <div className="mt-4 text-faint-paper text-sm leading-relaxed border-t border-dark-border pt-4">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
