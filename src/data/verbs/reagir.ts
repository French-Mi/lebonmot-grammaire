import type { Verb } from '@/types/verb-types';

export const reagir: Verb = {
  infinitive: "réagir",
  translation: "reagieren",
  verbGroup: 2,
  indicatif: {
    présent: ["réagis", "réagis", "réagit", "réagissons", "réagissez", "réagissent"],
    passé_composé: { aux: "avoir", participle: "réagi" },
    imparfait: ["réagissais", "réagissais", "réagissait", "réagissions", "réagissiez", "réagissaient"],
    plus_que_parfait: { aux: "avoir", participle: "réagi" },
    futur_simple: ["réagirai", "réagiras", "réagira", "réagirons", "réagirez", "réagiront"],
    futur_proche: { aux: "aller", participle: "réagir" }
  },
  subjonctif: { présent: ["réagisse", "réagisses", "réagisse", "réagissions", "réagissiez", "réagissent"] },
  conditionnel: { présent: ["réagirais", "réagirais", "réagirait", "réagirions", "réagiriez", "réagiraient"], passé: { aux: "avoir", participle: "réagi" } },
  imperatif: { present: ["réagis", "réagissons", "réagissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich reagiere auf seine Nachricht.", fr: "Je réagis à son message." },
      { de: "Wie reagierst du?", fr: "Comment tu réagis ?" },
      { de: "Wir reagieren auf die Situation.", fr: "Nous réagissons à la situation." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe sofort reagiert.", fr: "J'ai réagi immédiatement." },
      { de: "Sie hat gut auf die Neuigkeit reagiert.", fr: "Elle a bien réagi à la nouvelle." },
      { de: "Sie haben nicht wie erwartet reagiert.", fr: "Ils n'ont pas réagi comme prévu." }
    ],
    "indicatif_imparfait": [
        { de: "Er reagierte immer sehr emotional.", fr: "Il réagissait toujours de manière très émotive." },
        { de: "Damals reagierten wir nicht so schnell.", fr: "À l'époque, nous ne réagissions pas si vite." },
        { de: "Du hast immer überreagiert.", fr: "Tu réagissais toujours de manière excessive." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte nicht schnell genug reagiert.", fr: "Je n'avais pas réagi assez vite." },
        { de: "Sie hatte auf die Provokation nicht reagiert.", fr: "Elle n'avait pas réagi à la provocation." },
        { de: "Wir hatten reagiert, bevor es zu spät war.", fr: "Nous avions réagi avant qu'il ne soit trop tard." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde ruhig reagieren.", fr: "Je réagirai calmement." },
      { de: "Wie wirst du reagieren?", fr: "Comment réagiras-tu ?" },
      { de: "Wir werden auf ihre Anfrage reagieren.", fr: "Nous réagirons à leur demande." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde sofort reagieren.", fr: "Je vais réagir tout de suite." },
      { de: "Sie wird schlecht reagieren.", fr: "Elle va mal réagir." },
      { de: "Wir werden auf diese Bedrohung reagieren.", fr: "Nous allons réagir à cette menace." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde anders reagieren.", fr: "Je réagirais différemment." },
        { de: "Er würde nicht reagieren.", fr: "Il ne réagirait pas." },
        { de: "Wir würden positiv reagieren.", fr: "Nous réagirions positivement." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du schnell reagierst.", fr: "Il faut que tu réagisses vite." },
      { de: "Ich möchte nicht, dass sie überreagiert.", fr: "Je ne veux pas qu'elle réagisse de manière excessive." },
      { de: "Warte, bis wir reagieren.", fr: "Attends que nous réagissions." }
    ]
  }
};
