"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ENDINGS_CONFIRMED, ENDINGS_TOTAL } from "@/lib/site-facts";

const accent = "var(--ticket-taker)";

const profile = {
  role: "THE GATEKEEPER",
  status: "ACTIVE",
  route: "NOT CONFIRMED",
  firstEncounter: "Circus Entrance (Day 1)",
};

/* ─── Field Reports ─── */
const fieldReports = [
  {
    scene: "Community-Reported Sightings",
    detail:
      "Players have reported encountering Ticket Taker at the entrance to the circus and in mirror-related scenes. Whether these represent a dedicated route or are part of the broader narrative structure is unverified.",
    confidence: "unverified",
  },
  {
    scene: "Mirror Scene",
    detail:
      "Community members have described a scene where the player sees themselves wearing Ticket Taker's mask. Whether this is a confirmed game mechanic or player interpretation is unverified against the current build.",
    confidence: "unverified",
  },
];

/* ─── Character connections ─── */
const connections = [
  {
    name: "The Doctor",
    href: "/characters/doctor",
    relation: "Unverified connection",
    detail:
      "Both characters appear in Day 2 content. Whether they have a deeper narrative connection is unverified community speculation.",
    confidence: "unverified",
  },
  {
    name: "Jester",
    href: "/characters/jester",
    relation: "Speculated connection",
    detail:
      "Community members have speculated about a possible connection between Ticket Taker and Jester, as both appear at the edges of other characters' routes. Whether they are the same entity, related, or entirely separate is unverified.",
    confidence: "unverified",
  },
  {
    name: "All Characters",
    href: "/characters",
    relation: "Narrative presence",
    detail:
      "Ticket Taker appears to exist at the boundary of the circus narrative. Whether this constitutes a connection to all characters or is a separate narrative function is unverified.",
    confidence: "unverified",
  },
];

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

export default function TicketTakerClient({
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/tickettaker-hero-new.webp"
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
              CASE FILE 06
            </div>
            <h1
              className="font-archive text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-2"
              style={{ color: accent }}
            >
              TICKET TAKER
            </h1>
            <p className="font-label text-muted-paper text-sm tracking-[0.2em] mb-8">
              {profile.role}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-label text-[0.55rem] px-2.5 py-1 text-status-confirmed border border-status-confirmed/30 bg-status-confirmed/8">
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
              { label: "ROLE", value: "Gatekeeper" },
              { label: "PRESENCE", value: "Boundary" },
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

      {/* ═══ WHO IS TICKET TAKER ═══ */}
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
              Who Is Ticket Taker?
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
                <strong className="text-paper">Ticket Taker</strong> is a
                character who appears at the boundary of The Freak Circus
                narrative. Community members have reported encountering Ticket
                Taker at the circus entrance and in mirror-related scenes.
                Whether Ticket Taker has a dedicated route, specific endings, or
                deeper narrative significance is unverified.
              </p>
            </div>
            <p className="text-faint-paper text-sm leading-relaxed">
              Ticket Taker exists at the edges of the narrative — appearing at
              threshold moments rather than in dedicated story sequences. Some
              community members theorize a connection to Jester or The Doctor,
              but these connections remain unverified speculation.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <img
                src="/tickettaker-hero-new.webp"
                alt="Ticket Taker portrait"
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

      {/* ═══ FIELD REPORTS ═══ */}
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
            Community-Observed Scenes
          </h2>
          <p className="text-faint-paper text-sm mb-8 max-w-2xl">
            Community-reported scenes featuring Ticket Taker. These are
            sourced from player reports but have not been independently
            verified against the current game build.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {fieldReports.map((s) => (
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
                COMMUNITY ASSESSMENT
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-label text-[0.5rem] text-faint-paper mb-1">
                    NARRATIVE ROLE
                  </div>
                  <p className="text-faint-paper text-sm">
                    Ticket Taker appears to function as a boundary or threshold
                    character. Whether this role has deeper significance is
                    unverified.
                  </p>
                </div>
                <div>
                  <div className="font-label text-[0.5rem] text-faint-paper mb-1">
                    AWARENESS
                  </div>
                  <p className="text-faint-paper text-sm">
                    Some players interpret Ticket Taker's positioning as
                    meta-awareness of the player, but this remains unverified
                    speculation.
                  </p>
                </div>
              </div>
            </div>
            <div className="archive-card">
              <div className="font-label text-[0.55rem] text-faint-paper mb-4 pb-2 border-b border-dark-border">
                CLASSIFICATION DATA
              </div>
              <div className="space-y-4">
                {[
                  { l: "DESIGNATION", v: "Ticket Taker" },
                  { l: "CLASSIFICATION", v: "Circus Entity" },
                  { l: "ROLE", v: "Gatekeeper" },
                  { l: "CONFIRMED ENDINGS", v: "None" },
                  { l: "KNOWN APPEARANCES", v: "Day 1 entrance, Day 2 content" },
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
            Theorized relationships between Ticket Taker and other
            characters. All connections are unverified community speculation.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
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

      {/* ═══ ALL ENDINGS ═══ */}
      <section className="bg-void-black py-16 px-4 md:px-12">
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
              Ticket Taker has no confirmed endings associated with a dedicated
              route. Whether any endings are specifically tied to Ticket Taker is
              unverified.
            </p>
            <p className="text-muted-paper text-xs mt-3">
              The Freak Circus has {ENDINGS_TOTAL} documented endings across all
              characters ({ENDINGS_CONFIRMED} confirmed). See the{" "}
              <Link
                href="/endings"
                className="text-paper hover:text-circus-red transition-colors underline underline-offset-2"
              >
                Endings Archive
              </Link>{" "}
              for the complete list.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ RELATED THEORIES ═══ */}
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
            THEORY CONNECTIONS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">
            Fan Theories
          </h2>
          <div className="archive-card" style={{ borderLeft: `3px solid ${accent}` }}>
            <p className="text-faint-paper text-sm leading-relaxed mb-4">
              Community members have speculated about Ticket Taker's role in the
              narrative, including theories about time loops, shared identities
              with other characters, and meta-narrative significance. Whether any
              of these theories are correct is unverified.
            </p>
            <p className="text-faint-paper text-sm leading-relaxed">
              For the complete list of community theories, see the{" "}
              <Link
                href="/theories"
                className="text-paper hover:text-circus-red transition-colors underline underline-offset-2"
              >
                Theories Hub
              </Link>
              .
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
              { l: "The Doctor", h: "/characters/doctor" },
              { l: "Jester", h: "/characters/jester" },
              { l: "All Theories", h: "/theories" },
              { l: "All Endings", h: "/endings" },
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
