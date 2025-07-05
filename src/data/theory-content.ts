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

interface PronounTableRow {
    pronoun: string;
    replaces: string;
    example: TheoryExample;
}

interface PositioningRules {
    title: string;
    rules: string[];
}

interface DualTable {
  title: string;
  rule: string;
  forms: { pronoun: string, meaning: string }[];
}

export interface TheoryContent {
  title: string;
  intro: string;
  comparisonTable?: {
    headers: string[];
    rows: ComparisonTableRow[];
    examples?: TheoryExample[][];
  };
  pronounTable?: {
      headers: string[];
      rows: PronounTableRow[];
  };
  dualTable?: {
      left: DualTable,
      right: DualTable
  };
  summary?: SummaryItem[];
  footnote?: string;
  positioningRules?: PositioningRules;
  customExamples?: {
    title: string;
    items: TheoryExample[];
  }[];
  orderChart?: {
      headers: string[];
  };
}

const newPositioningRules: PositioningRules = {
    title: 'Satzstellung',
    rules: [
        'Die Objektpronomen stehen vor dem Infinitiv (wenn es einen gibt), sonst vor dem konjugierten Verb.',
        'Negation: Die Negation umschließt immer das konjugierte Verb. Steht ein Objektpronomen vor dem konjugierten Verb, ist es mit diesem verbunden und wird somit in die Negationsklammer eingeschlossen.'
    ]
};

const pronounOrderChartData = {
    headers: [
        "me / m'<br>te / t'<br>nous<br>vous",
        "le<br>la<br>l'<br>les",
        "lui<br>leur",
        "y",
        "en"
    ]
};

