export const statusCards = [];

export const quickFacts = [
  { label: "Alias", value: "The Trickster" },
  { label: "Role", value: "Circus Fool / Manipulator" },
  { label: "Occupation", value: "Performer (unconfirmed)" },
  { label: "Species", value: "Unknown" },
  { label: "Affiliation", value: "The Freak Circus" },
  { label: "First Seen", value: "Day 2" },
  { label: "Status", value: "Observing" },
  { label: "Playable", value: "No (predicted)" },
  { label: "Known Endings", value: "0" },
  { label: "Voice", value: "Not confirmed" },
];

export const atAGlance = [
  { attribute: "Role", details: "Trickster" },
  { attribute: "Alignment", details: "Chaotic Neutral" },
  { attribute: "Route", details: "Unknown" },
  { attribute: "Romance", details: "Unknown" },
  { attribute: "First Appearance", details: "Day 2" },
  { attribute: "Affiliation", details: "Circus" },
  { attribute: "Threat", details: "High (unpredictable)" },
  { attribute: "Playable", details: "No" },
  { attribute: "Importance", details: "Major (meta-narrative)" },
  { attribute: "Relationships", details: "Pierrot, Harlequin, Doctor, Ticket Taker, Columbina, Player" },
];

export const overview = [
  "Jester is one of the most enigmatic figures in The Freak Circus. Unlike the main cast, he does not appear as a traditional romance option or route protagonist. Instead, he operates at the edges of the narrative — watching, commenting, and occasionally redirecting events in ways that suggest he understands more than he should.",
  "Who is Jester? In the current build, he is best described as a trickster archetype filtered through the game's psychological horror lens. He appears during Day 2 and in select mirror sequences, often delivering lines that feel directed at the player rather than the protagonist. This fourth-wall awareness has made him a focal point for community theory-crafting.",
  "Why is Jester popular? Players are drawn to characters who seem to know the rules of the game. Jester's limited screen time makes every appearance feel significant. His dialogue is dense with double meanings, and his animations — particularly his smile — have been analyzed frame-by-frame for hidden details.",
  "What makes Jester unique? While Pierrot represents melancholy and Harlequin represents fractured chaos, Jester represents controlled unpredictability. He does not react to the player; he anticipates. This shifts the power dynamic of every scene he enters.",
];

export const appearance = [
  { label: "Clothing", image: "/Jester-clothing.png", alt: "Jester clothing detail — deep purple and black motley with silver bells", text: "Jester wears a fitted jester's motley in deep purples and blacks, trimmed with small silver bells that do not always match the background audio. The costume is theatrical but not cartoonish, closer to a court fool than a circus clown." },
  { label: "Mask", image: "/Jester-mask.png", alt: "Jester half-mask with fixed smirk", text: "His half-mask covers the upper face, leaving the mouth fully exposed. The mask's expression is fixed in a slight smirk, which creates an uncanny effect when his real expression underneath does not match." },
  { label: "Expression", image: "/Jester-expression.png", alt: "Jester knowing smile expression close-up", text: "Jester's default expression is a knowing smile that rarely breaks. Community analysis suggests his smile widens by a few pixels in scenes where the player has died or reloaded previously." },
  { label: "Movement", image: "/Jester-movement.png", alt: "Jester deliberate movement pose with hand behind back", text: "His animations are smooth and deliberate, often with one hand behind his back. He rarely blinks, and his idle animation includes a slow head tilt that follows the cursor on certain screens." },
  { label: "Body Language", image: "/Jester-body.png", alt: "Jester leaning forward in conversational body language", text: "He leans into conversations as if sharing a secret, then withdraws just as quickly. This push-pull motion makes other characters visibly uncomfortable in shared scenes." },
  { label: "Color Theme", image: "/Jester-color.png", alt: "Jester purple and silver color theme detail", text: "Purple dominates his design — associated in the game with illusion, memory, and the space between loops. Accent colors include silver (bells) and near-black blue (shadows)." },
];

