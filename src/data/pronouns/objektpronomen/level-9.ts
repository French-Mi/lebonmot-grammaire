import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level9: Level = {
    level: 9,
    uniqueId: 'obj-9',
    title: 'Imperativ mit Pronomen',
    description: 'Bilde Befehlssätze mit Objektpronomen.',
    hasTheory: true,
    exercises: [{
        type: 'sentenceOrder',
        shortTitle: 'Befehle bilden',
        instructions: 'Bilde korrekte Befehlssätze.',
        questions: shuffleArray([
            { parts: ["Donne", "-le", "-moi", "!"], correctOrder: [0, 1, 2, 3], translation_de: "Gib es mir!" },
            { parts: ["Ne", "me", "le", "donne", "pas", "!"], correctOrder: [0, 1, 2, 3, 4, 5], translation_de: "Gib es mir nicht!" },
            { parts: ["Parlez", "-en", "!"], correctOrder: [0, 1, 2], translation_de: "Sprecht darüber!" },
            { parts: ["Va", "-t'", "-en", "!"], correctOrder: [0, 1, 2, 3], explanation: "Im Imperativ wird aus 'va' ein 'vas-y' (Geh dorthin!) aber 'va-t-en' (Geh weg!). Hier ist es ein Sonderfall.", translation_de: "Geh weg!" },
            { parts: ["Achetons", "-les", "-lui", "!"], correctOrder: [0, 1, 2, 3], translation_de: "Kaufen wir sie ihm!" }
        ])
    }]
  };
