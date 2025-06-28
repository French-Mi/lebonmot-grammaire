// src/data/pronouns.ts

// --- Strukturen für die Übungstypen ---
export interface BaseExercise {
  type: string;
  instructions: string;
  shortTitle: string;
}

export interface FillInTheBlankQuestion { text_start: string; text_blank: string; text_end: string; explanation?: string; translation_de?: string; }
export interface FillInTheBlankExercise extends BaseExercise { type: 'fillInTheBlank'; questions: FillInTheBlankQuestion[]; answerOptions?: string[]; }

export interface SentenceOrderQuestion { parts: string[]; correctOrder: number[]; explanation?: string; translation_de?: string; }
export interface SentenceOrderExercise extends BaseExercise { type: 'sentenceOrder'; questions: SentenceOrderQuestion[]; }

export interface MatchPair { id: number; text: string; translation_de: string; }
export interface MatchPairsExercise extends BaseExercise { type: 'matchPairs'; sentenceStarts: MatchPair[]; relativeClauses: MatchPair[]; }

export interface IdentifyPartQuestion { sentence: string; prompt: string; answer: string; explanation?: string; }
export interface IdentifyPartExercise extends BaseExercise { type: 'identifyPart', questions: IdentifyPartQuestion[] }

export interface ClickTheWordQuestion { sentence: string; prompt: string; answer: string[]; explanation?: string; translation_de?: string; }
export interface ClickTheWordExercise extends BaseExercise { type: 'clickTheWord', questions: ClickTheWordQuestion[] }

export type Exercise = | FillInTheBlankExercise | SentenceOrderExercise | MatchPairsExercise | IdentifyPartExercise | ClickTheWordExercise;

// --- Haupt-Datenstruktur ---
export interface TopicLevel {
    level: number;
    uniqueId: string;
    title: string;
    description: string;
    hasTheory: boolean;
    exercises: Exercise[];
}
export interface PronounCategory { id:string; title: string; levels: TopicLevel[]; }
export interface PronounTopicData { id: string; title: string; categories: PronounCategory[]; }

