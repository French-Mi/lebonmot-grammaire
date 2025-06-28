// src/data/theory-content.ts

interface TheoryExample {
  sentence: string;
  speak: string;
  translation: string;
}

interface ComparisonTableRow {
  category: string;
  values: string[];
}

interface SummaryItem {
  term: string;
  definition: string;
}

interface TheoryContent {
  title: string;
  intro: string;
  rules?: any[];
  comparisonTable?: {
    headers: string[];
    rows: ComparisonTableRow[];
    examples: TheoryExample[][];
  };
  summary?: SummaryItem[];
}

export const theoryData: Record<string, TheoryContent> = {
  'rel-1': {
    title: "Relativpronomen: qui / que / qu'",
    intro: "Mit den Relativpronomen «qui» und «que» kann man nähere Angaben zu Personen oder Sachen machen. Sie leiten einen Relativsatz ein und können sowohl für männliche, als auch für weibliche Nomen im Singular oder Plural stehen.",
    rules: [
      {
        title: 'qui = Subjekt des Relativsatzes',
        subExplanation: ['(steht vor Vokal & Konsonant)'],
        rule: 'ein Verb folgt',
        examples: [
          {
            sentence: "C'est le garçon qui fait du foot.",
            speak: "C'est le garçon qui fait du foot.",
            translation: '- Das ist der Junge, der Fußball spielt.'
          },
          {
            sentence: "C'est la fille qui fait du foot.",
            speak: "C'est la fille qui fait du foot.",
            translation: '- Das ist das Mädchen, das Fußball spielt.'
          }
        ]
      },
      {
        title: "que / qu' = direktes Objekt des Relativsatzes",
        explanation: "que: steht vor Konsonant<br>qu': steht vor Vokal",
        rule: 'das Subjekt folgt',
        examples: [
          {
            sentence: "Le sport que je préfère, c'est le foot.",
            speak: "Le sport que je préfère, c'est le foot.",
            translation: '- Der Sport, den ich bevorzuge, ist der Fußball.'
          },
          {
            sentence: "La musique que j'aime, c'est la musique pop.",
            speak: "La musique que j'aime, c'est la musique pop.",
            translation: '- Die Musik, die ich mag, ist Popmusik.'
          },
          {
            sentence: "Le jour qu'on aime, c'est le jour de notre anniversaire.",
            speak: "Le jour qu'on aime, c'est le jour de notre anniversaire.",
            translation: '- Der Tag, den wir mögen, ist der Tag unseres Geburtstags.'
          }
        ]
      }
    ]
  },
  'rel-2': {
    title: "Relativpronomen: qui / que / qu' / où",
    intro: "Die Relativpronomen leiten Nebensätze ein und geben nähere Informationen zu einem Wort im Hauptsatz. Hier ist die Übersicht:",
    comparisonTable: {
      headers: ["Kategorie", "qui", "que / qu'", "où"],
      rows: [
        { category: 'Funktion im Satz', values: ["Subjekt des Relativsatzes", "Direktes Objekt des Relativsatzes", "Adverbialbestimmung des Ortes"] },
        { category: 'Bezieht sich auf', values: ["Personen oder Sachen", "Personen oder Sachen", "Ortsangaben (z.B. <i>la maison, le pays</i>)"] },
        { category: 'Deutsche Entsprechung', values: ["der, die, das (Nominativ)", "den, die, das (Akkusativ)", "wo, wohin, in/an dem/der"] },
        { category: 'Satzstruktur', values: ["<code>... qui + <strong>Verb</strong> + ...</code>", "<code>... que + <strong>Subjekt</strong> + Verb + ...</code>", "<code>... où + <strong>Subjekt</strong> + Verb + ...</code>"] },
        // HIER IST DIE ÄNDERUNG
        { category: 'Form / Besonderheit', values: ["", "Wird zu <code>qu'</code> vor Vokal oder stummem 'h'", ""] }
      ],
      examples: [
        [
          { sentence: "C'est le garçon qui fait du foot.", speak: "C'est le garçon qui fait du foot.", translation: "- Das ist der Junge, der Fußball spielt." },
        ],
        [
          { sentence: "Le sport que je préfère, c'est le foot.", speak: "Le sport que je préfère, c'est le foot.", translation: "- Der Sport, den ich bevorzuge, ist der Fußball." },
          { sentence: "Le jour qu'on aime...", speak: "Le jour qu'on aime...", translation: "- Der Tag, den wir mögen..." }
        ],
        [
          { sentence: "Voilà la maison où j'habite.", speak: "Voilà la maison où j'habite.", translation: "- Das ist das Haus, in dem ich wohne." },
          { sentence: "C'est la ville où je suis né(e).", speak: "C'est la ville où je suis né(e).", translation: "- Das ist die Stadt, in der ich geboren wurde." }
        ]
      ]
    },
    summary: [
      { term: "qui", definition: "steht vor dem Verb und bezieht sich auf eine Person oder Sache" },
      { term: "que / qu'", definition: "steht vor dem Subjekt und bezieht sich auf eine Person oder Sache" },
      { term: "où", definition: "steht vor dem Subjekt und bezieht sich auf eine Ortsangabe" }
    ]
  }
};
