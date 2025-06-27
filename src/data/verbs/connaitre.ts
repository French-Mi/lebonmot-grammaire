import type { Verb } from '@/types/verb-types';

export const connaitre: Verb = {
  infinitive: "connaître",
  translation: "kennen",
  verbGroup: 3,
  indicatif: {
    présent: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
    passé_composé: { aux: "avoir", participle: "connu" },
    imparfait: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
    plus_que_parfait: { aux: "avoir", participle: "connu" },
    futur_simple: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
    futur_proche: { aux: "aller", participle: "connaître" }
  },
  subjonctif: { présent: ["connaisse", "connaisses", "connaisse", "connaissions", "connaissiez", "connaissent"] },
  conditionnel: { présent: ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"], passé: { aux: "avoir", participle: "connu" } },
  imperatif: { present: ["connais", "connaissons", "connaissez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich kenne diesen Mann.", fr: "Je connais cet homme." },
      { de: "Kennst du Paris?", fr: "Tu connais Paris ?" },
      { de: "Wir kennen die Regeln.", fr: "Nous connaissons les règles." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihn auf einer Party kennengelernt.", fr: "Je l'ai connu à une fête." },
      { de: "Sie hat nie wahren Frieden gekannt.", fr: "Elle n'a jamais connu la vraie paix." },
      { de: "Wir haben große Erfolge gekannt.", fr: "Nous avons connu de grands succès." }
    ],
    "indicatif_imparfait": [
        { de: "Ich kannte ihn gut.", fr: "Je le connaissais bien." },
        { de: "Damals kannten wir die Antwort nicht.", fr: "À cette époque, nous ne connaissions pas la réponse." },
        { de: "Sie kannten sich seit ihrer Kindheit.", fr: "Ils se connaissaient depuis leur enfance." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihn vor seiner Berühmtheit gekannt.", fr: "Je l'avais connu avant sa célébrité." },
        { de: "Sie hatte dieses Gefühl nie zuvor gekannt.", fr: "Elle n'avait jamais connu ce sentiment auparavant." },
        { de: "Wir hatten die Risiken gekannt.", fr: "Nous avions connu les risques." }
    ],
    "indicatif_futur_simple": [
      { de: "Du wirst eines Tages den Ruhm kennenlernen.", fr: "Tu connaîtras la gloire un jour." },
      { de: "Er wird die Konsequenzen seiner Taten kennenlernen.", fr: "Il connaîtra les conséquences de ses actes." },
      { de: "Wir werden eine neue Kultur kennenlernen.", fr: "Nous connaîtrons une nouvelle culture." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde bald die Ergebnisse kennen.", fr: "Je vais bientôt connaître les résultats." },
      { de: "Sie wird eine neue Welt kennenlernen.", fr: "Elle va connaître un nouveau monde." },
      { de: "Wir werden seine wahre Natur kennenlernen.", fr: "Nous allons connaître sa vraie nature." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde ihn gerne besser kennenlernen.", fr: "J'aimerais mieux le connaître." },
        { de: "Wenn du ihn kennen würdest, würdest du ihn mögen.", fr: "Si tu le connaissais, tu l'aimerais." },
        { de: "Man würde meinen, sie kennen sich.", fr: "On dirait qu'ils se connaissent." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du deine Rechte kennst.", fr: "Il est important que tu connaisses tes droits." },
      { de: "Ich glaube nicht, dass er die Antwort kennt.", fr: "Je ne pense pas qu'il connaisse la réponse." },
      { de: "Damit wir uns besser kennenlernen.", fr: "Afin que nous nous connaissions mieux." }
    ]
  }
};
