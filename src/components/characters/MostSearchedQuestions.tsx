"use client";

import Link from "next/link";

const questions = [
  {
    question: "Who are the Freak Circus characters?",
    answer: "The Freak Circus features four main characters: Pierrot the melancholic clown, Harlequin the chaotic performer, The Doctor the circus physician, and Columbina the ballerina. Each character has their own route, multiple endings, hidden triggers, and disturbing revelations. Pierrot explores memory loops and silence mechanics. Harlequin's route deals with fractured identity. The Doctor's route involves medical files and precognitive dialogue. Columbina's three-loop storyline reveals the circus's true nature.",
    href: "/characters",
  },
  {
    question: "Is Pierrot evil in The Freak Circus?",
    answer: "Pierrot is not traditionally evil — he is melancholic, withdrawn, and increasingly aware of the player's presence. His route explores themes of forgotten identity and repeated loops. The 'evil' interpretation comes from his post-credits scene in the Eternal Silence ending, where he addresses the player's real-world playtime with unsettling familiarity. Whether this makes him antagonistic or simply tragic is a major community debate.",
    href: "/characters/pierrot",
  },
  {
    question: "How old is Harlequin in The Freak Circus?",
    answer: "Harlequin's age is never explicitly stated in the game. However, medical files in The Doctor's route reference a 'patient H' with a birth date of 1987, suggesting she may be in her late 20s or early 30s. The timeline theory places the game's events in the present day, making her approximately 39 years old. This is unconfirmed by the developer.",
    href: "/characters/harlequin",
  },
  {
    question: "What happened to Columbina in The Freak Circus?",
    answer: "Columbina's fate depends on the ending achieved. In her standard ending, she continues dancing in the hallway indefinitely. In Columbina's Truth, she discovers the circus's true nature and the fourth door reveals a memory fragment suggesting she may be the orchestrator of the entire narrative loop. In the Corrupted Data ending, her sprite dissolves into static.",
    href: "/characters/columbina",
  },
  {
    question: "Does The Doctor have a good ending?",
    answer: "The Doctor does not have a traditionally 'good' ending. His standard ending (Medical Failure) results in him abandoning the patient. His secret ending (Doctor's Note) requires finding all 5 hidden medical files and reveals disturbing truths about the circus. The White Room ending, referenced in his dialogue but never found, may represent the closest to a 'good' outcome — but it remains unverified.",
    href: "/characters/doctor",
  },
  {
    question: "Which Freak Circus ending is canon?",
    answer: "The developer has not confirmed any ending as canon. The community debate centers on three possibilities: Columbina's Truth (most complete revelation), the Corrupted Data ending (found in unused files, possibly cut content), or the White Room ending (referenced but never found). The ambiguity appears intentional, suggesting the 'true' ending may require completing all routes in a specific order.",
    href: "/endings",
  },
  {
    question: "How do you unlock Pierrot's secret ending?",
    answer: "Pierrot's secret ending, Eternal Silence, requires refusing all dialogue for three consecutive scenes in Act III. This is not a passive ending — silence becomes a deliberate choice that breaks the game's narrative contract. The screen remains black for 4 minutes before credits roll, and post-credits narration references previous playthroughs.",
    href: "/characters/pierrot",
  },
  {
    question: "What is the relationship between Pierrot and Columbina?",
    answer: "Pierrot and Columbina share the most theorized relationship in The Freak Circus. In the Eternal Silence ending, Pierrot's narration references Columbina's hallway — a location he should not know about. Unused voice lines contain a hidden conversation between them. Columbina's Truth ending requires completing Pierrot's route first, suggesting an unspoken dependency.",
    href: "/characters",
  },
  {
    question: "Is The Freak Circus free to play?",
    answer: "Yes, The Freak Circus is available for free on itch.io. It runs directly in your browser without requiring download or installation. The game is rated 18+ for mature themes including psychological horror, body horror, and unsettling narrative content.",
    href: "/play-online",
  },
];

export default function MostSearchedQuestions() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Most Searched Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The questions players search most — targeting People Also Ask results
        </p>

        <div className="space-y-4">
          {questions.map((q, i) => (
            <details key={i} className="group bg-surface-container border border-outline/20">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-foreground hover:text-primary transition-colors list-none">
                <span>{q.question}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">[+]</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                <p className="mb-3">{q.answer}</p>
                <Link href={q.href} className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                  Read more →
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
