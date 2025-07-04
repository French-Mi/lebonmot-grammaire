import type { Verb } from '@/types/verb-types';

export const seMoquer: Verb = {
  infinitive: "se moquer",
  translation: "sich lustig machen, sich über etwas hinwegsetzen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["moque", "moques", "moque", "moquons", "moquez", "moquent"],
    passé_composé: { aux: 'être', participle: 'moqué' },
    imparfait: ["moquais", "moquais", "moquait", "moquions", "moquiez", "moquaient"],
    plus_que_parfait: { aux: 'être', participle: 'moqué' },
    futur_simple: ["moquerai", "moqueras", "moquera", "moquerons", "moquerez", "moqueront"],
    futur_proche: { aux: "aller", participle: "se moquer" }
  },
  subjonctif: {
    présent: ["moque", "moques", "moque", "moquions", "moquiez", "moquent"]
  },
  conditionnel: {
    présent: ["moquerais", "moquerais", "moquerait", "moquerions", "moqueriez", "moqueraient"],
    passé: { aux: 'être', participle: 'moqué' }
  },
  imperatif: {
    present: ["moque-toi", "moquons-nous", "moquez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich mache mich über seine alten Schuhe lustig.", fr: "Je me moque de ses vieilles chaussures." },
      { de: "Mach dich nicht über mich lustig!", fr: "Ne te moque pas de moi !" },
      { de: "Sie machen sich über alles lustig.", fr: "Ils se moquent de tout." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat sich über meinen Akzent lustig gemacht.", fr: "Il s'est moqué de mon accent." },
      { de: "Sie hat sich über die Regeln hinweggesetzt.", fr: "Elle s'est moquée des règles." },
      { de: "Wir haben uns über die Situation lustig gemacht.", fr: "Nous nous sommes moqués de la situation." }
    ],
    "indicatif_imparfait": [
        { de: "Er machte sich immer über die Jüngeren lustig.", fr: "Il se moquait toujours des plus jeunes." },
        { de: "Wir machten uns über die Mode der damaligen Zeit lustig.", fr: "Nous nous moquions de la mode de l'époque." },
        { de: "Ihr machtet euch über seine Gutgläubigkeit lustig.", fr: "Vous vous moquiez de sa crédulité." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich über seine Warnungen lustig gemacht.", fr: "Elle s'était moquée de ses avertissements." },
        { de: "Sie hatten sich über ihn lustig gemacht, und jetzt bereuten sie es.", fr: "Ils s'étaient moqués de lui et maintenant ils le regrettaient." },
        { de: "Ich hatte mich über ein Detail lustig gemacht, das wichtig war.", fr: "Je m'étais moqué(e) d'un détail qui était important." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich über deine Ausreden lustig machen.", fr: "Je me moquerai de tes excuses." },
      { de: "Die Leute werden sich über dich lustig machen, wenn du das trägst.", fr: "Les gens se moqueront de toi si tu portes ça." },
      { de: "Wir werden uns nicht über ihn lustig machen.", fr: "Nous ne nous moquerons pas de lui." }
    ],
    "indicatif_futur_proche": [
      { de: "Er wird sich über deine neue Frisur lustig machen.", fr: "Il va se moquer de ta nouvelle coiffure." },
      { de: "Hör auf, sonst werden sie sich über dich lustig machen.", fr: "Arrête, ou ils vont se moquer de toi." },
      { de: "Wir werden uns über diese ganze Geschichte lustig machen.", fr: "Nous allons nous moquer de toute cette histoire." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich niemals über jemanden lustig machen, der leidet.", fr: "Je ne me moquerais jamais de quelqu'un qui souffre." },
        { de: "Würdest du dich über deinen besten Freund lustig machen?", fr: "Te moquerais-tu de ton meilleur ami ?" },
        { de: "Sie würden sich über die Konsequenzen hinwegsetzen.", fr: "Ils se moqueraient des conséquences." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich an deiner Stelle nicht über ihn lustig gemacht.", fr: "Je ne me serais pas moqué(e) de lui à ta place." },
        { de: "Er hätte sich nicht über sie lustig gemacht, wenn er ihre Geschichte gekannt hätte.", fr: "Il ne se serait pas moqué d'elle s'il avait connu son histoire." },
        { de: "Wir hätten uns über diese Regel hinweggesetzt, wenn wir gekonnt hätten.", fr: "Nous nous serions moqués de cette règle si nous avions pu." }
    ],
    "subjonctif_présent": [
      { de: "Ich verbiete dir, dich über ihn lustig zu machen.", fr: "Je t'interdis que tu te moques de lui." },
      { de: "Es ist nicht gut, dass man sich über andere lustig macht.", fr: "Il n'est pas bien que l'on se moque des autres." },
      { de: "Damit sie aufhören, sich über dich lustig zu machen, ignoriere sie.", fr: "Pour qu'ils cessent de se moquer de toi, ignore-les." }
    ]
  }
};
