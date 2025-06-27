import type { Verb } from '@/types/verb-types';

export const rappeler: Verb = {
  infinitive: "rappeler",
  translation: "erinnern / zurückrufen",
  verbGroup: 1,
  indicatif: {
    présent: ["rappelle", "rappelles", "rappelle", "rappelons", "rappelez", "rappellent"],
    passé_composé: { aux: "avoir", participle: "rappelé" },
    imparfait: ["rappelais", "rappelais", "rappelait", "rappelions", "rappeliez", "rappelaient"],
    plus_que_parfait: { aux: "avoir", participle: "rappelé" },
    futur_simple: ["rappellerai", "rappelleras", "rappellera", "rappellerons", "rappellerez", "rappelleront"],
    futur_proche: { aux: "aller", participle: "rappeler" }
  },
  subjonctif: { présent: ["rappelle", "rappelles", "rappelle", "rappelions", "rappelez", "rappellent"] },
  conditionnel: { présent: ["rappellerais", "rappellerais", "rappellerait", "rappellerions", "rappelleriez", "rappelleraient"], passé: { aux: "avoir", participle: "rappelé" } },
  imperatif: { present: ["rappelle", "rappelons", "rappelez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich erinnere mich an seinen Namen.", fr: "Je me rappelle son nom." },
      { de: "Kannst du mich später zurückrufen?", fr: "Tu peux me rappeler plus tard ?" },
      { de: "Das erinnert mich an etwas.", fr: "Cela me rappelle quelque chose." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihn zurückgerufen, aber er hat nicht geantwortet.", fr: "Je l'ai rappelé, mais il n'a pas répondu." },
      { de: "Sie hat ihn an den Termin erinnert.", fr: "Elle lui a rappelé le rendez-vous." },
      { de: "Hast du dich an seinen Geburtstag erinnert?", fr: "T'es-tu rappelé son anniversaire ?" }
    ],
    "indicatif_imparfait": [
        { de: "Das erinnerte mich an meine Kindheit.", fr: "Cela me rappelait mon enfance." },
        { de: "Er rief seine Mutter jeden Sonntag zurück.", fr: "Il rappelait sa mère tous les dimanches." },
        { de: "Wir erinnerten uns oft an die guten alten Zeiten.", fr: "Nous nous rappelions souvent le bon vieux temps." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihn bereits an das Treffen erinnert.", fr: "Je lui avais déjà rappelé la réunion." },
        { de: "Sie hatte sich nicht an seinen Namen erinnert.", fr: "Elle ne s'était pas rappelée son nom." },
        { de: "Wir hatten ihn zurückgerufen, aber er war nicht da.", fr: "Nous l'avions rappelé, mais il n'était pas là." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich morgen zurückrufen.", fr: "Je te rappellerai demain." },
      { de: "Das wird sie an ihre Kindheit erinnern.", fr: "Cela lui rappellera son enfance." },
      { de: "Wir werden sie an ihr Versprechen erinnern.", fr: "Nous leur rappellerons leur promesse." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ihn sofort zurückrufen.", fr: "Je vais le rappeler tout de suite." },
      { de: "Wirst du ihn an den Termin erinnern?", fr: "Tu vas lui rappeler le rendez-vous ?" },
      { de: "Wir werden ihn später zurückrufen.", fr: "Nous allons le rappeler plus tard." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich daran erinnern, wenn du es vergisst.", fr: "Je te le rappellerais si tu oubliais." },
        { de: "Er würde seine Worte zurückrufen, wenn er könnte.", fr: "Il rappellerait ses paroles s'il le pouvait." },
        { de: "Das würde unangenehme Erinnerungen wecken.", fr: "Cela rappellerait de mauvais souvenirs." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du ihn daran erinnerst.", fr: "Il est important que tu le lui rappelles." },
      { de: "Ich möchte, dass er mich zurückruft.", fr: "Je veux qu'il me rappelle." },
      { de: "Bevor du gehst, ist es nötig, dass du ihn erinnerst.", fr: "Avant que tu partes, il faut que tu le rappelles." }
    ]
  }
};
