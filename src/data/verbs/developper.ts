import type { Verb } from '@/types/verb-types';

export const developper: Verb = {
  infinitive: "développer",
  translation: "entwickeln",
  verbGroup: 1,
  indicatif: {
    présent: ["développe", "développes", "développe", "développons", "développez", "développent"],
    passé_composé: { aux: "avoir", participle: "développé" },
    imparfait: ["développais", "développais", "développait", "développions", "développiez", "développaient"],
    plus_que_parfait: { aux: "avoir", participle: "développé" },
    futur_simple: ["développerai", "développeras", "développera", "développerons", "développerez", "développeront"],
    futur_proche: { aux: "aller", participle: "développer" }
  },
  subjonctif: {
    présent: ["développe", "développes", "développe", "développions", "développiez", "développent"]
  },
  conditionnel: {
    présent: ["développerais", "développerais", "développerait", "développerions", "développeriez", "développeraient"],
    passé: { aux: "avoir", participle: "développé" }
  },
  imperatif: {
    present: ["développe", "développons", "développez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich entwickle eine neue Anwendung.", fr: "Je développe une nouvelle application." },
      { de: "Dieses Projekt entwickelt seine Fähigkeiten.", fr: "Ce projet développe ses compétences." },
      { de: "Wir entwickeln eine Partnerschaft mit einem anderen Unternehmen.", fr: "Nous développons un partenariat avec une autre entreprise." }
    ],
    "indicatif_passé_composé": [
      { de: "Der Ingenieur hat einen neuen Motor entwickelt.", fr: "L'ingénieur a développé un nouveau moteur." },
      { de: "Sie hat ihre Argumente gut entwickelt.", fr: "Elle a bien développé ses arguments." },
      { de: "Sie haben eine dauerhafte Freundschaft entwickelt.", fr: "Ils ont développé une amitié durable." }
    ],
    "indicatif_imparfait": [
        { de: "Er entwickelte seine Ideen in einem Notizbuch.", fr: "Il développait ses idées dans un carnet." },
        { de: "Die Firma entwickelte jedes Jahr neue Produkte.", fr: "L'entreprise développait de nouveaux produits chaque année." },
        { de: "Ihr habt eure Muskeln im Fitnessstudio entwickelt.", fr: "Vous développiez vos muscles à la salle de sport." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte eine Theorie entwickelt, die sich als falsch herausstellte.", fr: "J'avais développé une théorie qui s'est avérée fausse." },
        { de: "Sie hatte ein großes Talent für Musik entwickelt.", fr: "Elle avait développé un grand talent pour la musique." },
        { de: "Sie hatten ein Netzwerk von Kontakten in der ganzen Welt aufgebaut (entwickelt).", fr: "Ils avaient développé un réseau de contacts dans le monde entier." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dieses Thema in meiner Präsentation entwickeln.", fr: "Je développerai ce sujet dans ma présentation." },
      { de: "Sie wird eine neue Software entwickeln.", fr: "Elle développera un nouveau logiciel." },
      { de: "Wir werden unsere Aktivitäten im Ausland ausbauen (entwickeln).", fr: "Nous développerons nos activités à l'étranger." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde meine Idee weiterentwickeln.", fr: "Je vais développer mon idée." },
      { de: "Der Architekt wird die Pläne für das Haus entwickeln.", fr: "L'architecte va développer les plans de la maison." },
      { de: "Sie werden eine stärkere Beziehung entwickeln.", fr: "Ils vont développer une relation plus forte." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne meine fotografischen Fähigkeiten entwickeln.", fr: "J'aimerais développer mes compétences en photographie." },
        { de: "Er würde das Projekt entwickeln, wenn er die Finanzierung hätte.", fr: "Il développerait le projet s'il avait le financement." },
        { de: "Wir würden ein besseres Produkt entwickeln, wenn wir mehr Zeit hätten.", fr: "Nous développerions un meilleur produit si nous avions plus de temps." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dieses Argument weiter entwickelt.", fr: "J'aurais développé cet argument davantage." },
        { de: "Sie hätte ein Gegenmittel entwickelt, wenn man sie gelassen hätte.", fr: "Elle aurait développé un antidote si on l'avait laissée faire." },
        { de: "Wir hätten eine engere Zusammenarbeit entwickeln können.", fr: "Nous aurions pu développer une collaboration plus étroite." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass man seine Argumente gut entwickelt.", fr: "Il est nécessaire que l'on développe bien ses arguments." },
      { de: "Ich möchte, dass du deinen kritischen Geist entwickelst.", fr: "Je veux que tu développes ton esprit critique." },
      { de: "Damit sie ihr Geschäft entwickeln, müssen sie investieren.", fr: "Pour qu'ils développent leur entreprise, ils doivent investir." }
    ]
  }
};
