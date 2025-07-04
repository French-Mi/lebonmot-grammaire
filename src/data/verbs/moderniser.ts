import type { Verb } from '@/types/verb-types';

export const moderniser: Verb = {
  infinitive: "moderniser",
  translation: "modernisieren",
  verbGroup: 1,
  indicatif: {
    présent: ["modernise", "modernises", "modernise", "modernisons", "modernisez", "modernisent"],
    passé_composé: { aux: "avoir", participle: "modernisé" },
    imparfait: ["modernisais", "modernisais", "modernisait", "modernisions", "modernisiez", "modernisaient"],
    plus_que_parfait: { aux: "avoir", participle: "modernisé" },
    futur_simple: ["moderniserai", "moderniseras", "modernisera", "moderniserons", "moderniserez", "moderniseront"],
    futur_proche: { aux: "aller", participle: "moderniser" }
  },
  subjonctif: {
    présent: ["modernise", "modernises", "modernise", "modernisions", "modernisiez", "modernisent"]
  },
  conditionnel: {
    présent: ["moderniserais", "moderniserais", "moderniserait", "moderniserions", "moderniseriez", "moderniseraient"],
    passé: { aux: "avoir", participle: "modernisé" }
  },
  imperatif: {
    present: ["modernise", "modernisons", "modernisez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich modernisiere die Website des Unternehmens.", fr: "Je modernise le site web de l'entreprise." },
      { de: "Die Stadt modernisiert ihre Infrastruktur.", fr: "La ville modernise ses infrastructures." },
      { de: "Wir modernisieren unsere Produktionsprozesse.", fr: "Nous modernisons nos processus de production." }
    ],
    "indicatif_passé_composé": [
      { de: "Wir haben die Küche komplett modernisiert.", fr: "Nous avons complètement modernisé la cuisine." },
      { de: "Sie hat die Verwaltung ihres Geschäfts modernisiert.", fr: "Elle a modernisé la gestion de son magasin." },
      { de: "Der neue Direktor hat die gesamte Ausrüstung modernisiert.", fr: "Le nouveau directeur a modernisé tout l'équipement." }
    ],
    "indicatif_imparfait": [
        { de: "Der König modernisierte sein Königreich.", fr: "Le roi modernisait son royaume." },
        { de: "Die Fabrik modernisierte ihre Maschinen schrittweise.", fr: "L'usine modernisait ses machines progressivement." },
        { de: "Ihr habt die Methoden modernisiert, aber nicht die Mentalität.", fr: "Vous modernisiez les méthodes mais pas la mentalité." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte das System bereits modernisiert, bevor die neuen Vorschriften kamen.", fr: "J'avais déjà modernisé le système avant l'arrivée des nouvelles réglementations." },
        { de: "Sie hatte das Familienunternehmen modernisiert.", fr: "Elle avait modernisé l'entreprise familiale." },
        { de: "Sie hatten die Schule modernisiert, um mehr Schüler anzuziehen.", fr: "Ils avaient modernisé l'école pour attirer plus d'élèves." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde das Computersystem nächstes Jahr modernisieren.", fr: "Je moderniserai le système informatique l'année prochaine." },
      { de: "Die Regierung wird die öffentlichen Verkehrsmittel modernisieren.", fr: "Le gouvernement modernisera les transports publics." },
      { de: "Wir werden unsere Art zu kommunizieren modernisieren.", fr: "Nous moderniserons notre façon de communiquer." }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden die Büros modernisieren.", fr: "Nous allons moderniser les bureaux." },
      { de: "Sie wird ihren Lehransatz modernisieren.", fr: "Elle va moderniser son approche pédagogique." },
      { de: "Ihr werdet die Software modernisieren müssen.", fr: "Vous allez devoir moderniser le logiciel." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Bibliothek modernisieren, wenn ich das Budget hätte.", fr: "Je moderniserais la bibliothèque si j'avais le budget." },
        { de: "Er würde das Unternehmen modernisieren, wenn man ihn ließe.", fr: "Il moderniserait l'entreprise si on le laissait faire." },
        { de: "Sie würden das gesamte Viertel modernisieren.", fr: "Ils moderniseraient tout le quartier." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte das Design der App modernisiert.", fr: "J'aurais modernisé le design de l'application." },
        { de: "Sie hätten die Fabrik schon vor Jahren modernisieren sollen.", fr: "Vous auriez dû moderniser l'usine il y a des années." },
        { de: "Sie hätte ihr Haus modernisiert, aber sie hat es vorgezogen, umzuziehen.", fr: "Elle aurait modernisé sa maison, mais elle a préféré déménager." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass man die Werkzeuge modernisiert.", fr: "Il est nécessaire que l'on modernise les outils." },
      { de: "Ich möchte, dass du die Präsentation modernisierst.", fr: "Je veux que tu modernises la présentation." },
      { de: "Damit wir das Unternehmen modernisieren, brauchen wir die Zustimmung aller.", fr: "Pour que nous modernisions l'entreprise, il nous faut l'accord de tous." }
    ]
  }
};
