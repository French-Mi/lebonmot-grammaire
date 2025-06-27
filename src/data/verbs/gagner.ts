import type { Verb } from '@/types/verb-types';

export const gagner: Verb = {
  infinitive: "gagner",
  translation: "gewinnen / verdienen",
  verbGroup: 1,
  indicatif: {
    présent: ["gagne", "gagnes", "gagne", "gagnons", "gagnez", "gagnent"],
    passé_composé: { aux: "avoir", participle: "gagné" },
    imparfait: ["gagnais", "gagnais", "gagnait", "gagnions", "gagniez", "gagnaient"],
    plus_que_parfait: { aux: "avoir", participle: "gagné" },
    futur_simple: ["gagnerai", "gagneras", "gagnera", "gagnerons", "gagnerez", "gagneront"],
    futur_proche: { aux: "aller", participle: "gagner" }
  },
  subjonctif: { présent: ["gagne", "gagnes", "gagne", "gagnions", "gagniez", "gagnent"] },
  conditionnel: { présent: ["gagnerais", "gagnerais", "gagnerait", "gagnerions", "gagneriez", "gagneraient"], passé: { aux: "avoir", participle: "gagné" } },
  imperatif: { present: ["gagne", "gagnons", "gagnez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gewinne fast immer.", fr: "Je gagne presque toujours." },
      { de: "Er verdient gut sein Geld.", fr: "Il gagne bien sa vie." },
      { de: "Wir gewinnen das Spiel.", fr: "Nous gagnons le match." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Lotterie gewonnen!", fr: "J'ai gagné à la loterie !" },
      { de: "Sie hat viel Geld verdient.", fr: "Elle a gagné beaucoup d'argent." },
      { de: "Wir haben den Wettbewerb gewonnen.", fr: "Nous avons gagné la compétition." }
    ],
    "indicatif_imparfait": [
        { de: "Unsere Mannschaft gewann oft.", fr: "Notre équipe gagnait souvent." },
        { de: "Damals verdiente er nicht viel.", fr: "À l'époque, il ne gagnait pas beaucoup." },
        { de: "Ihr habt immer bei diesem Spiel gewonnen.", fr: "Vous gagniez toujours à ce jeu." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte genug Geld verdient, um in Rente zu gehen.", fr: "Il avait gagné assez d'argent pour prendre sa retraite." },
        { de: "Sie hatte das Vertrauen ihrer Kollegen gewonnen.", fr: "Elle avait gagné la confiance de ses collègues." },
        { de: "Wir hatten bereits das erste Spiel gewonnen.", fr: "Nous avions déjà gagné le premier match." }
    ],
    "indicatif_futur_simple": [
      { de: "Eines Tages werde ich gewinnen.", fr: "Un jour, je gagnerai." },
      { de: "Du wirst mehr Geld verdienen.", fr: "Tu gagneras plus d'argent." },
      { de: "Unsere Mannschaft wird gewinnen.", fr: "Notre équipe gagnera." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dieses Spiel gewinnen.", fr: "Je vais gagner ce match." },
      { de: "Sie wird an Erfahrung gewinnen.", fr: "Elle va gagner en expérience." },
      { de: "Wir werden Zeit gewinnen.", fr: "Nous allons gagner du temps." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne öfter gewinnen.", fr: "J'aimerais gagner plus souvent." },
        { de: "Mit etwas Glück könnten wir gewinnen.", fr: "Avec un peu de chance, nous pourrions gagner." },
        { de: "Er würde an Glaubwürdigkeit gewinnen.", fr: "Il gagnerait en crédibilité." }
    ],
    "subjonctif_présent": [
      { de: "Es ist möglich, dass wir gewinnen.", fr: "Il est possible que nous gagnions." },
      { de: "Ich will, dass du gewinnst.", fr: "Je veux que tu gagnes." },
      { de: "Es ist wichtig, dass unsere Mannschaft gewinnt.", fr: "Il est important que notre équipe gagne." }
    ]
  }
};
