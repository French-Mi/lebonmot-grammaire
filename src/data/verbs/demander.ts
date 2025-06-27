import type { Verb } from '@/types/verb-types';

export const demander: Verb = {
  infinitive: "demander",
  translation: "fragen / bitten",
  verbGroup: 1,
  indicatif: {
    présent: ["demande", "demandes", "demande", "demandons", "demandez", "demandent"],
    passé_composé: { aux: "avoir", participle: "demandé" },
    imparfait: ["demandais", "demandais", "demandait", "demandions", "demandiez", "demandaient"],
    plus_que_parfait: { aux: "avoir", participle: "demandé" },
    futur_simple: ["demanderai", "demanderas", "demandera", "demanderons", "demanderez", "demanderont"],
    futur_proche: { aux: "aller", participle: "demander" }
  },
  subjonctif: { présent: ["demande", "demandes", "demande", "demandions", "demandiez", "demandent"] },
  conditionnel: { présent: ["demanderais", "demanderais", "demanderait", "demandions", "demanderiez", "demanderaient"], passé: { aux: "avoir", participle: "demandé" } },
  imperatif: { present: ["demande", "demandons", "demandez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich frage nach dem Weg.", fr: "Je demande le chemin." },
      { de: "Er bittet um Hilfe.", fr: "Il demande de l'aide." },
      { de: "Sie fragen nach dem Preis.", fr: "Ils demandent le prix." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihn gefragt, ob er kommt.", fr: "Je lui ai demandé s'il venait." },
      { de: "Sie hat um eine Gehaltserhöhung gebeten.", fr: "Elle a demandé une augmentation." },
      { de: "Wir haben nach der Rechnung gefragt.", fr: "Nous avons demandé l'addition." }
    ],
    "indicatif_imparfait": [
      { de: "Er fragte immer viele Fragen.", fr: "Il demandait toujours beaucoup de questions." },
      { de: "Ich bat sie, mir zu helfen.", fr: "Je lui demandais de m'aider." },
      { de: "Ihr habt nie etwas verlangt.", fr: "Vous ne demandiez jamais rien." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte ihn bereits um einen Gefallen gebeten.", fr: "Je lui avais déjà demandé un service." },
      { de: "Sie hatte um Erlaubnis gefragt.", fr: "Elle avait demandé la permission." },
      { de: "Wir hatten um mehr Zeit gebeten.", fr: "Nous avions demandé plus de temps." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich etwas fragen.", fr: "Je te demanderai quelque chose." },
      { de: "Er wird um Erlaubnis bitten.", fr: "Il demandera la permission." },
      { de: "Sie werden nach deinem Namen fragen.", fr: "Ils demanderont ton nom." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dich um einen Gefallen bitten.", fr: "Je vais te demander un service." },
      { de: "Er wird nach dem Preis fragen.", fr: "Il va demander le prix." },
      { de: "Wir werden nach dem Weg fragen.", fr: "Nous allons demander le chemin." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde dich um einen Rat bitten.", fr: "Je te demanderais un conseil." },
      { de: "Er würde dich fragen, wenn er dich sähe.", fr: "Il te demanderait s'il te voyait." },
      { de: "Wir würden mehr Informationen anfordern.", fr: "Nous demanderions plus d'informations." }
    ],
    "subjonctif_présent": [
      { de: "Er verlangt, dass ich komme.", fr: "Il demande que je vienne." },
      { de: "Sie bittet darum, dass du ihr hilfst.", fr: "Elle demande que tu l'aides." },
      { de: "Ich schlage vor, dass wir nach dem Weg fragen.", fr: "Je propose que nous demandions notre chemin." }
    ]
  }
};
