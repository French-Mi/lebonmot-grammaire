import type { Verb } from '@/types/verb-types';

export const offrir: Verb = {
  infinitive: "offrir",
  translation: "anbieten / schenken",
  verbGroup: 3,
  indicatif: {
    présent: ["offre", "offres", "offre", "offrons", "offrez", "offrent"],
    passé_composé: { aux: "avoir", participle: "offert" },
    imparfait: ["offrais", "offrais", "offrait", "offrions", "offriez", "offraient"],
    plus_que_parfait: { aux: "avoir", participle: "offert" },
    futur_simple: ["offrirai", "offriras", "offrira", "offrirons", "offrirez", "offriront"],
    futur_proche: { aux: "aller", participle: "offrir" }
  },
  subjonctif: { présent: ["offre", "offres", "offre", "offrions", "offriez", "offrent"] },
  conditionnel: { présent: ["offrirais", "offrirais", "offrirait", "offririons", "offririez", "offriraient"], passé: { aux: "avoir", participle: "offert" } },
  imperatif: { present: ["offre", "offrons", "offrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schenke dir ein Buch.", fr: "Je t'offre un livre." },
      { de: "Was bietest du im Austausch an?", fr: "Qu'est-ce que tu offres en échange ?" },
      { de: "Wir bieten unsere Hilfe an.", fr: "Nous offrons notre aide." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihr Blumen geschenkt.", fr: "Je lui ai offert des fleurs." },
      { de: "Er hat mir einen Kaffee angeboten.", fr: "Il m'a offert un café." },
      { de: "Sie haben uns ihre Unterstützung angeboten.", fr: "Ils nous ont offert leur soutien." }
    ],
    "indicatif_imparfait": [
        { de: "Er bot den Gästen immer einen Aperitif an.", fr: "Il offrait toujours un apéritif aux invités." },
        { de: "Meine Großmutter schenkte mir jedes Jahr ein Buch.", fr: "Ma grand-mère m'offrait un livre chaque année." },
        { de: "Wir boten den Bedürftigen unsere Zeit an.", fr: "Nous offrions notre temps aux plus démunis." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihm bereits mein altes Auto angeboten.", fr: "Je lui avais déjà offert ma vieille voiture." },
        { de: "Sie hatte ihm ein unvergessliches Geschenk gemacht.", fr: "Elle lui avait offert un cadeau inoubliable." },
        { de: "Sie hatten uns eine einmalige Gelegenheit geboten.", fr: "Ils nous avaient offert une opportunité unique." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir ein Geschenk zum Geburtstag machen.", fr: "Je t'offrirai un cadeau pour ton anniversaire." },
      { de: "Das Unternehmen wird Beförderungen anbieten.", fr: "L'entreprise offrira des promotions." },
      { de: "Wir werden Ihnen einen Rabatt anbieten.", fr: "Nous vous offrirons une réduction." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir ein Glas Wasser anbieten.", fr: "Je vais t'offrir un verre d'eau." },
      { de: "Wirst du ihr etwas schenken?", fr: "Tu vas lui offrir quelque chose ?" },
      { de: "Sie werden uns eine neue Perspektive bieten.", fr: "Ils vont nous offrir une nouvelle perspective." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dir die Welt anbieten, wenn ich könnte.", fr: "Je t'offrirais le monde si je le pouvais." },
        { de: "Er würde seine Hilfe anbieten, wenn du fragen würdest.", fr: "Il offrirait son aide si tu demandais." },
        { de: "Wir würden Ihnen gerne einen Kaffee anbieten.", fr: "Nous aimerions vous offrir un café." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du ihm ein Geschenk machst.", fr: "Il est important que tu lui offres un cadeau." },
      { de: "Ich möchte, dass sie mir eine Chance gibt.", fr: "Je veux qu'elle m'offre une chance." },
      { de: "Damit wir unsere Hilfe anbieten können, müssen wir da sein.", fr: "Pour que nous offrions notre aide, il faut être là." }
    ]
  }
};
