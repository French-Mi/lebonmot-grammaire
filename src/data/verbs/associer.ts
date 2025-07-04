import type { Verb } from '@/types/verb-types';

export const associer: Verb = {
  infinitive: "associer",
  translation: "verbinden, assoziieren, beteiligen",
  verbGroup: 1,
  indicatif: {
    présent: ["associe", "associes", "associe", "associons", "associez", "associent"],
    passé_composé: { aux: "avoir", participle: "associé" },
    imparfait: ["associais", "associais", "associait", "associions", "associiez", "associaient"],
    plus_que_parfait: { aux: "avoir", participle: "associé" },
    futur_simple: ["associerai", "associeras", "associera", "associerons", "associerez", "associeront"],
    futur_proche: { aux: "aller", participle: "associer" }
  },
  subjonctif: {
    présent: ["associe", "associes", "associe", "associions", "associiez", "associent"]
  },
  conditionnel: {
    présent: ["associerais", "associerais", "associerait", "associerions", "associeriez", "associeraient"],
    passé: { aux: "avoir", participle: "associé" }
  },
  imperatif: {
    present: ["associe", "associons", "associez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich verbinde diese Farbe mit dem Sommer.", fr: "J'associe cette couleur à l'été." },
      { de: "Er beteiligt seine Partner an allen Entscheidungen.", fr: "Il associe ses partenaires à toutes les décisions." },
      { de: "Wir verbinden verschiedene Elemente, um ein neues Produkt zu schaffen.", fr: "Nous associons différents éléments pour créer un nouveau produit." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe Ihren Namen nicht mit diesem Projekt in Verbindung gebracht.", fr: "Je n'ai pas associé votre nom à ce projet." },
      { de: "Sie hat zwei Ideen zu einer einzigen kombiniert (verbunden).", fr: "Elle a associé deux idées en une seule." },
      { de: "Sie haben uns an ihrem Erfolg beteiligt.", fr: "Ils nous ont associés à leur succès." }
    ],
    "indicatif_imparfait": [
        { de: "Er verband Gerüche immer mit Erinnerungen.", fr: "Il associait toujours les odeurs à des souvenirs." },
        { de: "Wir beteiligten die Mitarbeiter an der Entwicklung des Unternehmens.", fr: "Nous associions les employés au développement de l'entreprise." },
        { de: "Ihr habt oft Blau mit Gelb kombiniert.", fr: "Vous associiez souvent le bleu et le jaune." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte seinen Namen mit einem guten Zweck verbunden.", fr: "Il avait associé son nom à une bonne cause." },
        { de: "Die Designerin hatte verschiedene Materialien miteinander verbunden.", fr: "La créatrice avait associé différents matériaux." },
        { de: "Wir hatten die beiden Fälle miteinander in Verbindung gebracht.", fr: "Nous avions associé les deux affaires." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich an diesem Projekt beteiligen.", fr: "Je t'associerai à ce projet." },
      { de: "Sie wird diese beiden Künstler für ein Duett zusammenbringen (verbinden).", fr: "Elle associera ces deux artistes pour un duo." },
      { de: "Wir werden unsere Kräfte bündeln (verbinden).", fr: "Nous associerons nos forces." }
    ],
    "indicatif_futur_proche": [
      { de: "Der Koch wird süß und salzig kombinieren.", fr: "Le chef va associer le sucré et le salé." },
      { de: "Wir werden unsere Kinder an dieser Aktivität beteiligen.", fr: "Nous allons associer nos enfants à cette activité." },
      { de: "Du wirst diese beiden Ereignisse nicht miteinander in Verbindung bringen.", fr: "Tu ne vas pas associer ces deux événements." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde diese beiden Farben nicht kombinieren.", fr: "Je n'associerais pas ces deux couleurs." },
        { de: "Würdest du uns an deiner Reflexion beteiligen?", fr: "Nous associerais-tu à ta réflexion ?" },
        { de: "Sie würden gerne ihre Unternehmen zusammenschließen (verbinden).", fr: "Ils aimeraient associer leurs entreprises." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dich an dem Projekt beteiligt, wenn du Interesse gezeigt hättest.", fr: "Je t'aurais associé(e) au projet si tu avais montré de l'intérêt." },
        { de: "Er hätte nie gedacht, dass man diese beiden Konzepte verbinden könnte.", fr: "Il n'aurait jamais pensé qu'on pourrait associer ces deux concepts." },
        { de: "Wir hätten unsere Bemühungen bündeln sollen.", fr: "Nous aurions dû associer nos efforts." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass man die richtigen Leute beteiligt.", fr: "Il est important qu'on associe les bonnes personnes." },
      { de: "Ich möchte, dass du mich an deinen Gedanken teilhaben lässt (mich beteiligst).", fr: "Je veux que tu m'associes à tes pensées." },
      { de: "Damit wir unsere Talente bündeln können, müssen wir kommunizieren.", fr: "Pour que nous associions nos talents, il faut communiquer." }
    ]
  }
};
