import type { Verb } from '@/types/verb-types';

export const mettre: Verb = {
  infinitive: "mettre",
  translation: "setzen / legen / stellen / anziehen",
  verbGroup: 3,
  indicatif: {
    présent: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    passé_composé: { aux: "avoir", participle: "mis" },
    imparfait: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
    plus_que_parfait: { aux: "avoir", participle: "mis" },
    futur_simple: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
    futur_proche: { aux: "aller", participle: "mettre" }
  },
  subjonctif: { présent: ["mette", "mettes", "mette", "mettions", "mettiez", "mettent"] },
  conditionnel: { présent: ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"], passé: { aux: "avoir", participle: "mis" } },
  imperatif: { present: ["mets", "mettons", "mettez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich lege das Buch auf den Tisch.", fr: "Je mets le livre sur la table." },
      { de: "Was ziehst du heute an?", fr: "Qu'est-ce que tu mets aujourd'hui ?" },
      { de: "Wir stellen die Stühle in den Garten.", fr: "Nous mettons les chaises dans le jardin." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Schlüssel auf den Tisch gelegt.", fr: "J'ai mis la clé sur la table." },
      { de: "Sie hat ihr schönstes Kleid angezogen.", fr: "Elle a mis sa plus belle robe." },
      { de: "Wir haben lange gebraucht (Zeit hineingesteckt), um anzukommen.", fr: "Nous avons mis longtemps pour arriver." }
    ],
    "indicatif_imparfait": [
        { de: "Sie zog immer einen Hut an, wenn sie ausging.", fr: "Elle mettait toujours un chapeau quand elle sortait." },
        { de: "Du hast deine Sachen immer überall hingelegt.", fr: "Tu mettais toujours tes affaires partout." },
        { de: "Wir stellten die Blumen in eine Vase.", fr: "Nous mettions les fleurs dans un vase." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die wichtigen Papiere weggelegt.", fr: "J'avais mis les papiers importants de côté." },
        { de: "Er hatte seinen Mantel bereits angezogen.", fr: "Il avait déjà mis son manteau." },
        { de: "Wir hatten den Tisch für die Gäste gedeckt.", fr: "Nous avions mis la table pour les invités." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde einen Pullover anziehen, weil es kalt ist.", fr: "Je mettrai un pull parce qu'il fait froid." },
      { de: "Wo wirst du die Blumen hinstellen?", fr: "Où mettras-tu les fleurs ?" },
      { de: "Wir werden die Musik auflegen.", fr: "Nous mettrons la musique." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde meinen Mantel anziehen.", fr: "Je vais mettre mon manteau." },
      { de: "Sie wird den Tisch decken.", fr: "Elle va mettre la table." },
      { de: "Wir werden die Heizung anstellen.", fr: "Nous allons mettre le chauffage." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ein anderes Hemd anziehen.", fr: "Je mettrais une autre chemise." },
        { de: "Er würde mehr Anstrengung hineinstecken, wenn er könnte.", fr: "Il mettrait plus d'effort s'il le pouvait." },
        { de: "Wir würden das Sofa dorthin stellen.", fr: "Nous mettrions le canapé là-bas." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Jacke anziehst.", fr: "Il est important que tu mettes ta veste." },
      { de: "Ich möchte, dass er den Müll rausbringt.", fr: "Je veux qu'il mette la poubelle dehors." },
      { de: "Bevor wir uns setzen, müssen wir den Tisch decken.", fr: "Avant que nous nous mettions à table, il faut mettre le couvert." }
    ]
  }
};
