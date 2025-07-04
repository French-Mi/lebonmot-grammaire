import type { Verb } from '@/types/verb-types';

export const adopter: Verb = {
  infinitive: "adopter",
  translation: "adoptieren, annehmen",
  verbGroup: 1,
  indicatif: {
    présent: ["adopte", "adoptes", "adopte", "adoptons", "adoptez", "adoptent"],
    passé_composé: { aux: "avoir", participle: "adopté" },
    imparfait: ["adoptais", "adoptais", "adoptait", "adoptions", "adoptiez", "adoptaient"],
    plus_que_parfait: { aux: "avoir", participle: "adopté" },
    futur_simple: ["adopterai", "adopteras", "adoptera", "adopterons", "adopterez", "adopteront"],
    futur_proche: { aux: "aller", participle: "adopter" }
  },
  subjonctif: {
    présent: ["adopte", "adoptes", "adopte", "adoptions", "adoptiez", "adoptent"]
  },
  conditionnel: {
    présent: ["adopterais", "adopterais", "adopterait", "adopterions", "adopteriez", "adopteraient"],
    passé: { aux: "avoir", participle: "adopté" }
  },
  imperatif: {
    present: ["adopte", "adoptons", "adoptez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich adoptiere eine neue Arbeitsweise.", fr: "J'adopte une nouvelle méthode de travail." },
      { de: "Sie adoptiert einen Hund aus dem Tierheim.", fr: "Elle adopte un chien du refuge." },
      { de: "Wir nehmen eine positive Haltung an.", fr: "Nous adoptons une attitude positive." }
    ],
    "indicatif_passé_composé": [
      { de: "Sie haben ein Kind adoptiert.", fr: "Ils ont adopté un enfant." },
      { de: "Das Parlament hat das Gesetz verabschiedet (angenommen).", fr: "Le parlement a adopté la loi." },
      { de: "Ich habe endlich diesen lässigen Stil angenommen.", fr: "J'ai enfin adopté ce style décontracté." }
    ],
    "indicatif_imparfait": [
        { de: "Damals adoptierte man oft die Bräuche des Landes.", fr: "À cette époque, on adoptait souvent les coutumes du pays." },
        { de: "Ihr nahmt immer eine vorsichtige Haltung an.", fr: "Vous adoptiez toujours une attitude prudente." },
        { de: "Jedes Jahr adoptierten sie eine neue Katze.", fr: "Chaque année, ils adoptaient un nouveau chat." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatten einen Plan angenommen, der allen passte.", fr: "Ils avaient adopté un plan qui convenait à tout le monde." },
        { de: "Ich hatte einen Akzent angenommen, ohne es zu merken.", fr: "J'avais adopté un accent sans m'en rendre compte." },
        { de: "Sie hatte einen Lebensstil angenommen, der nicht zu ihr passte.", fr: "Elle avait adopté un mode de vie qui ne lui correspondait pas." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde einen gesünderen Lebensstil annehmen.", fr: "J'adopterai un mode de vie plus sain." },
      { de: "Die Regierung wird neue Maßnahmen verabschieden.", fr: "Le gouvernement adopfera de nouvelles mesures." },
      { de: "Wirst du diese Lösung annehmen?", fr: "Adopteras-tu cette solution ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden einen neuen Hund adoptieren.", fr: "Nous allons adopter un nouveau chien." },
      { de: "Sie wird einen völlig anderen Look annehmen.", fr: "Elle va adopter un look complètement différent." },
      { de: "Ihr werdet eine neue Strategie annehmen müssen.", fr: "Vous allez devoir adopter une nouvelle stratégie." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen Vorschlag ohne zu zögern annehmen.", fr: "J'adopterais cette proposition sans hésiter." },
        { de: "Würdest du einen anderen Ton anschlagen, wenn ich dich darum bitte?", fr: "Adopterais-tu un ton différent si je te le demandais ?" },
        { de: "Sie würden diesen Hund adoptieren, wenn sie ein Haus hätten.", fr: "Ils adopteraient ce chien s'ils avaient une maison." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte ihre Idee angenommen, wenn sie sie besser präsentiert hätte.", fr: "J'aurais adopté son idée si elle l'avait mieux présentée." },
        { de: "Sie hätten das Kind adoptiert, aber die Prozedur war zu lang.", fr: "Ils auraient adopté l'enfant, mais la procédure était trop longue." },
        { de: "Er hätte einen entspannteren Stil angenommen, aber seine Arbeit erlaubte es nicht.", fr: "Il aurait adopté un style plus décontracté, mais son travail ne le permettait pas." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass wir eine gemeinsame Strategie annehmen.", fr: "Il faut que nous adoptions une stratégie commune." },
      { de: "Ich möchte, dass du eine offenere Haltung annimmst.", fr: "Je veux que tu adoptes une attitude plus ouverte." },
      { de: "Ich bezweifle, dass sie dieses Gesetz annehmen.", fr: "Je doute qu'ils adoptent cette loi." }
    ]
  }
};
