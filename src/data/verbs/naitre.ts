import type { Verb } from '@/types/verb-types';

export const naitre: Verb = {
  infinitive: "naître",
  translation: "geboren werden, entstehen",
  verbGroup: 3,
  indicatif: {
    présent: ["nais", "nais", "naît", "naissons", "naissez", "naissent"],
    passé_composé: { aux: "être", participle: "né" },
    imparfait: ["naissais", "naissais", "naissait", "naissions", "naissiez", "naissaient"],
    plus_que_parfait: { aux: "être", participle: "né" },
    futur_simple: ["naîtrai", "naîtras", "naîtra", "naîtrons", "naîtrez", "naîtront"],
    futur_proche: { aux: "aller", participle: "naître" }
  },
  subjonctif: {
    présent: ["naisse", "naisses", "naisse", "naissions", "naissiez", "naissent"]
  },
  conditionnel: {
    présent: ["naîtrais", "naîtrais", "naîtrait", "naîtrions", "naîtriez", "naîtraient"],
    passé: { aux: "être", participle: "né" }
  },
  imperatif: {
    present: ["nais", "naissons", "naissez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich werde sozusagen wiedergeboren.", fr: "Je nais à nouveau, pour ainsi dire." },
      { de: "Eine neue Idee entsteht in seinem Kopf.", fr: "Une nouvelle idée naît dans son esprit." },
      { de: "Jeden Tag werden Tausende von Babys geboren.", fr: "Chaque jour, des milliers de bébés naissent." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin in Paris geboren.", fr: "Je suis né(e) à Paris." },
      { de: "Sie ist letzten Dienstag geboren.", fr: "Elle est née mardi dernier." },
      { de: "Wo seid ihr geboren?", fr: "Où êtes-vous né(e)s ?" }
    ],
    "indicatif_imparfait": [
        { de: "Aus diesem Konflikt entstand eine neue Nation.", fr: "De ce conflit naissait une nouvelle nation." },
        { de: "Wir wurden in eine Welt im Wandel geboren.", fr: "Nous naissions dans un monde en mutation." },
        { de: "Zu dieser Zeit wurden die meisten Kinder zu Hause geboren.", fr: "À cette époque, la plupart des enfants naissaient à la maison." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er war in eine reiche Familie geboren worden.", fr: "Il était né dans une famille riche." },
        { de: "Sie war in dem Haus geboren worden, in dem ihre Mutter selbst geboren worden war.", fr: "Elle était née dans la maison où sa mère était elle-même née." },
        { de: "Wir waren alle im selben Krankenhaus geboren worden.", fr: "Nous étions tous nés dans le même hôpital." }
    ],
    "indicatif_futur_simple": [
      { de: "Das Baby wird im Dezember geboren.", fr: "Le bébé naîtra en décembre." },
      { de: "Aus dieser Krise wird eine neue Chance entstehen.", fr: "De cette crise naîtra une nouvelle opportunité." },
      { de: "Unsere Kinder werden in einer anderen Welt geboren werden.", fr: "Nos enfants naîtront dans un monde différent." }
    ],
    "indicatif_futur_proche": [
      { de: "Eine neue Liebe wird bald entstehen.", fr: "Un nouvel amour va bientôt naître." },
      { de: "Das Kalb wird in Kürze geboren.", fr: "Le veau va naître d'un moment à l'autre." },
      { de: "Ein neues Projekt wird aus dieser Zusammenarbeit entstehen.", fr: "Un nouveau projet va naître de cette collaboration." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne in einem anderen Jahrhundert geboren werden.", fr: "J'aimerais naître dans un autre siècle." },
        { de: "Unter anderen Umständen würde eine starke Freundschaft zwischen uns entstehen.", fr: "Dans d'autres circonstances, une forte amitié naîtrait entre nous." },
        { de: "Er würde als Künstler wiedergeboren, wenn er den Mut hätte.", fr: "Il naîtrait artiste s'il avait le courage." }
    ],
     "conditionnel_passé": [
        { de: "Ich wäre lieber im Sommer geboren.", fr: "Je serais préféré(e) naître en été." },
        { de: "Wärst du lieber als Junge oder als Mädchen geboren worden?", fr: "Aurais-tu préféré naître garçon ou fille ?" },
        { de: "Sie wären im selben Jahr geboren, wenn es keine Komplikationen gegeben hätte.", fr: "Ils seraient nés la même année s'il n'y avait pas eu de complications." }
    ],
    "subjonctif_présent": [
      { de: "Es ist selten, dass ein Genie geboren wird.", fr: "Il est rare qu'un génie naisse." },
      { de: "Ich möchte, dass aus unseren Bemühungen etwas Gutes entsteht.", fr: "Je veux que de nos efforts naisse quelque chose de bon." },
      { de: "Damit eine neue Gesellschaft entsteht, müssen sich die Mentalitäten ändern.", fr: "Pour qu'une nouvelle société naisse, il faut que les mentalités changent." }
    ]
  }
};
