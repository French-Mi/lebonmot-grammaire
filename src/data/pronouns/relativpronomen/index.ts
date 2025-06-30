import type { PronounCategory } from '../types';

export const relativpronomenCategory: PronounCategory = {
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
              { text_start: "La pomme ", text_blank: "que", text_end: " je mange est rouge.", explanation: "'que' ist Objekt (was esse ich?).", translation_de: "Der Apfel, den ich esse, ist rot." }
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
                  { text_start: "Le chat ", text_blank: "qui", text_end: " dort est gris.", explanation: "'qui' ist das Subjekt (wer schläft?).", translation_de: "Die Katze, die schläft, ist grau." }
              ]
          }
        ]
      }
    ]
  };
