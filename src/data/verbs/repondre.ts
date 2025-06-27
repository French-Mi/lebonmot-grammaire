import type { Verb } from '@/types/verb-types';

export const repondre: Verb = {
  infinitive: "répondre",
  translation: "antworten",
  verbGroup: 3,
  indicatif: {
    présent: ["réponds", "réponds", "répond", "répondons", "répondez", "répondent"],
    passé_composé: { aux: "avoir", participle: "répondu" },
    imparfait: ["répondais", "répondais", "répondait", "répondions", "répondiez", "répondaient"],
    plus_que_parfait: { aux: "avoir", participle: "répondu" },
    futur_simple: ["répondrai", "répondras", "répondra", "répondrons", "répondrez", "répondront"],
    futur_proche: { aux: "aller", participle: "répondre" }
  },
  subjonctif: { présent: ["réponde", "répondes", "réponde", "répondions", "répondiez", "répondent"] },
  conditionnel: { présent: ["répondrais", "répondrais", "répondrait", "répondrions", "répondriez", "répondraient"], passé: { aux: "avoir", participle: "répondu" } },
  imperatif: { present: ["réponds", "répondons", "répondez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich antworte auf die E-Mail.", fr: "Je réponds à l'e-mail." },
      { de: "Antworte mir!", fr: "Réponds-moi !" },
      { de: "Wir antworten auf die Frage.", fr: "Nous répondons à la question." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe noch nicht geantwortet.", fr: "Je n'ai pas encore répondu." },
      { de: "Hast du auf seine Nachricht geantwortet?", fr: "As-tu répondu à son message ?" },
      { de: "Sie hat auf die Einladung geantwortet.", fr: "Elle a répondu à l'invitation." }
    ],
    "indicatif_imparfait": [
        { de: "Er antwortete immer schnell.", fr: "Il répondait toujours rapidement." },
        { de: "Ich wartete, während sie antwortete.", fr: "J'attendais pendant qu'elle répondait." },
        { de: "Ihr habt nie auf meine Briefe geantwortet.", fr: "Vous ne répondiez jamais à mes lettres." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte bereits auf die E-Mail geantwortet.", fr: "J'avais déjà répondu à l'e-mail." },
        { de: "Sie hatte auf alle Fragen geantwortet.", fr: "Elle avait répondu à toutes les questions." },
        { de: "Hatten Sie auf den Brief geantwortet?", fr: "Aviez-vous répondu à la lettre ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen antworten.", fr: "Je répondrai demain." },
      { de: "Du wirst auf seine Frage antworten.", fr: "Tu répondras à sa question." },
      { de: "Wir werden so schnell wie möglich antworten.", fr: "Nous répondrons dès que possible." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir sofort antworten.", fr: "Je vais te répondre tout de suite." },
      { de: "Sie wird auf den Kommentar antworten.", fr: "Elle va répondre au commentaire." },
      { de: "Wir werden auf alle E-Mails antworten.", fr: "Nous allons répondre à tous les e-mails." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde antworten, wenn ich die Antwort wüsste.", fr: "Je répondrais si je savais la réponse." },
        { de: "Was würdest du antworten?", fr: "Que répondrais-tu ?" },
        { de: "Er würde höflich antworten.", fr: "Il répondrait poliment." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du antwortest.", fr: "Il est important que tu répondes." },
      { de: "Ich warte, bis er antwortet.", fr: "J'attends qu'il réponde." },
      { de: "Damit wir antworten können, brauchen wir Informationen.", fr: "Pour que nous répondions, il nous faut des informations." }
    ]
  }
};
