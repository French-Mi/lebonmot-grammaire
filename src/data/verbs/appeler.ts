import type { Verb } from '@/types/verb-types';

export const appeler: Verb = {
  infinitive: "appeler",
  translation: "rufen / anrufen / nennen",
  verbGroup: 1,
  indicatif: {
    présent: ["appelle", "appelles", "appelle", "appelons", "appelez", "appellent"],
    passé_composé: { aux: "avoir", participle: "appelé" },
    imparfait: ["appelais", "appelais", "appelait", "appelions", "appeliez", "appelaient"],
    plus_que_parfait: { aux: "avoir", participle: "appelé" },
    futur_simple: ["appellerai", "appelleras", "appellera", "appellerons", "appellerez", "appelleront"],
    futur_proche: { aux: "aller", participle: "appeler" }
  },
  subjonctif: { présent: ["appelle", "appelles", "appelle", "appelions", "appeliez", "appellent"] },
  conditionnel: { présent: ["appellerais", "appellerais", "appellerait", "appellerions", "appelleriez", "appelleraient"], passé: { aux: "avoir", participle: "appelé" } },
  imperatif: { present: ["appelle", "appelons", "appelez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich rufe meinen Freund an.", fr: "J'appelle mon ami." },
      { de: "Wie heißt du?", fr: "Comment t'appelles-tu ?" },
      { de: "Wir rufen ein Taxi.", fr: "Nous appelons un taxi." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe dich gestern angerufen.", fr: "Je t'ai appelé hier." },
      { de: "Sie hat die Polizei gerufen.", fr: "Elle a appelé la police." },
      { de: "Habt ihr eure Eltern angerufen?", fr: "Avez-vous appelé vos parents ?" }
    ],
    "indicatif_imparfait": [
        { de: "Meine Mutter rief mich immer zum Abendessen.", fr: "Ma mère m'appelait always pour le dîner." },
        { de: "Die Kinder riefen im Hof.", fr: "Les enfants appelaient dans la cour." },
        { de: "Man nannte ihn den Weisen.", fr: "On l'appelait le sage." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte dich mehrmals angerufen.", fr: "Je t'avais appelé plusieurs fois." },
        { de: "Sie hatte bereits ein Taxi gerufen.", fr: "Elle avait déjà appelé un taxi." },
        { de: "Wir hatten die Katze 'Mimi' genannt.", fr: "Nous avions appelé le chat 'Mimi'." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich später anrufen.", fr: "Je t'appellerai plus tard." },
      { de: "Du wirst ihn beim Namen rufen.", fr: "Tu l'appelleras par son nom." },
      { de: "Sie werden ihn 'Held' nennen.", fr: "Ils l'appelleront 'héros'." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde meine Eltern anrufen.", fr: "Je vais appeler mes parents." },
      { de: "Sie wird den Hund rufen.", fr: "Elle va appeler le chien." },
      { de: "Wir werden den Service anrufen.", fr: "Nous allons appeler le service." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn anrufen, wenn ich seine Nummer hätte.", fr: "Je l'appellerais si j'avais son numéro." },
        { de: "An deiner Stelle würde ich Hilfe rufen.", fr: "À ta place, j'appellerais à l'aide." },
        { de: "Würden Sie bitte den Arzt rufen?", fr: "Appelleriez-vous le médecin, s'il vous plaît ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du ihn anrufst.", fr: "Il est important que tu l'appelles." },
      { de: "Ich möchte, dass wir ihn beim Vornamen nennen.", fr: "Je veux que nous l'appelions par son prénom." },
      { de: "Er muss seinen Mut zusammenrufen.", fr: "Il faut qu'il appelle son courage." }
    ]
  }
};
