import type { Verb } from '@/types/verb-types';

export const interroger: Verb = {
  infinitive: "interroger",
  translation: "befragen, verhören, abfragen",
  verbGroup: 1,
  indicatif: {
    présent: ["interroge", "interroges", "interroge", "interrogeons", "interrogez", "interrogent"],
    passé_composé: { aux: "avoir", participle: "interrogé" },
    imparfait: ["interrogeais", "interrogeais", "interrogeait", "interrogions", "interrogiez", "interrogeaient"],
    plus_que_parfait: { aux: "avoir", participle: "interrogé" },
    futur_simple: ["interrogerai", "interrogeras", "interrogera", "interrogerons", "interrogerez", "interrogeront"],
    futur_proche: { aux: "aller", participle: "interroger" }
  },
  subjonctif: {
    présent: ["interroge", "interroges", "interroge", "interrogions", "interrogiez", "interrogent"]
  },
  conditionnel: {
    présent: ["interrogerais", "interrogerais", "interrogerait", "interrogerions", "interrogeriez", "interrogeraient"],
    passé: { aux: "avoir", participle: "interrogé" }
  },
  imperatif: {
    present: ["interroge", "interrogeons", "interrogez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich befrage den Zeugen.", fr: "J'interroge le témoin." },
      { de: "Der Lehrer fragt die Schüler ab.", fr: "Le professeur interroge les élèves." },
      { de: "Wir befragen uns über die Zukunft.", fr: "Nous nous interrogeons sur l'avenir." }
    ],
    "indicatif_passé_composé": [
      { de: "Die Polizei hat den Verdächtigen verhört.", fr: "La police a interrogé le suspect." },
      { de: "Hast du ihn zu seinen Absichten befragt?", fr: "L'as-tu interrogé sur ses intentions ?" },
      { de: "Ich habe mehrere Experten befragt.", fr: "J'ai interrogé plusieurs experts." }
    ],
    "indicatif_imparfait": [
        { de: "Der Detektiv befragte alle Nachbarn.", fr: "Le détective interrogeait tous les voisins." },
        { de: "Wir fragten uns oft, was zu tun sei.", fr: "Nous nous interrogions souvent sur ce qu'il fallait faire." },
        { de: "Der Professor fragte immer die gleichen Studenten ab.", fr: "Le professeur interrogeait toujours les mêmes étudiants." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihn bereits zu diesem Thema befragt.", fr: "Je l'avais déjà interrogé à ce sujet." },
        { de: "Sie hatte sich lange über den Sinn des Lebens Gedanken gemacht (sich befragt).", fr: "Elle s'était longtemps interrogée sur le sens de la vie." },
        { de: "Die Journalisten hatten den Minister eine Stunde lang verhört.", fr: "Les journalistes avaient interrogé le ministre pendant une heure." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich morgen abfragen.", fr: "Je t'interrogerai demain." },
      { de: "Die Kommission wird den Kandidaten befragen.", fr: "La commission interrogera le candidat." },
      { de: "Wir werden die Datenbank nach den Informationen abfragen.", fr: "Nous interrogerons la base de données pour les informations." }
    ],
    "indicatif_futur_proche": [
      { de: "Der Arzt wird den Patienten befragen.", fr: "Le médecin va interroger le patient." },
      { de: "Wir werden uns über die nächsten Schritte Gedanken machen.", fr: "Nous allons nous interroger sur les prochaines étapes." },
      { de: "Du wirst den Mechaniker zu dem Problem befragen.", fr: "Tu vas interroger le mécanicien sur le problème." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn an deiner Stelle diskret befragen.", fr: "J'interrogerais-le discrètement à ta place." },
        { de: "Ein Journalist würde ihn zu seiner Vergangenheit befragen.", fr: "Un journaliste l'interrogerait sur son passé." },
        { de: "Wir würden uns fragen, ob es das wert ist.", fr: "Nous nous interrogerions si cela en vaut la peine." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte ihn anders befragt.", fr: "Je l'aurais interrogé différemment." },
        { de: "Sie hätten den Experten befragen sollen, bevor sie eine Entscheidung trafen.", fr: "Vous auriez dû interroger l'expert avant de prendre une décision." },
        { de: "Er hätte sich über die Konsequenzen Gedanken gemacht.", fr: "Il se serait interrogé sur les conséquences." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass man den richtigen Zeugen befragt.", fr: "Il est important que l'on interroge le bon témoin." },
      { de: "Ich möchte, dass du ihn zu diesem Punkt befragst.", fr: "Je veux que tu l'interroges sur ce point." },
      { de: "Damit wir das Problem lösen, müssen wir die Experten befragen.", fr: "Pour que nous résolvions le problème, il faut que nous interrogions les experts." }
    ]
  }
};
