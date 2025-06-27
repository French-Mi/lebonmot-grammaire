// src/data/verbs/aller.ts
import type { Verb } from '@/types/verb-types';

export const aller: Verb = {
  infinitive: "aller",
  translation: "gehen",
  verbGroup: 0,
  indicatif: {
    présent: ["vais", "vas", "va", "allons", "allez", "vont"],
    passé_composé: { aux: "être", participle: "allé" },
    imparfait: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
    plus_que_parfait: { aux: "être", participle: "allé" },
    futur_simple: ["irai", "iras", "ira", "irons", "irez", "iront"],
    futur_proche: { aux: "aller", participle: "aller" }
  },
  subjonctif: { présent: ["aille", "ailles", "aille", "allions", "alliez", "aillent"] },
  conditionnel: { présent: ["irais", "irais", "irait", "irions", "iriez", "iraient"], passé: { aux: "être", participle: "allé" } },
  imperatif: { present: ["va", "allons", "allez"] },
  examples: {
    "indicatif_présent": [
        { de: "Ich gehe zum Supermarkt.", fr: "Je vais au supermarché." },
        { de: "Sie fährt mit dem Bus zur Schule.", fr: "Elle va à l'école en bus." },
        { de: "Wohin geht ihr?", fr: "Où allez-vous ?" }
    ],
    "indicatif_passé_composé": [
        { de: "Ich bin letztes Jahr nach Frankreich gefahren.", fr: "Je suis allé(e) en France l'année dernière." },
        { de: "Sie ist gestern Abend ins Kino gegangen.", fr: "Elle est allée au cinéma hier soir." },
        { de: "Sie sind spazieren gegangen.", fr: "Ils sont allés faire une promenade." }
    ],
    "indicatif_imparfait": [
        { de: "Wir gingen oft in den Park.", fr: "Nous allions souvent au parc." },
        { de: "Du bist jeden Samstag ins Schwimmbad gegangen.", fr: "Tu allais à la piscine tous les samedis." },
        { de: "Er besuchte seine Großeltern.", fr: "Il allait voir ses grands-parents." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war bereits gegangen, als du ankamst.", fr: "J'étais déjà allé(e) quand tu es arrivé(e)." },
        { de: "Sie war schon ins Bett gegangen.", fr: "Elle était déjà allée au lit." },
        { de: "Wir waren letztes Jahr dorthin gefahren.", fr: "Nous étions allés là-bas l'année dernière." }
    ],
    "indicatif_futur_simple": [
        { de: "Morgen werde ich in die Bibliothek gehen.", fr: "Demain, j'irai à la bibliothèque." },
        { de: "Du wirst ihn nach der Arbeit besuchen.", fr: "Tu iras le voir après le travail." },
        { de: "Wir werden in den Ferien nach Italien fahren.", fr: "Nous irons en Italie pour les vacances." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde zum Arzt gehen.", fr: "Je vais aller chez le médecin." },
      { de: "Sie wird einkaufen gehen.", fr: "Elle va aller faire les courses." },
      { de: "Wir werden ins Restaurant gehen.", fr: "Nous allons aller au restaurant." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich Zeit hätte, würde ich ins Museum gehen.", fr: "Si j'avais le temps, j'irais au musée." },
        { de: "Sie würde gerne shoppen gehen.", fr: "Elle irait bien faire du shopping." },
        { de: "Würdet ihr mit uns gehen?", fr: "Iriez-vous avec nous ?" }
    ],
    "subjonctif_présent": [
      { de: "Ich muss einkaufen gehen.", fr: "Il faut que j'aille faire les courses." },
      { de: "Ich will, dass es dir besser geht.", fr: "Je veux que tu ailles mieux." },
      { de: "Es ist Zeit, dass wir nach Hause gehen.", fr: "Il est temps que nous allions à la maison." }
    ]
  }
};
