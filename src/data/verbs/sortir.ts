import type { Verb } from '@/types/verb-types';

export const sortir: Verb = {
  infinitive: "sortir",
  translation: "hinausgehen / ausgehen / aussteigen",
  verbGroup: 3,
  indicatif: {
    présent: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
    passé_composé: { aux: "être", participle: "sorti" },
    imparfait: ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
    plus_que_parfait: { aux: "être", participle: "sorti" },
    futur_simple: ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"],
    futur_proche: { aux: "aller", participle: "sortir" }
  },
  subjonctif: { présent: ["sorte", "sortes", "sorte", "sortions", "sortiez", "sortent"] },
  conditionnel: { présent: ["sortirais", "sortirais", "sortirait", "sortirions", "sortiriez", "sortiraient"], passé: { aux: "être", participle: "sorti" } },
  imperatif: { present: ["sors", "sortons", "sortez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gehe heute Abend mit meinen Freunden aus.", fr: "Je sors avec mes amis ce soir." },
      { de: "Er geht mit dem Hund raus.", fr: "Il sort le chien." },
      { de: "Wann gehen wir raus?", fr: "Quand est-ce qu'on sort ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin gestern Abend ausgegangen.", fr: "Je suis sorti(e) hier soir." },
      { de: "Sie ist aus dem Haus gegangen.", fr: "Elle est sortie de la maison." },
      { de: "Wir sind für einen Spaziergang nach draußen gegangen.", fr: "Nous sommes sortis pour une promenade." }
    ],
    "indicatif_imparfait": [
        { de: "Früher ging sie jedes Wochenende aus.", fr: "Avant, elle sortait tous les week-ends." },
        { de: "Wir gingen oft zusammen aus.", fr: "Nous sortions souvent ensemble." },
        { de: "Die Katze ging immer durch das Fenster nach draußen.", fr: "Le chat sortait toujours par la fenêtre." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war bereits ausgegangen, als du anriefst.", fr: "J'étais déjà sorti(e) quand tu as appelé." },
        { de: "Sie war ausgegangen, ohne ihren Regenschirm mitzunehmen.", fr: "Elle était sortie sans prendre son parapluie." },
        { de: "Sie waren ausgegangen, bevor der Film anfing.", fr: "Ils étaient sortis avant le début du film." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde heute Abend nicht ausgehen.", fr: "Je ne sortirai pas ce soir." },
      { de: "Wirst du später ausgehen?", fr: "Tu sortiras plus tard ?" },
      { de: "Das neue Album wird nächsten Monat erscheinen.", fr: "Le nouvel album sortira le mois prochain." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde den Müll rausbringen.", fr: "Je vais sortir la poubelle." },
      { de: "Sie wird mit ihren Freunden ausgehen.", fr: "Elle va sortir avec ses amies." },
      { de: "Wir werden gleich ausgehen.", fr: "Nous allons sortir tout de suite." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde öfter ausgehen, wenn ich mehr Zeit hätte.", fr: "Je sortirais plus souvent si j'avais plus de temps." },
        { de: "Er würde nicht bei diesem Wetter ausgehen.", fr: "Il ne sortirait pas par ce temps." },
        { de: "Wir würden gerne mit euch ausgehen.", fr: "Nous aimerions sortir avec vous." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du ausgehst, um Luft zu schnappen.", fr: "Il faut que tu sortes prendre l'air." },
      { de: "Ich möchte nicht, dass er allein ausgeht.", fr: "Je ne veux pas qu'il sorte seul." },
      { de: "Bevor wir ausgehen, muss ich mich fertig machen.", fr: "Avant que nous sortions, je dois me préparer." }
    ]
  }
};
