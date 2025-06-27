import type { Verb } from '@/types/verb-types';

export const insister: Verb = {
  infinitive: "insister",
  translation: "darauf bestehen / insistieren",
  verbGroup: 1,
  indicatif: {
    présent: ["insiste", "insistes", "insiste", "insistons", "insistez", "insistent"],
    passé_composé: { aux: "avoir", participle: "insisté" },
    imparfait: ["insistais", "insistais", "insistait", "insistions", "insistiez", "insistaient"],
    plus_que_parfait: { aux: "avoir", participle: "insisté" },
    futur_simple: ["insisterai", "insisteras", "insistera", "insisterons", "insisterez", "insisteront"],
    futur_proche: { aux: "aller", participle: "insister" }
  },
  subjonctif: { présent: ["insiste", "insistes", "insiste", "insistions", "insistiez", "insistent"] },
  conditionnel: { présent: ["insisterais", "insisterais", "insisterait", "insisterions", "insisteriez", "insisteraient"], passé: { aux: "avoir", participle: "insisté" } },
  imperatif: { present: ["insiste", "insistons", "insistez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich bestehe auf diesem Punkt.", fr: "J'insiste sur ce point." },
      { de: "Er besteht darauf, Recht zu haben.", fr: "Il insiste pour avoir raison." },
      { de: "Warum bestehst du darauf?", fr: "Pourquoi est-ce que tu insistes ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe darauf bestanden, dass er bleibt.", fr: "J'ai insisté pour qu'il reste." },
      { de: "Sie hat darauf bestanden, zu bezahlen.", fr: "Elle a insisté pour payer." },
      { de: "Wir haben darauf bestanden, die Wahrheit zu erfahren.", fr: "Nous avons insisté pour connaître la vérité." }
    ],
    "indicatif_imparfait": [
        { de: "Er bestand immer auf den Details.", fr: "Il insistait toujours sur les détails." },
        { de: "Sie bestand darauf, obwohl niemand zuhörte.", fr: "Elle insistait même si personne n'écoutait." },
        { de: "Ihr habt oft darauf bestanden.", fr: "Vous insistiez souvent." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Lehrer hatte auf dieser Regel bestanden.", fr: "Le professeur avait insisté sur cette règle." },
        { de: "Sie hatte darauf bestanden, ihn zu begleiten.", fr: "Elle avait insisté pour l'accompagner." },
        { de: "Ich hatte darauf bestanden, aber er wollte nicht.", fr: "J'avais insisté, mais il n'a pas voulu." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde auf einer Antwort bestehen.", fr: "J'insisterai pour avoir une réponse." },
      { de: "Sie wird darauf bestehen, mitzukommen.", fr: "Elle insistera pour venir." },
      { de: "Wir werden nicht darauf bestehen, wenn du nicht willst.", fr: "Nous n'insisterons pas si tu ne veux pas." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde darauf bestehen.", fr: "Je vais insister." },
      { de: "Er wird darauf bestehen, es zu tun.", fr: "Il va insister pour le faire." },
      { de: "Wirst du darauf bestehen?", fr: "Vas-tu insister ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde nicht so sehr darauf bestehen.", fr: "Je n'insisterais pas autant." },
        { de: "Er würde darauf bestehen, wenn es wichtig wäre.", fr: "Il insisterait si c'était important." },
        { de: "An deiner Stelle würden wir nicht darauf bestehen.", fr: "À ta place, nous n'insisterions pas." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du darauf bestehst.", fr: "Il est important que tu insistes." },
      { de: "Er will, dass ich darauf bestehe.", fr: "Il veut que j'insiste." },
      { de: "Obwohl sie darauf bestehen, bin ich nicht einverstanden.", fr: "Bien qu'ils insistent, je ne suis pas d'accord." }
    ]
  }
};
