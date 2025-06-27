import type { Verb } from '@/types/verb-types';

export const attendre: Verb = {
  infinitive: "attendre",
  translation: "warten",
  verbGroup: 3,
  indicatif: {
    présent: ["attends", "attends", "attend", "attendons", "attendez", "attendent"],
    passé_composé: { aux: "avoir", participle: "attendu" },
    imparfait: ["attendais", "attendais", "attendait", "attendions", "attendiez", "attendaient"],
    plus_que_parfait: { aux: "avoir", participle: "attendu" },
    futur_simple: ["attendrai", "attendras", "attendra", "attendrons", "attendrez", "attendront"],
    futur_proche: { aux: "aller", participle: "attendre" }
  },
  subjonctif: { présent: ["attende", "attendes", "attende", "attendions", "attendiez", "attendent"] },
  conditionnel: { présent: ["attendrais", "attendrais", "attendrait", "attendrions", "attendriez", "attendraient"], passé: { aux: "avoir", participle: "attendu" } },
  imperatif: { present: ["attends", "attendons", "attendez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich warte auf den Bus.", fr: "J'attends le bus." },
      { de: "Auf wen wartest du?", fr: "Qui attends-tu ?" },
      { de: "Wir erwarten gute Nachrichten.", fr: "Nous attendons de bonnes nouvelles." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe eine Stunde gewartet.", fr: "J'ai attendu une heure." },
      { de: "Sie hat auf seine Antwort gewartet.", fr: "Elle a attendu sa réponse." },
      { de: "Wir haben auf dich gewartet.", fr: "Nous t'avons attendu(e)." }
    ],
    "indicatif_imparfait": [
        { de: "Ich wartete auf den Zug, als ich dich sah.", fr: "J'attendais le train quand je t'ai vu." },
        { de: "Er wartete geduldig in der Schlange.", fr: "Il attendait patiemment dans la file." },
        { de: "Wir erwarteten ein anderes Ergebnis.", fr: "Nous attendions un résultat différent." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte lange gewartet, bevor ich ging.", fr: "J'avais attendu longtemps avant de partir." },
        { de: "Sie hatte nicht auf uns gewartet.", fr: "Elle ne nous avait pas attendus." },
        { de: "Sie hatten diesen Moment seit Jahren erwartet.", fr: "Ils avaient attendu ce moment depuis des années." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde auf dich vor dem Kino warten.", fr: "Je t'attendrai devant le cinéma." },
      { de: "Wirst du lange warten?", fr: "Tu attendras longtemps ?" },
      { de: "Wir werden die Ergebnisse abwarten.", fr: "Nous attendrons les résultats." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ein wenig warten.", fr: "Je vais attendre un peu." },
      { de: "Sie wird auf ihren Freund warten.", fr: "Elle va attendre son ami." },
      { de: "Wir werden hier auf dich warten.", fr: "Nous allons t'attendre ici." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde nicht länger warten.", fr: "Je n'attendrais pas plus longtemps." },
        { de: "Er würde auf ein Zeichen warten.", fr: "Il attendrait un signe." },
        { de: "Wir würden auf dich warten, wenn du uns fragen würdest.", fr: "Nous t'attendrions si tu nous le demandais." }
    ],
    "subjonctif_présent": [
      { de: "Du musst warten, bis er fertig ist.", fr: "Il faut que tu attendes qu'il finisse." },
      { de: "Ich möchte, dass sie auf mich warten.", fr: "Je veux qu'elles m'attendent." },
      { de: "Es ist besser, dass wir auf eine bessere Gelegenheit warten.", fr: "Il vaut mieux que nous attendions une meilleure occasion." }
    ]
  }
};
