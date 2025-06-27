import type { Verb } from '@/types/verb-types';

export const pleuvoir: Verb = {
  infinitive: "pleuvoir",
  translation: "regnen",
  verbGroup: 3,
  indicatif: {
    présent: ["", "", "il pleut", "", "", ""],
    passé_composé: { aux: "avoir", participle: "plu" },
    imparfait: ["", "", "il pleuvait", "", "", ""],
    plus_que_parfait: { aux: "avoir", participle: "plu" },
    futur_simple: ["", "", "il pleuvra", "", "", ""],
    futur_proche: { aux: "aller", participle: "pleuvoir" }
  },
  subjonctif: { présent: ["", "", "qu'il pleuve", "", "", ""] },
  conditionnel: { présent: ["", "", "il pleuvrait", "", "", ""], passé: { aux: "avoir", participle: "plu" } },
  imperatif: { present: [] },
  examples: {
    "indicatif_présent": [
      { de: "Es regnet.", fr: "Il pleut." },
      { de: "Ich glaube, es regnet.", fr: "Je crois qu'il pleut." },
      { de: "Es regnet in Strömen.", fr: "Il pleut des cordes." }
    ],
    "indicatif_passé_composé": [
      { de: "Es hat die ganze Nacht geregnet.", fr: "Il a plu toute la nuit." },
      { de: "Gestern hat es viel geregnet.", fr: "Il a beaucoup plu hier." },
      { de: "Es hat während unseres Picknicks geregnet.", fr: "Il a plu pendant notre pique-nique." }
    ],
    "indicatif_imparfait": [
        { de: "Es regnete, als wir aufwachten.", fr: "Il pleuvait quand nous nous sommes réveillés." },
        { de: "Es regnete oft in dieser Region.", fr: "Il pleuvait souvent dans cette région." },
        { de: "Es regnete leicht.", fr: "Il pleuvait légèrement." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Es hatte die ganze Woche geregnet.", fr: "Il avait plu toute la semaine." },
        { de: "Es hatte so stark geregnet, dass der Fluss über die Ufer trat.", fr: "Il avait tellement plu que la rivière a débordé." },
        { de: "Zum Glück hatte es nicht geregnet.", fr: "Heureusement, il n'avait pas plu." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen wird es regnen.", fr: "Il pleuvra demain." },
      { de: "Glaubst du, es wird regnen?", fr: "Penses-tu qu'il pleuvra ?" },
      { de: "Es wird wahrscheinlich den ganzen Tag regnen.", fr: "Il pleuvra probablement toute la journée." }
    ],
    "indicatif_futur_proche": [
      { de: "Schau, es wird gleich regnen.", fr: "Regarde, il va pleuvoir." },
      { de: "Die Wettervorhersage sagt, dass es regnen wird.", fr: "La météo dit qu'il va pleuvoir." },
      { de: "Nimm einen Regenschirm, es wird regnen.", fr: "Prends un parapluie, il va pleuvoir." }
    ],
    "conditionnel_présent": [
        { de: "Es würde regnen, wenn die Wolken dunkler wären.", fr: "Il pleuvrait si les nuages étaient plus sombres." },
        { de: "Ohne die Sonne würde es den ganzen Tag regnen.", fr: "Sans le soleil, il pleuvrait toute la journée." },
        { de: "Es würde mich überraschen, wenn es regnen würde.", fr: "Ça m'étonnerait s'il pleuvrait." }
    ],
    "subjonctif_présent": [
      { de: "Ich hoffe, es regnet nicht.", fr: "J'espère qu'il ne pleuve pas." },
      { de: "Ob es regnet oder schneit, wir gehen raus.", fr: "Qu'il pleuve ou qu'il neige, nous sortons." },
      { de: "Ich habe Angst, dass es morgen regnet.", fr: "J'ai peur qu'il pleuve demain." }
    ]
  }
};
