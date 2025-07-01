import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level5: Level = {
    level: 5,
    uniqueId: 'obj-5',
    title: 'Das Pronomen "en"',
    description: 'Lerne, "en" korrekt zu verwenden, um "de + Nomen" zu ersetzen.',
    hasTheory: true,
    exercises: [
        {
            type: 'clickTheWord',
            shortTitle: 'A) Teil des Satzes erkennen',
            instructions: 'Klicke die Wörter an, die im Antwortsatz durch "en" ersetzt werden.',
            questions: shuffleArray([
                { sentence: "Tu veux du café?", prompt: 'Was wird im folgenden Antwortsatz durch "en" ersetzt?', answerContext: 'Antwort: "Oui, j\'en veux"', answer: ["du", "café"], translation_de: "Möchtest du Kaffee?" },
                { sentence: "Il a beaucoup de livres.", prompt: 'Was wird im folgenden Antwortsatz durch "en" ersetzt?', answerContext: 'Antwort: "Oui, il en a beaucoup"', answer: ["de", "livres"], translation_de: "Er hat viele Bücher." },
                { sentence: "Vous parlez de vos vacances?", prompt: 'Was wird im folgenden Antwortsatz durch "en" ersetzt?', answerContext: 'Antwort: "Oui, nous en parlons"', answer: ["de", "vos", "vacances"], translation_de: "Sprecht ihr über euren Urlaub?" },
                { sentence: "Elle a trois frères.", prompt: 'Was wird im folgenden Antwortsatz durch "en" ersetzt?', answerContext: 'Antwort: "Oui, elle en a trois"', answer: ["frères"], translation_de: "Sie hat drei Brüder." },
                { sentence: "Tu as besoin de repos?", prompt: 'Was wird im folgenden Antwortsatz durch "en" ersetzt?', answerContext: 'Antwort: "Oui, j\'en ai besoin"', answer: ["de", "repos"], translation_de: "Brauchst du Ruhe?" }
            ])
        },
        {
            type: 'fillInTheBlank',
            shortTitle: 'B) Sätze mit "en" bilden',
            instructions: 'Antworte auf die Frage, indem du "en" verwendest, um den entsprechenden Teil zu ersetzen.',
            questions: shuffleArray([
                { text_start: "Tu veux du café? - Oui, j'", text_blank: "en veux", text_end: ".", translation_de: "Möchtest du Kaffee? - Ja, ich möchte (welchen)." },
                // KORREKTUR: "beaucoup" wurde in text_end verschoben
                { text_start: "Il a beaucoup de livres? - Oui, il ", text_blank: "en a", text_end: " beaucoup.", translation_de: "Er hat viele Bücher? - Ja, er hat viele (davon)." },
                { text_start: "Vous parlez de vos vacances? - Oui, nous ", text_blank: "en parlons", text_end: ".", translation_de: "Sprecht ihr über euren Urlaub? - Ja, wir sprechen darüber." },
                { text_start: "Elle revient de la piscine? - Oui, elle ", text_blank: "en revient", text_end: ".", translation_de: "Kommt sie aus dem Schwimmbad zurück? - Ja, sie kommt von dort zurück." },
                { text_start: "Tu as besoin de repos? - Oui, j'", text_blank: "en ai besoin", text_end: ".", translation_de: "Brauchst du Ruhe? - Ja, ich brauche sie." },
                { text_start: "Il y a des pommes? - Oui, il y ", text_blank: "en a", text_end: ".", translation_de: "Gibt es Äpfel? - Ja, es gibt welche." }
            ])
        }
    ]
};
