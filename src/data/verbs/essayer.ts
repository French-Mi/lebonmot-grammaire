import type { Verb } from '@/types/verb-types';

export const essayer: Verb = {
  infinitive: "essayer",
  translation: "versuchen / probieren",
  verbGroup: 1,
  indicatif: {
    présent: ["essaie", "essaies", "essaie", "essayons", "essayez", "essaient"],
    passé_composé: { aux: "avoir", participle: "essayé" },
    imparfait: ["essayais", "essayais", "essayait", "essayions", "essayiez", "essayaient"],
    plus_que_parfait: { aux: "avoir", participle: "essayé" },
    futur_simple: ["essaierai", "essaieras", "essaiera", "essaierons", "essaierez", "essaieront"],
    futur_proche: { aux: "aller", participle: "essayer" }
  },
  subjonctif: { présent: ["essaie", "essaies", "essaie", "essayions", "essayiez", "essaient"] },
  conditionnel: { présent: ["essaierais", "essaierais", "essaierait", "essaierions", "essaieriez", "essaieraient"], passé: { aux: "avoir", participle: "essayé" } },
  imperatif: { present: ["essaie", "essayons", "essayez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich versuche, Französisch zu lernen.", fr: "J'essaie d'apprendre le français." },
      { de: "Probier dieses Kleid an!", fr: "Essaie cette robe !" },
      { de: "Wir versuchen, eine Lösung zu finden.", fr: "Nous essayons de trouver une solution." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe versucht, dich anzurufen.", fr: "J'ai essayé de t'appeler." },
      { de: "Hast du den Kuchen probiert?", fr: "As-tu essayé le gâteau ?" },
      { de: "Sie haben alles versucht.", fr: "Ils ont tout essayé." }
    ],
    "indicatif_imparfait": [
        { de: "Ich versuchte, die Tür zu öffnen.", fr: "J'essayais d'ouvrir la porte." },
        { de: "Er probierte oft neue Dinge aus.", fr: "Il essayait souvent de nouvelles choses." },
        { de: "Wir versuchten, ruhig zu bleiben.", fr: "Nous essayions de rester calmes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte bereits versucht, ihn zu kontaktieren.", fr: "J'avais déjà essayé de le contacter." },
        { de: "Hattest du dieses Gericht schon einmal probiert?", fr: "Avais-tu déjà essayé ce plat ?" },
        { de: "Sie hatten alles versucht, bevor sie aufgaben.", fr: "Ils avaient tout essayé avant d'abandonner." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es noch einmal versuchen.", fr: "J'essaierai encore une fois." },
      { de: "Du wirst dieses neue Rezept ausprobieren.", fr: "Tu essaieras cette nouvelle recette." },
      { de: "Wir werden versuchen, pünktlich zu sein.", fr: "Nous essaierons d'être à l'heure." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde versuchen, ihn anzurufen.", fr: "Je vais essayer de l'appeler." },
      { de: "Wirst du das Kleid anprobieren?", fr: "Tu vas essayer la robe ?" },
      { de: "Wir werden versuchen zu gewinnen.", fr: "Nous allons essayer de gagner." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es versuchen, wenn ich du wäre.", fr: "J'essaierais si j'étais toi." },
        { de: "Du könntest versuchen, freundlicher zu sein.", fr: "Tu pourrais essayer d'être plus gentil." },
        { de: "Wir würden es versuchen, aber wir haben Angst.", fr: "Nous essaierions, mais nous avons peur." }
    ],
    "subjonctif_présent": [
      { de: "Du musst es versuchen.", fr: "Il faut que tu essaies." },
      { de: "Ich möchte, dass er es zumindest versucht.", fr: "Je veux qu'il essaie au moins." },
      { de: "Es ist wichtig, dass wir es immer wieder versuchen.", fr: "Il est important que nous essayions encore et encore." }
    ]
  }
};
