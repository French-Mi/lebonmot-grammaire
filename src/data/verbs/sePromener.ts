import type { Verb } from '@/types/verb-types';

export const sePromener: Verb = {
  infinitive: 'se promener',
  translation: 'spazieren gehen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["promène", "promènes", "promène", "promenons", "promenez", "promènent"],
    passé_composé: { aux: 'être', participle: 'promené' },
    imparfait: ["promenais", "promenais", "promenait", "promenions", "promeniez", "promenaient"],
    plus_que_parfait: { aux: 'être', participle: 'promené' },
    futur_simple: ["promènerai", "promèneras", "promènera", "promènerons", "promènerez", "promèneront"],
    futur_proche: { aux: "aller", participle: "se promener" }
  },
  subjonctif: { présent: ["promène", "promènes", "promène", "promenions", "promeniez", "promènent"] },
  conditionnel: {
    présent: ["promènerais", "promènerais", "promènerait", "promènerions", "promèneriez", "promèneraient"],
    passé: { aux: 'être', participle: 'promené' }
  },
  imperatif: { present: ["promène-toi", "promenons-nous", "promenez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gehe gerne im Wald spazieren.", fr: "J'aime me promener dans la forêt." },
      { de: "Gehst du mit deinem Hund spazieren?", fr: "Tu te promènes avec ton chien ?" },
      { de: "Wir gehen am See spazieren.", fr: "Nous nous promenons au bord du lac." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin heute Morgen spazieren gegangen.", fr: "Je me suis promené(e) ce matin." },
      { de: "Wir sind im Park spazieren gegangen.", fr: "Nous nous sommes promenés dans le parc." },
      { de: "Sie ist mit ihren Freundinnen spazieren gegangen.", fr: "Elle s'est promenée avec ses amies." }
    ],
    "indicatif_imparfait": [
        { de: "Jeden Sonntag gingen wir auf dem Land spazieren.", fr: "Chaque dimanche, nous nous promenions à la campagne." },
        { de: "Er ging oft allein spazieren.", fr: "Il se promenait souvent seul." },
        { de: "Ich ging am Strand spazieren, als ich dich sah.", fr: "Je me promenais sur la plage quand je t'ai vu." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war spazieren gegangen, bevor der Regen einsetzte.", fr: "Je m'étais promené(e) avant que la pluie ne commence." },
        { de: "Sie waren im Wald spazieren gegangen.", fr: "Ils s'étaient promenés en forêt." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werden wir in den Bergen spazieren gehen.", fr: "Demain, nous nous promènerons en montagne." },
      { de: "Wirst du am Abend spazieren gehen?", fr: "Te promèneras-tu le soir ?" },
      { de: "Sie werden am Flussufer spazieren gehen.", fr: "Elles se promèneront le long de la rivière." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich gehe gleich spazieren.", fr: "Je vais me promener." },
      { de: "Wir gehen in der Stadt spazieren.", fr: "Nous allons nous promener en ville." },
      { de: "Er wird mit seinen Eltern spazieren gehen.", fr: "Il va se promener avec ses parents." }
    ],
    "conditionnel_présent": [
        { de: "Wenn das Wetter schön wäre, würde ich spazieren gehen.", fr: "S'il faisait beau, je me promènerais." },
        { de: "Würdest du lieber am Meer oder in den Bergen spazieren gehen?", fr: "Tu te promènerais plutôt en bord de mer ou en montagne ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich wäre spazieren gegangen, wenn ich Zeit gehabt hätte.", fr: "Je me serais promené(e) si j'avais eu le temps." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du mit mir spazieren gehst.", fr: "Je veux que tu te promènes avec moi." },
      { de: "Es ist wichtig, dass wir uns jeden Tag ein wenig bewegen.", fr: "Il est important que nous nous promenions un peu chaque jour." }
    ]
  }
};
