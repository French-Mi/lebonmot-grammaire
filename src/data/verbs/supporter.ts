import type { Verb } from '@/types/verb-types';

export const supporter: Verb = {
  infinitive: "supporter",
  translation: "ertragen, aushalten, unterstützen",
  verbGroup: 1,
  indicatif: {
    présent: ["supporte", "supportes", "supporte", "supportons", "supportez", "supportent"],
    passé_composé: { aux: "avoir", participle: "supporté" },
    imparfait: ["supportais", "supportais", "supportait", "supportions", "supportiez", "supportaient"],
    plus_que_parfait: { aux: "avoir", participle: "supporté" },
    futur_simple: ["supporterai", "supporteras", "supportera", "supporterons", "supporterez", "supporteront"],
    futur_proche: { aux: "aller", participle: "supporter" }
  },
  subjonctif: {
    présent: ["supporte", "supportes", "supporte", "supportions", "supportiez", "supportent"]
  },
  conditionnel: {
    présent: ["supporterais", "supporterais", "supporterait", "supporterions", "supporteriez", "supporteraient"],
    passé: { aux: "avoir", participle: "supporté" }
  },
  imperatif: {
    present: ["supporte", "supportons", "supportez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich ertrage diesen Lärm nicht.", fr: "Je ne supporte pas ce bruit." },
      { de: "Er unterstützt seine Familie.", fr: "Il supporte sa famille." },
      { de: "Welche Mannschaft unterstützt ihr?", fr: "Quelle équipe supportez-vous ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe seine Bemerkungen nicht ertragen.", fr: "Je n'ai pas supporté ses remarques." },
      { de: "Sie hat ihn während seiner Krankheit unterstützt.", fr: "Elle l'a supporté pendant sa maladie." },
      { de: "Wir haben die Hitze kaum ausgehalten.", fr: "Nous avons à peine supporté la chaleur." }
    ],
    "indicatif_imparfait": [
        { de: "Er ertrug die Ungerechtigkeit nicht.", fr: "Il ne supportait pas l'injustice." },
        { de: "Wir unterstützten dieses Projekt von Anfang an.", fr: "Nous supportions ce projet depuis le début." },
        { de: "Damals ertrugen die Menschen mehr.", fr: "À cette époque, les gens supportaient plus de choses." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte die lange Reise ertragen müssen.", fr: "Elle avait dû supporter le long voyage." },
        { de: "Ich hatte noch nie so eine Kälte ertragen.", fr: "Je n'avais jamais supporté un tel froid." },
        { de: "Wir hatten ihn immer unterstützt.", fr: "Nous l'avions toujours supporté." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde seine Anwesenheit nicht länger ertragen.", fr: "Je ne supporterai pas sa présence plus longtemps." },
      { de: "Wirst du die Konsequenzen tragen?", fr: "Supporteras-tu les conséquences ?" },
      { de: "Sie werden unsere Entscheidung unterstützen.", fr: "Ils supporteront notre décision." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde das nicht aushalten.", fr: "Je ne vais pas supporter ça." },
      { de: "Sie wird ihn bei seiner Prüfung unterstützen.", fr: "Elle va le supporter pour son examen." },
      { de: "Wir werden ihre Launen nicht mehr lange ertragen.", fr: "Nous n'allons pas supporter ses caprices très longtemps." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde das nicht ertragen.", fr: "Je ne supporterais pas cela." },
        { de: "Würdest du mich unterstützen, wenn ich meine Meinung ändere?", fr: "Me supporterais-tu si je changeais d'avis ?" },
        { de: "Sie würden ein solches Verhalten nicht tolerieren.", fr: "Ils ne supporteraient pas un tel comportement." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte das nicht ertragen.", fr: "Je n'aurais pas supporté cela." },
        { de: "Sie hätten uns unter anderen Umständen unterstützt.", fr: "Ils nous auraient supportés dans d'autres circonstances." }
    ],
    "subjonctif_présent": [
      { de: "Ich bezweifle, dass er diese Situation erträgt.", fr: "Je doute qu'il supporte cette situation." },
      { de: "Es ist notwendig, dass ihr euch gegenseitig unterstützt.", fr: "Il faut que vous vous supportiez les uns les autres." },
      { de: "Ich möchte nicht, dass sie das ertragen muss.", fr: "Je ne veux pas qu'elle ait à supporter ça." }
    ]
  }
};
