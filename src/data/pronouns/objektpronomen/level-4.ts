import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level4: Level = {
      level: 4,
      uniqueId: 'obj-4',
      title: 'Gemischte Objekte anwenden',
      description: 'Wende direkte und indirekte Objektpronomen in verschiedenen Kontexten an.',
      hasTheory: true,
      exercises: [
          {
              type: 'fillInTheBlank',
              shortTitle: 'A) Ein Pronomen einsetzen',
              instructions: 'Ersetze das Objekt im Originalsatz durch das passende Pronomen.',
              questions: shuffleArray([
                  { text_start: "Je montre la photo à mon ami. -> Je ", text_blank: "la", text_end: " montre à mon ami.", translation_de: "Ich zeige meinem Freund das Foto. -> Ich zeige sie meinem Freund." },
                  { text_start: "Tu vois le chat? -> Oui, je ", text_blank: "le", text_end: " vois.", translation_de: "Siehst du die Katze? -> Ja, ich sehe sie." },
                  { text_start: "Elle donne les clés à ses parents. -> Elle ", text_blank: "leur", text_end: " donne les clés.", translation_de: "Sie gibt ihren Eltern die Schlüssel. -> Sie gibt ihnen die Schlüssel." },
                  { text_start: "Il ne mange pas la pomme. -> Il ne ", text_blank: "la", text_end: " mange pas.", translation_de: "Er isst den Apfel nicht. -> Er isst ihn nicht." },
                  { text_start: "J'offre un cadeau à ma sœur. -> Je ", text_blank: "lui", text_end: " offre un cadeau.", translation_de: "Ich schenke meiner Schwester ein Geschenk. -> Ich schenke ihr ein Geschenk." },
                  { text_start: "Il raconte une histoire aux enfants. -> Il ", text_blank: "leur", text_end: " raconte une histoire.", translation_de: "Er erzählt den Kindern eine Geschichte. -> Er erzählt ihnen eine Geschichte." }
              ])
          },
          {
              type: 'fillInTheBlank',
              shortTitle: 'B) Zwei Pronomen einsetzen',
              instructions: 'Ersetze beide Objekte im ersten Satz durch die passenden Pronomen (z.B. "le lui").',
              questions: shuffleArray([
                { text_start: "Je donne le livre à Paul. -> Je ", text_blank: "le lui", text_end: " donne.", translation_de: "Ich gebe Paul das Buch. -> Ich gebe es ihm." },
                { text_start: "Elle montre les photos à sa mère. -> Elle ", text_blank: "les lui", text_end: " montre.", translation_de: "Sie zeigt ihrer Mutter die Fotos. -> Sie zeigt sie ihr." },
                { text_start: "Tu prêtes ta voiture à tes amis? -> Tu ", text_blank: "la leur", text_end: " prêtes?", translation_de: "Leihst du deinen Freunden dein Auto? -> Leihst du es ihnen?" },
                { text_start: "Le prof explique la leçon aux élèves. -> Le prof ", text_blank: "la leur", text_end: " explique.", translation_de: "Der Lehrer erklärt den Schülern die Lektion. -> Der Lehrer erklärt sie ihnen." },
                { text_start: "Mon père m'achète le vélo. -> Mon père ", text_blank: "me l'", text_end: " achète.", translation_de: "Mein Vater kauft mir das Fahrrad. -> Mein Vater kauft es mir." },
                { text_start: "Nous offrons les fleurs à nos parents. -> Nous ", text_blank: "les leur", text_end: " offrons.", translation_de: "Wir schenken unseren Eltern die Blumen. -> Wir schenken sie ihnen." },
                { text_start: "Vous racontez l'histoire à l'enfant? -> Vous ", text_blank: "la lui", text_end: " racontez?", translation_de: "Erzählt ihr dem Kind die Geschichte? -> Erzählt ihr sie ihm?" },
                { text_start: "Le serveur nous apporte les boissons. -> Le serveur ", text_blank: "nous les", text_end: " apporte.", translation_de: "Der Kellner bringt uns die Getränke. -> Der Kellner bringt sie uns." }
              ])
          },
          {
              type: 'sentenceOrder',
              shortTitle: 'C) Satzstellung',
              instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
              questions: shuffleArray([
                  { parts: ["Je", "le", "lui", "donne."], correctOrder: [0, 1, 2, 3], translation_de: "Ich gebe es ihm." },
                  { parts: ["Tu", "ne", "me", "le", "dis", "pas."], correctOrder: [0, 1, 2, 3, 4, 5], translation_de: "Du sagst es mir nicht." },
                  { parts: ["Elle", "va", "le", "leur", "expliquer."], correctOrder: [0, 1, 2, 3, 4], translation_de: "Sie wird es ihnen erklären." },
                  { parts: ["Il", "nous", "la", "montre."], correctOrder: [0, 1, 2, 3], translation_de: "Er zeigt sie uns." }
              ])
          },
          {
            type: 'fillInTheBlank',
            shortTitle: 'D) Auf Fragen antworten',
            instructions: 'Antworte auf die Frage, indem du die Objekte durch Pronomen ersetzt.',
            questions: shuffleArray([
              { text_start: "Tu me donnes le livre? - Oui, je ", text_blank: "te le donne", text_end: ".", translation_de: "Gibst du mir das Buch? - Ja, ich gebe es dir." },
              { text_start: "Elle vous montre la photo? - Oui, elle ", text_blank: "nous la montre", text_end: ".", translation_de: "Zeigt sie euch das Foto? - Ja, sie zeigt es uns." },
              { text_start: "Vous nous prêtez la voiture? - Non, nous ne ", text_blank: "vous la prêtons", text_end: " pas.", translation_de: "Leiht ihr uns das Auto? - Nein, wir leihen es euch nicht." },
              { text_start: "Le prof te donne les notes? - Oui, il ", text_blank: "me les donne", text_end: ".", translation_de: "Gibt dir der Lehrer die Noten? - Ja, er gibt sie mir." },
              { text_start: "Tu achètes le pain pour moi? - Oui, je ", text_blank: "te l'achète", text_end: ".", translation_de: "Kaufst du das Brot für mich? - Ja, ich kaufe es dir." }
            ])
        }
      ]
  };
