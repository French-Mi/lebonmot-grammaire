import type { Verb } from '@/types/verb-types';

export const accueillir: Verb = {
  infinitive: "accueillir",
  translation: "empfangen, aufnehmen",
  verbGroup: 3,
  indicatif: {
    présent: ["accueille", "accueilles", "accueille", "accueillons", "accueillez", "accueillent"],
    passé_composé: { aux: "avoir", participle: "accueilli" },
    imparfait: ["accueillais", "accueillais", "accueillait", "accueillions", "accueilliez", "accueillaient"],
    plus_que_parfait: { aux: "avoir", participle: "accueilli" },
    futur_simple: ["accueillerai", "accueilleras", "accueillera", "accueillerons", "accueillerez", "accueilleront"],
    futur_proche: { aux: "aller", participle: "accueillir" }
  },
  subjonctif: {
    présent: ["accueille", "accueilles", "accueille", "accueillions", "accueilliez", "accueillent"]
  },
  conditionnel: {
    présent: ["accueillerais", "accueillerais", "accueillerait", "accueillerions", "accueilleriez", "accueilleraient"],
    passé: { aux: "avoir", participle: "accueilli" }
  },
  imperatif: {
    present: ["accueille", "accueillons", "accueillez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich empfange die Gäste an der Tür.", fr: "J'accueille les invités à la porte." },
      { de: "Das Hotel empfängt seine Kunden 24 Stunden am Tag.", fr: "L'hôtel accueille ses clients 24h/24." },
      { de: "Wir empfangen heute Abend Freunde.", fr: "Nous accueillons des amis ce soir." }
    ],
    "indicatif_passé_composé": [
      { de: "Wir haben deine Idee gut aufgenommen.", fr: "Nous avons bien accueilli ton idée." },
      { de: "Sie hat uns mit einem großen Lächeln empfangen.", fr: "Elle nous a accueillis avec un grand sourire." },
      { de: "Habt ihr die neuen Nachbarn empfangen?", fr: "Avez-vous accueilli les nouveaux voisins ?" }
    ],
    "indicatif_imparfait": [
        { de: "Meine Großmutter empfing uns immer mit Kuchen.", fr: "Ma grand-mère nous accueillait toujours avec du gâteau." },
        { de: "Das Dorf empfing jeden Sommer viele Touristen.", fr: "Le village accueillait de nombreux touristes chaque été." },
        { de: "Du empfingst die Nachricht mit Gleichgültigkeit.", fr: "Tu accueillais la nouvelle avec indifférence." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte die Kritik schlecht aufgenommen.", fr: "Il avait mal accueilli la critique." },
        { de: "Wir hatten alles vorbereitet, um sie gut zu empfangen.", fr: "Nous avions tout préparé pour bien les accueillir." },
        { de: "Sie hatte die Flüchtlinge bei sich aufgenommen.", fr: "Elle avait accueilli les réfugiés chez elle." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich am Bahnhof empfangen.", fr: "Je t'accueillerai à la gare." },
      { de: "Die Stadt wird nächstes Jahr die Olympischen Spiele ausrichten (empfangen).", fr: "La ville accueillera les Jeux Olympiques l'année prochaine." },
      { de: "Sie werden die Nachricht mit Freude aufnehmen.", fr: "Ils accueilleront la nouvelle avec joie." }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden eine Delegation empfangen.", fr: "Nous allons accueillir une délégation." },
      { de: "Der Präsident wird den Premierminister empfangen.", fr: "Le président va accueillir le premier ministre." },
      { de: "Ihr werdet eine neue Schülerin in eurer Klasse aufnehmen.", fr: "Vous allez accueillir une nouvelle élève dans votre classe." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn mit offenen Armen empfangen.", fr: "Je l'accueillerais à bras ouverts." },
        { de: "Würdest du einen Austauschschüler aufnehmen?", fr: "Accueillerais-tu un étudiant d'échange ?" },
        { de: "Wir würden mehr Leute aufnehmen, wenn wir mehr Platz hätten.", fr: "Nous accueillerions plus de monde si nous avions plus de place." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich empfangen, wenn du mich angerufen hättest.", fr: "Je t'aurais accueilli(e) si tu m'avais appelé." },
        { de: "Sie hätten die Nachricht besser aufgenommen, wenn du es ihnen anders gesagt hättest.", fr: "Ils auraient mieux accueilli la nouvelle si tu le leur avais dit différemment." },
        { de: "Sie hätte ihn aufgenommen, aber er wollte nicht.", fr: "Elle l'aurait accueilli, mais il n'a pas voulu." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass man neue Ideen gut aufnimmt.", fr: "Il est important qu'on accueille bien les nouvelles idées." },
      { de: "Ich wünsche, dass ihr ihn herzlich empfangt.", fr: "Je souhaite que vous l'accueilliez chaleureusement." },
      { de: "Damit sie uns empfangen, müssen wir pünktlich sein.", fr: "Pour qu'ils nous accueillent, il faut être à l'heure." }
    ]
  }
};
