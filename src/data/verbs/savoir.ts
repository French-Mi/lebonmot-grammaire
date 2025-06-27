// src/data/verbs/savoir.ts
import type { Verb } from '@/types/verb-types';

export const savoir: Verb = {
  infinitive: "savoir",
  translation: "wissen",
  verbGroup: 3,
  indicatif: {
    présent: ["sais", "sais", "sait", "savons", "savez", "savent"],
    passé_composé: { aux: "avoir", participle: "su" },
    imparfait: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
    plus_que_parfait: { aux: "avoir", participle: "su" },
    futur_simple: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
    futur_proche: { aux: "aller", participle: "savoir" }
  },
  subjonctif: { présent: ["sache", "saches", "sache", "sachions", "sachiez", "sachent"] },
  conditionnel: { présent: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"], passé: { aux: "avoir", participle: "su" } },
  imperatif: { present: ["sache", "sachons", "sachez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich weiß es nicht.", fr: "Je ne sais pas." },
      { de: "Weißt du, wo er ist?", fr: "Tu sais où il est ?" },
      { de: "Wir wissen die Antwort.", fr: "Nous savons la réponse." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe es sofort gewusst.", fr: "Je l'ai su tout de suite." },
      { de: "Sie hat nie die Wahrheit erfahren.", fr: "Elle n'a jamais su la vérité." },
      { de: "Wir haben gewusst, wie wir reagieren sollten.", fr: "Nous avons su comment réagir." }
    ],
    "indicatif_imparfait": [
      { de: "Ich wusste, dass du kommen würdest.", fr: "Je savais que tu viendrais." },
      { de: "Er wusste immer alles.", fr: "Il savait always tout." },
      { de: "Ihr wusstet es nicht, oder?", fr: "Vous ne le saviez pas, n'est-ce pas ?" }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Wenn ich es gewusst hätte, wäre ich gekommen.", fr: "Si je l'avais su, je serais venu(e)." },
      { de: "Sie hatte gewusst, dass es schwierig sein würde.", fr: "Elle avait su que ce serait difficile." },
      { de: "Wir hatten gewusst, dass es eine Falle war.", fr: "Nous avions su que c'était un piège." }
    ],
    "indicatif_futur_simple": [
      { de: "Eines Tages wirst du die Wahrheit erfahren.", fr: "Un jour, tu sauras la vérité." },
      { de: "Wir werden es morgen wissen.", fr: "Nous le saurons demain." },
      { de: "Sie wird nie wissen, wie sehr ich sie geliebt habe.", fr: "Elle ne saura jamais à quel point je l'ai aimée." }
    ],
    "indicatif_futur_proche": [
      { de: "Du wirst es bald wissen.", fr: "Tu vas bientôt le savoir." },
      { de: "Wir werden die Antwort gleich wissen.", fr: "Nous allons savoir la réponse tout de suite." },
      { de: "Ich werde wissen, wie es geht.", fr: "Je vais savoir comment faire." }
    ],
    "conditionnel_présent": [
      { de: "Ich wüsste nicht, was ich sagen soll.", fr: "Je ne saurais pas quoi dire." },
      { de: "Könnten Sie mir sagen, wie spät es ist?", fr: "Sauriez-vous me dire l'heure ?" },
      { de: "Er würde es wissen, wenn er hier wäre.", fr: "Il le saurait s'il était là." }
    ],
    "subjonctif_présent": [
      { de: "Es ist gut, dass du es weißt.", fr: "Il est bon que tu le saches." },
      { de: "Ich will nicht, dass er etwas weiß.", fr: "Je ne veux pas qu'il sache quoi que ce soit." },
      { de: "Damit wir es wissen.", fr: "Pour que nous le sachions." }
    ]
  }
};
