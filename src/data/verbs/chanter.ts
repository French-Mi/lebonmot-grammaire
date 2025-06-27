import type { Verb } from '@/types/verb-types';

export const chanter: Verb = {
  infinitive: "chanter",
  translation: "singen",
  verbGroup: 1,
  indicatif: {
    présent: ["chante", "chantes", "chante", "chantons", "chantez", "chantent"],
    passé_composé: { aux: "avoir", participle: "chanté" },
    imparfait: ["chantais", "chantais", "chantait", "chantions", "chantiez", "chantaient"],
    plus_que_parfait: { aux: "avoir", participle: "chanté" },
    futur_simple: ["chanterai", "chanteras", "chantera", "chanterons", "chanterez", "chanteront"],
    futur_proche: { aux: "aller", participle: "chanter" }
  },
  subjonctif: { présent: ["chante", "chantes", "chante", "chantions", "chantiez", "chantent"] },
  conditionnel: { présent: ["chanterais", "chanterais", "chanterait", "chanterions", "chanteriez", "chanteraient"], passé: { aux: "avoir", participle: "chanté" } },
  imperatif: { present: ["chante", "chantons", "chantez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich singe gerne unter der Dusche.", fr: "J'aime chanter sous la douche." },
      { de: "Sie singt in einem Chor.", fr: "Elle chante dans une chorale." },
      { de: "Singt ihr oft?", fr: "Vous chantez souvent ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mein Lieblingslied gesungen.", fr: "J'ai chanté ma chanson préférée." },
      { de: "Er hat auf der Bühne gesungen.", fr: "Il a chanté sur scène." },
      { de: "Wir haben die ganze Nacht gesungen.", fr: "Nous avons chanté toute la nuit." }
    ],
    "indicatif_imparfait": [
      { de: "Als sie klein war, sang sie immer.", fr: "Quand elle était petite, elle chantait tout le temps." },
      { de: "Die Vögel sangen am Morgen.", fr: "Les oiseaux chantaient le matin." },
      { de: "Ihr habt im Schulchor gesungen.", fr: "Vous chantiez dans la chorale de l'école." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte bereits zwei Lieder gesungen.", fr: "Il avait déjà chanté deux chansons." },
        { de: "Wir hatten noch nie zusammen gesungen.", fr: "Nous n'avions jamais chanté ensemble." },
        { de: "Hattest du dieses Lied schon einmal gesungen?", fr: "Avais-tu déjà chanté cette chanson ?" }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde auf deiner Hochzeit singen.", fr: "Je chanterai à ton mariage." },
      { de: "Wirst du beim Karaoke singen?", fr: "Tu chanteras au karaoké ?" },
      { de: "Sie werden die Nationalhymne singen.", fr: "Ils chanteront l'hymne national." }
    ],
    "indicatif_futur_proche": [
        { de: "Ich werde jetzt singen.", fr: "Je vais chanter maintenant." },
        { de: "Sie wird ein Schlaflied singen.", fr: "Elle va chanter une berceuse." },
        { de: "Wir werden im Auto singen.", fr: "Nous allons chanter dans la voiture." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne besser singen.", fr: "J'aimerais mieux chanter." },
        { de: "Er würde in einer Band singen, wenn er Zeit hätte.", fr: "Il chanterait dans un groupe s'il avait le temps." },
        { de: "Würdest du ein Duett mit mir singen?", fr: "Chanterais-tu un duo avec moi ?" }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du lauter singst.", fr: "Il faut que tu chantes plus fort." },
      { de: "Ich möchte, dass sie ein Lied singt.", fr: "Je veux qu'elle chante une chanson." },
      { de: "Es ist schön, dass wir zusammen singen.", fr: "C'est bien que nous chantions ensemble." }
    ]
  }
};
