import type { Verb } from '@/types/verb-types';

export const installer: Verb = {
  infinitive: "installer",
  translation: "installieren / einrichten",
  verbGroup: 1,
  indicatif: {
    présent: ["installe", "installes", "installe", "installons", "installez", "installent"],
    passé_composé: { aux: "avoir", participle: "installé" },
    imparfait: ["installais", "installais", "installait", "installions", "installiez", "installaient"],
    plus_que_parfait: { aux: "avoir", participle: "installé" },
    futur_simple: ["installerai", "installeras", "installera", "installerons", "installerez", "installeront"],
    futur_proche: { aux: "aller", participle: "installer" }
  },
  subjonctif: { présent: ["installe", "installes", "installe", "installions", "installiez", "installent"] },
  conditionnel: { présent: ["installerais", "installerais", "installerait", "installerions", "installeriez", "installeraient"], passé: { aux: "avoir", participle: "installé" } },
  imperatif: { present: ["installe", "installons", "installez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich installiere die neue Software.", fr: "J'installe le nouveau logiciel." },
      { de: "Er richtet sein Büro ein.", fr: "Il installe son bureau." },
      { de: "Wir richten uns auf der Terrasse ein.", fr: "Nous nous installons sur la terrasse." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe das Programm installiert.", fr: "J'ai installé le programme." },
      { de: "Sie hat die neuen Vorhänge angebracht.", fr: "Elle a installé les nouveaux rideaux." },
      { de: "Wir haben uns in der ersten Reihe niedergelassen.", fr: "Nous nous sommes installés au premier rang." }
    ],
    "indicatif_imparfait": [
        { de: "Der Techniker installierte das System.", fr: "Le technicien installait le système." },
        { de: "Sie richteten ihr neues Zuhause ein.", fr: "Ils installaient leur nouvelle maison." },
        { de: "Ich installierte gerade die Lampen, als du kamst.", fr: "J'installais les lampes quand tu es arrivé." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte die Software bereits installiert.", fr: "Il avait déjà installé le logiciel." },
        { de: "Wir hatten die Möbel schon im Wohnzimmer aufgestellt.", fr: "Nous avions déjà installé les meubles dans le salon." },
        { de: "Hattest du die Antenne installiert?", fr: "Avais-tu installé l'antenne ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde den Drucker morgen installieren.", fr: "J'installerai l'imprimante demain." },
      { de: "Sie wird die App auf ihrem Handy installieren.", fr: "Elle installera l'application sur son téléphone." },
      { de: "Wir werden die Stühle im Garten aufstellen.", fr: "Nous installerons les chaises dans le jardin." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die neue Version installieren.", fr: "Je vais installer la nouvelle version." },
      { de: "Sie wird ihr Zelt aufstellen.", fr: "Elle va installer sa tente." },
      { de: "Wir werden uns hier niederlassen.", fr: "Nous allons nous installer ici." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es für dich installieren.", fr: "Je l'installerais pour toi." },
        { de: "Er würde ein Regal an dieser Wand anbringen.", fr: "Il installerait une étagère sur ce mur." },
        { de: "Wir würden die Software installieren, wenn wir die Lizenz hätten.", fr: "Nous installerions le logiciel si nous avions la licence." }
    ],
    "subjonctif_présent": [
      { de: "Du musst die neueste Version installieren.", fr: "Il faut que tu installes la dernière version." },
      { de: "Ich schlage vor, dass wir uns näher am Fenster niederlassen.", fr: "Je suggère que nous nous installions plus près de la fenêtre." },
      { de: "Es ist besser, dass ein Fachmann es installiert.", fr: "Il est préférable qu'un professionnel l'installe." }
    ]
  }
};
