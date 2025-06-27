import type { Verb } from '@/types/verb-types';

export const commencer: Verb = {
  infinitive: "commencer",
  translation: "anfangen / beginnen",
  verbGroup: 1,
  indicatif: {
    présent: ["commence", "commences", "commence", "commençons", "commencez", "commencent"],
    passé_composé: { aux: "avoir", participle: "commencé" },
    imparfait: ["commençais", "commençais", "commençait", "commencions", "commenciez", "commençaient"],
    plus_que_parfait: { aux: "avoir", participle: "commencé" },
    futur_simple: ["commencerai", "commenceras", "commencera", "commencerons", "commencerez", "commenceront"],
    futur_proche: { aux: "aller", participle: "commencer" }
  },
  subjonctif: { présent: ["commence", "commences", "commence", "commencions", "commenciez", "commencent"] },
  conditionnel: { présent: ["commencerais", "commencerais", "commencerait", "commencerions", "commenceriez", "commenceraient"], passé: { aux: "avoir", participle: "commencé" } },
  imperatif: { present: ["commence", "commençons", "commencez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich beginne um 9 Uhr mit der Arbeit.", fr: "Je commence le travail à 9h." },
      { de: "Wann fängt der Film an?", fr: "Quand est-ce que le film commence ?" },
      { de: "Wir fangen mit der ersten Übung an.", fr: "Nous commençons par le premier exercice." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe angefangen, ein neues Buch zu lesen.", fr: "J'ai commencé à lire un nouveau livre." },
      { de: "Der Kurs hat letzte Woche begonnen.", fr: "Le cours a commencé la semaine dernière." },
      { de: "Sie haben ohne uns angefangen.", fr: "Ils ont commencé sans nous." }
    ],
    "indicatif_imparfait": [
        { de: "Es begann zu regnen.", fr: "Il commençait à pleuvoir." },
        { de: "Ich fing gerade an zu verstehen.", fr: "Je commençais à peine à comprendre." },
        { de: "Wir begannen jeden Tag mit einem Kaffee.", fr: "Nous commencions chaque journée avec un café." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Wir hatten bereits angefangen zu essen.", fr: "Nous avions déjà commencé à manger." },
        { de: "Er hatte seine Rede begonnen, als ich ankam.", fr: "Il avait commencé son discours quand je suis arrivé." },
        { de: "Sie hatte angefangen, ohne auf mich zu warten.", fr: "Elle avait commencé sans m'attendre." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen damit anfangen.", fr: "Je commencerai demain." },
      { de: "Die Show wird in fünf Minuten beginnen.", fr: "Le spectacle commencera dans cinq minutes." },
      { de: "Wir werden von vorne anfangen.", fr: "Nous commencerons depuis le début." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich anfangen.", fr: "Je vais commencer tout de suite." },
      { de: "Der Lehrer wird mit der Erklärung beginnen.", fr: "Le professeur va commencer l'explication." },
      { de: "Wir werden mit dem Aufwärmen beginnen.", fr: "Nous allons commencer l'échauffement." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mit einer einfacheren Aufgabe beginnen.", fr: "Je commencerais par une tâche plus simple." },
        { de: "Er würde anfangen, wenn alle bereit wären.", fr: "Il commencerait si tout le monde était prêt." },
        { de: "Wir würden gerne anfangen.", fr: "Nous commencerions avec plaisir." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du anfängst zu lernen.", fr: "Il faut que tu commences à étudier." },
      { de: "Ich warte, bis er anfängt.", fr: "J'attends qu'il commence." },
      { de: "Bevor wir anfangen, lasst uns die Regeln wiederholen.", fr: "Avant que nous commencions, répétons les règles." }
    ]
  }
};
