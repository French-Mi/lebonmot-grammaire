import type { Verb } from '@/types/verb-types';

export const prouver: Verb = {
  infinitive: "prouver",
  translation: "beweisen, belegen",
  verbGroup: 1,
  indicatif: {
    présent: ["prouve", "prouves", "prouve", "prouvons", "prouvez", "prouvent"],
    passé_composé: { aux: "avoir", participle: "prouvé" },
    imparfait: ["prouvais", "prouvais", "prouvait", "prouvions", "prouviez", "prouvaient"],
    plus_que_parfait: { aux: "avoir", participle: "prouvé" },
    futur_simple: ["prouverai", "prouveras", "prouvera", "prouverons", "prouverez", "prouveront"],
    futur_proche: { aux: "aller", participle: "prouver" }
  },
  subjonctif: {
    présent: ["prouve", "prouves", "prouve", "prouvions", "prouviez", "prouvent"]
  },
  conditionnel: {
    présent: ["prouverais", "prouverais", "prouverait", "prouverions", "prouveriez", "prouveraient"],
    passé: { aux: "avoir", participle: "prouvé" }
  },
  imperatif: {
    present: ["prouve", "prouvons", "prouvez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich beweise dir, dass ich Recht habe.", fr: "Je te prouve que j'ai raison." },
      { de: "Dieses Dokument beweist seine Unschuld.", fr: "Ce document prouve son innocence." },
      { de: "Die Ergebnisse belegen unsere Hypothese.", fr: "Les résultats prouvent notre hypothèse." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat seine Fähigkeiten unter Beweis gestellt.", fr: "Il a prouvé ses compétences." },
      { de: "Sie hat bewiesen, dass sie eine gute Freundin ist.", fr: "Elle a prouvé qu'elle était une bonne amie." },
      { de: "Wir haben das Gegenteil bewiesen.", fr: "Nous avons prouvé le contraire." }
    ],
    "indicatif_imparfait": [
        { de: "Jeden Tag bewies er seine Loyalität.", fr: "Chaque jour, il prouvait sa loyauté." },
        { de: "Die Fakten belegten, dass die Theorie falsch war.", fr: "Les faits prouvaient que la théorie était fausse." },
        { de: "Ihr habt immer bewiesen, dass man auf euch zählen kann.", fr: "Vous prouviez toujours qu'on pouvait compter sur vous." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seine Identität mit einem Pass nachgewiesen.", fr: "Il avait prouvé son identité avec un passeport." },
        { de: "Die Studie hatte die Wirksamkeit der Behandlung belegt.", fr: "L'étude avait prouvé l'efficacité du traitement." },
        { de: "Ich hatte bereits bewiesen, dass ich es schaffen kann.", fr: "J'avais déjà prouvé que je pouvais le faire." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir beweisen, dass du dich irrst.", fr: "Je te prouverai que tu as tort." },
      { de: "Die Zukunft wird beweisen, wer Recht hatte.", fr: "L'avenir prouvera qui avait raison." },
      { de: "Wir werden unsere Unschuld beweisen.", fr: "Nous prouverons notre innocence." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir sofort beweisen, dass es funktioniert.", fr: "Je vais te prouver que ça marche tout de suite." },
      { de: "Er wird seinen Wert unter Beweis stellen.", fr: "Il va prouver sa valeur." },
      { de: "Sie werden beweisen, dass sie die besten sind.", fr: "Ils vont prouver qu'ils sont les meilleurs." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es dir beweisen, wenn ich könnte.", fr: "Je te le prouverais si je pouvais." },
        { de: "Ein Test würde die Hypothese belegen.", fr: "Un test prouverait l'hypothèse." },
        { de: "Sie würden ihre Treue beweisen, wenn man ihnen die Chance gäbe.", fr: "Ils prouveraient leur loyauté si on leur en donnait la chance." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dir das Gegenteil bewiesen.", fr: "Je t'aurais prouvé le contraire." },
        { de: "Er hätte seine Unschuld bewiesen, wenn er mehr Zeit gehabt hätte.", fr: "Il aurait prouvé son innocence s'il avait eu plus de temps." },
        { de: "Wir hätten bewiesen, dass unser Projekt rentabel ist.", fr: "Nous aurions prouvé que notre projet était rentable." }
    ],
    "subjonctif_présent": [
      { de: "Du musst beweisen, dass du vertrauenswürdig bist.", fr: "Il faut que tu prouves que tu es digne de confiance." },
      { de: "Ich will, dass er beweist, was er sagt.", fr: "Je veux qu'il prouve ce qu'il avance." },
      { de: "Es ist unwahrscheinlich, dass sie ihre Theorie beweisen.", fr: "Il est peu probable qu'ils prouvent leur théorie." }
    ]
  }
};
