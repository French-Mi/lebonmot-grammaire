import type { Verb } from '@/types/verb-types';

export const gouter: Verb = {
  infinitive: "goûter",
  translation: "probieren / kosten",
  verbGroup: 1,
  indicatif: {
    présent: ["goûte", "goûtes", "goûte", "goûtons", "goûtez", "goûtent"],
    passé_composé: { aux: "avoir", participle: "goûté" },
    imparfait: ["goûtais", "goûtais", "goûtait", "goûtions", "goûtiez", "goûtaient"],
    plus_que_parfait: { aux: "avoir", participle: "goûté" },
    futur_simple: ["goûterai", "goûteras", "goûtera", "goûterons", "goûterez", "goûteront"],
    futur_proche: { aux: "aller", participle: "goûter" }
  },
  subjonctif: { présent: ["goûte", "goûtes", "goûte", "goûtions", "goûtiez", "goûtent"] },
  conditionnel: { présent: ["goûterais", "goûterais", "goûterait", "goûterions", "goûteriez", "goûteraient"], passé: { aux: "avoir", participle: "goûté" } },
  imperatif: { present: ["goûte", "goûtons", "goûtez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich probiere die Suppe.", fr: "Je goûte la soupe." },
      { de: "Möchtest du probieren?", fr: "Tu veux goûter ?" },
      { de: "Wir probieren die Spezialität des Hauses.", fr: "Nous goûtons la spécialité de la maison." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe deinen Kuchen probiert, er ist köstlich.", fr: "J'ai goûté ton gâteau, il est délicieux." },
      { de: "Hast du den Wein gekostet?", fr: "As-tu goûté le vin ?" },
      { de: "Sie hat noch nie Austern probiert.", fr: "Elle n'a jamais goûté aux huîtres." }
    ],
    "indicatif_imparfait": [
        { de: "Der Koch kostete die Soße.", fr: "Le chef goûtait la sauce." },
        { de: "Als Kinder probierten wir alles.", fr: "Enfants, nous goûtions à tout." },
        { de: "Du hast immer zuerst gekostet.", fr: "Tu goûtais toujours en premier." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte diesen Käse noch nie probiert.", fr: "Je n'avais jamais goûté ce fromage." },
        { de: "Er hatte vom Gericht gekostet, bevor er es servierte.", fr: "Il avait goûté le plat avant de le servir." },
        { de: "Wir hatten bereits alle Weine probiert.", fr: "Nous avions déjà goûté tous les vins." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde alle Gerichte probieren.", fr: "Je goûterai à tous les plats." },
      { de: "Du wirst den Unterschied schmecken.", fr: "Tu goûteras la différence." },
      { de: "Wir werden die lokalen Produkte probieren.", fr: "Nous goûterons les produits locaux." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde deinen Kuchen probieren.", fr: "Je vais goûter ton gâteau." },
      { de: "Sie wird diese neue Frucht probieren.", fr: "Elle va goûter ce nouveau fruit." },
      { de: "Werden wir den Champagner probieren?", fr: "Allons-nous goûter le champagne ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne dieses Gericht probieren.", fr: "J'aimerais goûter ce plat." },
        { de: "Er würde alles probieren, wenn er könnte.", fr: "Il goûterait à tout s'il le pouvait." },
        { de: "Würdest du davon kosten?", fr: "Goûterais-tu à ça ?" }
    ],
    "subjonctif_présent": [
      { de: "Du musst es probieren, bevor du urteilst.", fr: "Il faut que tu goûtes avant de juger." },
      { de: "Ich möchte, dass sie die Suppe probiert.", fr: "Je veux qu'elle goûte la soupe." },
      { de: "Es ist besser, dass wir zuerst probieren.", fr: "Il vaut mieux que nous goûtions d'abord." }
    ]
  }
};
