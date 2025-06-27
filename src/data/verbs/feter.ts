import type { Verb } from '@/types/verb-types';

export const feter: Verb = {
  infinitive: "fêter",
  translation: "feiern",
  verbGroup: 1,
  indicatif: {
    présent: ["fête", "fêtes", "fête", "fêtons", "fêtez", "fêtent"],
    passé_composé: { aux: "avoir", participle: "fêté" },
    imparfait: ["fêtais", "fêtais", "fêtait", "fêtions", "fêtiez", "fêtaient"],
    plus_que_parfait: { aux: "avoir", participle: "fêté" },
    futur_simple: ["fêterai", "fêteras", "fêtera", "fêterons", "fêterez", "fêteront"],
    futur_proche: { aux: "aller", participle: "fêter" }
  },
  subjonctif: { présent: ["fête", "fêtes", "fête", "fêtions", "fêtiez", "fêtent"] },
  conditionnel: { présent: ["fêterais", "fêterais", "fêterait", "fêterions", "fêteriez", "fêteraient"], passé: { aux: "avoir", participle: "fêté" } },
  imperatif: { present: ["fête", "fêtons", "fêtez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich feiere meinen Geburtstag.", fr: "Je fête mon anniversaire." },
      { de: "Wir feiern heute Abend den Sieg.", fr: "Nous fêtons la victoire ce soir." },
      { de: "Feiern Sie Weihnachten mit Ihrer Familie?", fr: "Vous fêtez Noël en famille ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meinen Erfolg gefeiert.", fr: "J'ai fêté ma réussite." },
      { de: "Sie hat ihren neuen Job gefeiert.", fr: "Elle a fêté son nouveau travail." },
      { de: "Wir haben das neue Jahr zusammen gefeiert.", fr: "Nous avons fêté le Nouvel An ensemble." }
    ],
    "indicatif_imparfait": [
        { de: "Jedes Jahr feierten wir den Sommeranfang.", fr: "Chaque année, nous fêtions le début de l'été." },
        { de: "Er feierte seine Erfolge immer bescheiden.", fr: "Il fêtait toujours ses succès modestement." },
        { de: "Damals feiertet ihr die ganze Nacht.", fr: "À l'époque, vous fêtiez toute la nuit." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte ihren Abschied gefeiert, bevor sie ging.", fr: "Elle avait fêté son départ avant de partir." },
        { de: "Wir hatten das Ende der Prüfungen gefeiert.", fr: "Nous avions fêté la fin des examens." },
        { de: "Ich hatte meinen Geburtstag noch nicht gefeiert.", fr: "Je n'avais pas encore fêté mon anniversaire." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde meinen 30. Geburtstag groß feiern.", fr: "Je fêterai mes 30 ans en grand." },
      { de: "Wirst du deinen Abschluss feiern?", fr: "Tu fêteras ton diplôme ?" },
      { de: "Wir werden das Ereignis gebührend feiern.", fr: "Nous fêterons l'événement comme il se doit." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde das heute Abend feiern.", fr: "Je vais fêter ça ce soir." },
      { de: "Sie wird ihren Erfolg feiern.", fr: "Elle va fêter sa réussite." },
      { de: "Wir werden das mit Freunden feiern.", fr: "Nous allons fêter ça entre amis." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es gerne mit dir feiern.", fr: "J'aimerais fêter cela avec toi." },
        { de: "Er würde seinen Geburtstag lieber im kleinen Kreis feiern.", fr: "Il fêterait son anniversaire en petit comité." },
        { de: "Wir würden jeden kleinen Sieg feiern.", fr: "Nous fêterions chaque petite victoire." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass wir seinen Erfolg feiern.", fr: "Il est important que nous fêtions sa réussite." },
      { de: "Ich möchte, dass du mit uns feierst.", fr: "Je veux que tu fêtes avec nous." },
      { de: "Es ist eine Schande, dass er nicht feiern kann.", fr: "C'est dommage qu'il ne puisse pas fêter." }
    ]
  }
};
