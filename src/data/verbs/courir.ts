import type { Verb } from '@/types/verb-types';

export const courir: Verb = {
  infinitive: "courir",
  translation: "laufen / rennen",
  verbGroup: 3,
  indicatif: {
    présent: ["cours", "cours", "court", "courons", "courez", "courent"],
    passé_composé: { aux: "avoir", participle: "couru" },
    imparfait: ["courais", "courais", "courait", "courions", "couriez", "couraient"],
    plus_que_parfait: { aux: "avoir", participle: "couru" },
    futur_simple: ["courrai", "courras", "courra", "courrons", "courrez", "courront"],
    futur_proche: { aux: "aller", participle: "courir" }
  },
  subjonctif: { présent: ["coure", "coures", "coure", "courions", "couriez", "courent"] },
  conditionnel: { présent: ["courrais", "courrais", "courrait", "courrions", "courriez", "courraient"], passé: { aux: "avoir", participle: "couru" } },
  imperatif: { present: ["cours", "courons", "courez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich laufe jeden Morgen.", fr: "Je cours tous les matins." },
      { de: "Lauf schneller!", fr: "Cours plus vite !" },
      { de: "Die Kinder rennen auf dem Spielplatz.", fr: "Les enfants courent dans la cour de récréation." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin einen Marathon gelaufen.", fr: "J'ai couru un marathon." },
      { de: "Sie ist gerannt, um den Bus zu erwischen.", fr: "Elle a couru pour attraper le bus." },
      { de: "Wir sind um den See gelaufen.", fr: "Nous avons couru autour du lac." }
    ],
    "indicatif_imparfait": [
        { de: "Als er jung war, lief er sehr schnell.", fr: "Quand il était jeune, il courait très vite." },
        { de: "Wir liefen, um uns aufzuwärmen.", fr: "Nous courions pour nous échauffer." },
        { de: "Du bist immer im Wald gelaufen.", fr: "Tu courais toujours dans la forêt." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war noch nie so schnell gelaufen.", fr: "Je n'avais jamais couru aussi vite." },
        { de: "Er hatte zehn Kilometer gelaufen.", fr: "Il avait couru dix kilomètres." },
        { de: "Sie war gerannt, weil sie Angst hatte.", fr: "Elle avait couru parce qu'elle avait peur." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen 5 km laufen.", fr: "Je courrai 5 km demain." },
      { de: "Du wirst schneller laufen als er.", fr: "Tu courras plus vite que lui." },
      { de: "Sie werden im Park laufen.", fr: "Ils courront dans le parc." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde jetzt laufen gehen.", fr: "Je vais aller courir maintenant." },
      { de: "Sie wird einen Marathon laufen.", fr: "Elle va courir un marathon." },
      { de: "Wir werden um den Block rennen.", fr: "Nous allons courir autour du pâté de maisons." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde jeden Tag laufen, wenn ich Zeit hätte.", fr: "Je courrais tous les jours si j'avais le temps." },
        { de: "Er würde schneller laufen, wenn er neue Schuhe hätte.", fr: "Il courrait plus vite s'il avait de nouvelles chaussures." },
        { de: "Wir würden zur Hilfe eilen.", fr: "Nous courrions à l'aide." }
    ],
    "subjonctif_présent": [
      { de: "Du musst rennen, um den Zug zu erwischen.", fr: "Il faut que tu coures pour attraper le train." },
      { de: "Ich will nicht, dass sie im Haus rennen.", fr: "Je ne veux pas qu'ils courent dans la maison." },
      { de: "Es ist besser, dass wir jetzt laufen.", fr: "Il vaut mieux que nous courions maintenant." }
    ]
  }
};
