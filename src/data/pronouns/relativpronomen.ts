// src/data/pronouns/relativpronomen.ts
import type { PronounCategory } from './types';

const shuffleArray = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

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
            questions: shuffleArray([
              { text_start: "L'homme ", text_blank: "qui", text_end: " parle est mon professeur.", translation_de: "Der Mann, der spricht, ist mein Lehrer." },
              { text_start: "La pomme ", text_blank: "que", text_end: " je mange est rouge.", translation_de: "Der Apfel, den ich esse, ist rot." },
              { text_start: "C'est le livre ", text_blank: "qu'", text_end: " il achète.", translation_de: "Das ist das Buch, das er kauft." },
              { text_start: "Les amis ", text_blank: "qui", text_end: " arrivent sont très sympathiques.", translation_de: "Die Freunde, die ankommen, sind sehr sympathisch." },
              { text_start: "La chanson ", text_blank: "que", text_end: " tu écoutes est nouvelle.", translation_de: "Das Lied, das du hörst, ist neu." },
              { text_start: "Voilà la femme ", text_blank: "qui", text_end: " travaille à la banque.", translation_de: "Das ist die Frau, die in der Bank arbeitet." },
              { text_start: "Le chat ", text_blank: "qui", text_end: " dort sur le canapé est gris.", translation_de: "Die Katze, die auf dem Sofa schläft, ist grau." },
              { text_start: "La voiture ", text_blank: "que", text_end: " j'ai vue est bleue.", translation_de: "Das Auto, das ich gesehen habe, ist blau." },
              { text_start: "L'ami ", text_blank: "qu'", text_end: " elle attend est en retard.", translation_de: "Der Freund, auf den sie wartet, ist verspätet." },
              { text_start: "Les fleurs ", text_blank: "que", text_end: " tu as achetées sont belles.", translation_de: "Die Blumen, die du gekauft hast, sind schön." },
              { text_start: "Le train ", text_blank: "qui", text_end: " part à 10h va à Paris.", translation_de: "Der Zug, der um 10 Uhr abfährt, fährt nach Paris." }
            ])
          },
          {
            type: 'sentenceOrder',
            shortTitle: 'Satzteile ordnen',
            instructions: 'Bilde korrekte Sätze, indem du die Satzteile in die richtige Reihenfolge ziehst.',
            questions: shuffleArray([
              { parts: ["est très interessant.", "que", "tu lis", "Le livre"], correctOrder: [3, 1, 2, 0], translation_de: "Das Buch, das du liest, ist sehr interessant." },
              { parts: ["que", "j'invite", "sont mes amis.", "Les gens"], correctOrder: [3, 0, 1, 2], translation_de: "Die Leute, die ich einlade, sind meine Freunde." },
              { parts: ["la porte.", "la clé", "Voilà", "qui", "ouvre"], correctOrder: [2, 1, 3, 4, 0], translation_de: "Hier ist der Schlüssel, der die Tür öffnet." },
              { parts: ["que", "j'ai écrit", "La lettre", "est pour toi."], correctOrder: [2, 0, 1, 3], translation_de: "Der Brief, den ich geschrieben habe, ist für dich." },
              { parts: ["habite ici.", "La famille", "qui"], correctOrder: [1, 2, 0], translation_de: "Die Familie, die hier wohnt." },
              { parts: ["Le film", "est une comédie.", "que", "nous regardons"], correctOrder: [0, 2, 3, 1], translation_de: "Der Film, den wir schauen, ist eine Komödie." },
              { parts: ["est mon frère.", "Le garçon", "qui", "chante"], correctOrder: [1, 2, 3, 0], translation_de: "Der Junge, der singt, ist mein Bruder." },
              { parts: ["j'ai acheté", "Le pain", "est frais.", "que"], correctOrder: [1, 3, 0, 2], translation_de: "Das Brot, das ich gekauft habe, ist frisch." }
            ])
          },
          {
            type: 'matchPairs',
            shortTitle: 'Paare bilden',
            instructions: 'Ziehe den passenden Relativsatz auf den richtigen Satzanfang.',
            sentenceStarts: [
              { id: 1, text: "Lucas est un garçon...", translation_de: "Lucas ist ein Junge..." },
              { id: 2, text: "J'aime le film...", translation_de: "Ich mag den Film..." },
              { id: 3, text: "Voilà la clé...", translation_de: "Hier ist der Schlüssel..." },
              { id: 4, text: "Elle adore les fleurs...", translation_de: "Sie liebt die Blumen..." }
            ],
            relativeClauses: [
              { id: 1, text: "...qui joue souvent avec sa sœur dans le parc.", translation_de: "...der oft mit seiner Schwester im Park spielt." },
              { id: 2, text: "...qu'on regarde ce soir.", translation_de: "...den wir heute Abend schauen." },
              { id: 3, text: "...qui ouvre la porte.", translation_de: "...der die Tür öffnet." },
              { id: 4, text: "...que son mari lui offre.", translation_de: "...die ihr Ehemann ihr schenkt." }
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
              questions: shuffleArray([
                  { text_start: "La ville ", text_blank: "où", text_end: " j'habite est belle.", translation_de: "Die Stadt, in der ich wohne, ist schön." },
                  { text_start: "Le chat ", text_blank: "qui", text_end: " dort est gris.", translation_de: "Die Katze, die schläft, ist grau." },
                  { text_start: "La robe ", text_blank: "que", text_end: " tu portes est jolie.", translation_de: "Das Kleid, das du trägst, ist hübsch." },
                  { text_start: "C'est le parc ", text_blank: "où", text_end: " nous jouons.", translation_de: "Das ist der Park, wo wir spielen." },
                  { text_start: "Le gâteau ", text_blank: "qu'", text_end: " il mange est bon.", translation_de: "Der Kuchen, den er isst, ist gut." },
                  { text_start: "Le chien ", text_blank: "qui", text_end: " court vite est noir.", translation_de: "Der Hund, der schnell rennt, ist schwarz." },
                  { text_start: "C'est l'école ", text_blank: "où", text_end: " j'ai appris à lire.", translation_de: "Das ist die Schule, wo ich lesen gelernt habe." },
                  { text_start: "J'aime la musique ", text_blank: "qui", text_end: " me fait danser.", translation_de: "Ich mag die Musik, die mich zum Tanzen bringt." },
                  { text_start: "Le restaurant ", text_blank: "où", text_end: " nous avons mangé était excellent.", translation_de: "Das Restaurant, in dem wir gegessen haben, war ausgezeichnet." },
                  { text_start: "L'histoire ", text_blank: "qu'", text_end: " il raconte est fascinante.", translation_de: "Die Geschichte, die er erzählt, ist faszinierend." },
                  { text_start: "Voici le chemin ", text_blank: "qui", text_end: " mène à la plage.", translation_de: "Hier ist der Weg, der zum Strand führt." }
              ])
          },
          {
              type: 'sentenceOrder',
              shortTitle: 'Satzteile ordnen',
              instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
              questions: shuffleArray([
                  { parts: ["C'est", "la ville", "où", "j'habite."], correctOrder: [0, 1, 2, 3], translation_de: "Das ist die Stadt, in der ich wohne." },
                  { parts: ["Le livre", "est rouge.", "qui", "est sur la table"], correctOrder: [0, 2, 3, 1], translation_de: "Das Buch, das auf dem Tisch ist, ist rot." },
                  { parts: ["tu aimes", "Le pull", "est bleu.", "que"], correctOrder: [1, 3, 0, 2], translation_de: "Der Pullover, den du magst, ist blau." },
                  { parts: ["je travaille.", "Le bureau", "est grand.", "où"], correctOrder: [1, 3, 0, 2], translation_de: "Das Büro, in dem ich arbeite, ist groß." },
                  { parts: ["fait du bruit.", "La machine", "qui"], correctOrder: [1, 2, 0], translation_de: "Die Maschine, die Lärm macht." },
                  { parts: ["tu as vu", "L'homme", "est mon oncle.", "que"], correctOrder: [1, 3, 0, 2], translation_de: "Der Mann, den du gesehen hast, ist mein Onkel." },
                  { parts: ["j'ai passé mes vacances", "C'est le pays", "où"], correctOrder: [1, 2, 0], translation_de: "Das ist das Land, in dem ich meine Ferien verbracht habe." },
                  { parts: ["Le gâteau", "est délicieux.", "qu'", "elle a préparé"], correctOrder: [0, 2, 3, 1], translation_de: "Der Kuchen, den sie zubereitet hat, ist köstlich." }
              ])
          },
          {
              type: 'matchPairs',
              shortTitle: 'Paare bilden',
              instructions: 'Verbinde die Satzanfänge mit den passenden Relativsätzen.',
              sentenceStarts: [
                  { id: 1, text: "Voici le jardin...", translation_de: "Hier ist der Garten..." },
                  { id: 2, text: "C'est la chanson...", translation_de: "Das ist das Lied..." },
                  { id: 3, text: "Le garçon...", translation_de: "Der Junge..." },
                  { id: 4, text: "Le restaurant...", translation_de: "Das Restaurant..." }
              ],
              relativeClauses: [
                  { id: 1, text: "...où les fleurs sont belles.", translation_de: "...wo die Blumen schön sind." },
                  { id: 2, text: "...que j'écoute.", translation_de: "...das ich höre." },
                  { id: 3, text: "...qui dessine une maison.", translation_de: "...der ein Haus zeichnet." },
                  { id: 4, text: "...où nous mangeons ce soir.", translation_de: "...wo wir heute Abend essen." }
              ]
          }
        ]
      }
    ]
};
