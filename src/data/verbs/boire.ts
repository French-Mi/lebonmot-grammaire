import type { Verb } from '@/types/verb-types';

export const boire: Verb = {
  infinitive: "boire",
  translation: "trinken",
  verbGroup: 3,
  indicatif: {
    présent: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
    passé_composé: { aux: "avoir", participle: "bu" },
    imparfait: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
    plus_que_parfait: { aux: "avoir", participle: "bu" },
    futur_simple: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
    futur_proche: { aux: "aller", participle: "boire" }
  },
  subjonctif: { présent: ["boive", "boives", "boive", "buvions", "buviez", "boivent"] },
  conditionnel: { présent: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"], passé: { aux: "avoir", participle: "bu" } },
  imperatif: { present: ["bois", "buvons", "buvez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich trinke Wasser.", fr: "Je bois de l'eau." },
      { de: "Was trinkst du?", fr: "Qu'est-ce que tu bois ?" },
      { de: "Wir trinken einen Kaffee zusammen.", fr: "Nous buvons un café ensemble." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meinen Tee getrunken.", fr: "J'ai bu mon thé." },
      { de: "Hast du genug Wasser getrunken?", fr: "As-tu bu assez d'eau ?" },
      { de: "Sie haben auf unsere Gesundheit angestoßen (getrunken).", fr: "Ils ont bu à notre santé." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind trank ich viel Milch.", fr: "Quand j'étais enfant, je buvais beaucoup de lait." },
        { de: "Er trank seinen Kaffee immer schwarz.", fr: "Il buvait son café toujours noir." },
        { de: "Wir tranken heiße Schokolade am Kamin.", fr: "Nous buvions du chocolat chaud près de la cheminée." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte meinen Saft bereits getrunken.", fr: "J'avais déjà bu mon jus." },
        { de: "Sie hatte zu viel Kaffee getrunken.", fr: "Elle avait bu trop de café." },
        { de: "Sie hatten die ganze Flasche ausgetrunken.", fr: "Ils avaient bu toute la bouteille." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde ein Glas Wein trinken.", fr: "Je boirai un verre de vin." },
      { de: "Du wirst sehen, wir werden darauf trinken.", fr: "Tu verras, nous boirons à cela." },
      { de: "Sie werden Wasser trinken müssen.", fr: "Ils devront boire de l'eau." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde einen Orangensaft trinken.", fr: "Je vais boire un jus d'orange." },
      { de: "Wirst du etwas trinken?", fr: "Tu vas boire quelque chose ?" },
      { de: "Wir werden auf deinen Erfolg trinken.", fr: "Nous allons boire à ton succès." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne etwas Frisches trinken.", fr: "J'aimerais boire quelque chose de frais." },
        { de: "Er würde lieber Wasser trinken.", fr: "Il boirait plutôt de l'eau." },
        { de: "Wir würden mehr trinken, wenn es nicht so teuer wäre.", fr: "Nous boirions plus si ce n'était pas si cher." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du viel Wasser trinkst.", fr: "Il est important que tu boives beaucoup d'eau." },
      { de: "Ich möchte nicht, dass sie Alkohol trinkt.", fr: "Je ne veux pas qu'elle boive de l'alcool." },
      { de: "Bevor wir trinken, lasst uns anstoßen.", fr: "Avant que nous buvions, portons un toast." }
    ]
  }
};
