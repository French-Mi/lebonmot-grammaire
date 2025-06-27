import type { Verb } from '@/types/verb-types';

export const nager: Verb = {
  infinitive: "nager",
  translation: "schwimmen",
  verbGroup: 1,
  indicatif: {
    présent: ["nage", "nages", "nage", "nageons", "nagez", "nagent"],
    passé_composé: { aux: "avoir", participle: "nagé" },
    imparfait: ["nageais", "nageais", "nageait", "nagions", "nagiez", "nageaient"],
    plus_que_parfait: { aux: "avoir", participle: "nagé" },
    futur_simple: ["nagerai", "nageras", "nagera", "nagerons", "nagerez", "nageront"],
    futur_proche: { aux: "aller", participle: "nager" }
  },
  subjonctif: { présent: ["nage", "nages", "nage", "nagions", "nagiez", "nagent"] },
  conditionnel: { présent: ["nagerais", "nagerais", "nagerait", "nagerions", "nageriez", "nageraient"], passé: { aux: "avoir", participle: "nagé" } },
  imperatif: { present: ["nage", "nageons", "nagez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schwimme gerne im Meer.", fr: "J'aime nager dans la mer." },
      { de: "Er schwimmt jeden Morgen.", fr: "Il nage tous les matins." },
      { de: "Wir schwimmen im Schwimmbad.", fr: "Nous nageons à la piscine." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin gestern eine Stunde geschwommen.", fr: "J'ai nagé pendant une heure hier." },
      { de: "Sie ist im See geschwommen.", fr: "Elle a nagé dans le lac." },
      { de: "Habt ihr im Ozean geschwommen?", fr: "Avez-vous nagé dans l'océan ?" }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind schwamm ich wie ein Fisch.", fr: "Enfant, je nageais comme un poisson." },
        { de: "Wir schwammen, bis die Sonne unterging.", fr: "Nous nagions jusqu'au coucher du soleil." },
        { de: "Sie schwamm jeden Sommer in diesem Fluss.", fr: "Elle nageait dans cette rivière chaque été." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte bereits den Kanal durchschwommen.", fr: "Il avait déjà nagé à travers la Manche." },
        { de: "Ich hatte noch nie im Winter geschwommen.", fr: "Je n'avais jamais nagé en hiver." },
        { de: "Wir hatten geschwommen, bevor wir frühstückten.", fr: "Nous avions nagé avant de prendre le petit-déjeuner." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen schwimmen gehen.", fr: "J'irai nager demain." },
      { de: "Du wirst wie ein Fisch schwimmen.", fr: "Tu nageras comme un poisson." },
      { de: "Wir werden im Sommer viel schwimmen.", fr: "Nous nagerons beaucoup cet été." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde im See schwimmen gehen.", fr: "Je vais nager dans le lac." },
      { de: "Sie wird mit den Delfinen schwimmen.", fr: "Elle va nager avec les dauphins." },
      { de: "Wir werden 500 Meter schwimmen.", fr: "Nous allons nager 500 mètres." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne im Meer schwimmen.", fr: "J'aimerais nager dans la mer." },
        { de: "Er würde besser schwimmen, wenn er trainieren würde.", fr: "Il nagerait mieux s'il s'entraînait." },
        { de: "Wir würden schwimmen, wenn das Wasser wärmer wäre.", fr: "Nous nagerions si l'eau était plus chaude." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du schwimmen kannst.", fr: "Il est important que tu saches nager." },
      { de: "Ich will, dass er mit uns schwimmt.", fr: "Je veux qu'il nage avec nous." },
      { de: "Bevor wir schwimmen, müssen wir uns aufwärmen.", fr: "Avant que nous nagions, nous devons nous échauffer." }
    ]
  }
};
