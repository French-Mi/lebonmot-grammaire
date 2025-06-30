import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level6: Level = {
    level: 6,
    uniqueId: 'obj-6',
    title: 'Das Pronomen "y"',
    description: 'Lerne, "y" korrekt zu verwenden, um "à + Ort/Sache" zu ersetzen.',
    hasTheory: true,
    exercises: [{
        type: 'fillInTheBlank',
        shortTitle: '"y" einsetzen',
        instructions: 'Ersetze den unterstrichenen Teil durch "y" und setze es an die richtige Stelle.',
        questions: shuffleArray([
            { text_start: "Tu vas <u>à Paris</u>? - Oui, j'", text_blank: "y", text_end: " vais.", translation_de: "Fährst du nach Paris? - Ja, ich fahre dorthin." },
            { text_start: "Il pense <u>à son projet</u>. - Oui, il ", text_blank: "y", text_end: " pense.", translation_de: "Denkt er an sein Projekt? - Ja, er denkt daran." },
            { text_start: "Nous jouons <u>dans le jardin</u>. - Oui, nous ", text_blank: "y", text_end: " jouons.", translation_de: "Spielen wir im Garten? - Ja, wir spielen dort." },
            { text_start: "Elle participe <u>au cours</u>. - Oui, elle ", text_blank: "y", text_end: " participe.", translation_de: "Nimmt sie am Kurs teil? - Ja, sie nimmt daran teil." },
            { text_start: "Tu crois <u>aux fantômes</u>? - Non, je n'", text_blank: "y", text_end: " crois pas.", translation_de: "Glaubst du an Geister? - Nein, ich glaube nicht daran." }
        ])
    }]
};
