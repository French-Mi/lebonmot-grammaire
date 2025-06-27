// src/data/verbs/parler.ts
import type { Verb } from '@/types/verb-types';

export const parler: Verb = {
  infinitive: "parler",
  translation: "sprechen / reden",
  verbGroup: 1,
  indicatif: {
    présent: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
    passé_composé: { aux: "avoir", participle: "parlé" },
    imparfait: ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
    plus_que_parfait: { aux: "avoir", participle: "parlé" },
    futur_simple: ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
    futur_proche: { aux: "aller", participle: "parler" }
  },
  subjonctif: { présent: ["parle", "parles", "parle", "parlions", "parliez", "parlent"] },
  conditionnel: { présent: ["parlerais", "parlerais", "parlerait", "parlerions", "parleriez", "parleraient"], passé: { aux: "avoir", participle: "parlé" } },
  imperatif: { present: ["parle", "parlons", "parlez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich spreche Französisch.", fr: "Je parle français." },
      { de: "Sie spricht mit ihrer Freundin.", fr: "Elle parle avec son amie." },
      { de: "Sprechen Sie Englisch?", fr: "Est-ce que vous parlez anglais ?" }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe mit ihm gesprochen.", fr: "J'ai parlé avec lui." },
      { de: "Sie haben über das Projekt geredet.", fr: "Ils ont parlé du projet." },
      { de: "Hast du mit deinen Eltern gesprochen?", fr: "Tu as parlé à tes parents ?" }
    ],
    "indicatif_imparfait": [
      { de: "Er sprach immer sehr leise.", fr: "Il parlait toujours très bas." },
      { de: "Wir sprachen über alles und nichts.", fr: "Nous parlions de tout et de rien." },
      { de: "Als Kind sprachst du nicht viel.", fr: "Quand tu étais petit, tu ne parlais pas beaucoup." }
    ],
    "indicatif_plus_que_parfait": [
      { de: "Ich hatte mit ihm gesprochen, bevor ich ging.", fr: "J'avais parlé avec lui avant de partir." },
      { de: "Sie hatte bereits mit dem Lehrer gesprochen.", fr: "Elle avait déjà parlé avec le professeur." },
      { de: "Wir hatten über dieses Thema gesprochen.", fr: "Nous avions parlé de ce sujet." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde morgen mit ihr sprechen.", fr: "Je lui parlerai demain." },
      { de: "Wir werden später darüber reden.", fr: "Nous en parlerons plus tard." },
      { de: "Wirst du auf der Konferenz sprechen?", fr: "Tu parleras à la conférence ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde mit dem Chef sprechen.", fr: "Je vais parler au chef." },
      { de: "Sie wird gleich mit dir sprechen.", fr: "Elle va te parler tout de suite." },
      { de: "Wir werden über unsere Pläne sprechen.", fr: "Nous allons parler de nos projets." }
    ],
    "conditionnel_présent": [
      { de: "Ich würde gerne mit Ihnen sprechen.", fr: "Je parlerais volontiers avec vous." },
      { de: "An deiner Stelle würde ich mit ihm reden.", fr: "À ta place, je lui parlerais." },
      { de: "Er würde lauter sprechen, wenn er könnte.", fr: "Il parlerait plus fort s'il le pouvait." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du mit ihr sprichst.", fr: "Il est important que tu parles avec elle." },
      { de: "Ich möchte, dass wir darüber reden.", fr: "Je veux que nous en parlions." },
      { de: "Er verbietet, dass sie mit Fremden spricht.", fr: "Il interdit qu'elle parle aux inconnus." }
    ]
  }
};
