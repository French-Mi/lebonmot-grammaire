import type { Verb } from '@/types/verb-types';

export const falloir: Verb = {
  infinitive: "falloir",
  translation: "müssen / nötig sein",
  verbGroup: 3,
  indicatif: {
    présent: ["", "", "il faut", "", "", ""],
    passé_composé: { aux: "avoir", participle: "fallu" },
    imparfait: ["", "", "il fallait", "", "", ""],
    plus_que_parfait: { aux: "avoir", participle: "fallu" },
    futur_simple: ["", "", "il faudra", "", "", ""],
    futur_proche: { aux: "aller", participle: "falloir" }
  },
  subjonctif: { présent: ["", "", "qu'il faille", "", "", ""] },
  conditionnel: { présent: ["", "", "il faudrait", "", "", ""], passé: { aux: "avoir", participle: "fallu" } },
  imperatif: { present: [] },
  examples: {
    "indicatif_présent": [
      { de: "Man muss Geduld haben.", fr: "Il faut de la patience." },
      { de: "Man muss gehen.", fr: "Il faut partir." },
      { de: "Was braucht man?", fr: "Qu'est-ce qu'il faut ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Es war notwendig zu handeln.", fr: "Il a fallu agir." },
      { de: "Es hat viel Mut erfordert.", fr: "Il a fallu beaucoup de courage." },
      { de: "Man musste eine Entscheidung treffen.", fr: "Il a fallu prendre une décision." }
    ],
    "indicatif_imparfait": [
        { de: "Man musste jeden Tag arbeiten.", fr: "Il fallait travailler tous les jours." },
        { de: "Es war nötig, vorsichtig zu sein.", fr: "Il fallait être prudent." },
        { de: "Es brauchte Zeit, um es zu verstehen.", fr: "Il fallait du temps pour comprendre." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Es wäre nötig gewesen, früher aufzubrechen.", fr: "Il avait fallu partir plus tôt." },
        { de: "Es hatte viel Anstrengung erfordert.", fr: "Il avait fallu beaucoup d'efforts." },
        { de: "Man hätte es tun müssen.", fr: "Il avait fallu le faire." }
    ],
    "indicatif_futur_simple": [
      { de: "Man wird gehen müssen.", fr: "Il faudra partir." },
      { de: "Es wird notwendig sein, eine Wahl zu treffen.", fr: "Il faudra faire un choix." },
      { de: "Man wird mehr Geld brauchen.", fr: "Il faudra plus d'argent." }
    ],
    "indicatif_futur_proche": [
      { de: "Man wird bald eine Entscheidung treffen müssen.", fr: "Il va bientôt falloir décider." },
      { de: "Man wird gehen müssen.", fr: "Il va falloir partir." },
      { de: "Es wird nötig sein, zu warten.", fr: "Il va falloir attendre." }
    ],
    "conditionnel_présent": [
        { de: "Man müsste mehr darüber nachdenken.", fr: "Il faudrait y réfléchir davantage." },
        { de: "Man sollte vorsichtig sein.", fr: "Il faudrait être prudent." },
        { de: "Es wäre nötig, die Regeln zu ändern.", fr: "Il faudrait changer les règles." }
    ],
    "subjonctif_présent": [
      { de: "Ich glaube nicht, dass es nötig ist.", fr: "Je ne pense pas qu'il faille." },
      { de: "Es ist die einzige Lösung, die es geben muss.", fr: "C'est la seule solution qu'il faille." },
      { de: "Es scheint, dass es nötig ist zu gehen.", fr: "Il semble qu'il faille partir." }
    ]
  }
};
