import type { Verb } from '@/types/verb-types';

export const occuper: Verb = {
  infinitive: "occuper",
  translation: "besetzen, belegen, beschäftigen",
  verbGroup: 1,
  indicatif: {
    présent: ["occupe", "occupes", "occupe", "occupons", "occupez", "occupent"],
    passé_composé: { aux: "avoir", participle: "occupé" },
    imparfait: ["occupais", "occupais", "occupait", "occupions", "occupiez", "occupaient"],
    plus_que_parfait: { aux: "avoir", participle: "occupé" },
    futur_simple: ["occuperai", "occuperas", "occupera", "occuperons", "occuperez", "occuperont"],
    futur_proche: { aux: "aller", participle: "occuper" }
  },
  subjonctif: {
    présent: ["occupe", "occupes", "occupe", "occupions", "occupiez", "occupent"]
  },
  conditionnel: {
    présent: ["occuperais", "occuperais", "occuperait", "occuperions", "occuperiez", "occuperaient"],
    passé: { aux: "avoir", participle: "occupé" }
  },
  imperatif: {
    present: ["occupe", "occupons", "occupez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich besetze diesen Sitzplatz.", fr: "J'occupe ce siège." },
      { de: "Diese Arbeit beschäftigt meine ganze Zeit.", fr: "Ce travail occupe tout mon temps." },
      { de: "Die Kinder beschäftigen den ganzen Raum mit ihren Spielsachen.", fr: "Les enfants occupent tout l'espace avec leurs jouets." }
    ],
    "indicatif_passé_composé": [
      { de: "Die Armee hat das Gebiet besetzt.", fr: "L'armée a occupé le territoire." },
      { de: "Diese Angelegenheit hat mich den ganzen Morgen beschäftigt.", fr: "Cette affaire m'a occupé toute la matinée." },
      { de: "Wir haben eine wichtige Position im Unternehmen eingenommen.", fr: "Nous avons occupé un poste important dans l'entreprise." }
    ],
    "indicatif_imparfait": [
        { de: "Er belegte eine hohe Position in der Regierung.", fr: "Il occupait une haute fonction au sein du gouvernement." },
        { de: "Diese Frage beschäftigte die Philosophen.", fr: "Cette question occupait les philosophes." },
        { de: "Ihr habt das Haus eurer Großeltern während der Ferien bewohnt (besetzt).", fr: "Vous occupiez la maison de vos grands-parents pendant les vacances." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Die feindlichen Truppen hatten die Stadt seit mehreren Monaten besetzt.", fr: "Les troupes ennemies avaient occupé la ville pendant plusieurs mois." },
        { de: "Diese Aufgabe hatte ihn mehr beschäftigt als erwartet.", fr: "Cette tâche l'avait occupé plus que prévu." },
        { de: "Ich hatte denselben Schreibtisch fünf Jahre lang inne.", fr: "J'avais occupé le même bureau pendant cinq ans." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich um diesen Platz kümmern (ihn besetzen).", fr: "J'occuperai cette place." },
      { de: "Diese Reform wird uns in den kommenden Monaten beschäftigen.", fr: "Cette réforme nous occupera dans les mois à venir." },
      { de: "Sie werden die neuen Büros ab nächster Woche beziehen (besetzen).", fr: "Ils occuperont les nouveaux bureaux dès la semaine prochaine." }
    ],
    "indicatif_futur_proche": [
      { de: "Diese Diskussion wird uns eine Weile beschäftigen.", fr: "Cette discussion va nous occuper un moment." },
      { de: "Er wird den Posten des Direktors übernehmen (besetzen).", fr: "Il va occuper le poste de directeur." },
      { de: "Die Kinder werden den Nachmittag mit Spielen verbringen (sich beschäftigen).", fr: "Les enfants vont occuper l'après-midi avec des jeux." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diese Position annehmen, wenn sie mir angeboten würde.", fr: "J'occuperais ce poste si on me le proposait." },
        { de: "Das würde unsere ganze Aufmerksamkeit erfordern (uns beschäftigen).", fr: "Cela occuperait toute notre attention." },
        { de: "Sie würden weniger Platz beanspruchen, wenn sie ihre Sachen aufräumen würden.", fr: "Ils occuperaient moins d'espace s'ils rangeaient leurs affaires." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte diese Funktion mit Stolz ausgeübt.", fr: "J'aurais occupé cette fonction avec fierté." },
        { de: "Er hätte den Thron bestiegen (besetzt), wenn er der Erbe gewesen wäre.", fr: "Il aurait occupé le trône s'il avait été l'héritier." },
        { de: "Das hätte uns den ganzen Tag beschäftigt.", fr: "Cela nous aurait occupés toute la journée." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass jeder eine bestimmte Rolle einnimmt.", fr: "Il est important que chacun occupe un rôle précis." },
      { de: "Ich möchte nicht, dass dieses Problem deine ganze Zeit in Anspruch nimmt.", fr: "Je ne veux pas que ce problème occupe tout ton temps." },
      { de: "Damit wir den Raum belegen können, benötigen wir eine Genehmigung.", fr: "Pour que nous occupions la salle, il nous faut une autorisation." }
    ]
  }
};
