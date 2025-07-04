import type { Verb } from '@/types/verb-types';

export const permettre: Verb = {
  infinitive: "permettre",
  translation: "erlauben, gestatten",
  verbGroup: 3,
  indicatif: {
    présent: ["permets", "permets", "permet", "permettons", "permettez", "permettent"],
    passé_composé: { aux: "avoir", participle: "permis" },
    imparfait: ["permettais", "permettais", "permettait", "permettions", "permettiez", "permettaient"],
    plus_que_parfait: { aux: "avoir", participle: "permis" },
    futur_simple: ["permettrai", "permettras", "permettra", "permettrons", "permettrez", "permettront"],
    futur_proche: { aux: "aller", participle: "permettre" }
  },
  subjonctif: {
    présent: ["permette", "permettes", "permette", "permettions", "permettiez", "permettent"]
  },
  conditionnel: {
    présent: ["permettrais", "permettrais", "permettrait", "permettrions", "permettriez", "permettraient"],
    passé: { aux: "avoir", participle: "permis" }
  },
  imperatif: {
    present: ["permets", "permettons", "permettez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich erlaube mir, eine Pause zu machen.", fr: "Je me permets de faire une pause." },
      { de: "Dieses Ticket erlaubt den Zugang zum Konzert.", fr: "Ce ticket permet l'accès au concert." },
      { de: "Meine Eltern erlauben mir nicht, spät auszugehen.", fr: "Mes parents ne me permettent pas de sortir tard." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat mir erlaubt, sein Auto zu benutzen.", fr: "Il m'a permis d'utiliser sa voiture." },
      { de: "Die Technologie hat unglaubliche Fortschritte ermöglicht.", fr: "La technologie a permis des progrès incroyables." },
      { de: "Wir haben uns erlaubt, früher zu gehen.", fr: "Nous nous sommes permis de partir plus tôt." }
    ],
    "indicatif_imparfait": [
        { de: "Das Gesetz erlaubte es damals nicht.", fr: "La loi ne le permettait pas à l'époque." },
        { de: "Sein Job erlaubte ihm, viel zu reisen.", fr: "Son travail lui permettait de beaucoup voyager." },
        { de: "Ihr erlaubtet den Kindern, im Garten zu spielen.", fr: "Vous permettiez aux enfants de jouer dans le jardin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Seine Ersparnisse hatten ihm den Kauf dieses Hauses ermöglicht.", fr: "Ses économies lui avaient permis d'acheter cette maison." },
        { de: "Ich hatte mir eine kleine Freiheit erlaubt.", fr: "Je m'étais permis une petite fantaisie." },
        { de: "Gutes Wetter hatte uns erlaubt, draußen zu essen.", fr: "Le beau temps nous avait permis de manger dehors." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde es dir nicht erlauben, so mit mir zu reden.", fr: "Je ne te permettrai pas de me parler comme ça." },
      { de: "Diese Entdeckung wird neue Forschungen ermöglichen.", fr: "Cette découverte permettra de nouvelles recherches." },
      { de: "Werden Sie uns erlauben, eine Frage zu stellen?", fr: "Nous permettrez-vous de poser une question ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Sein Mut wird ihm erlauben, alle Hindernisse zu überwinden.", fr: "Son courage va lui permettre de surmonter tous les obstacles." },
      { de: "Wir werden es uns erlauben, anderer Meinung zu sein.", fr: "Nous allons nous permettre d'être en désaccord." },
      { de: "Das wird mir erlauben, mich auszuruhen.", fr: "Ça va me permettre de me reposer." }
    ],
    "conditionnel_présent": [
        { de: "Würden Sie mir erlauben, das Telefon zu benutzen?", fr: "Me permettriez-vous d'utiliser le téléphone ?" },
        { de: "Ein höheres Gehalt würde es ihm ermöglichen, umzuziehen.", fr: "Un meilleur salaire lui permettrait de déménager." },
        { de: "Das würde uns erlauben, Zeit zu sparen.", fr: "Cela nous permettrait de gagner du temps." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte mir das niemals erlaubt.", fr: "Je ne me serais jamais permis cela." },
        { de: "Das hätte uns erlaubt, das Projekt abzuschließen.", fr: "Cela nous aurait permis de terminer le projet." },
        { de: "Er hätte es nicht erlaubt, wenn er da gewesen wäre.", fr: "Il ne l'aurait pas permis s'il avait été là." }
    ],
    "subjonctif_présent": [
      { de: "Ich möchte, dass du mir erlaubst, dir zu helfen.", fr: "Je veux que tu me permettes de t'aider." },
      { de: "Es ist wichtig, dass die Regeln es allen erlauben, teilzunehmen.", fr: "Il est important que les règles permettent à tous de participer." },
      { de: "Damit er es uns erlaubt, müssen wir ihn überzeugen.", fr: "Pour qu'il nous le permette, nous devons le convaincre." }
    ]
  }
};
