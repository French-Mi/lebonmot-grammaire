import type { Verb } from '@/types/verb-types';

export const envoyer: Verb = {
  infinitive: "envoyer",
  translation: "senden / schicken",
  verbGroup: 1,
  indicatif: {
    présent: ["envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"],
    passé_composé: { aux: "avoir", participle: "envoyé" },
    imparfait: ["envoyais", "envoyais", "envoyait", "envoyions", "envoyiez", "envoyaient"],
    plus_que_parfait: { aux: "avoir", participle: "envoyé" },
    futur_simple: ["enverrai", "enverras", "enverra", "enverrons", "enverrez", "enverront"],
    futur_proche: { aux: "aller", participle: "envoyer" }
  },
  subjonctif: { présent: ["envoie", "envoies", "envoie", "envoyions", "envoyiez", "envoient"] },
  conditionnel: { présent: ["enverrais", "enverrais", "enverrait", "enverrions", "enverriez", "enverraient"], passé: { aux: "avoir", participle: "envoyé" } },
  imperatif: { present: ["envoie", "envoyons", "envoyez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schicke eine E-Mail.", fr: "J'envoie un e-mail." },
      { de: "Schickst du mir eine Nachricht?", fr: "Tu m'envoies un message ?" },
      { de: "Wir schicken das Paket per Post.", fr: "Nous envoyons le colis par la poste." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Brief gestern abgeschickt.", fr: "J'ai envoyé la lettre hier." },
      { de: "Hast du die Einladungen verschickt?", fr: "As-tu envoyé les invitations ?" },
      { de: "Sie hat ihm eine Postkarte geschickt.", fr: "Elle lui a envoyé une carte postale." }
    ],
    "indicatif_imparfait": [
        { de: "Er schickte seiner Familie oft Geld.", fr: "Il envoyait souvent de l'argent à sa famille." },
        { de: "Ich schickte ihr jeden Tag eine Nachricht.", fr: "Je lui envoyais un message tous les jours." },
        { de: "Wir schickten die Waren per Schiff.", fr: "Nous envoyions les marchandises par bateau." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die E-Mail bereits gesendet.", fr: "J'avais déjà envoyé l'e-mail." },
        { de: "Sie hatte das Paket abgeschickt, bevor sie in den Urlaub fuhr.", fr: "Elle avait envoyé le colis avant de partir en vacances." },
        { de: "Wir hatten die Dokumente per Express geschickt.", fr: "Nous avions envoyé les documents par express." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir die Fotos schicken.", fr: "Je t'enverrai les photos." },
      { de: "Du wirst eine Bewerbung senden.", fr: "Tu enverras une candidature." },
      { de: "Wir werden die Antwort per E-Mail senden.", fr: "Nous enverrons la réponse par e-mail." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde eine SMS senden.", fr: "Je vais envoyer un SMS." },
      { de: "Wirst du das Paket schicken?", fr: "Tu vas envoyer le colis ?" },
      { de: "Wir werden die Einladungen verschicken.", fr: "Nous allons envoyer les invitations." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Blumen schicken.", fr: "J'enverrais les fleurs." },
        { de: "Er würde dir eine Nachricht schicken, wenn er deine Nummer hätte.", fr: "Il t'enverrait un message s'il avait ton numéro." },
        { de: "Wir würden die Informationen sofort senden.", fr: "Nous enverrions les informations immédiatement." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du den Brief schickst.", fr: "Il faut que tu envoies la lettre." },
      { de: "Ich möchte, dass er mir eine E-Mail schickt.", fr: "Je veux qu'il m'envoie un e-mail." },
      { de: "Es ist besser, dass wir das Paket heute abschicken.", fr: "Il vaut mieux que nous envoyions le colis aujourd'hui." }
    ]
  }
};
