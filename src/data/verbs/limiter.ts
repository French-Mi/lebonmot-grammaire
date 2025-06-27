import type { Verb } from '@/types/verb-types';

export const limiter: Verb = {
  infinitive: "limiter",
  translation: "begrenzen / beschränken",
  verbGroup: 1,
  indicatif: {
    présent: ["limite", "limites", "limite", "limitons", "limitez", "limitent"],
    passé_composé: { aux: "avoir", participle: "limité" },
    imparfait: ["limitais", "limitais", "limitait", "limitions", "limitiez", "limitaient"],
    plus_que_parfait: { aux: "avoir", participle: "limité" },
    futur_simple: ["limiterai", "limiteras", "limitera", "limiterons", "limiterez", "limiteront"],
    futur_proche: { aux: "aller", participle: "limiter" }
  },
  subjonctif: { présent: ["limite", "limites", "limite", "limitions", "limitiez", "limitent"] },
  conditionnel: { présent: ["limiterais", "limiterais", "limiterait", "limiterions", "limiteriez", "limiteraient"], passé: { aux: "avoir", participle: "limité" } },
  imperatif: { present: ["limite", "limitons", "limitez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich beschränke meinen Zuckerkonsum.", fr: "Je limite ma consommation de sucre." },
      { de: "Dieses Schild begrenzt die Geschwindigkeit auf 50 km/h.", fr: "Ce panneau limite la vitesse à 50 km/h." },
      { de: "Wir müssen unsere Ausgaben begrenzen.", fr: "Nous devons limiter nos dépenses." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe die Anzahl der Gäste begrenzt.", fr: "J'ai limité le nombre d'invités." },
      { de: "Die Regierung hat die Importe beschränkt.", fr: "Le gouvernement a limité les importations." },
      { de: "Sie haben den Zugang zum Park eingeschränkt.", fr: "Ils ont limité l'accès au parc." }
    ],
    "indicatif_imparfait": [
        { de: "Das Gesetz beschränkte ihre Freiheiten.", fr: "La loi limitait leurs libertés." },
        { de: "Er begrenzte seine Anstrengungen auf das Minimum.", fr: "Il limitait ses efforts au minimum." },
        { de: "Wir beschränkten unsere Suche auf dieses Gebiet.", fr: "Nous limitions nos recherches à cette zone." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte meine Erwartungen bereits begrenzt.", fr: "J'avais déjà limité mes attentes." },
        { de: "Der alte Zaun hatte das Grundstück begrenzt.", fr: "L'ancienne clôture avait limité la propriété." },
        { de: "Sie hatten die Risiken so weit wie möglich begrenzt.", fr: "Ils avaient limité les risques autant que possible." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde meine Bildschirmzeit begrenzen.", fr: "Je limiterai mon temps d'écran." },
      { de: "Das neue Budget wird unsere Ausgaben begrenzen.", fr: "Le nouveau budget limitera nos dépenses." },
      { de: "Wir werden die Diskussion auf das Hauptthema beschränken.", fr: "Nous limiterons la discussion au sujet principal." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde die Teilnehmerzahl begrenzen.", fr: "Je vais limiter le nombre de participants." },
      { de: "Die Stadt wird den Verkehr einschränken.", fr: "La ville va limiter la circulation." },
      { de: "Wir werden die Nutzung von Plastik einschränken.", fr: "Nous allons limiter l'usage du plastique." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde die Anzahl der Einladungen begrenzen.", fr: "Je limiterais le nombre d'invitations." },
        { de: "Das würde die Risiken erheblich begrenzen.", fr: "Cela limiterait considérablement les risques." },
        { de: "An deiner Stelle würden wir die Optionen einschränken.", fr: "À ta place, nous limiterions les options." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du deine Ausgaben begrenzt.", fr: "Il faut que tu limites tes dépenses." },
      { de: "Ich möchte nicht, dass dies unsere Möglichkeiten einschränkt.", fr: "Je ne veux pas que cela limite nos options." },
      { de: "Es ist besser, dass wir die Dauer des Treffens begrenzen.", fr: "Il vaut mieux que nous limitions la durée de la réunion." }
    ]
  }
};
