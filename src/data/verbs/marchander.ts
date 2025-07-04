import type { Verb } from '@/types/verb-types';

export const marchander: Verb = {
  infinitive: "marchander",
  translation: "handeln, feilschen",
  verbGroup: 1,
  indicatif: {
    présent: ["marchande", "marchandes", "marchande", "marchandons", "marchandez", "marchandent"],
    passé_composé: { aux: "avoir", participle: "marchandé" },
    imparfait: ["marchandais", "marchandais", "marchandait", "marchandions", "marchandiez", "marchandaient"],
    plus_que_parfait: { aux: "avoir", participle: "marchandé" },
    futur_simple: ["marchanderai", "marchanderas", "marchandera", "marchanderons", "marchanderez", "marchanderont"],
    futur_proche: { aux: "aller", participle: "marchander" }
  },
  subjonctif: {
    présent: ["marchande", "marchandes", "marchande", "marchandions", "marchandiez", "marchandent"]
  },
  conditionnel: {
    présent: ["marchanderais", "marchanderais", "marchanderait", "marchanderions", "marchanderiez", "marchanderaient"],
    passé: { aux: "avoir", participle: "marchandé" }
  },
  imperatif: {
    present: ["marchande", "marchandons", "marchandez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich feilsche gerne auf dem Markt.", fr: "J'aime marchander au marché." },
      { de: "Er handelt nie, er akzeptiert immer den ersten Preis.", fr: "Il ne marchande jamais, il accepte toujours le premier prix." },
      { de: "Wir handeln um den Preis des Teppichs.", fr: "Nous marchandons le prix du tapis." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe einen guten Preis ausgehandelt.", fr: "J'ai marchandé un bon prix." },
      { de: "Sie hat lange gefeilscht, bevor sie kaufte.", fr: "Elle a longtemps marchandé avant d'acheter." },
      { de: "Wir haben den Preis für das Auto erfolgreich heruntergehandelt.", fr: "Nous avons réussi à marchander le prix de la voiture." }
    ],
    "indicatif_imparfait": [
        { de: "Auf Reisen feilschte er immer um Souvenirs.", fr: "En voyage, il marchandait toujours les souvenirs." },
        { de: "Früher feilschten die Leute mehr.", fr: "Autrefois, les gens marchandaient davantage." },
        { de: "Ihr habt um jeden Cent gefeilscht.", fr: "Vous marchandiez chaque centime." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte den Preis bereits ausgehandelt, als er mir ein besseres Angebot machte.", fr: "J'avais déjà marchandé le prix quand il m'a fait une meilleure offre." },
        { de: "Sie hatte den Kauf bereut, weil sie nicht gefeilscht hatte.", fr: "Elle avait regretté son achat parce qu'elle n'avait pas marchandé." },
        { de: "Wir hatten um alles gefeilscht, vom Essen bis zur Unterkunft.", fr: "Nous avions marchandé tout, de la nourriture au logement." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde versuchen zu handeln, aber ich verspreche nichts.", fr: "Je marchanderai, mais je ne promets rien." },
      { de: "Wirst du um den Preis dieses Schmuckstücks feilschen?", fr: "Marchanderas-tu le prix de ce bijou ?" },
      { de: "Sie werden nicht handeln, der Preis ist fest.", fr: "Ils ne marchanderont pas, le prix est fixe." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde sehen, ob ich handeln kann.", fr: "Je vais voir si je peux marchander." },
      { de: "Er wird nicht einmal versuchen zu feilschen.", fr: "Il ne va même pas essayer de marchander." },
      { de: "Wir werden um die Antiquitäten auf dem Flohmarkt feilschen.", fr: "Nous allons marchander les antiquités au marché aux puces." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde handeln, wenn ich wüsste, wie.", fr: "Je marchanderais si je savais comment faire." },
        { de: "Würdest du an meiner Stelle feilschen?", fr: "À ma place, est-ce que tu marchanderais ?" },
        { de: "Sie würden handeln, wenn der Verkäufer offen dafür wäre.", fr: "Ils marchanderaient si le vendeur était ouvert à la discussion." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte gehandelt, wenn ich mehr Zeit gehabt hätte.", fr: "J'aurais marchandé si j'avais eu plus de temps." },
        { de: "Sie hätten einen besseren Preis bekommen, wenn sie gefeilscht hätten.", fr: "Vous auriez eu un meilleur prix si vous aviez marchandé." },
        { de: "Er hätte nie um ein so kleines Objekt gefeilscht.", fr: "Il n'aurait jamais marchandé un si petit objet." }
    ],
    "subjonctif_présent": [
      { de: "Es ist üblich, dass man in diesem Land handelt.", fr: "Il est courant que l'on marchande dans ce pays." },
      { de: "Ich schlage vor, dass du ein wenig handelst.", fr: "Je suggère que tu marchandes un peu." },
      { de: "Damit wir handeln können, müssen wir den wahren Wert kennen.", fr: "Pour que nous marchandions, il faut connaître la vraie valeur." }
    ]
  }
};
