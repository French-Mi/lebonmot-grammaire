import type { Verb } from '@/types/verb-types';

export const controler: Verb = {
  infinitive: "contrôler",
  translation: "kontrollieren, steuern",
  verbGroup: 1,
  indicatif: {
    présent: ["contrôle", "contrôles", "contrôle", "contrôlons", "contrôlez", "contrôlent"],
    passé_composé: { aux: "avoir", participle: "contrôlé" },
    imparfait: ["contrôlais", "contrôlais", "contrôlait", "contrôlions", "contrôliez", "contrôlaient"],
    plus_que_parfait: { aux: "avoir", participle: "contrôlé" },
    futur_simple: ["contrôlerai", "contrôleras", "contrôlera", "contrôlerons", "contrôlerez", "contrôleront"],
    futur_proche: { aux: "aller", participle: "contrôler" }
  },
  subjonctif: {
    présent: ["contrôle", "contrôles", "contrôle", "contrôlions", "contrôliez", "contrôlent"]
  },
  conditionnel: {
    présent: ["contrôlerais", "contrôlerais", "contrôlerait", "contrôlerions", "contrôleriez", "contrôleraient"],
    passé: { aux: "avoir", participle: "contrôlé" }
  },
  imperatif: {
    present: ["contrôle", "contrôlons", "contrôlez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich kontrolliere meine Emotionen.", fr: "Je contrôle mes émotions." },
      { de: "Der Polizist kontrolliert die Papiere des Fahrers.", fr: "Le policier contrôle les papiers du conducteur." },
      { de: "Wir kontrollieren die Qualität unserer Produkte.", fr: "Nous contrôlons la qualité de nos produits." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Rechnungen überprüft.", fr: "J'ai contrôlé les factures." },
      { de: "Hast du kontrolliert, ob die Tür geschlossen ist?", fr: "As-tu contrôlé si la porte est fermée ?" },
      { de: "Der Techniker hat die Maschine überprüft.", fr: "Le technicien a contrôlé la machine." }
    ],
    "indicatif_imparfait": [
        { de: "Er kontrollierte jeden Morgen seine E-Mails.", fr: "Il contrôlait ses e-mails chaque matin." },
        { de: "Damals kontrollierte die Regierung die Medien.", fr: "À cette époque, le gouvernement contrôlait les médias." },
        { de: "Ihr habt die Arbeit der anderen kontrolliert.", fr: "Vous contrôliez le travail des autres." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte kontrolliert, ob alles in Ordnung war.", fr: "J'avais contrôlé si tout était en ordre." },
        { de: "Der Zöllner hatte unser Gepäck bereits kontrolliert.", fr: "Le douanier avait déjà contrôlé nos bagages." },
        { de: "Sie hatten die Situation nicht mehr unter Kontrolle.", fr: "Ils n'avaient plus contrôlé la situation." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Ergebnisse morgen überprüfen.", fr: "Je contrôlerai les résultats demain." },
      { de: "Ein Roboter wird diesen Prozess steuern.", fr: "Un robot contrôlera ce processus." },
      { de: "Wir werden die Ausgaben besser kontrollieren.", fr: "Nous contrôlerons mieux les dépenses." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde sofort deine Arbeit kontrollieren.", fr: "Je vais contrôler ton travail tout de suite." },
      { de: "Der Pilot wird das Flugzeug manuell steuern.", fr: "Le pilote va contrôler l'avion manuellement." },
      { de: "Sie werden die Tickets am Eingang kontrollieren.", fr: "Ils vont contrôler les billets à l'entrée." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Fakten an deiner Stelle überprüfen.", fr: "Je contrôlerais les faits à ta place." },
        { de: "Könnten Sie das bitte kontrollieren?", fr: "Pourriez-vous contrôler cela, s'il vous plaît ?" },
        { de: "Er würde seine Wut besser kontrollieren, wenn er könnte.", fr: "Il contrôlerait mieux sa colère s'il le pouvait." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte die Informationen überprüfen sollen.", fr: "J'aurais dû contrôler l'information." },
        { de: "Sie hätten die Situation besser kontrollieren können.", fr: "Ils auraient pu mieux contrôler la situation." },
        { de: "Er hätte die Bremsen vor der Abfahrt kontrolliert.", fr: "Il aurait contrôlé les freins avant de partir." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du deine Impulse kontrollierst.", fr: "Il faut que tu contrôles tes impulsions." },
      { de: "Ich möchte, dass wir gemeinsam das Budget kontrollieren.", fr: "Je veux que nous contrôlions le budget ensemble." },
      { de: "Es ist unwahrscheinlich, dass sie alles kontrollieren.", fr: "Il est peu probable qu'ils contrôlent tout." }
    ]
  }
};
