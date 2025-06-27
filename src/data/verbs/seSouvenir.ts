import type { Verb } from '@/types/verb-types';

export const seSouvenir: Verb = {
  infinitive: 'se souvenir',
  translation: 'sich erinnern',
  verbGroup: 3,
  isReflexive: true,
  indicatif: {
    présent: ["souviens", "souviens", "souvient", "souvenons", "souvenez", "souviennent"],
    passé_composé: { aux: 'être', participle: 'souvenu' },
    imparfait: ["souvenais", "souvenais", "souvenait", "souvenions", "souveniez", "souvenaient"],
    plus_que_parfait: { aux: 'être', participle: 'souvenu' },
    futur_simple: ["souviendrai", "souviendras", "souviendra", "souviendrons", "souviendrez", "souviendront"],
    futur_proche: { aux: "aller", participle: "se souvenir" }
  },
  subjonctif: { présent: ["souvienne", "souviennes", "souvienne", "souvenions", "souveniez", "souviennent"] },
  conditionnel: {
    présent: ["souviendrais", "souviendrais", "souviendrait", "souviendrions", "souviendriez", "souviendraient"],
    passé: { aux: 'être', participle: 'souvenu' }
  },
  imperatif: { present: ["souviens-toi", "souvenons-nous", "souvenez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich erinnere mich an unsere Ferien.", fr: "Je me souviens de nos vacances." },
      { de: "Erinnerst du dich an mich?", fr: "Tu te souviens de moi ?" },
      { de: "Wir erinnern uns an dieses Lied.", fr: "Nous nous souvenons de cette chanson." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich plötzlich an seinen Namen erinnert.", fr: "Je me suis souvenu(e) de son nom tout à coup." },
      { de: "Hat sie sich an ihr Versprechen erinnert?", fr: "S'est-elle souvenue de sa promesse ?" },
      { de: "Wir haben uns an die guten Momente erinnert.", fr: "Nous nous sommes souvenus des bons moments." }
    ],
    "indicatif_imparfait": [
        { de: "Ich erinnerte mich an die Geschichten, die mein Großvater erzählte.", fr: "Je me souvenais des histoires que mon grand-père racontait." },
        { de: "Wir erinnerten uns oft an unsere Jugend.", fr: "Nous nous souvenions souvent de notre jeunesse." },
        { de: "Erinnerte er sich an die Details des Unfalls?", fr: "Se souvenait-il des détails de l'accident ?" }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich an die Lösung erinnert, aber es war zu spät.", fr: "Je m'étais souvenu(e) de la solution, mais c'était trop tard." },
        { de: "Sie hatten sich an alles erinnert.", fr: "Ils s'étaient souvenus de tout." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich immer an dich erinnern.", fr: "Je me souviendrai toujours de toi." },
      { de: "Wirst du dich an diesen Tag erinnern?", fr: "Te souviendras-tu de ce jour ?" },
      { de: "Sie werden sich an ihre Reise erinnern.", fr: "Ils se souviendront de leur voyage." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich an seinen Namen erinnern, warte.", fr: "Je vais me souvenir de son nom, attends." },
      { de: "Wir werden uns an die Anweisungen erinnern.", fr: "Nous allons nous souvenir des instructions." },
      { de: "Sie wird sich an alles erinnern.", fr: "Elle va se souvenir de tout." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich daran erinnern, wenn du mir helfen würdest.", fr: "Je me souviendrais si tu m'aidais." },
        { de: "Würdest du dich an mich erinnern, wenn wir uns wiedersehen würden?", fr: "Te souviendrais-tu de moi si on se revoyait ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich daran erinnert, wenn du es erwähnt hättest.", fr: "Je me serais souvenu(e) si tu l'avais mentionné." }
    ],
    "subjonctif_présent": [
      { de: "Ich will, dass du dich an diesen Moment erinnerst.", fr: "Je veux que tu te souviennes de ce moment." },
      { de: "Es ist wichtig, dass wir uns an unsere Geschichte erinnern.", fr: "Il est important que nous nous souvenions de notre histoire." }
    ]
  }
};
