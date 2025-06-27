import type { Verb } from '@/types/verb-types';

export const vendre: Verb = {
  infinitive: "vendre",
  translation: "verkaufen",
  verbGroup: 3,
  indicatif: {
    présent: ["vends", "vends", "vend", "vendons", "vendez", "vendent"],
    passé_composé: { aux: "avoir", participle: "vendu" },
    imparfait: ["vendais", "vendais", "vendait", "vendions", "vendiez", "vendaient"],
    plus_que_parfait: { aux: "avoir", participle: "vendu" },
    futur_simple: ["vendrai", "vendras", "vendra", "vendrons", "vendrez", "vendront"],
    futur_proche: { aux: "aller", participle: "vendre" }
  },
  subjonctif: { présent: ["vende", "vendes", "vende", "vendions", "vendiez", "vendent"] },
  conditionnel: { présent: ["vendrais", "vendrais", "vendrait", "vendrions", "vendriez", "vendraient"], passé: { aux: "avoir", participle: "vendu" } },
  imperatif: { present: ["vends", "vendons", "vendez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich verkaufe mein altes Auto.", fr: "Je vends ma vieille voiture." },
      { de: "Was verkaufst du?", fr: "Qu'est-ce que tu vends ?" },
      { de: "Sie verkaufen Blumen auf dem Markt.", fr: "Ils vendent des fleurs au marché." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein Haus verkauft.", fr: "J'ai vendu ma maison." },
      { de: "Hat sie ihr Fahrrad verkauft?", fr: "A-t-elle vendu son vélo ?" },
      { de: "Wir haben alle unsere Aktien verkauft.", fr: "Nous avons vendu toutes nos actions." }
    ],
    "indicatif_imparfait": [
        { de: "Mein Großvater verkaufte Gemüse aus seinem Garten.", fr: "Mon grand-père vendait les légumes de son jardin." },
        { de: "Früher verkauften sie hier Zeitungen.", fr: "Autrefois, ils vendaient des journaux ici." },
        { de: "Du hast deine alten Spielsachen auf dem Flohmarkt verkauft.", fr: "Tu vendais tes vieux jouets au marché aux puces." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mein Auto verkauft, bevor ich umzog.", fr: "J'avais vendu ma voiture avant de déménager." },
        { de: "Sie hatte das Gemälde zu einem guten Preis verkauft.", fr: "Elle avait vendu le tableau à un bon prix." },
        { de: "Wir hatten alles verkauft.", fr: "Nous avions tout vendu." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mein Haus nächstes Jahr verkaufen.", fr: "Je vendrai ma maison l'année prochaine." },
      { de: "Wirst du dein altes Telefon verkaufen?", fr: "Vendras-tu ton vieux téléphone ?" },
      { de: "Sie werden viele Tickets verkaufen.", fr: "Ils vendront beaucoup de billets." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mein Fahrrad verkaufen.", fr: "Je vais vendre mon vélo." },
      { de: "Sie wird ihre alten Kleider verkaufen.", fr: "Elle va vendre ses vieux vêtements." },
      { de: "Wir werden unser Haus verkaufen.", fr: "Nous allons vendre notre maison." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mein Auto verkaufen, wenn ich ein gutes Angebot bekäme.", fr: "Je vendrais ma voiture si j'avais une bonne offre." },
        { de: "Er würde sein Haus nicht für weniger als das verkaufen.", fr: "Il ne vendrait pas sa maison pour moins que ça." },
        { de: "Wir würden es verkaufen, wenn wir müssten.", fr: "Nous le vendrions si nous devions." }
    ],
    "subjonctif_présent": [
      { de: "Du musst dein altes Auto verkaufen.", fr: "Il faut que tu vendes ta vieille voiture." },
      { de: "Ich möchte, dass er sein Haus verkauft.", fr: "Je veux qu'il vende sa maison." },
      { de: "Bevor wir verkaufen, müssen wir den Preis festlegen.", fr: "Avant que nous vendions, nous devons fixer le prix." }
    ]
  }
};
