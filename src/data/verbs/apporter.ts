import type { Verb } from '@/types/verb-types';

export const apporter: Verb = {
  infinitive: "apporter",
  translation: "bringen / mitbringen",
  verbGroup: 1,
  indicatif: {
    présent: ["apporte", "apportes", "apporte", "apportons", "apportez", "apportent"],
    passé_composé: { aux: "avoir", participle: "apporté" },
    imparfait: ["apportais", "apportais", "apportait", "apportions", "apportiez", "apportaient"],
    plus_que_parfait: { aux: "avoir", participle: "apporté" },
    futur_simple: ["apporterai", "apporteras", "apportera", "apporterons", "apporterez", "apporteront"],
    futur_proche: { aux: "aller", participle: "apporter" }
  },
  subjonctif: { présent: ["apporte", "apportes", "apporte", "apportions", "apportiez", "apportent"] },
  conditionnel: { présent: ["apporterais", "apporterais", "apporterait", "apporterions", "apporteriez", "apporteraient"], passé: { aux: "avoir", participle: "apporté" } },
  imperatif: { present: ["apporte", "apportons", "apportez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich bringe den Nachtisch mit.", fr: "J'apporte le dessert." },
      { de: "Was bringst du zur Party mit?", fr: "Qu'est-ce que tu apportes à la fête ?" },
      { de: "Der Postbote bringt ein Paket.", fr: "Le facteur apporte un colis." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Wein mitgebracht.", fr: "J'ai apporté le vin." },
      { de: "Hast du deine Bücher mitgebracht?", fr: "As-tu apporté tes livres ?" },
      { de: "Sie haben gute Nachrichten gebracht.", fr: "Ils ont apporté de bonnes nouvelles." }
    ],
    "indicatif_imparfait": [
        { de: "Er brachte seiner Großmutter immer Blumen mit.", fr: "Il apportait toujours des fleurs à sa grand-mère." },
        { de: "Wir brachten immer ein Picknick mit.", fr: "Nous apportions toujours un pique-nique." },
        { de: "Du hast gute Laune in die Gruppe gebracht.", fr: "Tu apportais de la bonne humeur au groupe." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte alles Notwendige mitgebracht.", fr: "J'avais apporté tout le nécessaire." },
        { de: "Sie hatte ein Geschenk für jeden mitgebracht.", fr: "Elle avait apporté un cadeau pour chacun." },
        { de: "Wir hatten die Dokumente mitgebracht, die du verlangt hattest.", fr: "Nous avions apporté les documents que tu avais demandés." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde etwas zu trinken mitbringen.", fr: "J'apporterai quelque chose à boire." },
      { de: "Wirst du einen Salat mitbringen?", fr: "Tu apporteras une salade ?" },
      { de: "Diese Änderung wird viele Vorteile bringen.", fr: "Ce changement apportera beaucoup d'avantages." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir einen Kaffee bringen.", fr: "Je vais t'apporter un café." },
      { de: "Sie wird ihre Hilfe anbieten (bringen).", fr: "Elle va apporter son aide." },
      { de: "Wir werden die Stühle mitbringen.", fr: "Nous allons apporter les chaises." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde meine Hilfe anbieten (bringen).", fr: "J'apporterais mon aide." },
        { de: "Er würde mehr Präzision in seine Arbeit bringen.", fr: "Il apporterait plus de précision à son travail." },
        { de: "Würdest du einen Kuchen mitbringen?", fr: "Apporterais-tu un gâteau ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du deinen Ausweis mitbringst.", fr: "Il faut que tu apportes ta carte d'identité." },
      { de: "Ich möchte, dass er seine Gitarre mitbringt.", fr: "Je veux qu'il apporte sa guitare." },
      { de: "Es ist eine gute Idee, dass wir etwas beitragen (bringen).", fr: "C'est une bonne idée que nous apportions quelque chose." }
    ]
  }
};
