import type { Verb } from '@/types/verb-types';

export const sePlaindre: Verb = {
  infinitive: "se plaindre",
  translation: "sich beschweren",
  verbGroup: 3,
  isReflexive: true,
  indicatif: {
    présent: ["plains", "plains", "plaint", "plaignons", "plaignez", "plaignent"],
    passé_composé: { aux: 'être', participle: 'plaint' },
    imparfait: ["plaignais", "plaignais", "plaignait", "plaignions", "plaigniez", "plaignaient"],
    plus_que_parfait: { aux: 'être', participle: 'plaint' },
    futur_simple: ["plaindrai", "plaindras", "plaindra", "plaindrons", "plaindrez", "plaindront"],
    futur_proche: { aux: "aller", participle: "se plaindre" }
  },
  subjonctif: {
    présent: ["plaigne", "plaignes", "plaigne", "plaignions", "plaigniez", "plaignent"]
  },
  conditionnel: {
    présent: ["plaindrais", "plaindrais", "plaindrait", "plaindrions", "plaindriez", "plaindraient"],
    passé: { aux: 'être', participle: 'plaint' }
  },
  imperatif: {
    present: ["plains-toi", "plaignons-nous", "plaignez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich beschwere mich nie.", fr: "Je ne me plains jamais." },
      { de: "Er beschwert sich immer über das Wetter.", fr: "Il se plaint tout le temps du temps." },
      { de: "Worüber beschweren Sie sich?", fr: "De quoi vous plaignez-vous ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich beim Manager beschwert.", fr: "Je me suis plaint(e) au directeur." },
      { de: "Sie hat sich über den Lärm beschwert.", fr: "Elle s'est plainte du bruit." },
      { de: "Haben sie sich über das Essen beschwert?", fr: "Est-ce qu'ils se sont plaints de la nourriture ?" }
    ],
    "indicatif_imparfait": [
        { de: "Er beklagte sich ständig über seine Arbeit.", fr: "Il se plaignait constamment de son travail." },
        { de: "Wir beklagten uns über die Kälte in der Wohnung.", fr: "Nous nous plaignions du froid dans l'appartement." },
        { de: "Ihr habt euch nie beschwert, selbst wenn es schwierig war.", fr: "Vous ne vous plaigniez jamais, même quand c'était difficile." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich bei der Direktion beschwert, aber nichts hatte sich geändert.", fr: "Elle s'était plainte à la direction, mais rien n'avait changé." },
        { de: "Sie hatten sich über Kopfschmerzen beklagt.", fr: "Ils s'étaient plaints de maux de tête." },
        { de: "Ich hatte mich über den schlechten Service beschwert.", fr: "Je m'étais plaint(e) du mauvais service." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich beschweren, wenn das noch einmal passiert.", fr: "Je me plaindrai si cela se reproduit." },
      { de: "Wirst du dich über deinen Nachbarn beschweren?", fr: "Te plaindras-tu de ton voisin ?" },
      { de: "Sie werden sich nicht beschweren, sie sind zu schüchtern.", fr: "Ils ne se plaindront pas, ils sont trop timides." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich beim Kundenservice beschweren.", fr: "Je vais me plaindre au service client." },
      { de: "Er wird sich über das Essen beschweren, das ist sicher.", fr: "Il va se plaindre de la nourriture, c'est certain." },
      { de: "Wir werden uns nicht beschweren.", fr: "Nous n'allons pas nous plaindre." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich an deiner Stelle beschweren.", fr: "Je me plaindrais à ta place." },
        { de: "Er würde sich nicht beschweren, selbst wenn er einen Grund dazu hätte.", fr: "Il ne se plaindrait pas, même s'il avait une raison." },
        { de: "Sie würden sich beschweren, wenn sie wüssten, dass sie es können.", fr: "Elles se plaindraient si elles savaient qu'elles le pouvaient." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich beschwert, wenn ich dort gewesen wäre.", fr: "Je me serais plaint(e) si j'avais été là." },
        { de: "Sie hätte sich beschwert, aber sie hatte Angst.", fr: "Elle se serait plainte, mais elle avait peur." },
        { de: "Wir hätten uns über den Lärm beschwert.", fr: "Nous nous serions plaints du bruit." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte nicht, dass du dich beschwerst.", fr: "Je ne veux pas que tu te plaignes." },
      { de: "Es ist normal, dass man sich beschwert, wenn etwas nicht stimmt.", fr: "Il est normal qu'on se plaigne quand quelque chose ne va pas." },
      { de: "Bevor sie sich beschweren, sollten sie eine Lösung vorschlagen.", fr: "Avant qu'ils ne se plaignent, ils devraient proposer une solution." }
    ]
  }
};
