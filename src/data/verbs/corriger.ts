import type { Verb } from '@/types/verb-types';

export const corriger: Verb = {
  infinitive: "corriger",
  translation: "korrigieren / verbessern",
  verbGroup: 1,
  indicatif: {
    présent: ["corrige", "corriges", "corrige", "corrigeons", "corrigez", "corrigent"],
    passé_composé: { aux: "avoir", participle: "corrigé" },
    imparfait: ["corrigeais", "corrigeais", "corrigeait", "corrigions", "corrigiez", "corrigeaient"],
    plus_que_parfait: { aux: "avoir", participle: "corrigé" },
    futur_simple: ["corrigerai", "corrigeras", "corrigera", "corrigerons", "corrigererez", "corrigeront"],
    futur_proche: { aux: "aller", participle: "corriger" }
  },
  subjonctif: { présent: ["corrige", "corriges", "corrige", "corrigions", "corrigiez", "corrigent"] },
  conditionnel: { présent: ["corrigerais", "corrigerais", "corrigerait", "corrigerions", "corrigeriez", "corrigeraient"], passé: { aux: "avoir", participle: "corrigé" } },
  imperatif: { present: ["corrige", "corrigeons", "corrigez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich korrigiere meine Fehler.", fr: "Je corrige mes erreurs." },
      { de: "Der Lehrer korrigiert die Tests.", fr: "Le professeur corrige les examens." },
      { de: "Wir korrigieren den Text.", fr: "Nous corrigeons le texte." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Fehler korrigiert.", fr: "J'ai corrigé l'erreur." },
      { de: "Hast du meinen Aufsatz korrigiert?", fr: "As-tu corrigé ma rédaction ?" },
      { de: "Sie hat die Informationen korrigiert.", fr: "Elle a corrigé les informations." }
    ],
    "indicatif_imparfait": [
        { de: "Die Mutter korrigierte sanft ihr Kind.", fr: "La mère corrigeait doucement son enfant." },
        { de: "Ich verbesserte meine Aussprache.", fr: "Je corrigeais ma prononciation." },
        { de: "Wir korrigierten die Übungen zusammen.", fr: "Nous corrigions les exercices ensemble." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Lehrer hatte die Fehler bereits korrigiert.", fr: "Le professeur avait déjà corrigé les fautes." },
        { de: "Ich hatte den Tippfehler korrigiert.", fr: "J'avais corrigé la faute de frappe." },
        { de: "Sie hatte ihre Haltung verbessert.", fr: "Elle avait corrigé sa posture." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde deine Arbeit morgen korrigieren.", fr: "Je corrigerai ton travail demain." },
      { de: "Der Computer wird den Text automatisch korrigieren.", fr: "L'ordinateur corrigera le texte automatiquement." },
      { de: "Wir werden unsere Route korrigieren.", fr: "Nous corrigerons notre itinéraire." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde diesen Satz korrigieren.", fr: "Je vais corriger cette phrase." },
      { de: "Sie wird deine Fehler korrigieren.", fr: "Elle va corriger tes erreurs." },
      { de: "Wir werden diese Ungerechtigkeit korrigieren.", fr: "Nous allons corriger cette injustice." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen Fehler an deiner Stelle korrigieren.", fr: "Je corrigerais cette erreur à ta place." },
        { de: "Könnten Sie bitte meine Hausaufgaben korrigieren?", fr: "Pourriez-vous corriger mes devoirs, s'il vous plaît ?" },
        { de: "Das würde das Problem beheben.", fr: "Cela corrigerait le problème." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du diesen Fehler korrigierst.", fr: "Il faut que tu corriges cette erreur." },
      { de: "Ich möchte, dass der Lehrer meine Arbeit korrigiert.", fr: "Je veux que le professeur corrige mon travail." },
      { de: "Bevor wir den Bericht abgeben, müssen wir ihn korrigieren.", fr: "Avant que nous rendions le rapport, il faut que nous le corrigions." }
    ]
  }
};
