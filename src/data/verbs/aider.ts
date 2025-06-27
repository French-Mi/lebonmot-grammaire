import type { Verb } from '@/types/verb-types';

export const aider: Verb = {
  infinitive: "aider",
  translation: "helfen",
  verbGroup: 1,
  indicatif: {
    présent: ["aide", "aides", "aide", "aidons", "aidez", "aident"],
    passé_composé: { aux: "avoir", participle: "aidé" },
    imparfait: ["aidais", "aidais", "aidait", "aidions", "aidiez", "aidaient"],
    plus_que_parfait: { aux: "avoir", participle: "aidé" },
    futur_simple: ["aiderai", "aideras", "aidera", "aiderons", "aiderez", "aideront"],
    futur_proche: { aux: "aller", participle: "aider" }
  },
  subjonctif: { présent: ["aide", "aides", "aide", "aidions", "aidiez", "aident"] },
  conditionnel: { présent: ["aiderais", "aiderais", "aiderait", "aiderions", "aideriez", "aideraient"], passé: { aux: "avoir", participle: "aidé" } },
  imperatif: { present: ["aide", "aidons", "aidez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich helfe meiner Mutter.", fr: "J'aide ma mère." },
      { de: "Kannst du mir helfen?", fr: "Tu peux m'aider ?" },
      { de: "Wir helfen unseren Nachbarn.", fr: "Nous aidons nos voisins." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihm geholfen, umzuziehen.", fr: "Je l'ai aidé à déménager." },
      { de: "Sie hat mir sehr geholfen.", fr: "Elle m'a beaucoup aidé(e)." },
      { de: "Sie haben uns geholfen, den Weg zu finden.", fr: "Ils nous ont aidés à trouver le chemin." }
    ],
    "indicatif_imparfait": [
      { de: "Er half seinem Vater immer im Garten.", fr: "Il aidait toujours son père dans le jardin." },
      { de: "Als wir jung waren, halfen wir uns gegenseitig.", fr: "Quand nous étions jeunes, nous nous aidions mutuellement." },
      { de: "Du hast den alten Damen immer geholfen.", fr: "Tu aidais toujours les vieilles dames." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte mir geholfen, bevor ich fragte.", fr: "Il m'avait aidé avant que je ne demande." },
        { de: "Wir hatten ihnen bereits geholfen.", fr: "Nous les avions déjà aidés." },
        { de: "Sie hatte ihm geholfen, weil sie ihn mochte.", fr: "Elle l'avait aidé parce qu'elle l'aimait bien." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir morgen helfen.", fr: "Je t'aiderai demain." },
      { de: "Wirst du uns helfen?", fr: "Est-ce que tu nous aideras ?" },
      { de: "Sie werden den Bedürftigen helfen.", fr: "Ils aideront les personnes dans le besoin." }
    ],
    "indicatif_futur_proche": [
        { de: "Ich werde dir gleich helfen.", fr: "Je vais t'aider tout de suite." },
        { de: "Er wird seinem Bruder helfen.", fr: "Il va aider son frère." },
        { de: "Wir werden dir beim Kochen helfen.", fr: "Nous allons t'aider à cuisiner." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dir helfen, wenn ich könnte.", fr: "Je t'aiderais si je pouvais." },
        { de: "Würden Sie mir helfen, bitte?", fr: "Pourriez-vous m'aider, s'il vous plaît ?" },
        { de: "Er würde uns helfen, wenn er Zeit hätte.", fr: "Il nous aiderait s'il avait le temps." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du ihm hilfst.", fr: "Il est important que tu l'aides." },
      { de: "Ich möchte, dass Sie uns helfen.", fr: "Je veux que vous nous aidiez." },
      { de: "Es ist gut, dass wir uns gegenseitig helfen.", fr: "C'est bien que nous nous aidions." }
    ]
  }
};
