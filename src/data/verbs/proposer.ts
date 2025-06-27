import type { Verb } from '@/types/verb-types';

export const proposer: Verb = {
  infinitive: "proposer",
  translation: "vorschlagen",
  verbGroup: 1,
  indicatif: {
    présent: ["propose", "proposes", "propose", "proposons", "proposez", "proposent"],
    passé_composé: { aux: "avoir", participle: "proposé" },
    imparfait: ["proposais", "proposais", "proposait", "proposions", "proposiez", "proposaient"],
    plus_que_parfait: { aux: "avoir", participle: "proposé" },
    futur_simple: ["proposerai", "proposeras", "proposera", "proposerons", "proposerez", "proposeront"],
    futur_proche: { aux: "aller", participle: "proposer" }
  },
  subjonctif: { présent: ["propose", "proposes", "propose", "proposions", "proposiez", "proposent"] },
  conditionnel: { présent: ["proposerais", "proposerais", "proposerait", "proposerions", "proposeriez", "proposeraient"], passé: { aux: "avoir", participle: "proposé" } },
  imperatif: { present: ["propose", "proposons", "proposez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schlage vor, ins Kino zu gehen.", fr: "Je propose d'aller au cinéma." },
      { de: "Was schlägst du vor?", fr: "Que proposes-tu ?" },
      { de: "Sie schlägt einen Plan vor.", fr: "Elle propose un plan." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe eine Idee vorgeschlagen.", fr: "J'ai proposé une idée." },
      { de: "Er hat vorgeschlagen, eine Pause zu machen.", fr: "Il a proposé de faire une pause." },
      { de: "Was habt ihr vorgeschlagen?", fr: "Qu'avez-vous proposé ?" }
    ],
    "indicatif_imparfait": [
        { de: "Er schlug immer interessante Aktivitäten vor.", fr: "Il proposait toujours des activités intéressantes." },
        { de: "Damals schlug ich oft vor, Spiele zu spielen.", fr: "À l'époque, je proposais souvent de jouer à des jeux." },
        { de: "Wir schlugen verschiedene Lösungen vor.", fr: "Nous proposions différentes solutions." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte vorgeschlagen, früher aufzubrechen.", fr: "J'avais proposé de partir plus tôt." },
        { de: "Sie hatte einen anderen Plan vorgeschlagen.", fr: "Elle avait proposé un autre plan." },
        { de: "Wir hatten vorgeschlagen, das Datum zu ändern.", fr: "Nous avions proposé de changer la date." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde bei der Besprechung eine Alternative vorschlagen.", fr: "Je proposerai une alternative lors de la réunion." },
      { de: "Sie wird einen neuen Kandidaten vorschlagen.", fr: "Elle proposera un nouveau candidat." },
      { de: "Wir werden eine bessere Lösung vorschlagen.", fr: "Nous proposerons une meilleure solution." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde einen Toast vorschlagen.", fr: "Je vais proposer un toast." },
      { de: "Wirst du eine Aktivität vorschlagen?", fr: "Vas-tu proposer une activité ?" },
      { de: "Sie werden eine Wanderung vorschlagen.", fr: "Ils vont proposer une randonnée." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde einen Kompromiss vorschlagen.", fr: "Je proposerais un compromis." },
        { de: "Was würdest du vorschlagen?", fr: "Que proposerais-tu ?" },
        { de: "Er würde vorschlagen zu bleiben, wenn er könnte.", fr: "Il proposerait de rester s'il le pouvait." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du etwas vorschlägst.", fr: "Il faut que tu proposes quelque chose." },
      { de: "Ich möchte, dass er einen Plan vorschlägt.", fr: "Je veux qu'il propose un plan." },
      { de: "Es ist eine gute Idee, dass wir eine Pause vorschlagen.", fr: "C'est une bonne idée que nous proposions une pause." }
    ]
  }
};
