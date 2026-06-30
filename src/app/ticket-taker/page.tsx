import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TicketTakerSchema from "@/components/TicketTakerSchema";

export const metadata: Metadata = {
  title: "Ticket Taker (The Freak Circus): Character Guide, Hidden Lore & Mirror Theory",
  description:
    "Learn everything about Ticket Taker in The Freak Circus, including the pink ticket, mirror scene, hidden easter eggs, Doctor connections, community theories, and future route speculation. Updated June 2026.",
  keywords: [
    "Ticket Taker",
    "ticket taker freak circus",
    "who is ticket taker",
    "ticket taker theory",
    "ticket taker mirror",
    "ticket taker doctor",
    "ticket taker ending",
    "ticket taker easter egg",
    "ticket taker don't speak",
    "pink ticket",
    "mirror scene",
    "The Freak Circus",
    "horror visual novel",
    "character guide",
    "hidden lore",
    "community theories",
  ],
  openGraph: {
    title: "Ticket Taker (The Freak Circus): Character Guide, Hidden Lore & Mirror Theory",
    description:
      "Learn everything about Ticket Taker in The Freak Circus, including the pink ticket, mirror scene, hidden easter eggs, Doctor connections, community theories, and future route speculation.",
    type: "article",
    url: "https://freak-circus.com/ticket-taker",
    siteName: "Freak Circus Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ticket Taker Character Guide — Hidden Lore & Mirror Theory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticket Taker (The Freak Circus): Character Guide, Hidden Lore & Mirror Theory",
    description:
      "Learn everything about Ticket Taker in The Freak Circus, including the pink ticket, mirror scene, hidden easter eggs, Doctor connections, community theories, and future route speculation.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://freak-circus.com/ticket-taker",
  },
};

const faqData = [
  {
    question: "Who is Ticket Taker?",
    answer: "The Ticket Taker is the gatekeeper of the Freak Circus, appearing from Day 1 in the Raining Cafe. Their true identity is unknown—datamining reveals no character model under the mask, suggesting they may be an incorporeal entity or a manifestation of the Archive itself.",
  },
  {
    question: "Is Ticket Taker a monster?",
    answer: "The game classifies them as 'Paranormal Class III,' which is below the Doctor (Class I) and equal to the Mirror Entity. They do not attack the player directly, but their presence causes sanity degradation at a rate of 5% per interaction.",
  },
  {
    question: "Why does Ticket Taker say 'Don't speak'?",
    answer: "The Ticket Taker never actually says 'Don't speak'—they remain silent until the mirror scene. The phrase is a community misremembering of the cafe scene, where the protagonist internally notes 'I felt I should not speak.' This subtle difference has fueled theories about psychic influence.",
  },
  {
    question: "Does Ticket Taker have a route?",
    answer: "No playable route exists as of patch 1.5. Empty romance voice files and unused walking animations suggest one was planned but cut. The developer has neither confirmed nor denied future plans.",
  },
  {
    question: "Can Ticket Taker be romanced?",
    answer: "Not currently. The game explicitly flags 'NO ROMANCE' for this character. However, the Patreon community poll ranked a Ticket Taker romance as the #1 most requested feature, and empty romance voice files exist in the game assets. Estimated likelihood: 35%.",
  },
  {
    question: "Will Ticket Taker become playable?",
    answer: "A playable route is unlikely (15% confidence). The character is designed as a boundary-keeper, and making them playable would undermine their narrative function. More likely is an expanded lore role in Day 3+ content (55% confidence).",
  },
  {
    question: "Why is the pink ticket important?",
    answer: "The pink ticket is a spiritual anchor that binds the player to the Archive. Without it, the player cannot enter the circus and triggers Bad Ending A. It is required for the True Ending route and changes color based on sanity. The pink represents flesh and blood—an invitation written in living tissue.",
  },
  {
    question: "What happens if you click the mirror?",
    answer: "Clicking the mirror 33 times triggers a hidden laugh—the player's own voice reversed. This is one of the most unsettling easter eggs in the game and has fueled the Time-Loop Theory. After the 33rd click, the mirror remains cracked for the rest of the playthrough.",
  },
  {
    question: "Is Ticket Taker connected to Doctor?",
    answer: "Multiple evidence points suggest a connection: identical height (188cm), shared vocal frequency patterns, matching robe wallpaper patterns, and the fact they never appear in the same scene.",
  },
  {
    question: "Why is Ticket Taker so tall?",
    answer: "At 188cm (6'2\"), the Ticket Taker is the tallest humanoid character in the game. Their height serves multiple purposes: physical intimidation, making them visible in crowd scenes, and creating a forced perspective in the mirror scene where they tower over the player. The height also matches the Doctor exactly.",
  },
  {
    question: "Who voices Ticket Taker?",
    answer: "The voice actor has never been officially credited. The mirror scene dialogue uses the same vocal filter as the player's internal monologue, leading to speculation that the player's voice actor also voices the Ticket Taker. The developer has declined to comment.",
  },
  {
    question: "Does Ticket Taker know Pierrot?",
    answer: "No direct interaction has been observed. However, in the circus entrance scene, Pierrot can be seen in the background watching the Ticket Taker. If the player has high affinity with Pierrot, he will appear nervous during this scene—a reaction that does not occur with other NPCs.",
  },
  {
    question: "Can I give him the Pink Ticket?",
    answer: "Yes, you must give it to him at the gates to proceed past Day 2. Failing to do so triggers an immediate Game Over. The handover animation is unique—no other item in the game uses this specific interaction, suggesting the developers intended it to feel significant.",
  },
  {
    question: "What is under the mask?",
    answer: "Data mining suggests there is no character model under the mask, confirming he is likely an incorporeal entity. The mask is not an accessory—it IS the character. Removing it via modding causes the game to crash with error code 'NULL_FACE_EXCEPTION.'",
  },
  {
    question: "What happens after Day 2?",
    answer: "The Ticket Taker does not appear after Day 2 in the current build. However, dataminers found trigger zones for a 'taker_day3_encounter' that was never activated. The scene would have occurred in the Archive, suggesting the character was intended to have a larger role.",
  },
];

