import type { Verb } from '@/types/verb-types';

export const entrer: Verb = {
  infinitive: "entrer",
  translation: "eintreten / hineingehen",
  verbGroup: 1,
  indicatif: {
    présent: ["entre", "entres", "entre", "entrons", "entrez", "entrent"],
    passé_composé: { aux: "être", participle: "entré" },
    imparfait: ["entrais", "entrais", "entrait", "entrions", "entriez", "entraient"],
    plus_que_parfait: { aux: "être", participle: "entré" },
    futur_simple: ["entrerai", "entreras", "entrera", "entrerons", "entrerez", "entreront"],
    futur_proche: { aux: "aller", participle: "entrer" }
  },
  subjonctif: { présent: ["entre", "entres", "entre", "entrions", "entriez", "entrent"] },
  conditionnel: { présent: ["entrerais", "entrerais", "entrerait", "entrerions", "entreriez", "entreraient"], passé: { aux: "être", participle: "entré" } },
  imperatif: { present: ["entre", "entrons", "entrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich trete in das Haus ein.", fr: "J'entre dans la maison." },
      { de: "Treten Sie ein, bitte.", fr: "Entrez, s'il vous plaît." },
      { de: "Der Schlüssel passt nicht, er geht nicht ins Schloss.", fr: "La clé ne correspond pas, elle n'entre pas dans la serrure." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin durch die Vordertür eingetreten.", fr: "Je suis entré(e) par la porte d'entrée." },
      { de: "Sie ist in sein Leben getreten.", fr: "Elle est entrée dans sa vie." },
      { de: "Sie sind in den Raum eingetreten.", fr: "Ils sont entrés dans la pièce." }
    ],
    "indicatif_imparfait": [
      { de: "Er trat immer ein, ohne anzuklopfen.", fr: "Il entrait toujours sans frapper." },
      { de: "Die Sonne trat durch das Fenster ein.", fr: "Le soleil entrait par la fenêtre." },
      { de: "Wir gingen in die Kirche, als die Messe begann.", fr: "Nous entrions dans l'église quand la messe commençait." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich war bereits eingetreten, als er ankam.", fr: "J'étais déjà entré(e) quand il est arrivé." },
      { de: "Sie war in den Raum eingetreten, ohne bemerkt zu werden.", fr: "Elle était entrée dans la pièce sans être remarquée." },
      { de: "Sie waren durch den Hintereingang eingetreten.", fr: "Ils étaient entrés par la porte de derrière." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde als Erster eintreten.", fr: "J'entrerai le premier." },
      { de: "Das neue Gesetz wird in Kraft treten.", fr: "La nouvelle loi entrera en vigueur." },
      { de: "Wir werden in eine neue Ära eintreten.", fr: "Nous entrerons dans une nouvelle ère." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde jetzt eintreten.", fr: "Je vais entrer maintenant." },
      { de: "Der Zug wird in den Bahnhof einfahren.", fr: "Le train va entrer en gare." },
      { de: "Wir werden gleich in den Saal gehen.", fr: "Nous allons entrer dans la salle." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde nicht ohne Einladung eintreten.", fr: "Je n'entrerais pas sans invitation." },
      { de: "Würdest du zuerst eintreten?", fr: "Entrerais-tu en premier ?" },
      { de: "Das würde nicht in meine Pläne passen (eintreten).", fr: "Cela n'entrerait pas dans mes plans." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du eintrittst.", fr: "Il faut que tu entres." },
      { de: "Ich möchte nicht, dass er eintritt.", fr: "Je ne veux pas qu'il entre." },
      { de: "Bevor wir eintreten, klopfen wir an.", fr: "Avant que nous entrions, nous frappons à la porte." }
    ]
  }
};
