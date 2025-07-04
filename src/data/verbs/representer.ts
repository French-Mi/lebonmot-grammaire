import type { Verb } from '@/types/verb-types';

export const representer: Verb = {
  infinitive: "représenter",
  translation: "darstellen, repräsentieren, vertreten",
  verbGroup: 1,
  indicatif: {
    présent: ["représente", "représentes", "représente", "représentons", "représentez", "représentent"],
    passé_composé: { aux: "avoir", participle: "représenté" },
    imparfait: ["représentais", "représentais", "représentait", "représentions", "représentiez", "représentaient"],
    plus_que_parfait: { aux: "avoir", participle: "représenté" },
    futur_simple: ["représenterai", "représenteras", "représentera", "représenterons", "représenterez", "représenteront"],
    futur_proche: { aux: "aller", participle: "représenter" }
  },
  subjonctif: {
    présent: ["représente", "représentes", "représente", "représentions", "représentiez", "représentent"]
  },
  conditionnel: {
    présent: ["représenterais", "représenterais", "représenterait", "représenterions", "représenteriez", "représenteraient"],
    passé: { aux: "avoir", participle: "représenté" }
  },
  imperatif: {
    present: ["représente", "représentons", "représentez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich vertrete mein Unternehmen auf der Konferenz.", fr: "Je représente mon entreprise à la conférence." },
      { de: "Dieses Gemälde stellt eine Landschaft dar.", fr: "Ce tableau représente un paysage." },
      { de: "Was stellen diese Symbole dar?", fr: "Que représentent ces symboles ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat unser Land bei den Olympischen Spielen vertreten.", fr: "Il a représenté notre pays aux Jeux Olympiques." },
      { de: "Diese Karte stellte für ihn eine große Herausforderung dar.", fr: "Cette carte a représenté un grand défi pour lui." },
      { de: "Wir haben die Mehrheit der Mitarbeiter vertreten.", fr: "Nous avons représenté la majorité des employés." }
    ],
    "indicatif_imparfait": [
        { de: "Er vertrat seine Wähler im Parlament.", fr: "Il représentait ses électeurs au parlement." },
        { de: "Diese Skulptur stellte eine Göttin dar.", fr: "Cette sculpture représentait une déesse." },
        { de: "Ihr habt immer die Interessen der Gruppe vertreten.", fr: "Vous représentiez toujours les intérêts du groupe." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Anwalt hatte seinen Klienten vor Gericht vertreten.", fr: "L'avocat avait représenté son client au tribunal." },
        { de: "Dieses Ereignis hatte einen Wendepunkt in unserer Geschichte dargestellt.", fr: "Cet événement avait représenté un tournant dans notre histoire." },
        { de: "Ich hatte mir vorgestellt (dargestellt), dass es einfacher sein würde.", fr: "Je m'étais représenté que ce serait plus facile." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Firma bei dem Treffen vertreten.", fr: "Je représenterai l'entreprise à la réunion." },
      { de: "Wer wird unsere Klasse vertreten?", fr: "Qui représentera notre classe ?" },
      { de: "Das wird kein Problem darstellen.", fr: "Cela ne représentera pas un problème." }
    ],
    "indicatif_futur_proche": [
      { de: "Sie wird unser Team vertreten.", fr: "Elle va représenter notre équipe." },
      { de: "Diese Investition wird ein erhebliches Risiko darstellen.", fr: "Cet investissement va représenter un risque considérable." },
      { de: "Wir werden die neue Generation von Künstlern vertreten.", fr: "Nous allons représenter la nouvelle génération d'artistes." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde unsere Firma gerne vertreten.", fr: "J'aimerais représenter notre société." },
        { de: "Er würde den idealen Kandidaten darstellen.", fr: "Il représenterait le candidat idéal." },
        { de: "Das würde eine große Chance für uns darstellen.", fr: "Cela représenterait une grande opportunité pour nous." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte unser Land mit Stolz vertreten.", fr: "J'aurais représenté notre pays avec fierté." },
        { de: "Das hätte eine große Gefahr dargestellt.", fr: "Cela aurait représenté un grand danger." },
        { de: "Sie hätten die Wähler besser vertreten können.", fr: "Ils auraient pu mieux représenter les électeurs." }
    ],
    "subjonctif_présent": [
      { de: "Es ist eine Ehre, dass ich mein Land vertrete.", fr: "C'est un honneur que je représente mon pays." },
      { de: "Der Kunde verlangt, dass ein Anwalt ihn vertritt.", fr: "Le client exige qu'un avocat le représente." },
      { de: "Damit wir die Firma vertreten, benötigen wir eine Vollmacht.", fr: "Pour que nous représentions l'entreprise, il nous faut une procuration." }
    ]
  }
};
