import type { Verb } from '@/types/verb-types';

export const lutter: Verb = {
  infinitive: "lutter",
  translation: "kämpfen / ringen",
  verbGroup: 1,
  indicatif: {
    présent: ["lutte", "luttes", "lutte", "luttons", "luttez", "luttent"],
    passé_composé: { aux: "avoir", participle: "lutté" },
    imparfait: ["luttais", "luttais", "luttait", "luttions", "luttiez", "luttaient"],
    plus_que_parfait: { aux: "avoir", participle: "lutté" },
    futur_simple: ["lutterai", "lutteras", "luttera", "lutterons", "lutterez", "lutteront"],
    futur_proche: { aux: "aller", participle: "lutter" }
  },
  subjonctif: { présent: ["lutte", "luttes", "lutte", "luttions", "luttiez", "luttent"] },
  conditionnel: { présent: ["lutterais", "lutterais", "lutterait", "lutterions", "lutteriez", "lutteraient"], passé: { aux: "avoir", participle: "lutté" } },
  imperatif: { present: ["lutte", "luttons", "luttez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich kämpfe für meine Rechte.", fr: "Je lutte pour mes droits." },
      { de: "Er kämpft gegen die Krankheit.", fr: "Il lutte contre la maladie." },
      { de: "Wir kämpfen für eine bessere Welt.", fr: "Nous luttons pour un monde meilleur." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein ganzes Leben lang gekämpft.", fr: "J'ai lutté toute ma vie." },
      { de: "Sie hat gegen die Ungerechtigkeit gekämpft.", fr: "Elle a lutté contre l'injustice." },
      { de: "Wir haben bis zum Ende gekämpft.", fr: "Nous avons lutté jusqu'au bout." }
    ],
    "indicatif_imparfait": [
        { de: "Sie kämpften für die Unabhängigkeit.", fr: "Ils luttaient pour l'indépendance." },
        { de: "Ich kämpfte mit dem Schlaf.", fr: "Je luttais contre le sommeil." },
        { de: "Wir rangen mit den Schwierigkeiten.", fr: "Nous luttions avec les difficultés." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte gegen alle Widrigkeiten gekämpft.", fr: "Elle avait lutté contre vents et marées." },
        { de: "Wir hatten lange gekämpft, um dorthin zu gelangen.", fr: "Nous avions lutté longtemps pour en arriver là." },
        { de: "Der Boxer hatte tapfer gekämpft.", fr: "Le boxeur avait lutté courageusement." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde weiterkämpfen.", fr: "Je lutterai encore." },
      { de: "Du wirst gegen deine Ängste kämpfen.", fr: "Tu lutteras contre tes peurs." },
      { de: "Wir werden für das kämpfen, woran wir glauben.", fr: "Nous lutterons pour ce en quoi nous croyons." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gegen diese Entscheidung ankämpfen.", fr: "Je vais lutter contre cette décision." },
      { de: "Sie wird um ihren Platz kämpfen.", fr: "Elle va lutter pour sa place." },
      { de: "Wir werden gemeinsam kämpfen.", fr: "Nous allons lutter ensemble." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde für diese Sache kämpfen.", fr: "Je lutterais pour cette cause." },
        { de: "Er würde bis zum Schluss ringen.", fr: "Il lutterait jusqu'à la fin." },
        { de: "Wir würden gegen diese Ungerechtigkeit kämpfen.", fr: "Nous lutterions contre cette injustice." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass wir kämpfen.", fr: "Il faut que nous luttions." },
      { de: "Ich möchte, dass du für deine Träume kämpfst.", fr: "Je veux que tu luttes pour tes rêves." },
      { de: "Damit er kämpfen kann, braucht er Unterstützung.", fr: "Pour qu'il lutte, il a besoin de soutien." }
    ]
  }
};
