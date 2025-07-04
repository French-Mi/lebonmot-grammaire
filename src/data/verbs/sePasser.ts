import type { Verb } from '@/types/verb-types';

export const sePasser: Verb = {
  infinitive: "se passer",
  translation: "geschehen, stattfinden, auskommen (ohne)",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["passe", "passes", "passe", "passons", "passez", "passent"],
    passé_composé: { aux: 'être', participle: 'passé' },
    imparfait: ["passais", "passais", "passait", "passions", "passiez", "passaient"],
    plus_que_parfait: { aux: 'être', participle: 'passé' },
    futur_simple: ["passerai", "passeras", "passera", "passerons", "passerez", "passeront"],
    futur_proche: { aux: "aller", participle: "se passer" }
  },
  subjonctif: {
    présent: ["passe", "passes", "passe", "passions", "passiez", "passent"]
  },
  conditionnel: {
    présent: ["passerais", "passerais", "passerait", "passerions", "passeriez", "passeraient"],
    passé: { aux: 'être', participle: 'passé' }
  },
  imperatif: {
    present: ["passe-toi", "passons-nous", "passez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Was ist hier los?", fr: "Qu'est-ce qui se passe ici ?" },
      { de: "Ich kann auf Kaffee verzichten (ohne Kaffee auskommen).", fr: "Je me passe de café." },
      { de: "Die Geschichte spielt im Mittelalter.", fr: "L'histoire se passe au Moyen Âge." }
    ],
    "indicatif_passé_composé": [
      { de: "Was ist passiert?", fr: "Qu'est-ce qui s'est passé ?" },
      { de: "Die Veranstaltung hat wie geplant stattgefunden.", fr: "L'événement s'est passé comme prévu." },
      { de: "Wir sind ohne seine Hilfe ausgekommen.", fr: "Nous nous sommes passés de son aide." }
    ],
    "indicatif_imparfait": [
        { de: "Die Szene spielte sich vor unseren Augen ab.", fr: "La scène se passait sous nos yeux." },
        { de: "Wie kam es (geschah es), dass du immer zu spät kamst?", fr: "Comment se passait-il que tu étais toujours en retard ?" },
        { de: "Früher kam man ohne Mobiltelefone aus.", fr: "Avant, on se passait de téléphones portables." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Niemand wusste, was geschehen war.", fr: "Personne ne savait ce qui s'était passé." },
        { de: "Das Fest war gut verlaufen.", fr: "La fête s'était bien passée." },
        { de: "Ich war ohne seine Erlaubnis ausgekommen.", fr: "Je m'étais passé de sa permission." }
    ],
    "indicatif_futur_simple": [
      { de: "Alles wird gut gehen.", fr: "Tout se passera bien." },
      { de: "Das Konzert wird im Freien stattfinden.", fr: "Le concert se passera en plein air." },
      { de: "Wir werden auf deine Kommentare verzichten müssen.", fr: "Nous nous passerons de tes commentaires." }
    ],
    "indicatif_futur_proche": [
      { de: "Es wird etwas passieren, ich spüre es.", fr: "Quelque chose va se passer, je le sens." },
      { de: "Die Besprechung wird in diesem Raum stattfinden.", fr: "La réunion va se passer dans cette salle." },
      { de: "Ich werde heute auf das Dessert verzichten.", fr: "Je vais me passer de dessert aujourd'hui." }
    ],
    "conditionnel_présent": [
        { de: "Das würde nicht passieren, wenn du vorsichtiger wärst.", fr: "Ça ne se passerait pas si tu étais plus prudent." },
        { de: "Ich könnte auf ein Auto verzichten, wenn ich in der Stadt leben würde.", fr: "Je me passerais de voiture si je vivais en ville." },
        { de: "Die Dinge würden anders laufen, wenn er der Chef wäre.", fr: "Les choses se passeraient différemment s'il était le chef." }
    ],
     "conditionnel_passé": [
        { de: "Der Unfall wäre nicht passiert, wenn er langsamer gefahren wäre.", fr: "L'accident ne se serait pas passé s'il avait conduit moins vite." },
        { de: "Ich wäre lieber ohne deine Hilfe ausgekommen.", fr: "Je me serais bien passé de ton aide." },
        { de: "Alles wäre gut gegangen, wenn du nicht eingegriffen hättest.", fr: "Tout se serait bien passé si tu n'étais pas intervenu." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte nicht, dass so etwas passiert.", fr: "Je ne veux pas que quelque chose comme ça se passe." },
      { de: "Damit alles gut geht, müssen wir alles vorbereiten.", fr: "Pour que tout se passe bien, nous devons tout préparer." },
      { de: "Es ist möglich, dass die Veranstaltung woanders stattfindet.", fr: "Il est possible que l'événement se passe ailleurs." }
    ]
  }
};
