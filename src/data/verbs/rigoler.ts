import type { Verb } from '@/types/verb-types';

export const rigoler: Verb = {
  infinitive: "rigoler",
  translation: "lachen / spaßen",
  verbGroup: 1,
  indicatif: {
    présent: ["rigole", "rigoles", "rigole", "rigolons", "rigolez", "rigolent"],
    passé_composé: { aux: "avoir", participle: "rigolé" },
    imparfait: ["rigolais", "rigolais", "rigolait", "rigolions", "rigoliez", "rigolaient"],
    plus_que_parfait: { aux: "avoir", participle: "rigolé" },
    futur_simple: ["rigolerai", "rigoleras", "rigolera", "rigolerons", "rigolerez", "rigoleront"],
    futur_proche: { aux: "aller", participle: "rigoler" }
  },
  subjonctif: { présent: ["rigole", "rigoles", "rigole", "rigolions", "rigoliez", "rigolent"] },
  conditionnel: { présent: ["rigolerais", "rigolerais", "rigolerait", "rigolerions", "rigoleriez", "rigoleraient"], passé: { aux: "avoir", participle: "rigolé" } },
  imperatif: { present: ["rigole", "rigolons", "rigolez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lache über seinen Witz.", fr: "Je rigole de sa blague." },
      { de: "Du scherzt, oder?", fr: "Tu rigoles, n'est-ce pas ?" },
      { de: "Wir lachen viel zusammen.", fr: "Nous rigolons beaucoup ensemble." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe sehr gelacht.", fr: "J'ai bien rigolé." },
      { de: "Sie hat über den Film gelacht.", fr: "Elle a rigolé devant le film." },
      { de: "Wir haben über unsere alten Fotos gelacht.", fr: "Nous avons rigolé de nos vieilles photos." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kinder lachten wir über alles.", fr: "Enfants, nous rigolions de tout." },
        { de: "Er lachte immer über seine eigenen Witze.", fr: "Il rigolait toujours de ses propres blagues." },
        { de: "Ihr habt viel gelacht.", fr: "Vous rigoliez beaucoup." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Wir hatten so sehr gelacht, dass wir weinten.", fr: "Nous avions tellement rigolé que nous pleurions." },
        { de: "Ich hatte noch nie so viel gelacht.", fr: "Je n'avais jamais autant rigolé." },
        { de: "Sie hatte über eine Erinnerung gelacht.", fr: "Elle avait rigolé d'un souvenir." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst lachen, wenn ich es dir erzähle.", fr: "Tu rigoleras quand je te le dirai." },
      { de: "Wir werden morgen Abend gut lachen.", fr: "Nous rigolerons bien demain soir." },
      { de: "Ich verspreche dir, du wirst lachen.", fr: "Je te promets que tu rigoleras." }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden gleich lachen.", fr: "Nous allons bien rigoler." },
      { de: "Ich glaube, ich werde lachen.", fr: "Je crois que je vais rigoler." },
      { de: "Du wirst lachen.", fr: "Tu vas rigoler." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde lachen, wenn es lustig wäre.", fr: "Je rigolerais si c'était drôle." },
        { de: "Das würde uns zum Lachen bringen.", fr: "Cela nous ferait rigoler." },
        { de: "Er würde nicht einmal lachen.", fr: "Il ne rigolerait même pas." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass wir ein wenig lachen.", fr: "Je veux que nous rigolions un peu." },
      { de: "Es ist selten, dass er lacht.", fr: "Il est rare qu'il rigole." },
      { de: "Es ist nicht nötig, dass du darüber lachst.", fr: "Il n'est pas nécessaire que tu rigoles de ça." }
    ]
  }
};
