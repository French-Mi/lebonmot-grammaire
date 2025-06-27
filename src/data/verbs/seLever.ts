import type { Verb } from '@/types/verb-types';

export const seLever: Verb = {
  infinitive: 'se lever',
  translation: 'aufstehen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["lève", "lèves", "lève", "levons", "levez", "lèvent"],
    passé_composé: { aux: 'être', participle: 'levé' },
    imparfait: ["levais", "levais", "levait", "levions", "leviez", "levaient"],
    plus_que_parfait: { aux: 'être', participle: 'levé' },
    futur_simple: ["lèverai", "lèveras", "lèvera", "lèverons", "lèverez", "lèveront"],
    futur_proche: { aux: "aller", participle: "se lever" }
  },
  subjonctif: { présent: ["lève", "lèves", "lève", "levions", "leviez", "lèvent"] },
  conditionnel: {
    présent: ["lèverais", "lèverais", "lèverait", "lèverions", "lèveriez", "lèveraient"],
    passé: { aux: 'être', participle: 'levé' }
  },
  imperatif: { present: ["lève-toi", "levons-nous", "levez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich stehe um 7 Uhr auf.", fr: "Je me lève à 7 heures." },
      { de: "Wann stehst du auf?", fr: "Tu te lèves à quelle heure ?" },
      { de: "Wir stehen früh auf, um zur Arbeit zu gehen.", fr: "Nous nous levons tôt pour aller au travail." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin heute Morgen spät aufgestanden.", fr: "Je me suis levé(e) tard ce matin." },
      { de: "Sie ist mit der Sonne aufgestanden.", fr: "Elle s'est levée avec le soleil." },
      { de: "Wir sind aufgestanden, als der Wecker klingelte.", fr: "Nous nous sommes levés quand le réveil a sonné." }
    ],
    "indicatif_imparfait": [
        { de: "Als ich Student war, stand ich immer spät auf.", fr: "Quand j'étais étudiant, je me levais toujours tard." },
        { de: "Wir standen jeden Morgen um 6 Uhr auf.", fr: "Nous nous levions à 6 heures tous les matins." },
        { de: "Er stand auf, als sie den Raum betrat.", fr: "Il se levait quand elle est entrée dans la pièce." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war schon aufgestanden, als du angekommen bist.", fr: "Je m'étais déjà levé(e) quand tu es arrivé." },
        { de: "Sie waren aufgestanden, bevor die Sonne aufging.", fr: "Ils s'étaient levés avant le lever du soleil." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich früh aufstehen.", fr: "Demain, je me lèverai tôt." },
      { de: "Du wirst sehr früh aufstehen müssen.", fr: "Tu te lèveras très tôt." },
      { de: "Sie werden um 8 Uhr aufstehen.", fr: "Ils se lèveront à 8 heures." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich aufstehen.", fr: "Je vais me lever." },
      { de: "Wir werden in fünf Minuten aufstehen.", fr: "Nous allons nous lever dans cinq minutes." },
      { de: "Sie werden aufstehen, wenn sie bereit sind.", fr: "Ils vont se lever quand ils seront prêts." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich nicht arbeiten müsste, würde ich später aufstehen.", fr: "Si je ne devais pas travailler, je me lèverais plus tard." },
        { de: "Würdest du früher aufstehen, um Sport zu machen?", fr: "Te lèverais-tu plus tôt pour faire du sport ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich wäre früher aufgestanden, wenn ich den Wecker gehört hätte.", fr: "Je me serais levé(e) plus tôt si j'avais entendu le réveil." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du aufstehst.", fr: "Il faut que tu te lèves." },
      { de: "Ich möchte, dass wir zusammen aufstehen.", fr: "Je veux que nous nous levions ensemble." }
    ]
  }
};
