import type { Verb } from '@/types/verb-types';

export const publier: Verb = {
  infinitive: "publier",
  translation: "veröffentlichen, publizieren",
  verbGroup: 1,
  indicatif: {
    présent: ["publie", "publies", "publie", "publions", "publiez", "publient"],
    passé_composé: { aux: "avoir", participle: "publié" },
    imparfait: ["publiais", "publiais", "publiait", "publiions", "publiiez", "publiaient"],
    plus_que_parfait: { aux: "avoir", participle: "publié" },
    futur_simple: ["publierai", "publieras", "publiera", "publierons", "publierez", "publieront"],
    futur_proche: { aux: "aller", participle: "publier" }
  },
  subjonctif: {
    présent: ["publie", "publies", "publie", "publiions", "publiiez", "publient"]
  },
  conditionnel: {
    présent: ["publierais", "publierais", "publierait", "publierions", "publieriez", "publieraient"],
    passé: { aux: "avoir", participle: "publié" }
  },
  imperatif: {
    present: ["publie", "publions", "publiez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich veröffentliche jeden Tag einen Artikel auf meinem Blog.", fr: "Je publie un article chaque jour sur mon blog." },
      { de: "Der Verlag veröffentlicht viele Romane.", fr: "La maison d'édition publie de nombreux romans." },
      { de: "Sie veröffentlichen die Ergebnisse ihrer Forschung.", fr: "Ils publient les résultats de leurs recherches." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat sein erstes Buch veröffentlicht.", fr: "Il a publié son premier livre." },
      { de: "Die Zeitung hat eine Entschuldigung veröffentlicht.", fr: "Le journal a publié des excuses." },
      { de: "Wir haben die Fotos von unserer Reise online veröffentlicht.", fr: "Nous avons publié les photos de notre voyage en ligne." }
    ],
    "indicatif_imparfait": [
        { de: "Er veröffentlichte regelmäßig in einer wissenschaftlichen Zeitschrift.", fr: "Il publiait régulièrement dans une revue scientifique." },
        { de: "Damals veröffentlichten die Autoren oft unter einem Pseudonym.", fr: "À cette époque, les auteurs publiaient souvent sous un pseudonyme." },
        { de: "Wir veröffentlichten eine wöchentliche Kolumne.", fr: "Nous publiions une chronique hebdomadaire." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Die Band hatte ihr Album veröffentlicht, bevor sie auf Tour ging.", fr: "Le groupe avait publié son album avant de partir en tournée." },
        { de: "Ich hatte einen Artikel veröffentlicht, der viel Aufsehen erregte.", fr: "J'avais publié un article qui avait fait beaucoup de bruit." },
        { de: "Sie hatte ihre Memoiren veröffentlicht.", fr: "Elle avait publié ses mémoires." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde meine Ergebnisse nächsten Monat veröffentlichen.", fr: "Je publierai mes résultats le mois prochain." },
      { de: "Die Regierung wird den Bericht bald veröffentlichen.", fr: "Le gouvernement publiera le rapport bientôt." },
      { de: "Werden Sie dieses Interview veröffentlichen?", fr: "Publierez-vous cette interview ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Nachricht auf Twitter veröffentlichen.", fr: "Je vais publier la nouvelle sur Twitter." },
      { de: "Sie wird einen neuen Gedichtband veröffentlichen.", fr: "Elle va publier un nouveau recueil de poèmes." },
      { de: "Wir werden die Einladungen nächste Woche veröffentlichen.", fr: "Nous allons publier les invitations la semaine prochaine." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diesen Artikel veröffentlichen, wenn er besser geschrieben wäre.", fr: "Je publierais cet article s'il était mieux écrit." },
        { de: "Er würde seine Arbeit veröffentlichen, aber er hat Angst vor Kritik.", fr: "Il publierait ses travaux, mais il a peur de la critique." },
        { de: "Sie würden mehr Bücher veröffentlichen, wenn sie die Mittel hätten.", fr: "Ils publieraient plus de livres s'ils en avaient les moyens." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte es nicht veröffentlicht, wenn ich du gewesen wäre.", fr: "Je ne l'aurais pas publié si j'avais été toi." },
        { de: "Die Zeitung hätte die Geschichte veröffentlicht, wenn sie sie überprüft hätte.", fr: "Le journal aurait publié l'histoire s'il l'avait vérifiée." },
        { de: "Wir hätten die Studie früher veröffentlicht.", fr: "Nous aurions publié l'étude plus tôt." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du nur verifizierte Informationen veröffentlichst.", fr: "Il est important que tu ne publies que des informations vérifiées." },
      { de: "Ich möchte, dass sie diesen Artikel veröffentlichen.", fr: "Je veux qu'ils publient cet article." },
      { de: "Bevor wir etwas veröffentlichen, müssen wir es Korrektur lesen.", fr: "Avant que nous publiions quoi que ce soit, nous devons le relire." }
    ]
  }
};
