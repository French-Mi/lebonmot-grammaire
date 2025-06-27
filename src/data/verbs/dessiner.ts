import type { Verb } from '@/types/verb-types';

export const dessiner: Verb = {
  infinitive: "dessiner",
  translation: "zeichnen",
  verbGroup: 1,
  indicatif: {
    présent: ["dessine", "dessines", "dessine", "dessinons", "dessinez", "dessinent"],
    passé_composé: { aux: "avoir", participle: "dessiné" },
    imparfait: ["dessinais", "dessinais", "dessinait", "dessinions", "dessiniez", "dessinaient"],
    plus_que_parfait: { aux: "avoir", participle: "dessiné" },
    futur_simple: ["dessinerai", "dessineras", "dessinera", "dessinerons", "dessinerez", "dessineront"],
    futur_proche: { aux: "aller", participle: "dessiner" }
  },
  subjonctif: { présent: ["dessine", "dessines", "dessine", "dessinions", "dessiniez", "dessinent"] },
  conditionnel: { présent: ["dessinerais", "dessinerais", "dessinerait", "dessinerions", "dessineriez", "dessineraient"], passé: { aux: "avoir", participle: "dessiné" } },
  imperatif: { present: ["dessine", "dessinons", "dessinez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich zeichne ein Haus.", fr: "Je dessine une maison." },
      { de: "Was zeichnest du?", fr: "Qu'est-ce que tu dessines ?" },
      { de: "Sie zeichnet sehr gut.", fr: "Elle dessine très bien." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe ein Porträt gezeichnet.", fr: "J'ai dessiné un portrait." },
      { de: "Er hat eine Landschaft gezeichnet.", fr: "Il a dessiné un paysage." },
      { de: "Wir haben den ganzen Nachmittag gezeichnet.", fr: "Nous avons dessiné tout l'après-midi." }
    ],
    "indicatif_imparfait": [
        { de: "Als Kind zeichnete er Comics.", fr: "Enfant, il dessinait des bandes dessinées." },
        { de: "Sie zeichnete in ihr Notizbuch.", fr: "Elle dessinait dans son carnet." },
        { de: "Wir zeichneten, während wir auf den Bus warteten.", fr: "Nous dessinions en attendant le bus." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte eine Karte für sie gezeichnet.", fr: "J'avais dessiné une carte pour elle." },
        { de: "Er hatte sein zukünftiges Haus gezeichnet.", fr: "Il avait dessiné sa future maison." },
        { de: "Sie hatte bereits den Plan gezeichnet.", fr: "Elle avait déjà dessiné le plan." }
    ],
    "indicatif_futur_simple": [
      { de: "Morgen werde ich einen Baum zeichnen.", fr: "Demain, je dessinerai un arbre." },
      { de: "Sie wird ein Tier für dich zeichnen.", fr: "Elle dessinera un animal pour toi." },
      { de: "Werdet ihr am Wettbewerb teilnehmen und zeichnen?", fr: "Dessinerez-vous au concours ?" }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde ein Gesicht zeichnen.", fr: "Je vais dessiner un visage." },
      { de: "Wirst du etwas für mich zeichnen?", fr: "Tu vas me dessiner quelque chose ?" },
      { de: "Wir werden eine Karikatur zeichnen.", fr: "Nous allons dessiner une caricature." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde lieber etwas anderes zeichnen.", fr: "Je dessinerais plutôt autre chose." },
        { de: "Er würde dich zeichnen, wenn du still hieltest.", fr: "Il te dessinerait si tu restais immobile." },
        { de: "Wir würden die Berge zeichnen.", fr: "Nous dessinerions les montagnes." }
    ],
    "subjonctif_présent": [
      { de: "Es ist notwendig, dass du die Pläne zeichnest.", fr: "Il faut que tu dessines les plans." },
      { de: "Ich möchte, dass sie ein Pferd zeichnet.", fr: "Je veux qu'elle dessine un cheval." },
      { de: "Damit wir zeichnen können, brauchen wir Stifte.", fr: "Pour que nous dessinions, il nous faut des crayons." }
    ]
  }
};
