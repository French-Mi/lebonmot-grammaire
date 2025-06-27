import type { Verb } from '@/types/verb-types';

export const signaler: Verb = {
  infinitive: "signaler",
  translation: "melden / signalisieren",
  verbGroup: 1,
  indicatif: {
    présent: ["signale", "signales", "signale", "signalons", "signalez", "signalent"],
    passé_composé: { aux: "avoir", participle: "signalé" },
    imparfait: ["signalais", "signalais", "signalait", "signalions", "signaliez", "signalaient"],
    plus_que_parfait: { aux: "avoir", participle: "signalé" },
    futur_simple: ["signalerai", "signaleras", "signalera", "signalerons", "signalerez", "signaleront"],
    futur_proche: { aux: "aller", participle: "signaler" }
  },
  subjonctif: { présent: ["signale", "signales", "signale", "signalions", "signaliez", "signalent"] },
  conditionnel: { présent: ["signalerais", "signalerais", "signalerait", "signalions", "signalieriez", "signaleraient"], passé: { aux: "avoir", participle: "signalé" } },
  imperatif: { present: ["signale", "signalons", "signalez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich melde ein Problem.", fr: "Je signale un problème." },
      { de: "Das Schild signalisiert Gefahr.", fr: "Le panneau signale un danger." },
      { de: "Melden Sie jeden verdächtigen Gegenstand.", fr: "Signalez tout objet suspect." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Fehler gemeldet.", fr: "J'ai signalé l'erreur." },
      { de: "Der Zeuge hat den Vorfall gemeldet.", fr: "Le témoin a signalé l'incident." },
      { de: "Sie haben eine Panne gemeldet.", fr: "Ils ont signalé une panne." }
    ],
    "indicatif_imparfait": [
        { de: "Der Leuchtturm signalisierte den Schiffen den Weg.", fr: "Le phare signalait le chemin aux navires." },
        { de: "Er meldete jede Anomalie.", fr: "Il signalait chaque anomalie." },
        { de: "Wir signalisierten unsere Anwesenheit.", fr: "Nous signalions notre présence." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Pilot hatte ein Problem gemeldet.", fr: "Le pilote avait signalé un problème." },
        { de: "Ich hatte die Änderung bereits gemeldet.", fr: "J'avais déjà signalé le changement." },
        { de: "Sie hatten die Gefahr nicht gemeldet.", fr: "Ils n'avaient pas signalé le danger." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es meinem Vorgesetzten melden.", fr: "Je le signalerai à mon supérieur." },
      { de: "Der Kapitän wird unsere Position signalisieren.", fr: "Le capitaine signalera notre position." },
      { de: "Wir werden alle Änderungen melden.", fr: "Nous signalerons tous les changements." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dieses Problem melden.", fr: "Je vais signaler ce problème." },
      { de: "Sie wird ihre Ankunft signalisieren.", fr: "Elle va signaler son arrivée." },
      { de: "Wir werden den Fehler dem Support melden.", fr: "Nous allons signaler l'erreur au support." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde das Problem sofort melden.", fr: "Je signalerais le problème immédiatement." },
        { de: "Er würde jede verdächtige Aktivität melden.", fr: "Il signalerait toute activité suspecte." },
        { de: "Würden Sie bitte einen Fehler melden?", fr: "Signaleriez-vous une erreur, s'il vous plaît ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du jedes Problem meldest.", fr: "Il est important que tu signales chaque problème." },
      { de: "Ich möchte, dass Sie es mir melden.", fr: "Je veux que vous me le signaliez." },
      { de: "Bevor er etwas tut, ist es besser, dass er es meldet.", fr: "Avant qu'il ne fasse quoi que ce soit, il vaut mieux qu'il le signale." }
    ]
  }
};
