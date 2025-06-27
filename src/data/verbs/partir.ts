import type { Verb } from '@/types/verb-types';

export const partir: Verb = {
  infinitive: "partir",
  translation: "verlassen / abreisen / weggehen",
  verbGroup: 3,
  indicatif: {
    présent: ["pars", "pars", "part", "partons", "partez", "partent"],
    passé_composé: { aux: "être", participle: "parti" },
    imparfait: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
    plus_que_parfait: { aux: "être", participle: "parti" },
    futur_simple: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
    futur_proche: { aux: "aller", participle: "partir" }
  },
  subjonctif: { présent: ["parte", "partes", "parte", "partions", "partiez", "partent"] },
  conditionnel: { présent: ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"], passé: { aux: "être", participle: "parti" } },
  imperatif: { present: ["pars", "partons", "partez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gehe jetzt.", fr: "Je pars maintenant." },
      { de: "Wann fährst du?", fr: "Quand est-ce que tu pars ?" },
      { de: "Wir reisen morgen ab.", fr: "Nous partons demain." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin früh abgereist.", fr: "Je suis parti(e) tôt." },
      { de: "Ist sie schon gegangen?", fr: "Est-elle déjà partie ?" },
      { de: "Sie sind in den Urlaub gefahren.", fr: "Ils sont partis en vacances." }
    ],
    "indicatif_imparfait": [
        { de: "Er ging immer, ohne sich zu verabschieden.", fr: "Il partait toujours sans dire au revoir." },
        { de: "Wir reisten oft im Sommer ab.", fr: "Nous partions souvent en été." },
        { de: "Du gingst gerade, als ich ankam.", fr: "Tu partais juste quand je suis arrivé." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war bereits gegangen.", fr: "J'étais déjà parti(e)." },
        { de: "Sie war gegangen, bevor das Gewitter begann.", fr: "Elle était partie avant que l'orage ne commence." },
        { de: "Sie waren gegangen, ohne eine Nachricht zu hinterlassen.", fr: "Ils étaient partis sans laisser de message." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen früh abreisen.", fr: "Je partirai demain matin." },
      { de: "Du wirst nicht ohne mich gehen.", fr: "Tu ne partiras pas sans moi." },
      { de: "Sie werden in einer Woche abreisen.", fr: "Ils partiront dans une semaine." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich gehen.", fr: "Je vais partir tout de suite." },
      { de: "Wann wirst du abreisen?", fr: "Quand vas-tu partir ?" },
      { de: "Wir werden in 10 Minuten aufbrechen.", fr: "Nous allons partir dans 10 minutes." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde sofort gehen, wenn ich könnte.", fr: "Je partirais tout de suite si je le pouvais." },
        { de: "Er würde für immer gehen.", fr: "Il partirait pour toujours." },
        { de: "Wir würden nicht ohne dich gehen.", fr: "Nous ne partirions pas sans toi." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass ich gehe.", fr: "Il faut que je parte." },
      { de: "Ich bin traurig, dass du gehst.", fr: "Je suis triste que tu partes." },
      { de: "Bevor wir gehen, müssen wir uns verabschieden.", fr: "Avant que nous partions, nous devons dire au revoir." }
    ]
  }
};
