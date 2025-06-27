import type { Verb } from '@/types/verb-types';

export const rentrer: Verb = {
  infinitive: "rentrer",
  translation: "zurückkehren / heimkommen",
  verbGroup: 1,
  indicatif: {
    présent: ["rentre", "rentres", "rentre", "rentrons", "rentrez", "rentrent"],
    passé_composé: { aux: "être", participle: "rentré" },
    imparfait: ["rentrais", "rentrais", "rentrait", "rentrions", "rentriez", "rentraient"],
    plus_que_parfait: { aux: "être", participle: "rentré" },
    futur_simple: ["rentrerai", "rentreras", "rentrera", "rentrerons", "rentrerez", "rentreront"],
    futur_proche: { aux: "aller", participle: "rentrer" }
  },
  subjonctif: { présent: ["rentre", "rentres", "rentre", "rentrions", "rentriez", "rentrent"] },
  conditionnel: { présent: ["rentrerais", "rentrerais", "rentrerait", "rentrerions", "rentreriez", "rentreraient"], passé: { aux: "être", participle: "rentré" } },
  imperatif: { present: ["rentre", "rentrons", "rentrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich komme um 18 Uhr nach Hause.", fr: "Je rentre à 18 heures." },
      { de: "Wann kommst du nach Hause?", fr: "Quand est-ce que tu rentres ?" },
      { de: "Er kehrt von einer langen Reise zurück.", fr: "Il rentre d'un long voyage." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich bin spät nach Hause gekommen.", fr: "Je suis rentré(e) tard." },
      { de: "Sie ist gestern zurückgekehrt.", fr: "Elle est rentrée hier." },
      { de: "Wir sind vor dem Regen zurückgekommen.", fr: "Nous sommes rentrés avant la pluie." }
    ],
    "indicatif_imparfait": [
        { de: "Ich kam immer vor Einbruch der Dunkelheit nach Hause.", fr: "Je rentrais toujours avant la tombée de la nuit." },
        { de: "Du kamst oft müde von der Arbeit nach Hause.", fr: "Tu rentrais souvent fatigué(e) du travail." },
        { de: "Sie kamen jeden Abend zusammen nach Hause.", fr: "Ils rentraient ensemble tous les soirs." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich war bereits nach Hause gegangen, als du anriefst.", fr: "J'étais déjà rentré(e) quand tu as appelé." },
        { de: "Sie war gerade erst nach Hause gekommen.", fr: "Elle était tout juste rentrée." },
        { de: "Sie waren nach Hause gegangen, weil es spät war.", fr: "Ils étaient rentrés parce qu'il était tard." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde nicht vor Mitternacht heimkommen.", fr: "Je ne rentrerai pas avant minuit." },
      { de: "Du wirst müde nach Hause kommen.", fr: "Tu rentreras fatigué(e)." },
      { de: "Sie werden nächste Woche zurückkehren.", fr: "Ils rentreront la semaine prochaine." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde bald nach Hause gehen.", fr: "Je vais bientôt rentrer." },
      { de: "Wann wirst du nach Hause kommen?", fr: "Quand est-ce que tu vas rentrer ?" },
      { de: "Wir werden nach dem Film nach Hause gehen.", fr: "Nous allons rentrer après le film." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne früher nach Hause gehen.", fr: "J'aimerais rentrer plus tôt." },
        { de: "Er würde nach Hause gehen, wenn er könnte.", fr: "Il rentrerait s'il le pouvait." },
        { de: "Wir würden nicht so spät nach Hause kommen, wenn wir nicht müssten.", fr: "Nous ne rentrerions pas si tard si nous ne devions pas." }
    ],
    "subjonctif_présent": [
      { de: "Du musst nach Hause kommen, bevor es dunkel wird.", fr: "Il faut que tu rentres avant la nuit." },
      { de: "Ich möchte, dass er jetzt nach Hause kommt.", fr: "Je veux qu'il rentre maintenant." },
      { de: "Es ist besser, dass wir nach Hause gehen.", fr: "Il vaut mieux que nous rentrions." }
    ]
  }
};
