import type { Verb } from '@/types/verb-types';

export const recevoir: Verb = {
  infinitive: "recevoir",
  translation: "erhalten, empfangen",
  verbGroup: 3,
  indicatif: {
    présent: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
    passé_composé: { aux: "avoir", participle: "reçu" },
    imparfait: ["recevais", "recevais", "recevait", "recevions", "receviez", "recevaient"],
    plus_que_parfait: { aux: "avoir", participle: "reçu" },
    futur_simple: ["recevrai", "recevras", "recevra", "recevrons", "recevrez", "recevront"],
    futur_proche: { aux: "aller", participle: "recevoir" }
  },
  subjonctif: {
    présent: ["reçoive", "reçoives", "reçoive", "recevions", "receviez", "reçoivent"]
  },
  conditionnel: {
    présent: ["recevrais", "recevrais", "recevrait", "recevrions", "recevriez", "recevraient"],
    passé: { aux: "avoir", participle: "reçu" }
  },
  imperatif: {
    present: ["reçois", "recevons", "recevez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich erhalte viele E-Mails.", fr: "Je reçois beaucoup d'e-mails." },
      { de: "Sie empfängt heute Abend Gäste.", fr: "Elle reçoit des invités ce soir." },
      { de: "Wir erhalten eine gute Ausbildung.", fr: "Nous recevons une bonne éducation." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe dein Paket erhalten.", fr: "J'ai reçu ton colis." },
      { de: "Haben Sie meine Nachricht erhalten?", fr: "Avez-vous reçu mon message ?" },
      { de: "Sie haben eine Medaille für ihre Tapferkeit erhalten.", fr: "Ils ont reçu une médaille pour leur courage." }
    ],
    "indicatif_imparfait": [
        { de: "Er empfing seine Patienten in seiner Praxis.", fr: "Il recevait ses patients dans son cabinet." },
        { de: "Wir erhielten jede Woche einen Brief von ihr.", fr: "Nous recevions une lettre d'elle chaque semaine." },
        { de: "Damals empfing man nicht so viele Anrufe.", fr: "À cette époque, on ne recevait pas autant d'appels." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte Ihre Einladung erhalten, aber ich hatte vergessen zu antworten.", fr: "J'avais reçu votre invitation, mais j'avais oublié de répondre." },
        { de: "Sie hatte einen Preis für ihren Roman erhalten.", fr: "Elle avait reçu un prix pour son roman." },
        { de: "Sie hatten schlechte Nachrichten erhalten.", fr: "Ils avaient reçu de mauvaises nouvelles." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst bald eine Antwort erhalten.", fr: "Tu recevras une réponse bientôt." },
      { de: "Sie wird viele Geschenke zu ihrem Geburtstag bekommen.", fr: "Elle recevra beaucoup de cadeaux pour son anniversaire." },
      { de: "Wir werden die Ergebnisse per Post erhalten.", fr: "Nous recevrons les résultats par la poste." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich einen Anruf erhalten.", fr: "Je vais recevoir un appel." },
      { de: "Sie wird eine Beförderung erhalten.", fr: "Elle va recevoir une promotion." },
      { de: "Ihr werdet eine Überraschung erhalten.", fr: "Vous allez recevoir une surprise." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne mehr Komplimente erhalten.", fr: "J'aimerais recevoir plus de compliments." },
        { de: "Er würde eine Belohnung erhalten, wenn er Erfolg hat.", fr: "Il recevrait une récompense s'il réussissait." },
        { de: "Wir würden Sie gerne bei uns empfangen.", fr: "Nous vous recevrions avec plaisir." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte Ihre E-Mail erhalten sollen.", fr: "J'aurais dû recevoir votre e-mail." },
        { de: "Du hättest eine bessere Note bekommen, wenn du mehr gelernt hättest.", fr: "Tu aurais reçu une meilleure note si tu avais étudié plus." },
        { de: "Sie hätten eine Warnung erhalten, aber das System war ausgefallen.", fr: "Ils auraient reçu un avertissement, mais le système était en panne." }
    ],
    "subjonctif_présent": [
      { de: "Ich bin froh, dass du meine Hilfe erhältst.", fr: "Je suis content que tu reçoives mon aide." },
      { de: "Es ist wichtig, dass wir Feedback erhalten.", fr: "Il est important que nous recevions des commentaires." },
      { de: "Damit sie eine Antwort erhalten, müssen sie das Formular ausfüllen.", fr: "Pour qu'ils reçoivent une réponse, ils doivent remplir le formulaire." }
    ]
  }
};