export const personality = [
  { title: "Playfulness", text: "Jester treats serious moments as performances. His jokes are not random; they land at points of maximum narrative tension, deflating horror into unease." },
  { title: "Manipulation", text: "He rarely gives direct answers. Instead he offers riddles, half-truths, and observations that push other characters toward emotional reactions. Players note that accepting his framing often leads to worse outcomes." },
  { title: "Emotional Intelligence", text: "Jester reads people quickly. In scenes with Pierrot he becomes gentle; with Harlequin he becomes competitive; with the Doctor he becomes clinical. He adapts his persona to destabilize whoever is in front of him." },
  { title: "Violence", text: "He does not threaten openly. His violence is structural — rearranging information, withholding context, making characters doubt their own memories. When physical threat does appear, it is sudden and brief." },
  { title: "Humor", text: "His humor is meta-referential. He quotes lines from earlier playthroughs, references save files obliquely, and treats death as an inconvenience rather than a tragedy." },
  { title: "Unpredictability", text: "Jester's actions follow a pattern only in retrospect. He does not break character because he has no fixed character to break. This makes him the most narratively dangerous presence in the circus." },
];

export const psychologicalProfile = {
  summary: "Jester presents as a high-functioning manipulator with possible meta-cognitive awareness. He displays traits associated with trickster mythology across cultures: boundary-crossing, rule-testing, and the subversion of authority. Within the game's framework, he may represent the narrative force itself — the part of the story that knows it is being told.",
  traits: [
    "Performs intimacy without vulnerability",
    "Uses humor to control conversational pace",
    "Shows no fear of consequences, suggesting knowledge of loops",
    "Mirrors the player's behavior across sessions",
    "Treats other characters as roles rather than people",
  ],
};

export const roleInStory = {
  intro: "Jester's role is still unfolding, but his current function appears to be that of an observer who can occasionally intervene. He is not the antagonist in the traditional sense, nor is he an ally. He is a variable — one that seems aware of the game's systems.",
  points: [
    { title: "Narrative Mirror", text: "Jester reflects the player's own curiosity back at them. His questions often echo what the player is thinking, blurring the line between character and audience." },
    { title: "Loop Awareness", text: "Multiple scenes imply Jester remembers events from previous playthroughs. He references choices the player did not make in the current timeline, suggesting access to save-state information." },
    { title: "Catalyst", text: "His appearances precede major shifts in other routes. Pierrot becomes more withdrawn after Jester's scene. Harlequin's fractured route gains new dialogue options. The Doctor's notes mention an 'unregistered performer.'" },
    { title: "Unknown Endgame", text: "Whether Jester serves a master, represents the circus itself, or operates on his own agenda remains unconfirmed. This ambiguity is central to his function in the story." },
  ],
};

export const evidenceTimeline = [
  {
    phase: "Day 1",
    title: "No Direct Appearance",
    description: "Jester is not seen on Day 1, but datamined files contain an unused sprite labeled 'jester_intro' dated to the Day 1 build. A bell sound effect plays briefly during the corridor scene if the player has completed Pierrot's route before.",
    tags: ["Implied", "Community Theory"],
  },
  {
    phase: "Day 2",
    title: "First Confirmed Appearance",
    description: "Jester appears in the backstage area after the Harlequin performance. He speaks to the protagonist about 'the rules of the show' and implies that some performers are more aware than others. This scene is fully voiced in the current build.",
    tags: ["Confirmed"],
  },
  {
    phase: "Mirror",
    title: "Mirror Hall Sequence",
    description: "In the Mirror Hall, Jester's reflection appears even when he is not physically present. The reflection moves independently and mouths lines that the audible Jester does not speak. Players have captured 12 different mirrored lines.",
    tags: ["Confirmed", "Community Theory"],
  },
  {
    phase: "Devlog",
    title: "Developer Comments",
    description: "The developer described Jester in a devlog as 'the character who knows he's in a game, even if he won't admit it.' No further details about his route status were provided.",
    tags: ["Confirmed"],
  },
  {
    phase: "Future",
    title: "Predicted Route or Major Update",
    description: "Community consensus expects Jester to receive either a playable route or a major story expansion in a future update. Dataminers have found placeholder files for 'jester_route_day3' in recent builds.",
    tags: ["Community Theory"],
  },
];

