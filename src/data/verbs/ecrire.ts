import type { Verb } from '@/types/verb-types';

export const ecrire: Verb = {
  infinitive: "écrire",
  translation: "schreiben",
  verbGroup: 3,
  indicatif: {
    présent: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
    passé_composé: { aux: "avoir", participle: "écrit" },
    imparfait: ["écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
    plus_que_parfait: { aux: "avoir", participle: "écrit" },
    futur_simple: ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
    futur_proche: { aux: "aller", participle: "écrire" }
  },
  subjonctif: { présent: ["écrive", "écrives", "écrive", "écrivions", "écriviez", "écrivent"] },
  conditionnel: { présent: ["écrirais", "écrirais", "écrirait", "écririons", "écririez", "écriraient"], passé: { aux: "avoir", participle: "écrit" } },
  imperatif: { present: ["écris", "écrivons", "écrivez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schreibe einen Brief.", fr: "J'écris une lettre." },
      { de: "Was schreibst du?", fr: "Qu'est-ce que tu écris ?" },
      { de: "Wir schreiben eine E-Mail.", fr: "Nous écrivons un e-mail." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ein Buch geschrieben.", fr: "J'ai écrit un livre." },
      { de: "Hast du ihm geschrieben?", fr: "Lui as-tu écrit ?" },
      { de: "Sie hat ihren Namen auf das Papier geschrieben.", fr: "Elle a écrit son nom sur le papier." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind schrieb ich viele Geschichten.", fr: "Enfant, j'écrivais beaucoup d'histoires." },
        { de: "Er schrieb jeden Tag in sein Tagebuch.", fr: "Il écrivait chaque jour dans son journal." },
        { de: "Sie schrieben sich lange Briefe.", fr: "Ils s'écrivaient de longues lettres." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihm bereits geschrieben.", fr: "Je lui avais déjà écrit." },
        { de: "Sie hatte den Brief geschrieben, bevor sie ging.", fr: "Elle avait écrit la lettre avant de partir." },
        { de: "Wir hatten unsere Namen auf die Liste geschrieben.", fr: "Nous avions écrit nos noms sur la liste." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir morgen schreiben.", fr: "Je t'écrirai demain." },
      { de: "Du wirst einen Roman schreiben.", fr: "Tu écriras un roman." },
      { de: "Sie werden einen Bericht schreiben.", fr: "Ils écriront un rapport." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde eine Postkarte schreiben.", fr: "Je vais écrire une carte postale." },
      { de: "Sie wird einen Artikel schreiben.", fr: "Elle va écrire un article." },
      { de: "Wir werden die Einkaufsliste schreiben.", fr: "Nous allons écrire la liste de courses." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihm schreiben, wenn ich seine Adresse hätte.", fr: "Je lui écrirais si j'avais son adresse." },
        { de: "Er würde ein Buch schreiben, wenn er Zeit hätte.", fr: "Il écrirait un livre s'il avait le temps." },
        { de: "Wir würden Ihnen gerne schreiben.", fr: "Nous vous écririons avec plaisir." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du ihm schreibst.", fr: "Il faut que tu lui écrives." },
      { de: "Ich möchte, dass sie mir schreibt.", fr: "Je veux qu'elle m'écrive." },
      { de: "Bevor wir schreiben, müssen wir nachdenken.", fr: "Avant que nous écrivions, nous devons réfléchir." }
    ]
  }
};
