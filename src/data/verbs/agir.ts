import type { Verb } from '@/types/verb-types';

export const agir: Verb = {
  infinitive: "agir",
  translation: "handeln",
  verbGroup: 2,
  indicatif: {
    présent: ["agis", "agis", "agit", "agissons", "agissez", "agissent"],
    passé_composé: { aux: "avoir", participle: "agi" },
    imparfait: ["agissais", "agissais", "agissait", "agissions", "agissiez", "agissaient"],
    plus_que_parfait: { aux: "avoir", participle: "agi" },
    futur_simple: ["agirai", "agiras", "agira", "agirons", "agirez", "agiront"],
    futur_proche: { aux: "aller", participle: "agir" }
  },
  subjonctif: { présent: ["agisse", "agisses", "agisse", "agissions", "agissiez", "agissent"] },
  conditionnel: { présent: ["agirais", "agirais", "agirait", "agirions", "agiriez", "agiraient"], passé: { aux: "avoir", participle: "agi" } },
  imperatif: { present: ["agis", "agissons", "agissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich handle schnell.", fr: "J'agis vite." },
      { de: "Er handelt im Interesse der Gruppe.", fr: "Il agit dans l'intérêt du groupe." },
      { de: "Wir müssen jetzt handeln.", fr: "Nous devons agir maintenant." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe nach bestem Wissen und Gewissen gehandelt.", fr: "J'ai agi en mon âme et conscience." },
      { de: "Sie hat schnell gehandelt.", fr: "Elle a agi rapidement." },
      { de: "Sie haben gemeinsam gehandelt.", fr: "Ils ont agi ensemble." }
    ],
    "indicatif_imparfait": [
        { de: "Er handelte immer mit Vorsicht.", fr: "Il agissait toujours avec prudence." },
        { de: "Wir handelten gemäß den Anweisungen.", fr: "Nous agissions selon les instructions." },
        { de: "Damals handelten die Leute anders.", fr: "À cette époque, les gens agissaient différemment." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte gehandelt, bevor ich nachdachte.", fr: "J'avais agi avant de réfléchir." },
        { de: "Sie hatte im Affekt gehandelt.", fr: "Elle avait agi sous le coup de l'émotion." },
        { de: "Wir hatten gehandelt, weil es notwendig war.", fr: "Nous avions agi parce que c'était nécessaire." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde sofort handeln.", fr: "J'agirai immédiatement." },
      { de: "Die Regierung wird handeln.", fr: "Le gouvernement agira." },
      { de: "Wir werden nach dem Gesetz handeln.", fr: "Nous agirons conformément à la loi." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde jetzt handeln.", fr: "Je vais agir maintenant." },
      { de: "Sie wird klug handeln.", fr: "Elle va agir prudemment." },
      { de: "Wir werden sofort handeln.", fr: "Nous allons agir tout de suite." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde anders handeln.", fr: "J'agirais différemment." },
        { de: "Was würdest du an meiner Stelle tun (handeln)?", fr: "Comment agirais-tu à ma place ?" },
        { de: "Er würde handeln, wenn er könnte.", fr: "Il agirait s'il le pouvait." }
    ],
    "subjonctif_présent": [
      { de: "Es ist Zeit, dass du handelst.", fr: "Il est temps que tu agisses." },
      { de: "Ich möchte, dass sie gemeinsam handeln.", fr: "Je veux qu'ils agissent ensemble." },
      { de: "Es ist wichtig, dass wir schnell handeln.", fr: "Il est important que nous agissions vite." }
    ]
  }
};
