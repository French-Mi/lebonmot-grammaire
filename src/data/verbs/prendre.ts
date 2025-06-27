// src/data/verbs/prendre.ts
import type { Verb } from '@/types/verb-types';

export const prendre: Verb = {
  infinitive: "prendre",
  translation: "nehmen",
  verbGroup: 3,
  indicatif: {
    présent: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    passé_composé: { aux: "avoir", participle: "pris" },
    imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
    plus_que_parfait: { aux: "avoir", participle: "pris" },
    futur_simple: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
    futur_proche: { aux: "aller", participle: "prendre" }
  },
  subjonctif: { présent: ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"] },
  conditionnel: { présent: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"], passé: { aux: "avoir", participle: "pris" } },
  imperatif: { present: ["prends", "prenons", "prenez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich nehme einen Kaffee.", fr: "Je prends un café." },
      { de: "Nimmst du den Bus?", fr: "Tu prends le bus ?" },
      { de: "Sie nehmen den Zug um 8 Uhr.", fr: "Ils prennent le train de 8h." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mir einen Tag frei genommen.", fr: "J'ai pris un jour de congé." },
      { de: "Hast du deine Schlüssel mitgenommen?", fr: "As-tu pris tes clés ?" },
      { de: "Wir haben eine Entscheidung getroffen.", fr: "Nous avons pris une décision." }
    ],
    "indicatif_imparfait": [
      { de: "Ich nahm immer den Weg am Fluss entlang.", fr: "Je prenais toujours le chemin le long de la rivière." },
      { de: "Du nahmst dir immer viel Zeit.", fr: "Tu prenais toujours beaucoup de temps." },
      { de: "Sie nahmen ihr Frühstück auf der Terrasse ein.", fr: "Ils prenaient leur petit-déjeuner sur la terrasse." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte einen Regenschirm mitgenommen, weil es regnete.", fr: "J'avais pris un parapluie parce qu'il pleuvait." },
      { de: "Sie hatte bereits ihren Platz eingenommen.", fr: "Elle avait déjà pris sa place." },
      { de: "Wir hatten die falsche Richtung eingeschlagen.", fr: "Nous avions pris la mauvaise direction." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde ein Taxi nehmen.", fr: "Je prendrai un taxi." },
      { de: "Du wirst eine Jacke mitnehmen.", fr: "Tu prendras une veste." },
      { de: "Wir werden Notizen machen.", fr: "Nous prendrons des notes." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde eine Dusche nehmen.", fr: "Je vais prendre une douche." },
      { de: "Sie wird ein Foto machen.", fr: "Elle va prendre une photo." },
      { de: "Wir werden ein Risiko eingehen.", fr: "Nous allons prendre un risque." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde das Gleiche nehmen.", fr: "Je prendrais la même chose." },
      { de: "Würdest du noch ein Stück Kuchen nehmen?", fr: "Tu prendrais un autre morceau de gâteau ?" },
      { de: "Er würde das Angebot annehmen.", fr: "Il prendrait l'offre." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du deine Medikamente nimmst.", fr: "Il est nécessaire que tu prennes tes médicaments." },
      { de: "Ich will nicht, dass sie dieses Risiko eingeht.", fr: "Je ne veux pas qu'elle prenne ce risque." },
      { de: "Warte, bis wir eine Entscheidung treffen.", fr: "Attends que nous prenions une décision." }
    ]
  }
};
