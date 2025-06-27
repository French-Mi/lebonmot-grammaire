import type { Verb } from '@/types/verb-types';

export const garder: Verb = {
  infinitive: "garder",
  translation: "behalten / aufbewahren / hüten",
  verbGroup: 1,
  indicatif: {
    présent: ["garde", "gardes", "garde", "gardons", "gardez", "gardent"],
    passé_composé: { aux: "avoir", participle: "gardé" },
    imparfait: ["gardais", "gardais", "gardait", "gardions", "gardiez", "gardaient"],
    plus_que_parfait: { aux: "avoir", participle: "gardé" },
    futur_simple: ["garderai", "garderas", "gardera", "garderons", "garderez", "garderont"],
    futur_proche: { aux: "aller", participle: "garder" }
  },
  subjonctif: { présent: ["garde", "gardes", "garde", "gardions", "gardiez", "gardent"] },
  conditionnel: { présent: ["garderais", "garderais", "garderait", "garderions", "garderiez", "garderaient"], passé: { aux: "avoir", participle: "gardé" } },
  imperatif: { present: ["garde", "gardons", "gardez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich behalte dieses Buch.", fr: "Je garde ce livre." },
      { de: "Behältst du ein Geheimnis?", fr: "Tu gardes un secret ?" },
      { de: "Wir hüten heute Abend die Kinder.", fr: "Nous gardons les enfants ce soir." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe alle deine Briefe aufbewahrt.", fr: "J'ai gardé toutes tes lettres." },
      { de: "Er hat seinen alten Hut behalten.", fr: "Il a gardé son vieux chapeau." },
      { de: "Sie hat eine gute Erinnerung daran behalten.", fr: "Elle en a gardé un bon souvenir." }
    ],
    "indicatif_imparfait": [
        { de: "Er behielt immer die Ruhe.", fr: "Il gardait toujours son calme." },
        { de: "Wir bewahrten die alten Fotos in einer Schachtel auf.", fr: "Nous gardions les vieilles photos dans une boîte." },
        { de: "Sie hütete als Teenager oft ihre kleine Schwester.", fr: "Elle gardait souvent sa petite sœur quand elle était adolescente." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte das Beste für den Schluss aufgehoben.", fr: "J'avais gardé le meilleur pour la fin." },
        { de: "Sie hatte alle ihre Geheimnisse für sich behalten.", fr: "Elle avait gardé tous ses secrets pour elle." },
        { de: "Wir hatten einen Platz für dich freigehalten.", fr: "Nous t'avions gardé une place." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde einen Platz für dich freihalten.", fr: "Je te garderai une place." },
      { de: "Du wirst das für dich behalten.", fr: "Tu garderas ça pour toi." },
      { de: "Wir werden den Hund am Wochenende hüten.", fr: "Nous garderons le chien ce week-end." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde deinen Mantel behalten.", fr: "Je vais garder ton manteau." },
      { de: "Wirst du das Geheimnis für dich behalten?", fr: "Tu vas garder le secret ?" },
      { de: "Wir werden die Kinder morgen hüten.", fr: "Nous allons garder les enfants demain." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es lieber für mich behalten.", fr: "Je préférerais le garder pour moi." },
        { de: "Er würde sein altes Auto behalten, wenn er könnte.", fr: "Il garderait sa vieille voiture s'il le pouvait." },
        { de: "Würdest du meinen Platz bewachen?", fr: "Garderais-tu ma place ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist besser, dass du es für dich behältst.", fr: "Il vaut mieux que tu le gardes pour toi." },
      { de: "Ich möchte, dass sie die Hoffnung bewahrt.", fr: "Je veux qu'elle garde espoir." },
      { de: "Damit wir den Kontakt halten, rufen wir uns an.", fr: "Pour que nous gardions le contact, nous nous appelons." }
    ]
  }
};
