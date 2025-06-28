// src/data/pronouns.ts

// --- Strukturen für die Übungstypen ---
export interface FillInTheBlankQuestion {
  text_start: string;
  text_blank: string;
  text_end: string;
  explanation?: string;
  translation_de?: string;
}
export interface FillInTheBlankExercise { type: 'fillInTheBlank'; instructions: string; questions: FillInTheBlankQuestion[]; }
export interface SentenceOrderQuestion { parts: string[]; correctOrder: number[]; explanation?: string; translation_de?: string; }
export interface SentenceOrderExercise { type: 'sentenceOrder'; instructions: string; questions: SentenceOrderQuestion[]; }
export interface MatchPair { id: number; text: string; translation_de: string; }
export interface MatchPairsExercise { type: 'matchPairs'; instructions: string; sentenceStarts: MatchPair[]; relativeClauses: MatchPair[]; }
export interface IdentifyPartQuestion { sentence: string; prompt: string; answer: string; explanation?: string; }
export interface IdentifyPartExercise { type: 'identifyPart', instructions: string, questions: IdentifyPartQuestion[] }
export interface TranslateExercise { type: 'translate', instructions: string }
export interface MultipleChoiceExercise { type: 'multipleChoice', instructions: string }
export type Exercise = | FillInTheBlankExercise | SentenceOrderExercise | MatchPairsExercise | IdentifyPartExercise | TranslateExercise | MultipleChoiceExercise;

// --- Haupt-Datenstruktur ---
export interface TopicLevel { level: number; uniqueId: string; title: string; description: string; exercises: Exercise[]; }
export interface PronounCategory { id:string; title: string; levels: TopicLevel[]; }
export interface PronounTopicData { id: string; title: string; categories: PronounCategory[]; }

// --- Die vollständigen, korrigierten und gesäuberten Daten ---
export const pronounData: PronounTopicData = {
  id: 'pronouns',
  title: 'Les Pronoms',
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
          exercises: [
            {
              type: 'fillInTheBlank',
              instructions: 'Fülle die Lücken mit dem korrekten Relativpronomen (qui, que oder qu\').',
              questions: [
                { text_start: "L'homme ", text_blank: "qui", text_end: " parle est mon professeur.", explanation: "'qui' wird verwendet, weil es das Subjekt des Nebensatzes ist (wer spricht?).", translation_de: "Der Mann, der spricht, ist mein Lehrer." },
                { text_start: "La pomme ", text_blank: "que", text_end: " je mange est rouge.", explanation: "'que' wird verwendet, weil es das direkte Objekt ist (wen oder was esse ich?).", translation_de: "Der Apfel, den ich esse, ist rot." },
                { text_start: "C'est le livre ", text_blank: "qu'", text_end: " il achète.", explanation: "'que' wird zu 'qu'' vor einem Vokal. Es ist das direkte Objekt (was kauft er?).", translation_de: "Das ist das Buch, das er kauft." },
                { text_start: "Les amis ", text_blank: "qui", text_end: " arrivent sont très sympathiques.", explanation: "'qui' ist das Subjekt des Nebensatzes (wer kommt an?).", translation_de: "Die Freunde, die ankommen, sind sehr sympathisch." },
                { text_start: "La chanson ", text_blank: "que", text_end: " tu écoutes est nouvelle.", explanation: "'que' ist das direkte Objekt (was hörst du?).", translation_de: "Das Lied, das du hörst, ist neu." },
                { text_start: "Voilà la femme ", text_blank: "qui", text_end: " travaille à la banque.", explanation: "'qui' ist das Subjekt des Nebensatzes (wer arbeitet?).", translation_de: "Das ist die Frau, die in der Bank arbeitet." }
              ]
            },
            {
              type: 'sentenceOrder',
              instructions: 'Bilde korrekte Sätze, indem du die Satzteile in die richtige Reihenfolge ziehst.',
              questions: [
                {
                  parts: ["est très intéressant.", "que", "tu lis", "Le livre"],
                  correctOrder: [3, 1, 2, 0],
                  explanation: "Regel: 'que' ist das Objekt. Danach folgt ein neues Subjekt ('tu') und dann das Verb ('lis').",
                  translation_de: "Das Buch, das du liest, ist sehr interessant."
                },
                {
                  parts: ["que", "j'invite", "sont mes amis.", "Les gens"],
                  correctOrder: [3, 0, 1, 2],
                  explanation: "Regel: 'que' ist das Objekt. Danach folgt ein neues Subjekt ('j\'') und dann das Verb ('invite').",
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
        { level: 2, uniqueId: 'rel-2', title: 'Qui / que / qu\' / où', description: 'Erweitere dein Wissen um das Relativpronomen für Orte.', exercises: [] }
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
          exercises: [{
            type: 'identifyPart',
            instructions: 'Lies den Satz und gib den gefragten Satzteil ein.',
            questions: [
              { sentence: "Le garçon mange une pomme.", prompt: "Was ist das direkte Objekt?", answer: "une pomme", explanation: "Das direkte Objekt antwortet auf die Frage 'Wen oder was?'. Wen oder was isst der Junge? -> une pomme" },
              { sentence: "Je donne le livre à mon ami.", prompt: "Was ist das indirekte Objekt?", answer: "à mon ami", explanation: "Das indirekte Objekt antwortet auf die Frage 'Wem?'. Wem gebe ich das Buch? -> à mon ami" },
              { sentence: "Elle regarde la télévision.", prompt: "Was ist das direkte Objekt?", answer: "la télévision", explanation: "Wen oder was schaut sie? -> la télévision" },
              { sentence: "Nous parlons à nos parents.", prompt: "Was ist das indirekte Objekt?", answer: "à nos parents", explanation: "Wem sprechen wir? -> à nos parents" },
              { sentence: "Le professeur explique la leçon.", prompt: "Was ist das direkte Objekt?", answer: "la leçon", explanation: "Wen oder was erklärt der Lehrer? -> la leçon" },
              { sentence: "Tu écris une lettre à ta grand-mère.", prompt: "Was ist das indirekte Objekt?", answer: "à ta grand-mère", explanation: "Wem schreibst du einen Brief? -> à ta grand-mère" }
            ]
          }]
        },
        { level: 2, uniqueId: 'obj-2', title: 'Direktes Objekt ersetzen', description: 'Übe das Ersetzen und die korrekte Satzstellung.', exercises: [] },
        { level: 3, uniqueId: 'obj-3', title: 'Indirektes Objekt ersetzen', description: 'Übe das Ersetzen und die korrekte Satzstellung.', exercises: [] },
        { level: 4, uniqueId: 'obj-4', title: 'Gemischte Objekte', description: 'Wende direkte und indirekte Objektpronomen an.', exercises: [] },
        { level: 5, uniqueId: 'obj-5', title: 'Das Pronomen "en"', description: 'Lerne, "en" korrekt zu verwenden.', exercises: [] },
        { level: 6, uniqueId: 'obj-6', title: 'Das Pronomen "y"', description: 'Lerne, "y" korrekt zu verwenden.', exercises: [] },
        { level: 7, uniqueId: 'obj-7', title: '"en" und "y" gemischt', description: 'Unterscheide zwischen "en" und "y".', exercises: [] },
        { level: 8, uniqueId: 'obj-8', title: 'Alle Pronomen gemischt', description: 'Ein umfassender Test aller Pronomen.', exercises: [] },
        { level: 9, uniqueId: 'obj-9', title: 'Imperativ mit Pronomen', description: 'Bilde Befehlsätze mit Objektpronomen.', exercises: [] }
      ]
    }
  ]
};
