import type { Verb } from '@/types/verb-types';

export const pousser: Verb = {
  infinitive: "pousser",
  translation: "drücken, schieben, wachsen",
  verbGroup: 1,
  indicatif: {
    présent: ["pousse", "pousses", "pousse", "poussons", "poussez", "poussent"],
    passé_composé: { aux: "avoir", participle: "poussé" },
    imparfait: ["poussais", "poussais", "poussait", "poussions", "poussiez", "poussaient"],
    plus_que_parfait: { aux: "avoir", participle: "poussé" },
    futur_simple: ["pousserai", "pousseras", "poussera", "pousserons", "pousserez", "pousseront"],
    futur_proche: { aux: "aller", participle: "pousser" }
  },
  subjonctif: {
    présent: ["pousse", "pousses", "pousse", "poussions", "poussiez", "poussent"]
  },
  conditionnel: {
    présent: ["pousserais", "pousserais", "pousserait", "pousserions", "pousserez", "pousseraient"],
    passé: { aux: "avoir", participle: "poussé" }
  },
  imperatif: {
    present: ["pousse", "poussons", "poussez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich drücke die Tür, um sie zu öffnen.", fr: "Je pousse la porte pour l'ouvrir." },
      { de: "Das Unkraut wächst schnell im Garten.", fr: "Les mauvaises herbes poussent vite dans le jardin." },
      { de: "Er treibt mich an meine Grenzen.", fr: "Il me pousse à mes limites." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Tisch an die Wand geschoben.", fr: "J'ai poussé la table contre le mur." },
      { de: "Ein Schrei der Überraschung entfuhr ihr (sie stieß einen Schrei aus).", fr: "Elle a poussé un cri de surprise." },
      { de: "Die Bäume sind dieses Jahr gut gewachsen.", fr: "Les arbres ont bien poussé cette année." }
    ],
    "indicatif_imparfait": [
        { de: "Er schob seinen kleinen Bruder auf der Schaukel.", fr: "Il poussait son petit frère sur la balançoire." },
        { de: "Die Blumen wuchsen überall.", fr: "Les fleurs poussaient partout." },
        { de: "Wir drängten ihn, seine Meinung zu sagen.", fr: "Nous le poussions à donner son avis." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte den Knopf gedrückt, aber nichts war passiert.", fr: "J'avais poussé le bouton, mais rien ne s'était passé." },
        { de: "Die Neugier hatte sie dazu getrieben, die Tür zu öffnen.", fr: "La curiosité l'avait poussée à ouvrir la porte." },
        { de: "Wir hatten das Auto geschoben, bis es ansprang.", fr: "Nous avions poussé la voiture jusqu'à ce qu'elle démarre." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich auf der Schaukel anschieben.", fr: "Je te pousserai sur la balançoire." },
      { de: "Diese Entscheidung wird ihn zum Rücktritt drängen.", fr: "Cette décision le poussera à démissionner." },
      { de: "Die Pflanzen werden im Frühling wachsen.", fr: "Les plantes pousseront au printemps." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Tür zuschieben.", fr: "Je vais pousser la porte." },
      { de: "Seine Rede wird uns zum Nachdenken anregen.", fr: "Son discours va nous pousser à la réflexion." },
      { de: "Die Pilze werden nach dem Regen wachsen.", fr: "Les champignons vont pousser après la pluie." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde den Wagen schieben, wenn er nicht so schwer wäre.", fr: "Je pousserais le chariot s'il n'était pas si lourd." },
        { de: "Würdest du ihn dazu drängen, die Wahrheit zu sagen?", fr: "Le pousserais-tu à dire la vérité ?" },
        { de: "Ein wenig Ermutigung würde ihn dazu bringen, weiterzumachen.", fr: "Un peu d'encouragement le pousserait à continuer." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte ihn nicht dazu gedrängt, wenn ich es gewusst hätte.", fr: "Je ne l'aurais pas poussé si j'avais su." },
        { de: "Sie hätten die Untersuchung weiter vorantreiben sollen.", fr: "Vous auriez dû pousser l'enquête plus loin." },
        { de: "Er hätte die Tür stärker drücken müssen.", fr: "Il aurait dû pousser la porte plus fort." }
    ],
    "subjonctif_présent": [
      { de: "Ich will nicht, dass du ihn dazu drängst.", fr: "Je ne veux pas que tu le pousses à faire ça." },
      { de: "Es ist notwendig, dass das Gras wächst.", fr: "Il faut que l'herbe pousse." },
      { de: "Damit wir ihn zum Reden bringen, müssen wir geduldig sein.", fr: "Pour que nous le poussions à parler, il faut être patient." }
    ]
  }
};
