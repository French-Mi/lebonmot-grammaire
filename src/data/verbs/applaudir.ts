import type { Verb } from '@/types/verb-types';

export const applaudir: Verb = {
  infinitive: "applaudir",
  translation: "applaudieren / klatschen",
  verbGroup: 2,
  indicatif: {
    présent: ["applaudis", "applaudis", "applaudit", "applaudissons", "applaudissez", "applaudissent"],
    passé_composé: { aux: "avoir", participle: "applaudi" },
    imparfait: ["applaudissais", "applaudissais", "applaudissait", "applaudissions", "applaudissiez", "applaudissaient"],
    plus_que_parfait: { aux: "avoir", participle: "applaudi" },
    futur_simple: ["applaudirai", "applaudiras", "applaudira", "applaudirons", "applaudirez", "applaudiront"],
    futur_proche: { aux: "aller", participle: "applaudir" }
  },
  subjonctif: { présent: ["applaudisse", "applaudisses", "applaudisse", "applaudissions", "applaudissiez", "applaudissent"] },
  conditionnel: { présent: ["applaudirais", "applaudirais", "applaudirait", "applaudirions", "applaudiriez", "applaudiraient"], passé: { aux: "avoir", participle: "applaudi" } },
  imperatif: { present: ["applaudis", "applaudissons", "applaudissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich applaudiere dem Künstler.", fr: "J'applaudis l'artiste." },
      { de: "Das Publikum klatscht.", fr: "Le public applaudit." },
      { de: "Wir klatschen bei der Aufführung.", fr: "Nous applaudissons le spectacle." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe lange applaudiert.", fr: "J'ai longtemps applaudi." },
      { de: "Alle haben dem Redner applaudiert.", fr: "Tout le monde a applaudi l'orateur." },
      { de: "Hast du applaudiert?", fr: "As-tu applaudi ?" }
    ],
    "indicatif_imparfait": [
        { de: "Die Zuschauer klatschten begeistert.", fr: "Les spectateurs applaudissaient avec enthousiasme." },
        { de: "Jedes Mal, wenn er sang, klatschte sie.", fr: "Chaque fois qu'il chantait, elle applaudissait." },
        { de: "Wir applaudierten am Ende jeder Szene.", fr: "Nous applaudissions à la fin de chaque scène." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatten applaudiert, bevor er seine Rede beendet hatte.", fr: "Ils avaient applaudi avant qu'il ne finisse son discours." },
        { de: "Ich hatte der Leistung applaudiert.", fr: "J'avais applaudi la performance." },
        { de: "Das Publikum hatte so sehr applaudiert, dass der Schauspieler zurückkam.", fr: "Le public avait tellement applaudi que l'acteur est revenu." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde am Ende applaudieren.", fr: "J'applaudirai à la fin." },
      { de: "Das Publikum wird dem Sieger applaudieren.", fr: "Le public applaudira le vainqueur." },
      { de: "Wir werden seiner Rede applaudieren.", fr: "Nous applaudirons son discours." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich applaudieren.", fr: "Je vais applaudir." },
      { de: "Sie werden dem Pianisten applaudieren.", fr: "Ils vont applaudir le pianiste." },
      { de: "Wir werden der Mannschaft applaudieren.", fr: "Nous allons applaudir l'équipe." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde applaudieren, wenn es mir gefallen würde.", fr: "J'applaudirais si ça me plaisait." },
        { de: "Er würde dem Vorschlag Beifall klatschen.", fr: "Il applaudirait la proposition." },
        { de: "Wir würden alle applaudieren.", fr: "Nous applaudirions tous." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass das Publikum applaudiert.", fr: "Il est important que le public applaudisse." },
      { de: "Ich möchte, dass du für ihn klatschst.", fr: "Je veux que tu applaudisses pour lui." },
      { de: "Er wartet, bis wir applaudieren.", fr: "Il attend que nous applaudissions." }
    ]
  }
};
