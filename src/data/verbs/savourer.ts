import type { Verb } from '@/types/verb-types';

export const savourer: Verb = {
  infinitive: "savourer",
  translation: "genießen, auskosten",
  verbGroup: 1,
  indicatif: {
    présent: ["savoure", "savoures", "savoure", "savourons", "savourez", "savourent"],
    passé_composé: { aux: "avoir", participle: "savouré" },
    imparfait: ["savourais", "savourais", "savourait", "savourions", "savouriez", "savouraient"],
    plus_que_parfait: { aux: "avoir", participle: "savouré" },
    futur_simple: ["savourerai", "savoureras", "savourera", "savourerons", "savourerez", "savoureront"],
    futur_proche: { aux: "aller", participle: "savourer" }
  },
  subjonctif: {
    présent: ["savoure", "savoures", "savoure", "savourions", "savouriez", "savourent"]
  },
  conditionnel: {
    présent: ["savourerais", "savourerais", "savourerait", "savourerions", "savoureriez", "savoureraient"],
    passé: { aux: "avoir", participle: "savouré" }
  },
  imperatif: {
    present: ["savoure", "savourons", "savourez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich genieße diesen Moment der Ruhe.", fr: "Je savoure ce moment de calme." },
      { de: "Er genießt jeden Bissen seines Kuchens.", fr: "Il savoure chaque bouchée de son gâteau." },
      { de: "Wir genießen unseren Sieg.", fr: "Nous savourons notre victoire." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meinen Kaffee auf der Terrasse genossen.", fr: "J'ai savouré mon café sur la terrasse." },
      { de: "Hast du deinen Urlaub genossen?", fr: "As-tu savouré tes vacances ?" },
      { de: "Sie haben den Erfolg ihres Projekts ausgekostet.", fr: "Ils ont savouré le succès de leur projet." }
    ],
    "indicatif_imparfait": [
        { de: "Sie genoss die Stille des Morgens.", fr: "Elle savourait le silence du matin." },
        { de: "Wir genossen die langen Sommerabende.", fr: "Nous savourions les longues soirées d'été." },
        { de: "Ihr habt jeden Augenblick eurer Reise genossen.", fr: "Vous savouriez chaque instant de votre voyage." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte meinen Sieg noch nicht richtig ausgekostet, als er schon wieder in Frage gestellt wurde.", fr: "Je n'avais pas encore bien savouré ma victoire qu'elle était déjà remise en question." },
        { de: "Sie hatte jeden Moment mit ihm genossen.", fr: "Elle avait savouré chaque moment passé avec lui." },
        { de: "Wir hatten das köstliche Essen genossen.", fr: "Nous avions savouré le délicieux repas." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde meine Rache genießen.", fr: "Je savourerai ma revanche." },
      { de: "Du wirst diesen Moment des Friedens genießen.", fr: "Tu savoureras ce moment de paix." },
      { de: "Wir werden jeden Moment unseres Urlaubs genießen.", fr: "Nous savourerons chaque instant de nos vacances." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde diesen Schokoladenkuchen genießen.", fr: "Je vais savourer ce gâteau au chocolat." },
      { de: "Sie wird ihren Erfolg auskosten.", fr: "Elle va savourer son succès." },
      { de: "Wir werden die Show genießen.", fr: "Nous allons savourer le spectacle." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen Wein mit einem guten Käse genießen.", fr: "Je savourerais ce vin avec un bon fromage." },
        { de: "Er würde seinen Ruhestand genießen, wenn er gesünder wäre.", fr: "Il savourerait sa retraite s'il était en meilleure santé." },
        { de: "Wir würden den Augenblick mehr genießen, wenn wir nicht so gestresst wären.", fr: "Nous savourerions plus l'instant si nous n'étions pas si stressés." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte diesen Moment mehr genossen, wenn du da gewesen wärst.", fr: "J'aurais savouré ce moment davantage si tu avais été là." },
        { de: "Du hättest deinen Sieg mehr auskosten sollen.", fr: "Tu aurais dû plus savourer ta victoire." },
        { de: "Wir hätten das Essen mehr genossen, wenn es nicht kalt gewesen wäre.", fr: "Nous aurions plus savouré le repas s'il n'avait pas été froid." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du diesen Moment genießt.", fr: "Je veux que tu savoures ce moment." },
      { de: "Es ist wichtig, dass man die kleinen Freuden des Lebens genießt.", fr: "Il est important que l'on savoure les petits plaisirs de la vie." },
      { de: "Damit wir den Abend genießen, lasst uns die Telefone ausschalten.", fr: "Pour que nous savourions la soirée, éteignons les téléphones." }
    ]
  }
};
