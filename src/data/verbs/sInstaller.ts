import type { Verb } from '@/types/verb-types';

export const sInstaller: Verb = {
  infinitive: "s'installer",
  translation: "sich niederlassen, sich einrichten",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["installe", "installes", "installe", "installons", "installez", "installent"],
    passé_composé: { aux: 'être', participle: 'installé' },
    imparfait: ["installais", "installais", "installait", "installions", "installiez", "installaient"],
    plus_que_parfait: { aux: 'être', participle: 'installé' },
    futur_simple: ["installerai", "installeras", "installera", "installerons", "installerez", "installeront"],
    futur_proche: { aux: "aller", participle: "s'installer" }
  },
  subjonctif: {
    présent: ["installe", "installes", "installe", "installions", "installiez", "installent"]
  },
  conditionnel: {
    présent: ["installerais", "installerais", "installerait", "installerions", "installeriez", "installeraient"],
    passé: { aux: 'être', participle: 'installé' }
  },
  imperatif: {
    present: ["installe-toi", "installons-nous", "installez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich richte mich in meinem neuen Büro ein.", fr: "Je m'installe dans mon nouveau bureau." },
      { de: "Mach es dir bequem (richte dich ein)!", fr: "Installe-toi confortablement !" },
      { de: "Wir lassen uns auf der Terrasse nieder.", fr: "Nous nous installons sur la terrasse." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mich in Frankreich niedergelassen.", fr: "Je me suis installé(e) en France." },
      { de: "Hat sie sich gut in ihrer neuen Wohnung eingerichtet?", fr: "S'est-elle bien installée dans son nouvel appartement ?" },
      { de: "Sie haben sich in der ersten Reihe niedergelassen.", fr: "Ils se sont installés au premier rang." }
    ],
    "indicatif_imparfait": [
        { de: "Er richtete sich jeden Abend vor dem Fernseher ein.", fr: "Il s'installait chaque soir devant la télévision." },
        { de: "Wir ließen uns allmählich in unserem neuen Leben nieder.", fr: "Nous nous installions progressivement dans notre nouvelle vie." },
        { de: "Die Stille legte sich über das Dorf.", fr: "Le silence s'installait sur le village." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sie hatte sich im Ausland niedergelassen, um eine neue Sprache zu lernen.", fr: "Elle s'était installée à l'étranger pour apprendre une nouvelle langue." },
        { de: "Wir hatten uns gerade eingerichtet, als es anfing zu regnen.", fr: "Nous nous étions à peine installés quand il a commencé à pleuvoir." },
        { de: "Nachdem ich mich niedergelassen hatte, fühlte ich mich zu Hause.", fr: "Après que je m'étais installé(e), je me sentais chez moi." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde mich in der Nähe des Fensters niederlassen.", fr: "Je m'installerai près de la fenêtre." },
      { de: "Sie wird sich als Ärztin auf dem Land niederlassen.", fr: "Elle s'installera comme médecin à la campagne." },
      { de: "Wir werden uns für ein paar Jahre hier niederlassen.", fr: "Nous nous installerons ici pour quelques années." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mich auf dem Sofa einrichten.", fr: "Je vais m'installer sur le canapé." },
      { de: "Der Winter wird sich bald einstellen.", fr: "L'hiver va bientôt s'installer." },
      { de: "Sie werden sich in Kanada niederlassen.", fr: "Ils vont s'installer au Canada." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde mich gerne auf einer Insel niederlassen.", fr: "J'aimerais m'installer sur une île." },
        { de: "Er würde sich hier niederlassen, wenn er einen Job finden würde.", fr: "Il s'installerait ici s'il trouvait un travail." },
        { de: "Wir würden uns am Kamin einrichten, wenn er funktionieren würde.", fr: "Nous nous installerions près de la cheminée si elle fonctionnait." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mich woanders niedergelassen, wenn ich gewusst hätte.", fr: "Je me serais installé(e) ailleurs si j'avais su." },
        { de: "Sie hätten sich in der Stadt niedergelassen, aber die Mieten waren zu hoch.", fr: "Ils se seraient installés en ville, mais les loyers étaient trop élevés." },
        { de: "Du hättest dich bequemer einrichten können.", fr: "Tu te serais installé(e) plus confortablement." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du dich hier einrichtest.", fr: "Je veux que tu t'installes ici." },
      { de: "Es ist Zeit, dass wir uns für das Abendessen hinsetzen (einrichten).", fr: "Il est temps que nous nous installions pour le dîner." },
      { de: "Damit sich ein gutes Arbeitsklima einstellt, ist Respekt erforderlich.", fr: "Pour qu'une bonne ambiance de travail s'installe, le respect est nécessaire." }
    ]
  }
};
