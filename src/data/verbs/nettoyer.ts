import type { Verb } from '@/types/verb-types';

export const nettoyer: Verb = {
  infinitive: "nettoyer",
  translation: "reinigen, putzen",
  verbGroup: 1,
  indicatif: {
    présent: ["nettoie", "nettoies", "nettoie", "nettoyons", "nettoyez", "nettoient"],
    passé_composé: { aux: "avoir", participle: "nettoyé" },
    imparfait: ["nettoyais", "nettoyais", "nettoyait", "nettoyions", "nettoyiez", "nettoyaient"],
    plus_que_parfait: { aux: "avoir", participle: "nettoyé" },
    futur_simple: ["nettoierai", "nettoieras", "nettoiera", "nettoierons", "nettoierez", "nettoieront"],
    futur_proche: { aux: "aller", participle: "nettoyer" }
  },
  subjonctif: {
    présent: ["nettoie", "nettoies", "nettoie", "nettoyions", "nettoyiez", "nettoient"]
  },
  conditionnel: {
    présent: ["nettoierais", "nettoierais", "nettoierait", "nettoierions", "nettoieriez", "nettoieraient"],
    passé: { aux: "avoir", participle: "nettoyé" }
  },
  imperatif: {
    present: ["nettoie", "nettoyons", "nettoyez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich putze das Haus jeden Samstag.", fr: "Je nettoie la maison tous les samedis." },
      { de: "Er putzt seine Brille.", fr: "Il nettoie ses lunettes." },
      { de: "Wir putzen die Fenster.", fr: "Nous nettoyons les vitres." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein Zimmer geputzt.", fr: "J'ai nettoyé ma chambre." },
      { de: "Hast du das Bad geputzt?", fr: "As-tu nettoyé la salle de bain ?" },
      { de: "Sie haben den ganzen Strand gereinigt.", fr: "Ils ont nettoyé toute la plage." }
    ],
    "indicatif_imparfait": [
        { de: "Sie putzte immer alles gründlich.", fr: "Elle nettoyait toujours tout à fond." },
        { de: "Wir reinigten den Keller einmal im Jahr.", fr: "Nous nettoyions la cave une fois par an." },
        { de: "Ihr habt die Werkzeuge nach Gebrauch gereinigt.", fr: "Vous nettoyiez les outils après utilisation." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte den Tisch bereits gereinigt, als die Gäste kamen.", fr: "Il avait déjà nettoyé la table quand les invités sont arrivés." },
        { de: "Ich hatte die Wunde gereinigt, bevor ich einen Verband anlegte.", fr: "J'avais nettoyé la plaie avant de mettre un pansement." },
        { de: "Sie hatten das Auto gereinigt, und jetzt regnete es.", fr: "Ils avaient nettoyé la voiture et maintenant il pleuvait." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Garage morgen putzen.", fr: "Je nettoierai le garage demain." },
      { de: "Sie wird ihre Schuhe putzen.", fr: "Elle nettoiera ses chaussures." },
      { de: "Wir werden den Teppich reinigen lassen.", fr: "Nous ferons nettoyer le tapis." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde den Tisch abräumen und putzen.", fr: "Je vais débarrasser et nettoyer la table." },
      { de: "Er wird sein Fahrrad putzen.", fr: "Il va nettoyer son vélo." },
      { de: "Ihr werdet die Küche putzen müssen.", fr: "Vous allez devoir nettoyer la cuisine." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde putzen, aber ich habe keine Zeit.", fr: "Je nettoierais bien, mais je n'ai pas le temps." },
        { de: "Würdest du mir helfen, die Fenster zu putzen?", fr: "M'aiderais-tu à nettoyer les fenêtres ?" },
        { de: "Sie würden das Haus putzen, wenn sie dafür bezahlt würden.", fr: "Ils nettoieraient la maison s'ils étaient payés." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte geputzt, wenn ich gewusst hätte, dass du kommst.", fr: "J'aurais nettoyé si j'avais su que tu venais." },
        { de: "Du hättest den Fleck sofort reinigen sollen.", fr: "Tu aurais dû nettoyer la tache immédiatement." },
        { de: "Wir hätten das Zimmer besser putzen können.", fr: "Nous aurions pu mieux nettoyer la chambre." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Hände reinigst.", fr: "Il est important que tu nettoies tes mains." },
      { de: "Der Chef verlangt, dass wir das Büro putzen.", fr: "Le patron exige que nous nettoyions le bureau." },
      { de: "Ich möchte, dass sie ihren Bereich reinigen.", fr: "Je veux qu'ils nettoient leur zone." }
    ]
  }
};
