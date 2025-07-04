import type { Verb } from '@/types/verb-types';

export const rater: Verb = {
  infinitive: "rater",
  translation: "verpassen, nicht bestehen, misslingen",
  verbGroup: 1,
  indicatif: {
    présent: ["rate", "rates", "rate", "ratons", "ratez", "ratent"],
    passé_composé: { aux: "avoir", participle: "raté" },
    imparfait: ["ratais", "ratais", "ratait", "rations", "ratiez", "rataient"],
    plus_que_parfait: { aux: "avoir", participle: "raté" },
    futur_simple: ["raterai", "rateras", "ratera", "raterons", "raterez", "rateront"],
    futur_proche: { aux: "aller", participle: "rater" }
  },
  subjonctif: {
    présent: ["rate", "rates", "rate", "rations", "ratiez", "ratent"]
  },
  conditionnel: {
    présent: ["raterais", "raterais", "raterait", "raterions", "rateriez", "rateraient"],
    passé: { aux: "avoir", participle: "raté" }
  },
  imperatif: {
    present: ["rate", "ratons", "ratez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich verpasse meinen Zug fast jeden Morgen.", fr: "Je rate mon train presque tous les matins." },
      { de: "Er verpasst nie eine Gelegenheit zu lachen.", fr: "Il ne rate jamais une occasion de rire." },
      { de: "Wenn wir uns beeilen, verpassen wir den Anfang des Films nicht.", fr: "Si nous nous dépêchons, nous ne ratons pas le début du film." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Prüfung nicht bestanden.", fr: "J'ai raté mon examen." },
      { de: "Du hast eine tolle Party verpasst.", fr: "Tu as raté une super fête." },
      { de: "Sie haben ihren Flug verpasst.", fr: "Ils ont raté leur vol." }
    ],
    "indicatif_imparfait": [
        { de: "Er verpasste oft den Bus, weil er zu spät aufstand.", fr: "Il ratait souvent le bus parce qu'il se levait trop tard." },
        { de: "Wir verpassten nie eine Folge unserer Lieblingsserie.", fr: "Nous ne rations jamais un épisode de notre série préférée." },
        { de: "Ich hatte Angst, dass ich meine Prüfung nicht bestehen würde.", fr: "J'avais peur que je rate mon examen." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte den letzten Schritt verpasst und musste von vorne anfangen.", fr: "J'avais raté la dernière étape et j'ai dû tout recommencer." },
        { de: "Sie war enttäuscht, weil sie die Gelegenheit verpasst hatte.", fr: "Elle était déçue parce qu'elle avait raté l'occasion." },
        { de: "Wenn wir eine Minute später losgefahren wären, hätten wir den Zug verpasst.", fr: "Si nous étions partis une minute plus tard, nous aurions raté le train." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diese Gelegenheit nicht verpassen.", fr: "Je ne raterai pas cette opportunité." },
      { de: "Wenn du nicht lernst, wirst du deine Prüfungen nicht bestehen.", fr: "Si tu n'étudies pas, tu rateras tes examens." },
      { de: "Wir werden das Finale auf keinen Fall verpassen.", fr: "Nous ne raterons la finale pour rien au monde." }
    ],
    "indicatif_futur_proche": [
      { de: "Beeil dich, du wirst deinen Termin verpassen.", fr: "Dépêche-toi, tu vas rater ton rendez-vous." },
      { de: "Ich werde mein Rezept verpfuschen, wenn du mir nicht hilfst.", fr: "Je vais rater ma recette si tu ne m'aides pas." },
      { de: "Sie werden das Konzert verpassen, wenn sie nicht sofort losfahren.", fr: "Ils vont rater le concert s'ils ne partent pas maintenant." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es für nichts auf der Welt verpassen wollen.", fr: "Je ne raterais ça pour rien au monde." },
        { de: "Er würde seinen Schuss verfehlen, wenn er nervös wäre.", fr: "Il raterait son tir s'il était nerveux." },
        { de: "Wir würden das Ende verpassen, wenn wir jetzt gehen.", fr: "Nous raterions la fin si nous partions maintenant." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte meinen Flug beinahe verpasst.", fr: "J'aurais presque raté mon vol." },
        { de: "Du hättest die Prüfung nicht bestanden, wenn du nicht gelernt hättest.", fr: "Tu aurais raté l'examen si tu n'avais pas étudié." },
        { de: "Wir hätten eine unglaubliche Erfahrung verpasst.", fr: "Nous aurions raté une expérience incroyable." }
    ],
    "subjonctif_présent": [
      { de: "Ich habe Angst, dass ich meine Prüfung nicht bestehe.", fr: "J'ai peur que je rate mon examen." },
      { de: "Es wäre schade, wenn du diese Chance verpasst.", fr: "Ce serait dommage que tu rates cette chance." },
      { de: "Bevor wir den entscheidenden Schritt verpassen, sollten wir uns konzentrieren.", fr: "Avant que nous ne rations l'étape cruciale, nous devrions nous concentrer." }
    ]
  }
};
