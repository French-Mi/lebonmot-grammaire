import type { Verb } from '@/types/verb-types';

export const sentir: Verb = {
  infinitive: "sentir",
  translation: "fühlen, riechen",
  verbGroup: 3,
  indicatif: {
    présent: ["sens", "sens", "sent", "sentons", "sentez", "sentent"],
    passé_composé: { aux: "avoir", participle: "senti" },
    imparfait: ["sentais", "sentais", "sentait", "sentions", "sentiez", "sentaient"],
    plus_que_parfait: { aux: "avoir", participle: "senti" },
    futur_simple: ["sentirai", "sentiras", "sentira", "sentirons", "sentirez", "sentiront"],
    futur_proche: { aux: "aller", participle: "sentir" }
  },
  subjonctif: {
    présent: ["sente", "sentes", "sente", "sentions", "sentiez", "sentent"]
  },
  conditionnel: {
    présent: ["sentirais", "sentirais", "sentirait", "sentirions", "sentiriez", "sentiraient"],
    passé: { aux: "avoir", participle: "senti" }
  },
  imperatif: {
    present: ["sens", "sentons", "sentez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich fühle mich heute gut.", fr: "Je me sens bien aujourd'hui." },
      { de: "Riechst du diesen guten Geruch von Kuchen?", fr: "Tu sens cette bonne odeur de gâteau ?" },
      { de: "Sie riechen die Blumen im Garten.", fr: "Ils sentent les fleurs dans le jardin." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe gespürt, dass etwas nicht stimmte.", fr: "J'ai senti que quelque chose n'allait pas." },
      { de: "Hast du den Regen gerochen, bevor er kam?", fr: "As-tu senti la pluie avant qu'elle n'arrive ?" },
      { de: "Sie hat sich nach dem Sport müde gefühlt.", fr: "Elle s'est sentie fatiguée après le sport." }
    ],
    "indicatif_imparfait": [
        { de: "Er fühlte sich in dieser Stadt immer allein.", fr: "Il se sentait toujours seul dans cette ville." },
        { de: "Wir rochen das Meer vom Balkon aus.", fr: "Nous sentions la mer depuis le balcon." },
        { de: "Ihr hattet das Gefühl (fühltet), dass es eine Falle war.", fr: "Vous sentiez que c'était un piège." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte seine Anwesenheit gespürt, bevor ich ihn sah.", fr: "J'avais senti sa présence avant de le voir." },
        { de: "Sie hatte sich noch nie so glücklich gefühlt.", fr: "Elle ne s'était jamais sentie aussi heureuse." },
        { de: "Wir hatten den Geruch von Verbranntem gerochen.", fr: "Nous avions senti l'odeur de brûlé." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst dich nach einem Nickerchen besser fühlen.", fr: "Tu te sentiras mieux après une sieste." },
      { de: "Man wird den Frühling bald riechen.", fr: "On sentira bientôt le printemps." },
      { de: "Wir werden die Auswirkungen dieser Entscheidung spüren.", fr: "Nous sentirons les effets de cette décision." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich bald besser fühlen.", fr: "Je vais bientôt me sentir mieux." },
      { de: "Du wirst den Unterschied sofort spüren.", fr: "Tu vas sentir la différence tout de suite." },
      { de: "Sie werden riechen, dass das Essen fertig ist.", fr: "Ils vont sentir que le repas est prêt." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich geehrt fühlen.", fr: "Je me sentirais honoré(e)." },
        { de: "Würdest du den Unterschied riechen?", fr: "Sentirais-tu la différence ?" },
        { de: "Er würde sich besser fühlen, wenn du ihn besuchen würdest.", fr: "Il se sentirait mieux si tu lui rendais visite." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich verraten gefühlt.", fr: "Je me serais senti(e) trahi(e)." },
        { de: "Du hättest die Gefahr gespürt, wenn du aufgepasst hättest.", fr: "Tu aurais senti le danger si tu avais été attentif." },
        { de: "Wir hätten uns wohler gefühlt.", fr: "Nous nous serions sentis plus à l'aise." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte nicht, dass du dich schlecht fühlst.", fr: "Je ne veux pas que tu te sentes mal." },
      { de: "Es ist wichtig, dass man sich an seinem Arbeitsplatz wohlfühlt.", fr: "Il est important que l'on se sente bien à son poste de travail." },
      { de: "Damit sie den Duft riechen, müssen wir näher herangehen.", fr: "Pour qu'ils sentent le parfum, nous devons nous approcher." }
    ]
  }
};
