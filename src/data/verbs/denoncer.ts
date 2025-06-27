import type { Verb } from '@/types/verb-types';

export const denoncer: Verb = {
  infinitive: "dénoncer",
  translation: "anzeigen / melden",
  verbGroup: 1,
  indicatif: {
    présent: ["dénonce", "dénonces", "dénonce", "dénonçons", "dénoncez", "dénoncent"],
    passé_composé: { aux: "avoir", participle: "dénoncé" },
    imparfait: ["dénonçais", "dénonçais", "dénonçait", "dénoncions", "dénonciez", "dénonçaient"],
    plus_que_parfait: { aux: "avoir", participle: "dénoncé" },
    futur_simple: ["dénoncerai", "dénonceras", "dénoncera", "dénoncerons", "dénoncerez", "dénonceront"],
    futur_proche: { aux: "aller", participle: "dénoncer" }
  },
  subjonctif: { présent: ["dénonce", "dénonces", "dénonce", "dénoncions", "dénonciez", "dénoncent"] },
  conditionnel: { présent: ["dénoncerais", "dénoncerais", "dénoncerait", "dénoncerions", "dénonceriez", "dénonceraient"], passé: { aux: "avoir", participle: "dénoncé" } },
  imperatif: { present: ["dénonce", "dénonçons", "dénoncez"] },
  examples: {
    "indicatif_présent": [
      { de: "Er zeigt das Verbrechen bei der Polizei an.", fr: "Il dénonce le crime à la police." },
      { de: "Sie zögert nicht, Ungerechtigkeit anzuprangern.", fr: "Elle n'hésite pas à dénoncer l'injustice." },
      { de: "Wir zeigen diesen Betrug an.", fr: "Nous dénonçons cette fraude." }
    ],
    "indicatif_passé_composé": [
      { de: "Der Zeuge hat den Schuldigen angezeigt.", fr: "Le témoin a dénoncé le coupable." },
      { de: "Sie haben den Vertrag gekündigt (angezeigt).", fr: "Ils ont dénoncé le contrat." },
      { de: "Sie wurde von ihrem Nachbarn angezeigt.", fr: "Elle a été dénoncée par son voisin." }
    ],
    "indicatif_imparfait": [
        { de: "Der Journalist prangerte den Skandal an.", fr: "Le journaliste dénonçait le scandale." },
        { de: "Wir meldeten die Probleme regelmäßig.", fr: "Nous dénoncions les problèmes régulièrement." },
        { de: "Sie prangerten die Arbeitsbedingungen an.", fr: "Elles dénonçaient les conditions de travail." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seine Komplizen bereits angezeigt.", fr: "Il avait déjà dénoncé ses complices." },
        { de: "Sie hatte den Diebstahl noch nicht gemeldet.", fr: "Elle n'avait pas encore dénoncé le vol." },
        { de: "Wir hatten den Missbrauch den Behörden gemeldet.", fr: "Nous avions dénoncé les abus aux autorités." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dieses Verhalten melden.", fr: "Je dénoncerai ce comportement." },
      { de: "Er wird seine Komplizen nicht anzeigen.", fr: "Il ne dénoncera pas ses complices." },
      { de: "Wir werden die Missstände anprangern.", fr: "Nous dénoncerons les abus." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde diese Ungerechtigkeit anzeigen.", fr: "Je vais dénoncer cette injustice." },
      { de: "Sie wird den Verrat melden.", fr: "Elle va dénoncer la trahison." },
      { de: "Sie werden das Komplott aufdecken (anzeigen).", fr: "Ils vont dénoncer le complot." }
    ],
    "conditionnel_présent": [
        { de: "An deiner Stelle würde ich es nicht melden.", fr: "À ta place, je ne le dénoncerais pas." },
        { de: "Er würde es anzeigen, wenn er Beweise hätte.", fr: "Il le dénoncerait s'il avait des preuves." },
        { de: "Wir würden die Fakten melden, wenn wir könnten.", fr: "Nous dénoncerions les faits si nous le pouvions." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du es anzeigst.", fr: "Il est important que tu le dénonces." },
      { de: "Ich bezweifle, dass er es anzeigt.", fr: "Je doute qu'il le dénonce." },
      { de: "Damit wir diese Praktiken anprangern können.", fr: "Afin que nous dénoncions ces pratiques." }
    ]
  }
};
