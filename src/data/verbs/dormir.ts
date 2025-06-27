import type { Verb } from '@/types/verb-types';

export const dormir: Verb = {
  infinitive: "dormir",
  translation: "schlafen",
  verbGroup: 3,
  indicatif: {
    présent: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
    passé_composé: { aux: "avoir", participle: "dormi" },
    imparfait: ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
    plus_que_parfait: { aux: "avoir", participle: "dormi" },
    futur_simple: ["dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"],
    futur_proche: { aux: "aller", participle: "dormir" }
  },
  subjonctif: { présent: ["dorme", "dormes", "dorme", "dormions", "dormiez", "dorment"] },
  conditionnel: { présent: ["dormirais", "dormirais", "dormirait", "dormirions", "dormiriez", "dormiraient"], passé: { aux: "avoir", participle: "dormi" } },
  imperatif: { present: ["dors", "dormons", "dormez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schlafe acht Stunden pro Nacht.", fr: "Je dors huit heures par nuit." },
      { de: "Die Katze schläft auf dem Sofa.", fr: "Le chat dort sur le canapé." },
      { de: "Schlaft ihr gut?", fr: "Vous dormez bien ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe sehr gut geschlafen.", fr: "J'ai très bien dormi." },
      { de: "Hast du genug geschlafen?", fr: "As-tu assez dormi ?" },
      { de: "Das Baby hat die ganze Nacht geschlafen.", fr: "Le bébé a dormi toute la nuit." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind schlief ich mit einem Teddybären.", fr: "Enfant, je dormais avec un ours en peluche." },
        { de: "Er schlief tief und fest.", fr: "Il dormait profondément." },
        { de: "Wir schliefen im Zelt.", fr: "Nous dormions dans la tente." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte kaum geschlafen.", fr: "J'avais à peine dormi." },
        { de: "Sie hatte 12 Stunden lang geschlafen.", fr: "Elle avait dormi pendant 12 heures." },
        { de: "Wir hatten im Zug geschlafen.", fr: "Nous avions dormi dans le train." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde heute Nacht gut schlafen.", fr: "Je dormirai bien cette nuit." },
      { de: "Du wirst wie ein Murmeltier schlafen.", fr: "Tu dormiras comme une marmotte." },
      { de: "Sie werden im Hotel schlafen.", fr: "Ils dormiront à l'hôtel." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde bald schlafen gehen.", fr: "Je vais bientôt dormir." },
      { de: "Das Baby wird schlafen.", fr: "Le bébé va dormir." },
      { de: "Wir werden auf der Couch schlafen.", fr: "Nous allons dormir sur le canapé." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde besser schlafen, wenn es leise wäre.", fr: "Je dormirais mieux s'il y avait du silence." },
        { de: "Er würde den ganzen Tag schlafen, wenn er könnte.", fr: "Il dormirait toute la journée s'il le pouvait." },
        { de: "Wir würden lieber in einem Bett schlafen.", fr: "Nous préférerions dormir dans un lit." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du genug schläfst.", fr: "Il est important que tu dormes assez." },
      { de: "Ich möchte, dass das Baby schläft.", fr: "Je veux que le bébé dorme." },
      { de: "Bevor wir schlafen, lesen wir eine Geschichte.", fr: "Avant que nous dormions, nous lisons une histoire." }
    ]
  }
};
