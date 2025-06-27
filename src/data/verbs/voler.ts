import type { Verb } from '@/types/verb-types';

export const voler: Verb = {
  infinitive: "voler",
  translation: "fliegen / stehlen",
  verbGroup: 1,
  indicatif: {
    présent: ["vole", "voles", "vole", "volons", "volez", "volent"],
    passé_composé: { aux: "avoir", participle: "volé" },
    imparfait: ["volais", "volais", "volait", "volions", "voliez", "volaient"],
    plus_que_parfait: { aux: "avoir", participle: "volé" },
    futur_simple: ["volerai", "voleras", "volera", "volerons", "volerez", "voleront"],
    futur_proche: { aux: "aller", participle: "voler" }
  },
  subjonctif: { présent: ["vole", "voles", "vole", "volions", "voliez", "volent"] },
  conditionnel: { présent: ["volerais", "volerais", "volerait", "volerions", "voleriez", "voleraient"], passé: { aux: "avoir", participle: "volé" } },
  imperatif: { present: ["vole", "volons", "volez"] },
  examples: {
    "indicatif_présent": [
      { de: "Der Vogel fliegt hoch am Himmel.", fr: "L'oiseau vole haut dans le ciel." },
      { de: "Er stiehlt Geld aus der Kasse.", fr: "Il vole de l'argent dans la caisse." },
      { de: "Wir fliegen morgen nach New York.", fr: "Nous volons vers New York demain." }
    ],
    "indicatif_passé_composé": [
      { de: "Jemand hat meine Brieftasche gestohlen.", fr: "Quelqu'un a volé mon portefeuille." },
      { de: "Ich bin noch nie geflogen.", fr: "Je n'ai jamais volé." },
      { de: "Der Adler ist über die Berge geflogen.", fr: "L'aigle a volé au-dessus des montagnes." }
    ],
    "indicatif_imparfait": [
        { de: "Die Schmetterlinge flogen zwischen den Blumen.", fr: "Les papillons volaient parmi les fleurs." },
        { de: "Als Dieb stahl er nachts.", fr: "En tant que voleur, il volait la nuit." },
        { de: "Wir flogen oft über diese Region.", fr: "Nous volions souvent au-dessus de cette région." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Dieb hatte alle Juwelen gestohlen.", fr: "Le voleur avait volé tous les bijoux." },
        { de: "Das Flugzeug war bereits über den Ozean geflogen.", fr: "L'avion avait déjà volé au-dessus de l'océan." },
        { de: "Er hatte mir meine Idee gestohlen.", fr: "Il m'avait volé mon idée." }
    ],
    "indicatif_futur_simple": [
      { de: "Dieser Drachen wird sehr hoch fliegen.", fr: "Ce cerf-volant volera très haut." },
      { de: "Er wird nie wieder stehlen.", fr: "Il ne volera plus jamais." },
      { de: "Wir werden nächsten Sommer nach Kanada fliegen.", fr: "Nous volerons au Canada l'été prochain." }
    ],
    "indicatif_futur_proche": [
      { de: "Pass auf, er wird deine Tasche stehlen!", fr: "Attention, il va voler ton sac !" },
      { de: "Wir werden über die Stadt fliegen.", fr: "Nous allons voler au-dessus de la ville." },
      { de: "Das Flugzeug wird gleich abheben (fliegen).", fr: "L'avion va bientôt voler." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde wie ein Vogel fliegen, wenn ich könnte.", fr: "Je volerais comme un oiseau si je le pouvais." },
        { de: "Er würde niemals stehlen, er ist ehrlich.", fr: "Il ne volerait jamais, il est honnête." },
        { de: "Wir würden mit einem Heißluftballon fliegen.", fr: "Nous volerions en montgolfière." }
    ],
    "subjonctif_présent": [
      { de: "Ich habe Angst, dass er mein Portemonnaie stiehlt.", fr: "J'ai peur qu'il ne vole mon portefeuille." },
      { de: "Es ist unglaublich, dass ein Mensch fliegen kann.", fr: "Il est incroyable qu'un homme puisse voler." },
      { de: "Damit die Vögel frei fliegen können.", fr: "Pour que les oiseaux volent librement." }
    ]
  }
};
