import type { Verb } from '@/types/verb-types';

export const reussir: Verb = {
  infinitive: "réussir",
  translation: "gelingen / erfolgreich sein / bestehen",
  verbGroup: 2,
  indicatif: {
    présent: ["réussis", "réussis", "réussit", "réussissons", "réussissez", "réussissent"],
    passé_composé: { aux: "avoir", participle: "réussi" },
    imparfait: ["réussissais", "réussissais", "réussissait", "réussissions", "réussissiez", "réussissaient"],
    plus_que_parfait: { aux: "avoir", participle: "réussi" },
    futur_simple: ["réussirai", "réussiras", "réussira", "réussirons", "réussirez", "réussiront"],
    futur_proche: { aux: "aller", participle: "réussir" }
  },
  subjonctif: { présent: ["réussisse", "réussisses", "réussisse", "réussissions", "réussissiez", "réussissent"] },
  conditionnel: { présent: ["réussirais", "réussirais", "réussirait", "réussirions", "réussiriez", "réussiraient"], passé: { aux: "avoir", participle: "réussi" } },
  imperatif: { present: ["réussis", "réussissons", "réussissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Mir gelingt der Kuchen.", fr: "Je réussis le gâteau." },
      { de: "Er ist in allem erfolgreich, was er tut.", fr: "Il réussit dans tout ce qu'il fait." },
      { de: "Wir bestehen unsere Prüfungen.", fr: "Nous réussissons nos examens." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Prüfung bestanden.", fr: "J'ai réussi mon examen." },
      { de: "Ihr ist ein wunderbares Gericht gelungen.", fr: "Elle a réussi un plat magnifique." },
      { de: "Sie haben ihr Ziel erreicht.", fr: "Ils ont réussi leur objectif." }
    ],
    "indicatif_imparfait": [
        { de: "Ihm gelang es immer, die Leute zum Lachen zu bringen.", fr: "Il réussissait toujours à faire rire les gens." },
        { de: "Wir bestanden unsere Prüfungen immer mit guten Noten.", fr: "Nous réussissions toujours nos examens avec de bonnes notes." },
        { de: "Du warst in der Schule immer erfolgreich.", fr: "Tu réussissais toujours à l'école." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die Aufnahmeprüfung bestanden.", fr: "J'avais réussi le concours d'entrée." },
        { de: "Sie hatte es geschafft, alle zu überzeugen.", fr: "Elle avait réussi à convaincre tout le monde." },
        { de: "Wir hatten es geschafft, pünktlich anzukommen.", fr: "Nous avions réussi à arriver à l'heure." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich bin sicher, du wirst erfolgreich sein.", fr: "Je suis sûr que tu réussiras." },
      { de: "Sie wird die Prüfung bestehen.", fr: "Elle réussira l'examen." },
      { de: "Wir werden es schaffen.", fr: "Nous réussirons." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde diese Prüfung bestehen.", fr: "Je vais réussir cet examen." },
      { de: "Er wird sein Projekt erfolgreich abschließen.", fr: "Il va réussir son projet." },
      { de: "Wir werden es schaffen.", fr: "Nous allons réussir." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es schaffen, wenn du mir helfen würdest.", fr: "Je réussirais si tu m'aidais." },
        { de: "Er würde es schaffen, wenn er härter arbeiten würde.", fr: "Il réussirait s'il travaillait plus dur." },
        { de: "Wir würden die Prüfung bestehen.", fr: "Nous réussirions l'examen." }
    ],
    "subjonctif_présent": [
      { de: "Damit du erfolgreich bist, musst du arbeiten.", fr: "Pour que tu réussisses, tu dois travailler." },
      { de: "Ich will, dass sie erfolgreich ist.", fr: "Je veux qu'elle réussisse." },
      { de: "Es ist möglich, dass wir erfolgreich sind.", fr: "Il est possible que nous réussissions." }
    ]
  }
};
