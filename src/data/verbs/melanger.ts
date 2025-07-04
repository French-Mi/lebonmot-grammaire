import type { Verb } from '@/types/verb-types';

export const melanger: Verb = {
  infinitive: "mélanger",
  translation: "mischen, vermischen",
  verbGroup: 1,
  indicatif: {
    présent: ["mélange", "mélanges", "mélange", "mélangeons", "mélangez", "mélangent"],
    passé_composé: { aux: "avoir", participle: "mélangé" },
    imparfait: ["mélangeais", "mélangeais", "mélangeait", "mélangions", "mélangiez", "mélangeaient"],
    plus_que_parfait: { aux: "avoir", participle: "mélangé" },
    futur_simple: ["mélangerai", "mélangeras", "mélangera", "mélangerons", "mélangerez", "mélangeront"],
    futur_proche: { aux: "aller", participle: "mélanger" }
  },
  subjonctif: {
    présent: ["mélange", "mélanges", "mélange", "mélangions", "mélangiez", "mélangent"]
  },
  conditionnel: {
    présent: ["mélangerais", "mélangerais", "mélangerait", "mélangerions", "mélangeriez", "mélangeraient"],
    passé: { aux: "avoir", participle: "mélangé" }
  },
  imperatif: {
    present: ["mélange", "mélangeons", "mélangez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich mische die Zutaten in einer großen Schüssel.", fr: "Je mélange les ingrédients dans un grand bol." },
      { de: "Mischst du die Karten gut?", fr: "Est-ce que tu mélanges bien les cartes ?" },
      { de: "Er vermischt oft Arbeit und Vergnügen.", fr: "Il mélange souvent le travail et le plaisir." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die trockenen und die nassen Zutaten vermischt.", fr: "J'ai mélangé les ingrédients secs et les ingrédients humides." },
      { de: "Sie hat die Farben gemischt, um ein schönes Grün zu erhalten.", fr: "Elle a mélangé les couleurs pour obtenir un beau vert." },
      { de: "Du hast die Papiere durcheinandergebracht!", fr: "Tu as mélangé les papiers !" }
    ],
    "indicatif_imparfait": [
        { de: "Der Barkeeper mischte die Cocktails mit Geschick.", fr: "Le barman mélangeait les cocktails avec habileté." },
        { de: "Wir mischten verschiedene Musikstile auf unseren Partys.", fr: "Nous mélangions différents styles de musique dans nos fêtes." },
        { de: "Als Kind hast du immer alle deine Spielsachen vermischt.", fr: "Quand tuétais enfant, tu mélangeais toujours tous tes jouets." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Maler hatte die Farben auf seiner Palette gemischt.", fr: "Le peintre avait mélangé les couleurs sur sa palette." },
        { de: "Ich hatte die Namen verwechselt.", fr: "J'avais mélangé les noms." },
        { de: "Sie hatten verschiedene Kulturen in ihrer Familie vermischt.", fr: "Ils avaient mélangé plusieurs cultures dans leur famille." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde alles zusammenmischen.", fr: "Je mélangerai tout ensemble." },
      { de: "Der DJ wird verschiedene Lieder mixen.", fr: "Le DJ mélangera différentes chansons." },
      { de: "Wir werden die Gruppen für das Projekt mischen.", fr: "Nous mélangerons les groupes pour le projet." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde den Zucker und das Mehl mischen.", fr: "Je vais mélanger le sucre et la farine." },
      { de: "Sie wird verschiedene Stile in ihrer Dekoration mischen.", fr: "Elle va mélanger différents styles dans sa décoration." },
      { de: "Ihr werdet die Sprachen nicht verwechseln, wenn ihr übt.", fr: "Vous n'allez pas mélanger les langues si vous pratiquez." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diese beiden Weine nicht mischen.", fr: "Je ne mélangerais pas ces deux vins." },
        { de: "Würdest du es wagen, diese Muster zu mischen?", fr: "Oserais-tu mélanger ces motifs ?" },
        { de: "Er würde verschiedene Einflüsse in seiner Musik mischen.", fr: "Il mélangerait diverses influences dans sa musique." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte die Zutaten anders gemischt.", fr: "J'aurais mélangé les ingrédients différemment." },
        { de: "Du hättest die Karten besser mischen sollen.", fr: "Tu aurais dû mieux mélanger les cartes." },
        { de: "Sie hätten niemals diese beiden Chemikalien mischen dürfen.", fr: "Ils n'auraient jamais dû mélanger ces deux produits chimiques." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du die Zutaten gut vermischst.", fr: "Il est essentiel que tu mélanges bien les ingrédients." },
      { de: "Der Lehrer möchte nicht, dass wir die Gruppen mischen.", fr: "Le professeur ne veut pas que nous mélangions les groupes." },
      { de: "Damit sich die Sauce gut vermischt, musst du ständig rühren.", fr: "Pour que la sauce se mélange bien, tu dois remuer constamment." }
    ]
  }
};
