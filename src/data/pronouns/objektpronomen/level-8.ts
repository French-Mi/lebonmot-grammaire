import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level8: Level = {
    level: 8,
    uniqueId: 'obj-8',
    title: 'Alle Pronomen gemischt',
    description: 'Ein umfassender Test aller Pronomen.',
    hasTheory: false,
    exercises: [{
        type: 'sentenceOrder',
        shortTitle: 'Satzstellung',
        instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
        questions: shuffleArray([
            { parts: ["Je", "le", "lui", "donne."], correctOrder: [0, 1, 2, 3], translation_de: "Ich gebe es ihm." },
            { parts: ["Elle", "y", "pense."], correctOrder: [0, 1, 2], translation_de: "Sie denkt daran." },
            { parts: ["Nous", "en", "voulons.", "n'", "pas"], correctOrder: [0, 3, 1, 2, 4], translation_de: "Wir wollen davon nichts." },
            { parts: ["Tu", "vas", "leur", "parler?"], correctOrder: [0, 1, 2, 3], translation_de: "Wirst du mit ihnen sprechen?" },
            { parts: ["Il", "faut", "l'", "appeler."], correctOrder: [0, 1, 2, 3], translation_de: "Man muss ihn anrufen." },
        ])
    }]
};