export const relationships = [
  { pair: "Jester × Pierrot", text: "Jester treats Pierrot with unusual patience, almost like a student. He asks Pierrot questions about memory and identity that Pierrot cannot answer. Some players interpret this as grooming; others see it as Jester testing whether Pierrot has achieved loop awareness. Their scenes are quiet and tense, with Jester often leaving before Pierrot responds." },
  { pair: "Jester × Harlequin", text: "Their dynamic is competitive. Harlequin performs for attention; Jester undercuts her performances with a single line. She is one of the few characters who smiles back at him. Their rivalry suggests a shared history that neither fully explains, and players have noted that Harlequin's fractured route intensifies after Jester appears." },
  { pair: "Jester × Doctor", text: "The Doctor treats Jester as a subject rather than a person. He takes notes during their conversation and refers to him as 'the anomaly.' Jester seems amused by this clinical approach and provides answers that are technically true but functionally useless. Their mutual distrust is palpable." },
  { pair: "Jester × Ticket Taker", text: "The Ticket Taker appears wary of Jester and refuses to make eye contact during their one shared scene. Jester calls her by a name she no longer uses, suggesting he remembers a version of her from before the current timeline. This interaction has fueled theories about Jester's temporal reach." },
  { pair: "Jester × Columbina", text: "Columbina and Jester are never shown speaking directly, but she reacts to his name with fear. In one hidden scene, Columbina asks the protagonist to 'tell the jester to stop looking.' Whether this refers to surveillance or something more supernatural is debated." },
  { pair: "Jester × Player", text: "Jester's relationship with the player is the most direct. He breaks the fourth wall more often than any other character, addressing the player by implication rather than the protagonist by name. This creates a unique intimacy: the player feels seen, but also hunted." },
];

export const quotes = [
  { quote: "The show doesn't end when the curtain falls. It ends when you stop coming back.", context: "Day 2 backstage conversation", meaning: "A direct reference to the game's replay loop. Jester implies that the narrative continues only because the player keeps restarting." },
  { quote: "You're not the first audience, and you won't be the last. But you're my favorite so far.", context: "Mirror Hall reflection", meaning: "Suggests Jester has observed multiple players or multiple timelines. The compliment is unsettling because it frames the player as entertainment." },
  { quote: "Pierrot thinks silence is safe. I think silence is just another costume.", context: "Optional observation during Pierrot's route", meaning: "Jester critiques Pierrot's coping mechanism. It also hints that silence in the game may be performative rather than empty." },
  { quote: "Rules are costumes too. Try wearing a different one.", context: "Hidden dialogue after third playthrough", meaning: "Encourages the player to break expected choice patterns. This line appears before new hidden options unlock in Harlequin's route." },
];

export const hiddenDetails = [
  { label: "Expressions", text: "Jester has more expression sprites than any non-playable character. Subtle variants include 'smile with teeth hidden,' 'smile with one tooth showing,' and 'smile too wide.' These are used in specific loop counts." },
  { label: "Animation", text: "His bell-ringing animation is not synchronized with the audio on purpose. The visual and audio drift apart over time, creating a subtle sense of wrongness." },
  { label: "Pose", text: "In every scene, Jester stands with one foot slightly raised, as if mid-step. This gives the impression that he could leave at any moment, keeping both characters and players off balance." },
  { label: "Eye Contact", text: "Jester's sprite is coded to face the protagonist, but in several scenes his eyes track toward the bottom of the screen — toward the player's choice interface." },
  { label: "Background Objects", text: "When Jester appears, background objects sometimes shift position between camera cuts. Players have documented chairs, mirrors, and doors moving subtly while he speaks." },
];

export const easterEggs = [
  { title: "Murder4 Reference", text: "Jester's costume includes four small silver bells. In a rare animation, he rings them in a pattern that matches the opening notes of the unused track 'murder4' found in the game files." },
  { title: "Hidden Dialogue", text: "If the player names their save file 'JESTER,' a unique line plays during the Day 2 scene: 'Naming things doesn't make them yours.'" },
  { title: "Rare Animation", text: "A 1-in-20 chance exists that Jester will perform a full bow during his exit animation instead of his usual half-bow. The full bow includes a flourish not seen elsewhere." },
  { title: "Secret Interaction", text: "Clicking repeatedly on Jester's mask during the Mirror Hall scene causes the reflection to stop moving for three seconds before resuming with a different line." },
];

