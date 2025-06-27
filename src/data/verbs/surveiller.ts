import type { Verb } from '@/types/verb-types';

export const surveiller: Verb = {
  infinitive: "surveiller",
  translation: "überwachen / beaufsichtigen",
  verbGroup: 1,
  indicatif: {
    présent: ["surveille", "surveilles", "surveille", "surveillons", "surveillez", "surveillent"],
    passé_composé: { aux: "avoir", participle: "surveillé" },
    imparfait: ["surveillais", "surveillais", "surveillait", "surveillions", "surveilliez", "surveillaient"],
    plus_que_parfait: { aux: "avoir", participle: "surveillé" },
    futur_simple: ["surveillerai", "surveilleras", "surveillera", "surveillerons", "surveillerez", "surveilleront"],
    futur_proche: { aux: "aller", participle: "surveiller" }
  },
  subjonctif: { présent: ["surveille", "surveilles", "surveille", "surveillions", "surveilliez", "surveillent"] },
  conditionnel: { présent: ["surveillerais", "surveillerais", "surveillerait", "surveillerions", "surveilleriez", "surveilleraient"], passé: { aux: "avoir", participle: "surveillé" } },
  imperatif: { present: ["surveille", "surveillons", "surveillez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich beaufsichtige die Kinder.", fr: "Je surveille les enfants." },
      { de: "Der Lehrer beaufsichtigt die Prüfung.", fr: "Le professeur surveille l'examen." },
      { de: "Die Kameras überwachen den Eingang.", fr: "Les caméras surveillent l'entrée." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den ganzen Tag das Haus beaufsichtigt.", fr: "J'ai surveillé la maison toute la journée." },
      { de: "Die Polizei hat den Verdächtigen überwacht.", fr: "La police a surveillé le suspect." },
      { de: "Hast du meine Sachen beaufsichtigt?", fr: "As-tu surveillé mes affaires ?" }
    ],
    "indicatif_imparfait": [
        { de: "Die Eltern überwachten ihre spielenden Kinder.", fr: "Les parents surveillaient leurs enfants qui jouaient." },
        { de: "Er überwachte den Fortschritt der Arbeiten.", fr: "Il surveillait l'avancement des travaux." },
        { de: "Wir überwachten den Himmel und warteten auf Sterne.", fr: "Nous surveillions le ciel en attendant les étoiles." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Wachmann hatte den ganzen Komplex überwacht.", fr: "Le gardien avait surveillé tout le complexe." },
        { de: "Ich hatte das Kochen des Kuchens überwacht.", fr: "J'avais surveillé la cuisson du gâteau." },
        { de: "Sie hatte ihren kleinen Bruder beaufsichtigt.", fr: "Elle avait surveillé son petit frère." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde deine Arbeit überwachen.", fr: "Je surveillerai ton travail." },
      { de: "Ein Wächter wird das Gebäude überwachen.", fr: "Un gardien surveillera le bâtiment." },
      { de: "Wir werden die Situation genau beobachten.", fr: "Nous surveillerons la situation de près." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Kinder beaufsichtigen.", fr: "Je vais surveiller les enfants." },
      { de: "Der Arzt wird seine Gesundheit überwachen.", fr: "Le médecin va surveiller sa santé." },
      { de: "Wir werden den Eingang überwachen.", fr: "Nous allons surveiller l'entrée." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Situation an deiner Stelle genau beobachten.", fr: "Je surveillerais la situation de près à ta place." },
        { de: "Er würde die Prüfung beaufsichtigen, wenn man ihn darum bäte.", fr: "Il surveillerait l'examen si on le lui demandait." },
        { de: "Wir würden die Kinder beaufsichtigen, wenn es nötig wäre.", fr: "Nous surveillerions les enfants si c'était nécessaire." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dein Gewicht überwachst.", fr: "Il est important que tu surveilles ton poids." },
      { de: "Ich möchte, dass du die Tür im Auge behältst.", fr: "Je veux que tu surveilles la porte." },
      { de: "Es ist besser, dass wir diese Angelegenheit genau beobachten.", fr: "Il vaut mieux que nous surveillions cette affaire de près." }
    ]
  }
};
