import type { Verb } from '@/types/verb-types';

export const disparaitre: Verb = {
  infinitive: "disparaître",
  translation: "verschwinden",
  verbGroup: 3,
  indicatif: {
    présent: ["disparais", "disparais", "disparaît", "disparaissons", "disparaissez", "disparaissent"],
    passé_composé: { aux: "avoir", participle: "disparu" },
    imparfait: ["disparaissais", "disparaissais", "disparaissait", "disparaissions", "disparaissiez", "disparaissaient"],
    plus_que_parfait: { aux: "avoir", participle: "disparu" },
    futur_simple: ["disparaîtrai", "disparaîtras", "disparaîtra", "disparaîtrons", "disparaîtrez", "disparaîtront"],
    futur_proche: { aux: "aller", participle: "disparaître" }
  },
  subjonctif: { présent: ["disparaisse", "disparaisses", "disparaisse", "disparaissions", "disparaissiez", "disparaissent"] },
  conditionnel: { présent: ["disparaîtrais", "disparaîtrais", "disparaîtrait", "disparaîtrions", "disparaîtriez", "disparaîtraient"], passé: { aux: "avoir", participle: "disparu" } },
  imperatif: { present: ["disparais", "disparaissons", "disparaissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Die Sonne verschwindet hinter den Wolken.", fr: "Le soleil disparaît derrière les nuages." },
      { de: "Ich verschwinde für einen Moment.", fr: "Je disparais un instant." },
      { de: "Die alten Traditionen verschwinden.", fr: "Les vieilles traditions disparaissent." }
    ],
    "indicatif_passé_composé": [
      { de: "Mein Schlüssel ist verschwunden.", fr: "Ma clé a disparu." },
      { de: "Er ist plötzlich verschwunden.", fr: "Il a disparu soudainement." },
      { de: "Alle meine Sorgen sind verschwunden.", fr: "Tous mes soucis ont disparu." }
    ],
    "indicatif_imparfait": [
        { de: "Der Magier ließ die Münze verschwinden.", fr: "Le magicien faisait disparaître la pièce." },
        { de: "Die Sterne verschwanden bei Tagesanbruch.", fr: "Les étoiles disparaissaient à l'aube." },
        { de: "Wir verschwanden in der Menge.", fr: "Nous disparaissions dans la foule." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Die Katze war unter dem Bett verschwunden.", fr: "Le chat avait disparu sous le lit." },
        { de: "Als wir ankamen, war er bereits verschwunden.", fr: "Quand nous sommes arrivés, il avait déjà disparu." },
        { de: "Die Spuren waren im Schnee verschwunden.", fr: "Les traces avaient disparu dans la neige." }
    ],
    "indicatif_futur_simple": [
      { de: "Er wird in der Nacht verschwinden.", fr: "Il disparaîtra dans la nuit." },
      { de: "Diese Art wird eines Tages verschwinden.", fr: "Cette espèce disparaîtra un jour." },
      { de: "Deine Ängste werden verschwinden.", fr: "Tes peurs disparaîtront." }
    ],
    "indicatif_futur_proche": [
      { de: "Die Wolken werden verschwinden.", fr: "Les nuages vont disparaître." },
      { de: "Ich werde für eine Weile verschwinden.", fr: "Je vais disparaître pendant un moment." },
      { de: "Der Schmerz wird bald verschwinden.", fr: "La douleur va bientôt disparaître." }
    ],
    "conditionnel_présent": [
        { de: "Ohne die Sonne würde alles Leben verschwinden.", fr: "Sans le soleil, toute vie disparaîtrait." },
        { de: "Ich würde am liebsten verschwinden.", fr: "J'aimerais disparaître." },
        { de: "Er würde im Nebel verschwinden.", fr: "Il disparaîtrait dans le brouillard." }
    ],
    "subjonctif_présent": [
      { de: "Ich habe Angst, dass es verschwindet.", fr: "J'ai peur que ça disparaisse." },
      { de: "Damit die Beweise verschwinden.", fr: "Pour que les preuves disparaissent." },
      { de: "Bevor ich verschwinde, muss ich dir etwas sagen.", fr: "Avant que je disparaisse, je dois te dire quelque chose." }
    ]
  }
};
