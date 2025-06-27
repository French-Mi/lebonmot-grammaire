import type { Verb } from '@/types/verb-types';

export const continuer: Verb = {
  infinitive: "continuer",
  translation: "fortfahren / weitermachen",
  verbGroup: 1,
  indicatif: {
    présent: ["continue", "continues", "continue", "continuons", "continuez", "continuent"],
    passé_composé: { aux: "avoir", participle: "continué" },
    imparfait: ["continuais", "continuais", "continuait", "continuions", "continuiez", "continuaient"],
    plus_que_parfait: { aux: "avoir", participle: "continué" },
    futur_simple: ["continuerai", "continueras", "continuera", "continuerons", "continuerez", "continueront"],
    futur_proche: { aux: "aller", participle: "continuer" }
  },
  subjonctif: { présent: ["continue", "continues", "continue", "continuions", "continuez", "continuent"] },
  conditionnel: { présent: ["continuerais", "continuerais", "continuerait", "continuerions", "continueriez", "continueraient"], passé: { aux: "avoir", participle: "continué" } },
  imperatif: { present: ["continue", "continuons", "continuez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich mache mit meiner Arbeit weiter.", fr: "Je continue mon travail." },
      { de: "Der Regen dauert an.", fr: "La pluie continue de tomber." },
      { de: "Fahrt bitte fort.", fr: "Continuez, s'il vous plaît." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe trotz der Schwierigkeiten weitergemacht.", fr: "J'ai continué malgré les difficultés." },
      { de: "Er hat weiter geredet.", fr: "Il a continué à parler." },
      { de: "Wir haben unsere Reise fortgesetzt.", fr: "Nous avons continué notre voyage." }
    ],
     "indicatif_imparfait": [
      { de: "Er machte immer weiter, egal was passierte.", fr: "Il continuait toujours, quoi qu'il arrive." },
      { de: "Die Musik spielte weiter.", fr: "La musique continuait de jouer." },
      { de: "Wir machten mit dem Spiel weiter.", fr: "Nous continuions le jeu." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Obwohl er müde war, hatte er weitergemacht.", fr: "Même s'il était fatigué, il avait continué." },
      { de: "Sie hatte weitergearbeitet, ohne eine Pause zu machen.", fr: "Elle avait continué à travailler sans faire de pause." },
      { de: "Wir hatten den Weg fortgesetzt.", fr: "Nous avions continué le chemin." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde weitermachen, bis ich fertig bin.", fr: "Je continuerai jusqu'à ce que j'aie fini." },
      { de: "Die Serie wird nächste Woche fortgesetzt.", fr: "La série continuera la semaine prochaine." },
      { de: "Wir werden unsere Bemühungen fortsetzen.", fr: "Nous continuerons nos efforts." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde geradeaus weitergehen.", fr: "Je vais continuer tout droit." },
      { de: "Wirst du weitermachen?", fr: "Tu vas continuer ?" },
      { de: "Sie werden weiter diskutieren.", fr: "Ils vont continuer à discuter." }
    ],
    "conditionnel_présent": [
        { de: "An deiner Stelle würde ich weitermachen.", fr: "À ta place, je continuerais." },
        { de: "Wir würden gerne weitermachen, aber es ist zu spät.", fr: "Nous continuerions bien, mais il est trop tard." },
        { de: "Er würde ohne uns weitermachen.", fr: "Il continuerait sans nous." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du weitermachst.", fr: "Il est important que tu continues." },
      { de: "Ich möchte, dass er weitermacht.", fr: "Je veux qu'il continue." },
      { de: "Obwohl wir müde sind, ist es besser, dass wir weitermachen.", fr: "Bien que nous soyons fatigués, il vaut mieux que nous continuions." }
    ]
  }
};
