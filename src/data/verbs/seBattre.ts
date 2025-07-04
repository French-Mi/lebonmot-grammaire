import type { Verb } from '@/types/verb-types';

export const seBattre: Verb = {
  infinitive: "se battre",
  translation: "sich streiten, kämpfen",
  verbGroup: 3,
  isReflexive: true,
  indicatif: {
    présent: ["bats", "bats", "bat", "battons", "battez", "battent"],
    passé_composé: { aux: 'être', participle: 'battu' },
    imparfait: ["battais", "battais", "battait", "battions", "battiez", "battaient"],
    plus_que_parfait: { aux: 'être', participle: 'battu' },
    futur_simple: ["battrai", "battras", "battra", "battrons", "battrez", "battront"],
    futur_proche: { aux: "aller", participle: "se battre" }
  },
  subjonctif: {
    présent: ["batte", "battes", "batte", "battions", "battiez", "battent"]
  },
  conditionnel: {
    présent: ["battrais", "battrais", "battrait", "battrions", "battriez", "battraient"],
    passé: { aux: 'être', participle: 'battu' }
  },
  imperatif: {
    present: ["bats-toi", "battons-nous", "battez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich kämpfe für meine Rechte.", fr: "Je me bats pour mes droits." },
      { de: "Warum streitest du dich immer mit deinem Bruder?", fr: "Pourquoi te bats-tu toujours avec ton frère ?" },
      { de: "Sie kämpfen gegen die Ungerechtigkeit.", fr: "Ils se battent contre l'injustice." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein ganzes Leben lang gekämpft.", fr: "Je me suis battu(e) toute ma vie." },
      { de: "Sie hat sich für diese Sache stark gemacht (gekämpft).", fr: "Elle s'est battue pour cette cause." },
      { de: "Wir haben uns bis zum Ende geschlagen.", fr: "Nous nous sommes battus jusqu'au bout." }
    ],
    "indicatif_imparfait": [
        { de: "Er kämpfte jeden Tag, um zu überleben.", fr: "Il se battait chaque jour pour survivre." },
        { de: "Als Kinder stritten wir uns oft.", fr: "Quand nous étions enfants, nous nous battions souvent." },
        { de: "Ihr habt euch immer für die Schwächsten eingesetzt.", fr: "Vous vous battiez toujours pour les plus faibles." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich gegen alle Widrigkeiten durchgekämpft.", fr: "Elle s'était battue contre vents et marées." },
        { de: "Wir hatten uns für eine verlorene Sache geschlagen.", fr: "Nous nous étions battus pour une cause perdue." },
        { de: "Du hattest dich mit ihm gestritten, bevor er ging.", fr: "Tu t'étais battu(e) avec lui avant qu'il ne parte." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde bis zum bitteren Ende kämpfen.", fr: "Je me battrai jusqu'au bout." },
      { de: "Wirst du für deine Überzeugungen kämpfen?", fr: "Te battras-tu pour tes convictions ?" },
      { de: "Sie werden sich wie Löwen schlagen.", fr: "Ils se battront comme des lions." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich nicht mit dir streiten.", fr: "Je ne vais pas me battre avec toi." },
      { de: "Sie wird für den ersten Platz kämpfen.", fr: "Elle va se battre pour la première place." },
      { de: "Wir werden uns für eine bessere Welt schlagen.", fr: "Nous allons nous battre pour un monde meilleur." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich für dich schlagen.", fr: "Je me battrais pour toi." },
        { de: "Würdest du dich für weniger Geld schlagen?", fr: "Te battrais-tu pour moins d'argent ?" },
        { de: "Sie würden sich nicht wegen einer so kleinen Sache streiten.", fr: "Ils ne se battraient pas pour si peu." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich an deiner Stelle auch gestritten.", fr: "Je me serais aussi battu(e) à ta place." },
        { de: "Sie hätte sich mehr geschlagen, wenn sie eine Chance gehabt hätte.", fr: "Elle se serait battue davantage si elle avait eu une chance." },
        { de: "Wir hätten uns nicht streiten sollen.", fr: "Nous n'aurions pas dû nous battre." }
    ],
    "subjonctif_présent": [
      { de: "Er will, dass ich für ihn kämpfe.", fr: "Il veut que je me batte pour lui." },
      { de: "Es ist wichtig, dass ihr euch für eure Zukunft schlagt.", fr: "Il est important que vous vous battiez pour votre avenir." },
      { de: "Damit sie sich schlagen, braucht es einen guten Grund.", fr: "Pour qu'ils se battent, il faut une bonne raison." }
    ]
  }
};
