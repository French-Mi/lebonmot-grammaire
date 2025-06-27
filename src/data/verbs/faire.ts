// src/data/verbs/faire.ts
import type { Verb } from '@/types/verb-types';

export const faire: Verb = {
  infinitive: "faire",
  translation: "machen / tun",
  verbGroup: 3,
  indicatif: {
    présent: ["fais", "fais", "fait", "faisons", "faites", "font"],
    passé_composé: { aux: "avoir", participle: "fait" },
    imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
    plus_que_parfait: { aux: "avoir", participle: "fait" },
    futur_simple: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
    futur_proche: { aux: "aller", participle: "faire" }
  },
  subjonctif: { présent: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"] },
  conditionnel: { présent: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"], passé: { aux: "avoir", participle: "fait" } },
  imperatif: { present: ["fais", "faisons", "faites"] },
  examples: {
    "indicatif_présent": [
      { de: "Was machst du?", fr: "Qu'est-ce que tu fais ?" },
      { de: "Er macht Sport.", fr: "Il fait du sport." },
      { de: "Wir machen einen Kuchen.", fr: "Nous faisons un gâteau." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Hausaufgaben gemacht.", fr: "J'ai fait mes devoirs." },
      { de: "Was habt ihr gestern gemacht?", fr: "Qu'est-ce que vous avez fait hier ?" },
      { de: "Sie hat einen Spaziergang gemacht.", fr: "Elle a fait une promenade." }
    ],
    "indicatif_imparfait": [
      { de: "Als Kind machte ich oft Fehler.", fr: "Quand j'étais enfant, je faisais souvent des erreurs." },
      { de: "Es war schönes Wetter.", fr: "Il faisait beau." },
      { de: "Sie machten immer Lärm.", fr: "Ils faisaient toujours du bruit." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte bereits die Arbeit gemacht.", fr: "J'avais déjà fait le travail." },
      { de: "Sie hatte einen schönen Traum gehabt.", fr: "Elle avait fait un beau rêve." },
      { de: "Hattest du das vor meiner Ankunft gemacht?", fr: "Avais-tu fait cela avant mon arrivée ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es morgen machen.", fr: "Je le ferai demain." },
      { de: "Du wirst eine gute Wahl treffen.", fr: "Tu feras un bon choix." },
      { de: "Wir werden unser Bestes tun.", fr: "Nous ferons de notre mieux." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde einen Kaffee machen.", fr: "Je vais faire un café." },
      { de: "Sie wird einen Anruf tätigen.", fr: "Elle va faire un appel." },
      { de: "Wir werden eine Pause machen.", fr: "Nous allons faire une pause." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde das nicht tun.", fr: "Je ne ferais pas ça." },
      { de: "Würdest du das für mich tun?", fr: "Ferais-tu cela pour moi ?" },
      { de: "Das würde mir eine Freude machen.", fr: "Ça me ferait plaisir." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Arbeit gut machst.", fr: "Il est important que tu fasses bien ton travail." },
      { de: "Ich will nicht, dass er das macht.", fr: "Je ne veux pas qu'il fasse ça." },
      { de: "Es ist möglich, dass wir einen Fehler machen.", fr: "Il est possible que nous fassions une erreur." }
    ]
  }
};
