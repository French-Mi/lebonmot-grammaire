import type { Verb } from '@/types/verb-types';

export const sonner: Verb = {
  infinitive: "sonner",
  translation: "klingeln / läuten",
  verbGroup: 1,
  indicatif: {
    présent: ["sonne", "sonnes", "sonne", "sonnons", "sonnez", "sonnent"],
    passé_composé: { aux: "avoir", participle: "sonné" },
    imparfait: ["sonnais", "sonnais", "sonnait", "sonnions", "sonniez", "sonnaient"],
    plus_que_parfait: { aux: "avoir", participle: "sonné" },
    futur_simple: ["sonnerai", "sonneras", "sonnera", "sonnerons", "sonnerez", "sonneront"],
    futur_proche: { aux: "aller", participle: "sonner" }
  },
  subjonctif: { présent: ["sonne", "sonnes", "sonne", "sonnions", "sonniez", "sonnent"] },
  conditionnel: { présent: ["sonnerais", "sonnerais", "sonnerait", "sonnerions", "sonneriez", "sonneraient"], passé: { aux: "avoir", participle: "sonné" } },
  imperatif: { present: ["sonne", "sonnons", "sonnez"] },
  examples: {
    "indicatif_présent": [
      { de: "Das Telefon klingelt.", fr: "Le téléphone sonne." },
      { de: "Ich klingle an der Tür.", fr: "Je sonne à la porte." },
      { de: "Die Glocken läuten um Mittag.", fr: "Les cloches sonnent à midi." }
    ],
    "indicatif_passé_composé": [
      { de: "Hat es an der Tür geklingelt?", fr: "Ça a sonné à la porte ?" },
      { de: "Ich habe zweimal geklingelt.", fr: "J'ai sonné deux fois." },
      { de: "Der Wecker hat um 6 Uhr geklingelt.", fr: "Le réveil a sonné à 6 heures." }
    ],
    "indicatif_imparfait": [
        { de: "Das Telefon klingelte ständig.", fr: "Le téléphone sonnait constamment." },
        { de: "Die Kirchenglocken läuteten jeden Sonntag.", fr: "Les cloches de l'église sonnaient tous les dimanches." },
        { de: "Es klingelte, als ich gehen wollte.", fr: "Ça sonnait au moment où je partais." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Der Wecker hatte bereits geklingelt, aber ich hatte ihn nicht gehört.", fr: "Le réveil avait déjà sonné, mais je ne l'avais pas entendu." },
        { de: "Jemand hatte an der Tür geklingelt.", fr: "Quelqu'un avait sonné à la porte." },
        { de: "Die Schulglocke hatte bereits geläutet.", fr: "La cloche de l'école avait déjà sonné." }
    ],
    "indicatif_futur_simple": [
      { de: "Der Wecker wird um 7 Uhr klingeln.", fr: "Le réveil sonnera à 7h." },
      { de: "Ich werde bei dir klingeln, wenn ich ankomme.", fr: "Je sonnerai chez toi quand j'arriverai." },
      { de: "Die Glocken werden zu ihrer Hochzeit läuten.", fr: "Les cloches sonneront pour leur mariage." }
    ],
    "indicatif_futur_proche": [
      { de: "Es wird gleich klingeln.", fr: "Ça va sonner." },
      { de: "Ich werde an seiner Tür klingeln.", fr: "Je vais sonner à sa porte." },
      { de: "Der Timer wird in einer Minute klingeln.", fr: "Le minuteur va sonner dans une minute." }
    ],
    "conditionnel_présent": [
        { de: "Der Alarm würde bei einem Problem klingeln.", fr: "L'alarme sonnerait en cas de problème." },
        { de: "Ich würde bei ihm klingeln, aber es ist zu spät.", fr: "Je sonnerais chez lui, mais il est trop tard." },
        { de: "Das würde seltsam klingen.", fr: "Cela sonnerait étrange." }
    ],
    "subjonctif_présent": [
      { de: "Ich warte, bis es klingelt.", fr: "J'attends que ça sonne." },
      { de: "Es ist wichtig, dass der Wecker klingelt.", fr: "Il est important que le réveil sonne." },
      { de: "Ich will nicht, dass das Telefon klingelt.", fr: "Je ne veux pas que le téléphone sonne." }
    ]
  }
};
