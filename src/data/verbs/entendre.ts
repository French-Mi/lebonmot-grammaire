import type { Verb } from '@/types/verb-types';

export const entendre: Verb = {
  infinitive: "entendre",
  translation: "hören",
  verbGroup: 3,
  indicatif: {
    présent: ["entends", "entends", "entend", "entendons", "entendez", "entendent"],
    passé_composé: { aux: "avoir", participle: "entendu" },
    imparfait: ["entendais", "entendais", "entendait", "entendions", "entendiez", "entendaient"],
    plus_que_parfait: { aux: "avoir", participle: "entendu" },
    futur_simple: ["entendrai", "entendras", "entendra", "entendrons", "entendrez", "entendront"],
    futur_proche: { aux: "aller", participle: "entendre" }
  },
  subjonctif: { présent: ["entende", "entendes", "entende", "entendions", "entendiez", "entendent"] },
  conditionnel: { présent: ["entendrais", "entendrais", "entendrait", "entendrions", "entendriez", "entendraient"], passé: { aux: "avoir", participle: "entendu" } },
  imperatif: { present: ["entends", "entendons", "entendez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich höre Musik.", fr: "J'entends de la musique." },
      { de: "Hörst du das Geräusch?", fr: "Tu entends ce bruit ?" },
      { de: "Wir hören die Vögel singen.", fr: "Nous entendons les oiseaux chanter." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ein Geräusch gehört.", fr: "J'ai entendu un bruit." },
      { de: "Hast du gehört, was er gesagt hat?", fr: "As-tu entendu ce qu'il a dit ?" },
      { de: "Wir haben von dieser Geschichte gehört.", fr: "Nous avons entendu parler de cette histoire." }
    ],
    "indicatif_imparfait": [
        { de: "Ich hörte oft Musik in meinem Zimmer.", fr: "J'entendais souvent de la musique dans ma chambre." },
        { de: "Man hörte die Wellen am Strand.", fr: "On entendait les vagues sur la plage." },
        { de: "Wir hörten nicht gut von den hinteren Plätzen aus.", fr: "Nous n'entendions pas bien depuis les places du fond." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die Türklingel nicht gehört.", fr: "Je n'avais pas entendu la sonnette." },
        { de: "Sie hatte das Gerücht bereits gehört.", fr: "Elle avait déjà entendu la rumeur." },
        { de: "Hatten Sie von diesem Projekt gehört?", fr: "Aviez-vous entendu parler de ce projet ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst seine Antwort hören.", fr: "Tu entendras sa réponse." },
      { de: "Wir werden die Ergebnisse morgen hören.", fr: "Nous entendrons les résultats demain." },
      { de: "Man wird von uns hören.", fr: "On entendra parler de nous." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mir dieses Lied anhören.", fr: "Je vais entendre cette chanson." },
      { de: "Du wirst etwas Interessantes hören.", fr: "Tu vas entendre quelque chose d'intéressant." },
      { de: "Wir werden die Nachrichten hören.", fr: "Nous allons entendre les nouvelles." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne deine Meinung hören.", fr: "J'aimerais entendre ton avis." },
        { de: "Man würde eine Fliege husten hören.", fr: "On entendrait une mouche tousser." },
        { de: "Wir würden es hören, wenn es ein Problem gäbe.", fr: "Nous l'entendrions s'il y avait un problème." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du zuhörst (hörst).", fr: "Il est important que tu entendes." },
      { de: "Ich will, dass jeder es hört.", fr: "Je veux que tout le monde l'entende." },
      { de: "Damit wir dich gut hören, sprich lauter.", fr: "Pour que nous t'entendions bien, parle plus fort." }
    ]
  }
};
