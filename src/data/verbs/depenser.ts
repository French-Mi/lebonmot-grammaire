import type { Verb } from '@/types/verb-types';

export const depenser: Verb = {
  infinitive: "dépenser",
  translation: "ausgeben",
  verbGroup: 1,
  indicatif: {
    présent: ["dépense", "dépenses", "dépense", "dépensons", "dépensez", "dépensent"],
    passé_composé: { aux: "avoir", participle: "dépensé" },
    imparfait: ["dépensais", "dépensais", "dépensait", "dépensions", "dépensiez", "dépensaient"],
    plus_que_parfait: { aux: "avoir", participle: "dépensé" },
    futur_simple: ["dépenserai", "dépenseras", "dépensera", "dépenserons", "dépenserez", "dépenseront"],
    futur_proche: { aux: "aller", participle: "dépenser" }
  },
  subjonctif: { présent: ["dépense", "dépenses", "dépense", "dépensions", "dépensiez", "dépensent"] },
  conditionnel: { présent: ["dépenserais", "dépenserais", "dépenserait", "dépenserions", "dépenseriez", "dépenseraient"], passé: { aux: "avoir", participle: "dépensé" } },
  imperatif: { present: ["dépense", "dépensons", "dépensez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gebe zu viel Geld aus.", fr: "Je dépense trop d'argent." },
      { de: "Wie viel gibst du pro Monat aus?", fr: "Combien tu dépenses par mois ?" },
      { de: "Sie gibt viel Energie für dieses Projekt auf.", fr: "Elle dépense beaucoup d'énergie pour ce projet." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein ganzes Geld ausgegeben.", fr: "J'ai dépensé tout mon argent." },
      { de: "Er hat viel für Geschenke ausgegeben.", fr: "Il a dépensé beaucoup pour des cadeaux." },
      { de: "Wir haben im Urlaub zu viel ausgegeben.", fr: "Nous avons trop dépensé en vacances." }
    ],
    "indicatif_imparfait": [
        { de: "Früher gab ich mein Geld für Süßigkeiten aus.", fr: "Avant, je dépensais mon argent en bonbons." },
        { de: "Sie gab ihre ganze Zeit für die Malerei aus.", fr: "Elle dépensait tout son temps à peindre." },
        { de: "Sie gaben ihr Geld ohne nachzudenken aus.", fr: "Ils dépensaient leur argent sans réfléchir." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte all meine Ersparnisse ausgegeben.", fr: "J'avais dépensé toutes mes économies." },
        { de: "Sie hatte mehr ausgegeben als geplant.", fr: "Elle avait dépensé plus que prévu." },
        { de: "Wir hatten das Budget bereits ausgegeben.", fr: "Nous avions déjà dépensé le budget." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde nicht viel Geld ausgeben.", fr: "Je ne dépenserai pas beaucoup d'argent." },
      { de: "Du wirst dein gesamtes Gehalt ausgeben.", fr: "Tu dépenseras tout ton salaire." },
      { de: "Wir werden klug ausgeben.", fr: "Nous dépenserons intelligemment." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde heute Abend Geld ausgeben.", fr: "Je vais dépenser de l'argent ce soir." },
      { de: "Wirst du alles ausgeben?", fr: "Tu vas tout dépenser ?" },
      { de: "Sie werden es nicht für nutzlose Dinge ausgeben.", fr: "Ils ne vont pas le dépenser pour des choses inutiles." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde nicht so viel ausgeben.", fr: "Je ne dépenserais pas autant." },
        { de: "An deiner Stelle würde ich weniger ausgeben.", fr: "À ta place, je dépenserais moins." },
        { de: "Er würde sein ganzes Geld für Reisen ausgeben.", fr: "Il dépenserait tout son argent en voyages." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du weniger ausgibst.", fr: "Il faut que tu dépenses moins." },
      { de: "Ich will nicht, dass sie ihr ganzes Geld ausgibt.", fr: "Je ne veux pas qu'elle dépense tout son argent." },
      { de: "Bevor wir Geld ausgeben, müssen wir einen Plan machen.", fr: "Avant que nous dépensions de l'argent, nous devons faire un plan." }
    ]
  }
};
