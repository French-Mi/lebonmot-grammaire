import type { Verb } from '@/types/verb-types';

export const ouvrir: Verb = {
  infinitive: "ouvrir",
  translation: "öffnen",
  verbGroup: 3,
  indicatif: {
    présent: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
    passé_composé: { aux: "avoir", participle: "ouvert" },
    imparfait: ["ouvrais", "ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"],
    plus_que_parfait: { aux: "avoir", participle: "ouvert" },
    futur_simple: ["ouvrirai", "ouvriras", "ouvrira", "ouvrirons", "ouvrirez", "ouvriront"],
    futur_proche: { aux: "aller", participle: "ouvrir" }
  },
  subjonctif: { présent: ["ouvre", "ouvres", "ouvre", "ouvrions", "ouvriez", "ouvrent"] },
  conditionnel: { présent: ["ouvrirais", "ouvrirais", "ouvrirait", "ouvririons", "ouvririez", "ouvriraient"], passé: { aux: "avoir", participle: "ouvert" } },
  imperatif: { present: ["ouvre", "ouvrons", "ouvrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich öffne das Fenster.", fr: "J'ouvre la fenêtre." },
      { de: "Kannst du die Tür öffnen?", fr: "Tu peux ouvrir la porte ?" },
      { de: "Die Geschäfte öffnen um 9 Uhr.", fr: "Les magasins ouvrent à 9 heures." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Flasche geöffnet.", fr: "J'ai ouvert la bouteille." },
      { de: "Wer hat das Fenster geöffnet?", fr: "Qui a ouvert la fenêtre ?" },
      { de: "Wir haben ein neues Restaurant eröffnet.", fr: "Nous avons ouvert un nouveau restaurant." }
    ],
    "indicatif_imparfait": [
        { de: "Er öffnete immer die Tür für sie.", fr: "Il lui ouvrait toujours la porte." },
        { de: "Die Blumen öffneten sich in der Sonne.", fr: "Les fleurs s'ouvraient au soleil." },
        { de: "Wir öffneten die Geschenke mit Spannung.", fr: "Nous ouvrions les cadeaux avec impatience." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die Tür bereits geöffnet.", fr: "J'avais déjà ouvert la porte." },
        { de: "Sie hatte den Brief geöffnet, bevor sie es hätte tun sollen.", fr: "Elle avait ouvert la lettre avant de devoir le faire." },
        { de: "Hatten Sie den Anhang geöffnet?", fr: "Aviez-vous ouvert la pièce jointe ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Tür öffnen.", fr: "J'ouvrirai la porte." },
      { de: "Das Museum wird morgen öffnen.", fr: "Le musée ouvrira demain." },
      { de: "Wir werden eine Diskussion eröffnen.", fr: "Nous ouvrirons une discussion." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde das Fenster öffnen.", fr: "Je vais ouvrir la fenêtre." },
      { de: "Sie wird ihr Geschenk öffnen.", fr: "Elle va ouvrir son cadeau." },
      { de: "Wir werden ein Konto eröffnen.", fr: "Nous allons ouvrir un compte." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Tür öffnen, wenn ich den Schlüssel hätte.", fr: "J'ouvrirais la porte si j'avais la clé." },
        { de: "Er würde die Augen öffnen.", fr: "Il ouvrirait les yeux." },
        { de: "Würdest du das Fenster bitte öffnen?", fr: "Ouvririez-vous la fenêtre, s'il vous plaît ?" }
    ],
    "subjonctif_présent": [
      { de: "Du musst die Augen öffnen.", fr: "Il faut que tu ouvres les yeux." },
      { de: "Ich möchte, dass sie die Tür öffnet.", fr: "Je veux qu'elle ouvre la porte." },
      { de: "Es ist besser, dass wir das Fenster öffnen.", fr: "Il vaut mieux que nous ouvrions la fenêtre." }
    ]
  }
};
