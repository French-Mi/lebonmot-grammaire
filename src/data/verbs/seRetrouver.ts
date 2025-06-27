import type { Verb } from '@/types/verb-types';

export const seRetrouver: Verb = {
  infinitive: 'se retrouver',
  translation: 'sich treffen / sich wiederfinden',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["retrouve", "retrouves", "retrouve", "retrouvons", "retrouvez", "retrouvent"],
    passé_composé: { aux: 'être', participle: 'retrouvé' },
    imparfait: ["retrouvais", "retrouvais", "retrouvait", "retrouvions", "retrouviez", "retrouvaient"],
    plus_que_parfait: { aux: 'être', participle: 'retrouvé' },
    futur_simple: ["retrouverai", "retrouveras", "retrouvera", "retrouverons", "retrouverez", "retrouveront"],
    futur_proche: { aux: "aller", participle: "se retrouver" }
  },
  subjonctif: { présent: ["retrouve", "retrouves", "retrouve", "retrouvions", "retrouviez", "retrouvent"] },
  conditionnel: {
    présent: ["retrouverais", "retrouverais", "retrouverait", "retrouverions", "retrouveriez", "retrouveraient"],
    passé: { aux: 'être', participle: 'retrouvé' }
  },
  imperatif: { present: ["retrouve-toi", "retrouvons-nous", "retrouvez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Wir treffen uns oft im Café.", fr: "Nous nous retrouvons souvent au café." },
      { de: "Wo treffen wir uns?", fr: "Où est-ce qu'on se retrouve ?" },
      { de: "Ich befinde mich in einer komplizierten Situation.", fr: "Je me retrouve dans une situation compliquée." }
    ],
    "indicatif_passé_composé": [
      { de: "Wir haben uns zufällig in Paris getroffen.", fr: "Nous nous sommes retrouvés par hasard à Paris." },
      { de: "Sie hat sich nach dem Meeting allein wiedergefunden.", fr: "Elle s'est retrouvée seule après la réunion." },
      { de: "Habt ihr euch am Bahnhof getroffen?", fr: "Vous vous êtes retrouvés à la gare ?" }
    ],
    "indicatif_imparfait": [
        { de: "Wir trafen uns jeden Freitag nach der Schule.", fr: "Nous nous retrouvions tous les vendredis après l'école." },
        { de: "Er fand sich oft allein wieder und dachte nach.", fr: "Il se retrouvait souvent seul à réfléchir." },
        { de: "Damals trafen wir uns bei mir.", fr: "À cette époque, on se retrouvait chez moi." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Wir hatten uns am verabredeten Ort getroffen.", fr: "Nous nous étions retrouvés au lieu convenu." },
        { de: "Sie hatte sich in einer Sackgasse wiedergefunden.", fr: "Elle s'était retrouvée dans une impasse." }
    ],
    "indicatif_futur_simple": [
      { de: "Wir werden uns morgen um 18 Uhr treffen.", fr: "Nous nous retrouverons demain à 18h." },
      { de: "Du wirst dich in einer neuen Stadt wiederfinden.", fr: "Tu te retrouveras dans une nouvelle ville." },
      { de: "Sie werden sich für das Abendessen treffen.", fr: "Ils se retrouveront pour le dîner." }
    ],
    "indicatif_futur_proche": [
      { de: "Wir werden uns gleich vor dem Kino treffen.", fr: "Nous allons nous retrouver devant le cinéma." },
      { de: "Du wirst dich mit alten Freunden treffen.", fr: "Tu vas te retrouver avec de vieux amis." },
      { de: "Sie wird sich bald in einer besseren Position wiederfinden.", fr: "Elle va se retrouver dans une meilleure position bientôt." }
    ],
    "conditionnel_présent": [
        { de: "Wir könnten uns nächste Woche treffen.", fr: "Nous pourrions nous retrouver la semaine prochaine." },
        { de: "Er würde sich allein wiederfinden, wenn er so weitermacht.", fr: "Il se retrouverait seul s'il continuait comme ça." }
    ],
    "conditionnel_passé": [
      { de: "Wir hätten uns getroffen, wenn der Zug pünktlich gewesen wäre.", fr: "Nous nous serions retrouvés si le train avait été à l'heure." }
    ],
    "subjonctif_présent": [
      { de: "Ich schlage vor, dass wir uns im Restaurant treffen.", fr: "Je propose que nous nous retrouvions au restaurant." },
      { de: "Es ist wichtig, dass du dich nicht allein wiederfindest.", fr: "Il est important que tu ne te retrouves pas seul(e)." }
    ]
  }
};
