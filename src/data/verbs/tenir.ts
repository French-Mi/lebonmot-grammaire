import type { Verb } from '@/types/verb-types';

export const tenir: Verb = {
  infinitive: "tenir",
  translation: "halten",
  verbGroup: 3,
  indicatif: {
    présent: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
    passé_composé: { aux: "avoir", participle: "tenu" },
    imparfait: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
    plus_que_parfait: { aux: "avoir", participle: "tenu" },
    futur_simple: ["tiendrai", "tiendras", "tiendra", "tiendrons", "tiendrez", "tiendront"],
    futur_proche: { aux: "aller", participle: "tenir" }
  },
  subjonctif: { présent: ["tienne", "tiennes", "tienne", "tenions", "teniez", "tiennent"] },
  conditionnel: { présent: ["tiendrais", "tiendrais", "tiendrait", "tiendrions", "tiendriez", "tiendraient"], passé: { aux: "avoir", participle: "tenu" } },
  imperatif: { present: ["tiens", "tenons", "tenez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich halte das Buch.", fr: "Je tiens le livre." },
      { de: "Er hält sein Versprechen.", fr: "Il tient sa promesse." },
      { de: "Wir halten eine Besprechung ab.", fr: "Nous tenons une réunion." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein Wort gehalten.", fr: "J'ai tenu ma parole." },
      { de: "Sie hat die Tür für mich aufgehalten.", fr: "Elle m'a tenu la porte." },
      { de: "Wir haben die Position gehalten.", fr: "Nous avons tenu la position." }
    ],
    "indicatif_imparfait": [
        { de: "Er hielt seine Tasche fest.", fr: "Il tenait son sac fermement." },
        { de: "Sie hielt ein Tagebuch.", fr: "Elle tenait un journal intime." },
        { de: "Wir hielten unsere Treffen jeden Montag ab.", fr: "Nous tenions nos réunions tous les lundis." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mein Versprechen gehalten.", fr: "J'avais tenu ma promesse." },
        { de: "Sie hatte die Kerze gehalten, bis sie ausging.", fr: "Elle avait tenu la bougie jusqu'à ce qu'elle s'éteigne." },
        { de: "Wir hatten die Stellung die ganze Nacht gehalten.", fr: "Nous avions tenu la position toute la nuit." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich auf dem Laufenden halten.", fr: "Je te tiendrai au courant." },
      { de: "Er wird sein Wort halten.", fr: "Il tiendra sa parole." },
      { de: "Die Konferenz wird in Paris stattfinden (gehalten).", fr: "La conférence se tiendra à Paris." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Leiter halten.", fr: "Je vais tenir l'échelle." },
      { de: "Sie wird eine Rede halten.", fr: "Elle va tenir un discours." },
      { de: "Wir werden unser Versprechen halten.", fr: "Nous allons tenir notre promesse." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Tür für dich aufhalten.", fr: "Je te tiendrais la porte." },
        { de: "Er würde sein Versprechen halten, wenn er könnte.", fr: "Il tiendrait sa promesse s'il le pouvait." },
        { de: "Wir würden gerne eine größere Rolle spielen (halten).", fr: "Nous aimerions tenir un plus grand rôle." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dein Wort hältst.", fr: "Il est important que tu tiennes ta parole." },
      { de: "Ich möchte, dass er die Tür hält.", fr: "Je veux qu'il tienne la porte." },
      { de: "Damit wir unsere Versprechen halten.", fr: "Pour que nous tenions nos promesses." }
    ]
  }
};
