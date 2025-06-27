// src/data/verbs/pouvoir.ts
import type { Verb } from '@/types/verb-types';

export const pouvoir: Verb = {
  infinitive: "pouvoir",
  translation: "können / dürfen",
  verbGroup: 3,
  indicatif: {
    présent: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    passé_composé: { aux: "avoir", participle: "pu" },
    imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
    plus_que_parfait: { aux: "avoir", participle: "pu" },
    futur_simple: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
    futur_proche: { aux: "aller", participle: "pouvoir" }
  },
  subjonctif: { présent: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"] },
  conditionnel: { présent: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"], passé: { aux: "avoir", participle: "pu" } },
  imperatif: { present: [] }, // Kein Imperativ für 'pouvoir'
  examples: {
    "indicatif_présent": [
      { de: "Ich kann dir helfen.", fr: "Je peux t'aider." },
      { de: "Kannst du die Tür schließen?", fr: "Tu peux fermer la porte ?" },
      { de: "Sie können jetzt eintreten.", fr: "Vous pouvez entrer maintenant." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe nicht kommen können.", fr: "Je n'ai pas pu venir." },
      { de: "Er hat das Problem lösen können.", fr: "Il a pu résoudre le problème." },
      { de: "Wir haben nicht schlafen können.", fr: "Nous n'avons pas pu dormir." }
    ],
    "indicatif_imparfait": [
      { de: "Als ich jünger war, konnte ich schneller rennen.", fr: "Quand j'étais plus jeune, je pouvais courir plus vite." },
      { de: "Wir konnten nichts sehen.", fr: "Nous ne pouvions rien voir." },
      { de: "Sie konnte sehr gut singen.", fr: "Elle pouvait très bien chanter." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Er hatte mir nicht helfen können.", fr: "Il n'avait pas pu m'aider." },
      { de: "Wir hatten die Gelegenheit nicht nutzen können.", fr: "Nous n'avions pas pu saisir l'occasion." },
      { de: "Sie hatte nicht teilnehmen können.", fr: "Elle n'avait pas pu participer." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst das schaffen können.", fr: "Tu pourras le faire." },
      { de: "Wir werden bald gehen können.", fr: "Nous pourrons bientôt partir." },
      { de: "Wird er kommen können?", fr: "Pourra-t-il venir ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir helfen können.", fr: "Je vais pouvoir t'aider." },
      { de: "Sie wird bald sprechen können.", fr: "Elle va pouvoir parler bientôt." },
      { de: "Wir werden das Problem lösen können.", fr: "Nous allons pouvoir résoudre le problème." }
    ],
    "conditionnel_présent": [
      { de: "Könnte ich ein Glas Wasser haben?", fr: "Je pourrais avoir un verre d'eau ?" },
      { de: "Du könntest es versuchen.", fr: "Tu pourrais essayer." },
      { de: "Wir könnten ins Kino gehen.", fr: "Nous pourrions aller au cinéma." }
    ],
    "subjonctif_présent": [
      { de: "Ich bin froh, dass ich dir helfen kann.", fr: "Je suis content que je puisse t'aider." },
      { de: "Es ist schade, dass er nicht kommen kann.", fr: "C'est dommage qu'il ne puisse pas venir." },
      { de: "Damit ihr es sehen könnt.", fr: "Pour que vous puissiez le voir." }
    ]
  }
};
