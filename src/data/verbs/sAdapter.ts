import type { Verb } from '@/types/verb-types';

export const sAdapter: Verb = {
  infinitive: "s'adapter",
  translation: "sich anpassen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["adapte", "adaptes", "adapte", "adaptons", "adaptez", "adaptent"],
    passé_composé: { aux: 'être', participle: 'adapté' },
    imparfait: ["adaptais", "adaptais", "adaptait", "adaptions", "adaptiez", "adaptaient"],
    plus_que_parfait: { aux: 'être', participle: 'adapté' },
    futur_simple: ["adapterai", "adapteras", "adaptera", "adapterons", "adapterez", "adapteront"],
    futur_proche: { aux: "aller", participle: "s'adapter" }
  },
  subjonctif: {
    présent: ["adapte", "adaptes", "adapte", "adaptions", "adaptiez", "adaptent"]
  },
  conditionnel: {
    présent: ["adapterais", "adapterais", "adapterait", "adapterions", "adapteriez", "adapteraient"],
    passé: { aux: 'être', participle: 'adapté' }
  },
  imperatif: {
    present: ["adapte-toi", "adaptons-nous", "adaptez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich passe mich leicht an neue Situationen an.", fr: "Je m'adapte facilement aux nouvelles situations." },
      { de: "Du musst dich an die Regeln anpassen.", fr: "Tu dois t'adapter aux règles." },
      { de: "Die Kinder passen sich schnell an.", fr: "Les enfants s'adaptent vite." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich an das Leben hier angepasst.", fr: "Je me suis adapté(e) à la vie ici." },
      { de: "Sie hat sich schnell an ihr neues Team angepasst.", fr: "Elle s'est vite adaptée à sa nouvelle équipe." },
      { de: "Wir haben uns an die veränderten Umstände angepasst.", fr: "Nous nous sommes adaptés aux circonstances changeantes." }
    ],
    "indicatif_imparfait": [
        { de: "Er passte sich nur schwer an die Kälte an.", fr: "Il s'adaptait difficilement au froid." },
        { de: "Wir passten uns dem Rhythmus der Natur an.", fr: "Nous nous adaptions au rythme de la nature." },
        { de: "Ihr habt euch immer an die Wünsche der anderen angepasst.", fr: "Vous vous adaptiez toujours aux désirs des autres." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich perfekt an ihre neue Rolle angepasst.", fr: "Elle s'était parfaitement adaptée à son nouveau rôle." },
        { de: "Sie hatten sich an ein langsameres Leben angepasst, bevor sie zurückkamen.", fr: "Ils s'étaient adaptés à une vie plus lente avant de revenir." },
        { de: "Nach ein paar Wochen hatte ich mich an den Lärm angepasst.", fr: "Après quelques semaines, je m'étais adapté(e) au bruit." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich anpassen, keine Sorge.", fr: "Je m'adapterai, ne t'inquiète pas." },
      { de: "Wirst du dich an diese Veränderungen anpassen?", fr: "T'adapteras-tu à ces changements ?" },
      { de: "Sie werden sich anpassen müssen.", fr: "Ils devront s'adapter." }
    ],
    "indicatif_futur_proche": [
      { de: "Er wird sich an die neue Arbeitsweise anpassen.", fr: "Il va s'adapter à la nouvelle méthode de travail." },
      { de: "Wir werden uns an die Situation anpassen.", fr: "Nous allons nous adapter à la situation." },
      { de: "Ihr werdet euch sehr schnell anpassen.", fr: "Vous allez vous adapter très vite." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich anpassen, wenn es nötig wäre.", fr: "Je m'adapterais si c'était nécessaire." },
        { de: "Er würde sich leichter anpassen, wenn du ihm helfen würdest.", fr: "Il s'adapterait plus facilement si tu l'aidais." },
        { de: "Wir würden uns an jede Entscheidung anpassen.", fr: "Nous nous adapterions à n'importe quelle décision." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich angepasst, wenn ich gewusst hätte.", fr: "Je me serais adapté(e) si j'avais su." },
        { de: "Sie hätten sich angepasst, wenn man es ihnen erklärt hätte.", fr: "Ils se seraient adaptés si on le leur avait expliqué." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dich anpasst.", fr: "Il est essentiel que tu t'adaptes." },
      { de: "Ich möchte, dass sie sich an unsere Kultur anpassen.", fr: "Je souhaite qu'ils s'adaptent à notre culture." },
      { de: "Damit wir uns anpassen können, brauchen wir Zeit.", fr: "Pour que nous nous adaptions, il nous faut du temps." }
    ]
  }
};
