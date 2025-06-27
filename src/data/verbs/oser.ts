import type { Verb } from '@/types/verb-types';

export const oser: Verb = {
  infinitive: "oser",
  translation: "wagen",
  verbGroup: 1,
  indicatif: {
    présent: ["ose", "oses", "ose", "osons", "osez", "osent"],
    passé_composé: { aux: "avoir", participle: "osé" },
    imparfait: ["osais", "osais", "osait", "osions", "osiez", "osaient"],
    plus_que_parfait: { aux: "avoir", participle: "osé" },
    futur_simple: ["oserai", "oseras", "osera", "oserons", "oserez", "oseront"],
    futur_proche: { aux: "aller", participle: "oser" }
  },
  subjonctif: { présent: ["ose", "oses", "ose", "osions", "osiez", "osent"] },
  conditionnel: { présent: ["oserais", "oserais", "oserait", "oserions", "oseriez", "oseraient"], passé: { aux: "avoir", participle: "osé" } },
  imperatif: { present: ["ose", "osons", "osez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich wage es nicht, ihn zu fragen.", fr: "Je n'ose pas le lui demander." },
      { de: "Er wagt es, alles zu sagen.", fr: "Il ose tout dire." },
      { de: "Wagt ihr es, hineinzugehen?", fr: "Osez-vous entrer ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe es nicht gewagt, es zu tun.", fr: "Je n'ai pas osé le faire." },
      { de: "Sie hat es gewagt, ihm zu widersprechen.", fr: "Elle a osé le contredire." },
      { de: "Wir haben es gewagt, ein Risiko einzugehen.", fr: "Nous avons osé prendre un risque." }
    ],
    "indicatif_imparfait": [
        { de: "Früher wagte er nie, seine Meinung zu sagen.", fr: "Avant, il n'osait jamais dire son avis." },
        { de: "Sie wagte es, allein zu reisen.", fr: "Elle osait voyager seule." },
        { de: "Wir wagten es nicht, ihn anzusehen.", fr: "Nous n'osions pas le regarder." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte nicht gewagt, ihn zu unterbrechen.", fr: "Je n'avais pas osé l'interrompre." },
        { de: "Niemand hatte es gewagt, ihm zu widersprechen.", fr: "Personne n'avait osé le contredire." },
        { de: "Sie hatte es gewagt, wovon andere nur träumten.", fr: "Elle avait osé ce dont les autres ne faisaient que rêver." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es wagen, ihn um eine Gehaltserhöhung zu bitten.", fr: "J'oserai lui demander une augmentation." },
      { de: "Wirst du es wagen, von der Brücke zu springen?", fr: "Oseras-tu sauter du pont ?" },
      { de: "Sie werden es nicht wagen, zu lügen.", fr: "Ils n'oseront pas mentir." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde es wagen, es ihm zu sagen.", fr: "Je vais oser le lui dire." },
      { de: "Sie wird es nicht wagen, zu widersprechen.", fr: "Elle ne va pas oser contredire." },
      { de: "Wir werden es wagen, anders zu sein.", fr: "Nous allons oser être différents." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es nicht wagen.", fr: "Je n'oserais pas." },
        { de: "Würdest du es wagen, es zu versuchen?", fr: "Oserais-tu essayer ?" },
        { de: "Er würde es nie wagen, so etwas zu tun.", fr: "Il n'oserait jamais faire une chose pareille." }
    ],
    "subjonctif_présent": [
      { de: "Ich glaube nicht, dass er es wagt.", fr: "Je ne pense pas qu'il ose." },
      { de: "Es ist selten, dass wir es wagen, uns zu widersetzen.", fr: "Il est rare que nous osions nous opposer." },
      { de: "Es ist möglich, dass sie es wagen.", fr: "Il est possible qu'elles osent." }
    ]
  }
};
