import type { Verb } from '@/types/verb-types';

export const siffler: Verb = {
  infinitive: "siffler",
  translation: "pfeifen",
  verbGroup: 1,
  indicatif: {
    présent: ["siffle", "siffles", "siffle", "sifflons", "sifflez", "sifflent"],
    passé_composé: { aux: "avoir", participle: "sifflé" },
    imparfait: ["sifflais", "sifflais", "sifflait", "sifflions", "siffliez", "sifflaient"],
    plus_que_parfait: { aux: "avoir", participle: "sifflé" },
    futur_simple: ["sifflerai", "siffleras", "sifflera", "sifflerons", "sifflerez", "siffleront"],
    futur_proche: { aux: "aller", participle: "siffler" }
  },
  subjonctif: { présent: ["siffle", "siffles", "siffle", "sifflions", "siffliez", "sifflent"] },
  conditionnel: { présent: ["sifflerais", "sifflerais", "sifflerait", "sifflerions", "siffleriez", "siffleraient"], passé: { aux: "avoir", participle: "sifflé" } },
  imperatif: { present: ["siffle", "sifflons", "sifflez"] },
  examples: {
    "indicatif_présent": [
      { de: "Er pfeift immer ein Lied.", fr: "Il siffle toujours une chanson." },
      { de: "Kannst du pfeifen?", fr: "Sais-tu siffler ?" },
      { de: "Die Vögel pfeifen.", fr: "Les oiseaux sifflent." }
    ],
    "indicatif_passé_composé": [
      { de: "Der Schiedsrichter hat das Ende des Spiels gepfiffen.", fr: "L'arbitre a sifflé la fin du match." },
      { de: "Ich habe gepfiffen, um seine Aufmerksamkeit zu bekommen.", fr: "J'ai sifflé pour attirer son attention." },
      { de: "Hast du den Wind pfeifen gehört?", fr: "As-tu entendu le vent siffler ?" }
    ],
    "indicatif_imparfait": [
        { de: "Der Wind pfiff durch die Bäume.", fr: "Le vent sifflait dans les arbres." },
        { de: "Er pfiff, während er arbeitete.", fr: "Il sifflait en travaillant." },
        { de: "Du hast gepfiffen, um den Hund zu rufen.", fr: "Tu sifflais pour appeler le chien." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Zug hatte bereits zur Abfahrt gepfiffen.", fr: "Le train avait déjà sifflé pour le départ." },
        { de: "Ich hatte gepfiffen, aber niemand hatte gehört.", fr: "J'avais sifflé mais personne n'avait entendu." },
        { de: "Die Kugel hatte an seinem Ohr vorbeigepfiffen.", fr: "La balle avait sifflé à son oreille." }
    ],
    "indicatif_futur_simple": [
      { de: "Er wird pfeifen, wenn er bereit ist.", fr: "Il sifflera quand il sera prêt." },
      { de: "Du wirst nicht mehr pfeifen, wenn du das hörst.", fr: "Tu ne siffleras plus en entendant ça." },
      { de: "Der Zug wird zur Abfahrt pfeifen.", fr: "Le train sifflera pour le départ." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ein Lied pfeifen.", fr: "Je vais siffler une chanson." },
      { de: "Die Menge wird die gegnerische Mannschaft auspfeifen.", fr: "La foule va siffler l'équipe adverse." },
      { de: "Wirst du pfeifen?", fr: "Vas-tu siffler ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde pfeifen, wenn ich es könnte.", fr: "Je sifflerais si je savais le faire." },
        { de: "Er würde nicht auf der Straße pfeifen.", fr: "Il ne sifflerait pas dans la rue." },
        { de: "Würdest du pfeifen, um mich zu rufen?", fr: "Sifflerais-tu pour m'appeler ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist verboten, dass du im Theater pfeifst.", fr: "Il est interdit que tu siffles au théâtre." },
      { de: "Ich möchte nicht, dass sie pfeifen.", fr: "Je ne veux pas qu'ils sifflent." },
      { de: "Bevor du pfeifst, denk an die Nachbarn.", fr: "Avant que tu siffles, pense aux voisins." }
    ]
  }
};
