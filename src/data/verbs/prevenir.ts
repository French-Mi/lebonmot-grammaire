import type { Verb } from '@/types/verb-types';

export const prevenir: Verb = {
  infinitive: "prévenir",
  translation: "benachrichtigen / warnen",
  verbGroup: 3,
  indicatif: {
    présent: ["préviens", "préviens", "prévient", "prévenons", "prévenez", "préviennent"],
    passé_composé: { aux: "avoir", participle: "prévenu" },
    imparfait: ["prévenais", "prévenais", "prévenait", "prévenions", "préveniez", "prévenaient"],
    plus_que_parfait: { aux: "avoir", participle: "prévenu" },
    futur_simple: ["préviendrai", "préviendras", "préviendra", "préviendrons", "préviendrez", "préviendront"],
    futur_proche: { aux: "aller", participle: "prévenir" }
  },
  subjonctif: { présent: ["prévienne", "préviennes", "prévienne", "prévenions", "préveniez", "préviennent"] },
  conditionnel: { présent: ["préviendrais", "préviendrais", "préviendrait", "préviendrions", "préviendriez", "préviendraient"], passé: { aux: "avoir", participle: "prévenu" } },
  imperatif: { present: ["préviens", "prévenons", "prévenez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich benachrichtige dich, wenn ich ankomme.", fr: "Je te préviens quand j'arrive." },
      { de: "Er warnt uns vor der Gefahr.", fr: "Il nous prévient du danger." },
      { de: "Wir benachrichtigen unsere Eltern.", fr: "Nous prévenons nos parents." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihn gewarnt.", fr: "Je l'ai prévenu." },
      { de: "Hast du sie benachrichtigt?", fr: "L'as-tu prévenue ?" },
      { de: "Sie haben uns nicht gewarnt.", fr: "Ils ne nous ont pas prévenus." }
    ],
    "indicatif_imparfait": [
        { de: "Er warnte uns immer vor den Risiken.", fr: "Il nous prévenait toujours des risques." },
        { de: "Ich benachrichtigte sie, sobald ich es wusste.", fr: "Je la prévenais dès que je le savais." },
        { de: "Wir warnten die anderen.", fr: "Nous prévenions les autres." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte sie gewarnt, aber sie hat nicht zugehört.", fr: "Je l'avais prévenue, mais elle n'a pas écouté." },
        { de: "Man hatte uns vor der Verzögerung gewarnt.", fr: "On nous avait prévenus du retard." },
        { de: "Er hatte seine Familie nicht benachrichtigt.", fr: "Il n'avait pas prévenu sa famille." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich benachrichtigen.", fr: "Je te préviendrai." },
      { de: "Sie wird uns vor ihrer Ankunft warnen.", fr: "Elle nous préviendra de son arrivée." },
      { de: "Wir werden die Behörden benachrichtigen.", fr: "Nous préviendrons les autorités." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ihn sofort benachrichtigen.", fr: "Je vais le prévenir tout de suite." },
      { de: "Sie wird ihre Freunde warnen.", fr: "Elle va prévenir ses amis." },
      { de: "Wir werden die Polizei rufen (benachrichtigen).", fr: "Nous allons prévenir la police." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich warnen, wenn es ein Problem gäbe.", fr: "Je te préviendrais s'il y avait un problème." },
        { de: "Du solltest ihn warnen.", fr: "Tu devrais le prévenir." },
        { de: "Er würde seine Eltern benachrichtigen.", fr: "Il préviendrait ses parents." }
    ],
    "subjonctif_présent": [
      { de: "Es ist besser, dass du ihn warnst.", fr: "Il vaut mieux que tu le préviennes." },
      { de: "Ich möchte, dass sie uns benachrichtigen.", fr: "Je veux qu'ils nous préviennent." },
      { de: "Damit wir ihn warnen können, müssen wir ihn finden.", fr: "Pour que nous le prévenions, il faut le trouver." }
    ]
  }
};