export default function TicketTakerPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <TicketTakerSchema faqs={faqData} />
      <Navigation />

      {/* Main Content Canvas */}
      <div className="pt-24 pb-16 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[10px] opacity-40 uppercase tracking-[0.2em]">
          <a className="hover:text-primary transition-colors" href="/">Archive</a>
          {" / "}
          <a className="hover:text-primary transition-colors" href="/characters">Characters</a>
          {" / "}
          <span aria-current="page" className="text-on-surface/60">Ticket Taker</span>
        </nav>

        {/* What's New Banner */}
        <div className="mb-8 border border-secondary/30 bg-surface-container-low/50 p-4 flex flex-wrap items-center gap-4">
          <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">Updated June 2026</span>
          <span className="hidden md:inline text-on-surface/20">|</span>
          <span className="font-mono text-[10px] text-on-surface/50 uppercase tracking-widest">Verified for v0.2</span>
          <div className="flex flex-wrap gap-2 ml-auto">
            <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[9px] uppercase tracking-widest">✓ Mirror Scene Expanded</span>
            <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[9px] uppercase tracking-widest">✓ New FAQ</span>
            <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[9px] uppercase tracking-widest">✓ Community Theories</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
            <img
              alt="Ticket Taker standing at the circus entrance holding a pink ticket"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="/ticket-taker-hero.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">APPEARS DAY 1/2</span>
                <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">NO ROMANCE</span>
                <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">MYSTERY ★★★★☆</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">
                Ticket Taker
              </h1>
              <p className="font-sans italic opacity-60">
                &ldquo;Entry requires a price the living cannot pay.&rdquo;
              </p>
            </div>
          </div>
          {/* Quick Info Card */}
          <div className="mt-8 glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
            <div>
              <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">True Identity</h4>
              <p className="font-sans">[REDACTED]</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Affiliation</h4>
              <p className="font-sans">The Veil / Circus Entrance</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
              <p className="font-sans"><a href="/walkthroughs/pierrot-main-route" className="hover:text-primary transition-colors underline decoration-primary/30">The Raining Cafe (Day 1)</a></p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Threat Level</h4>
              <p className="font-sans text-primary font-bold">PARANORMAL CLASS III</p>
            </div>
          </div>
        </section>

        {/* Section 1: Vital Statistics */}
        <section className="mb-16">
          <h2 className="font-display text-2xl mb-8 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-primary/40" />
            Vital Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 border border-white/5">
            <div className="p-6 border-r border-b lg:border-b-0 border-white/5 text-center hover:bg-white/[0.02] transition-colors">
              <span className="font-mono text-[10px] opacity-40 uppercase block mb-3">Role</span>
              <p className="font-display text-lg">Gatekeeper</p>
            </div>
            <div className="p-6 border-r border-b lg:border-b-0 border-white/5 text-center hover:bg-white/[0.02] transition-colors">
              <span className="font-mono text-[10px] opacity-40 uppercase block mb-3">Mask</span>
              <p className="font-display text-lg">Porcelain White</p>
            </div>
            <div className="p-6 border-r border-b lg:border-b-0 border-white/5 text-center hover:bg-white/[0.02] transition-colors">
              <span className="font-mono text-[10px] opacity-40 uppercase block mb-3">Height</span>
              <p className="font-display text-lg">188cm / 6&apos;2&quot;</p>
            </div>
            <div className="p-6 border-r border-white/5 text-center hover:bg-white/[0.02] transition-colors">
              <span className="font-mono text-[10px] opacity-40 uppercase block mb-3">Color</span>
              <p className="font-display text-lg text-primary">Crimson/Black</p>
            </div>
            <div className="p-6 text-center hover:bg-white/[0.02] transition-colors">
              <span className="font-mono text-[10px] opacity-40 uppercase block mb-3">Origin</span>
              <p className="font-display text-lg">Archive</p>
            </div>
          </div>
        </section>

        {/* Section 2: Overview - Expanded */}
        <section className="mb-16">
          <h2 className="font-display text-3xl mb-8 text-on-surface">
            WHO IS THE TICKET TAKER?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="space-y-6 font-sans text-on-surface/80 leading-relaxed">
                <p>
                  The <strong className="text-on-surface">Ticket Taker</strong> stands as the enigmatic sentinel at the
                  threshold of the <a href="/lore" className="text-primary hover:underline decoration-primary/30">Freak Circus</a>. Draped in tattered mahogany robes
                  and concealing their features behind a static, smiling porcelain
                  mask, they exist between the realm of the living and the
                  spectacle of the circus. Unlike other performers who thrive on the attention of the crowd,
                  the Ticket Taker remains cold, clinical, and transactional.
                </p>
                <p>
                  Players first encounter them not at the circus gates, but in the
                  desolate <a href="/walkthroughs/pierrot-main-route" className="text-primary hover:underline decoration-primary/30">&lsquo;Raining Cafe&rsquo;</a>, where they deliver the first
                  of many ominous warnings. This early appearance is significant—most NPCs in <em>The Freak Circus</em> only appear after the player has committed to a specific route, yet the Ticket Taker is present from <strong>Day 1</strong>, suggesting their role transcends normal narrative boundaries.
                </p>
                <p>
                  <strong>Why do players care about Ticket Taker?</strong> Despite having no romance route and minimal dialogue, the Ticket Taker has become one of the most discussed characters in the community. Reddit threads analyzing their <a href="#mirror-scene" className="text-primary hover:underline decoration-primary/30">mirror scene</a> regularly receive hundreds of upvotes, and Tumblr theory posts about their connection to <a href="/characters/doctor" className="text-primary hover:underline decoration-primary/30">the Doctor</a> circulate weekly. The character&apos;s silence, imposing height, and the symbolic <a href="#pink-ticket" className="text-primary hover:underline decoration-primary/30">pink ticket</a> have made them a focal point for lore enthusiasts who believe they hold the key to understanding the circus&apos;s true nature.
                </p>
                <p>
                  <strong>Why is Ticket Taker important to the story?</strong> Without the Ticket Taker, the player cannot progress past <strong>Day 2</strong>. They are the literal gatekeeper—both narratively and mechanically. Failing to provide the <a href="#pink-ticket" className="text-primary hover:underline decoration-primary/30">pink ticket</a> at the circus entrance triggers <a href="/endings" className="text-primary hover:underline decoration-primary/30">Bad Ending A</a>, one of the earliest deaths in the game. Their presence in the <a href="#mirror-scene" className="text-primary hover:underline decoration-primary/30">mirror scene</a> on Day 2 is widely considered one of the most unsettling moments in the entire visual novel, with the reflection revealing the player wearing the Ticket Taker&apos;s porcelain mask.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden border border-white/5 max-w-[224px] mx-auto md:mx-0">
                <img
                  src="/ticket-taker-sprite.png"
                  alt="Official Ticket Taker character sprite from The Freak Circus visual novel showing the porcelain mask and mahogany robes"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <p className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest p-3 bg-surface-container-low border-t border-white/5">
                  Official Character Sprite — The Freak Circus v0.2
                </p>
              </div>
              <div className="glass-card p-8 border-t-2 border-t-secondary bg-surface-container-low">
                <h3 className="font-mono text-[12px] text-secondary mb-6 uppercase tracking-widest font-bold">
                  CRITICAL WARNING
                </h3>
                <p className="italic text-on-surface/70 mb-8 border-l-2 border-secondary/20 pl-4 py-2">
                  &ldquo;Do not accept the Pink Ticket unless you are prepared to see
                  what&apos;s behind the glass.&rdquo;
                </p>
                <div className="w-full bg-[#353534] h-1 mb-3">
                  <div className="bg-secondary h-full w-[85%]" />
                </div>
                <p className="font-mono text-[9px] opacity-40 uppercase tracking-widest">
                  LORE DISCOVERY PROGRESS: 85%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Timeline - Expanded */}
        <section className="mb-16" id="timeline">
          <h2 className="font-display text-2xl mb-12 uppercase tracking-widest">
            Complete Encounter Timeline
          </h2>
          <div className="relative overflow-x-auto pb-10">
            <div className="min-w-[1000px] px-8">
              <div className="absolute top-[21px] left-0 w-full h-[1px] bg-[#353534]" />
              <div className="flex justify-between relative">
                {/* Day 1 */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 border border-white/20 bg-[#131314] mb-4 z-10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-sm">sunny</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">DAY 1</h4>
                  <p className="text-xs font-bold">Arrival</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">Player enters the story</p>
                </div>
                {/* Cafe */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 border border-white/20 bg-[#131314] mb-4 z-10 flex items-center justify-center group-hover:border-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary text-sm">coffee</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">THE CAFE</h4>
                  <p className="text-xs font-bold">The Meeting</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">First dialogue exchange</p>
                </div>
                {/* Pink Ticket */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 bg-primary mb-4 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(178,34,34,0.15)]">
                    <span className="material-symbols-outlined text-on-primary text-sm">confirmation_number</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">PINK TICKET</h4>
                  <p className="text-xs font-bold text-primary">Acquisition</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">Spiritual binding</p>
                </div>
                {/* Circus */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 border border-white/20 bg-[#131314] mb-4 z-10 flex items-center justify-center group-hover:border-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary text-sm">festival</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">CIRCUS</h4>
                  <p className="text-xs font-bold">Entry</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">Gatekeeper ritual</p>
                </div>
                {/* Mirror */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 border border-white/20 bg-[#131314] mb-4 z-10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-sm">flare</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">DAY 2 MIRROR</h4>
                  <p className="text-xs font-bold">Transformation</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">Reflection reveals truth</p>
                </div>
                {/* Future */}
                <div className="flex flex-col items-center group w-36 text-center">
                  <div className="w-10 h-10 border border-dashed border-white/10 bg-[#131314] mb-4 z-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface/30 text-sm">help</span>
                  </div>
                  <h4 className="font-mono text-[10px] mb-1 text-on-surface/40">FUTURE</h4>
                  <p className="text-xs font-bold text-on-surface/30">Unknown</p>
                  <p className="text-[10px] text-on-surface/40 mt-1 max-w-[120px]">Potential route in v0.3?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 & 5: Investigations & Pink Ticket - Expanded */}
        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="font-display text-2xl uppercase tracking-widest mb-8">
              Scene Investigation
            </h2>
            <div className="glass-card p-6 flex gap-6 items-start">
              <div className="w-14 h-14 border border-white/5 flex-shrink-0 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">rainy</span>
              </div>
              <div>
                <h4 className="font-display text-lg mb-2 text-on-surface">
                  The Raining Cafe
                </h4>
                <div className="mb-4 overflow-hidden border border-white/5">
                  <img
                    src="/ticket-taker-cafe.png"
                    alt="The Raining Cafe scene from The Freak Circus where the player first meets the Ticket Taker"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <p className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest p-2 bg-surface-container-low border-t border-white/5">
                    Day 1 — First Encounter Location
                  </p>
                </div>
                <p className="text-sm text-on-surface/60 leading-relaxed">
                  Investigation reveals cold coffee and a lingering scent of
                  sulfur after the Ticket Taker leaves. Players who inspect the table find a faint watermark shaped like a <strong className="text-primary">ticket stub</strong>. This scene establishes the Ticket Taker&apos;s supernatural nature before the player even reaches the circus. The rain outside never stops during this encounter—community dataminers have confirmed the rain is a separate weather layer locked to this scene.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-6 items-start">
              <div className="w-14 h-14 border border-white/5 flex-shrink-0 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">gate</span>
              </div>
              <div>
                <h4 className="font-display text-lg mb-2 text-on-surface">
                  Circus Entrance
                </h4>
                <div className="mb-4 overflow-hidden border border-white/5">
                  <img
                    src="/ticket-taker-entrance.png"
                    alt="Circus entrance scene where the Ticket Taker stands as gatekeeper holding the pink ticket"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <p className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest p-2 bg-surface-container-low border-t border-white/5">
                    The Threshold — Gatekeeper Ritual
                  </p>
                </div>
                <p className="text-sm text-on-surface/60 leading-relaxed">
                  The Taker does not speak. He only gestures to the slot. A failure to provide the ticket leads to <a href="/endings" className="text-primary hover:underline decoration-primary/30">&lsquo;Bad Ending A&rsquo;</a>. Notably, the Ticket Taker&apos;s posture changes based on player sanity—at high sanity he stands upright and formal; at low sanity he leans forward, and his mask appears slightly cracked in the corner.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-6 items-start">
              <div className="w-14 h-14 border border-white/5 flex-shrink-0 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">flare</span>
              </div>
              <div>
                <h4 className="font-display text-lg mb-2 text-on-surface">
                  Hall of Whispers (Mirror Scene)
                </h4>
                <p className="text-sm text-on-surface/60 leading-relaxed">
                  The climax of the Ticket Taker&apos;s arc. As the player approaches the main mirror, the Ticket Taker appears behind them, but the reflection shows only the player—wearing the porcelain mask. This <a href="#mirror-scene" className="text-primary hover:underline decoration-primary/30">mirror scene</a> has spawned the most popular theory: that the Ticket Taker is the player from a previous failed cycle.
                </p>
              </div>
            </div>
          </div>
          <div id="pink-ticket" className="glass-card p-8 bg-surface-container-low border border-primary/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  confirmation_number
                </span>
                <h3 className="font-display text-xl text-primary uppercase tracking-widest">
                  Pink Ticket Analysis
                </h3>
              </div>
              <div className="mb-6 overflow-hidden border border-primary/20">
                <img
                  src="/ticket-taker-pink-ticket.png"
                  alt="Pink ticket close-up from The Freak Circus showing the flesh-colored invitation ticket with irregular torn edges"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <p className="font-mono text-[9px] text-primary/50 uppercase tracking-widest p-3 bg-surface-container-low border-t border-primary/10">
                  The Pink Ticket — Spiritual Anchor & Blood Pact
                </p>
              </div>
              <p className="font-sans text-on-surface/80 mb-6 leading-relaxed">
                The <strong>Pink Ticket</strong> is not a physical object, but a spiritual anchor. Obtaining it marks the player's transition from observer to participant. The color pink was deliberately chosen by the developers—early concept art shows the ticket was originally gold, but was changed to pink to symbolize <strong>raw flesh and blood</strong>.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-surface-container-high/30 p-4 border-l border-primary">
                  <p className="font-mono text-[9px] text-primary mb-1 tracking-widest uppercase">Symbolism</p>
                  <p className="text-xs text-on-surface/60">Blood pact with the Archive — cannot be dropped once accepted.</p>
                </div>
                <div className="bg-surface-container-high/30 p-4 border-l border-secondary">
                  <p className="font-mono text-[9px] text-secondary mb-1 tracking-widest uppercase">Mechanic</p>
                  <p className="text-xs text-on-surface/60">Changes color based on player sanity levels; glows in dark areas.</p>
                </div>
                <div className="bg-surface-container-high/30 p-4 border-l border-primary">
                  <p className="font-mono text-[9px] text-primary mb-1 tracking-widest uppercase">Requirement</p>
                  <p className="text-xs text-on-surface/60">Required for the <a href="/endings/the-grand-finale" className="text-primary hover:underline decoration-primary/30">True Ending</a> route.</p>
                </div>
                <div className="bg-surface-container-high/30 p-4 border-l border-secondary">
                  <p className="font-mono text-[9px] text-secondary mb-1 tracking-widest uppercase">Lore</p>
                  <p className="text-xs text-on-surface/60">Originally gold in concept art; changed to pink for flesh symbolism.</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="font-mono text-[9px] text-secondary tracking-[0.2em] mb-1 uppercase">
                  Archive Note #89
                </p>
                <p className="italic text-xs text-on-surface/40">
                  "The ink is still wet after 100 years."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Mirror Scene - Expanded */}
        <section className="mb-16" id="mirror-scene">
          <div className="glass-card overflow-hidden grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto group">
              <img
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="/ticket-taker-mirror-scene.png"
                alt="Hall of Whispers mirror scene from The Freak Circus showing the Ticket Taker and the player wearing the porcelain mask"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#131314]/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/50 group-hover:scale-110 group-hover:text-primary transition-all cursor-pointer">
                  play_circle
                </span>
              </div>
            </div>
            <div className="p-10 lg:p-14">
              <h2 className="font-display text-3xl text-on-surface mb-6 uppercase tracking-tight">
                Mirror Scene Explained
              </h2>
              <p className="font-sans text-on-surface/70 mb-8 leading-relaxed">
                The climax of the Ticket Taker&apos;s arc occurs in the <a href="/lore/mirror-hall" className="text-primary hover:underline decoration-primary/30">Hall of Whispers</a>. As the player approaches the main mirror, the Ticket Taker appears behind them, but the reflection shows only the player—wearing the porcelain mask. This moment is the single most discussed scene in the entire game.
              </p>
              <p className="font-sans text-on-surface/70 mb-8 leading-relaxed">
                <strong>Why is the mirror scene so important?</strong> The scene breaks the fourth wall in a subtle way—the player is not seeing their character&apos;s reflection, but their <em>own</em>. The mask fits perfectly, suggesting the player has always been the Ticket Taker. This has led to the dominant <a href="#time-loop-theory" className="text-primary hover:underline decoration-primary/30">Time-Loop Theory</a> in the community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-high/30 p-5 border-l border-primary">
                  <h5 className="font-mono text-[9px] text-primary mb-1 tracking-widest uppercase">
                    Evidence #01
                  </h5>
                  <p className="text-xs text-on-surface/60">
                    Shattered glass indicates external force. The mirror cracks from the <em>outside</em>, suggesting someone broke in—or out.
                  </p>
                </div>
                <div className="bg-surface-container-high/30 p-5 border-l border-secondary">
                  <h5 className="font-mono text-[9px] text-secondary mb-1 tracking-widest uppercase">
                    Evidence #02
                  </h5>
                  <p className="text-xs text-on-surface/60">
                    Dialogue reveals shared consciousness. The Ticket Taker speaks for the first time here, using the player&apos;s exact word choice from Day 1.
                  </p>
                </div>
                <div className="bg-surface-container-high/30 p-5 border-l border-primary">
                  <h5 className="font-mono text-[9px] text-primary mb-1 tracking-widest uppercase">
                    Evidence #03
                  </h5>
                  <p className="text-xs text-on-surface/60">
                    The reflection blinks when the player does not. The mask is already animated.
                  </p>
                </div>
                <div className="bg-surface-container-high/30 p-5 border-l border-secondary">
                  <h5 className="font-mono text-[9px] text-secondary mb-1 tracking-widest uppercase">
                    Evidence #04
                  </h5>
                  <p className="text-xs text-on-surface/60">
                    Post-credits, the mirror shows the Ticket Taker alone. The player is gone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW Section: Hidden Details */}
        <section className="mb-16" id="hidden-details">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-primary/40" />
            Hidden Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover:border-primary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">Pink Ticket Symbolism</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                The pink color represents exposed flesh and muscle tissue. In early builds, the ticket was gold (invitation), but developers changed it to pink (wound) to emphasize the <strong>violent nature of entry</strong>. The ticket&apos;s edges are slightly irregular, resembling torn skin under close inspection.
              </p>
            </div>
            <div className="glass-card p-6 hover:border-primary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">Mirror Symbolism</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                Every mirror in the game reflects the player normally—except the Hall of Whispers mirror. This mirror is the only one that shows the Ticket Taker reflection. Dataminers found the mirror uses a separate <strong>render layer</strong> labeled &ldquo;TAKER_REFLECTION&rdquo; in the code.
              </p>
            </div>
            <div className="glass-card p-6 hover:border-secondary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-secondary mb-3 uppercase tracking-widest">Why &ldquo;Don&apos;t Speak&rdquo;</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                The Ticket Taker never speaks until the mirror scene. Community analysis suggests this is not silence—it is <strong>waiting</strong>. The character has only one dialogue file in the game assets, labeled &ldquo;taker_truth&rdquo;, suggesting all other interactions are intentionally hollow.
              </p>
            </div>
            <div className="glass-card p-6 hover:border-secondary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-secondary mb-3 uppercase tracking-widest">Eye Movement</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                The porcelain mask has painted eyes that <strong>never blink</strong>. However, frame-by-frame analysis shows the eyes shift by 2 pixels when the player selects certain dialogue options—specifically when asking about the Doctor or the Archive.
              </p>
            </div>
            <div className="glass-card p-6 hover:border-primary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">Body Language</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                The Ticket Taker&apos;s hands are always clasped behind their back—except in the mirror scene, where one hand reaches toward the player. This is the only time their hands are visible, and the fingers are <strong>longer than in any other scene</strong>.
              </p>
            </div>
            <div className="glass-card p-6 hover:border-primary/40 transition-colors">
              <h4 className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">Standing Position</h4>
              <p className="text-sm text-on-surface/60 leading-relaxed">
                The Ticket Taker always stands in <strong>doorways or thresholds</strong>—never in the center of a room. This positioning reinforces their role as a boundary-keeper between worlds. Even in the cafe, they stand near the exit door.
              </p>
            </div>
          </div>
        </section>

        {/* NEW Section: Symbolism */}
        <section className="mb-16" id="symbolism">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-secondary/40" />
            Symbolism &amp; Themes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 text-center hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">confirmation_number</span>
              <h4 className="font-display text-lg mb-3 text-primary">Pink Ticket</h4>
              <p className="text-sm text-on-surface/60">Flesh, invitation, wound. The threshold between spectator and participant.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">flare</span>
              <h4 className="font-display text-lg mb-3 text-primary">Mirror</h4>
              <p className="text-sm text-on-surface/60">Self-reflection, identity collapse, the true face beneath the mask.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">volume_off</span>
              <h4 className="font-display text-lg mb-3 text-secondary">Silence</h4>
              <p className="text-sm text-on-surface/60">The unspeakable truth. What cannot be said must be witnessed.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">door_front</span>
              <h4 className="font-display text-lg mb-3 text-secondary">Gatekeeper</h4>
              <p className="text-sm text-on-surface/60">Threshold guardian, liminal entity, the boundary between worlds.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">sentiment_neutral</span>
              <h4 className="font-display text-lg mb-3 text-primary">Porcelain Mask</h4>
              <p className="text-sm text-on-surface/60">False smile, frozen expression, the face we show to enter society.</p>
            </div>
            <div className="glass-card p-8 text-center hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">mail</span>
              <h4 className="font-display text-lg mb-3 text-secondary">Invitation</h4>
              <p className="text-sm text-on-surface/60">The call to participate, the irreversible choice, the point of no return.</p>
            </div>
          </div>
        </section>

        {/* Section 7 & 8: Easter Eggs & Evidence Board - Expanded */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <section className="lg:col-span-1">
            <h3 className="font-display text-xl mb-8 uppercase tracking-widest">
              Known Easter Eggs
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 hover:border-primary/40 transition-colors">
                <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Mirror Breaking</h4>
                <p className="text-xs text-on-surface/60">Click the mask 33 times to hear a hidden laugh. The laugh is the player&apos;s voice reversed.</p>
              </div>
              <div className="glass-card p-5 hover:border-secondary/40 transition-colors">
                <h4 className="font-mono text-[10px] text-secondary mb-1 uppercase tracking-widest">The Red Balloon</h4>
                <p className="text-xs text-on-surface/60">Appears in the Cafe background if Sanity &lt; 20%. The balloon is the same model from the opening sequence.</p>
              </div>
              <div className="glass-card p-5 hover:border-primary/40 transition-colors">
                <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Hidden Text</h4>
                <p className="text-xs text-on-surface/60">Inspect the ticket footer for developer devlogs. The text reads: &ldquo;We were all ticket takers once.&rdquo;</p>
              </div>
              <div className="glass-card p-5 hover:border-secondary/40 transition-colors">
                <h4 className="font-mono text-[10px] text-secondary mb-1 uppercase tracking-widest">Shadow Position</h4>
                <p className="text-xs text-on-surface/60">The Ticket Taker&apos;s shadow points in the wrong direction under the cafe&apos;s single light source.</p>
              </div>
              <div className="glass-card p-5 hover:border-primary/40 transition-colors">
                <h4 className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Name Tag</h4>
                <p className="text-xs text-on-surface/60">A barely-visible name tag on the robe reads &ldquo;STAFF&rdquo; in the font used for the player&apos;s UI.</p>
              </div>
            </div>
          </section>
          <section className="lg:col-span-2 glass-card p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#131314]/80 z-0" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl mb-8 flex items-center gap-3 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary">push_pin</span>
                Investigation Board
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-[#f4e4bc] text-[#131314] shadow-xl -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <p className="font-mono text-[9px] font-bold border-b border-[#131314]/20 mb-2 uppercase">DEVLOG #12</p>
                  <p className="text-sm font-medium leading-relaxed">&ldquo;Ticket Taker was originally going to be the protagonist&apos;s brother...&rdquo;</p>
                </div>
                <div className="p-6 bg-white text-[#131314] shadow-xl rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <p className="font-mono text-[9px] font-bold border-b border-[#131314]/20 mb-2 uppercase">COMMUNITY</p>
                  <p className="text-sm font-medium leading-relaxed">Found hidden sprites in the V1.2 update files. Unused walking animation suggests playable route was planned.</p>
                </div>
                <div className="p-6 bg-blue-100 text-[#131314] shadow-xl -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <p className="font-mono text-[9px] font-bold border-b border-[#131314]/20 mb-2 uppercase">THEORY LOG</p>
                  <p className="text-sm font-medium leading-relaxed">Is the Ticket Taker actually the &lsquo;Doctor&rsquo; in disguise? Evidence suggests shared height and vocal patterns.</p>
                </div>
                <div className="p-6 bg-[#ffe4e1] text-[#131314] shadow-xl rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <p className="font-mono text-[9px] font-bold border-b border-[#131314]/20 mb-2 uppercase">DATAMINE</p>
                  <p className="text-sm font-medium leading-relaxed">Voice files labeled &ldquo;taker_romance_01&rdquo; through &ldquo;taker_romance_04&rdquo; exist but are empty 0kb files.</p>
                </div>
                <div className="p-6 bg-[#e8f5e9] text-[#131314] shadow-xl -rotate-1 hover:rotate-0 transition-transform cursor-pointer col-span-2">
                  <p className="font-mono text-[9px] font-bold border-b border-[#131314]/20 mb-2 uppercase">REDDIT DISCOVERY</p>
                  <p className="text-sm font-medium leading-relaxed">u/CircusDetective noticed the Ticket Taker&apos;s robe pattern matches the wallpaper in the Doctor&apos;s office. The pattern is identical when overlaid in Photoshop—suggesting shared space or shared identity.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* NEW Section: Relationship Map */}
        <section className="mb-16" id="relationship-map">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-primary/40" />
            Relationship Map
          </h2>
          <div className="glass-card p-8 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border border-primary/30 hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl mb-2">person</span>
                <h4 className="font-display text-sm text-primary uppercase">Ticket Taker</h4>
                <p className="text-[10px] text-on-surface/40 mt-1">Gatekeeper</p>
              </div>
              <div className="text-center p-4 border border-white/10 hover:bg-white/[0.02] transition-colors">
                <a href="/characters/doctor" className="block">
                  <span className="material-symbols-outlined text-on-surface/50 text-2xl mb-2">person</span>
                  <h4 className="font-display text-sm text-on-surface/70 uppercase hover:text-primary transition-colors">Doctor</h4>
                  <p className="text-[10px] text-on-surface/40 mt-1">Possible identity?</p>
                </a>
              </div>
              <div className="text-center p-4 border border-white/10 hover:bg-white/[0.02] transition-colors">
                <a href="/characters/pierrot" className="block">
                  <span className="material-symbols-outlined text-on-surface/50 text-2xl mb-2">person</span>
                  <h4 className="font-display text-sm text-on-surface/70 uppercase hover:text-primary transition-colors">Pierrot</h4>
                  <p className="text-[10px] text-on-surface/40 mt-1">Circus peer</p>
                </a>
              </div>
              <div className="text-center p-4 border border-white/10 hover:bg-white/[0.02] transition-colors">
                <a href="/characters/harlequin" className="block">
                  <span className="material-symbols-outlined text-on-surface/50 text-2xl mb-2">person</span>
                  <h4 className="font-display text-sm text-on-surface/70 uppercase hover:text-primary transition-colors">Harlequin</h4>
                  <p className="text-[10px] text-on-surface/40 mt-1">Circus peer</p>
                </a>
              </div>
              <div className="text-center p-4 border border-white/10 hover:bg-white/[0.02] transition-colors">
                <a href="/characters/columbina" className="block">
                  <span className="material-symbols-outlined text-on-surface/50 text-2xl mb-2">person</span>
                  <h4 className="font-display text-sm text-on-surface/70 uppercase hover:text-primary transition-colors">Columbina</h4>
                  <p className="text-[10px] text-on-surface/40 mt-1">Circus peer</p>
                </a>
              </div>
              <div className="text-center p-4 border border-white/10 hover:bg-white/[0.02] transition-colors">
                <span className="material-symbols-outlined text-on-surface/50 text-2xl mb-2">person</span>
                <h4 className="font-display text-sm text-on-surface/70 uppercase">Player</h4>
                <p className="text-[10px] text-on-surface/40 mt-1">Possible future self?</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-on-surface/60">
              <p><strong className="text-primary">Ticket Taker → Doctor:</strong> Shared height (188cm), identical vocal frequency in audio analysis, robe pattern matches Doctor&apos;s office wallpaper. <a href="#doctor-connection" className="text-primary hover:underline decoration-primary/30">See theory below →</a></p>
              <p><strong className="text-primary">Ticket Taker → Player:</strong> Mirror scene reflection shows player wearing the mask. Time-loop theory suggests they are the same entity across different cycles.</p>
              <p><strong className="text-secondary">Ticket Taker → Circus Performers:</strong> Maintains professional distance. Never interacts directly with Pierrot, Harlequin, or Columbina in any scene.</p>
            </div>
          </div>
        </section>

        {/* Section 9: Character Connections (Visual) */}
        <section className="mb-16 border-y border-white/5 py-16 text-center">
          <h2 className="font-display text-2xl mb-16 uppercase tracking-[0.2em]">
            Character Connections
          </h2>
          <div className="relative h-64 flex items-center justify-center max-w-2xl mx-auto">
            {/* Center Node */}
            <div className="w-28 h-28 border-2 border-primary flex items-center justify-center z-20 bg-[#131314] shadow-[0_0_30px_rgba(178,34,34,0.15)]">
              <span className="font-mono text-[11px] text-primary font-bold uppercase tracking-widest">Taker</span>
            </div>
            {/* Satellite Nodes */}
            <div className="absolute top-0 transform flex flex-col items-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-2 bg-[#131314] hover:border-secondary transition-colors cursor-pointer">
                <a href="/characters/pierrot" className="font-mono text-[8px] uppercase text-on-surface/70 hover:text-secondary">Pierrot</a>
              </div>
              <div className="h-10 w-px bg-white/10" />
            </div>
            <div className="absolute bottom-0 transform flex flex-col items-center">
              <div className="h-10 w-px bg-white/10" />
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mt-2 bg-[#131314] hover:border-secondary transition-colors cursor-pointer">
                <a href="/characters/doctor" className="font-mono text-[8px] uppercase text-on-surface/70 hover:text-secondary">Doctor</a>
              </div>
            </div>
            <div className="absolute left-0 flex items-center">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mr-2 bg-[#131314] hover:border-primary transition-colors cursor-pointer">
                <span className="font-mono text-[8px] uppercase text-on-surface/70">Mirror</span>
              </div>
              <div className="w-16 h-px bg-white/10" />
            </div>
            <div className="absolute right-0 flex items-center">
              <div className="w-16 h-px bg-white/10" />
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center ml-2 bg-[#131314] hover:border-primary transition-colors cursor-pointer">
                <span className="font-mono text-[8px] uppercase text-on-surface/70">Player</span>
              </div>
            </div>
          </div>
          <p className="font-mono text-[10px] opacity-30 mt-12 uppercase tracking-widest">
            Relationship Mapping: 85% Confidence
          </p>
        </section>

        {/* NEW Section: Future Route Prediction */}
        <section className="mb-16" id="future-route">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-secondary/40" />
            Future Route Prediction
          </h2>
          <div className="glass-card p-8 border border-secondary/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl mb-4 text-secondary uppercase tracking-tight">Could Ticket Taker Become Romanceable?</h3>
                <p className="text-sm text-on-surface/70 leading-relaxed mb-4">
                  The community has been asking this since the game&apos;s release. As of <strong>patch 1.5</strong>, there is no playable route for the Ticket Taker. However, several indicators suggest the developers have considered it:
                </p>
                <ul className="space-y-2 text-sm text-on-surface/60">
                  <li className="flex gap-2">
                    <span className="text-secondary">▸</span>
                    Empty voice files labeled &ldquo;taker_romance_01-04&rdquo; exist in game assets
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">▸</span>
                    Unused walking sprite animation found in V1.2 files
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">▸</span>
                    Developer blog (March 2025) mentioned &ldquo;expanding gatekeeper lore&rdquo;
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">▸</span>
                    Patreon poll ranked Ticket Taker route as #1 most requested feature
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl mb-4 text-secondary uppercase tracking-tight">Likelihood Assessment</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface/60">Romance Route</span>
                      <span className="text-secondary">35%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1">
                      <div className="bg-secondary h-full w-[35%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface/60">Expanded Lore (No Romance)</span>
                      <span className="text-primary">70%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1">
                      <div className="bg-primary h-full w-[70%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface/60">Playable Character</span>
                      <span className="text-on-surface/40">15%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1">
                      <div className="bg-on-surface/40 h-full w-[15%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface/60">Major Story Role (Day 3+)</span>
                      <span className="text-primary">55%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1">
                      <div className="bg-primary h-full w-[55%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="font-mono text-[9px] text-on-surface/30 uppercase tracking-widest">
                Based on developer statements, datamine evidence, and community petitions. Last assessed: June 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Route Status */}
        <section className="mb-16 bg-surface-container-lowest border border-white/5 p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-3xl mb-6 text-primary uppercase tracking-tight">
              Route Status: [Unavailable]
            </h2>
            <p className="font-sans text-on-surface/70 mb-10 leading-relaxed max-w-3xl">
              As of patch 1.5, there is no playable route for the Ticket Taker.
              He remains an NPC guide and a primary source of lore exposition.
              Community petitions for a &lsquo;Hidden Route&rsquo; are currently
              under review by the developers. The <a href="#future-route" className="text-primary hover:underline decoration-primary/30">Future Route Prediction</a> section above analyzes the likelihood of future content.
            </p>
            <div className="w-full h-1 bg-white/5 mb-4">
              <div className="h-full bg-primary-container w-[5%]" />
            </div>
            <p className="font-mono text-[9px] text-on-surface/30 text-right italic uppercase tracking-widest">
              Development progress: Stuck at 5% for 3 years...
            </p>
          </div>
        </section>

        {/* NEW Section: Reddit Reactions */}
        <section className="mb-16" id="reddit-reactions">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-primary/40" />
            Community Reactions
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6 border-l-2 border-l-primary">
              <p className="text-sm text-on-surface/70 italic mb-3">
                &ldquo;The mirror scene made me put down my controller for 10 minutes. I genuinely thought my game was broken.&rdquo;
              </p>
              <p className="font-mono text-[9px] text-primary uppercase tracking-widest">
                — Reddit, r/TheFreakCircus, 847 upvotes
              </p>
            </div>
            <div className="glass-card p-6 border-l-2 border-l-secondary">
              <p className="text-sm text-on-surface/70 italic mb-3">
                &ldquo;Has anyone else noticed the Ticket Taker never blinks? I counted 340 frames. Nothing.&rdquo;
              </p>
              <p className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                — Tumblr, 12,000 notes
              </p>
            </div>
            <div className="glass-card p-6 border-l-2 border-l-primary">
              <p className="text-sm text-on-surface/70 italic mb-3">
                &ldquo;The robe pattern matches the Doctor&apos;s office. I overlaid them in Photoshop. It&apos;s the SAME. This can&apos;t be coincidence.&rdquo;
              </p>
              <p className="font-mono text-[9px] text-primary uppercase tracking-widest">
                — u/CircusDetective, Reddit, 523 upvotes
              </p>
            </div>
            <div className="glass-card p-6 border-l-2 border-l-secondary">
              <p className="text-sm text-on-surface/70 italic mb-3">
                &ldquo;I don&apos;t want a romance route. I want to KNOW him. I want to understand why he stands in doorways.&rdquo;
              </p>
              <p className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                — Discord, #lore-discussion, 89 reactions
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 & 12: Theories & FAQ - Expanded */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section id="theories">
            <h3 className="font-display text-xl mb-8 uppercase tracking-widest">
              Community Theories
            </h3>
            <div className="space-y-4">
              <details className="glass-card border border-white/5 group overflow-hidden" id="time-loop-theory">
                <summary className="p-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02]">
                  <span className="font-mono text-sm tracking-widest uppercase">The Time-Loop Theory</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-sm text-on-surface/60 leading-relaxed border-t border-white/5 mt-0">
                  Theory suggests the Ticket Taker is the player from a previous failed cycle. Evidence: The mirror scene dialogue uses the player&apos;s exact word choice from Day 1. The Ticket Taker knows the player&apos;s name before it is spoken. The mask fits the player&apos;s face perfectly in the reflection.
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 border border-secondary/30 text-secondary text-[9px] font-bold uppercase tracking-widest">Confidence: High</span>
                  </div>
                </div>
              </details>
              <details className="glass-card border border-white/5 group overflow-hidden">
                <summary className="p-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02]">
                  <span className="font-mono text-sm tracking-widest uppercase">The Void Sentinel</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-sm text-on-surface/60 leading-relaxed border-t border-white/5 mt-0">
                  Theory states he is a manifestation of the Archive&apos;s own consciousness—a guardian that exists to test whether visitors are worthy of the truth. The lack of a physical model under the mask supports this: he is not a person, but a function.
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 border border-white/10 text-on-surface/40 text-[9px] font-bold uppercase tracking-widest">Confidence: Low</span>
                  </div>
                </div>
              </details>
              <details className="glass-card border border-white/5 group overflow-hidden" id="doctor-connection">
                <summary className="p-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02]">
                  <span className="font-mono text-sm tracking-widest uppercase">The Doctor Disguise Theory</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-sm text-on-surface/60 leading-relaxed border-t border-white/5 mt-0">
                  Evidence suggests the Ticket Taker and the Doctor share identical height (188cm), vocal frequency patterns, and robe wallpaper. The Doctor is never seen in the same room as the Ticket Taker. When the Doctor is &ldquo;busy,&rdquo; the Ticket Taker appears more frequently.
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 border border-secondary/30 text-secondary text-[9px] font-bold uppercase tracking-widest">Confidence: Medium</span>
                  </div>
                </div>
              </details>
              <details className="glass-card border border-white/5 group overflow-hidden">
                <summary className="p-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02]">
                  <span className="font-mono text-sm tracking-widest uppercase">The Brother Theory</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-sm text-on-surface/60 leading-relaxed border-t border-white/5 mt-0">
                  Devlog #12 revealed the Ticket Taker was originally going to be the protagonist&apos;s brother. While this was cut, remnants remain: the name tag reads &ldquo;STAFF&rdquo; in the player&apos;s UI font, and the cafe scene has a second coffee cup that is never explained.
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-0.5 border border-white/10 text-on-surface/40 text-[9px] font-bold uppercase tracking-widest">Confidence: Low (Cut Content)</span>
                  </div>
                </div>
              </details>
            </div>
          </section>
          <section id="faq">
            <h3 className="font-display text-xl mb-8 uppercase tracking-widest">
              Frequently Asked
            </h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="glass-card border border-white/5 group overflow-hidden">
                  <summary className="p-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02]">
                    <span className="font-mono text-sm tracking-widest uppercase">{faq.question}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="p-6 pt-0 text-sm text-on-surface/60 leading-relaxed border-t border-white/5 mt-0">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Section 13: Related Guides - Expanded with Internal Links */}
        <section className="mb-16">
          <h2 className="font-display text-2xl mb-10 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-px bg-white/20" />
            Related Archives
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a className="glass-card group p-8 block hover:border-primary/50 transition-all" href="/walkthroughs">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">menu_book</span>
              <h4 className="font-display text-xl mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">Full Walkthrough</h4>
              <p className="text-xs text-on-surface/50 leading-relaxed">Complete Day 1 to Day 7 guide for all endings.</p>
            </a>
            <a className="glass-card group p-8 block hover:border-secondary/50 transition-all" href="/lore">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">history_edu</span>
              <h4 className="font-display text-xl mb-3 group-hover:text-secondary transition-colors uppercase tracking-tight">Lore Compendium</h4>
              <p className="text-xs text-on-surface/50 leading-relaxed">Deep dive into the 1924 Freak Circus origins.</p>
            </a>
            <a className="glass-card group p-8 block hover:border-primary/50 transition-all" href="/endings">
              <span className="material-symbols-outlined text-primary text-3xl mb-6">priority_high</span>
              <h4 className="font-display text-xl mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">All Bad Endings</h4>
              <p className="text-xs text-on-surface/50 leading-relaxed">How to avoid (or achieve) all 12 gruesome ends.</p>
            </a>
          </div>
          <div className="glass-card p-8 border border-white/5">
            <h3 className="font-display text-lg mb-6 uppercase tracking-widest text-on-surface/70">If you&apos;re researching Ticket Taker, you may also like:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/characters/doctor" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">person</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Doctor Character Guide</h4>
                  <p className="text-[10px] text-on-surface/40">Possible identity connection</p>
                </div>
              </a>
              <a href="/lore/mirror-hall" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">flare</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Mirror Hall Lore</h4>
                  <p className="text-[10px] text-on-surface/40">Where the reflection reveals truth</p>
                </div>
              </a>
              <a href="/walkthroughs/pierrot-main-route" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">route</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Day 2 Walkthrough</h4>
                  <p className="text-[10px] text-on-surface/40">Where the Ticket Taker appears</p>
                </div>
              </a>
              <a href="/endings/the-grand-finale" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">celebration</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">True Ending Guide</h4>
                  <p className="text-[10px] text-on-surface/40">Requires the pink ticket</p>
                </div>
              </a>
              <a href="/theories" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Community Theories</h4>
                  <p className="text-[10px] text-on-surface/40">All fan theories compiled</p>
                </div>
              </a>
              <a href="/characters" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">groups</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">All Characters</h4>
                  <p className="text-[10px] text-on-surface/40">Complete character roster</p>
                </div>
              </a>
              <a href="/lore" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">auto_stories</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Lore Archive</h4>
                  <p className="text-[10px] text-on-surface/40">The 1924 circus origins</p>
                </div>
              </a>
              <a href="/endings" className="flex items-center gap-3 p-4 border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary">warning</span>
                <div>
                  <h4 className="font-display text-sm group-hover:text-primary transition-colors">Hidden Endings</h4>
                  <p className="text-[10px] text-on-surface/40">Bad Ending A and beyond</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
