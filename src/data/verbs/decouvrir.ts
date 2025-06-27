import type { Verb } from '@/types/verb-types';

export const decouvrir: Verb = {
  infinitive: "découvrir",
  translation: "entdecken",
  verbGroup: 3,
  indicatif: {
    présent: ["découvre", "découvres", "découvre", "découvrons", "découvrez", "découvrent"],
    passé_composé: { aux: "avoir", participle: "découvert" },
    imparfait: ["découvrais", "découvrais", "découvrait", "découvrions", "découvriez", "découvraient"],
    plus_que_parfait: { aux: "avoir", participle: "découvert" },
    futur_simple: ["découvrirai", "découvriras", "découvrira", "découvrirons", "découvrirez", "découvriront"],
    futur_proche: { aux: "aller", participle: "découvrir" }
  },
  subjonctif: { présent: ["découvre", "découvres", "découvre", "découvrions", "découvriez", "découvrent"] },
  conditionnel: { présent: ["découvrirais", "découvrirais", "découvrirait", "découvririons", "découvririez", "découvriraient"], passé: { aux: "avoir", participle: "découvert" } },
  imperatif: { present: ["découvre", "découvrons", "découvrez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich entdecke eine neue Stadt.", fr: "Je découvre une nouvelle ville." },
      { de: "Was entdeckst du unter dem Bett?", fr: "Que découvres-tu sous le lit ?" },
      { de: "Wir entdecken eine verborgene Welt.", fr: "Nous découvrons un monde caché." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ein Geheimnis entdeckt.", fr: "J'ai découvert un secret." },
      { de: "Christoph Kolumbus hat Amerika entdeckt.", fr: "Christophe Colomb a découvert l'Amérique." },
      { de: "Wir haben ein tolles Restaurant entdeckt.", fr: "Nous avons découvert un super restaurant." }
    ],
    "indicatif_imparfait": [
        { de: "Jeden Tag entdeckte er etwas Neues.", fr: "Chaque jour, il découvrait quelque chose de nouveau." },
        { de: "Wir entdeckten nach und nach die Wahrheit.", fr: "Nous découvrions la vérité petit à petit." },
        { de: "Ich entdeckte gerade die Lösung.", fr: "Je découvrais la solution à l'instant." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte die Antwort zufällig entdeckt.", fr: "J'avais découvert la réponse par hasard." },
        { de: "Sie hatte ein verborgenes Talent in sich entdeckt.", fr: "Elle avait découvert un talent caché en elle." },
        { de: "Sie hatten den Schatz vor allen anderen entdeckt.", fr: "Ils avaient découvert le trésor avant tout le monde." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde neue Horizonte entdecken.", fr: "Je découvrirai de nouveaux horizons." },
      { de: "Du wirst seine wahren Absichten entdecken.", fr: "Tu découvriras ses vraies intentions." },
      { de: "Wir werden gemeinsam die Welt entdecken.", fr: "Nous découvrirons le monde ensemble." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ein Geheimnis entdecken.", fr: "Je vais découvrir un secret." },
      { de: "Sie wird bald die Wahrheit entdecken.", fr: "Elle va bientôt découvrir la vérité." },
      { de: "Wir werden neue Orte entdecken.", fr: "Nous allons découvrir de nouveaux endroits." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde gerne neue Kulturen entdecken.", fr: "J'aimerais découvrir de nouvelles cultures." },
        { de: "Er würde eine andere Welt entdecken.", fr: "Il découvrirait un autre monde." },
        { de: "Wir würden viele Dinge entdecken, wenn wir reisen würden.", fr: "Nous découvririons beaucoup de choses si nous voyagions." }
    ],
    "subjonctif_présent": [
      { de: "Es ist möglich, dass du ein Talent entdeckst.", fr: "Il est possible que tu découvres un talent." },
      { de: "Ich will, dass er die Welt entdeckt.", fr: "Je veux qu'il découvre le monde." },
      { de: "Bevor wir etwas entdecken, müssen wir suchen.", fr: "Avant que nous découvrions quelque chose, il faut chercher." }
    ]
  }
};
