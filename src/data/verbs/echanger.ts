import type { Verb } from '@/types/verb-types';

export const echanger: Verb = {
  infinitive: "échanger",
  translation: "austauschen",
  verbGroup: 1,
  indicatif: {
    présent: ["échange", "échanges", "échange", "échangeons", "échangez", "échangent"],
    passé_composé: { aux: "avoir", participle: "échangé" },
    imparfait: ["échangeais", "échangeais", "échangeait", "échangions", "échangiez", "échangeaient"],
    plus_que_parfait: { aux: "avoir", participle: "échangé" },
    futur_simple: ["échangerai", "échangeras", "échangera", "échangerons", "échangerez", "échangeront"],
    futur_proche: { aux: "aller", participle: "échanger" }
  },
  subjonctif: { présent: ["échange", "échanges", "échange", "échangions", "échangiez", "échangent"] },
  conditionnel: { présent: ["échangerais", "échangerais", "échangerait", "échangerions", "échangeriez", "échangeraient"], passé: { aux: "avoir", participle: "échangé" } },
  imperatif: { present: ["échange", "échangeons", "échangez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich tausche Ideen mit meinen Kollegen aus.", fr: "J'échange des idées avec mes collègues." },
      { de: "Tauschen wir die Plätze?", fr: "On échange nos places ?" },
      { de: "Wir tauschen Briefmarken aus.", fr: "Nous échangeons des timbres." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ein paar Worte mit ihr gewechselt.", fr: "J'ai échangé quelques mots avec elle." },
      { de: "Sie haben ihre Telefonnummern ausgetauscht.", fr: "Ils ont échangé leurs numéros de téléphone." },
      { de: "Wir haben das defekte Produkt ausgetauscht.", fr: "Nous avons échangé le produit défectueux." }
    ],
    "indicatif_imparfait": [
      { de: "In der Schule tauschten wir oft Aufkleber aus.", fr: "À l'école, nous échangions souvent des autocollants." },
      { de: "Er tauschte Blicke mit ihr aus.", fr: "Il échangeait des regards avec elle." },
      { de: "Sie tauschten regelmäßig Briefe aus.", fr: "Elles échangeaient des lettres régulièrement." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte meine Adresse bereits mit ihm ausgetauscht.", fr: "J'avais déjà échangé mon adresse avec lui." },
      { de: "Sie hatten Geschenke ausgetauscht.", fr: "Ils avaient échangé des cadeaux." },
      { de: "Sie hatte ihre Bücher gegen andere getauscht.", fr: "Elle avait échangé ses livres contre d'autres." }
    ],
    "indicatif_futur_simple": [
      { de: "Wir werden morgen unsere Geschenke austauschen.", fr: "Nous échangerons nos cadeaux demain." },
      { de: "Du wirst deine Euros gegen Dollar tauschen.", fr: "Tu échangeras tes euros contre des dollars." },
      { de: "Sie werden einen langen Blick austauschen.", fr: "Ils échangeront un long regard." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dieses Hemd umtauschen.", fr: "Je vais échanger cette chemise." },
      { de: "Wir werden unsere Plätze tauschen.", fr: "Nous allons échanger nos places." },
      { de: "Wirst du die Bücher mit mir tauschen?", fr: "Vas-tu échanger les livres avec moi ?" }
    ],
    "conditionnel_présent": [
      { de: "Ich würde meinen Platz gerne mit deinem tauschen.", fr: "J'échangerais volontiers ma place avec la tienne." },
      { de: "Würdest du dieses Auto gegen meins tauschen?", fr: "Échangerais-tu cette voiture contre la mienne ?" },
      { de: "Wir würden unsere Rollen für einen Tag tauschen.", fr: "Nous échangerions nos rôles pour une journée." }
    ],
    "subjonctif_présent": [
      { de: "Ich schlage vor, dass wir unsere Nummern austauschen.", fr: "Je propose que nous échangions nos numéros." },
      { de: "Es ist wichtig, dass ihr euch austauscht.", fr: "Il est important que vous échangiez." },
      { de: "Bevor du gehst, möchte ich, dass wir ein paar Worte wechseln.", fr: "Avant que tu partes, je veux qu'on échange quelques mots." }
    ]
  }
};
