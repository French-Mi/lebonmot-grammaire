import type { Verb } from '@/types/verb-types';

export const descendre: Verb = {
  infinitive: "descendre",
  translation: "hinuntergehen / aussteigen",
  verbGroup: 3,
  indicatif: {
    présent: ["descends", "descends", "descend", "descendons", "descendez", "descendent"],
    passé_composé: { aux: "être", participle: "descendu" },
    imparfait: ["descendais", "descendais", "descendait", "descendions", "descendiez", "descendaient"],
    plus_que_parfait: { aux: "être", participle: "descendu" },
    futur_simple: ["descendrai", "descendras", "descendra", "descendrons", "descendrez", "descendront"],
    futur_proche: { aux: "aller", participle: "descendre" }
  },
  subjonctif: { présent: ["descende", "descendes", "descende", "descendions", "descendiez", "descendent"] },
  conditionnel: { présent: ["descendrais", "descendrais", "descendrait", "descendrions", "descendriez", "descendraient"], passé: { aux: "être", participle: "descendu" } },
  imperatif: { present: ["descends", "descendons", "descendez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich gehe die Treppe hinunter.", fr: "Je descends l'escalier." },
      { de: "Er steigt aus dem Zug aus.", fr: "Il descend du train." },
      { de: "Wir steigen an der nächsten Haltestelle aus.", fr: "Nous descendons au prochain arrêt." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin in den Keller hinuntergegangen.", fr: "Je suis descendu(e) à la cave." },
      { de: "Sie ist die Piste hinuntergefahren.", fr: "Elle est descendue la piste." },
      { de: "Sie sind eine Etage tiefer gegangen.", fr: "Ils sont descendus d'un étage." }
    ],
    "indicatif_imparfait": [
        { de: "Er stieg jeden Morgen die Treppe hinunter.", fr: "Il descendait l'escalier chaque matin." },
        { de: "Der Nebel senkte sich über die Stadt.", fr: "Le brouillard descendait sur la ville." },
        { de: "Wir stiegen aus dem Bus, als er anhielt.", fr: "Nous descendions du bus quand il s'arrêtait." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war bereits hinuntergegangen.", fr: "J'étais déjà descendu(e)." },
        { de: "Sie war hinuntergegangen, um die Tür zu öffnen.", fr: "Elle était descendue pour ouvrir la porte." },
        { de: "Sie waren nicht mit uns hinuntergegangen.", fr: "Ils n'étaient pas descendus avec nous." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde später hinuntergehen.", fr: "Je descendrai plus tard." },
      { de: "Du wirst am nächsten Bahnhof aussteigen.", fr: "Tu descendras à la prochaine gare." },
      { de: "Die Temperatur wird sinken.", fr: "La température descendra." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich die Treppe hinuntergehen.", fr: "Je vais descendre les escaliers." },
      { de: "Sie wird aus dem Auto aussteigen.", fr: "Elle va descendre de la voiture." },
      { de: "Wir werden eine Etage tiefer gehen.", fr: "Nous allons descendre d'un étage." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde nicht allein in den Keller gehen.", fr: "Je ne descendrais pas seul(e) à la cave." },
        { de: "Er würde aussteigen, wenn es seine Haltestelle wäre.", fr: "Il descendrait si c'était son arrêt." },
        { de: "Würdest du mir helfen, das hinunterzutragen?", fr: "M'aiderais-tu à descendre ça ?" }
    ],
    "subjonctif_présent": [
      { de: "Du musst hinuntergehen und nachsehen.", fr: "Il faut que tu descendes voir." },
      { de: "Ich möchte, dass er mit mir hinuntergeht.", fr: "Je veux qu'il descende avec moi." },
      { de: "Bevor wir aussteigen, warten wir auf den vollständigen Halt.", fr: "Avant que nous descendions, attendons l'arrêt complet." }
    ]
  }
};
