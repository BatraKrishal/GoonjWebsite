const slugifyEventName = (name) =>
  name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const categoryConfig = [
  {
    name: "Dance",
    color: "dance",
    rotation: "md:rotate-[-8deg] rotate-0",
    summary:
      "Choreography, freestyle battles, cinematic routines and role-reversal performances built for crowd energy.",
    events: [
      "Classical Dance",
      "Western Dance",
      "Bollywood Tadka",
      "Oppo",
      "Street Cypher",
    ],
  },
  {
    name: "Theatre",
    color: "theatre",
    rotation: "md:rotate-[8deg] rotate-0",
    summary:
      "Silent storytelling, solo acting and street theatre shaped around expression, voice and social impact.",
    events: ["Mime", "Mono Act", "Nukkad Natak"],
  },
  {
    name: "Lifestyle",
    color: "lifestyle",
    rotation: "md:rotate-[-8deg] rotate-0",
    summary:
      "Stage presence, styling, chemistry and character presentation drive the fashion-and-personality block.",
    events: ["Campus Icon", "Ramp Walk"],
  },
  {
    name: "Music",
    color: "music",
    rotation: "md:rotate-[8deg] rotate-0",
    summary:
      "Band performances and vocal sets bring the fest's live sound to the front.",
    events: ["Rock And Roll", "Sargam"],
  },
  {
    name: "Fine Art + Literary",
    color: "fineart",
    rotation: "md:rotate-[-8deg] rotate-0",
    summary:
      "From visual craft to argument and verse, this lineup brings together the fest's idea-led competitions.",
    events: [
      "Madhubani Art",
      "Calligraphy",
      "Graffiti",
      "Debate",
      "Poetry",
      "Literary Courtroom",
      "Fandom Trivia",
    ],
  },
];

