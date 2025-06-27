import type { Verb } from '@/types/verb-types';

export const rencontrer: Verb = {
  infinitive: "rencontrer",
  translation: "treffen / kennenlernen",
  verbGroup: 1,
  indicatif: {
    présent: ["rencontre", "rencontres", "rencontre", "rencontrons", "rencontrez", "rencontrent"],
    passé_composé: { aux: "avoir", participle: "rencontré" },
    imparfait: ["rencontrais", "rencontrais", "rencontrait", "rencontrions", "rencontriez", "rencontraient"],
    plus_que_parfait: { aux: "avoir", participle: "rencontré" },
    futur_simple: ["rencontrerai", "rencontreras", "rencontrera", "rencontrerons", "rencontrerez", "rencontreront"],
    futur_proche: { aux: "aller", participle: "rencontrer" }
  },
  subjonctif: { présent: ["rencontre", "rencontres", "rencontre", "rencontrions", "rencontriez", "rencontrent"] },
  conditionnel: { présent: ["rencontrerais", "rencontrerais", "rencontrerait", "rencontrerions", "rencontreriez", "rencontreraient"], passé: { aux: "avoir", participle: "rencontré" } },
  imperatif: { present: ["rencontre", "rencontrons", "rencontrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich treffe meine Freunde im Café.", fr: "Je rencontre mes amis au café." },
      { de: "Er trifft oft auf Schwierigkeiten.", fr: "Il rencontre souvent des difficultés." },
      { de: "Wir lernen interessante Leute kennen.", fr: "Nous rencontrons des gens intéressants." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe sie letzte Woche kennengelernt.", fr: "Je l'ai rencontrée la semaine dernière." },
      { de: "Hast du jemals einen Star getroffen?", fr: "As-tu déjà rencontré une star ?" },
      { de: "Wir haben ein unerwartetes Problem angetroffen.", fr: "Nous avons rencontré un problème inattendu." }
    ],
    "indicatif_imparfait": [
        { de: "Wir trafen uns jeden Freitag.", fr: "Nous nous rencontrions tous les vendredis." },
        { de: "Damals traf er viele Künstler.", fr: "À cette époque, il rencontrait de nombreux artistes." },
        { de: "Sie traf oft ihre Cousine im Park.", fr: "Elle rencontrait souvent sa cousine au parc." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihn vor der Konferenz getroffen.", fr: "Je l'avais rencontré avant la conférence." },
        { de: "Sie hatte noch nie jemanden wie ihn getroffen.", fr: "Elle n'avait jamais rencontré quelqu'un comme lui." },
        { de: "Wir hatten auf unserer Reise viele Hindernisse angetroffen.", fr: "Nous avions rencontré de nombreux obstacles lors de notre voyage." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde ihn morgen treffen.", fr: "Je le rencontrerai demain." },
      { de: "Du wirst deinen Seelenverwandten treffen.", fr: "Tu rencontreras ton âme sœur." },
      { de: "Wir werden unsere neuen Nachbarn treffen.", fr: "Nous rencontrerons nos nouveaux voisins." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde meine Tante treffen.", fr: "Je vais rencontrer ma tante." },
      { de: "Er wird den Präsidenten treffen.", fr: "Il va rencontrer le président." },
      { de: "Wir werden viele neue Leute kennenlernen.", fr: "Nous allons rencontrer beaucoup de nouvelles personnes." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn gerne persönlich treffen.", fr: "J'aimerais le rencontrer en personne." },
        { de: "Wir könnten uns auf halbem Weg treffen.", fr: "Nous pourrions nous rencontrer à mi-chemin." },
        { de: "Er würde den König treffen, wenn er die Chance hätte.", fr: "Il rencontrerait le roi s'il en avait l'occasion." }
    ],
    "subjonctif_présent": [
      { de: "Es ist unwahrscheinlich, dass ich ihn treffe.", fr: "Il est peu probable que je le rencontre." },
      { de: "Ich möchte, dass du meine Familie kennenlernst.", fr: "Je veux que tu rencontres ma famille." },
      { de: "Bevor wir ihn treffen, müssen wir uns vorbereiten.", fr: "Avant que nous le rencontrions, nous devons nous préparer." }
    ]
  }
};
