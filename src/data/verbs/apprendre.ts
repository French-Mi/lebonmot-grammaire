import type { Verb } from '@/types/verb-types';

export const apprendre: Verb = {
  infinitive: "apprendre",
  translation: "lernen",
  verbGroup: 3,
  indicatif: {
    présent: ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
    passé_composé: { aux: "avoir", participle: "appris" },
    imparfait: ["apprenais", "apprenais", "apprenait", "apprenions", "appreniez", "apprenaient"],
    plus_que_parfait: { aux: "avoir", participle: "appris" },
    futur_simple: ["apprendrai", "apprendras", "apprendra", "apprendrons", "apprendrez", "apprendront"],
    futur_proche: { aux: "aller", participle: "apprendre" }
  },
  subjonctif: { présent: ["apprenne", "apprennes", "apprenne", "apprenions", "appreniez", "apprennent"] },
  conditionnel: { présent: ["apprendrais", "apprendrais", "apprendrait", "apprendrions", "apprendriez", "apprendraient"], passé: { aux: "avoir", participle: "appris" } },
  imperatif: { present: ["apprends", "apprenons", "apprenez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lerne Französisch.", fr: "J'apprends le français." },
      { de: "Was lernst du in der Schule?", fr: "Qu'est-ce que tu apprends à l'école ?" },
      { de: "Wir lernen schnell.", fr: "Nous apprenons vite." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Neuigkeit erfahren.", fr: "J'ai appris la nouvelle." },
      { de: "Sie hat gelernt zu schwimmen.", fr: "Elle a appris à nager." },
      { de: "Wir haben viel gelernt.", fr: "Nous avons beaucoup appris." }
    ],
    "indicatif_imparfait": [
        { de: "Ich lernte jeden Tag ein neues Wort.", fr: "J'apprenais un nouveau mot chaque jour." },
        { de: "Er lernte Gitarre spielen.", fr: "Il apprenait à jouer de la guitare." },
        { de: "Wir lernten die Geschichte Frankreichs.", fr: "Nous apprenions l'histoire de France." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte gelernt, geduldig zu sein.", fr: "J'avais appris à être patient." },
        { de: "Sie hatte ihre Lektion gelernt.", fr: "Elle avait appris sa leçon." },
        { de: "Sie hatten durch ihre Fehler gelernt.", fr: "Ils avaient appris de leurs erreurs." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde eine neue Sprache lernen.", fr: "J'apprendrai une nouvelle langue." },
      { de: "Du wirst lernen, ein Auto zu fahren.", fr: "Tu apprendras à conduire une voiture." },
      { de: "Wir werden die Ergebnisse morgen erfahren.", fr: "Nous apprendrons les résultats demain." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde kochen lernen.", fr: "Je vais apprendre à cuisiner." },
      { de: "Sie wird eine gute Nachricht erfahren.", fr: "Elle va apprendre une bonne nouvelle." },
      { de: "Wir werden tanzen lernen.", fr: "Nous allons apprendre à danser." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne Chinesisch lernen.", fr: "J'apprendrais bien le chinois." },
        { de: "Er würde schneller lernen, wenn er mehr üben würde.", fr: "Il apprendrait plus vite s'il pratiquait plus." },
        { de: "Wir würden die Nachricht mit Freude erfahren.", fr: "Nous apprendrions la nouvelle avec joie." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Lektionen lernst.", fr: "Il est important que tu apprennes tes leçons." },
      { de: "Ich möchte, dass er lernt, respektvoll zu sein.", fr: "Je veux qu'il apprenne à être respectueux." },
      { de: "Damit wir es lernen, müssen wir es wiederholen.", fr: "Pour que nous l'apprenions, nous devons le répéter." }
    ]
  }
};
