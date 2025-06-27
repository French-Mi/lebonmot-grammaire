import type { Verb } from '@/types/verb-types';

export const terminer: Verb = {
  infinitive: "terminer",
  translation: "beenden / abschließen",
  verbGroup: 1,
  indicatif: {
    présent: ["termine", "termines", "termine", "terminons", "terminez", "terminent"],
    passé_composé: { aux: "avoir", participle: "terminé" },
    imparfait: ["terminais", "terminais", "terminait", "terminions", "terminiez", "terminaient"],
    plus_que_parfait: { aux: "avoir", participle: "terminé" },
    futur_simple: ["terminerai", "termineras", "terminera", "terminerons", "terminerez", "termineront"],
    futur_proche: { aux: "aller", participle: "terminer" }
  },
  subjonctif: { présent: ["termine", "termines", "termine", "terminions", "terminiez", "terminent"] },
  conditionnel: { présent: ["terminerais", "terminerais", "terminerait", "terminerions", "termineriez", "termineraient"], passé: { aux: "avoir", participle: "terminé" } },
  imperatif: { present: ["termine", "terminons", "terminez"] },
  examples: {
    "indicatif_présent": [
      { de: "Ich beende meine Arbeit um 17 Uhr.", fr: "Je termine mon travail à 17h." },
      { de: "Wann beendest du die Schule?", fr: "Quand est-ce que tu termines l'école ?" },
      { de: "Wir beenden das Treffen.", fr: "Nous terminons la réunion." }
    ],
    "indicatif_passé_composé": [
      { de: "Ich habe meine Hausaufgaben beendet.", fr: "J'ai terminé mes devoirs." },
      { de: "Hast du das Buch zu Ende gelesen?", fr: "As-tu terminé le livre ?" },
      { de: "Sie hat ihr Projekt abgeschlossen.", fr: "Elle a terminé son projet." }
    ],
    "indicatif_imparfait": [
        { de: "Er beendete seinen Vortrag immer mit einem Witz.", fr: "Il terminait toujours sa présentation par une blague." },
        { de: "Die Schule endete im Juni.", fr: "L'école se terminait en juin." },
        { de: "Wir beendeten gerade das Essen.", fr: "Nous terminions juste le repas." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Ich hatte meine Arbeit beendet, als du anriefst.", fr: "J'avais terminé mon travail quand tu as appelé." },
        { de: "Sie hatte das Rennen auf dem ersten Platz beendet.", fr: "Elle avait terminé la course à la première place." },
        { de: "Sie hatten das Kapitel bereits abgeschlossen.", fr: "Ils avaient déjà terminé le chapitre." }
    ],
    "indicatif_futur_simple": [
      { de: "Ich werde diesen Bericht morgen fertigstellen.", fr: "Je terminerai ce rapport demain." },
      { de: "Du wirst deine Ausbildung nächstes Jahr abschließen.", fr: "Tu termineras ta formation l'année prochaine." },
      { de: "Das Konzert wird spät enden.", fr: "Le concert se terminera tard." }
    ],
    "indicatif_futur_proche": [
      { de: "Ich werde es gleich beenden.", fr: "Je vais terminer tout de suite." },
      { de: "Sie wird ihre Rede beenden.", fr: "Elle va terminer son discours." },
      { de: "Wir werden dieses Spiel beenden.", fr: "Nous allons terminer ce match." }
    ],
    "conditionnel_présent": [
        { de: "Ich würde es beenden, wenn ich mehr Zeit hätte.", fr: "Je terminerais si j'avais plus de temps." },
        { de: "Er würde seine Karriere hier beenden.", fr: "Il terminerait sa carrière ici." },
        { de: "Wir würden gerne mit einem positiven Ergebnis abschließen.", fr: "Nous aimerions terminer sur une note positive." }
    ],
    "subjonctif_présent": [
      { de: "Du musst deine Arbeit beenden.", fr: "Il faut que tu termines ton travail." },
      { de: "Ich möchte, dass er seine Rede beendet.", fr: "Je veux qu'il termine son discours." },
      { de: "Bevor wir abschließen, gibt es noch Fragen?", fr: "Avant que nous terminions, y a-t-il des questions ?" }
    ]
  }
};
