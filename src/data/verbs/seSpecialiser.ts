import type { Verb } from '@/types/verb-types';

export const seSpecialiser: Verb = {
  infinitive: "se spécialiser",
  translation: "sich spezialisieren",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["spécialise", "spécialises", "spécialise", "spécialisons", "spécialisez", "spécialisent"],
    passé_composé: { aux: 'être', participle: 'spécialisé' },
    imparfait: ["spécialisais", "spécialisais", "spécialisait", "spécialisions", "spécialisiez", "spécialisaient"],
    plus_que_parfait: { aux: 'être', participle: 'spécialisé' },
    futur_simple: ["spécialiserai", "spécialiseras", "spécialisera", "spécialiserons", "spécialiserez", "spécialiseront"],
    futur_proche: { aux: "aller", participle: "se spécialiser" }
  },
  subjonctif: {
    présent: ["spécialise", "spécialises", "spécialise", "spécialisions", "spécialisiez", "spécialisent"]
  },
  conditionnel: {
    présent: ["spécialiserais", "spécialiserais", "spécialiserait", "spécialiserions", "spécialiseriez", "spécialiseraient"],
    passé: { aux: 'être', participle: 'spécialisé' }
  },
  imperatif: {
    present: ["spécialise-toi", "spécialisons-nous", "spécialisez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich spezialisiere mich auf internationales Recht.", fr: "Je me spécialise en droit international." },
      { de: "Worauf spezialisiert sich Ihr Unternehmen?", fr: "En quoi votre entreprise se spécialise-t-elle ?" },
      { de: "Wir spezialisieren uns auf maßgeschneiderte Lösungen.", fr: "Nous nous spécialisons dans les solutions sur mesure." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich auf Chirurgie spezialisiert.", fr: "Je me suis spécialisé(e) en chirurgie." },
      { de: "Sie hat sich auf Kinderliteratur spezialisiert.", fr: "Elle s'est spécialisée en littérature jeunesse." },
      { de: "Sie haben sich auf den Export spezialisiert.", fr: "Ils se sont spécialisés dans l'exportation." }
    ],
    "indicatif_imparfait": [
        { de: "Er spezialisierte sich auf seltene Krankheiten.", fr: "Il se spécialisait dans les maladies rares." },
        { de: "Damals spezialisierten sich die Handwerker auf ein einziges Handwerk.", fr: "À cette époque, les artisans se spécialisaient dans un seul métier." },
        { de: "Wir spezialisierten uns auf die Restaurierung alter Gemälde.", fr: "Nous nous spécialisions dans la restauration de peintures anciennes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich auf die Finanzmärkte spezialisiert.", fr: "Elle s'était spécialisée sur les marchés financiers." },
        { de: "Nach seinem Studium hatte er sich auf künstliche Intelligenz spezialisiert.", fr: "Après ses études, il s'était spécialisé en intelligence artificielle." },
        { de: "Wir hatten uns auf einen sehr Nischenmarkt spezialisiert.", fr: "Nous nous étions spécialisés sur un marché de niche." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich auf Neurowissenschaften spezialisieren.", fr: "Je me spécialiserai en neurosciences." },
      { de: "Sie wird sich auf die Herstellung von Luxusgütern spezialisieren.", fr: "Elle se spécialisera dans la fabrication de produits de luxe." },
      { de: "Sie werden sich auf erneuerbare Energien spezialisieren.", fr: "Ils se spécialiseront dans les énergies renouvelables." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich auf Strafrecht spezialisieren.", fr: "Je vais me spécialiser en droit pénal." },
      { de: "Das Restaurant wird sich auf Meeresfrüchte spezialisieren.", fr: "Le restaurant va se spécialiser dans les fruits de mer." },
      { de: "Wir werden uns auf den Online-Verkauf spezialisieren.", fr: "Nous allons nous spécialiser dans la vente en ligne." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich auf ein anderes Gebiet spezialisieren, wenn ich noch einmal wählen könnte.", fr: "Je me spécialiserais dans un autre domaine si je pouvais choisir à nouveau." },
        { de: "Er würde sich auf die Porträtmalerei spezialisieren.", fr: "Il se spécialiserait dans le portrait." },
        { de: "Sie würden sich auf den Import von exotischen Früchten spezialisieren.", fr: "Ils se spécialiseraient dans l'importation de fruits exotiques." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich auf ein Fach spezialisiert, das mehr Möglichkeiten bietet.", fr: "Je me serais spécialisé(e) dans un domaine offrant plus de débouchés." },
        { de: "Sie hätte sich auf die Restauration spezialisiert, wenn sie die Mittel dazu gehabt hätte.", fr: "Elle se serait spécialisée dans la restauration si elle en avait eu les moyens." },
        { de: "Wir hätten uns auf den lokalen Markt spezialisieren sollen.", fr: "Nous aurions dû nous spécialiser sur le marché local." }
    ],
    "subjonctif_présent": [
      { de: "Es ist besser, dass du dich auf ein Gebiet spezialisierst.", fr: "Il vaut mieux que tu te spécialises dans un domaine." },
      { de: "Die Universität verlangt, dass man sich im dritten Jahr spezialisiert.", fr: "L'université exige que l'on se spécialise en troisième année." },
      { de: "Ich möchte, dass sich unser Team auf diese Technologie spezialisiert.", fr: "Je veux que notre équipe se spécialise dans cette technologie." }
    ]
  }
};