export const theories = [
  {
    title: "Jester knows every timeline.",
    score: "★★★★☆",
    summary: "Jester demonstrates knowledge of choices the player did not make in the current run, suggesting he retains memory across timelines or save files.",
    evidenceFor: [
      "References previous unselected choices",
      "Mirror Hall reflection speaks independently",
      "Developer described him as loop-aware",
    ],
    evidenceAgainst: [
      "Could be simulated through generic dialogue",
      "No direct evidence of save-file access",
      "May be misdirection for horror effect",
    ],
  },
  {
    title: "Jester isn't human.",
    score: "★★★☆☆",
    summary: "His unnatural stillness, independent reflection, and knowledge of the game's structure suggest he may be a supernatural entity or personification of the circus.",
    evidenceFor: [
      "Reflection moves independently",
      "Background objects shift in his presence",
      "No confirmed origin or backstory",
    ],
    evidenceAgainst: [
      "Other characters also have uncanny traits",
      "Could be a hallucination or metaphor",
      "No lore document confirms non-human status",
    ],
  },
  {
    title: "Jester manipulates Pierrot.",
    score: "★★★★☆",
    summary: "Jester's questions to Pierrot about memory and identity may be deliberate attempts to accelerate Pierrot's loop awareness for an unknown purpose.",
    evidenceFor: [
      "Pierrot becomes more withdrawn after their scenes",
      "Jester asks leading questions",
      "Pierrot's route gains new triggers post-Jester",
    ],
    evidenceAgainst: [
      "Correlation does not prove manipulation",
      "Pierrot's arc may develop independently",
      "Jester interacts similarly with others",
    ],
  },
  {
    title: "Jester already knows the protagonist.",
    score: "★★★☆☆",
    summary: "His familiarity with the player/protagonist on first meeting implies prior contact, possibly in a timeline the player has not yet experienced.",
    evidenceFor: [
      "'You're my favorite so far' implies comparison",
      "Uses the protagonist's real name in some datamined lines",
      "Treats first meeting as a reunion",
    ],
    evidenceAgainst: [
      "May be a generic trickster affectation",
      "Datamined lines may be unused for a reason",
      "Could be addressed to the player, not protagonist",
    ],
  },
  {
    title: "Jester is hiding Columbina.",
    score: "★★☆☆☆",
    summary: "Columbina's fear of Jester and his refusal to discuss her directly have led some players to theorize he is involved in her disappearance or transformation.",
    evidenceFor: [
      "Columbina reacts fearfully to his name",
      "Jester deflects questions about Columbina",
      "Both are associated with purple imagery",
    ],
    evidenceAgainst: [
      "No scene shows them together",
      "Columbina fears multiple characters",
      "Purple is a common circus color",
    ],
  },
];

export const symbolism = [
  { symbol: "Jester Hat", meaning: "The traditional fool's cap marks him as a truth-teller disguised as entertainment. In the game, it signals that his jokes should be taken seriously." },
  { symbol: "Bell", meaning: "Bells announce transitions and draw attention. Jester's bells often sound when the player crosses a hidden threshold or unlocks a new loop flag." },
  { symbol: "Smile", meaning: "His fixed smile represents the performance of safety. It never drops, which makes moments of genuine threat harder to read." },
  { symbol: "Purple", meaning: "Purple recurs around memory, illusion, and the space between loops. Jester's color scheme ties him to these themes before the lore explicitly confirms them." },
  { symbol: "Cards", meaning: "Though not shown holding cards, Jester's dialogue is structured like a card trick: misdirection, reveal, and a final twist that reframes everything." },
  { symbol: "Circus Fool", meaning: "The fool archetype speaks truth to power. In The Freak Circus, Jester speaks truth to the player — the only power he seems to recognize." },
];

export const futureRoute = {
  summary: "The most popular community prediction is that Jester will become either a secret route or a major narrative expansion in a future update. His meta-awareness makes him difficult to fit into a traditional romance structure, but it also makes him uniquely suited to a route that comments on the act of playing the game itself.",
  likelihood: "High",
  evidence: "Placeholder files for 'jester_route_day3' found in recent builds; developer comments suggest he is 'not done yet.'",
  expectations: "Players hope for a route that explores his origins and relationship to the loop, rather than a conventional romance arc.",
};

