'use client';

const theories = [
  {
    id: 'THEORY_07', title: 'Pierrot Remembers Every Loop', category: 'Timeline Theory',
    status: 'confirmed', confidence: 82, evidence: 5, contradictions: 2,
    character: 'Pierrot', desc: 'Evidence suggests Pierrot reacts differently after repeated failed endings, retaining knowledge across timelines. On the 4th playthrough, he references choices from previous routes that the player never selected in the current save.',
    tags: ['Obsession', 'Replay Awareness', 'Narrative Corruption'],
  },
  {
    id: 'THEORY_11', title: 'The Doctor Is The Observer', category: 'Character Theory',
    status: 'likely', confidence: 67, evidence: 4, contradictions: 3,
    character: 'The Doctor', desc: 'The Doctor may be aware of the player directly, breaking the fourth wall through clinical observations. His Scene 7 description of the White Room ending matches unused files found in build 1.04.',
    tags: ['Meta', 'Fourth Wall', 'Manipulation'],
  },
  {
    id: 'THEORY_09', title: 'Columbina\'s Memory Is The Key', category: 'Memory Theory',
    status: 'confirmed', confidence: 78, evidence: 4, contradictions: 2,
    character: 'Columbina', desc: 'Columbina\'s fragmented recollections may hold the true nature of the circus and its looping structure. Her three-loop storyline mirrors the game\'s overall narrative architecture.',
    tags: ['Memory', 'Revelation', 'Purgatory'],
  },
  {
    id: 'THEORY_03', title: 'The Circus Does Not Exist', category: 'Meta Theory',
    status: 'unverified', confidence: 58, evidence: 4, contradictions: 3,
    character: 'All', desc: 'Some players believe the circus is not a physical location but a fragmented psychological space shared across collapsing timelines. Map geometry changes between routes.',
    tags: ['Meta', 'Psychological', 'Simulation'],
  },
  {
    id: 'THEORY_12', title: 'Harlequin\'s Fourth Wall Break', category: 'Character Theory',
    status: 'likely', confidence: 71, evidence: 3, contradictions: 1,
    character: 'Harlequin', desc: 'Harlequin\'s "You again" line on the 4th playthrough is not found in any script file. She may be the most aware character after Pierrot, with her own form of loop memory.',
    tags: ['Fourth Wall', 'Replay', 'Hidden Dialogue'],
  },
  {
    id: 'THEORY_15', title: 'Red Thread Connects All Routes', category: 'Symbol Theory',
    status: 'confirmed', confidence: 85, evidence: 7, contradictions: 1,
    character: 'All', desc: 'The red thread appears in every character route and seems to physically connect characters across timelines. Cutting the thread in one route affects dialogue in others.',
    tags: ['Symbol', 'Connection', 'Foreshadowing'],
  },
];

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { c: string; b: string; bd: string }> = {
    confirmed: { c: 'var(--status-confirmed)', b: 'rgba(76,175,110,0.08)', bd: 'rgba(76,175,110,0.3)' },
    likely: { c: 'var(--status-likely)', b: 'rgba(196,154,60,0.08)', bd: 'rgba(196,154,60,0.3)' },
    unverified: { c: 'var(--status-unverified)', b: 'rgba(138,128,120,0.08)', bd: 'rgba(138,128,120,0.3)' },
    corrupted: { c: 'var(--status-corrupted)', b: 'rgba(179,58,53,0.08)', bd: 'rgba(179,58,53,0.3)' },
  };
  const s = map[status] || map.unverified;
  return (
    <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: s.c, border: `1px solid ${s.bd}`, background: s.b }}>
      {status.toUpperCase()}
    </span>
  );
}

function CharacterTag({ name }: { name: string }) {
  const colors: Record<string, string> = {
    Pierrot: 'var(--pierrot)', Harlequin: 'var(--harlequin)', 'The Doctor': 'var(--doctor)',
    Columbina: 'var(--columbina)', Jester: 'var(--jester)', 'Ticket Taker': 'var(--ticket-taker)', All: 'var(--muted-paper)',
  };
  const c = colors[name] || 'var(--muted-paper)';
  return (
    <span className="font-label text-[0.5rem] px-2 py-0.5" style={{ color: c, border: `1px solid ${c}33`, background: `${c}0D` }}>
      {name}
    </span>
  );
}

export default function TheoryArchiveGrid() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          ALL THEORIES
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Theory Database</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {theories.map((t) => (
            <div key={t.id} className="archive-card group transition-all duration-300 hover:border-circus-red/40">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-[0.5rem] text-faint-paper">{t.id}</span>
                <StatusPill status={t.status} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-paper mb-2 group-hover:text-circus-red transition-colors">
                {t.title}
              </h3>

              {/* Category & character */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label text-[0.5rem] text-dim-paper">{t.category}</span>
                <span className="text-dim-paper text-xs">·</span>
                <CharacterTag name={t.character} />
              </div>

              {/* Description */}
              <p className="text-faint-paper text-sm leading-relaxed mb-4 line-clamp-3">{t.desc}</p>

              {/* Metrics */}
              <div className="flex items-center gap-4 pt-3 border-t border-dark-border mb-3">
                <span className="font-label text-[0.5rem] text-faint-paper">{t.evidence} EVIDENCE</span>
                <span className="font-label text-[0.5rem] text-faint-paper">{t.confidence}% CONF</span>
                <span className="font-label text-[0.5rem] text-faint-paper">{t.contradictions} CONTRA</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span key={tag} className="font-label text-[0.45rem] px-1.5 py-0.5 text-dim-paper border border-dark-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
