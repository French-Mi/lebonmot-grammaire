import type { Verb } from '@/types/verb-types';

export const seTrouver: Verb = {
  infinitive: 'se trouver',
  translation: 'sich befinden',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["trouve", "trouves", "trouve", "trouvons", "trouvez", "trouvent"],
    passé_composé: { aux: 'être', participle: 'trouvé' },
    imparfait: ["trouvais", "trouvais", "trouvait", "trouvions", "trouviez", "trouvaient"],
    plus_que_parfait: { aux: 'être', participle: 'trouvé' },
    futur_simple: ["trouverai", "trouveras", "trouvera", "trouverons", "trouverez", "trouveront"],
    futur_proche: { aux: "aller", participle: "se trouver" }
  },
  subjonctif: { présent: ["trouve", "trouves", "trouve", "trouvions", "trouviez", "trouvent"] },
  conditionnel: {
    présent: ["trouverais", "trouverais", "trouverait", "trouverions", "trouveriez", "trouveraient"],
    passé: { aux: 'être', participle: 'trouvé' }
  },
  imperatif: { present: ["trouve-toi", "trouvons-nous", "trouvez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Wo befindet sich das Museum?", fr: "Où se trouve le musée ?" },
      { de: "Ich befinde mich vor dem Bahnhof.", fr: "Je me trouve devant la gare." },
      { de: "Wir befinden uns in einer guten Position.", fr: "Nous nous trouvons dans une bonne position." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich befand mich plötzlich allein wieder.", fr: "Je me suis trouvé(e) seul(e) tout à coup." },
      { de: "Wo hat sie sich wiedergefunden?", fr: "Où s'est-elle trouvée ?" },
      { de: "Wir befanden uns in einer unerwarteten Situation wieder.", fr: "Nous nous sommes trouvés dans une situation inattendue." }
    ],
    "indicatif_imparfait": [
        { de: "Das Dorf befand sich auf einem Hügel.", fr: "Le village se trouvait sur une colline." },
        { de: "Wir befanden uns oft in diesem Park.", fr: "Nous nous trouvions souvent dans ce parc." },
        { de: "Ich befand mich in einer schwierigen Lage.", fr: "Je me trouvais dans une position délicate." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich verlaufen und befand mich in einer unbekannten Straße.", fr: "Je m'étais perdu(e) et je m'étais trouvé(e) dans une rue inconnue." },
        { de: "Sie hatten sich am falschen Ort befunden.", fr: "Ils s'étaient trouvés au mauvais endroit." }
    ],
    "indicatif_futur_simple": [
      { de: "Das Hotel wird sich in der Nähe des Strandes befinden.", fr: "L'hôtel se trouvera près de la plage." },
      { de: "Wo wirst du dich in 10 Jahren befinden?", fr: "Où te trouveras-tu dans 10 ans ?" },
      { de: "Wir werden uns morgen am Eingang befinden.", fr: "Nous nous trouverons à l'entrée demain." }
    ],
    "indicatif_futur_proche": [
      { de: "Das Restaurant wird sich gleich um die Ecke befinden.", fr: "Le restaurant va se trouver juste au coin de la rue." },
      { de: "Wir werden uns in einer besseren Lage befinden.", fr: "Nous allons nous trouver dans une meilleure situation." },
      { de: "Du wirst dich vor einer großen Herausforderung befinden.", fr: "Tu vas te trouver face à un grand défi." }
    ],
    "conditionnel_présent": [
        { de: "Ohne Karte würde ich mich verloren fühlen.", fr: "Sans carte, je me trouverais perdu(e)." },
        { de: "Das Haus würde sich an einem ruhigeren Ort befinden, wenn es möglich wäre.", fr: "La maison se trouverait dans un endroit plus calme si c'était possible." }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich in Schwierigkeiten befunden, wenn du nicht gekommen wärst.", fr: "Je me serais trouvé(e) en difficulté si tu n'étais pas venu(e)." }
    ],
    "subjonctif_présent": [
      { de: "Es ist möglich, dass sich die Lösung hier befindet.", fr: "Il est possible que la solution se trouve ici." },
      { de: "Ich möchte nicht, dass du dich in Gefahr befindest.", fr: "Je ne veux pas que tu te trouves en danger." }
    ]
  }
};
