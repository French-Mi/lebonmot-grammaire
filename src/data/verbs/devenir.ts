import type { Verb } from '@/types/verb-types';

export const devenir: Verb = {
  infinitive: "devenir",
  translation: "werden",
  verbGroup: 3,
  indicatif: {
    présent: ["deviens", "deviens", "devient", "devenons", "devenez", "deviennent"],
    passé_composé: { aux: "être", participle: "devenu" },
    imparfait: ["devenais", "devenais", "devenait", "devenions", "deveniez", "devenaient"],
    plus_que_parfait: { aux: "être", participle: "devenu" },
    futur_simple: ["deviendrai", "deviendras", "deviendra", "deviendrons", "deviendrez", "deviendront"],
    futur_proche: { aux: "aller", participle: "devenir" }
  },
  subjonctif: {
    présent: ["devienne", "deviennes", "devienne", "devenions", "deveniez", "deviennent"]
  },
  conditionnel: {
    présent: ["deviendrais", "deviendrais", "deviendrait", "deviendrions", "deviendriez", "deviendraient"],
    passé: { aux: "être", participle: "devenu" }
  },
  imperatif: {
    present: ["deviens", "devenons", "devenez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich werde verrückt!", fr: "Je deviens fou !" },
      { de: "Er wird ein ausgezeichneter Arzt.", fr: "Il devient un excellent médecin." },
      { de: "Die Tage werden kürzer.", fr: "Les jours deviennent plus courts." }
    ],
    "indicatif_passé_composé": [
      { de: "Sie ist eine berühmte Sängerin geworden.", fr: "Elle est devenue une chanteuse célèbre." },
      { de: "Wir sind gute Freunde geworden.", fr: "Nous sommes devenus de bons amis." },
      { de: "Bist du Vegetarier geworden?", fr: "Tu es devenu végétarien ?" }
    ],
    "indicatif_imparfait": [
        { de: "Er wurde langsam ungeduldig.", fr: "Il devenait lentement impatient." },
        { de: "Wir wurden uns der Gefahr bewusst.", fr: "Nous devenions conscients du danger." },
        { de: "Ihre Wangen wurden rot.", fr: "Ses joues devenaient rouges." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie war eine Expertin auf ihrem Gebiet geworden.", fr: "Elle était devenue une experte dans son domaine." },
        { de: "Nach monatelangem Training waren sie unschlagbar geworden.", fr: "Après des mois d'entraînement, ils étaient devenus imbattables." },
        { de: "Er war durch diese Erfahrung ein anderer Mensch geworden.", fr: "Il était devenu un autre homme après cette expérience." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde eines Tages reich werden.", fr: "Je deviendrai riche un jour." },
      { de: "Was wird aus uns werden?", fr: "Qu'est-ce que nous deviendrons ?" },
      { de: "Das wird kompliziert werden.", fr: "Cela deviendra compliqué." }
    ],
    "indicatif_futur_proche": [
      { de: "Das wird ein Problem werden.", fr: "Ça va devenir un problème." },
      { de: "Du wirst sehr schnell rot werden.", fr: "Tu vas devenir tout rouge." },
      { de: "Sie werden bald Eltern.", fr: "Ils vont bientôt devenir parents." }
    ],
    "conditionnel_présent": [
        { de: "Ohne dich würde ich verrückt werden.", fr: "Sans toi, je deviendrais fou." },
        { de: "Das könnte ein Klassiker werden.", fr: "Cela pourrait devenir un classique." },
        { de: "Wir würden die besten der Welt werden.", fr: "Nous deviendrions les meilleurs du monde." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass er traurig wird.", fr: "Je ne veux pas qu'il devienne triste." },
      { de: "Es ist möglich, dass sie die neue Direktorin wird.", fr: "Il est possible qu'elle devienne la nouvelle directrice." },
      { de: "Es ist notwendig, dass ihr autonomer werdet.", fr: "Il faut que vous deveniez plus autonomes." }
    ]
  }
};
