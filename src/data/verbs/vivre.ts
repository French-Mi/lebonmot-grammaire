import type { Verb } from '@/types/verb-types';

export const vivre: Verb = {
  infinitive: "vivre",
  translation: "leben",
  verbGroup: 3,
  indicatif: {
    présent: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
    passé_composé: { aux: "avoir", participle: "vécu" },
    imparfait: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
    plus_que_parfait: { aux: "avoir", participle: "vécu" },
    futur_simple: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
    futur_proche: { aux: "aller", participle: "vivre" }
  },
  subjonctif: { présent: ["vive", "vives", "vive", "vivions", "viviez", "vivent"] },
  conditionnel: { présent: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"], passé: { aux: "avoir", participle: "vécu" } },
  imperatif: { present: ["vis", "vivons", "vivez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lebe in Deutschland.", fr: "Je vis en Allemagne." },
      { de: "Wo lebst du?", fr: "Où vis-tu ?" },
      { de: "Wir leben in einer schönen Zeit.", fr: "Nous vivons une époque formidable." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe drei Jahre in Paris gelebt.", fr: "J'ai vécu à Paris pendant trois ans." },
      { de: "Sie hat eine schwierige Erfahrung gemacht (erlebt).", fr: "Elle a vécu une expérience difficile." },
      { de: "Wir haben unglaubliche Momente erlebt.", fr: "Nous avons vécu des moments incroyables." }
    ],
    "indicatif_imparfait": [
        { de: "Meine Großeltern lebten auf dem Land.", fr: "Mes grands-parents vivaient à la campagne." },
        { de: "Damals lebten wir sorglos.", fr: "À cette époque, nous vivions sans soucis." },
        { de: "Er lebte von Tag zu Tag.", fr: "Il vivait au jour le jour." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte noch nie eine solche Erfahrung gemacht (erlebt).", fr: "Je n'avais jamais vécu une telle expérience." },
        { de: "Sie hatte lange Zeit allein gelebt.", fr: "Elle avait vécu seule pendant longtemps." },
        { de: "Sie hatten ein Abenteuer erlebt.", fr: "Ils avaient vécu une aventure." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde 100 Jahre alt werden.", fr: "Je vivrai jusqu'à 100 ans." },
      { de: "Du wirst eine außergewöhnliche Geschichte erleben.", fr: "Tu vivras une histoire extraordinaire." },
      { de: "Wir werden den Moment leben.", fr: "Nous vivrons le moment présent." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde auf dem Land leben.", fr: "Je vais vivre à la campagne." },
      { de: "Wir werden eine unglaubliche Erfahrung machen.", fr: "Nous allons vivre une expérience incroyable." },
      { de: "Du wirst einen Traum leben.", fr: "Tu vas vivre un rêve." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne am Meer leben.", fr: "J'aimerais vivre au bord de la mer." },
        { de: "Er würde länger leben, wenn er mit dem Rauchen aufhören würde.", fr: "Il vivrait plus longtemps s'il arrêtait de fumer." },
        { de: "Wir würden wie Könige leben.", fr: "Nous vivrions comme des rois." }
    ],
    "subjonctif_présent": [
      { de: "Lang lebe der König!", fr: "Vive le roi !" },
      { de: "Es ist notwendig, dass wir in Harmonie leben.", fr: "Il faut que nous vivions en harmonie." },
      { de: "Ich möchte, dass du ein glückliches Leben führst.", fr: "Je veux que tu vives une vie heureuse." }
    ]
  }
};
