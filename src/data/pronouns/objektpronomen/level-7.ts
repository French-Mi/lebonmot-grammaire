import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level7: Level = {
    level: 7,
    uniqueId: 'obj-7',
    title: '"en" und "y" gemischt',
    description: 'Unterscheide zwischen "en" und "y".',
    hasTheory: true,
    exercises: [
        {
            type: 'fillInTheBlank',
            shortTitle: 'Grundniveau',
            instructions: 'Fülle die Lücke mit "en" oder "y".',
            questions: shuffleArray([
                { text_start: "Il va <u>au cinéma</u>. - Il ", text_blank: "y", text_end: " va.", translation_de: "Er geht ins Kino. - Er geht dorthin." },
                { text_start: "Elle a <u>des pommes</u>. - Elle ", text_blank: "en", text_end: " a.", translation_de: "Sie hat Äpfel. - Sie hat welche." },
                { text_start: "Je pense <u>à mes vacances</u>. - J'", text_blank: "y", text_end: " pense.", translation_de: "Ich denke an meinen Urlaub. - Ich denke daran." },
                { text_start: "Tu as besoin <u>de ce livre</u>? - Oui, j'", text_blank: "en", text_end: " ai besoin.", translation_de: "Brauchst du dieses Buch? - Ja, ich brauche es." },
                { text_start: "Nous habitons <u>à Berlin</u>. - Nous ", text_blank: "y", text_end: " habitons.", translation_de: "Wir wohnen in Berlin. - Wir wohnen dort." },
                { text_start: "Vous voulez <u>du pain</u>? - Oui, nous ", text_blank: "en", text_end: " voulons.", translation_de: "Wollt ihr Brot? - Ja, wir wollen (welches)." }
            ])
        },
        {
            type: 'fillInTheBlank',
            shortTitle: 'Fortgeschritten',
            instructions: 'Antworte auf die Frage, indem du die Objekte durch die passenden Pronomen ersetzt.',
            questions: shuffleArray([
                { text_start: "Tu vas aller en France cet été? - Oui, ", text_blank: "je vais y aller", text_end: ".", translation_de: "Wirst du diesen Sommer nach Frankreich fahren? - Ja, ich werde dorthin fahren." },
                { text_start: "Vous allez parler de ce projet? - Oui, ", text_blank: "nous allons en parler", text_end: ".", translation_de: "Werdet ihr über dieses Projekt sprechen? - Ja, wir werden darüber sprechen." },
                { text_start: "Il peut réfléchir à ta proposition? - Oui, ", text_blank: "il peut y réfléchir", text_end: ".", translation_de: "Kann er über deinen Vorschlag nachdenken? - Ja, er kann darüber nachdenken." },
                { text_start: "Elle veut acheter beaucoup de fruits? - Oui, ", text_blank: "elle veut en acheter", text_end: " beaucoup.", translation_de: "Will sie viel Obst kaufen? - Ja, sie will viel davon kaufen." },
                {
                    text_start: "Tu es déjà allé sur la lune? - Non, ",
                    text_blank: ["je n'y suis", "allé/allée"],
                    text_end: " jamais|.",
                    translation_de: "Warst du schon auf dem Mond? - Nein, ich war noch nie dort."
                },
                { text_start: "Combien de frères as-tu? - J'", text_blank: "en ai", text_end: " deux.", translation_de: "Wie viele Brüder hast du? - Ich habe zwei (davon)." },
                { text_start: "Vous devez penser à la solution? - Oui, ", text_blank: "nous devons y penser", text_end: ".", translation_de: "Müsst ihr an die Lösung denken? - Ja, wir müssen daran denken." },
                { text_start: "Ils ont peur de l'examen? - Oui, ", text_blank: "ils en ont peur", text_end: ".", translation_de: "Haben sie Angst vor der Prüfung? - Ja, sie haben Angst davor." },
                { text_start: "Elle va participer à la compétition? - Non, ", text_blank: "elle ne va pas y participer", text_end: ".", translation_de: "Wird sie am Wettbewerb teilnehmen? - Nein, sie wird nicht daran teilnehmen." },
                { text_start: "Tu as de l'argent? - Oui, ", text_blank: "j'en ai", text_end: " un peu.", translation_de: "Hast du Geld? - Ja, ich habe ein bisschen (davon)." }
            ])
        },
        {
            type: 'fillInTheBlank',
            shortTitle: 'Herausforderung',
            instructions: 'Lies den Text und fülle die Lücken mit "en" oder "y".',
            questions: []
        }
    ]
};
