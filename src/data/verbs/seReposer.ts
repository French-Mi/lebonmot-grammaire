import type { Verb } from '@/types/verb-types';

export const seReposer: Verb = {
  infinitive: 'se reposer',
  translation: 'sich ausruhen',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["repose", "reposes", "repose", "reposons", "reposez", "reposent"],
    passé_composé: { aux: 'être', participle: 'reposé' },
    imparfait: ["reposais", "reposais", "reposait", "reposions", "reposiez", "reposaient"],
    plus_que_parfait: { aux: 'être', participle: 'reposé' },
    futur_simple: ["reposerai", "reposeras", "reposera", "reposerons", "reposerez", "reposeront"],
    futur_proche: { aux: "aller", participle: "se reposer" }
  },
  subjonctif: { présent: ["repose", "reposes", "repose", "reposions", "reposiez", "reposent"] },
  conditionnel: {
    présent: ["reposerais", "reposerais", "reposerait", "reposerions", "reposeriez", "reposeraient"],
    passé: { aux: 'être', participle: 'reposé' }
  },
  imperatif: { present: ["repose-toi", "reposons-nous", "reposez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich ruhe mich am Wochenende aus.", fr: "Je me repose le week-end." },
      { de: "Du musst dich ausruhen, du siehst müde aus.", fr: "Tu as besoin de te reposer, tu as l'air fatigué." },
      { de: "Wir ruhen uns nach einem langen Arbeitstag aus.", fr: "Nous nous reposons après une longue journée de travail." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich gestern den ganzen Tag ausgeruht.", fr: "Je me suis reposé(e) toute la journée hier." },
      { de: "Sie hat sich im Urlaub gut erholt.", fr: "Elle s'est bien reposée pendant les vacances." },
      { de: "Wir haben uns am Strand ausgeruht.", fr: "Nous nous sommes reposés sur la plage." }
    ],
    "indicatif_imparfait": [
        { de: "Jeden Nachmittag ruhte er sich eine Stunde aus.", fr: "Chaque après-midi, il se reposait pendant une heure." },
        { de: "Wir ruhten uns im Schatten des Baumes aus.", fr: "Nous nous reposions à l'ombre de l'arbre." },
        { de: "Ich ruhte mich aus, als du angekommen bist.", fr: "Je me reposais quand tu es arrivé." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich ausgeruht, bevor ich wieder an die Arbeit ging.", fr: "Je m'étais reposé(e) avant de retourner au travail." },
        { de: "Sie hatten sich nach der langen Wanderung ausgeruht.", fr: "Ils s'étaient reposés après la longue randonnée." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich heute Abend ausruhen.", fr: "Je me reposerai ce soir." },
      { de: "Wirst du dich ein wenig ausruhen?", fr: "Te reposeras-tu un peu ?" },
      { de: "Sie werden sich ausruhen, wenn die Arbeit getan ist.", fr: "Ils se reposeront quand le travail sera fini." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich jetzt ausruhen.", fr: "Je vais me reposer maintenant." },
      { de: "Wir werden uns ein paar Minuten ausruhen.", fr: "Nous allons nous reposer quelques minutes." },
      { de: "Er wird sich nach dem Sport ausruhen.", fr: "Il va se reposer après le sport." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich könnte, würde ich mich den ganzen Tag ausruhen.", fr: "Si je pouvais, je me reposerais toute la journée." },
        { de: "Würdest du dich nicht lieber ausruhen?", fr: "Ne te reposerais-tu pas plutôt ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich ausgeruht, wenn ich gewusst hätte, wie müde ich sein würde.", fr: "Je me serais reposé(e) si j'avais su à quel point je serais fatigué(e)." }
    ],
    "subjonctif_présent": [
      { de: "Der Arzt besteht darauf, dass ich mich ausruhe.", fr: "Le médecin insiste pour que je me repose." },
      { de: "Es ist wichtig, dass ihr euch vor der Reise ausruht.", fr: "Il est important que vous vous reposiez avant le voyage." }
    ]
  }
};
