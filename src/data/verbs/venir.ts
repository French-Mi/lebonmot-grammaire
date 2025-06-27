// src/data/verbs/venir.ts
import type { Verb } from '@/types/verb-types';

export const venir: Verb = {
  infinitive: "venir",
  translation: "kommen",
  verbGroup: 3,
  indicatif: {
    présent: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    passé_composé: { aux: "être", participle: "venu" },
    imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
    plus_que_parfait: { aux: "être", participle: "venu" },
    futur_simple: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
    futur_proche: { aux: "aller", participle: "venir" }
  },
  subjonctif: { présent: ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"] },
  conditionnel: { présent: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"], passé: { aux: "être", participle: "venu" } },
  imperatif: { present: ["viens", "venons", "venez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich komme sofort.", fr: "Je viens tout de suite." },
      { de: "Kommst du zur Party?", fr: "Tu viens à la fête ?" },
      { de: "Er kommt aus Frankreich.", fr: "Il vient de France." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin gestern gekommen.", fr: "Je suis venu(e) hier." },
      { de: "Warum ist sie nicht gekommen?", fr: "Pourquoi n'est-elle pas venue ?" },
      { de: "Sie sind zu spät gekommen.", fr: "Ils sont venus trop tard." }
    ],
    "indicatif_imparfait": [
      { de: "Er kam jeden Tag, um mich zu sehen.", fr: "Il venait me voir tous les jours." },
      { de: "Wir kamen oft hierher.", fr: "Nous venions souvent ici." },
      { de: "Du kamst immer mit guten Nachrichten.", fr: "Tu venais toujours avec de bonnes nouvelles." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich war gekommen, um dir zu helfen.", fr: "J'étais venu(e) pour t'aider." },
      { de: "Sie war mit ihrer Familie gekommen.", fr: "Elle était venue avec sa famille." },
      { de: "Sie waren nicht gekommen, weil sie krank waren.", fr: "Ils n'étaient pas venus car ils étaient malades." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen kommen.", fr: "Je viendrai demain." },
      { de: "Wirst du zur Besprechung kommen?", fr: "Tu viendras à la réunion ?" },
      { de: "Sie werden nicht kommen.", fr: "Ils ne viendront pas." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich kommen.", fr: "Je vais venir tout de suite." },
      { de: "Er wird mit uns kommen.", fr: "Il va venir avec nous." },
      { de: "Wir werden später kommen.", fr: "Nous allons venir plus tard." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde kommen, wenn ich könnte.", fr: "Je viendrais si je pouvais." },
      { de: "Würdest du zu meiner Party kommen?", fr: "Viendrais-tu à ma fête ?" },
      { de: "Er würde gerne kommen.", fr: "Il viendrait avec plaisir." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du kommst.", fr: "Je veux que tu viennes." },
      { de: "Es ist wichtig, dass er kommt.", fr: "Il est important qu'il vienne." },
      { de: "Warte, bis sie kommen.", fr: "Attends qu'ils viennent." }
    ]
  }
};
