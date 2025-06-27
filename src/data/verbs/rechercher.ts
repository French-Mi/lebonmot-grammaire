import type { Verb } from '@/types/verb-types';

export const rechercher: Verb = {
  infinitive: "rechercher",
  translation: "suchen / recherchieren / forschen",
  verbGroup: 1,
  indicatif: {
    présent: ["recherche", "recherches", "recherche", "recherchons", "recherchez", "recherchent"],
    passé_composé: { aux: "avoir", participle: "recherché" },
    imparfait: ["recherchais", "recherchais", "recherchait", "recherchions", "recherchiez", "recherchaient"],
    plus_que_parfait: { aux: "avoir", participle: "recherché" },
    futur_simple: ["rechercherai", "rechercheras", "recherchera", "rechercherons", "rechercherez", "rechercheront"],
    futur_proche: { aux: "aller", participle: "rechercher" }
  },
  subjonctif: { présent: ["recherche", "recherches", "recherche", "recherchions", "recherchiez", "recherchent"] },
  conditionnel: { présent: ["rechercherais", "rechercherais", "rechercherait", "rechercherions", "rechercheriez", "rechercheraient"], passé: { aux: "avoir", participle: "recherché" } },
  imperatif: { present: ["recherche", "recherchons", "recherchez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich suche nach Informationen für mein Projekt.", fr: "Je recherche des informations pour mon projet." },
      { de: "Was für ein Profil suchen Sie?", fr: "Quel type de profil recherchez-vous ?" },
      { de: "Sie sucht ihre verlorene Katze.", fr: "Elle recherche son chat perdu." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe im Internet recherchiert.", fr: "J'ai recherché sur Internet." },
      { de: "Der Detektiv hat nach Hinweisen gesucht.", fr: "Le détective a recherché des indices." },
      { de: "Wir haben lange nach diesem Restaurant gesucht.", fr: "Nous avons recherché ce restaurant pendant longtemps." }
    ],
    "indicatif_imparfait": [
        { de: "Er forschte über die Geschichte seiner Stadt.", fr: "Il recherchait l'histoire de sa ville." },
        { de: "Sie suchten eine Nadel im Heuhaufen.", fr: "Ils recherchaient une aiguille dans une botte de foin." },
        { de: "Ich suchte eine einfache Lösung.", fr: "Je recherchais une solution simple." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Wissenschaftler hatte jahrelang geforscht.", fr: "Le scientifique avait recherché pendant des années." },
        { de: "Sie hatte nach ihrem biologischen Vater gesucht.", fr: "Elle avait recherché son père biologique." },
        { de: "Wir hatten bereits alle Optionen geprüft (recherchiert).", fr: "Nous avions déjà recherché toutes les options." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde eine bessere Methode suchen.", fr: "Je rechercherai une meilleure méthode." },
      { de: "Die Wissenschaftler werden die Ursachen erforschen.", fr: "Les scientifiques rechercheront les causes." },
      { de: "Du wirst nach einer neuen Wohnung suchen.", fr: "Tu rechercheras un nouvel appartement." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde im Wörterbuch nachschlagen.", fr: "Je vais rechercher dans le dictionnaire." },
      { de: "Sie wird nach einem neuen Job suchen.", fr: "Elle va rechercher un nouvel emploi." },
      { de: "Wir werden nach der Wahrheit suchen.", fr: "Nous allons rechercher la vérité." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde eine gründlichere Suche durchführen.", fr: "Je rechercherais de manière plus approfondie." },
        { de: "Er würde nach einer Erklärung suchen.", fr: "Il rechercherait une explication." },
        { de: "Wir würden die Unterstützung von Experten suchen.", fr: "Nous rechercherions le soutien d'experts." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du nach der Wahrheit suchst.", fr: "Il faut que tu recherches la vérité." },
      { de: "Ich möchte, dass sie eine Lösung suchen.", fr: "Je veux qu'ils recherchent une solution." },
      { de: "Es ist selten, dass wir nach so etwas suchen.", fr: "Il est rare que nous recherchions quelque chose comme ça." }
    ]
  }
};
