import type { Verb } from '@/types/verb-types';

export const pleurer: Verb = {
  infinitive: "pleurer",
  translation: "weinen",
  verbGroup: 1,
  indicatif: {
    présent: ["pleure", "pleures", "pleure", "pleurons", "pleurez", "pleurent"],
    passé_composé: { aux: "avoir", participle: "pleuré" },
    imparfait: ["pleurais", "pleurais", "pleurait", "pleurions", "pleuriez", "pleuraient"],
    plus_que_parfait: { aux: "avoir", participle: "pleuré" },
    futur_simple: ["pleurerai", "pleureras", "pleurera", "pleurerons", "pleurerez", "pleureront"],
    futur_proche: { aux: "aller", participle: "pleurer" }
  },
  subjonctif: {
    présent: ["pleure", "pleures", "pleure", "pleurions", "pleuriez", "pleurent"]
  },
  conditionnel: {
    présent: ["pleurerais", "pleurerais", "pleurerait", "pleurerions", "pleureriez", "pleureraient"],
    passé: { aux: "avoir", participle: "pleuré" }
  },
  imperatif: {
    present: ["pleure", "pleurons", "pleurez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich weine, wenn ich traurig bin.", fr: "Je pleure quand je suis triste." },
      { de: "Warum weint das Baby?", fr: "Pourquoi le bébé pleure-t-il ?" },
      { de: "Sie weinen vor Freude.", fr: "Ils pleurent de joie." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den ganzen Abend geweint.", fr: "J'ai pleuré toute la soirée." },
      { de: "Sie hat wegen des Films geweint.", fr: "Elle a pleuré à cause du film." },
      { de: "Wir haben gelacht, bis wir geweint haben.", fr: "Nous avons ri jusqu'à en pleurer." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind weinte er wegen jeder Kleinigkeit.", fr: "Quand il était enfant, il pleurait pour un rien." },
        { de: "Wir weinten jedes Mal, wenn wir uns verabschieden mussten.", fr: "Nous pleurions chaque fois que nous devions nous dire au revoir." },
        { de: "Die Weiden am Ufer weinten.", fr: "Les saules pleureurs pleuraient au bord de l'eau." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte geweint, bevor wir ankamen.", fr: "Elle avait pleuré avant que nous arrivions." },
        { de: "Ich hatte noch nie jemanden so weinen sehen.", fr: "Je n'avais jamais vu quelqu'un pleurer comme ça." },
        { de: "Nachdem sie geweint hatten, fühlten sie sich besser.", fr: "Après qu'ils avaient pleuré, ils se sentaient mieux." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde nicht vor dir weinen.", fr: "Je ne pleurerai pas devant toi." },
      { de: "Du wirst vor Lachen weinen.", fr: "Tu pleureras de rire." },
      { de: "Wenn du gehst, werden sie weinen.", fr: "Si tu pars, ils pleureront." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich weinen.", fr: "Je vais pleurer." },
      { de: "Hör auf, sonst wird sie weinen.", fr: "Arrête, sinon elle va pleurer." },
      { de: "Wir werden nicht über so etwas Dummes weinen.", fr: "Nous n'allons pas pleurer pour une chose aussi stupide." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde weinen, wenn mir das passieren würde.", fr: "Je pleurerais si cela m'arrivait." },
        { de: "Würdest du weinen, wenn ich gehe?", fr: "Pleurererais-tu si je partais ?" },
        { de: "Er würde aus Mitleid weinen.", fr: "Il pleurerait de compassion." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte vor Freude geweint.", fr: "J'aurais pleuré de joie." },
        { de: "Sie hätte nicht geweint, wenn du netter gewesen wärst.", fr: "Elle n'aurait pas pleuré si tu avais été plus gentil." },
        { de: "Wir hätten geweint, wenn wir das Ende des Films gesehen hätten.", fr: "Nous aurions pleuré si nous avions vu la fin du film." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass du weinst.", fr: "Je ne veux pas que tu pleures." },
      { de: "Es ist normal, dass man weint, wenn man traurig ist.", fr: "Il est normal que l'on pleure quand on est triste." },
      { de: "Bevor sie weinen, versuche sie zu trösten.", fr: "Avant qu'ils ne pleurent, essaie de les consoler." }
    ]
  }
};
