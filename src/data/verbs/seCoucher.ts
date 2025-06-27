import type { Verb } from '@/types/verb-types';

export const seCoucher: Verb = {
  infinitive: 'se coucher',
  translation: 'sich hinlegen / schlafen gehen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["couche", "couches", "couche", "couchons", "couchez", "couchent"],
    passé_composé: { aux: 'être', participle: 'couché' },
    imparfait: ["couchais", "couchais", "couchait", "couchions", "couchiez", "couchaient"],
    plus_que_parfait: { aux: 'être', participle: 'couché' },
    futur_simple: ["coucherai", "coucheras", "couchera", "coucherons", "coucherez", "coucheront"],
    futur_proche: { aux: "aller", participle: "se coucher" }
  },
  subjonctif: { présent: ["couche", "couches", "couche", "couchions", "couchiez", "couchent"] },
  conditionnel: {
    présent: ["coucherais", "coucherais", "coucherait", "coucherions", "coucheriez", "coucheraient"],
    passé: { aux: 'être', participle: 'couché' }
  },
  imperatif: { present: ["couche-toi", "couchons-nous", "couchez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gehe um 23 Uhr schlafen.", fr: "Je me couche à 23 heures." },
      { de: "Um wie viel Uhr gehst du schlafen?", fr: "À quelle heure te couches-tu ?" },
      { de: "Die Kinder gehen früh ins Bett.", fr: "Les enfants se couchent tôt." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin gestern spät ins Bett gegangen.", fr: "Je me suis couché(e) tard hier." },
      { de: "Wir sind nach dem Film schlafen gegangen.", fr: "Nous nous sommes couchés après le film." },
      { de: "Sie ist sehr früh ins Bett gegangen.", fr: "Elle s'est couchée très tôt." }
    ],
    "indicatif_imparfait": [
        { de: "Normalerweise ging ich um 22 Uhr ins Bett.", fr: "D'habitude, je me couchais à 22 heures." },
        { de: "Wir gingen immer nach dem Abendessen schlafen.", fr: "Nous nous couchions toujours après le dîner." },
        { de: "Er ging schlafen, als die anderen ankamen.", fr: "Il se couchait quand les autres sont arrivés." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war schon ins Bett gegangen, als du angerufen hast.", fr: "Je m'étais déjà couché(e) quand tu as appelé." },
        { de: "Sie waren schlafen gegangen, bevor der Film zu Ende war.", fr: "Ils s'étaient couchés avant la fin du film." }
    ],
    "indicatif_futur_simple": [
      { de: "Heute Abend gehe ich früh schlafen.", fr: "Ce soir, je me coucherai tôt." },
      { de: "Du wirst spät ins Bett gehen.", fr: "Tu te coucheras tard." },
      { de: "Sie werden nach Mitternacht schlafen gehen.", fr: "Ils se coucheront après minuit." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich gehe gleich ins Bett.", fr: "Je vais me coucher." },
      { de: "Wir gehen jetzt schlafen.", fr: "Nous allons nous coucher maintenant." },
      { de: "Sie werden bald schlafen gehen.", fr: "Ils vont bientôt se coucher." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich müde wäre, würde ich schlafen gehen.", fr: "Si j'étais fatigué(e), je me coucherais." },
        { de: "Würdest du jetzt schlafen gehen, wenn du könntest?", fr: "Te coucherais-tu maintenant si tu pouvais ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich wäre früher ins Bett gegangen, wenn ich gewusst hätte, dass wir früh aufstehen müssen.", fr: "Je me serais couché(e) plus tôt si j'avais su qu'on devait se lever tôt." }
    ],
    "subjonctif_présent": [
      { de: "Es ist besser, dass du jetzt schlafen gehst.", fr: "Il vaut mieux que tu te couches maintenant." },
      { de: "Der Arzt möchte, dass wir uns früh hinlegen.", fr: "Le médecin veut que nous nous couchions de bonne heure." }
    ]
  }
};
