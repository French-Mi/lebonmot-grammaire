import type { Verb } from '@/types/verb-types';

export const seBaigner: Verb = {
  infinitive: 'se baigner',
  translation: 'baden / schwimmen gehen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["baigne", "baignes", "baigne", "baignons", "baignez", "baignent"],
    passé_composé: { aux: 'être', participle: 'baigné' },
    imparfait: ["baignais", "baignais", "baignait", "baignions", "baigniez", "baignaient"],
    plus_que_parfait: { aux: 'être', participle: 'baigné' },
    futur_simple: ["baignerai", "baigneras", "baignera", "baignerons", "baignerez", "baigneront"],
    futur_proche: { aux: "aller", participle: "se baigner" }
  },
  subjonctif: { présent: ["baigne", "baignes", "baigne", "baignions", "baigniez", "baignent"] },
  conditionnel: {
    présent: ["baignerais", "baignerais", "baignerait", "baignerions", "baigneriez", "baigneraient"],
    passé: { aux: 'être', participle: 'baigné' }
  },
  imperatif: { present: ["baigne-toi", "baignons-nous", "baignez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich bade im Meer.", fr: "Je me baigne dans la mer." },
      { de: "Badest du gerne im See?", fr: "Tu aimes te baigner dans le lac ?" },
      { de: "Die Kinder baden im Pool.", fr: "Les enfants se baignent dans la piscine." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe gestern gebadet.", fr: "Je me suis baigné(e) hier." },
      { de: "Wir haben den ganzen Nachmittag gebadet.", fr: "Nous nous sommes baignés tout l'après-midi." },
      { de: "Sie hat im Ozean gebadet.", fr: "Elle s'est baignée dans l'océan." }
    ],
    "indicatif_imparfait": [
        { de: "Als ich jung war, badete ich jeden Sommer im Fluss.", fr: "Quand j'étais jeune, je me baignais dans la rivière chaque été." },
        { de: "Wir badeten, als es anfing zu regnen.", fr: "Nous nous baignions quand il a commencé à pleuvoir." },
        { de: "Er badete immer am Morgen.", fr: "Il se baignait toujours le matin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte bereits gebadet, als sie ankamen.", fr: "Je m'étais déjà baigné(e) quand ils sont arrivés." },
        { de: "Sie hatten vor dem Sturm gebadet.", fr: "Elles s'étaient baignées avant l'orage." },
        { de: "Wir hatten im See gebadet.", fr: "Nous nous étions baignés dans le lac." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich im See baden.", fr: "Demain, je me baignerai dans le lac." },
      { de: "Wirst du mit uns baden gehen?", fr: "Te baigneras-tu avec nous ?" },
      { de: "Sie werden im Mittelmeer baden.", fr: "Ils se baigneront dans la Méditerranée." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich gehe gleich baden.", fr: "Je vais me baigner tout de suite." },
      { de: "Wir gehen im Pool baden.", fr: "Nous allons nous baigner dans la piscine." },
      { de: "Sie werden später baden gehen.", fr: "Ils vont se baigner plus tard." }
    ],
    "conditionnel_présent": [
        { de: "Wenn das Wasser wärmer wäre, würde ich baden.", fr: "Si l'eau était plus chaude, je me baignerais." },
        { de: "Würdest du hier baden?", fr: "Te baignerais-tu ici ?" },
        { de: "Wir würden baden, wenn wir Zeit hätten.", fr: "Nous nous baignerions si nous avions le temps." }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte gebadet, wenn es nicht geregnet hätte.", fr: "Je me serais baigné(e) s'il n'avait pas plu." },
      { de: "Sie hätten gebadet, wenn das Wasser nicht so kalt gewesen wäre.", fr: "Ils se seraient baignés si l'eau n'avait pas été si froide." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du mit mir badest.", fr: "Je veux que tu te baignes avec moi." },
      { de: "Es ist wichtig, dass wir uns nicht zu lange baden.", fr: "Il est important que nous ne nous baignions pas trop longtemps." },
      { de: "Bevor sie baden, müssen sie sich eincremen.", fr: "Avant qu'ils se baignent, ils doivent mettre de la crème solaire." }
    ]
  }
};
