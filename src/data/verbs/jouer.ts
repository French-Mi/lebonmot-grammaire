import type { Verb } from '@/types/verb-types';

export const jouer: Verb = {
  infinitive: "jouer",
  translation: "spielen",
  verbGroup: 1,
  indicatif: {
    présent: ["joue", "joues", "joue", "jouons", "jouez", "jouent"],
    passé_composé: { aux: "avoir", participle: "joué" },
    imparfait: ["jouais", "jouais", "jouait", "jouions", "jouiez", "jouaient"],
    plus_que_parfait: { aux: "avoir", participle: "joué" },
    futur_simple: ["jouerai", "joueras", "jouera", "jouerons", "jouerez", "joueront"],
    futur_proche: { aux: "aller", participle: "jouer" }
  },
  subjonctif: { présent: ["joue", "joues", "joue", "jouions", "jouiez", "jouent"] },
  conditionnel: { présent: ["jouerais", "jouerais", "jouerait", "jouerions", "joueriez", "joueraient"], passé: { aux: "avoir", participle: "joué" } },
  imperatif: { present: ["joue", "jouons", "jouez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich spiele Gitarre.", fr: "Je joue de la guitare." },
      { de: "Spielst du Fußball?", fr: "Tu joues au football ?" },
      { de: "Die Kinder spielen im Garten.", fr: "Les enfants jouent dans le jardin." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe gestern Tennis gespielt.", fr: "J'ai joué au tennis hier." },
      { de: "Sie hat eine wichtige Rolle gespielt.", fr: "Elle a joué un rôle important." },
      { de: "Wir haben Karten gespielt.", fr: "Nous avons joué aux cartes." }
    ],
    "indicatif_imparfait": [
        { de: "Als ich klein war, spielte ich oft mit Puppen.", fr: "Quand j'étais petite, je jouais souvent à la poupée." },
        { de: "Er spielte Klavier, als wir ankamen.", fr: "Il jouait du piano quand nous sommes arrivés." },
        { de: "Ihr habt immer zusammen gespielt.", fr: "Vous jouiez toujours ensemble." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte noch nie zuvor Schach gespielt.", fr: "Je n'avais jamais joué aux échecs avant." },
        { de: "Sie hatte bereits in einem berühmten Film mitgespielt.", fr: "Elle avait déjà joué dans un film célèbre." },
        { de: "Wir hatten unsere beste Partie gespielt.", fr: "Nous avions joué notre meilleur match." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich mit meinem Bruder spielen.", fr: "Demain, je jouerai avec mon frère." },
      { de: "Wirst du mit uns spielen?", fr: "Tu joueras avec nous ?" },
      { de: "Unsere Mannschaft wird nächsten Samstag spielen.", fr: "Notre équipe jouera samedi prochain." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde Basketball spielen.", fr: "Je vais jouer au basket." },
      { de: "Sie wird eine Komödie spielen.", fr: "Elle va jouer une comédie." },
      { de: "Wir werden draußen spielen.", fr: "Nous allons jouer dehors." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne mit dir spielen.", fr: "J'aimerais jouer avec toi." },
        { de: "Er würde besser spielen, wenn er nicht verletzt wäre.", fr: "Il jouerait mieux s'il n'était pas blessé." },
        { de: "Wir würden den ganzen Tag spielen, wenn wir könnten.", fr: "Nous jouerions toute la journée si nous le pouvions." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass die Kinder draußen spielen.", fr: "Il est important que les enfants jouent dehors." },
      { de: "Ich möchte, dass du fair spielst.", fr: "Je veux que tu joues franc jeu." },
      { de: "Erlauben Sie, dass wir hier spielen?", fr: "Permettez que nous jouions ici ?" }
    ]
  }
};
