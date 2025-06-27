import type { Verb } from '@/types/verb-types';

export const expliquer: Verb = {
  infinitive: "expliquer",
  translation: "erklären",
  verbGroup: 1,
  indicatif: {
    présent: ["explique", "expliques", "explique", "expliquons", "expliquez", "expliquent"],
    passé_composé: { aux: "avoir", participle: "expliqué" },
    imparfait: ["expliquais", "expliquais", "expliquait", "expliquions", "expliquiez", "expliquaient"],
    plus_que_parfait: { aux: "avoir", participle: "expliqué" },
    futur_simple: ["expliquerai", "expliqueras", "expliquera", "expliquerons", "expliquerez", "expliqueront"],
    futur_proche: { aux: "aller", participle: "expliquer" }
  },
  subjonctif: { présent: ["explique", "expliques", "explique", "expliquions", "expliquiez", "expliquent"] },
  conditionnel: { présent: ["expliquerais", "expliquerais", "expliquerait", "expliquerions", "expliqueriez", "expliqueraient"], passé: { aux: "avoir", participle: "expliqué" } },
  imperatif: { present: ["explique", "expliquons", "expliquez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich erkläre die Regel.", fr: "J'explique la règle." },
      { de: "Kannst du mir das erklären?", fr: "Tu peux m'expliquer cela ?" },
      { de: "Der Lehrer erklärt die Lektion.", fr: "Le professeur explique la leçon." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihm alles erklärt.", fr: "Je lui ai tout expliqué." },
      { de: "Sie hat die Situation erklärt.", fr: "Elle a expliqué la situation." },
      { de: "Wir haben unseren Plan erklärt.", fr: "Nous avons expliqué notre plan." }
    ],
    "indicatif_imparfait": [
        { de: "Er erklärte die Regeln des Spiels.", fr: "Il expliquait les règles du jeu." },
        { de: "Ich erklärte gerade, als du unterbrochen hast.", fr: "J'expliquais quand tu as interrompu." },
        { de: "Sie erklärten ihre Gründe.", fr: "Ils expliquaient leurs raisons." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Professor hatte das Thema bereits erklärt.", fr: "Le professeur avait déjà expliqué le sujet." },
        { de: "Ich hatte ihm erklärt, wie es funktioniert.", fr: "Je lui avais expliqué comment ça marche." },
        { de: "Hattest du ihr die Situation erklärt?", fr: "Lui avais-tu expliqué la situation ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es dir später erklären.", fr: "Je t'expliquerai plus tard." },
      { de: "Der Guide wird die Geschichte des Ortes erklären.", fr: "Le guide expliquera l'histoire du lieu." },
      { de: "Sie werden ihre Entscheidung erklären.", fr: "Ils expliqueront leur décision." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir alles erklären.", fr: "Je vais tout t'expliquer." },
      { de: "Sie wird es dir erklären.", fr: "Elle va t'expliquer." },
      { de: "Wir werden erklären, warum wir zu spät sind.", fr: "Nous allons expliquer pourquoi nous sommes en retard." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es dir erklären, wenn ich Zeit hätte.", fr: "Je t'expliquerais si j'avais le temps." },
        { de: "Könntest du mir die Übung erklären?", fr: "Pourrais-tu m'expliquer l'exercice ?" },
        { de: "Er würde es anders erklären.", fr: "Il l'expliquerait différemment." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du es gut erklärst.", fr: "Il est important que tu l'expliques bien." },
      { de: "Ich möchte, dass er mir den Grund erklärt.", fr: "Je veux qu'il m'explique la raison." },
      { de: "Warte, bis wir es dir erklären.", fr: "Attends que nous te l'expliquions." }
    ]
  }
};
