import type { Verb } from '@/types/verb-types';

export const seRappeler: Verb = {
  infinitive: 'se rappeler',
  translation: 'sich erinnern',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["rappelle", "rappelles", "rappelle", "rappelons", "rappelez", "rappellent"],
    passé_composé: { aux: 'être', participle: 'rappelé' },
    imparfait: ["rappelais", "rappelais", "rappelait", "rappelions", "rappeliez", "rappelaient"],
    plus_que_parfait: { aux: 'être', participle: 'rappelé' },
    futur_simple: ["rappellerai", "rappelleras", "rappellera", "rappellerons", "rappellerez", "rappelleront"],
    futur_proche: { aux: "aller", participle: "se rappeler" }
  },
  subjonctif: { présent: ["rappelle", "rappelles", "rappelle", "rappelions", "rappeliez", "rappellent"] },
  conditionnel: {
    présent: ["rappellerais", "rappellerais", "rappellerait", "rappellerions", "rappelleriez", "rappelleraient"],
    passé: { aux: 'être', participle: 'rappelé' }
  },
  imperatif: { present: ["rappelle-toi", "rappelons-nous", "rappelez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich erinnere mich an diesen Film.", fr: "Je me rappelle ce film." },
      { de: "Erinnerst du dich an seinen Namen?", fr: "Tu te rappelles son nom ?" },
      { de: "Wir erinnern uns an unsere Kindheit.", fr: "Nous nous rappelons notre enfance." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich an meinen Termin erinnert.", fr: "Je me suis rappelé mon rendez-vous." },
      { de: "Sie hat sich an die Adresse erinnert.", fr: "Elle s'est rappelé l'adresse." },
      { de: "Wir haben uns an die guten Zeiten erinnert.", fr: "Nous nous sommes rappelé les bons moments." }
    ],
    "indicatif_imparfait": [
        { de: "Ich erinnerte mich oft an die Geschichten meiner Großmutter.", fr: "Je me rappelais souvent les histoires de ma grand-mère." },
        { de: "Wir erinnerten uns an jeden Sommer, den wir dort verbrachten.", fr: "Nous nous rappelions chaque été passé là-bas." },
        { de: "Erinnerte er sich an die Details?", fr: "Se rappelait-il les détails ?" }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich an die Antwort erinnert, aber es war zu spät.", fr: "Je m'étais rappelé la réponse, mais c'était trop tard." },
        { de: "Sie hatte sich an sein Gesicht erinnert.", fr: "Elle s'était rappelé son visage." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich immer an diesen Tag erinnern.", fr: "Je me rappellerai toujours ce jour." },
      { de: "Wirst du dich an dein Versprechen erinnern?", fr: "Te rappelleras-tu ta promesse ?" },
      { de: "Sie werden sich an diese Lektion erinnern.", fr: "Ils se rappelleront cette leçon." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich gleich an die Details erinnern.", fr: "Je vais me rappeler les détails." },
      { de: "Wir werden uns an die Anweisungen erinnern.", fr: "Nous allons nous rappeler les instructions." },
      { de: "Sie wird sich an den Weg erinnern.", fr: "Elle va se rappeler le chemin." }
    ],
    "conditionnel_présent": [
        { de: "Wenn du mir einen Hinweis geben würdest, würde ich mich vielleicht erinnern.", fr: "Si tu me donnais un indice, je me rappellerais peut-être." },
        { de: "Er würde sich an seinen Namen erinnern, wenn er ihn sehen würde.", fr: "Il se rappellerait son nom s'il le voyait." }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich an den Termin erinnert, wenn du mich daran erinnert hättest.", fr: "Je me serais rappelé le rendez-vous si tu me l'avais rappelé." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dich an deine Verpflichtungen erinnerst.", fr: "Il est important que tu te rappelles tes engagements." },
      { de: "Ich möchte, dass wir uns an diesen Moment erinnern.", fr: "Je veux que nous nous rappelions ce moment." }
    ]
  }
};
