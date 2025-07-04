import type { Verb } from '@/types/verb-types';

export const seRenseigner: Verb = {
  infinitive: "se renseigner",
  translation: "sich erkundigen, sich informieren",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["renseigne", "renseignes", "renseigne", "renseignons", "renseignez", "renseignent"],
    passé_composé: { aux: 'être', participle: 'renseigné' },
    imparfait: ["renseignais", "renseignais", "renseignait", "renseignions", "renseigniez", "renseignaient"],
    plus_que_parfait: { aux: 'être', participle: 'renseigné' },
    futur_simple: ["renseignerai", "renseigneras", "renseignera", "renseignerons", "renseignerez", "renseigneront"],
    futur_proche: { aux: "aller", participle: "se renseigner" }
  },
  subjonctif: {
    présent: ["renseigne", "renseignes", "renseigne", "renseignions", "renseigniez", "renseignent"]
  },
  conditionnel: {
    présent: ["renseignerais", "renseignerais", "renseignerait", "renseignerions", "renseigneriez", "renseigneraient"],
    passé: { aux: 'être', participle: 'renseigné' }
  },
  imperatif: {
    present: ["renseigne-toi", "renseignons-nous", "renseignez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich informiere mich über die Öffnungszeiten.", fr: "Je me renseigne sur les heures d'ouverture." },
      { de: "Erkundigst du dich nach dem Preis?", fr: "Te renseignes-tu sur le prix ?" },
      { de: "Wir erkundigen uns, bevor wir eine Entscheidung treffen.", fr: "Nous nous renseignons avant de prendre une décision." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich bei der Rezeption erkundigt.", fr: "Je me suis renseigné(e) à l'accueil." },
      { de: "Hat sie sich über die Bedingungen informiert?", fr: "S'est-elle renseignée sur les conditions ?" },
      { de: "Wir haben uns gut informiert, bevor wir kamen.", fr: "Nous nous sommes bien renseignés avant de venir." }
    ],
    "indicatif_imparfait": [
        { de: "Er erkundigte sich immer nach den neuesten Nachrichten.", fr: "Il se renseignait toujours sur les dernières nouvelles." },
        { de: "Wir informierten uns über die lokale Kultur.", fr: "Nous nous renseignions sur la culture locale." },
        { de: "Ihr habt euch nie informiert.", fr: "Vous ne vous renseigniez jamais." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich über die Risiken informiert.", fr: "Je m'étais renseigné(e) sur les risques." },
        { de: "Sie hatte sich über die besten Schulen der Stadt erkundigt.", fr: "Elle s'était renseignée sur les meilleures écoles de la ville." },
        { de: "Sie hatten sich nicht genug informiert, und das war ein Fehler.", fr: "Ils ne s'étaient pas assez renseignés, et c'était une erreur." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich morgen erkundigen.", fr: "Je me renseignerai demain." },
      { de: "Wirst du dich über die verfügbaren Flüge informieren?", fr: "Te renseigneras-tu sur les vols disponibles ?" },
      { de: "Wir werden uns direkt an der Quelle informieren.", fr: "Nous nous renseignerons directement à la source." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich bei einem Experten erkundigen.", fr: "Je vais me renseigner auprès d'un expert." },
      { de: "Sie wird sich über die notwendigen Schritte informieren.", fr: "Elle va se renseigner sur les démarches nécessaires." },
      { de: "Wir werden uns informieren, bevor wir handeln.", fr: "Nous allons nous renseigner avant d'agir." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich an deiner Stelle erkundigen.", fr: "Je me renseignerais à ta place." },
        { de: "Er würde sich informieren, wenn er mehr Zeit hätte.", fr: "Il se renseignerait s'il avait plus de temps." },
        { de: "Wir würden uns über bessere Optionen informieren.", fr: "Nous nous renseignerions sur de meilleures options." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich besser informieren sollen.", fr: "Je me serais mieux renseigné(e)." },
        { de: "Du hättest dich erkundigen sollen, bevor du kommst.", fr: "Tu te serais renseigné(e) avant de venir." },
        { de: "Sie hätten sich bei den Behörden erkundigen können.", fr: "Ils se seraient renseignés auprès des autorités." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du dich gut informierst.", fr: "Il est important que tu te renseignes bien." },
      { de: "Ich möchte, dass er sich über die Konsequenzen erkundigt.", fr: "Je veux qu'il se renseigne sur les conséquences." },
      { de: "Damit wir uns richtig informieren, müssen wir die richtigen Fragen stellen.", fr: "Pour que nous nous renseignions correctement, nous devons poser les bonnes questions." }
    ]
  }
};