export const theoryData: Record<string, TheoryContent> = {
  'rel-1': {
    title: "Relativpronomen: qui / que / qu'",
    intro: "Mit den Relativpronomen «qui» und «que» kann man nähere Angaben zu Personen oder Sachen machen. Sie leiten einen Relativsatz ein und können sowohl für männliche, als auch für weibliche Nomen im Singular oder Plural stehen.",
    comparisonTable: {
      headers: ["", "qui", "que / qu'"],
      rows: [
        { category: 'Funktion', values: ['Subjekt des Relativsatzes', 'Direktes Objekt des Relativsatzes']},
        { category: 'Besonderheit', values: ['steht vor Vokal & Konsonant', "que: steht vor Konsonant<br>qu': steht vor Vokal"]},
        { category: 'Regel', values: ['... qui + <strong>Verb</strong>', '... que + <strong>Subjekt</strong> + Verb']},
      ],
       examples: [
        [
          { sentence: "C'est le garçon qui fait du foot.", speak: "C'est le garçon qui fait du foot.", translation: "- Das ist der Junge, der Fußball spielt." },
          { sentence: "C'est la fille qui fait du foot.", speak: "C'est la fille qui fait du foot.", translation: "- Das ist das Mädchen, das Fußball spielt." }
        ],
        [
          { sentence: "Le sport que je préfère, c'est le foot.", speak: "Le sport que je préfère, c'est le foot.", translation: "- Der Sport, den ich bevorzuge, ist der Fußball." },
          { sentence: "La musique que j'aime, c'est la musique pop.", speak: "La musique que j'aime, c'est la musique pop.", translation: "- Die Musik, die ich mag, ist Popmusik." },
          { sentence: "Le jour qu'on aime, c'est le jour de notre anniversaire.", speak: "Le jour qu'on aime, c'est le jour de notre anniversaire.", translation: "- Der Tag, den wir mögen, ist der Tag unseres Geburtstags." }
        ]
      ]
    }
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
        { category: 'Form / Besonderheit', values: ["", "Wird zu <code>qu'</code> vor Vokal oder stummem 'h'", ""] }
      ],
      examples: [
        [{ sentence: "C'est le garçon qui fait du foot.", speak: "C'est le garçon qui fait du foot.", translation: "- Das ist der Junge, der Fußball spielt." }],
        [{ sentence: "Le sport que je préfère, c'est le foot.", speak: "Le sport que je préfère", translation: "- Der Sport, den ich bevorzuge..." }],
        [{ sentence: "Voilà la maison où j'habite.", speak: "Voilà la maison où j'habite.", translation: "- Das ist das Haus, in dem ich wohne." }]
      ]
    },
    summary: [
      { term: "qui", definition: "steht vor dem Verb und bezieht sich auf eine Person oder Sache" },
      { term: "que / qu'", definition: "steht vor dem Subjekt und bezieht sich auf eine Person oder Sache" },
      { term: "où", definition: "steht vor dem Subjekt und bezieht sich auf eine Ortsangabe" }
    ]
  },
  'obj-1': {
    title: 'Objekte erkennen: Direkt vs. Indirekt',
    intro: "Um Objektpronomen richtig zu verwenden, musst du zuerst erkennen, ob es sich um ein direktes oder ein indirektes Objekt handelt. Hier sind die Hauptunterschiede:",
    comparisonTable: {
        headers: ['', 'Direktes Objekt', 'Indirektes Objekt'],
        rows: [
            { category: 'Regel', values: ['Das direkte Objekt folgt direkt auf das Verb.', 'Zwischen indirektem Objekt und dem Verb steht <strong>à</strong>.']},
            { category: 'Beispiel', values: ['regarder <strong>qn/qc</strong>', 'donner qc <strong>à qn</strong>']}
        ],
        examples: [
            [{ sentence: 'Je regarde la télé.', speak: 'Je regarde la télé.', translation: '- Ich schaue Fernsehen.' }],
            [{ sentence: 'Je donne le cadeau à mon frère.', speak: 'Je donne le cadeau à mon frère.', translation: '- Ich gebe meinem Bruder das Geschenk.'}]
        ]
    }
  },
  'obj-2': {
    title: 'Direkte Objektpronomen',
    intro: 'Direkte Objektpronomen ersetzen das direkte Objekt.',
    pronounTable: {
      headers: ["Pronomen", "Ersetzt...", "Beispielsatz"],
      rows: [
        { pronoun: "me / m'*", replaces: 'mich', example: { sentence: 'Il <strong>me</strong> voit.', speak: 'Il me voit.', translation: '(Er sieht mich.)' } },
        { pronoun: "te / t'*", replaces: 'dich', example: { sentence: 'Je <strong>te</strong> vois.', speak: 'Je te vois.', translation: '(Ich sehe dich.)' } },
        { pronoun: "le / l'*", replaces: 'ihn / es (mask.)', example: { sentence: 'Je vois le garçon. &rarr; Je <strong>le</strong> vois.', speak: 'Je le vois.', translation: '(Ich sehe den Jungen. &rarr; Ich sehe ihn.)' } },
        { pronoun: "la / l'*", replaces: 'sie / es (fem.)', example: { sentence: 'Je vois la fille. &rarr; Je <strong>la</strong> vois.', speak: 'Je la vois.', translation: '(Ich sehe das Mädchen. &rarr; Ich sehe sie.)' } },
        { pronoun: 'nous', replaces: 'uns', example: { sentence: 'Il <strong>nous</strong> voit.', speak: 'Il nous voit.', translation: '(Er sieht uns.)' } },
        { pronoun: 'vous', replaces: 'euch / Sie', example: { sentence: 'Je <strong>vous</strong> vois.', speak: 'Je vous vois.', translation: '(Ich sehe euch/Sie.)' } },
        { pronoun: 'les', replaces: 'sie (Plural)', example: { sentence: 'Je vois les enfants. &rarr; Je <strong>les</strong> vois.', speak: 'Je les vois.', translation: '(Ich sehe die Kinder. &rarr; Ich sehe sie.)' } }
      ]
    },
    footnote: "*) <strong>me, te, le, la</strong> werden vor einem Vokal oder stummem 'h' zu <strong>m', t', l'</strong> abgekürzt.",
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
  'obj-3': {
    title: 'Indirekte Objektpronomen',
    intro: 'Indirekte Objektpronomen ersetzen ein Nomen, das mit der Präposition "à" angeschlossen ist.',
    pronounTable: {
      headers: ["Pronomen", "Ersetzt...", "Beispielsatz"],
      rows: [
        { pronoun: "me / m'*", replaces: 'mir', example: { sentence: 'Il <strong>me</strong> donne le livre.', speak: 'Il me donne le livre.', translation: '(Er gibt mir das Buch.)' } },
        { pronoun: "te / t'*", replaces: 'dir', example: { sentence: 'Je <strong>te</strong> parle.', speak: 'Je te parle.', translation: '(Ich spreche mit dir.)' } },
        { pronoun: "lui", replaces: 'ihm / ihr', example: { sentence: 'Tu parles à Marie? &rarr; Tu <strong>lui</strong> parles.', speak: 'Tu lui parles.', translation: '(Sprichst du mit Marie? &rarr; Du sprichst mit ihr.)' } },
        { pronoun: 'nous', replaces: 'uns', example: { sentence: 'Elle <strong>nous</strong> montre les photos.', speak: 'Elle nous montre les photos.', translation: '(Sie zeigt uns die Fotos.)' } },
        { pronoun: 'vous', replaces: 'euch / Ihnen', example: { sentence: 'Je <strong>vous</strong> écris eine lettre.', speak: 'Je vous écris eine lettre.', translation: '(Ich schreibe euch/Ihnen einen Brief.)' } },
        { pronoun: 'leur', replaces: 'ihnen (Plural)', example: { sentence: 'Je parle à mes parents. &rarr; Je <strong>leur</strong> parle.', speak: 'Je leur parle.', translation: '(Ich spreche mit meinen Eltern. &rarr; Ich spreche mit ihnen.)' } }
      ]
    },
    footnote: "*) <strong>me</strong> und <strong>te</strong> werden vor einem Vokal oder stummem 'h' zu <strong>m'</strong> und <strong>t'</strong> abgekürzt.",
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
  'obj-4': {
    title: 'Gemischte Objekte: Direkt & Indirekt im Vergleich',
    intro: 'Wenn zwei Pronomen in einem Satz stehen, gibt es eine feste Reihenfolge. Siehe Tabelle unten.',
    dualTable: {
        left: {
            title: 'Direkte Objektpronomen',
            rule: 'ersetzen das direkte Objekt (Wen/Was?)',
            forms: [
                { pronoun: 'me / m\'', meaning: 'mich' },
                { pronoun: 'te / t\'', meaning: 'dich' },
                { pronoun: '<strong>le / la / l\'</strong>', meaning: 'ihn / sie / es' },
                { pronoun: 'nous', meaning: 'uns' },
                { pronoun: 'vous', meaning: 'euch / Sie' },
                { pronoun: '<strong>les</strong>', meaning: 'sie (Pl.)' },
            ]
        },
        right: {
            title: 'Indirekte Objektpronomen',
            rule: 'ersetzen das indirekte Objekt (Wem?)',
            forms: [
                { pronoun: 'me / m\'', meaning: 'mir' },
                { pronoun: 'te / t\'', meaning: 'dir' },
                { pronoun: '<strong>lui</strong>', meaning: 'ihm / ihr' },
                { pronoun: 'nous', meaning: 'uns' },
                { pronoun: 'vous', meaning: 'euch / Ihnen' },
                { pronoun: '<strong>leur</strong>', meaning: 'ihnen' },
            ]
        }
    },
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
  'obj-5': {
    title: "Das Objektpronomen «en»",
    intro: "Das Objektpronomen «en» bedeutet <i>davon, von dort, darüber</i>.<br><br>Als Pronomen vertritt <strong>en</strong> Ergänzungen mit der Präposition 'de':",
    comparisonTable: {
        headers: ["Regel", "Beispiel"],
        rows: [
            {
                category: "→ Nomen mit Teilungsartikel (de la, du, des...)",
                values: [
                    "Tu prends <strong>du fromage</strong>?<br>→ Oui, j’<strong>en</strong> prends.<br><small>(Nimmst du Käse? → Ja, ich nehme davon.)</small>"
                ]
            },
            {
                category: "→ direkte Objekte mit unbestimmtem Artikel oder Zahl",
                values: [
                    "Tu as <strong>une mobylette</strong>?<br>→ Oui, j’<strong>en</strong> ai une.<br><small>(Hast du ein Moped? → Ja, ich habe eins davon. Hinweis: un/une als Zahl bleibt erhalten!)</small>"
                ]
            },
            {
                category: "→ indirekte Objekte, die durch 'de' mit dem Verb verbunden sind (z.B. rêver de qc, parler de qc)",
                values: [
                    "Yva rêve <strong>des vacances</strong>?<br>→ Oui, elle <strong>en</strong> rêve tout le temps.<br><small>(Träumt Yva von den Ferien? → Ja, sie träumt die ganze Zeit davon.)</small>"
                ]
            }
        ]
    },
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
  'obj-6': {
    title: "Das Pronomen «y»",
    intro: "Das Pronomen «y» bedeutet meist <i>dort, da</i> oder <i>daran</i>.<br><br>Es ersetzt Ergänzungen, die mit der Präposition <strong>à</strong> oder einer anderen Ortspräposition (außer 'de') eingeleitet werden:",
    comparisonTable: {
        headers: ["Regel", "Beispiel"],
        rows: [
            {
                category: "→ Ortsangaben (mit à, en, sur, dans...)",
                values: [
                    "Tu vas <strong>à la piscine</strong>?<br>→ Oui, j’<strong>y</strong> vais.<br><small>(Gehst du ins Schwimmbad? → Ja, ich gehe dorthin.)</small>"
                ]
            },
            {
                category: "→ Indirekte Objekte mit 'à' (Sachen/Ideen)",
                values: [
                    "Tu penses <strong>à ton avenir</strong>?<br>→ Oui, j’<strong>y</strong> pense.<br><small>(Denkst du an deine Zukunft? → Ja, ich denke daran.)</small>"
                ]
            },
            {
                category: "→ ACHTUNG: Niemals für Personen!",
                values: [
                    "Je pense <strong>à Paul</strong>.<br>→ Je pense <strong>à lui</strong>.<br><small>(Ich denke an Paul. → Ich denke an ihn.)</small><br><strong style='color: #dc3545;'>Falsch: <span style='text-decoration: line-through;'>J'y pense.</span></strong>"
                ]
            }
        ]
    },
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
   'obj-7': {
    title: "Die Pronomen 'y' und 'en'",
    intro: "Wenn 'y' und 'en' zusammen in einem Satz vorkommen, gilt immer die Reihenfolge: <strong>y vor en</strong>. In dieser Lektion wiederholen wir die Regeln für beide und ihre korrekte Satzstellung.",
    dualTable: {
        left: {
            title: 'Das Objektpronomen «en»',
            rule: `Das Objektpronomen <strong>«en»</strong> bedeutet <i>davon, von dort, darüber</i>.<br><br>
                   Als Pronomen vertritt <strong>«en»</strong> Ergänzungen mit der Präposition <strong>de</strong>.<br><br>
                   <a href="/topic/pronouns/theory/obj-5">→ Link zur Theorie</a>`,
            forms: []
        },
        right: {
            title: 'Das Pronomen «y»',
            rule: `Das Pronomen <strong>«y»</strong> bedeutet meist <i>dort, da</i> oder <i>daran</i>.<br><br>
                   Als Pronomen ersetzt <strong>«y»</strong> Ergänzungen, die mit der Präposition <strong>à</strong> oder einer anderen <strong>Ortspräposition</strong> (außer 'de') eingeleitet werden.<br><br>
                   <a href="/topic/pronouns/theory/obj-6">→ Link zur Theorie</a>`,
            forms: []
        }
    },
    positioningRules: newPositioningRules,
    orderChart: pronounOrderChartData
  },
   'obj-8': {
    title: 'Alle Objektpronomen: Übersicht',
    intro: 'Hier werden alle Regeln zur Satzstellung und zur Reihenfolge der Pronomen untereinander kombiniert.',
     positioningRules: newPositioningRules,
     orderChart: pronounOrderChartData
  }
};
