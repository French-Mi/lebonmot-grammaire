import type { Verb } from '@/types/verb-types';

export const rimer: Verb = {
  infinitive: "rimer",
  translation: "reimen",
  verbGroup: 1,
  indicatif: {
    présent: ["rime", "rimes", "rime", "rimons", "rimez", "riment"],
    passé_composé: { aux: "avoir", participle: "rimé" },
    imparfait: ["rimais", "rimais", "rimait", "rimions", "rimiez", "rimaient"],
    plus_que_parfait: { aux: "avoir", participle: "rimé" },
    futur_simple: ["rimerai", "rimeras", "rimera", "rimerons", "rimerez", "rimeront"],
    futur_proche: { aux: "aller", participle: "rimer" }
  },
  subjonctif: {
    présent: ["rime", "rimes", "rime", "rimions", "rimiez", "riment"]
  },
  conditionnel: {
    présent: ["rimerais", "rimerais", "rimerait", "rimerions", "rimeriez", "rimeraient"],
    passé: { aux: "avoir", participle: "rimé" }
  },
  imperatif: {
    present: ["rime", "rimons", "rimez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich reime zum Spaß.", fr: "Je rime pour le plaisir." },
      { de: "Das Wort 'amour' reimt sich auf 'toujours'.", fr: "Le mot 'amour' rime avec 'toujours'." },
      { de: "Wir reimen unsere Gedichte.", fr: "Nous rimons nos poèmes." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat zwei Verse gereimt.", fr: "Il a rimé deux vers." },
      { de: "Hast du schon einmal ein Gedicht gereimt?", fr: "As-tu déjà rimé un poème ?" },
      { de: "Ihre Namen reimten sich.", fr: "Leurs prénoms ont rimé." }
    ],
    "indicatif_imparfait": [
        { de: "Der Dichter reimte seine Verse am Kamin.", fr: "Le poète rimait ses vers au coin du feu." },
        { de: "Wir reimten als Kinder oft alberne Lieder.", fr: "Nous rimions souvent des chansons stupides quand nous étions enfants." },
        { de: "In seinen Briefen reimte er immer ein paar Zeilen.", fr: "Dans ses lettres, il rimait toujours quelques lignes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte die beiden Wörter gereimt, ohne es zu merken.", fr: "Il avait rimé les deux mots sans s'en rendre compte." },
        { de: "Ich hatte einen ganzen Text gereimt.", fr: "J'avais rimé un texte entier." },
        { de: "Sie hatten ihre Rede gereimt, um sie einprägsamer zu machen.", fr: "Ils avaient rimé leur discours pour le rendre plus mémorable." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diese beiden Sätze reimen.", fr: "Je rimerai ces deux phrases." },
      { de: "Das wird sich nicht reimen.", fr: "Cela ne rimera pas." },
      { de: "Wir werden unsere Slogans reimen.", fr: "Nous rimerons nos slogans." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde versuchen, diese Wörter zu reimen.", fr: "Je vais essayer de rimer ces mots." },
      { de: "Er wird seinen Rap reimen.", fr: "Il va rimer son rap." },
      { de: "Wir werden ein kleines Gedicht für sie reimen.", fr: "Nous allons rimer un petit poème pour elle." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diese Wörter nicht reimen, es klingt nicht gut.", fr: "Je ne rimerais pas ces mots, ça ne sonne pas bien." },
        { de: "Würdest du das für mich reimen?", fr: "Rimerais-tu cela pour moi ?" },
        { de: "Das würde sich perfekt reimen.", fr: "Cela rimerait parfaitement." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte das anders gereimt.", fr: "J'aurais rimé cela différemment." },
        { de: "Du hättest diese Verse besser reimen können.", fr: "Tu aurais pu mieux rimer ces vers." },
        { de: "Ein echter Dichter hätte das nicht so gereimt.", fr: "Un vrai poète n'aurait pas rimé ça comme ça." }
    ],
    "subjonctif_présent": [
      { de: "Es ist nicht notwendig, dass alles reimt.", fr: "Il n'est pas nécessaire que tout rime." },
      { de: "Ich möchte, dass du diese beiden Zeilen reimst.", fr: "Je veux que tu rimes ces deux lignes." },
      { de: "Damit sich unsere Texte reimen, müssen wir Synonyme finden.", fr: "Pour que nos textes riment, nous devons trouver des synonymes." }
    ]
  }
};
