import type { Verb } from '@/types/verb-types';

export const rendre: Verb = {
  infinitive: "rendre",
  translation: "zurückgeben, machen (im Sinne von 'jemanden glücklich machen')",
  verbGroup: 3,
  indicatif: {
    présent: ["rends", "rends", "rend", "rendons", "rendez", "rendent"],
    passé_composé: { aux: "avoir", participle: "rendu" },
    imparfait: ["rendais", "rendais", "rendait", "rendions", "rendiez", "rendaient"],
    plus_que_parfait: { aux: "avoir", participle: "rendu" },
    futur_simple: ["rendrai", "rendras", "rendra", "rendrons", "rendrez", "rendront"],
    futur_proche: { aux: "aller", participle: "rendre" }
  },
  subjonctif: {
    présent: ["rende", "rendes", "rende", "rendions", "rendiez", "rendent"]
  },
  conditionnel: {
    présent: ["rendrais", "rendrais", "rendrait", "rendrions", "rendriez", "rendraient"],
    passé: { aux: "avoir", participle: "rendu" }
  },
  imperatif: {
    present: ["rends", "rendons", "rendez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich gebe dir dein Buch morgen zurück.", fr: "Je te rends ton livre demain." },
      { de: "Diese Musik macht mich glücklich.", fr: "Cette musique me rend heureux." },
      { de: "Wir geben der Gemeinschaft etwas zurück.", fr: "Nous rendons à la communauté." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ihm das Geld zurückgegeben.", fr: "Je lui ai rendu l'argent." },
      { de: "Hat sie dir deinen Schlüssel zurückgegeben?", fr: "Est-ce qu'elle t'a rendu tes clés ?" },
      { de: "Deine Nachricht hat mich sehr glücklich gemacht.", fr: "Ton message m'a rendu très heureux." }
    ],
    "indicatif_imparfait": [
        { de: "Er gab die Bücher immer pünktlich in der Bibliothek zurück.", fr: "Il rendait toujours les livres à l'heure à la bibliothèque." },
        { de: "Seine Besuche machten sie immer glücklich.", fr: "Ses visites la rendaient toujours heureuse." },
        { de: "Ihr gabt den Nachbarn immer den Gefallen zurück.", fr: "Vous rendiez toujours la pareille aux voisins." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte ihm sein Werkzeug zurückgegeben, bevor er danach fragte.", fr: "Je lui avais rendu ses outils avant qu'il ne les demande." },
        { de: "Diese Nachricht hatte ihn sehr traurig gemacht.", fr: "Cette nouvelle l'avait rendu très triste." },
        { de: "Sie hatten die gestohlenen Gegenstände zurückgegeben.", fr: "Ils avaient rendu les objets volés." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dir deinen Anruf zurückgeben.", fr: "Je te rendrai ton appel." },
      { de: "Der Richter wird sein Urteil fällen (zurückgeben).", fr: "Le juge rendra son verdict." },
      { de: "Diese Arbeit wird dich berühmt machen.", fr: "Ce travail te rendra célèbre." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde dir deinen Stift zurückgeben.", fr: "Je vais te rendre ton stylo." },
      { de: "Diese Situation wird ihn verrückt machen.", fr: "Cette situation va le rendre fou." },
      { de: "Wir werden unsere Hausaufgaben morgen abgeben.", fr: "Nous allons rendre nos devoirs demain." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dir das Geld zurückgeben, wenn ich es hätte.", fr: "Je te rendrais l'argent si je l'avais." },
        { de: "Das würde das Leben einfacher machen.", fr: "Cela rendrait la vie plus simple." },
        { de: "Sie würden ihm einen Besuch abstatten, wenn sie Zeit hätten.", fr: "Ils lui rendraient visite s'ils avaient le temps." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte dir das Buch gestern zurückgegeben, aber ich habe es vergessen.", fr: "Je t'aurais rendu le livre hier, mais j'ai oublié." },
        { de: "Das hätte ihn nicht glücklicher gemacht.", fr: "Cela ne l'aurait pas rendu plus heureux." },
        { de: "Wir hätten ihm die Ehre erwiesen, wenn er gekommen wäre.", fr: "Nous lui aurions rendu hommage s'il était venu." }
    ],
    "subjonctif_présent": [
      { de: "Es ist wichtig, dass du das zurückgibst, was dir nicht gehört.", fr: "Il est important que tu rendes ce qui ne t'appartient pas." },
      { de: "Ich möchte, dass du mir meinen Schlüssel zurückgibst.", fr: "Je veux que tu me rendes ma clé." },
      { de: "Damit er uns einen Gefallen tut, müssen wir ihn darum bitten.", fr: "Pour qu'il nous rende service, il faut lui demander." }
    ]
  }
};
