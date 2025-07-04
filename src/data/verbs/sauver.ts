import type { Verb } from '@/types/verb-types';

export const sauver: Verb = {
  infinitive: "sauver",
  translation: "retten, speichern",
  verbGroup: 1,
  indicatif: {
    présent: ["sauve", "sauves", "sauve", "sauvons", "sauvez", "sauvent"],
    passé_composé: { aux: "avoir", participle: "sauvé" },
    imparfait: ["sauvais", "sauvais", "sauvait", "sauvions", "sauviez", "sauvaient"],
    plus_que_parfait: { aux: "avoir", participle: "sauvé" },
    futur_simple: ["sauverai", "sauveras", "sauvera", "sauverons", "sauverez", "sauveront"],
    futur_proche: { aux: "aller", participle: "sauver" }
  },
  subjonctif: {
    présent: ["sauve", "sauves", "sauve", "sauvions", "sauviez", "sauvent"]
  },
  conditionnel: {
    présent: ["sauverais", "sauverais", "sauverait", "sauverions", "sauveriez", "sauveraient"],
    passé: { aux: "avoir", participle: "sauvé" }
  },
  imperatif: {
    present: ["sauve", "sauvons", "sauvez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich speichere mein Dokument.", fr: "Je sauve mon document." },
      { de: "Der Feuerwehrmann rettet die Katze vom Baum.", fr: "Le pompier sauve le chat de l'arbre." },
      { de: "Wir retten die Wale.", fr: "Nous sauvons les baleines." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat mir das Leben gerettet.", fr: "Il m'a sauvé la vie." },
      { de: "Hast du deine Arbeit gespeichert?", fr: "As-tu sauvé ton travail ?" },
      { de: "Sie haben viele Tiere vor dem Feuer gerettet.", fr: "Ils ont sauvé beaucoup d'animaux de l'incendie." }
    ],
    "indicatif_imparfait": [
        { de: "Der Superheld rettete immer die Stadt.", fr: "Le super-héros sauvait toujours la ville." },
        { de: "Wir speicherten unsere Dateien regelmäßig auf einer externen Festplatte.", fr: "Nous sauvions nos fichiers régulièrement sur un disque dur externe." },
        { de: "Ihr habt die Ehre der Familie gerettet.", fr: "Vous sauviez l'honneur de la famille." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Arzt hatte ihn gerettet, es war ein Wunder.", fr: "Le médecin l'avait sauvé, c'était un miracle." },
        { de: "Ich hatte eine Kopie gespeichert, zum Glück.", fr: "J'avais sauvé une copie, heureusement." },
        { de: "Sie hatten die Geiseln gerettet.", fr: "Ils avaient sauvé les otages." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde die Datei unter einem anderen Namen speichern.", fr: "Je sauverai le fichier sous un autre nom." },
      { de: "Diese Spende wird viele Leben retten.", fr: "Ce don sauvera de nombreuses vies." },
      { de: "Wir werden den Planeten retten.", fr: "Nous sauverons la planète." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde eine Sicherungskopie speichern.", fr: "Je vais sauver une copie de sauvegarde." },
      { de: "Der Rettungsschwimmer wird den Schwimmer retten.", fr: "Le sauveteur va sauver le nageur." },
      { de: "Sie werden versuchen, das Unternehmen vor dem Bankrott zu retten.", fr: "Ils vont essayer de sauver l'entreprise de la faillite." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich retten, wenn ich könnte.", fr: "Je te sauverais si je le pouvais." },
        { de: "Ein wenig mehr Geld würde das Projekt retten.", fr: "Un peu plus d'argent sauverait le projet." },
        { de: "Sie würden die Welt retten, wenn sie Superkräfte hätten.", fr: "Ils sauveraient le monde s'ils avaient des super-pouvoirs." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte die Daten gespeichert, wenn der Computer nicht abgestürzt wäre.", fr: "J'aurais sauvé les données si l'ordinateur n'avait pas planté." },
        { de: "Du hättest sein Leben retten können.", fr: "Tu aurais pu lui sauver la vie." },
        { de: "Wir hätten die Situation retten können.", fr: "Nous aurions pu sauver la situation." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Arbeit oft speicherst.", fr: "Il est important que tu sauves ton travail souvent." },
      { de: "Ich suche jemanden, der die Welt rettet.", fr: "Je cherche quelqu'un qui sauve le monde." },
      { de: "Damit wir die bedrohten Arten retten, müssen wir handeln.", fr: "Pour que nous sauvions les espèces menacées, nous devons agir." }
    ]
  }
};
