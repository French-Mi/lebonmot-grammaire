import type { Verb } from '@/types/verb-types';

export const traverser: Verb = {
  infinitive: "traverser",
  translation: "überqueren / durchqueren",
  verbGroup: 1,
  indicatif: {
    présent: ["traverse", "traverses", "traverse", "traversons", "traversez", "traversent"],
    passé_composé: { aux: "avoir", participle: "traversé" },
    imparfait: ["traversais", "traversais", "traversait", "traversions", "traversiez", "traversaient"],
    plus_que_parfait: { aux: "avoir", participle: "traversé" },
    futur_simple: ["traverserai", "traverseras", "traversera", "traverserons", "traverserez", "traverseront"],
    futur_proche: { aux: "aller", participle: "traverser" }
  },
  subjonctif: { présent: ["traverse", "traverses", "traverse", "traversions", "traversiez", "traversent"] },
  conditionnel: { présent: ["traverserais", "traverserais", "traverserait", "traverserions", "traverseriez", "traverseraient"], passé: { aux: "avoir", participle: "traversé" } },
  imperatif: { present: ["traverse", "traversons", "traversez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich überquere die Straße.", fr: "Je traverse la rue." },
      { de: "Der Fluss durchquert die Stadt.", fr: "La rivière traverse la ville." },
      { de: "Wir durchqueren eine schwierige Zeit.", fr: "Nous traversons une période difficile." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Brücke überquert.", fr: "J'ai traversé le pont." },
      { de: "Sie hat die Wüste durchquert.", fr: "Elle a traversé le désert." },
      { de: "Wir haben den Atlantik überquert.", fr: "Nous avons traversé l'Atlantique." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind überquerte ich den Fluss schwimmend.", fr: "Enfant, je traversais la rivière à la nage." },
        { de: "Der Weg durchquerte einen dunklen Wald.", fr: "Le sentier traversait une forêt sombre." },
        { de: "Wir überquerten oft die Grenze, um einzukaufen.", fr: "Nous traversions souvent la frontière pour faire des achats." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Wir hatten bereits die Hälfte des Landes durchquert.", fr: "Nous avions déjà traversé la moitié du pays." },
        { de: "Er hatte viele Schwierigkeiten durchgemacht.", fr: "Il avait traversé beaucoup de difficultés." },
        { de: "Sie hatte den Ozean allein durchquert.", fr: "Elle avait traversé l'océan seule." }
    ],
    "indicatif_futur_simple": [
      { de: "Wir werden die Alpen durchqueren.", fr: "Nous traverserons les Alpes." },
      { de: "Du wirst die Ziellinie überqueren.", fr: "Tu traverseras la ligne d'arrivée." },
      { de: "Das Schiff wird den Kanal durchqueren.", fr: "Le navire traversera le canal." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Straße überqueren.", fr: "Je vais traverser la rue." },
      { de: "Achtung, ein Auto wird die Straße überqueren.", fr: "Attention, une voiture va traverser." },
      { de: "Wir werden den Park durchqueren.", fr: "Nous allons traverser le parc." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Straße an deiner Stelle nicht überqueren.", fr: "Je ne traverserais pas la rue à ta place." },
        { de: "Er würde die ganze Welt durchqueren, um sie zu sehen.", fr: "Il traverserait le monde entier pour la voir." },
        { de: "Wir würden den Fluss überqueren, wenn es eine Brücke gäbe.", fr: "Nous traverserions la rivière s'il y avait un pont." }
    ],
    "subjonctif_présent": [
      { de: "Du musst die Straße am Zebrastreifen überqueren.", fr: "Il faut que tu traverses la rue sur le passage piéton." },
      { de: "Ich habe Angst, dass er die Straße überquert, ohne zu schauen.", fr: "J'ai peur qu'il traverse la rue sans regarder." },
      { de: "Bevor wir den Wald durchqueren, machen wir eine Pause.", fr: "Avant que nous traversions la forêt, faisons une pause." }
    ]
  }
};
