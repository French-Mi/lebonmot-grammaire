import type { Verb } from '@/types/verb-types';

export const sOccuper: Verb = {
  infinitive: "s'occuper",
  translation: "sich kümmern / beschäftigen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["occupe", "occupes", "occupe", "occupons", "occupez", "occupent"],
    passé_composé: { aux: 'être', participle: 'occupé' },
    imparfait: ["occupais", "occupais", "occupait", "occupions", "occupiez", "occupaient"],
    plus_que_parfait: { aux: 'être', participle: 'occupé' },
    futur_simple: ["occuperai", "occuperas", "occupera", "occuperons", "occuperez", "occuperont"],
    futur_proche: { aux: "aller", participle: "s'occuper" }
  },
  subjonctif: {
    présent: ["occupe", "occupes", "occupe", "occupions", "occupiez", "occupent"]
  },
  conditionnel: {
    présent: ["occuperais", "occuperais", "occuperait", "occuperions", "occuperiez", "occuperaient"],
    passé: { aux: 'être', participle: 'occupé' }
  },
  imperatif: {
    present: ["occupe-toi", "occupons-nous", "occupez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich kümmere mich um die Kinder.", fr: "Je m'occupe des enfants." },
      { de: "Womit beschäftigst du dich?", fr: "De quoi t'occupes-tu ?" },
      { de: "Sie kümmern sich um den Garten.", fr: "Ils s'occupent du jardin." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich den ganzen Tag um das Projekt gekümmert.", fr: "Je me suis occupé(e) du projet toute la journée." },
      { de: "Sie hat sich um die Reservierungen gekümmert.", fr: "Elle s'est occupée des réservations." },
      { de: "Wir haben uns um die Gäste gekümmert.", fr: "Nous nous sommes occupés des invités." }
    ],
    "indicatif_imparfait": [
        { de: "Er kümmerte sich immer um seine kleine Schwester.", fr: "Il s'occupait toujours de sa petite sœur." },
        { de: "Früher habt ihr euch mehr um das Haus gekümmert.", fr: "Avant, vous vous occupiez plus de la maison." },
        { de: "Sie beschäftigten sich mit Malerei.", fr: "Elles s'occupaient de peinture." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich bereits um alles gekümmert.", fr: "Je m'étais déjà occupé(e) de tout." },
        { de: "Sie hatte sich um die Organisation gekümmert, bevor wir ankamen.", fr: "Elle s'était occupée de l'organisation avant notre arrivée." },
        { de: "Wir hatten uns lange nicht um den Garten gekümmert.", fr: "Nous ne nous étions pas occupés du jardin depuis longtemps." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich darum kümmern.", fr: "Je m'en occuperai." },
      { de: "Wer wird sich um die Katze kümmern?", fr: "Qui s'occupera du chat ?" },
      { de: "Wir werden uns morgen darum kümmern.", fr: "Nous nous en occuperons demain." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich gleich um dich kümmern.", fr: "Je vais m'occuper de toi tout de suite." },
      { de: "Sie wird sich um die Einkäufe kümmern.", fr: "Elle va s'occuper des courses." },
      { de: "Werden Sie sich um die Dokumente kümmern?", fr: "Allez-vous vous occuper des documents ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich gerne darum kümmern.", fr: "Je m'occuperais bien de ça." },
        { de: "Würdest du dich um meinen Hund kümmern, wenn ich in den Urlaub fahre?", fr: "T'occuperais-tu de mon chien si je pars en vacances ?" },
        { de: "Sie würden sich um alles kümmern.", fr: "Ils s'occuperaient de tout." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich darum gekümmert, wenn ich Zeit gehabt hätte.", fr: "Je me serais occupé(e) de cela si j'avais eu le temps." },
        { de: "Sie hätte sich um die Kinder gekümmert, wenn sie nicht krank gewesen wäre.", fr: "Elle se serait occupée des enfants si elle n'avait pas été malade." },
        { de: "Wir hätten uns nicht einmischen sollen (um das kümmern sollen).", fr: "Nous n'aurions pas dû nous occuper de ça." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dich um deine Gesundheit kümmerst.", fr: "Il est important que tu t'occupes de ta santé." },
      { de: "Ich möchte, dass sich jemand um dieses Problem kümmert.", fr: "Je voudrais que quelqu'un s'occupe de ce problème." },
      { de: "Bevor sie sich um uns kümmern, müssen sie sich um sich selbst kümmern.", fr: "Avant qu'ils s'occupent de nous, ils doivent s'occuper d'eux-mêmes." }
    ]
  }
};