const rawEvents = [
  {
    name: "Mime",
    category: "Theatre",
    color: "theatre",
    summary:
      "A silent team performance built on body language, facial expression and non-verbal storytelling.",
    description:
      "Mime asks teams to communicate a full idea without dialogue, relying only on action, timing, expression and coordinated movement.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Team size: 5 to 8 members.",
      "Performance time: 3 to 5 minutes, plus 1 minute for stage clearance.",
      "Performance must remain completely silent. Lip-syncing, spoken dialogue and verbal sounds are not allowed.",
      "Background music or sound effects may be used only as support and must not contain dialogue.",
      "Unwanted materials like colours are prohibited on stage.",
      "Offensive, obscene or disrespectful themes and gestures lead to disqualification.",
      "Extra time may be allowed in case of technical faults.",
    ],
    judgingCriteria: [
      "Facial expressions and body language",
      "Synchronization and team coordination",
      "Creativity and concept presentation",
      "Clarity of message",
      "Overall impact and audience engagement",
    ],
    notes: [],
  },
  {
    name: "Classical Dance",
    category: "Dance",
    color: "dance",
    summary:
      "An individual stage performance rooted in recognized Indian classical dance forms.",
    description:
      "This event focuses on grace, abhinaya, rhythm and discipline through classical storytelling and traditional movement vocabulary.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Only recognized Indian classical dance forms are allowed.",
      "Costume and makeup should match the chosen form.",
      "Performance should be 3 to 4 minutes, with 1 minute for stage clearance.",
      "Outfits must be arranged by the participant or team. No vulgarity is allowed.",
      "Songs must be submitted to the core committee one day before the event.",
      "Extra time may be given in case of technical faults.",
      "Judges' decision is final and binding.",
    ],
    judgingCriteria: [
      "Technique and posture",
      "Expressions (abhinaya)",
      "Presentation and coordination",
      "Audience impact",
      "Overall performance",
    ],
    notes: [],
  },
  {
    name: "Western Dance",
    category: "Dance",
    color: "dance",
    summary:
      "A group performance event centered on rhythm, coordination, expression and stage coverage.",
    description:
      "Western Dance rewards energetic choreography, clean execution and team chemistry while maintaining stage discipline.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Team size: 7 to 14 members.",
      "Props are allowed, but no obscene act may be performed.",
      "Performance duration: 6 to 8 minutes, plus 1 minute for stage clearance.",
      "Dress code must be decent and in good taste; vulgarity is not tolerated.",
      "Songs must be submitted to the core committee one day prior to the event.",
      "Extra time may be provided in case of technical faults.",
    ],
    judgingCriteria: [
      "Audience impact",
      "Facial expressions",
      "Execution",
      "Stage coverage",
      "Coordination and teamwork",
      "Overall performance",
    ],
    notes: [],
  },
  {
    name: "Bollywood Tadka",
    category: "Dance",
    color: "dance",
    summary:
      "A branch-based cinematic performance built around a pre-assigned Bollywood film.",
    description:
      "Bollywood Tadka blends choreography, dialogue, costume and character presentation into a film-inspired group act.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Each branch must have a minimum of 7 and a maximum of 15 members.",
      "Act duration should be between 10 and 15 minutes.",
      "Branches must perform the movie assigned to them beforehand.",
      "Props and appropriate film dialogue are allowed.",
      "Audio tracks must be submitted to the tech team at least one day before the event.",
      "Vulgarity, offensive content and political references are strictly prohibited.",
      "Judges' decision is final. Technical faults may earn extra time.",
    ],
    judgingCriteria: [
      "Lasting emotional impact",
      "Expressive emotions",
      "Effective dialogue delivery",
      "Enhanced character appearance",
      "Outstanding overall performance",
    ],
    notes: [
      "Branch movie allocations: MechProz – Don, Magnum AI – Badshah, Ecris – Coolie No. 1, Civicus – Raja Hindustani, Soft Warriors – Sholay, Apollo – Karan Arjun, Genesis – Mela.",
    ],
  },
  {
    name: "Oppo",
    category: "Dance",
    color: "dance",
    summary:
      "A role-reversal dance competition where pairs perform in opposite gender roles.",
    description:
      "Oppo focuses on transformation through costume, movement, expression and dance style while clearly presenting the reversal concept.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Only one pair is allowed per branch.",
      "Time limit: 3 to 5 minutes.",
      "Songs must be submitted to the core committee a day before the event.",
      "Role reversal must be clearly reflected in costume and performance.",
      "Costumes must be decent and follow college decorum.",
      "Vulgar or inappropriate content is prohibited.",
      "Judges' decision is final.",
    ],
    judgingCriteria: [
      "Costume and overall presentation",
      "Dance performance and energy",
      "Creativity and concept",
      "Stage presence",
      "Audience engagement",
    ],
    notes: [],
  },
  {
    name: "Mono Act",
    category: "Theatre",
    color: "theatre",
    summary:
      "A solo dramatic performance where one participant carries the full character or situation on stage.",
    description:
      "Mono Act tests acting, voice modulation, expression and confidence through an individual performance rooted in character portrayal.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Time limit: 2 to 3 minutes.",
      "Acts should be based on 70s, 80s or 90s characters; real-life characters are also allowed.",
      "Minimal props are allowed; elaborate setups are not.",
      "Recorded background music is allowed, but full dialogue lip-syncing is not.",
      "Participants must report 30 minutes before the event.",
      "Judges' decision is final and binding.",
    ],
    judgingCriteria: [
      "Acting skills",
      "Voice modulation and expressions",
      "Creativity and originality",
      "Stage presence",
      "Overall impact",
    ],
    notes: [],
  },
  {
    name: "Street Cypher",
    category: "Dance",
    color: "dance",
    summary:
      "A one-on-one inter-branch solo dance battle built around freestyle adaptability and stage confidence.",
    description:
      "Street Cypher moves from prepared showcase rounds to live battle rounds, rewarding technique, musicality and battle attitude.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Only one participant per branch is allowed.",
      "Participants must report at least 30 minutes before the event begins.",
      "Any dance style or genre is allowed.",
      "Obscene, vulgar or inappropriate content in music, gestures or props leads to immediate disqualification.",
      "Props are allowed but must be arranged and managed by the participant.",
      "Pre-recorded music for Round 1 must be submitted before the event.",
      "Round 1: prepared routine, maximum 2 minutes.",
      "Round 2: freestyle face-off battles, 45 seconds per participant.",
      "Round 3: final freestyle battle, 90 seconds per finalist.",
    ],
    judgingCriteria: [
      "Technique and skill",
      "Creativity and musicality",
      "Confidence and stage presence",
      "Battle attitude",
      "Overall impact",
    ],
    notes: [
      "Format: Round 1 showcase -> Top 4 advance -> Semi-final face-offs -> Final battle.",
    ],
  },
  {
    name: "Campus Icon",
    category: "Lifestyle",
    color: "lifestyle",
    summary:
      "A pair event combining introduction, dance, acting and movie-based quiz rounds.",
    description:
      "Campus Icon evaluates chemistry, confidence and versatility across multiple elimination rounds before crowning Mr. and Miss Goonj.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Each branch sends one pair.",
      "Round 1: 40-second character introduction per participant.",
      "Round 2: pair dance performance of 3 to 5 minutes; songs must be submitted one day before.",
      "Top 5 pairs move to the acting round.",
      "Round 3: 3-minute pair act based on the given theme; props are not allowed.",
      "Top 3 pairs move to the final quiz round.",
      "Round 4: complete-the-song quiz with no mobile phones or external help.",
    ],
    judgingCriteria: [
      "Confidence, clarity, fluency and stage presence in the introduction round",
      "Creativity, expressions and stage presence in the dance round",
      "Expressions, dialogue delivery, body language and coordination in the acting round",
      "Accuracy of answers in the final quiz round",
    ],
    notes: [
      "Winning pair is crowned Mr. Goonj and Miss Goonj.",
      "Branch themes are the same as Bollywood Tadka.",
    ],
  },
  {
    name: "Ramp Walk",
    category: "Lifestyle",
    color: "lifestyle",
    summary:
      "A themed runway storytelling event built around costume, props, visuals and coordinated presentation.",
    description:
      "Ramp Walk is staged as a narrative performance where teams present a theme through styling, movement and visual concept.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Team size: 5 to 11 members.",
      "Teams must create a story based on the assigned theme.",
      "Performance duration: 5 to 15 minutes.",
      "Teams present the story through dress, headgear, props and visuals.",
      "Costumes, props and headgear must be self-arranged.",
      "Audio tracks and visuals must be submitted to the core committee 24 hours before the event.",
      "Any vulgarity leads to direct disqualification.",
      "Judges' decision is final.",
    ],
    judgingCriteria: [
      "Excellent coordination",
      "Creative expression",
      "Strong visual appeal",
      "Lasting audience impact",
    ],
    notes: [
      "Branch themes: MechProz – Light Hope, Magnum AI – Space: Infinity, Ecris – Earth: Strength, Civicus – Shadow: Mystery, Soft Warriors – Fire: Passion, Apollo – Water: Fluidity, Genesis – Air: Freedom.",
    ],
  },
  {
    name: "Nukkad Natak",
    category: "Theatre",
    color: "theatre",
    summary:
      "A street-play competition designed to communicate social issues directly to the audience.",
    description:
      "Nukkad Natak emphasizes script, dialogue, voice clarity and collective stage energy in an open-format theatrical performance.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Team size: 8 to 15 members.",
      "Performance time: 7 to 10 minutes.",
      "Exceeding the time limit leads to negative marking.",
      "Theme must focus on a relevant social issue.",
      "Only minimal and easy-to-carry props are allowed.",
      "Vulgar, offensive or inappropriate content is prohibited.",
      "Teams must report at least 30 minutes before performance.",
      "Judges' decision is final and binding.",
    ],
    judgingCriteria: [
      "Acting and dialogue delivery",
      "Voice clarity and energy",
      "Creativity and script",
      "Team coordination",
      "Audience overall impact",
    ],
    notes: [
      "Branch topics include Sharafat Ka Aaina, Gender Equality, Siyasat Ki Haqiqat, Mental Health Awareness, Ashok Stambh and Double-Face Society.",
    ],
  },
  {
    name: "Rock And Roll",
    category: "Music",
    color: "music",
    summary:
      "A live rock performance event for bands working across Western Rock, Indian Rock and Pop Rock.",
    description:
      "Rock And Roll rewards instrument-driven stage presence, interpretation and coordinated live performance.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Team size: 4 to 7 members.",
      "Performance time limit: 3 to 5 minutes.",
      "Exceeding the time limit may lead to point deduction.",
      "Performance must fall under Rock Music, including Western Rock, Indian Rock or Pop Rock.",
      "Teams can use 3 to 6 instruments.",
      "Both acoustic and electronic instruments are allowed.",
      "Teams must report to stage 15 minutes before performance.",
      "Judges' decision is final and binding.",
    ],
    judgingCriteria: [
      "Vocal strength",
      "Coordination",
      "Stage presence",
      "Interpretation",
      "Overall impression",
    ],
    notes: [],
  },
  {
    name: "Sargam",
    category: "Music",
    color: "music",
    summary:
      "A solo or duo singing event open to Hindi Classical and Western music performances.",
    description:
      "Sargam balances vocal strength with musical interpretation and coordination with track or live instrumentation.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Open to solo and duo performances.",
      "Participants can perform Hindi Classical and Western music.",
      "Karaoke tracks and live instruments are allowed.",
      "Time duration: 3 to 5 minutes.",
      "Participants must report 15 minutes before their slot.",
      "Songs with offensive lyrics are not allowed.",
      "Judges' decision is final.",
    ],
    judgingCriteria: [
      "Vocal strength",
      "Coordination with track and instruments",
      "Stage presence",
      "Interpretation",
      "Overall impression",
    ],
    notes: [],
  },
  {
    name: "Madhubani Art",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "A traditional Indian folk art competition inspired by bright colour, pattern work and heritage visuals.",
    description:
      "Madhubani Art focuses on originality, detail and theme interpretation through the visual language of Mithila painting.",
    schedule: { date: "11 March 2026", timing: "To be announced", venue: "Auditorium" },
    guidelines: [
      "Only sheets will be provided; all other art materials must be arranged by participants.",
      "Participation limit: 2 students per branch.",
      "Theme: Echoes of the Golden Era, inspired by the 80s and 90s.",
      "Any unregistered participant is directly disqualified.",
      "Continuing after time or starting before official start can lead to disqualification.",
      "Religious insults, political propaganda, vulgar language and hate speech are prohibited.",
    ],
    judgingCriteria: [
      "Creativity",
      "Theme relevance",
      "Visual impact",
      "Originality",
      "Neatness and detailing",
    ],
    notes: [],
  },
  {
    name: "Calligraphy",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "A handwriting art event focused on stroke discipline, styling and presentation.",
    description:
      "Calligraphy evaluates decorative writing through letter formation, stroke quality and overall visual finish.",
    schedule: { date: "12 March 2026", timing: "To be announced", venue: "M.G. Auditorium" },
    guidelines: [
      "Only sheets will be provided; all other materials must be arranged by participants.",
      "Participation limit: 1 student per branch.",
      "Theme: Echoes of the Golden Era, inspired by the 80s and 90s.",
      "Any unregistered participant is directly disqualified.",
      "Continuing after time or starting before official start can lead to disqualification.",
      "Religious insults, political propaganda, vulgar language and hate speech are prohibited.",
    ],
    judgingCriteria: [
      "Letter formation and accuracy",
      "Stroke consistency",
      "Creativity and style",
      "Neatness and presentation",
      "Overall visual impact",
    ],
    notes: [],
  },
  {
    name: "Graffiti",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "A large-format visual expression event built around themed public-surface style art.",
    description:
      "Graffiti combines social messaging, visual identity and large-scale execution under a shared era-based theme.",
    schedule: { date: "8 March to 11 March 2026", timing: "To be announced", venue: null },
    guidelines: [
      "Paint and brushes will be provided by SAC.",
      "Participation limit: maximum 10 students per branch.",
      "Theme: Echoes of the Golden Era, inspired by the 80s and 90s.",
      "Each branch receives a sub-topic through a chit system.",
      "Equal space will be allotted to all branches on the spot.",
      "Any unregistered participant is directly disqualified.",
      "Continuing after time or starting before official start can lead to disqualification.",
      "Religious insults, political propaganda, vulgar language and hate speech are prohibited.",
    ],
    judgingCriteria: [
      "Creativity",
      "Theme relevance",
      "Visual impact",
      "Originality",
      "Neatness and detailing",
    ],
    notes: [
      "Possible sub-topics include lifestyle of the Golden Era, music and radio culture, cinema and theatre, fashion and aesthetics, art and literature, technology of the past, and values and traditions.",
    ],
  },
  {
    name: "Debate",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "A two-speaker branch debate with motion, rebuttal and structured cross-questioning.",
    description:
      "Debate rewards content quality, delivery precision and rebuttal sharpness under time pressure.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Each branch must have 2 participants: one for the motion and one against it.",
      "Time limit: 2 to 2.5 minutes.",
      "One mark is deducted for the first extra minute, then two marks for each further minute.",
      "Rebuttal and cross-questioning are allowed.",
      "Questioning must not exceed 1 minute; answers are restricted to 2 minutes.",
      "Medium of speech: English.",
      "Only flashcards are allowed on stage.",
      "Topic is yet to be decided.",
    ],
    judgingCriteria: [
      "Quality and relevance of content",
      "Eloquence and precision in delivery",
      "Rebuttal skills",
      "Time management",
      "Question handling",
    ],
    notes: [],
  },
  {
    name: "Poetry",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "An original poetry recitation event with separate Hindi and English participation tracks.",
    description:
      "Poetry values originality, recitation style, rhythm and expression within a short performance window.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Each branch nominates one participant for English and one for Hindi.",
      "An individual may compete in only one language category.",
      "Maximum recitation time: 2 minutes.",
      "Exceeding the time limit leads to deduction in marks.",
      "All poems must be original works created by participants.",
      "A soft copy of the poem must be submitted before performance.",
      "Plagiarism checks will be used; pre-published work leads to disqualification.",
      "Theme is to be decided.",
    ],
    judgingCriteria: [
      "Expression and body",
      "Delivery and presentation style",
      "Time management",
      "Sound and rhythm",
      "Originality and creativity",
    ],
    notes: [
      "Winners are declared separately for Hindi and English categories.",
    ],
  },
  {
    name: "Literary Courtroom",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "A branch-vs-branch courtroom argument event built on prosecution-versus-defence structure.",
    description:
      "Literary Courtroom combines literary interpretation, rebuttal, courtroom demeanor and structured team advocacy.",
    schedule: { date: null, timing: null, venue: null },
    guidelines: [
      "Each branch registers 2 members: Lead Counsel and Co-Counsel.",
      "No third member is allowed and no role-switching is permitted once the round begins.",
      "Each member must contribute at least 30% of total branch speaking time.",
      "Round 1 is an alliance round with prosecution and defence blocks.",
      "Each branch gets 1 primary speaking slot of 2 minutes and 1 rebuttal slot of 1 minute in Round 1.",
      "Top 2 branches from each block advance.",
      "Final courtroom format includes opening statements, evidence presentation, cross-examination, rebuttal, closing arguments and judges' questions.",
    ],
    judgingCriteria: [
      "Literary understanding",
      "Argument clarity",
      "Rebuttal",
      "Coordination within block",
      "Courtroom demeanor",
    ],
    notes: [
      "Round 1 duration is approximately 35 to 40 minutes.",
      "Final round duration is approximately 30 minutes.",
      "Character and charge reveal rules are controlled by organizers.",
      "Tie-breakers use sudden rebuttal rounds.",
    ],
  },
  {
    name: "Fandom Trivia",
    category: "Fine Art + Literary",
    color: "fineart",
    summary:
      "An inter-branch fandom quiz built around allotted entertainment universes and rapid on-stage responses.",
    description:
      "Fandom Trivia is a knowledge-based team event where each branch receives a fandom theme through lottery and answers theme-specific questions on stage.",
    schedule: { date: "To be announced", timing: null, venue: null },
    guidelines: [
      "Open to all branches; each branch may nominate one team.",
      "Each team consists of 2 to 3 members.",
      "Fandom theme is allotted by lottery before Goonj and communicated 3 to 5 days in advance.",
      "Each team is asked 5 questions from its allotted fandom.",
      "Questions may be oral, visual or rapid-fire.",
      "Each question must be answered within 15 seconds.",
      "No passing of questions to other teams.",
      "Discussion is allowed only among team members during their turn.",
      "Mobile phones, smart devices and notes are strictly prohibited.",
    ],
    judgingCriteria: [
      "Accuracy of answers",
      "Promptness of response",
      "Team coordination",
      "Confidence and stage presence",
    ],
    notes: [
      "Illustrative fandom categories include superhero universes, fantasy and sci-fi, and anime and manga.",
      "Scoring: each correct answer gives +10 points; maximum score is 50.",
      "A sudden-death question is used in case of a tie.",
    ],
  },
];

const eventCatalog = rawEvents.map((event) => ({
  ...event,
  slug: slugifyEventName(event.name),
}));

const eventLookup = Object.fromEntries(
  eventCatalog.map((event) => [event.slug, event]),
);

const flavorlists = categoryConfig.map((category) => ({
  ...category,
  events: category.events,
}));

const nutrientLists = [
  { label: "Starts", amount: "08 Mar" },
  { label: "Runs", amount: "05 Days" },
  { label: "Events", amount: "19" },
  { label: "Ends", amount: "12 Mar" },
];

const cards = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];

export {
  cards,
  eventCatalog,
  eventLookup,
  flavorlists,
  nutrientLists,
  slugifyEventName,
};
