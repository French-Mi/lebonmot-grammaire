import type { Verb } from '@/types/verb-types';

export const seMaquiller: Verb = {
  infinitive: 'se maquiller',
  translation: 'sich schminken',
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["maquille", "maquilles", "maquille", "maquillons", "maquillez", "maquillent"],
    passé_composé: { aux: 'être', participle: 'maquillé' },
    imparfait: ["maquillais", "maquillais", "maquillait", "maquillions", "maquilliez", "maquillaient"],
    plus_que_parfait: { aux: 'être', participle: 'maquillé' },
    futur_simple: ["maquillerai", "maquilleras", "maquillera", "maquillerons", "maquillerez", "maquilleront"],
    futur_proche: { aux: "aller", participle: "se maquiller" }
  },
  subjonctif: { présent: ["maquille", "maquilles", "maquille", "maquillions", "maquilliez", "maquillent"] },
  conditionnel: {
    présent: ["maquillerais", "maquillerais", "maquillerait", "maquillerions", "maquilleriez", "maquilleraient"],
    passé: { aux: 'être', participle: 'maquillé' }
  },
  imperatif: { present: ["maquille-toi", "maquillons-nous", "maquillez-vous"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich schminke mich jeden Morgen.", fr: "Je me maquille tous les matins." },
      { de: "Schminkst du dich oft?", fr: "Tu te maquilles souvent ?" },
      { de: "Sie schminkt sich für die Party.", fr: "Elle se maquille pour la fête." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich für die Hochzeit geschminkt.", fr: "Je me suis maquillée pour le mariage." },
      { de: "Wir haben uns für das Foto geschminkt.", fr: "Nous nous sommes maquillées pour la photo." },
      { de: "Hat sie sich schon geschminkt?", fr: "S'est-elle déjà maquillée ?" }
    ],
    "indicatif_imparfait": [
        { de: "Früher schminkte sie sich nie.", fr: "Avant, elle ne se maquillait jamais." },
        { de: "Wir schminkten uns vor dem Spiegel.", fr: "Nous nous maquillions devant le miroir." },
        { de: "Als Teenager schminkte ich mich heimlich.", fr: "Adolescente, je me maquillais en cachette." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte mich geschminkt, bevor ich ausging.", fr: "Je m'étais maquillée avant de sortir." },
        { de: "Sie hatten sich für die Vorstellung geschminkt.", fr: "Elles s'étaient maquillées pour le spectacle." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich später schminken.", fr: "Je me maquillerai plus tard." },
      { de: "Wirst du dich für das Abendessen schminken?", fr: "Te maquilleras-tu pour le dîner ?" },
      { de: "Sie werden sich für die Zeremonie schminken.", fr: "Elles se maquilleront pour la cérémonie." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich gleich schminken.", fr: "Je vais me maquiller." },
      { de: "Sie wird sich im Badezimmer schminken.", fr: "Elle va se maquiller dans la salle de bain." },
      { de: "Wir werden uns für die Party schminken.", fr: "Nous allons nous maquiller pour la fête." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich ausgehen würde, würde ich mich schminken.", fr: "Si je sortais, je me maquillerais." },
        { de: "Sie würde sich mehr schminken, wenn sie Zeit hätte.", fr: "Elle se maquillerait plus si elle avait le temps." }
    ],
    "conditionnel_passé": [
      { de: "Ich hätte mich anders geschminkt, wenn ich dieses Kleid getragen hätte.", fr: "Je me serais maquillée différemment si j'avais porté cette robe." }
    ],
    "subjonctif_présent": [
      { de: "Meine Mutter möchte nicht, dass ich mich zu sehr schminke.", fr: "Ma mère ne veut pas que je me maquille trop." },
      { de: "Es ist besser, dass du dich ein wenig schminkst.", fr: "Il vaut mieux que tu te maquilles un peu." }
    ]
  }
};
