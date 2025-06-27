// src/data/verbs/avoir.ts
import type { Verb } from '@/types/verb-types';

export const avoir: Verb = {
  infinitive: "avoir",
  translation: "haben",
  verbGroup: 0,
  indicatif: {
    présent: ["ai", "as", "a", "avons", "avez", "ont"],
    passé_composé: { aux: "avoir", participle: "eu" },
    imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    plus_que_parfait: { aux: "avoir", participle: "eu" },
    futur_simple: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
    futur_proche: { aux: "aller", participle: "avoir" }
  },
  subjonctif: { présent: ["aie", "aies", "ait", "ayons", "ayez", "aient"] },
  conditionnel: { présent: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"], passé: { aux: "avoir", participle: "eu" } },
  imperatif: { present: ["aie", "ayons", "ayez"] },
  examples: {
    "indicatif_présent": [
        { de: "Ich habe einen Bruder.", fr: "J'ai un frère." },
        { de: "Sie hat blonde Haare.", fr: "Elle a les cheveux blonds." },
        { de: "Wir haben ein großes Haus.", fr: "Nous avons une grande maison." }
    ],
    "indicatif_passé_composé": [
        { de: "Gestern hatte ich viel Arbeit.", fr: "Hier, j'ai eu beaucoup de travail." },
        { de: "Sie hat Glück gehabt.", fr: "Elle a eu de la chance." },
        { de: "Sie haben ein Kind bekommen.", fr: "Ils ont eu un enfant." }
    ],
    "indicatif_imparfait": [
        { de: "Als er jung war, hatte er einen Hund.", fr: "Quand il était jeune, il avait un chien." },
        { de: "Ihr hattet immer gute Ideen.", fr: "Vous aviez toujours de bonnes idées." },
        { de: "Ich hatte Hunger.", fr: "J'avais faim." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte bereits gegessen.", fr: "J'avais déjà eu mon repas." },
        { de: "Sie hatte die Nachricht erhalten.", fr: "Elle avait eu la nouvelle." },
        { de: "Wir hatten keine andere Wahl gehabt.", fr: "Nous n'avions pas eu d'autre choix." }
    ],
    "indicatif_futur_simple": [
        { de: "Du wirst bald 18 Jahre alt.", fr: "Tu auras bientôt 18 ans." },
        { de: "Wir werden die Antwort morgen haben.", fr: "Nous aurons la réponse demain." },
        { de: "Ihr werdet Erfolg haben.", fr: "Vous aurez du succès." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde bald Hunger haben.", fr: "Je vais bientôt avoir faim." },
      { de: "Du wirst ein Problem haben.", fr: "Tu vas avoir un problème." },
      { de: "Sie werden eine Überraschung haben.", fr: "Ils vont avoir une surprise." }
    ],
    "conditionnel_présent": [
        { de: "Wenn ich reich wäre, hätte ich ein Boot.", fr: "Si j'étais riche, j'aurais un bateau." },
        { de: "Er bräuchte deine Hilfe.", fr: "Il aurait besoin de ton aide." },
        { de: "Hätten Sie einen Moment Zeit?", fr: "Auriez-vous un moment ?" }
    ],
    "subjonctif_présent": [
      { de: "Ich bin froh, dass du ein neues Auto hast.", fr: "Je suis content que tu aies une nouvelle voiture." },
      { de: "Es ist wichtig, dass wir die Dokumente haben.", fr: "Il est important que nous ayons les documents." },
      { de: "Ich bezweifle, dass er die richtige Antwort hat.", fr: "Je doute qu'il ait la bonne réponse." }
    ]
  }
};
