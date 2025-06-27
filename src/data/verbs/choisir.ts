// src/data/verbs/choisir.ts
import type { Verb } from '@/types/verb-types';

export const choisir: Verb = {
  infinitive: "choisir",
  translation: "wählen / aussuchen",
  verbGroup: 2,
  indicatif: {
    présent: ["choisis", "choisis", "choisit", "choisissons", "choisissez", "choisissent"],
    passé_composé: { aux: "avoir", participle: "choisi" },
    imparfait: ["choisissais", "choisissais", "choisissait", "choisissions", "choisissiez", "choisissaient"],
    plus_que_parfait: { aux: "avoir", participle: "choisi" },
    futur_simple: ["choisirai", "choisiras", "choisira", "choisirons", "choisirez", "choisiront"],
    futur_proche: { aux: "aller", participle: "choisir" }
  },
  subjonctif: { présent: ["choisisse", "choisisses", "choisisse", "choisissions", "choisissiez", "choisissent"] },
  conditionnel: { présent: ["choisirais", "choisirais", "choisirait", "choisirions", "choisiriez", "choisiraient"], passé: { aux: "avoir", participle: "choisi" } },
  imperatif: { present: ["choisis", "choisissons", "choisissez"] },
  examples: {
    "indicatif_présent": [
        { de: "Ich wähle das blaue Kleid.", fr: "Je choisis la robe bleue." },
        { de: "Was wählst du?", fr: "Qu'est-ce que tu choisis ?" },
        { de: "Wir wählen immer den einfachsten Weg.", fr: "Nous choisissons toujours le chemin le plus simple." }
    ],
    "indicatif_passé_composé": [
        { de: "Ich habe dieses Buch ausgewählt.", fr: "J'ai choisi ce livre." },
        { de: "Sie hat den richtigen Moment gewählt.", fr: "Elle a choisi le bon moment." },
        { de: "Habt ihr schon gewählt?", fr: "Vous avez déjà choisi ?" }
    ],
    "indicatif_imparfait": [
        { de: "Er wählte seine Worte immer sorgfältig aus.", fr: "Il choisissait always ses mots avec soin." },
        { de: "Als Kind hast du immer Vanille gewählt.", fr: "Enfant, tu choisissais toujours la vanille." },
        { de: "Sie wählten ihre Reiseziele gemeinsam aus.", fr: "Ils choisissaient leurs destinations de voyage ensemble." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte bereits mein Menü ausgewählt.", fr: "J'avais déjà choisi mon menu." },
        { de: "Sie hatte ein anderes Geschenk für ihn ausgewählt.", fr: "Elle avait choisi un autre cadeau pour lui." },
        { de: "Wir hatten diesen Weg nicht gewählt.", fr: "Nous n'avions pas choisi ce chemin." }
    ],
    "indicatif_futur_simple": [
        { de: "Ich werde die beste Option wählen.", fr: "Je choisirai la meilleure option." },
        { de: "Du wirst deinen Weg wählen müssen.", fr: "Tu devras choisir ton chemin." },
        { de: "Sie werden einen neuen Präsidenten wählen.", fr: "Ils choisiront un nouveau président." }
    ],
    "indicatif_futur_proche": [
        { de: "Ich werde ein Dessert auswählen.", fr: "Je vais choisir un dessert." },
        { de: "Wirst du den roten oder den blauen Pullover wählen?", fr: "Tu vas choisir le pull rouge ou le bleu ?" },
        { de: "Wir werden einen Film zum Anschauen auswählen.", fr: "Nous allons choisir un film à regarder." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen hier wählen.", fr: "Je choisirais celui-ci." },
        { de: "An deiner Stelle würde ich den anderen wählen.", fr: "À ta place, je choisirais l'autre." },
        { de: "Was würden Sie wählen?", fr: "Que choisiriez-vous ?" }
    ],
    "subjonctif_présent": [
      { de: "Du musst ein Thema wählen.", fr: "Il faut que tu choisisses un sujet." },
      { de: "Ich möchte, dass wir zusammen wählen.", fr: "Je veux que nous choisissions ensemble." },
      { de: "Es ist besser, dass sie selbst wählt.", fr: "Il vaut mieux qu'elle choisisse elle-même." }
    ]
  }
};
