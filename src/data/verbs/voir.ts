import type { Verb } from '@/types/verb-types';

export const voir: Verb = {
  infinitive: "voir",
  translation: "sehen",
  verbGroup: 3,
  indicatif: {
    présent: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    passé_composé: { aux: "avoir", participle: "vu" },
    imparfait: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
    plus_que_parfait: { aux: "avoir", participle: "vu" },
    futur_simple: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
    futur_proche: { aux: "aller", participle: "voir" }
  },
  subjonctif: { présent: ["voie", "voies", "voie", "voyions", "voyiez", "voient"] },
  conditionnel: { présent: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"], passé: { aux: "avoir", participle: "vu" } },
  imperatif: { present: ["vois", "voyons", "voyez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich sehe den Vogel.", fr: "Je vois l'oiseau." },
      { de: "Siehst du, was ich meine?", fr: "Tu vois ce que je veux dire ?" },
      { de: "Wir sehen uns morgen.", fr: "On se voit demain." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe den Film gestern gesehen.", fr: "J'ai vu le film hier." },
      { de: "Hast du meine Schlüssel gesehen?", fr: "As-tu vu mes clés ?" },
      { de: "Wir haben nichts gesehen.", fr: "Nous n'avons rien vu." }
    ],
    "indicatif_imparfait": [
        { de: "Ich sah ihn oft im Park.", fr: "Je le voyais souvent au parc." },
        { de: "Man sah die Berge in der Ferne.", fr: "On voyait les montagnes au loin." },
        { de: "Wir sahen uns als Kinder jeden Tag.", fr: "Nous nous voyions tous les jours quand nous étions enfants." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte diesen Film noch nie gesehen.", fr: "Je n'avais jamais vu ce film." },
        { de: "Sie hatte ihn seit Jahren nicht gesehen.", fr: "Elle ne l'avait pas vu depuis des années." },
        { de: "Wir hatten das kommen sehen.", fr: "Nous l'avions vu venir." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde sehen, was ich tun kann.", fr: "Je verrai ce que je peux faire." },
      { de: "Du wirst den Unterschied sehen.", fr: "Tu verras la différence." },
      { de: "Wir werden sehen.", fr: "On verra bien." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mir einen Film ansehen.", fr: "Je vais voir un film." },
      { de: "Du wirst sehen, es ist einfach.", fr: "Tu vas voir, c'est facile." },
      { de: "Wir werden sehen, was passiert.", fr: "Nous allons voir ce qui se passe." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne die Ausstellung sehen.", fr: "J'aimerais voir l'exposition." },
        { de: "Man würde einen klaren Unterschied sehen.", fr: "On verrait une nette différence." },
        { de: "Wir würden uns gerne öfter sehen.", fr: "Nous nous verrions plus souvent avec plaisir." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du einen Arzt aufsuchst.", fr: "Il est important que tu voies un médecin." },
      { de: "Ich möchte, dass er die Wahrheit sieht.", fr: "Je veux qu'il voie la vérité." },
      { de: "Damit wir uns sehen können, müssen wir einen Termin vereinbaren.", fr: "Pour que nous nous voyions, il faut prendre rendez-vous." }
    ]
  }
};
