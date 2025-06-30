import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level5: Level = {
    level: 5,
    uniqueId: 'obj-5',
    title: 'Das Pronomen "en"',
    description: 'Lerne, "en" korrekt zu verwenden, um "de + Nomen" zu ersetzen.',
    hasTheory: true,
    exercises: [{
        type: 'fillInTheBlank',
        shortTitle: '"en" einsetzen',
        instructions: 'Ersetze den unterstrichenen Teil durch "en" und setze es an die richtige Stelle.',
        questions: shuffleArray([
            { text_start: "Tu veux <u>du café</u>? - Oui, j'", text_blank: "en", text_end: " veux.", translation_de: "Möchtest du Kaffee? - Ja, ich möchte (welchen)." },
            { text_start: "Il a <u>beaucoup de livres</u>. - Oui, il ", text_blank: "en", text_end: " a beaucoup.", translation_de: "Er hat viele Bücher. - Ja, er hat viele (davon)." },
            { text_start: "Vous parlez <u>de vos vacances</u>? - Oui, nous ", text_blank: "en", text_end: " parlons.", translation_de: "Sprecht ihr über euren Urlaub? - Ja, wir sprechen darüber." },
            { text_start: "Elle revient <u>de la piscine</u>. - Oui, elle ", text_blank: "en", text_end: " revient.", translation_de: "Kommt sie aus dem Schwimmbad zurück? - Ja, sie kommt von dort zurück." },
            { text_start: "Tu as besoin <u>de repos</u>? - Oui, j'", text_blank: "en", text_end: " ai besoin.", translation_de: "Brauchst du Ruhe? - Ja, ich brauche sie." }
        ])
    }]
};
