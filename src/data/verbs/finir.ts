// src/data/verbs/finir.ts
import type { Verb } from '@/types/verb-types';

export const finir: Verb = {
  infinitive: "finir",
  translation: "beenden",
  verbGroup: 2,
  indicatif: {
    présent: ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
    passé_composé: { aux: "avoir", participle: "fini" },
    imparfait: ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
    plus_que_parfait: { aux: "avoir", participle: "fini" },
    futur_simple: ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
    futur_proche: { aux: "aller", participle: "finir" }
  },
  subjonctif: { présent: ["finisse", "finisses", "finisse", "finissions", "finissiez", "finissent"] },
  conditionnel: { présent: ["finirais", "finirais", "finirait", "finirions", "finiriez", "finiraient"], passé: { aux: "avoir", participle: "fini" } },
  imperatif: { present: ["finis", "finissons", "finissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich beende meine Arbeit.", fr: "Je finis mon travail." },
      { de: "Wann beendest du?", fr: "Quand est-ce que tu finis ?" },
      { de: "Der Film endet um 22 Uhr.", fr: "Le film finit à 22h." }
    ],
    "indicatif_passé_composé": [
      { de: "Hast du deine Hausaufgaben beendet?", fr: "Tu as fini tes devoirs ?" },
      { de: "Wir haben das Projekt beendet.", fr: "Nous avons fini le projet." },
      { de: "Sie hat ihr Buch zu Ende gelesen.", fr: "Elle a fini son livre." }
    ],
    "indicatif_imparfait": [
      { de: "Ich beendete gerade mein Abendessen, als er anrief.", fr: "Je finissais mon dîner quand il a appelé." },
      { de: "Sie beendeten immer als Letzte.", fr: "Ils finissaient toujours les derniers." },
      { de: "Du hast deine Rede beendet.", fr: "Tu finissais ton discours." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Wir hatten die Arbeit beendet, bevor wir gingen.", fr: "Nous avions fini le travail avant de partir." },
      { de: "Er hatte seine Mahlzeit bereits beendet.", fr: "Il avait déjà fini son repas." },
      { de: "Hattest du den Bericht beendet?", fr: "Avais-tu fini le rapport ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diese Aufgabe morgen beenden.", fr: "Je finirai cette tâche demain." },
      { de: "Sie wird ihr Studium nächstes Jahr beenden.", fr: "Elle finira ses études l'année prochaine." },
      { de: "Ihr werdet pünktlich fertig werden.", fr: "Vous finirez à temps." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde es gleich beenden.", fr: "Je vais bientôt finir." },
      { de: "Du wirst dein Essen aufessen.", fr: "Tu vas finir ton repas." },
      { de: "Wir werden bald fertig sein.", fr: "Nous allons bientôt finir." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde zuerst meine Arbeit beenden.", fr: "Je finirais mon travail d'abord." },
      { de: "Könntest du bitte aufessen?", fr: "Pourrais-tu finir, s'il te plaît ?" },
      { de: "Er würde es beenden, wenn er könnte.", fr: "Il finirait s'il le pouvait." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Arbeit beendest.", fr: "Il est important que tu finisses ton travail." },
      { de: "Ich warte, bis er fertig ist.", fr: "J'attends qu'il finisse." },
      { de: "Bevor wir fertig sind, müssen wir aufräumen.", fr: "Avant que nous finissions, nous devons ranger." }
    ]
  }
};
