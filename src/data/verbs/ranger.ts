import type { Verb } from '@/types/verb-types';

export const ranger: Verb = {
  infinitive: "ranger",
  translation: "aufräumen / ordnen",
  verbGroup: 1,
  indicatif: {
    présent: ["range", "ranges", "range", "rangeons", "rangez", "rangent"],
    passé_composé: { aux: "avoir", participle: "rangé" },
    imparfait: ["rangeais", "rangeais", "rangeait", "rangions", "rangiez", "rangeaient"],
    plus_que_parfait: { aux: "avoir", participle: "rangé" },
    futur_simple: ["rangerai", "rangeras", "rangera", "rangerons", "rangerez", "rangeront"],
    futur_proche: { aux: "aller", participle: "ranger" }
  },
  subjonctif: { présent: ["range", "ranges", "range", "rangions", "rangiez", "rangent"] },
  conditionnel: { présent: ["rangerais", "rangerais", "rangerait", "rangerions", "rangeriez", "rangeraient"], passé: { aux: "avoir", participle: "rangé" } },
  imperatif: { present: ["range", "rangeons", "rangez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich räume mein Zimmer auf.", fr: "Je range ma chambre." },
      { de: "Räumst du deine Sachen weg?", fr: "Tu ranges tes affaires ?" },
      { de: "Wir ordnen die Bücher im Regal.", fr: "Nous rangeons les livres sur l'étagère." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Kleidung weggeräumt.", fr: "J'ai rangé mes vêtements." },
      { de: "Hast du dein Büro aufgeräumt?", fr: "As-tu rangé ton bureau ?" },
      { de: "Sie hat die Akten geordnet.", fr: "Elle a rangé les dossiers." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind habe ich mein Zimmer nie aufgeräumt.", fr: "Enfant, je ne rangeais jamais ma chambre." },
        { de: "Sie räumte immer alles perfekt auf.", fr: "Elle rangeait toujours tout parfaitement." },
        { de: "Wir ordneten die Werkzeuge nach Gebrauch.", fr: "Nous rangions les outils après utilisation." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte meine Bücher bereits weggeräumt.", fr: "J'avais déjà rangé mes livres." },
        { de: "Sie hatte das Geschirr weggeräumt, bevor die Gäste kamen.", fr: "Elle avait rangé la vaisselle avant l'arrivée des invités." },
        { de: "Wir hatten die Garage aufgeräumt.", fr: "Nous avions rangé le garage." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen mein Zimmer aufräumen.", fr: "Je rangerai ma chambre demain." },
      { de: "Du wirst deine Spielsachen wegräumen.", fr: "Tu rangeras tes jouets." },
      { de: "Wir werden die Stühle nach dem Fest wegräumen.", fr: "Nous rangerons les chaises après la fête." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mein Zimmer jetzt aufräumen.", fr: "Je vais ranger ma chambre maintenant." },
      { de: "Wirst du das wegräumen?", fr: "Tu vas ranger ça ?" },
      { de: "Wir werden die Küche aufräumen.", fr: "Nous allons ranger la cuisine." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mein Zimmer aufräumen, wenn du mir hilfst.", fr: "Je rangerais ma chambre si tu m'aidais." },
        { de: "Er würde seine Sachen ordnen, wenn er mehr Platz hätte.", fr: "Il rangerait ses affaires s'il avait plus de place." },
        { de: "Wir würden die Garage aufräumen, aber wir haben keine Zeit.", fr: "Nous rangerions le garage, mais nous n'avons pas le temps." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du dein Zimmer aufräumst.", fr: "Il faut que tu ranges ta chambre." },
      { de: "Deine Mutter will, dass wir das Wohnzimmer aufräumen.", fr: "Ta mère veut que nous rangions le salon." },
      { de: "Ich verlange, dass er sein Büro aufräumt.", fr: "J'exige qu'il range son bureau." }
    ]
  }
};
