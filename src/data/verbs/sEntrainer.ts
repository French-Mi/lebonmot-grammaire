import type { Verb } from '@/types/verb-types';

export const sEntrainer: Verb = {
  infinitive: "s'entraîner",
  translation: "trainieren",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["entraîne", "entraînes", "entraîne", "entraînons", "entraînez", "entraînent"],
    passé_composé: { aux: 'être', participle: 'entraîné' },
    imparfait: ["entraînais", "entraînais", "entraînait", "entraînions", "entraîniez", "entraînaient"],
    plus_que_parfait: { aux: 'être', participle: 'entraîné' },
    futur_simple: ["entraînerai", "entraîneras", "entraînera", "entraînerons", "entraînerez", "entraîneront"],
    futur_proche: { aux: "aller", participle: "s'entraîner" }
  },
  subjonctif: { présent: ["entraîne", "entraînes", "entraîne", "entraînions", "entraîniez", "entraînent"] },
  conditionnel: {
    présent: ["entraînerais", "entraînerais", "entraînerait", "entraînerions", "entraîneriez", "entraîneraient"],
    passé: { aux: 'être', participle: 'entraîné' }
  },
  imperatif: { present: ["entraîne-toi", "entraînons-nous", "entraînez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich trainiere jeden Tag.", fr: "Je m'entraîne tous les jours." },
      { de: "Trainierst du für einen Marathon?", fr: "Tu t'entraînes pour un marathon ?" },
      { de: "Die Mannschaft trainiert im Stadion.", fr: "L'équipe s'entraîne au stade." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe heute Morgen trainiert.", fr: "Je me suis entraîné(e) ce matin." },
      { de: "Wir haben hart für das Spiel trainiert.", fr: "Nous nous sommes entraînés dur pour le match." },
      { de: "Sie hat im Fitnessstudio trainiert.", fr: "Elle s'est entraînée à la salle de sport." }
    ],
    "indicatif_imparfait": [
        { de: "Früher trainierte ich jeden Abend.", fr: "Avant, je m'entraînais tous les soirs." },
        { de: "Wir trainierten zusammen für den Wettkampf.", fr: "Nous nous entraînions ensemble pour la compétition." },
        { de: "Er trainierte immer mit großer Disziplin.", fr: "Il s'entraînait toujours avec une grande discipline." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte vor dem Wettkampf gut trainiert.", fr: "Je m'étais bien entraîné(e) avant la compétition." },
        { de: "Sie hatten trainiert, um zu gewinnen.", fr: "Ils s'étaient entraînés pour gagner." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich im Park trainieren.", fr: "Demain, je m'entraînerai dans le parc." },
      { de: "Wirst du weiterhin trainieren?", fr: "T'entraîneras-tu encore ?" },
      { de: "Sie werden für die Olympischen Spiele trainieren.", fr: "Ils s'entraîneront pour les Jeux Olympiques." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich trainieren.", fr: "Je vais m'entraîner." },
      { de: "Wir werden im Fitnessstudio trainieren.", fr: "Nous allons nous entraîner à la salle de sport." },
      { de: "Er wird mit seinem Team trainieren.", fr: "Il va s'entraîner avec son équipe." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich mehr Zeit hätte, würde ich mehr trainieren.", fr: "Si j'avais plus de temps, je m'entraînerais davantage." },
        { de: "Würdest du mit mir trainieren?", fr: "T'entraînerais-tu avec moi ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mehr trainiert, wenn ich nicht krank gewesen wäre.", fr: "Je me serais entraîné(e) plus si je n'avais pas été malade." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du regelmäßig trainierst.", fr: "Il est important que tu t'entraînes régulièrement." },
      { de: "Der Trainer will, dass wir jeden Tag trainieren.", fr: "L'entraîneur veut que nous nous entraînions tous les jours." }
    ]
  }
};
