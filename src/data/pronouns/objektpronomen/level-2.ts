import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level2: Level = {
    level: 2,
    uniqueId: 'obj-2',
    title: 'Direktes Objekt ersetzen',
    description: 'Übe das Ersetzen und die korrekte Satzstellung.',
    hasTheory: true,
    exercises: [
      {
        type: 'fillInTheBlank',
        shortTitle: 'Objekt ersetzen',
        instructions: "Ersetze das Nomen durch das passende Pronomen: le, la, l' oder les.",
        answerOptions: ['le', 'la', "l'", 'les'],
        questions: shuffleArray([
          { text_start: "Tu lis ce livre? - Oui, je ", text_blank: "le", text_end: " lis.", translation_de: "Liest du dieses Buch? - Ja, ich lese es." },
          { text_start: "Elle achète la voiture? - Oui, elle ", text_blank: "l'", text_end: " achète.", translation_de: "Kauft sie das Auto? - Ja, sie kauft es." },
          { text_start: "Vous regardez les photos? - Oui, nous ", text_blank: "les", text_end: " regardons.", translation_de: "Schaut ihr die Fotos an? - Ja, wir schauen sie an." },
          { text_start: "Il aime cette chanson? - Non, il ne ", text_blank: "l'", text_end: " aime pas.", translation_de: "Mag er dieses Lied? - Nein, er mag es nicht." },
          { text_start: "Tu prends le train? - Oui, je ", text_blank: "le", text_end: " prends.", translation_de: "Nimmst du den Zug? - Ja, ich nehme ihn." },
          { text_start: "Vous connaissez cette dame? - Non, je ne ", text_blank: "la", text_end: " connais pas.", translation_de: "Kennen Sie diese Dame? - Nein, ich kenne sie nicht." }
        ])
      },
      {
        type: 'sentenceOrder',
        shortTitle: 'Satzstellung',
        instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
        questions: shuffleArray([
          { parts: ["Je", "le", "vois."], correctOrder: [0, 1, 2], translation_de: "Ich sehe ihn." },
          { parts: ["Tu", "ne", "l'", "aimes", "pas."], correctOrder: [0, 1, 2, 3, 4], translation_de: "Du magst es nicht." },
          { parts: ["Elle", "va", "les", "acheter."], correctOrder: [0, 1, 2, 3], explanation: "Bei einem Infinitiv steht das Pronomen direkt davor.", translation_de: "Sie wird sie kaufen." },
          { parts: ["ne", "te", "comprends", "pas.", "Je"], correctOrder: [4, 0, 1, 2, 3], explanation: "Die Negation umschließt das Pronomen und das konjugierte Verb.", translation_de: "Ich verstehe dich nicht." }
        ])
      }
    ]
  };