// --- Die vollständigen, korrigierten und gesäuberten Daten ---
export const pronounData: PronounTopicData = {
  id: 'pronouns',
  title: 'Pronomen',
  categories: [
    {
      id: 'relativpronomen',
      title: 'A) Relativpronomen',
      levels: [
        {
          level: 1,
          uniqueId: 'rel-1',
          title: 'Qui / que / qu’',
          description: 'Lerne die Grundlagen der wichtigsten Relativpronomen.',
          hasTheory: true,
          exercises: [
            {
              type: 'fillInTheBlank',
              shortTitle: 'Lückentext',
              instructions: 'Fülle die Lücken mit dem korrekten Relativpronomen.',
              answerOptions: ['qui', 'que', "qu'"],
              questions: [
                { text_start: "L'homme ", text_blank: "qui", text_end: " parle est mon professeur.", explanation: "'qui' ist Subjekt (wer spricht?).", translation_de: "Der Mann, der spricht, ist mein Lehrer." },
                { text_start: "La pomme ", text_blank: "que", text_end: " je mange est rouge.", explanation: "'que' ist Objekt (was esse ich?).", translation_de: "Der Apfel, den ich esse, ist rot." },
                { text_start: "C'est le livre ", text_blank: "qu'", text_end: " il achète.", explanation: "'que' wird zu 'qu'' vor Vokal.", translation_de: "Das ist das Buch, das er kauft." },
                { text_start: "Les amis ", text_blank: "qui", text_end: " arrivent sont très sympathiques.", explanation: "'qui' ist das Subjekt des Nebensatzes (wer kommt an?).", translation_de: "Die Freunde, die ankommen, sind sehr sympathisch." },
                { text_start: "La chanson ", text_blank: "que", text_end: " tu écoutes est nouvelle.", explanation: "'que' ist das direkte Objekt (was hörst du?).", translation_de: "Das Lied, das du hörst, ist neu." },
                { text_start: "Voilà la femme ", text_blank: "qui", text_end: " travaille à la banque.", explanation: "'qui' ist das Subjekt des Nebensatzes (wer arbeitet?).", translation_de: "Das ist die Frau, die in der Bank arbeitet." }
              ]
            },
            {
              type: 'sentenceOrder',
              shortTitle: 'Satzteile ordnen',
              instructions: 'Bilde korrekte Sätze, indem du die Satzteile in die richtige Reihenfolge ziehst.',
              questions: [
                {
                  parts: ["est très interessant.", "que", "tu lis", "Le livre"],
                  correctOrder: [3, 1, 2, 0],
                  explanation: "Regel: 'que' ist das Objekt. Danach folgt ein neues Subjekt ('tu') und dann das Verb ('lis').",
                  translation_de: "Das Buch, das du liest, ist sehr interessant."
                },
                {
                  parts: ["que", "j'invite", "sont mes amis.", "Les gens"],
                  correctOrder: [3, 0, 1, 2],
                  explanation: "Regel: 'que' ist das Objekt. Danach folgt ein neues Subjekt ('j\\'') und dann das Verb ('invite').",
                  translation_de: "Die Leute, die ich einlade, sind meine Freunde."
                },
                {
                  parts: ["la porte.", "la clé", "Voilà", "qui", "ouvre"],
                  correctOrder: [2, 1, 3, 4, 0],
                  explanation: "Regel: 'qui' ist das Subjekt. Auf 'qui' folgt daher direkt das Verb ('ouvre').",
                  translation_de: "Hier ist der Schlüssel, der die Tür öffnet."
                }
              ]
            },
            {
              type: 'matchPairs',
              shortTitle: 'Paare bilden',
              instructions: 'Ziehe den passenden Relativsatz auf den richtigen Satzanfang.',
              sentenceStarts: [
                { id: 1, text: "Lucas est un garçon...", translation_de: "Lucas ist ein Junge..." },
                { id: 2, text: "J'aime le film...", translation_de: "Ich mag den Film..." },
                { id: 3, text: "Voilà la clé...", translation_de: "Hier ist der Schlüssel..." },
                { id: 4, text: "Elle adore les fleurs...", translation_de: "Sie liebt die Blumen..." }
              ],
              relativeClauses: [
                { id: 1, text: "...qui joue souvent avec sa sœur dans le parc.", translation_de: "...der oft mit seiner Schwester im Park spielt." },
                { id: 2, text: "...qu'on regarde ce soir.", translation_de: "...den wir heute Abend schauen." },
                { id: 3, text: "...qui ouvre la porte.", translation_de: "...der die Tür öffnet." },
                { id: 4, text: "...que son mari lui offre.", translation_de: "...die ihr Ehemann ihr schenkt." }
              ]
            }
          ]
        },
        {
          level: 2,
          uniqueId: 'rel-2',
          title: 'Qui / que / qu\' / où',
          description: 'Erweitere dein Wissen um das Relativpronomen für Orte.',
          hasTheory: true,
          exercises: [
            {
                type: 'fillInTheBlank',
                shortTitle: 'Lückentext',
                instructions: 'Fülle die Lücken mit qui, que, qu\' oder où.',
                answerOptions: ['qui', 'que', "qu'", 'où'],
                questions: [
                    { text_start: "La ville ", text_blank: "où", text_end: " j'habite est belle.", explanation: "'où' bezieht sich auf einen Ort (die Stadt).", translation_de: "Die Stadt, in der ich wohne, ist schön." },
                    { text_start: "Le chat ", text_blank: "qui", text_end: " dort est gris.", explanation: "'qui' ist das Subjekt (wer schläft?).", translation_de: "Die Katze, die schläft, ist grau." },
                    { text_start: "La robe ", text_blank: "que", text_end: " tu portes est jolie.", explanation: "'que' ist das Objekt (was trägst du?).", translation_de: "Das Kleid, das du trägst, ist hübsch." },
                    { text_start: "C'est le parc ", text_blank: "où", text_end: " nous jouons.", explanation: "'où' bezieht sich auf einen Ort (der Park).", translation_de: "Das ist der Park, wo wir spielen." },
                    { text_start: "Le gâteau ", text_blank: "qu'", text_end: " il mange est bon.", explanation: "'que' wird zu 'qu'' vor Vokal. Es ist das Objekt.", translation_de: "Der Kuchen, den er isst, ist gut." },
                    { text_start: "Le chien ", text_blank: "qui", text_end: " court vite est noir.", explanation: "'qui' ist das Subjekt (wer rennt?).", translation_de: "Der Hund, der schnell rennt, ist schwarz." }
                ]
            },
            {
                type: 'sentenceOrder',
                shortTitle: 'Satzteile ordnen',
                instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
                questions: [
                    { parts: ["C'est", "la ville", "où", "j'habite."], correctOrder: [0, 1, 2, 3], translation_de: "Das ist die Stadt, in der ich wohne." },
                    { parts: ["Le livre", "est rouge.", "qui", "est sur la table"], correctOrder: [0, 2, 3, 1], translation_de: "Das Buch, das auf dem Tisch ist, ist rot." },
                    { parts: ["tu aimes", "Le pull", "est bleu.", "que"], correctOrder: [1, 3, 0, 2], translation_de: "Der Pullover, den du magst, ist blau." }
                ]
            },
            {
                type: 'matchPairs',
                shortTitle: 'Paare bilden',
                instructions: 'Verbinde die Satzanfänge mit den passenden Relativsätzen.',
                sentenceStarts: [
                    { id: 1, text: "Voici le jardin...", translation_de: "Hier ist der Garten..." },
                    { id: 2, text: "C'est la chanson...", translation_de: "Das ist das Lied..." },
                    { id: 3, text: "Le garçon...", translation_de: "Der Junge..." },
                    { id: 4, text: "Le restaurant...", translation_de: "Das Restaurant..." }
                ],
                relativeClauses: [
                    { id: 1, text: "...où les fleurs sont belles.", translation_de: "...wo die Blumen schön sind." },
                    { id: 2, text: "...que j'écoute.", translation_de: "...das ich höre." },
                    { id: 3, text: "...qui dessine une maison.", translation_de: "...der ein Haus zeichnet." },
                    { id: 4, text: "...où nous mangeons ce soir.", translation_de: "...wo wir heute Abend essen." }
                ]
            }
          ]
        }
      ]
    },
    {
      id: 'objektpronomen',
      title: 'B) Objektpronomen',
      levels: [
        {
          level: 1,
          uniqueId: 'obj-1',
          title: 'Objekte erkennen',
          description: 'Identifiziere direkte und indirekte Objekte in einem Satz.',
          hasTheory: true,
          exercises: [{
            type: 'clickTheWord',
            shortTitle: 'Objekte auswählen',
            instructions: 'Klicke die Wörter an, die zum gesuchten Objekt gehören.',
            questions: [
              { sentence: "Le garçon mange une pomme.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "pomme"], translation_de: "Der Junge isst einen Apfel." },
              { sentence: "Je donne le livre à mon frère.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "mon", "frère"], translation_de: "Ich gebe meinem Bruder das Buch." },
              { sentence: "Elle regarde la télévision.", prompt: "Wähle das direkte Objekt aus.", answer: ["la", "télévision"], translation_de: "Sie schaut Fernsehen." },
              { sentence: "Nous parlons à nos parents.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "nos", "parents"], translation_de: "Wir sprechen mit unseren Eltern." },
              { sentence: "Le professeur explique la leçon.", prompt: "Wähle das direkte Objekt aus.", answer: ["la", "leçon"], translation_de: "Der Lehrer erklärt die Lektion." },
              { sentence: "Tu écris une lettre à ta grand-mère.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "lettre"], translation_de: "Du schreibst deiner Großmutter einen Brief." },
              { sentence: "Tu écris une lettre à ta grand-mère.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "ta", "grand-mère"], translation_de: "Du schreibst deiner Großmutter einen Brief." },
              { sentence: "La mère lit une histoire à son enfant.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "histoire"], translation_de: "Die Mutter liest ihrem Kind eine Geschichte vor." },
              { sentence: "Le professeur donne les livres aux élèves.", prompt: "Wähle das indirekte Objekt aus.", answer: ["aux", "élèves"], translation_de: "Der Lehrer gibt den Schülern die Bücher." },
              { sentence: "Le professeur donne les livres aux élèves.", prompt: "Wähle das direkte Objekt aus.", answer: ["les", "livres"], translation_de: "Der Lehrer gibt den Schülern die Bücher." },
            ]
          }]
        },
        { level: 2, uniqueId: 'obj-2', title: 'Direktes Objekt ersetzen', description: 'Übe das Ersetzen und die korrekte Satzstellung.', hasTheory: false, exercises: [] },
        { level: 3, uniqueId: 'obj-3', title: 'Indirektes Objekt ersetzen', description: 'Übe das Ersetzen und die korrekte Satzstellung.', hasTheory: false, exercises: [] },
        { level: 4, uniqueId: 'obj-4', title: 'Gemischte Objekte', description: 'Wende direkte und indirekte Objektpronomen an.', hasTheory: false, exercises: [] },
      ]
    }
  ]
};
