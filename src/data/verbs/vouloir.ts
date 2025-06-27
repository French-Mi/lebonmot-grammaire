// src/data/verbs/vouloir.ts
import type { Verb } from '@/types/verb-types';

export const vouloir: Verb = {
  infinitive: "vouloir",
  translation: "wollen",
  verbGroup: 3,
  indicatif: {
    présent: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    passé_composé: { aux: "avoir", participle: "voulu" },
    imparfait: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
    plus_que_parfait: { aux: "avoir", participle: "voulu" },
    futur_simple: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
    futur_proche: { aux: "aller", participle: "vouloir" }
  },
  subjonctif: { présent: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"] },
  conditionnel: { présent: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"], passé: { aux: "avoir", participle: "voulu" } },
  imperatif: { present: ["veuille", "veuillons", "veuillez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich will ein Eis.", fr: "Je veux une glace." },
      { de: "Was willst du machen?", fr: "Qu'est-ce que tu veux faire ?" },
      { de: "Sie will nach Paris fahren.", fr: "Elle veut aller à Paris." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich wollte dich nicht stören.", fr: "Je n'ai pas voulu te déranger." },
      { de: "Er wollte immer Pilot werden.", fr: "Il a toujours voulu être pilote." },
      { de: "Sie haben es nicht tun wollen.", fr: "Ils n'ont pas voulu le faire." }
    ],
    "indicatif_imparfait": [
      { de: "Ich wollte nur helfen.", fr: "Je voulais seulement aider." },
      { de: "Sie wollte die Wahrheit nicht sehen.", fr: "Elle ne voulait pas voir la vérité." },
      { de: "Wir wollten als Kinder immer Süßigkeiten.", fr: "Nous voulions toujours des bonbons quand nous étions enfants." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Er hatte immer ein schnelles Auto gewollt.", fr: "Il avait toujours voulu une voiture rapide." },
      { de: "Ich hatte nie gehen wollen.", fr: "Je n'avais jamais voulu partir." },
      { de: "Hattest du das wirklich gewollt?", fr: "Avais-tu vraiment voulu cela ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde immer bei dir sein wollen.", fr: "Je voudrai toujours être avec toi." },
      { de: "Er wird eines Tages CEO sein wollen.", fr: "Il voudra être PDG un jour." },
      { de: "Sie werden eine Erklärung verlangen.", fr: "Ils voudront une explication." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich gehen wollen.", fr: "Je vais vouloir partir bientôt." },
      { de: "Du wirst es versuchen wollen.", fr: "Tu vas vouloir essayer." },
      { de: "Er wird mehr wissen wollen.", fr: "Il va vouloir en savoir plus." }
    ],
    "conditionnel_présent": [
      { de: "Ich möchte bitte einen Kaffee.", fr: "Je voudrais un café, s'il vous plaît." },
      { de: "Ich würde gerne mit dir sprechen.", fr: "Je voudrais te parler." },
      { de: "Möchten Sie sich setzen?", fr: "Voudriez-vous vous asseoir ?" }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du kommst.", fr: "Je veux que tu viennes." },
      { de: "Es ist nötig, dass er es will.", fr: "Il faut qu'il le veuille." },
      { de: "Ob du willst oder nicht.", fr: "Que tu le veuilles ou non." }
    ]
  }
};
