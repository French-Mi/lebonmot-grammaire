// src/data/verbs/dire.ts
import type { Verb } from '@/types/verb-types';

export const dire: Verb = {
  infinitive: "dire",
  translation: "sagen",
  verbGroup: 3,
  indicatif: {
    présent: ["dis", "dis", "dit", "disons", "dites", "disent"],
    passé_composé: { aux: "avoir", participle: "dit" },
    imparfait: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
    plus_que_parfait: { aux: "avoir", participle: "dit" },
    futur_simple: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
    futur_proche: { aux: "aller", participle: "dire" }
  },
  subjonctif: { présent: ["dise", "dises", "dise", "disions", "disiez", "disent"] },
  conditionnel: { présent: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"], passé: { aux: "avoir", participle: "dit" } },
  imperatif: { present: ["dis", "disons", "dites"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich sage die Wahrheit.", fr: "Je dis la vérité." },
      { de: "Was sagst du?", fr: "Qu'est-ce que tu dis ?" },
      { de: "Sie sagen immer das Gleiche.", fr: "Ils disent toujours la même chose." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe nichts gesagt.", fr: "Je n'ai rien dit." },
      { de: "Was hat er gesagt?", fr: "Qu'est-ce qu'il a dit ?" },
      { de: "Wir haben ihm die Neuigkeit erzählt.", fr: "Nous lui avons dit la nouvelle." }
    ],
    "indicatif_imparfait": [
      { de: "Er sagte immer, dass er müde sei.", fr: "Il disait toujours qu'il était fatigué." },
      { de: "Was hast du gerade gesagt?", fr: "Qu'est-ce que tu disais ?" },
      { de: "Sie sagten oft Witze.", fr: "Ils disaient souvent des blagues." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte ihm bereits gesagt, er solle gehen.", fr: "Je lui avais déjà dit de partir." },
      { de: "Sie hatte ihm nie die Wahrheit gesagt.", fr: "Elle ne lui avait jamais dit la vérité." },
      { de: "Wir hatten ihnen gesagt, sie sollten vorsichtig sein.", fr: "Nous leur avions dit d'être prudents." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es dir morgen sagen.", fr: "Je te le dirai demain." },
      { de: "Du wirst es ihm nicht sagen.", fr: "Tu ne le lui diras pas." },
      { de: "Was werden sie sagen?", fr: "Que diront-ils ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir ein Geheimnis verraten.", fr: "Je vais te dire un secret." },
      { de: "Sie wird die Wahrheit sagen.", fr: "Elle va dire la vérité." },
      { de: "Wir werden ihnen 'Hallo' sagen.", fr: "Nous allons leur dire bonjour." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde sagen, es ist eine gute Idee.", fr: "Je dirais que c'est une bonne idée." },
      { de: "Man würde sagen, es ist Magie.", fr: "On dirait de la magie." },
      { de: "Was würdest du an meiner Stelle sagen?", fr: "Que dirais-tu à ma place ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du die Wahrheit sagst.", fr: "Il est important que tu dises la vérité." },
      { de: "Er will, dass ich ihm alles sage.", fr: "Il veut que je lui dise tout." },
      { de: "Ich habe Angst, dass sie nein sagen.", fr: "J'ai peur qu'ils disent non." }
    ]
  }
};
