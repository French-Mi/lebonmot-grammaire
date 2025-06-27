import type { Verb } from '@/types/verb-types';

export const lire: Verb = {
  infinitive: "lire",
  translation: "lesen",
  verbGroup: 3,
  indicatif: {
    présent: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
    passé_composé: { aux: "avoir", participle: "lu" },
    imparfait: ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
    plus_que_parfait: { aux: "avoir", participle: "lu" },
    futur_simple: ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
    futur_proche: { aux: "aller", participle: "lire" }
  },
  subjonctif: { présent: ["lise", "lises", "lise", "lisions", "lisiez", "lisent"] },
  conditionnel: { présent: ["lirais", "lirais", "lirait", "lirions", "liriez", "liraient"], passé: { aux: "avoir", participle: "lu" } },
  imperatif: { present: ["lis", "lisons", "lisez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lese ein Buch.", fr: "Je lis un livre." },
      { de: "Liest du die Zeitung?", fr: "Tu lis le journal ?" },
      { de: "Wir lesen gerne Romane.", fr: "Nous lisons volontiers des romans." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe dieses Buch bereits gelesen.", fr: "J'ai déjà lu ce livre." },
      { de: "Hast du die E-Mail gelesen?", fr: "As-tu lu l'e-mail ?" },
      { de: "Sie hat den Artikel gelesen.", fr: "Elle a lu l'article." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind las ich viele Comics.", fr: "Enfant, je lisais beaucoup de bandes dessinées." },
        { de: "Er las jeden Abend vor dem Schlafen.", fr: "Il lisait tous les soirs avant de dormir." },
        { de: "Wir lasen die Anweisungen sorgfältig durch.", fr: "Nous lisions attentivement les instructions." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte das Buch bereits gelesen.", fr: "J'avais déjà lu le livre." },
        { de: "Sie hatte den Brief gelesen, bevor ich ankam.", fr: "Elle avait lu la lettre avant mon arrivée." },
        { de: "Hatten Sie den Bericht gelesen?", fr: "Aviez-vous lu le rapport ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dieses Buch im Urlaub lesen.", fr: "Je lirai ce livre pendant les vacances." },
      { de: "Du wirst meinen Brief lesen.", fr: "Tu liras ma lettre." },
      { de: "Sie werden die Speisekarte lesen.", fr: "Ils liront le menu." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde eine Zeitschrift lesen.", fr: "Je vais lire un magazine." },
      { de: "Sie wird eine Geschichte vorlesen.", fr: "Elle va lire une histoire." },
      { de: "Wir werden die Nachrichten lesen.", fr: "Nous allons lire les nouvelles." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dieses Buch lesen, wenn ich es hätte.", fr: "Je lirais ce livre si je l'avais." },
        { de: "Er würde mehr lesen, wenn er Zeit hätte.", fr: "Il lirait plus s'il avait le temps." },
        { de: "Wir würden die Untertitel lesen.", fr: "Nous lirions les sous-titres." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dieses Buch liest.", fr: "Il est important que tu lises ce livre." },
      { de: "Ich möchte, dass er den Brief liest.", fr: "Je veux qu'il lise la lettre." },
      { de: "Damit wir es lesen können, schalte das Licht an.", fr: "Pour que nous lisions, allume la lumière." }
    ]
  }
};
