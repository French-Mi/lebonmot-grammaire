import type { Verb } from '@/types/verb-types';

export const rever: Verb = {
  infinitive: "rêver",
  translation: "träumen",
  verbGroup: 1,
  indicatif: {
    présent: ["rêve", "rêves", "rêve", "rêvons", "rêvez", "rêvent"],
    passé_composé: { aux: "avoir", participle: "rêvé" },
    imparfait: ["rêvais", "rêvais", "rêvait", "rêvions", "rêviez", "rêvaient"],
    plus_que_parfait: { aux: "avoir", participle: "rêvé" },
    futur_simple: ["rêverai", "rêveras", "rêvera", "rêverons", "rêverez", "rêveront"],
    futur_proche: { aux: "aller", participle: "rêver" }
  },
  subjonctif: { présent: ["rêve", "rêves", "rêve", "rêvions", "rêviez", "rêvent"] },
  conditionnel: { présent: ["rêverais", "rêverais", "rêverait", "rêverions", "rêveriez", "rêveraient"], passé: { aux: "avoir", participle: "rêvé" } },
  imperatif: { present: ["rêve", "rêvons", "rêvez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich träume oft.", fr: "Je rêve souvent." },
      { de: "Er träumt davon, Astronaut zu werden.", fr: "Il rêve de devenir astronaute." },
      { de: "Wovon träumst du?", fr: "De quoi tu rêves ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe von dir geträumt.", fr: "J'ai rêvé de toi." },
      { de: "Sie hat von einer Reise um die Welt geträumt.", fr: "Elle a rêvé d'un voyage autour du monde." },
      { de: "Wir haben von einer besseren Zukunft geträumt.", fr: "Nous avons rêvé d'un avenir meilleur." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind träumte ich davon, zu fliegen.", fr: "Enfant, je rêvais de voler." },
        { de: "Sie träumte mit offenen Augen.", fr: "Elle rêvait les yeux ouverts." },
        { de: "Wir träumten von fernen Ländern.", fr: "Nous rêvions de pays lointains." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte geträumt, dass ich reich wäre.", fr: "J'avais rêvé que j'étais riche." },
        { de: "Er hatte immer davon geträumt, ein Haus am Meer zu haben.", fr: "Il avait toujours rêvé d'avoir une maison au bord de la mer." },
        { de: "Sie hatte von diesem Moment geträumt.", fr: "Elle avait rêvé de ce moment." }
    ],
    "indicatif_futur_simple": [
      { de: "Eines Tages werde ich von großen Dingen träumen.", fr: "Un jour, je rêverai de grandes choses." },
      { de: "Du wirst von deinem Sieg träumen.", fr: "Tu rêveras de ta victoire." },
      { de: "Die Kinder werden von ihren Geschenken träumen.", fr: "Les enfants rêveront de leurs cadeaux." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde von dir träumen.", fr: "Je vais rêver de toi." },
      { de: "Hör auf zu träumen!", fr: "Arrête de rêver !" },
      { de: "Wir werden von unserem zukünftigen Zuhause träumen.", fr: "Nous allons rêver de notre future maison." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde davon träumen, um die Welt zu reisen.", fr: "Je rêverais de voyager autour du monde." },
        { de: "Man würde von einem Märchen träumen.", fr: "On rêverait d'un conte de fées." },
        { de: "Er würde von einem Leben ohne Sorgen träumen.", fr: "Il rêverait d'une vie sans soucis." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du von schönen Dingen träumst.", fr: "Je veux que tu rêves de belles choses." },
      { de: "Es ist selten, dass ich träume.", fr: "Il est rare que je rêve." },
      { de: "Es ist wichtig, dass wir träumen.", fr: "Il est important que nous rêvions." }
    ]
  }
};
