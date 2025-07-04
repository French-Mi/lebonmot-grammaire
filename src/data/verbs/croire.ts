import type { Verb } from '@/types/verb-types';

export const croire: Verb = {
  infinitive: "croire",
  translation: "glauben",
  verbGroup: 3,
  indicatif: {
    présent: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
    passé_composé: { aux: "avoir", participle: "cru" },
    imparfait: ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
    plus_que_parfait: { aux: "avoir", participle: "cru" },
    futur_simple: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
    futur_proche: { aux: "aller", participle: "croire" }
  },
  subjonctif: {
    présent: ["croie", "croies", "croie", "croyions", "croyiez", "croient"]
  },
  conditionnel: {
    présent: ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"],
    passé: { aux: "avoir", participle: "cru" }
  },
  imperatif: {
    present: ["crois", "croyons", "croyez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich glaube dir.", fr: "Je te crois." },
      { de: "Er glaubt an Geister.", fr: "Il croit aux fantômes." },
      { de: "Wir glauben, was Sie sagen.", fr: "Nous croyons ce que vous dites." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe seiner Geschichte geglaubt.", fr: "J'ai cru son histoire." },
      { de: "Sie hat nie daran geglaubt.", fr: "Elle n'y a jamais cru." },
      { de: "Sie haben den Versprechungen geglaubt.", fr: "Ils ont cru aux promesses." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind glaubte ich an den Weihnachtsmann.", fr: "Quand j'étais enfant, je croyais au Père Noël." },
        { de: "Wir glaubten, dass alles möglich sei.", fr: "Nous croyions que tout était possible." },
        { de: "Damals glaubtest du jedem.", fr: "À l'époque, tu croyais tout le monde." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte geglaubt, du wärst schon gegangen.", fr: "J'avais cru que tu étais déjà parti." },
        { de: "Sie hatte geglaubt, eine gute Tat zu vollbringen.", fr: "Elle avait cru bien faire." },
        { de: "Wir hatten geglaubt, die Antwort zu kennen.", fr: "Nous avions cru connaître la réponse." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst mir nicht glauben.", fr: "Tu ne me croiras pas." },
      { de: "Man wird uns glauben, wenn wir Beweise haben.", fr: "On nous croira quand nous aurons des preuves." },
      { de: "Sie werden ihren Augen nicht trauen.", fr: "Ils n'en croiront pas leurs yeux." }
    ],
    "indicatif_futur_proche": [
      { de: "Er wird dir gleich glauben.", fr: "Il va te croire tout de suite." },
      { de: "Wir werden sehen, was sie glauben werden.", fr: "Nous allons voir ce qu'ils vont croire." },
      { de: "Ich werde niemals so etwas glauben.", fr: "Je ne vais jamais croire une chose pareille." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dir glauben, wenn du Beweise hättest.", fr: "Je te croirais si tu avais des preuves." },
        { de: "Würden Sie das glauben?", fr: "Le croiriez-vous ?" },
        { de: "Er würde es nicht glauben, selbst wenn er es sähe.", fr: "Il ne le croirait pas même s'il le voyait." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du mir glaubst.", fr: "Je veux que tu me croies." },
      { de: "Es ist wichtig, dass wir an unsere Träume glauben.", fr: "Il est important que nous croyions en nos rêves." },
      { de: "Ich bezweifle, dass er die Wahrheit glaubt.", fr: "Je doute qu'il croie la vérité." }
    ]
  }
};
