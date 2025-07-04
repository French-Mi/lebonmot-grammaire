import type { Verb } from '@/types/verb-types';

export const attribuer: Verb = {
  infinitive: "attribuer",
  translation: "zuteilen, zuschreiben, verleihen",
  verbGroup: 1,
  indicatif: {
    présent: ["attribue", "attribues", "attribue", "attribuons", "attribuez", "attribuent"],
    passé_composé: { aux: "avoir", participle: "attribué" },
    imparfait: ["attribuais", "attribuais", "attribuait", "attribuions", "attribuiez", "attribuaient"],
    plus_que_parfait: { aux: "avoir", participle: "attribué" },
    futur_simple: ["attribuerai", "attribueras", "attribuera", "attribuerons", "attribuerez", "attribueront"],
    futur_proche: { aux: "aller", participle: "attribuer" }
  },
  subjonctif: {
    présent: ["attribue", "attribues", "attribue", "attribuions", "attribuiez", "attribuent"]
  },
  conditionnel: {
    présent: ["attribuerais", "attribuerais", "attribuerait", "attribuerions", "attribueriez", "attribueraient"],
    passé: { aux: "avoir", participle: "attribué" }
  },
  imperatif: {
    present: ["attribue", "attribuons", "attribuez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich weise jedem Schüler eine Nummer zu.", fr: "J'attribue un numéro à chaque élève." },
      { de: "Man schreibt ihm viele Qualitäten zu.", fr: "On lui attribue beaucoup de qualités." },
      { de: "Die Jury verleiht den Preis dem besten Film.", fr: "Le jury attribue le prix au meilleur film." }
    ],
    "indicatif_passé_composé": [
      { de: "Man hat mir einen neuen Posten zugewiesen.", fr: "On m'a attribué un nouveau poste." },
      { de: "Sie hat den Fehler einem Computerproblem zugeschrieben.", fr: "Elle a attribué l'erreur à un problème informatique." },
      { de: "Wem habt ihr diese Aufgabe zugewiesen?", fr: "À qui avez-vous attribué cette tâche ?" }
    ],
    "indicatif_imparfait": [
        { de: "Der König verlieh den Rittern Ländereien.", fr: "Le roi attribuait des terres aux chevaliers." },
        { de: "Wir wiesen jedem Projekt ein Budget zu.", fr: "Nous attribuions un budget à chaque projet." },
        { de: "Früher schrieb man Naturphänomene den Göttern zu.", fr: "Autrefois, on attribuait les phénomènes naturels aux dieux." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Man hatte ihr ein Stipendium verliehen.", fr: "On lui avait attribué une bourse d'études." },
        { de: "Der Schiedsrichter hatte dem anderen Team einen Elfmeter zugesprochen.", fr: "L'arbitre avait attribué un penalty à l'autre équipe." },
        { de: "Ich hatte dieses Zitat fälschlicherweise einem anderen Autor zugeschrieben.", fr: "J'avais faussement attribué cette citation à un autre auteur." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir eine sehr wichtige Mission zuteilen.", fr: "Je t'attribuerai une mission très importante." },
      { de: "Werden sie ihm die Verantwortung zuschreiben?", fr: "Lui attribueront-ils la responsabilité ?" },
      { de: "Die Universität wird die Diplome nächste Woche verleihen.", fr: "L'université attribuera les diplômes la semaine prochaine." }
    ],
    "indicatif_futur_proche": [
      { de: "Man wird jedem einen Platz zuweisen.", fr: "On va attribuer une place à chacun." },
      { de: "Sie werden ihm den Sieg zuschreiben.", fr: "Ils vont lui attribuer la victoire." },
      { de: "Wir werden dem Gewinner eine Medaille verleihen.", fr: "Nous allons attribuer une médaille au gagnant." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesem Projekt mehr Mittel zuweisen.", fr: "J'attribuerais plus de fonds à ce projet." },
        { de: "Wem würden Sie den Preis verleihen?", fr: "À qui attribueriez-vous le prix ?" },
        { de: "Man könnte den Erfolg mehreren Faktoren zuschreiben.", fr: "On pourrait attribuer le succès à plusieurs facteurs." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte ihm die Beförderung gegeben (zugewiesen).", fr: "Je lui aurais attribué la promotion." },
        { de: "Man hätte ihm nicht die ganze Schuld zuschreiben sollen.", fr: "On n'aurait pas dû lui attribuer toute la faute." },
        { de: "Sie hätten den Preis einem anderen Künstler verliehen, wenn sie gekonnt hätten.", fr: "Ils auraient attribué le prix à un autre artiste s'ils avaient pu." }
    ],
    "subjonctif_présent": [
      { de: "Es ist gerecht, dass man jedem seinen Anteil zuteilt.", fr: "Il est juste qu'on attribue à chacun sa part." },
      { de: "Ich möchte nicht, dass man mir Worte in den Mund legt (mir Worte zuschreibt), die ich nicht gesagt habe.", fr: "Je ne veux pas qu'on m'attribue des propos que je n'ai pas tenus." },
      { de: "Damit man euch den Bonus gewährt, müsst ihr die Ziele erreichen.", fr: "Pour qu'on vous attribue le bonus, vous devez atteindre les objectifs." }
    ]
  }
};
