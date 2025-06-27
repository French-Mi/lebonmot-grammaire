import type { Verb } from '@/types/verb-types';

export const sePreparer: Verb = {
  infinitive: 'se préparer',
  translation: 'sich vorbereiten',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["prépare", "prépares", "prépare", "préparons", "préparez", "préparent"],
    passé_composé: { aux: 'être', participle: 'préparé' },
    imparfait: ["préparais", "préparais", "préparait", "préparions", "prépariez", "préparaient"],
    plus_que_parfait: { aux: 'être', participle: 'préparé' },
    futur_simple: ["préparerai", "prépareras", "préparera", "préparerons", "préparerez", "prépareront"],
    futur_proche: { aux: "aller", participle: "se préparer" }
  },
  subjonctif: { présent: ["prépare", "prépares", "prépare", "préparions", "prépariez", "préparent"] },
  conditionnel: {
    présent: ["préparerais", "préparerais", "préparerait", "préparerions", "prépareriez", "prépareraient"],
    passé: { aux: 'être', participle: 'préparé' }
  },
  imperatif: { present: ["prépare-toi", "préparons-nous", "préparez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich bereite mich auf die Prüfung vor.", fr: "Je me prépare pour l'examen." },
      { de: "Wie bereitest du dich vor?", fr: "Comment te prépares-tu ?" },
      { de: "Wir bereiten uns auf die Reise vor.", fr: "Nous nous préparons pour le voyage." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich gut vorbereitet.", fr: "Je me suis bien préparé(e)." },
      { de: "Sie hat sich auf das Vorstellungsgespräch vorbereitet.", fr: "Elle s'est préparée pour l'entretien d'embauche." },
      { de: "Wir haben uns auf ihre Ankunft vorbereitet.", fr: "Nous nous sommes préparés pour leur arrivée." }
    ],
    "indicatif_imparfait": [
        { de: "Ich bereitete mich auf den Marathon vor.", fr: "Je me préparais pour le marathon." },
        { de: "Wir bereiteten uns auf den Winter vor.", fr: "Nous nous préparions pour l'hiver." },
        { de: "Er bereitete sich auf seine Rede vor.", fr: "Il se préparait pour son discours." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich auf das Schlimmste vorbereitet.", fr: "Je m'étais préparé(e) au pire." },
        { de: "Sie hatten sich auf eine lange Reise vorbereitet.", fr: "Ils s'étaient préparés pour un long voyage." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich morgen vorbereiten.", fr: "Je me préparerai demain." },
      { de: "Du wirst dich auf eine Überraschung vorbereiten müssen.", fr: "Tu te prépareras à une surprise." },
      { de: "Sie werden sich auf den Wettkampf vorbereiten.", fr: "Ils se prépareront pour la compétition." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich jetzt vorbereiten.", fr: "Je vais me préparer maintenant." },
      { de: "Wir werden uns auf das Treffen vorbereiten.", fr: "Nous allons nous préparer pour la réunion." },
      { de: "Sie wird sich auf ihren Auftritt vorbereiten.", fr: "Elle va se préparer pour sa performance." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich mehr Zeit hätte, würde ich mich besser vorbereiten.", fr: "Si j'avais plus de temps, je me préparerais mieux." },
        { de: "Würdest du dich auf dieses Abenteuer vorbereiten?", fr: "Te préparerais-tu pour cette aventure ?" }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich vorbereitet, wenn ich es gewusst hätte.", fr: "Je me serais préparé(e) si j'avais su." }
    ],
    "subjonctif_présent": [
      { de: "Es ist unerlässlich, dass du dich vorbereitest.", fr: "Il est impératif que tu te prépares." },
      { de: "Er möchte, dass wir uns auf alle Eventualitäten vorbereiten.", fr: "Il veut que nous nous préparions à toute éventualité." }
    ]
  }
};
