// src/data/verbs/être.ts
import type { Verb } from '@/types/verb-types';

export const etre: Verb = {
  infinitive: "être",
  translation: "sein",
  verbGroup: 0,
  indicatif: {
    présent: ["suis", "es", "est", "sommes", "êtes", "sont"],
    passé_composé: { aux: "avoir", participle: "été" },
    imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
    plus_que_parfait: { aux: "avoir", participle: "été" },
    futur_simple: ["serai", "seras", "sera", "serons", "serez", "seront"],
    futur_proche: { aux: "aller", participle: "être" }
  },
  subjonctif: { présent: ["sois", "sois", "soit", "soyons", "soyez", "soient"] },
  conditionnel: { présent: ["serais", "serais", "serait", "serions", "seriez", "seraient"], passé: { aux: "avoir", participle: "été" } },
  imperatif: { present: ["sois", "soyons", "soyez"] },
  examples: {
    "indicatif_présent": [
        { de: "Ich bin müde.", fr: "Je suis fatigué(e)." },
        { de: "Der Himmel ist blau.", fr: "Le ciel est bleu." },
        { de: "Ihr seid zu spät.", fr: "Vous êtes en retard." }
    ],
    "indicatif_passé_composé": [
        { de: "Ich war überrascht.", fr: "J'ai été surpris(e)." },
        { de: "Der Film war sehr lang.", fr: "Le film a été très long." },
        { de: "Sie waren im Urlaub.", fr: "Ils ont été en vacances." }
    ],
    "indicatif_imparfait": [
        { de: "Ich war in Paris, als du angerufen hast.", fr: "J'étais à Paris quand tu as appelé." },
        { de: "Sie war immer gut gelaunt.", fr: "Elle était toujours de bonne humeur." },
        { de: "Wir waren sehr jung.", fr: "Nous étions très jeunes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Kuchen war köstlich gewesen.", fr: "Le gâteau avait été délicieux." },
        { de: "Sie war eine gute Schülerin gewesen.", fr: "Elle avait été une bonne élève." },
        { de: "Wir waren schon einmal dort gewesen.", fr: "Nous avions déjà été là." }
    ],
    "indicatif_futur_simple": [
        { de: "Ich werde in fünf Minuten da sein.", fr: "Je serai là dans cinq minutes." },
        { de: "Sie wird eine ausgezeichnete Ärztin sein.", fr: "Elle sera une excellente médecin." },
        { de: "Morgen wird Sonntag sein.", fr: "Demain, ce sera dimanche." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich fertig sein.", fr: "Je vais être prêt(e) bientôt." },
      { de: "Das wird schwierig sein.", fr: "Ça va être difficile." },
      { de: "Wir werden müde sein.", fr: "Nous allons être fatigués." }
    ],
    "conditionnel_présent": [
        { de: "Das wäre eine gute Idee.", fr: "Ce serait une bonne idée." },
        { de: "Ich wäre erfreut, Ihnen zu helfen.", fr: "Je serais ravi de vous aider." },
        { de: "Wären Sie morgen verfügbar?", fr: "Seriez-vous disponible demain ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du pünktlich bist.", fr: "Il est nécessaire que tu sois à l'heure." },
      { de: "Es ist schade, dass wir nicht zusammen sind.", fr: "C'est dommage que nous ne soyons pas ensemble." },
      { de: "Ich will, dass alles perfekt ist.", fr: "Je veux que tout soit parfait." }
    ]
  }
};
