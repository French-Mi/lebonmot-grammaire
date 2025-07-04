import type { Verb } from '@/types/verb-types';

export const rire: Verb = {
  infinitive: "rire",
  translation: "lachen",
  verbGroup: 3,
  indicatif: {
    présent: ["ris", "ris", "rit", "rions", "riez", "rient"],
    passé_composé: { aux: "avoir", participle: "ri" },
    imparfait: ["riais", "riais", "riait", "riions", "riiez", "riaient"],
    plus_que_parfait: { aux: "avoir", participle: "ri" },
    futur_simple: ["rirai", "riras", "rira", "rirons", "rirez", "riront"],
    futur_proche: { aux: "aller", participle: "rire" }
  },
  subjonctif: {
    présent: ["rie", "ries", "rie", "riions", "riiez", "rient"]
  },
  conditionnel: {
    présent: ["rirais", "rirais", "rirait", "ririons", "ririez", "riraient"],
    passé: { aux: "avoir", participle: "ri" }
  },
  imperatif: {
    present: ["ris", "rions", "riez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich lache über seine Witze.", fr: "Je ris de ses blagues." },
      { de: "Warum lachst du?", fr: "Pourquoi ris-tu ?" },
      { de: "Wir lachen viel zusammen.", fr: "Nous rions beaucoup ensemble." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe so sehr gelacht, dass ich weinen musste.", fr: "J'ai tellement ri que j'en ai pleuré." },
      { de: "Sie hat über meinen Akzent gelacht.", fr: "Elle a ri de mon accent." },
      { de: "Wir haben den ganzen Abend gelacht.", fr: "Nous avons ri toute la soirée." }
    ],
    "indicatif_imparfait": [
        { de: "Er lachte immer über die gleiche Geschichte.", fr: "Il riait toujours de la même histoire." },
        { de: "Wir lachten über unsere Dummheiten aus der Kindheit.", fr: "Nous riions de nos bêtises d'enfance." },
        { de: "Ihr lachtet so laut, dass man euch von weitem hörte.", fr: "Vous riiez si fort qu'on vous entendait de loin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte schon lange nicht mehr so gelacht.", fr: "Je n'avais pas ri comme ça depuis longtemps." },
        { de: "Sie hatte über eine Erinnerung gelacht.", fr: "Elle avait ri d'un souvenir." },
        { de: "Wir hatten so viel gelacht, dass wir Bauchschmerzen hatten.", fr: "Nous avions tellement ri que nous avions mal au ventre." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst lachen, wenn ich dir das erzähle.", fr: "Tu riras quand je te raconterai ça." },
      { de: "Wer zuletzt lacht, lacht am besten.", fr: "Rira bien qui rira le dernier." },
      { de: "Wir werden über diese Sorgen eines Tages lachen.", fr: "Nous rirons de ces soucis un jour." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde lachen, das ist sicher.", fr: "Je vais rire, c'est sûr." },
      { de: "Hör auf, du bringst mich zum Lachen.", fr: "Arrête, tu vas me faire rire." },
      { de: "Sie werden lachen, wenn sie das sehen.", fr: "Ils vont rire en voyant ça." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mehr lachen, wenn ich nicht so müde wäre.", fr: "Je rirais plus si je n'étais pas si fatigué." },
        { de: "Würdest du lachen, wenn ich hinfalle?", fr: "Rirais-tu si je tombais ?" },
        { de: "Das würde uns zum Lachen bringen.", fr: "Cela nous ferait rire." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte gelacht, wenn es nicht so traurig wäre.", fr: "J'aurais ri si ce n'était pas si triste." },
        { de: "Wir hätten mehr gelacht, wenn der Film lustiger gewesen wäre.", fr: "Nous aurions ri davantage si le film avait été plus drôle." },
        { de: "Sie hätten über sich selbst gelacht.", fr: "Ils auraient ri d'eux-mêmes." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass du über mich lachst.", fr: "Je ne veux pas que tu ries de moi." },
      { de: "Es ist selten, dass er lacht.", fr: "Il est rare qu'il rie." },
      { de: "Damit wir lachen, muss der Witz gut sein.", fr: "Pour que nous riions, il faut que la blague soit bonne." }
    ]
  }
};
