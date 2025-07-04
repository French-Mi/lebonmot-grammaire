import type { Verb } from '@/types/verb-types';

export const mourir: Verb = {
  infinitive: "mourir",
  translation: "sterben",
  verbGroup: 3,
  indicatif: {
    présent: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
    passé_composé: { aux: "être", participle: "mort" },
    imparfait: ["mourais", "mourais", "mourait", "mourions", "mouriez", "mouraient"],
    plus_que_parfait: { aux: "être", participle: "mort" },
    futur_simple: ["mourrai", "mourras", "mourra", "mourrons", "mourrez", "mourront"],
    futur_proche: { aux: "aller", participle: "mourir" }
  },
  subjonctif: {
    présent: ["meure", "meures", "meure", "mourions", "mouriez", "meurent"]
  },
  conditionnel: {
    présent: ["mourrais", "mourrais", "mourrait", "mourrions", "mourriez", "mourraient"],
    passé: { aux: "être", participle: "mort" }
  },
  imperatif: {
    present: ["meurs", "mourons", "mourez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich sterbe vor Hunger.", fr: "Je meurs de faim." },
      { de: "Die Blumen sterben ohne Wasser.", fr: "Les fleurs meurent sans eau." },
      { de: "Wir alle sterben eines Tages.", fr: "Nous mourons tous un jour." }
    ],
    "indicatif_passé_composé": [
      { de: "Er ist letztes Jahr gestorben.", fr: "Il est mort l'année dernière." },
      { de: "Viele Soldaten sind im Krieg gefallen (gestorben).", fr: "Beaucoup de soldats sont morts à la guerre." },
      { de: "Sie ist im Alter von 90 Jahren gestorben.", fr: "Elle est morte à l'âge de 90 ans." }
    ],
    "indicatif_imparfait": [
        { de: "Die Leute starben oft an einfachen Krankheiten.", fr: "Les gens mouraient souvent de maladies simples." },
        { de: "Ich hatte das Gefühl, innerlich zu sterben.", fr: "Je sentais que je mourais de l'intérieur." },
        { de: "Die Kerzen erloschen (starben) eine nach der anderen.", fr: "Les bougies mouraient une par une." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er war gestorben, bevor die Hilfe eintraf.", fr: "Il était mort avant l'arrivée des secours." },
        { de: "Sie waren an Altersschwäche gestorben.", fr: "Ils étaient morts de vieillesse." },
        { de: "Die Hoffnung war mit ihm gestorben.", fr: "L'espoir était mort avec lui." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde vor Langeweile sterben, wenn du gehst.", fr: "Je mourrai d'ennui si tu pars." },
      { de: "Diese Tradition wird niemals sterben.", fr: "Cette tradition ne mourra jamais." },
      { de: "Wir werden alle eines Tages sterben.", fr: "Nous mourrons tous un jour." }
    ],
    "indicatif_futur_proche": [
      { de: "Diese Pflanze wird sterben, wenn du sie nicht gießt.", fr: "Cette plante va mourir si tu ne l'arroses pas." },
      { de: "Ich werde vor Lachen sterben!", fr: "Je vais mourir de rire !" },
      { de: "Sie werden sterben, wenn niemand kommt.", fr: "Ils vont mourir si personne ne vient." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde für dich sterben.", fr: "Je mourrais pour toi." },
        { de: "Ohne Wasser würden die Tiere sterben.", fr: "Sans eau, les animaux mourraient." },
        { de: "Er würde lieber sterben, als seine Prinzipien zu verraten.", fr: "Il préférerait mourir plutôt que de trahir ses principes." }
    ],
     "conditionnel_passé": [
        { de: "Ich wäre gestorben, wenn du mich nicht gerettet hättest.", fr: "Je serais mort(e) si tu ne m'avais pas sauvé(e)." },
        { de: "Sie wären ohne Hilfe gestorben.", fr: "Ils seraient morts sans aide." },
        { de: "Er wäre vor Scham gestorben.", fr: "Il serait mort de honte." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass du stirbst.", fr: "Je ne veux pas que tu meures." },
      { de: "Es ist traurig, dass so viele Menschen an Hunger sterben.", fr: "Il est triste que tant de gens meurent de faim." },
      { de: "Bevor ich sterbe, möchte ich die Welt sehen.", fr: "Avant que je meure, je veux voir le monde." }
    ]
  }
};
