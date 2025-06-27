import type { Verb } from '@/types/verb-types';

export const sAppeler: Verb = {
  infinitive: "s'appeler",
  translation: "heißen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["appelle", "appelles", "appelle", "appelons", "appelez", "appellent"],
    passé_composé: { aux: "être", participle: "appelé" },
    imparfait: ["appelais", "appelais", "appelait", "appelions", "appeliez", "appelaient"],
    plus_que_parfait: { aux: "être", participle: "appelé" },
    futur_simple: ["appellerai", "appelleras", "appellera", "appellerons", "appellerez", "appelleront"],
    futur_proche: { aux: "aller", participle: "s'appeler" }
  },
  subjonctif: { présent: ["appelle", "appelles", "appelle", "appelions", "appeliez", "appellent"] },
  conditionnel: {
    présent: ["appellerais", "appellerais", "appellerait", "appellerions", "appelleriez", "appelleraient"],
    passé: { aux: "être", participle: "appelé" }
  },
  imperatif: { present: ["appelle-toi", "appelons-nous", "appelez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Wie heißt du?", fr: "Comment t'appelles-tu ?" },
      { de: "Ich heiße Marc.", fr: "Je m'appelle Marc." },
      { de: "Sie heißen Dupont.", fr: "Ils s'appellent Dupont." }
    ],
    "indicatif_passé_composé": [
      { de: "Mein erster Hund hieß Medor.", fr: "Mon premier chien s'est appelé Medor." },
      { de: "Wie hieß diese Sängerin?", fr: "Comment s'est appelée cette chanteuse ?" },
      { de: "Sie hießen für einen Tag Helden.", fr: "Ils se sont appelés des héros pour un jour." }
    ],
    "indicatif_imparfait": [
      { de: "Mein Großvater hieß Jean.", fr: "Mon grand-père s'appelait Jean." },
      { de: "Wie hieß deine Schule?", fr: "Comment s'appelait ton école ?" },
      { de: "Wir hießen die Unzertrennlichen.", fr: "Nous nous appelions les inséparables." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Er hatte sich selbst der Retter genannt.", fr: "Il s'était appelé le sauveur." },
      { de: "Sie hatten sich die besten Freunde der Welt genannt.", fr: "Ils s'étaient appelés les meilleurs amis du monde." }
    ],
    "indicatif_futur_simple": [
      { de: "Mein Sohn wird Thomas heißen.", fr: "Mon fils s'appellera Thomas." },
      { de: "Wie wird dein Unternehmen heißen?", fr: "Comment s'appellera ton entreprise ?" },
      { de: "Wir werden uns die Champions nennen.", fr: "Nous nous appellerons les champions." }
    ],
    "indicatif_futur_proche": [
      { de: "Mein Kind wird bald einen Namen haben.", fr: "Mon enfant va bientôt s'appeler." },
      { de: "Dieses Projekt wird 'Erfolg' heißen.", fr: "Ce projet va s'appeler 'Succès'." }
    ],
    "conditionnel_présent": [
      { de: "Wenn ich ein Mädchen hätte, würde sie Léa heißen.", fr: "Si j'avais une fille, elle s'appellerait Léa." },
      { de: "Er würde sich gerne 'der Große' nennen.", fr: "Il s'appellerait volontiers 'le Grand'." }
    ],
    "conditionnel_passé": [
      { de: "Ohne seine Einmischung hätte sich das Projekt anders genannt.", fr: "Sans son intervention, le projet se serait appelé différemment." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass er einen Namen hat.", fr: "Il faut qu'il s'appelle quelque chose." },
      { de: "Ich möchte, dass mein Unternehmen 'Innovation' heißt.", fr: "Je veux que mon entreprise s'appelle 'Innovation'." }
    ]
  }
};
