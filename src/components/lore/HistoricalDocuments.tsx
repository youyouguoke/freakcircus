'use client';

const documents = [
  { id: '001', title: 'Opening Poster', year: '1887', content: "'The Freak Circus — Where the Impossible Becomes the Expected.' First documented poster. No location listed. No performer names. The poster is printed on paper that does not match any known 19th-century manufacturing process." },
  { id: '002', title: 'Lost Performance Schedule', year: '1892', content: "Schedule lists 12 performances. The 7th performance is crossed out with a red 'X' and the word 'MISSING' written in the margin. The handwriting does not match any known performer's." },
  { id: '003', title: "Doctor's Notes — Patient 001", year: '1917', content: "'Patient reports waking up in a room with no doors. Claims to have been in the circus for three days but calendar shows three years. Patient's memory is consistent but impossible. Recommended: observation, not treatment.'" },
  { id: '004', title: 'Incident Report — Mirror Hall', year: '1903', content: "'Seven performers entered the Mirror Hall at 11:47 PM. Three exited at 11:48 PM. The other four did not exit. Their costumes were found inside. Their reflections were found in the mirrors. The mirrors were not installed until 1905.'" },
  { id: '005', title: 'Timeline Fracture Memo', year: '1945', content: "'The circus was not present for 72 hours. When it returned, the performers were different. Pierrot was younger. The Doctor was older. Columbina was the same age but did not recognize anyone. The calendar inside the circus read 1887.'" },
  { id: '006', title: 'White Room Description', year: '1987', content: "'A room with no walls, no ceiling, no floor. Only light. And in the center, a chair facing a mirror that shows nothing. The chair is warm. Someone was sitting there. The mirror is cold. No one has ever looked into it and seen their own face.'" },
];

export default function HistoricalDocuments() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-circus-red" />
          RECOVERED RECORDS
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper mb-8">Recovered Circus Records</h2>
        <p className="text-faint-paper text-sm mb-8 max-w-2xl">
          Historical documents recovered from The Freak Circus archive — fictional records that form the foundation of the lore.
        </p>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="archive-card" style={{ borderLeft: '3px solid var(--circus-red)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-label text-[0.55rem] px-2 py-0.5 text-circus-red border border-circus-red/30 bg-circus-red/8">
                  DOC-{doc.id}
                </span>
                <span className="font-label text-[0.55rem] text-faint-paper">{doc.year}</span>
                <span className="font-heading text-sm font-bold text-paper">{doc.title}</span>
              </div>
              <p className="text-faint-paper text-sm italic leading-relaxed">
                &ldquo;{doc.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