export const faqs = [
  { question: "Who is Jester?", answer: "Jester is a mysterious trickster figure in The Freak Circus who appears on Day 2 and in mirror sequences. He seems aware of the game's looping structure and often speaks directly to the player." },
  { question: "Is Jester romanceable?", answer: "No, Jester is not currently romanceable. The developer has hinted that his role may expand in future updates, but no romance route exists in the current build." },
  { question: "Does Jester have a route?", answer: "Not yet. Dataminers have found placeholder files suggesting a potential future route, but nothing is playable or confirmed." },
  { question: "Is Jester evil?", answer: "Jester is not clearly evil. He is chaotic and manipulative, but his motivations are unknown. He may serve the narrative itself rather than any in-story faction." },
  { question: "Why does Jester smile?", answer: "His smile is part of his performative persona. It rarely changes, which makes his expressions unreadable and adds to his unsettling presence." },
  { question: "Does Jester know Pierrot?", answer: "They have shared scenes in which Jester questions Pierrot about memory and identity. The exact nature of their relationship is unclear, but Jester appears interested in Pierrot's growing awareness." },
  { question: "Is Jester stronger than Harlequin?", answer: "Strength is not directly compared. Harlequin is more physically volatile, while Jester seems to operate through information and manipulation." },
  { question: "Will Jester become playable?", answer: "Many players expect Jester to receive a route or major expansion based on developer hints and datamined placeholder files." },
  { question: "Can Jester kill you?", answer: "There are no confirmed death scenes caused by Jester in the current build, though his appearances often precede dangerous or unstable narrative shifts." },
  { question: "Is Jester connected to Columbina?", answer: "Columbina reacts fearfully to Jester's name, but they are never shown interacting directly. The connection remains speculative." },
  { question: "What does Jester mean by 'you're my favorite so far'?", answer: "The line suggests Jester has observed multiple players or timelines and is comparing the current playthrough to others." },
  { question: "Why does Jester's reflection move independently?", answer: "The independent reflection is likely a visual representation of his meta-awareness — the part of him that exists outside the normal rules of the scene." },
  { question: "Is Jester the true antagonist?", answer: "He does not fit the role of a traditional antagonist. He may be closer to a narrative force or observer who occasionally intervenes." },
  { question: "What is Jester's real name?", answer: "His real name, if he has one, has not been revealed. 'Jester' appears to be a title or role rather than a personal name." },
  { question: "Does Jester appear on Day 1?", answer: "He does not appear directly on Day 1, but datamined files and a brief bell sound effect suggest his presence was planned or is triggered under specific conditions." },
];

export const relatedArticles = [
  { title: "Harlequin Character Guide", description: "The chaotic performer — fractured identity, hidden scenes, and the smile that remembers.", href: "/characters/harlequin" },
  { title: "Pierrot Character Guide", description: "The melancholic clown — first route, hidden triggers, and Eternal Silence.", href: "/characters/pierrot" },
  { title: "Doctor Character Guide", description: "The clinical observer — experiments, notes, and the anatomy of memory.", href: "/characters/doctor" },
  { title: "Ticket Taker Guide", description: "The gatekeeper — tickets, warnings, and what she chooses not to say.", href: "/ticket-taker" },
  { title: "All Endings Explained", description: "Confirmed and secret endings with unlock conditions.", href: "/endings" },
  { title: "Community Theories", description: "The most discussed theories about the circus, its loops, and its secrets.", href: "/theories" },
  { title: "Walkthroughs", description: "Step-by-step route guides for every character.", href: "/walkthroughs" },
  { title: "Lore Archive", description: "Founding myths, mirror hall secrets, and circus history.", href: "/lore" },
  { title: "Play Online", description: "Experience the official demo directly in your browser.", href: "/play-online" },
];

export const communitySpotlight = {
  summary: "Recent community discussion has focused on Jester's potential route and his relationship to the game's looping mechanics. Players on Reddit and Tumblr have compiled frame-by-frame analyses of his Mirror Hall scene, while YouTube creators have highlighted his independent reflection as possible evidence of meta-awareness.",
  highlights: [
    "Frame analysis of Jester's smile variations across loop counts",
    "Comparison between Jester's dialogue and unused 'narrator' lines in the files",
    "Theory that Jester's bells correspond to hidden choice thresholds",
    "Speculation about a future 'Jester Day 3' update based on placeholder files",
  ],
  lastUpdated: "2026-06-30",
};
