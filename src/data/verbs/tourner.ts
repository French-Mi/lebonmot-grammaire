import type { Verb } from '@/types/verb-types';

export const tourner: Verb = {
  infinitive: "tourner",
  translation: "drehen / abbiegen",
  verbGroup: 1,
  indicatif: {
    présent: ["tourne", "tournes", "tourne", "tournons", "tournez", "tournent"],
    passé_composé: { aux: "avoir", participle: "tourné" },
    imparfait: ["tournais", "tournais", "tournait", "tournions", "tourniez", "tournaient"],
    plus_que_parfait: { aux: "avoir", participle: "tourné" },
    futur_simple: ["tournerai", "tourneras", "tournera", "tournerons", "tournerez", "tourneront"],
    futur_proche: { aux: "aller", participle: "tourner" }
  },
  subjonctif: { présent: ["tourne", "tournes", "tourne", "tournions", "tourniez", "tournent"] },
  conditionnel: { présent: ["tournerais", "tournerais", "tournerait", "tournerions", "tourneriez", "tourneraient"], passé: { aux: "avoir", participle: "tourné" } },
  imperatif: { present: ["tourne", "tournons", "tournez"] },
  examples: {
    "indicatif_présent": [
      { de: "Biegen Sie an der nächsten Straße rechts ab.", fr: "Tournez à droite à la prochaine rue." },
      { de: "Die Erde dreht sich um die Sonne.", fr: "La Terre tourne autour du Soleil." },
      { de: "Ich drehe die Seite um.", fr: "Je tourne la page." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe einen Film gedreht.", fr: "J'ai tourné un film." },
      { de: "Er ist nach links abgebogen.", fr: "Il a tourné à gauche." },
      { de: "Wir haben uns umgedreht.", fr: "Nous nous sommes tournés." }
    ],
    "indicatif_imparfait": [
        { de: "Der Wind drehte die Windmühle.", fr: "Le vent tournait le moulin." },
        { de: "Sie drehte den Kopf, um zu sehen.", fr: "Elle tournait la tête pour voir." },
        { de: "Wir bogen immer an dieser Ecke ab.", fr: "Nous tournions toujours à ce coin." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Er hatte die Seite bereits umgedreht.", fr: "Il avait déjà tourné la page." },
        { de: "Ich hatte den Schlüssel im Schloss gedreht.", fr: "J'avais tourné la clé dans la serrure." },
        { de: "Wir hatten dem Problem den Rücken gekehrt.", fr: "Nous avions tourné le dos au problème." }
    ],
    "indicatif_futur_simple": [
      { de: "An der Ampel wirst du rechts abbiegen.", fr: "Au feu, tu tourneras à droite." },
      { de: "Das Rad wird sich weiterdrehen.", fr: "La roue tournera encore." },
      { de: "Wir werden die nächste Szene morgen drehen.", fr: "Nous tournerons la prochaine scène demain." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde rechts abbiegen.", fr: "Je vais tourner à droite." },
      { de: "Der Film, den wir drehen werden, ist eine Komödie.", fr: "Le film que nous allons tourner est une comédie." },
      { de: "Achtung, du wirst dich im Kreis drehen.", fr: "Attention, tu vas tourner en rond." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde an deiner Stelle nicht abbiegen.", fr: "Je ne tournerais pas à ta place." },
        { de: "Er würde einen Dokumentarfilm drehen.", fr: "Il tournerait un film documentaire." },
        { de: "Wir würden uns umdrehen, wenn wir etwas hören würden.", fr: "Nous nous tournerions si nous entendions quelque chose." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du die Seite umblätterst.", fr: "Il est important que tu tournes la page." },
      { de: "Ich möchte nicht, dass sich der Film schlecht entwickelt.", fr: "Je ne veux pas que le film tourne mal." },
      { de: "Damit sich das Rad dreht, braucht es Wind.", fr: "Pour que la roue tourne, il faut du vent." }
    ]
  }
};
