import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level6: Level = {
    level: 6,
    uniqueId: 'obj-6',
    title: 'Das Pronomen "y"',
    description: 'Lerne, "y" korrekt zu verwenden, um Ortsangaben und indirekte Objekte mit "à" zu ersetzen.',
    hasTheory: true,
    exercises: [
        {
            type: 'clickTheWord',
            shortTitle: 'A) Teil des Satzes erkennen',
            instructions: 'Klicke die Wörter an, die im Antwortsatz durch "y" ersetzt werden.',
            questions: shuffleArray([
                { sentence: "Tu vas à Paris?", prompt: 'Was wird im folgenden Antwortsatz durch "y" ersetzt?', answerContext: 'Antwort: "Oui, j\'y vais."', answer: ["à", "Paris"], translation_de: "Fährst du nach Paris?" },
                { sentence: "Il pense à son avenir?", prompt: 'Was wird im folgenden Antwortsatz durch "y" ersetzt?', answerContext: 'Antwort: "Oui, il y pense."', answer: ["à", "son", "avenir"], translation_de: "Denkt er an seine Zukunft?" },
                { sentence: "Vous réfléchissez à ce problème?", prompt: 'Was wird im folgenden Antwortsatz durch "y" ersetzt?', answerContext: 'Antwort: "Oui, nous y réfléchissons."', answer: ["à", "ce", "problème"], translation_de: "Denkt ihr über dieses Problem nach?" },
                { sentence: "Elle est déjà allée en Italie.", prompt: 'Was wird im folgenden Antwortsatz durch "y" ersetzt?', answerContext: 'Antwort: "Oui, elle y est déjà allée."', answer: ["en", "Italie"], translation_de: "Ist sie schon einmal in Italien gewesen?" },
                { sentence: "Tu peux répondre à cette question?", prompt: 'Was wird im folgenden Antwortsatz durch "y" ersetzt?', answerContext: 'Antwort: "Oui, je peux y répondre."', answer: ["à", "cette", "question"], translation_de: "Kannst du auf diese Frage antworten?" }
            ])
        },
        {
            type: 'fillInTheBlank',
            shortTitle: 'B) Sätze mit "y" bilden',
            instructions: 'Antworte auf die Frage, indem du "y" verwendest, um den entsprechenden Teil zu ersetzen.',
            questions: shuffleArray([
                { text_start: "Tu vas à la piscine? - Oui, j'", text_blank: "y vais", text_end: ".", translation_de: "Gehst du ins Schwimmbad? - Ja, ich gehe dorthin." },
                { text_start: "Il pense à son travail? - Oui, il ", text_blank: "y pense", text_end: " souvent.", translation_de: "Denkt er an seine Arbeit? - Ja, er denkt oft daran." },
                { text_start: "Vous êtes déjà allés en France? - Oui, nous ", text_blank: "y sommes", text_end: " déjà allés.", translation_de: "Wart ihr schon in Frankreich? - Ja, wir waren schon dort." },
                { text_start: "Elle reste chez elle? - Oui, elle ", text_blank: "y reste", text_end: ".", translation_de: "Bleibt sie bei sich zu Hause? - Ja, sie bleibt dort." },
                { text_start: "Tu as réfléchi à ma proposition? - Oui, j'", text_blank: "y ai réfléchi", text_end: ".", translation_de: "Hast du über meinen Vorschlag nachgedacht? - Ja, ich habe darüber nachgedacht." },
                { text_start: "Il met les livres sur la table? - Oui, il ", text_blank: "y met", text_end: " les livres.", translation_de: "Legt er die Bücher auf den Tisch? - Ja, er legt die Bücher dorthin." }
            ])
        }
    ]
};
