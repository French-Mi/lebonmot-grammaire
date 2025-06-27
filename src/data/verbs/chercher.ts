// src/data/verbs/chercher.ts
import type { Verb } from '@/types/verb-types';

export const chercher: Verb = {
  infinitive: "chercher",
  translation: "suchen",
  verbGroup: 1,
  indicatif: {
    présent: ["cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"],
    passé_composé: { aux: "avoir", participle: "cherché" },
    imparfait: ["cherchais", "cherchais", "cherchait", "cherchions", "cherchiez", "cherchaient"],
    plus_que_parfait: { aux: "avoir", participle: "cherché" },
    futur_simple: ["chercherai", "chercheras", "cherchera", "chercherons", "chercherez", "chercheront"],
    futur_proche: { aux: "aller", participle: "chercher" }
  },
  subjonctif: { présent: ["cherche", "cherches", "cherche", "cherchions", "cherchiez", "cherchent"] },
  conditionnel: { présent: ["chercherais", "chercherais", "chercherait", "chercherions", "chercheriez", "chercheraient"], passé: { aux: "avoir", participle: "cherché" } },
  imperatif: { present: ["cherche", "cherchons", "cherchez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich suche meine Schlüssel.", fr: "Je cherche mes clés." },
      { de: "Was suchst du?", fr: "Qu'est-ce que tu cherches ?" },
      { de: "Er sucht Arbeit.", fr: "Il cherche du travail." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe überall gesucht.", fr: "J'ai cherché partout." },
      { de: "Hast du gefunden, was du gesucht hast?", fr: "As-tu trouvé ce que tu as cherché ?" },
      { de: "Wir haben lange nach einer Lösung gesucht.", fr: "Nous avons longtemps cherché une solution." }
    ],
    "indicatif_imparfait": [
      { de: "Ich suchte nach dir.", fr: "Je te cherchais." },
      { de: "Sie suchte immer nach neuen Abenteuern.", fr: "Elle cherchait toujours de nouvelles aventures." },
      { de: "Ihr habt nach eurer Katze gesucht.", fr: "Vous cherchiez votre chat." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte lange nach diesem Buch gesucht.", fr: "J'avais cherché ce livre pendant longtemps." },
      { de: "Sie hatte nach ihren Worten gesucht.", fr: "Elle avait cherché ses mots." },
      { de: "Wir hatten nach einer Ausrede gesucht.", fr: "Nous avions cherché une excuse." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich später suchen.", fr: "Je te chercherai plus tard." },
      { de: "Du wirst eine andere Wohnung suchen.", fr: "Tu chercheras un autre appartement." },
      { de: "Wir werden eine Lösung finden.", fr: "Nous chercherons une solution." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde meine Brille suchen.", fr: "Je vais chercher mes lunettes." },
      { de: "Er wird nach seinem Hund suchen.", fr: "Il va chercher son chien." },
      { de: "Wir werden nach Informationen suchen.", fr: "Nous allons chercher des informations." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde woanders suchen.", fr: "Je chercherais ailleurs." },
      { de: "An deiner Stelle würde ich im Internet suchen.", fr: "À ta place, je chercherais sur Internet." },
      { de: "Er würde nach einer einfacheren Methode suchen.", fr: "Il chercherait une méthode plus simple." }
    ],
    "subjonctif_présent": [
      { de: "Du musst nach einer Lösung suchen.", fr: "Il faut que tu cherches une solution." },
      { de: "Ich möchte nicht, dass sie lange suchen.", fr: "Je ne veux pas qu'ils cherchent longtemps." },
      { de: "Es ist besser, dass wir jetzt suchen.", fr: "Il vaut mieux que nous cherchions maintenant." }
    ]
  }
};
