import type { Verb } from '@/types/verb-types';

export const raconter: Verb = {
  infinitive: "raconter",
  translation: "erzählen",
  verbGroup: 1,
  indicatif: {
    présent: ["raconte", "racontes", "raconte", "racontons", "racontez", "racontent"],
    passé_composé: { aux: "avoir", participle: "raconté" },
    imparfait: ["racontais", "racontais", "racontait", "racontions", "racontiez", "racontaient"],
    plus_que_parfait: { aux: "avoir", participle: "raconté" },
    futur_simple: ["raconterai", "raconteras", "racontera", "raconterons", "raconterez", "raconteront"],
    futur_proche: { aux: "aller", participle: "raconter" }
  },
  subjonctif: { présent: ["raconte", "racontes", "raconte", "racontions", "racontiez", "racontent"] },
  conditionnel: { présent: ["raconterais", "raconterais", "raconterait", "raconterions", "raconteriez", "raconteraient"], passé: { aux: "avoir", participle: "raconté" } },
  imperatif: { present: ["raconte", "racontons", "racontez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich erzähle eine Geschichte.", fr: "Je raconte une histoire." },
      { de: "Erzählst du mir von deiner Reise?", fr: "Tu me racontes ton voyage ?" },
      { de: "Er erzählt immer Witze.", fr: "Il raconte toujours des blagues." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihm alles erzählt.", fr: "Je lui ai tout raconté." },
      { de: "Sie hat mir ihren Traum erzählt.", fr: "Elle m'a raconté son rêve." },
      { de: "Was habt ihr erzählt?", fr: "Qu'est-ce que vous avez raconté ?" }
    ],
    "indicatif_imparfait": [
        { de: "Mein Großvater erzählte oft Geschichten von früher.", fr: "Mon grand-père racontait souvent des histoires du passé." },
        { de: "Du hast gut erzählt.", fr: "Tu racontais bien." },
        { de: "Wir erzählten uns unsere Geheimnisse.", fr: "Nous nous racontions nos secrets." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte mir eine unglaubliche Geschichte erzählt.", fr: "Il m'avait raconté une histoire incroyable." },
        { de: "Ich hatte die Geschichte schon hundertmal erzählt.", fr: "J'avais raconté l'histoire cent fois." },
        { de: "Sie hatte ihm nie von ihrer Vergangenheit erzählt.", fr: "Elle ne lui avait jamais raconté son passé." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir die ganze Geschichte erzählen.", fr: "Je te raconterai toute l'histoire." },
      { de: "Sie wird ihre Abenteuer erzählen.", fr: "Elle racontera ses aventures." },
      { de: "Wir werden erzählen, was wir gesehen haben.", fr: "Nous raconterons ce que nous avons vu." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir einen Witz erzählen.", fr: "Je vais te raconter une blague." },
      { de: "Wirst du mir alles erzählen?", fr: "Tu vas tout me raconter ?" },
      { de: "Sie werden ihre Reise erzählen.", fr: "Ils vont raconter leur voyage." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dir alles erzählen, wenn ich könnte.", fr: "Je te raconterais tout si je pouvais." },
        { de: "Er würde eine bessere Geschichte erzählen.", fr: "Il raconterait une meilleure histoire." },
        { de: "Würdest du mir ein Geheimnis erzählen?", fr: "Me raconterais-tu un secret ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du die Wahrheit erzählst.", fr: "Il est important que tu racontes la vérité." },
      { de: "Ich möchte, dass er mir eine Geschichte erzählt.", fr: "Je veux qu'il me raconte une histoire." },
      { de: "Bevor wir es erzählen, müssen wir sicher sein.", fr: "Avant que nous le racontions, nous devons être sûrs." }
    ]
  }
};
