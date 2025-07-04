import type { Verb } from '@/types/verb-types';

export const seduire: Verb = {
  infinitive: "séduire",
  translation: "verführen",
  verbGroup: 3,
  indicatif: {
    présent: ["séduis", "séduis", "séduit", "séduisons", "séduisez", "séduisent"],
    passé_composé: { aux: "avoir", participle: "séduit" },
    imparfait: ["séduisais", "séduisais", "séduisait", "séduisions", "séduisiez", "séduisaient"],
    plus_que_parfait: { aux: "avoir", participle: "séduit" },
    futur_simple: ["séduirai", "séduiras", "séduira", "séduirons", "séduirez", "séduiront"],
    futur_proche: { aux: "aller", participle: "séduire" }
  },
  subjonctif: {
    présent: ["séduise", "séduises", "séduise", "séduisions", "séduisiez", "séduisent"]
  },
  conditionnel: {
    présent: ["séduirais", "séduirais", "séduirait", "séduirions", "séduiriez", "séduiraient"],
    passé: { aux: "avoir", participle: "séduit" }
  },
  imperatif: {
    present: ["séduis", "séduisons", "séduisez"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Ich versuche, sie mit meinem Charme zu verführen.", fr: "J'essaie de la séduire avec mon charme." },
      { de: "Dieses Angebot verführt viele Kunden.", fr: "Cette offre séduit de nombreux clients." },
      { de: "Wir verführen das Publikum mit unserer Musik.", fr: "Nous séduisons le public avec notre musique." }
    ],
    "indicatif_passé_composé": [
      { de: "Er hat sie mit einem Gedicht verführt.", fr: "Il l'a séduite avec un poème." },
      { de: "Die Idee eines langen Urlaubs hat mich verführt.", fr: "L'idée de longues vacances m'a séduit." },
      { de: "Sie haben die Investoren mit ihrem Projekt verführt.", fr: "Ils ont séduit les investisseurs avec leur projet." }
    ],
    "indicatif_imparfait": [
        { de: "Er verführte sein Publikum mit fesselnden Geschichten.", fr: "Il séduisait son auditoire avec des histoires captivantes." },
        { de: "Die Landschaft verführte die Maler.", fr: "Le paysage séduisait les peintres." },
        { de: "Ihr verführtet die Wähler mit unrealistischen Versprechungen.", fr: "Vous séduisiez les électeurs avec des promesses irréalistes." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Sein Lächeln hatte sie sofort verführt.", fr: "Son sourire l'avait immédiatement séduite." },
        { de: "Ich hatte mich von dem Angebot verführen lassen.", fr: "Je m'étais laissé(e) séduire par l'offre." },
        { de: "Sie hatten die Jury mit ihrer Originalität verführt.", fr: "Ils avaient séduit le jury par leur originalité." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde dich mit meiner Küche verführen.", fr: "Je te séduirai avec ma cuisine." },
      { de: "Diese neue Technologie wird die Jugend verführen.", fr: "Cette nouvelle technologie séduira les jeunes." },
      { de: "Wir werden unsere Partner mit einem innovativen Vorschlag verführen.", fr: "Nous séduirons nos partenaires avec une proposition innovante." }
    ],
    "indicatif_futur_proche": [
      { de: "Er wird versuchen, sie mit Blumen zu verführen.", fr: "Il va essayer de la séduire avec des fleurs." },
      { de: "Dieses Produkt wird die Verbraucher verführen.", fr: "Ce produit va séduire les consommateurs." },
      { de: "Wir werden sie nicht so leicht verführen.", fr: "Nous n'allons pas les séduire si facilement." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde dich verführen, wenn du nicht schon vergeben wärst.", fr: "Je te séduirais si tu n'étais pas déjà pris(e)." },
        { de: "Ein solches Abenteuer würde jeden Abenteurer verführen.", fr: "Une telle aventure séduirait n'importe quel aventurier." },
        { de: "Sie würden mehr Wähler verführen, wenn ihre Botschaft klarer wäre.", fr: "Ils séduiraient plus d'électeurs si leur message était plus clair." }
    ],
     "conditionnel_passé": [
        { de: "Ich hätte sie verführt, wenn ich mutiger gewesen wäre.", fr: "Je l'aurais séduite si j'avais été plus courageux." },
        { de: "Dieses Argument hätte die Jury verführt.", fr: "Cet argument aurait séduit le jury." },
        { de: "Wir hätten uns von der Werbung verführen lassen.", fr: "Nous nous serions laissé séduire par la publicité." }
    ],
    "subjonctif_présent": [
      { de: "Es ist nicht seine Absicht, dass er dich verführt.", fr: "Ce n'est pas son intention qu'il te séduise." },
      { de: "Damit er sie verführt, muss er aufrichtig sein.", fr: "Pour qu'il la séduise, il doit être sincère." },
      { de: "Ich bezweifle, dass diese einfache Taktik uns verführt.", fr: "Je doute que cette simple tactique nous séduise." }
    ]
  }
};
