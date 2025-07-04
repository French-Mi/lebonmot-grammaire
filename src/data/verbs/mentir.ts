import type { Verb } from '@/types/verb-types';

export const mentir: Verb = {
  infinitive: "mentir",
  translation: "lügen",
  verbGroup: 3,
  indicatif: {
    présent: ["mens", "mens", "ment", "mentons", "mentez", "mentent"],
    passé_composé: { aux: "avoir", participle: "menti" },
    imparfait: ["mentais", "mentais", "mentait", "mentions", "mentiez", "mentaient"],
    plus_que_parfait: { aux: "avoir", participle: "menti" },
    futur_simple: ["mentirai", "mentiras", "mentira", "mentirons", "mentirez", "mentiront"],
    futur_proche: { aux: "aller", participle: "mentir" }
  },
  subjonctif: {
    présent: ["mente", "mentes", "mente", "mentions", "mentiez", "mentent"]
  },
  conditionnel: {
    présent: ["mentirais", "mentirais", "mentirait", "mentirions", "mentiriez", "mentiraient"],
    passé: { aux: "avoir", participle: "menti" }
  },
  imperatif: {
    present: ["mens", "mentons", "mentez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich lüge nie.", fr: "Je ne mens jamais." },
      { de: "Warum lügst du mich an?", fr: "Pourquoi est-ce que tu me mens ?" },
      { de: "Er lügt wie gedruckt.", fr: "Il ment comme un arracheur de dents." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat mich bezüglich seines Alters angelogen.", fr: "Il m'a menti sur son âge." },
      { de: "Hast du jemals deine Eltern angelogen?", fr: "As-tu déjà menti à tes parents ?" },
      { de: "Wir haben nicht gelogen, wir haben nur nicht die ganze Wahrheit gesagt.", fr: "Nous n'avons pas menti, nous n'avons juste pas dit toute la vérité." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind log er oft, um Ärger zu vermeiden.", fr: "Enfant, il mentait souvent pour éviter les ennuis." },
        { de: "Wir wussten, dass sie log, aber wir sagten nichts.", fr: "Nous savions qu'elle mentait, mais nous ne disions rien." },
        { de: "Du logst immer über deine Noten.", fr: "Tu mentais toujours à propos de tes notes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte mich angelogen, und ich hatte ihm geglaubt.", fr: "Il m'avait menti et je l'avais cru." },
        { de: "Sie hatte über ihre Vergangenheit gelogen.", fr: "Elle avait menti sur son passé." },
        { de: "Ich wusste, dass sie mich angelogen hatten.", fr: "Je savais qu'ils m'avaient menti." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich nie wieder anlügen, versprochen.", fr: "Je ne te mentirai plus, promis." },
      { de: "Er wird lügen, um sich zu schützen.", fr: "Il mentira pour se protéger." },
      { de: "Sie werden lügen, wenn man sie direkt fragt.", fr: "Ils mentiront si on leur pose la question directement." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde nicht lügen, es wird schwierig sein.", fr: "Je ne vais pas mentir, ça va être difficile." },
      { de: "Er wird lügen, das ist sicher.", fr: "Il va mentir, c'est certain." },
      { de: "Du wirst sie doch nicht anlügen, oder?", fr: "Tu ne vas pas leur mentir, n'est-ce pas ?" }
    ],
    "conditionnel_présent": [
        { de: "Ich würde niemals lügen, um jemanden zu verletzen.", fr: "Je ne mentirais jamais pour blesser quelqu'un." },
        { de: "Würdest du lügen, um einen Freund zu retten?", fr: "Mentirais-tu pour sauver un ami ?" },
        { de: "Er würde lügen, wenn es absolut notwendig wäre.", fr: "Il mentirait si c'était absolument nécessaire." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte gelogen, wenn du mich gezwungen hättest.", fr: "J'aurais menti si tu m'avais forcé." },
        { de: "Sie hätte nicht gelogen, wenn sie die Wahrheit gekannt hätte.", fr: "Elle n'aurait pas menti si elle avait su la vérité." },
        { de: "Wir hätten gelogen, um dich zu beschützen.", fr: "Nous aurions menti pour te protéger." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass du mich anlügst.", fr: "Je ne veux pas que tu me mentes." },
      { de: "Es ist besser, dass er lügt, als dass er die Wahrheit sagt und alles ruiniert.", fr: "Il vaut mieux qu'il mente plutôt qu'il dise la vérité et ruine tout." },
      { de: "Ich bezweifle, dass sie lügen.", fr: "Je doute qu'ils mentent." }
    ]
  }
};
