import type { Verb } from '@/types/verb-types';

export const porter: Verb = {
  infinitive: "porter",
  translation: "tragen",
  verbGroup: 1,
  indicatif: {
    présent: ["porte", "portes", "porte", "portons", "portez", "portent"],
    passé_composé: { aux: "avoir", participle: "porté" },
    imparfait: ["portais", "portais", "portait", "portions", "portiez", "portaient"],
    plus_que_parfait: { aux: "avoir", participle: "porté" },
    futur_simple: ["porterai", "porteras", "portera", "porterons", "porterez", "porteront"],
    futur_proche: { aux: "aller", participle: "porter" }
  },
  subjonctif: { présent: ["porte", "portes", "porte", "portions", "portiez", "portent"] },
  conditionnel: { présent: ["porterais", "porterais", "porterait", "porterions", "porteriez", "porteraient"], passé: { aux: "avoir", participle: "porté" } },
  imperatif: { present: ["porte", "portons", "portez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich trage eine Brille.", fr: "Je porte des lunettes." },
      { de: "Er trägt einen schweren Koffer.", fr: "Il porte une valise lourde." },
      { de: "Was für Kleidung tragen Sie?", fr: "Quels vêtements portez-vous ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den ganzen Tag ein rotes Kleid getragen.", fr: "J'ai porté une robe rouge toute la journée." },
      { de: "Sie hat die Einkäufe nach oben getragen.", fr: "Elle a porté les courses en haut." },
      { de: "Wir haben ihm Glück gebracht.", fr: "Nous lui avons porté chance." }
    ],
    "indicatif_imparfait": [
        { de: "Damals trug sie immer Hüte.", fr: "À cette époque, elle portait toujours des chapeaux." },
        { de: "Du hast deine Tasche immer auf der linken Schulter getragen.", fr: "Tu portais toujours ton sac sur l'épaule gauche." },
        { de: "Die Soldaten trugen stolz ihre Uniform.", fr: "Les soldats portaient fièrement leur uniforme." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte den gleichen Mantel wie am Vortag getragen.", fr: "Il avait porté le même manteau que la veille." },
        { de: "Ich hatte die Kisten bereits in den Keller getragen.", fr: "J'avais déjà porté les boîtes à la cave." },
        { de: "Sie hatte ihm Vorwürfe gemacht (getragen).", fr: "Elle lui avait porté des accusations." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diesen Anzug zur Hochzeit tragen.", fr: "Je porterai ce costume au mariage." },
      { de: "Sie wird das Baby auf dem Arm tragen.", fr: "Elle portera le bébé dans ses bras." },
      { de: "Wir werden für unsere Handlungen die Verantwortung tragen.", fr: "Nous porterons la responsabilité de nos actes." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dieses T-Shirt tragen.", fr: "Je vais porter ce t-shirt." },
      { de: "Wirst du eine Krawatte tragen?", fr: "Tu vas porter une cravate ?" },
      { de: "Er wird die schwere Kiste tragen.", fr: "Il va porter la caisse lourde." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dieses Kleid nicht tragen.", fr: "Je ne porterais pas cette robe." },
        { de: "Er würde lieber eine Mütze tragen.", fr: "Il préférerait porter un bonnet." },
        { de: "Würdest du mir helfen, das zu tragen?", fr: "M'aiderais-tu à porter ça ?" }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du diesen Hut trägst.", fr: "Je veux que tu portes ce chapeau." },
      { de: "Es ist wichtig, dass wir eine Maske tragen.", fr: "Il est important que nous portions un masque." },
      { de: "Ich bezweifle, dass er einen Anzug trägt.", fr: "Je doute qu'il porte un costume." }
    ]
  }
};
