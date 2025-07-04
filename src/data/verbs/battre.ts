import type { Verb } from '@/types/verb-types';

export const battre: Verb = {
  infinitive: "battre",
  translation: "schlagen, besiegen",
  verbGroup: 3,
  indicatif: {
    présent: ["bats", "bats", "bat", "battons", "battez", "battent"],
    passé_composé: { aux: "avoir", participle: "battu" },
    imparfait: ["battais", "battais", "battait", "battions", "battiez", "battaient"],
    plus_que_parfait: { aux: "avoir", participle: "battu" },
    futur_simple: ["battrai", "battras", "battra", "battrons", "battrez", "battront"],
    futur_proche: { aux: "aller", participle: "battre" }
  },
  subjonctif: {
    présent: ["batte", "battes", "batte", "battions", "battiez", "battent"]
  },
  conditionnel: {
    présent: ["battrais", "battrais", "battrait", "battrions", "battriez", "battraient"],
    passé: { aux: "avoir", participle: "battu" }
  },
  imperatif: {
    present: ["bats", "battons", "battez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich schlage die Eier für den Kuchen.", fr: "Je bats les œufs pour le gâteau." },
      { de: "Sein Herz schlägt sehr schnell.", fr: "Son cœur bat très vite." },
      { de: "Sie schlagen uns immer beim Schach.", fr: "Ils nous battent toujours aux échecs." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat seinen eigenen Rekord geschlagen.", fr: "Il a battu son propre record." },
      { de: "Warum hast du ihn geschlagen?", fr: "Pourquoi l'as-tu battu ?" },
      { de: "Wir haben die gegnerische Mannschaft besiegt.", fr: "Nous avons battu l'équipe adverse." }
    ],
    "indicatif_imparfait": [
        { de: "Der Regen peitschte (schlug) gegen die Fenster.", fr: "La pluie battait contre les fenêtres." },
        { de: "Wir schlugen den Teppich, um ihn zu reinigen.", fr: "Nous battions le tapis pour le nettoyer." },
        { de: "Als Kind schlugst du nie jemanden.", fr: "Quand tu étais petit, tu ne battais jamais personne." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte den Teig zu lange geschlagen.", fr: "Elle avait trop longtemps battu la pâte." },
        { de: "Die Armee hatte den Feind bereits geschlagen.", fr: "L'armée avait déjà battu l'ennemi." },
        { de: "Wir hatten noch nie eine so starke Mannschaft besiegt.", fr: "Nous n'avions jamais battu une équipe aussi forte." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich im nächsten Spiel besiegen.", fr: "Je te battrai au prochain match." },
      { de: "Die Trommeln werden die ganze Nacht schlagen.", fr: "Les tambours battront toute la nuit." },
      { de: "Wir werden für unsere Überzeugungen kämpfen (uns schlagen).", fr: "Nous nous battrons pour nos convictions." }
    ],
    "indicatif_futur_proche": [
      { de: "Sie wird die Sahne steif schlagen.", fr: "Elle va battre la crème." },
      { de: "Wir werden versuchen, sie zu besiegen.", fr: "Nous allons essayer de les battre." },
      { de: "Du wirst den Weltrekord schlagen.", fr: "Tu vas battre le record du monde." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn besiegen, wenn ich besser trainiert wäre.", fr: "Je le battrais si j'étais mieux entraîné." },
        { de: "Würdest du ein Kind schlagen?", fr: "Battrais-tu un enfant ?" },
        { de: "Sie würden jeden Gegner besiegen.", fr: "Ils battraient n'importe quel adversaire." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte ihn besiegt, wenn ich nicht gefallen wäre.", fr: "Je l'aurais battu si je n'étais pas tombé." },
        { de: "Er hätte den Rekord geschlagen, wenn er nicht verletzt gewesen wäre.", fr: "Il aurait battu le record s'il n'avait pas été blessé." },
        { de: "Wir hätten sie leicht besiegen können.", fr: "Nous les aurions battus facilement." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du die Eier gut schlägst.", fr: "Il est important que tu battes bien les œufs." },
      { de: "Ich glaube nicht, dass sie uns besiegen.", fr: "Je ne pense pas qu'ils nous battent." },
      { de: "Damit wir sie besiegen, müssen wir zusammenarbeiten.", fr: "Pour que nous les battions, nous devons travailler ensemble." }
    ]
  }
};
