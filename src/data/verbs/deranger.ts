import type { Verb } from '@/types/verb-types';

export const deranger: Verb = {
  infinitive: "déranger",
  translation: "stören",
  verbGroup: 1,
  indicatif: {
    présent: ["dérange", "déranges", "dérange", "dérangeons", "dérangez", "dérangent"],
    passé_composé: { aux: "avoir", participle: "dérangé" },
    imparfait: ["dérangeais", "dérangeais", "dérangeait", "dérangions", "dérangiez", "dérangeaient"],
    plus_que_parfait: { aux: "avoir", participle: "dérangé" },
    futur_simple: ["dérangerai", "dérangeras", "dérangera", "dérangerons", "dérangerez", "dérangeront"],
    futur_proche: { aux: "aller", participle: "déranger" }
  },
  subjonctif: {
    présent: ["dérange", "déranges", "dérange", "dérangions", "dérangiez", "dérangent"]
  },
  conditionnel: {
    présent: ["dérangerais", "dérangerais", "dérangerait", "dérangerions", "dérangeriez", "dérangeraient"],
    passé: { aux: "avoir", participle: "dérangé" }
  },
  imperatif: {
    present: ["dérange", "dérangeons", "dérangez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Entschuldigung, störe ich Sie?", fr: "Excusez-moi, est-ce que je vous dérange ?" },
      { de: "Der Lärm von der Straße stört mich.", fr: "Le bruit de la rue me dérange." },
      { de: "Stört es dich, wenn ich das Fenster öffne?", fr: "Ça te dérange si j'ouvre la fenêtre ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich hoffe, ich habe dich nicht gestört.", fr: "J'espère que je ne t'ai pas dérangé(e)." },
      { de: "Der Anruf hat ihn mitten in der Nacht gestört.", fr: "L'appel l'a dérangé en pleine nuit." },
      { de: "Haben wir Sie bei Ihrem Nickerchen gestört?", fr: "Nous vous avons dérangé pendant votre sieste ?" }
    ],
    "indicatif_imparfait": [
        { de: "Als er arbeitete, störte ihn nichts.", fr: "Quand il travaillait, rien ne le dérangeait." },
        { de: "Wir störten unsere Eltern nie, wenn sie Gäste hatten.", fr: "Nous ne dérangions jamais nos parents quand ils avaient des invités." },
        { de: "Meine Anwesenheit schien sie zu stören.", fr: "Ma présence semblait les déranger." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Sturm hatte unsere Pläne durcheinandergebracht (gestört).", fr: "La tempête avait dérangé nos plans." },
        { de: "Jemand hatte die Papiere auf meinem Schreibtisch durcheinandergebracht.", fr: "Quelqu'un avait dérangé les papiers sur mon bureau." },
        { de: "Ich hatte ihn mitten in einer wichtigen Besprechung gestört.", fr: "Je l'avais dérangé au milieu d'une réunion importante." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich nicht länger stören.", fr: "Je ne te dérangerai pas plus longtemps." },
      { de: "Wird es dich stören, wenn ich mitkomme?", fr: "Est-ce que ça te dérangera si je viens avec toi ?" },
      { de: "Diese Arbeit wird ihre Routine durcheinanderbringen.", fr: "Ces travaux dérangeront leur routine." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde niemanden stören.", fr: "Je ne vais déranger personne." },
      { de: "Diese Nachricht wird ihn sicherlich stören.", fr: "Cette nouvelle va sûrement le déranger." },
      { de: "Ihr werdet die Nachbarn mit dieser Musik stören.", fr: "Vous allez déranger les voisins avec cette musique." }
    ],
    "conditionnel_présent": [
        { de: "Würde es Sie stören, mir zu helfen?", fr: "Cela vous dérangerait-il de m'aider ?" },
        { de: "Ich würde ihn nicht ohne einen guten Grund stören.", fr: "Je ne le dérangerais pas sans une bonne raison." },
        { de: "Er würde niemanden stören wollen.", fr: "Il ne voudrait déranger personne." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich nicht gestört, wenn ich gewusst hätte, dass du schläfst.", fr: "Je ne t'aurais pas dérangé(e) si j'avais su que tu dormais." },
        { de: "Hätte es dich gestört, wenn wir früher gekommen wären?", fr: "Est-ce que ça t'aurait dérangé si nous étions venus plus tôt ?" },
        { de: "Sie hätten ihn niemals gestört.", fr: "Ils ne l'auraient jamais dérangé." }
    ],
    "subjonctif_présent": [
      { de: "Ich habe Angst, dass ich dich störe.", fr: "J'ai peur que je te dérange." },
      { de: "Es ist besser, wenn wir ihn nicht stören.", fr: "Il vaut mieux que nous ne le dérangions pas." },
      { de: "Auch wenn es sie stört, müssen wir es tun.", fr: "Même si cela les dérange, nous devons le faire." }
    ]
  }
};
