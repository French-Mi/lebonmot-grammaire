// src/data/verbs/aimer.ts
import type { Verb } from '@/types/verb-types';

export const aimer: Verb = {
  infinitive: "aimer",
  translation: "lieben / mögen",
  verbGroup: 1,
  indicatif: {
    présent: ["aime", "aimes", "aime", "aimons", "aimez", "aiment"],
    passé_composé: { aux: "avoir", participle: "aimé" },
    imparfait: ["aimais", "aimais", "aimait", "aimions", "aimiez", "aimaient"],
    plus_que_parfait: { aux: "avoir", participle: "aimé" },
    futur_simple: ["aimerai", "aimeras", "aimera", "aimerons", "aimerez", "aimeront"],
    futur_proche: { aux: "aller", participle: "aimer" }
  },
  subjonctif: { présent: ["aime", "aimes", "aime", "aimions", "aimiez", "aiment"] },
  conditionnel: { présent: ["aimerais", "aimerais", "aimerait", "aimerions", "aimeriez", "aimeraient"], passé: { aux: "avoir", participle: "aimé" } },
  imperatif: { present: ["aime", "aimons", "aimez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich mag Schokolade.", fr: "J'aime le chocolat." },
      { de: "Sie liebt es zu tanzen.", fr: "Elle aime danser." },
      { de: "Wir lieben unsere Freunde.", fr: "Nous aimons nos amis." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe diesen Film sehr gemocht.", fr: "J'ai beaucoup aimé ce film." },
      { de: "Sie hat die Überraschung geliebt.", fr: "Elle a aimé la surprise." },
      { de: "Sie haben das Konzert gemocht.", fr: "Ils ont aimé le concert." }
    ],
    "indicatif_imparfait": [
      { de: "Als ich ein Kind war, liebte ich es, draußen zu spielen.", fr: "Quand j'étais enfant, j'aimais jouer dehors." },
      { de: "Er mochte das Lesen sehr.", fr: "Il aimait beaucoup lire." },
      { de: "Ihr liebtet es, an den Strand zu gehen.", fr: "Vous aimiez aller à la plage." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Er hatte seine Arbeit immer geliebt.", fr: "Il avait toujours aimé son travail." },
      { de: "Sie hatte es geliebt, hier zu leben.", fr: "Elle avait aimé vivre ici." },
      { de: "Wir hatten es geliebt, diese Lieder zu singen.", fr: "Nous avions aimé chanter ces chansons." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich bin sicher, du wirst dieses Buch mögen.", fr: "Je suis sûr que tu aimeras ce livre." },
      { de: "Er wird seine neue Schule lieben.", fr: "Il aimera sa nouvelle école." },
      { de: "Wir werden Musik immer lieben.", fr: "Nous aimerons toujours la musique." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dieses Spiel lieben.", fr: "Je vais aimer ce jeu." },
      { de: "Sie wird es lieben, das zu hören.", fr: "Elle va aimer entendre ça." },
      { de: "Wir werden unsere Ferien lieben.", fr: "Nous allons aimer nos vacances." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde gerne öfter reisen.", fr: "J'aimerais voyager plus souvent." },
      { de: "Sie würde gerne Klavier lernen.", fr: "Elle aimerait apprendre le piano." },
      { de: "Wir würden euch gerne einladen.", fr: "Nous aimerions vous inviter." }
    ],
    "subjonctif_présent": [
      { de: "Ich muss meine Arbeit mögen, um glücklich zu sein.", fr: "Il faut que j'aime mon travail pour être heureux." },
      { de: "Ich bevorzuge es, dass du diesen Film magst.", fr: "Je préfère que tu aimes ce film." },
      { de: "Es ist wichtig, dass sie das Projekt mögen.", fr: "Il est important qu'ils aiment le projet." }
    ]
  }
};
