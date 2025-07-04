import type { Verb } from '@/types/verb-types';

export const esperer: Verb = {
  infinitive: "espérer",
  translation: "hoffen",
  verbGroup: 1,
  indicatif: {
    présent: ["espère", "espères", "espère", "espérons", "espérez", "espèrent"],
    passé_composé: { aux: "avoir", participle: "espéré" },
    imparfait: ["espérais", "espérais", "espérait", "espérions", "espériez", "espéraient"],
    plus_que_parfait: { aux: "avoir", participle: "espéré" },
    futur_simple: ["espérerai", "espéreras", "espérera", "espérerons", "espérerez", "espéreront"],
    futur_proche: { aux: "aller", participle: "espérer" }
  },
  subjonctif: {
    // Espérer wird oft mit dem Indikativ Futur anstelle des Subjonctifs verwendet.
    présent: ["espère", "espères", "espère", "espérions", "espériez", "espèrent"]
  },
  conditionnel: {
    présent: ["espérerais", "espérerais", "espérerait", "espérerions", "espéreriez", "espéreraient"],
    passé: { aux: "avoir", participle: "espéré" }
  },
  imperatif: {
    present: ["espère", "espérons", "espérez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich hoffe, es geht dir gut.", fr: "J'espère que tu vas bien." },
      { de: "Er hofft, sein Examen zu bestehen.", fr: "Il espère réussir son examen." },
      { de: "Wir hoffen auf eine positive Antwort.", fr: "Nous espérons une réponse positive." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe bis zum letzten Moment gehofft.", fr: "J'ai espéré jusqu'au dernier moment." },
      { de: "Sie hat immer gehofft, ihn wiederzusehen.", fr: "Elle a toujours espéré le revoir." },
      { de: "Wir hatten gehofft, früher anzukommen.", fr: "Nous avons espéré arriver plus tôt." }
    ],
    "indicatif_imparfait": [
        { de: "Ich hoffte jeden Tag auf einen Brief von dir.", fr: "J'espérais une lettre de toi chaque jour." },
        { de: "Wir hofften, dass das Wetter besser werden würde.", fr: "Nous espérions que le temps s'améliorerait." },
        { de: "Sie hofften auf ein Wunder.", fr: "Ils espéraient un miracle." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte gehofft, dass du kommst.", fr: "J'avais espéré que tu viendrais." },
        { de: "Sie hatte auf eine Gehaltserhöhung gehofft.", fr: "Elle avait espéré une augmentation de salaire." },
        { de: "Sie hatten gehofft, den Zug noch zu erwischen.", fr: "Ils avaient espéré attraper le train." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde hoffen, dich dort zu sehen.", fr: "J'espérerai t'y voir." },
      { de: "Sie wird bis zum Ende hoffen.", fr: "Elle espérera jusqu'à la fin." },
      { de: "Wir werden immer hoffen.", fr: "Nous espérerons toujours." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde auf das Beste hoffen.", fr: "Je vais espérer le meilleur." },
      { de: "Er wird hoffen, dass alles gut geht.", fr: "Il va espérer que tout se passe bien." },
      { de: "Wir werden hoffen, dass sie unsere Einladung annimmt.", fr: "Nous allons espérer qu'elle accepte notre invitation." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde hoffen, dass du dasselbe für mich tust.", fr: "J'espérerais que tu ferais la même chose pour moi." },
        { de: "Man würde auf eine bessere Zukunft hoffen.", fr: "On espérerait un avenir meilleur." },
        { de: "Wir würden eine Geste Ihrerseits erhoffen.", fr: "Nous espérerions un geste de votre part." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte auf ein besseres Ergebnis gehofft.", fr: "J'aurais espéré un meilleur résultat." },
        { de: "Sie hätte auf mehr Unterstützung von ihm gehofft.", fr: "Elle aurait espéré plus de soutien de sa part." },
        { de: "Wir hätten gehofft, Sie unter uns zu haben.", fr: "Nous aurions espéré vous compter parmi nous." }
    ],
    "subjonctif_présent": [
      { de: "Obwohl ich hoffe, dass er kommt, bezweifle ich es.", fr: "Bien que j'espère qu'il vienne, j'en doute." },
      { de: "Ich suche jemanden, von dem ich hoffe, dass er zuverlässig ist.", fr: "Je cherche quelqu'un que j'espère être fiable." },
      { de: "Es ist die einzige Lösung, von der wir hoffen, dass sie funktioniert.", fr: "C'est la seule solution que nous espérons qui fonctionne." }
    ]
  }
};
