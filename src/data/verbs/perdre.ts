import type { Verb } from '@/types/verb-types';

export const perdre: Verb = {
  infinitive: "perdre",
  translation: "verlieren",
  verbGroup: 3,
  indicatif: {
    présent: ["perds", "perds", "perd", "perdons", "perdez", "perdent"],
    passé_composé: { aux: "avoir", participle: "perdu" },
    imparfait: ["perdais", "perdais", "perdait", "perdions", "perdiez", "perdaient"],
    plus_que_parfait: { aux: "avoir", participle: "perdu" },
    futur_simple: ["perdrai", "perdras", "perdra", "perdrons", "perdrez", "perdront"],
    futur_proche: { aux: "aller", participle: "perdre" }
  },
  subjonctif: { présent: ["perde", "perdes", "perde", "perdions", "perdiez", "perdent"] },
  conditionnel: { présent: ["perdrais", "perdrais", "perdrait", "perdrions", "perdriez", "perdraient"], passé: { aux: "avoir", participle: "perdu" } },
  imperatif: { present: ["perds", "perdons", "perdez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich verliere immer meine Schlüssel.", fr: "Je perds toujours mes clés." },
      { de: "Er verliert nie eine Wette.", fr: "Il ne perd jamais un pari." },
      { de: "Wir verlieren Zeit.", fr: "Nous perdons du temps." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Brieftasche verloren.", fr: "J'ai perdu mon portefeuille." },
      { de: "Sie hat das Spiel verloren.", fr: "Elle a perdu le match." },
      { de: "Wir haben den Zug verpasst (verloren).", fr: "Nous avons perdu le train." }
    ],
    "indicatif_imparfait": [
      { de: "Als Kind habe ich oft meine Spielsachen verloren.", fr: "Enfant, je perdais souvent mes jouets." },
      { de: "Sie verlor allmählich die Hoffnung.", fr: "Elle perdait espoir peu à peu." },
      { de: "Ihr habt immer beim Kartenspielen verloren.", fr: "Vous perdiez toujours aux cartes." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte meinen Regenschirm im Bus verloren.", fr: "J'avais perdu mon parapluie dans le bus." },
      { de: "Er hatte seinen Job verloren.", fr: "Il avait perdu son travail." },
      { de: "Sie hatten den Kontakt zueinander verloren.", fr: "Ils avaient perdu contact l'un avec l'autre." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde nicht verlieren!", fr: "Je ne perdrai pas !" },
      { de: "Du wirst deinen Weg verlieren, wenn du nicht aufpasst.", fr: "Tu perdras ton chemin si tu ne fais pas attention." },
      { de: "Wir werden diese Gelegenheit nicht verlieren.", fr: "Nous ne perdrons pas cette opportunité." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Wette verlieren.", fr: "Je vais perdre le pari." },
      { de: "Du wirst deine Zeit verlieren.", fr: "Tu vas perdre ton temps." },
      { de: "Wir werden den Faden verlieren.", fr: "Nous allons perdre le fil." }
    ],
    "conditionnel_présent": [
      { de: "Ohne dich würde ich den Verstand verlieren.", fr: "Sans toi, je perdrais la tête." },
      { de: "Er würde alles verlieren, wenn er spielen würde.", fr: "Il perdrait tout s'il jouait." },
      { de: "Wir würden eine Menge Geld verlieren.", fr: "Nous perdrions beaucoup d'argent." }
    ],
    "subjonctif_présent": [
      { de: "Ich habe Angst, dass ich verliere.", fr: "J'ai peur que je perde." },
      { de: "Es ist schade, dass sie ihre Zeit verliert.", fr: "C'est dommage qu'elle perde son temps." },
      { de: "Bevor wir die Hoffnung verlieren, versuchen wir es noch einmal.", fr: "Avant que nous perdions espoir, essayons encore." }
    ]
  }
};
