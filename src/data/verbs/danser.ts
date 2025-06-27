import type { Verb } from '@/types/verb-types';

export const danser: Verb = {
  infinitive: "danser",
  translation: "tanzen",
  verbGroup: 1,
  indicatif: {
    présent: ["danse", "danses", "danse", "dansons", "dansez", "dansent"],
    passé_composé: { aux: "avoir", participle: "dansé" },
    imparfait: ["dansais", "dansais", "dansait", "dansions", "dansiez", "dansaient"],
    plus_que_parfait: { aux: "avoir", participle: "dansé" },
    futur_simple: ["danserai", "danseras", "dansera", "danserons", "danserez", "danseront"],
    futur_proche: { aux: "aller", participle: "danser" }
  },
  subjonctif: { présent: ["danse", "danses", "danse", "dansions", "dansiez", "dansent"] },
  conditionnel: { présent: ["danserais", "danserais", "danserait", "danserions", "danseriez", "danseraient"], passé: { aux: "avoir", participle: "dansé" } },
  imperatif: { present: ["danse", "dansons", "dansez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich tanze gerne.", fr: "J'aime danser." },
      { de: "Sie tanzt Walzer.", fr: "Elle danse la valse." },
      { de: "Wir tanzen die ganze Nacht.", fr: "Nous dansons toute la nuit." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe auf der Party getanzt.", fr: "J'ai dansé à la fête." },
      { de: "Hast du mit ihm getanzt?", fr: "As-tu dansé avec lui ?" },
      { de: "Sie haben zusammen getanzt.", fr: "Ils ont dansé ensemble." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind tanzte ich jeden Tag.", fr: "Quand j'étais enfant, je dansais tous les jours." },
        { de: "Sie tanzte mit Anmut.", fr: "Elle dansait avec grâce." },
        { de: "Wir tanzten unter den Sternen.", fr: "Nous dansions sous les étoiles." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte noch nie zuvor getanzt.", fr: "Je n'avais jamais dansé avant." },
        { de: "Sie hatte mit allen ihren Freunden getanzt.", fr: "Elle avait dansé avec tous ses amis." },
        { de: "Wir hatten getanzt, bis wir müde waren.", fr: "Nous avions dansé jusqu'à être fatigués." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde auf deiner Hochzeit tanzen.", fr: "Je danserai à ton mariage." },
      { de: "Wirst du mit mir tanzen?", fr: "Tu danseras avec moi ?" },
      { de: "Wir werden bis zum Morgengrauen tanzen.", fr: "Nous danserons jusqu'à l'aube." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde gleich tanzen.", fr: "Je vais danser tout de suite." },
      { de: "Sie wird mit ihm tanzen.", fr: "Elle va danser avec lui." },
      { de: "Wir werden viel tanzen.", fr: "Nous allons beaucoup danser." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne mit dir tanzen.", fr: "J'aimerais danser avec toi." },
        { de: "Er würde besser tanzen, wenn er üben würde.", fr: "Il danserait mieux s'il s'entraînait." },
        { de: "Würden Sie mit mir tanzen?", fr: "Danseriez-vous avec moi ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du mit ihr tanzt.", fr: "Il est important que tu danses avec elle." },
      { de: "Ich möchte, dass wir alle tanzen.", fr: "Je veux que nous dansions tous." },
      { de: "Damit sie tanzt, braucht sie Musik.", fr: "Pour qu'elle danse, il faut de la musique." }
    ]
  }
};
