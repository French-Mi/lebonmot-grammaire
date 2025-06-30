import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level7: Level = {
    level: 7,
    uniqueId: 'obj-7',
    title: '"en" und "y" gemischt',
    description: 'Unterscheide zwischen "en" und "y".',
    hasTheory: true,
    exercises: [{
        type: 'fillInTheBlank',
        shortTitle: 'en / y',
        instructions: 'Fülle die Lücke mit "en" oder "y".',
        answerOptions: ['en', 'y'],
        questions: shuffleArray([
            { text_start: "Il va <u>au cinéma</u>. Il ", text_blank: "y", text_end: " va.", translation_de: "Er geht ins Kino. Er geht dorthin." },
            { text_start: "Elle a <u>des pommes</u>. Elle ", text_blank: "en", text_end: " a.", translation_de: "Sie hat Äpfel. Sie hat welche." },
            { text_start: "Je pense <u>à mes vacances</u>. J'", text_blank: "y", text_end: " pense.", translation_de: "Ich denke an meinen Urlaub. Ich denke daran." },
            { text_start: "Tu as besoin <u>de ce livre</u>? - Oui, j'", text_blank: "en", text_end: " ai besoin.", translation_de: "Brauchst du dieses Buch? - Ja, ich brauche es." },
            { text_start: "Nous habitons <u>à Berlin</u>. Nous ", text_blank: "y", text_end: " habitons.", translation_de: "Wir wohnen in Berlin. Wir wohnen dort." },
            { text_start: "Vous voulez <u>du pain</u>? - Oui, nous ", text_blank: "en", text_end: " voulons.", translation_de: "Wollt ihr Brot? - Ja, wir wollen (welches)." }
        ])
    }]
};
