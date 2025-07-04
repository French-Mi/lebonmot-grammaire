import type { Verb } from '@/types/verb-types';

export const respirer: Verb = {
  infinitive: "respirer",
  translation: "atmen",
  verbGroup: 1,
  indicatif: {
    présent: ["respire", "respires", "respire", "respirons", "respirez", "respirent"],
    passé_composé: { aux: "avoir", participle: "respiré" },
    imparfait: ["respirais", "respirais", "respirait", "respirions", "respiriez", "respiraient"],
    plus_que_parfait: { aux: "avoir", participle: "respiré" },
    futur_simple: ["respirerai", "respireras", "respirera", "respirerons", "respirerez", "respireront"],
    futur_proche: { aux: "aller", participle: "respirer" }
  },
  subjonctif: {
    présent: ["respire", "respires", "respire", "respirions", "respiriez", "respirent"]
  },
  conditionnel: {
    présent: ["respirerais", "respirerais", "respirerait", "respirerions", "respireriez", "respireraient"],
    passé: { aux: "avoir", participle: "respiré" }
  },
  imperatif: {
    present: ["respire", "respirons", "respirez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich atme tief ein.", fr: "Je respire profondément." },
      { de: "Er atmet die frische Bergluft.", fr: "Il respire l'air frais de la montagne." },
      { de: "Wir atmen, ohne darüber nachzudenken.", fr: "Nous respirons sans y penser." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe endlich wieder frei geatmet.", fr: "J'ai enfin respiré librement." },
      { de: "Nach dem Rennen hatte sie schwer geatmet.", fr: "Après la course, elle a respiré difficilement." },
      { de: "Wir haben den Duft der Blumen eingeatmet.", fr: "Nous avons respiré le parfum des fleurs." }
    ],
    "indicatif_imparfait": [
        { de: "Er atmete langsam, um sich zu beruhigen.", fr: "Il respirait lentement pour se calmer." },
        { de: "Wir atmeten den Rauch des Lagerfeuers ein.", fr: "Nous respirions la fumée du feu de camp." },
        { de: "Die ganze Stadt atmete im Rhythmus des Festivals.", fr: "Toute la ville respirait au rythme du festival." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte kaum geatmet, so angespannt war er.", fr: "Il avait à peine respiré, tant il était tendu." },
        { de: "Ich hatte noch nie so reine Luft geatmet.", fr: "Je n'avais jamais respiré un air aussi pur." },
        { de: "Nach dem Tauchgang hatten wir tief durchgeatmet.", fr: "Après la plongée, nous avions respiré profondément." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde besser atmen, wenn dieser Stress vorbei ist.", fr: "Je respirerai mieux quand ce stress sera terminé." },
      { de: "Du wirst die gute Landluft atmen.", fr: "Tu respireras le bon air de la campagne." },
      { de: "Wir werden wieder atmen können.", fr: "Nous pourrons respirer à nouveau." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde frische Luft schnappen (atmen).", fr: "Je vais aller respirer l'air frais." },
      { de: "Sie wird schwer atmen nach diesem Anstieg.", fr: "Elle va respirer difficilement après cette montée." },
      { de: "Wir werden die Atmosphäre dieses magischen Ortes einatmen.", fr: "Nous allons respirer l'atmosphère de ce lieu magique." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde besser atmen, wenn die Luft weniger verschmutzt wäre.", fr: "Je respirerais mieux si l'air était moins pollué." },
        { de: "Ohne dich könnte ich nicht atmen.", fr: "Sans toi, je ne pourrais pas respirer." },
        { de: "Man würde Gesundheit atmen in diesem Haus.", fr: "On respirerait la santé dans cette maison." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte besser geatmet, wenn ich mein Asthmaspray dabei gehabt hätte.", fr: "J'aurais mieux respiré si j'avais eu mon spray pour l'asthme." },
        { de: "Wir hätten aufatmen können, wenn die Gefahr vorüber gewesen wäre.", fr: "Nous aurions pu respirer si le danger était passé." },
        { de: "Du hättest die gute Meeresluft eingeatmet.", fr: "Tu aurais respiré le bon air marin." }
    ],
    "subjonctif_présent": [
      { de: "Es ist lebenswichtig, dass man atmet.", fr: "Il est vital que l'on respire." },
      { de: "Der Arzt möchte, dass du tief atmest.", fr: "Le médecin veut que tu respires profondément." },
      { de: "Damit wir besser atmen, müssen wir die Fenster öffnen.", fr: "Pour que nous respirions mieux, nous devons ouvrir les fenêtres." }
    ]
  }
};
