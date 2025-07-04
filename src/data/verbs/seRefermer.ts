import type { Verb } from '@/types/verb-types';

export const seRefermer: Verb = {
  infinitive: "se refermer",
  translation: "sich schließen",
  verbGroup: 1,
  isReflexive: true,
  indicatif: {
    présent: ["referme", "refermes", "referme", "refermons", "refermez", "referment"],
    passé_composé: { aux: 'être', participle: 'refermé' },
    imparfait: ["refermais", "refermais", "refermait", "refermions", "refermiez", "refermaient"],
    plus_que_parfait: { aux: 'être', participle: 'refermé' },
    futur_simple: ["refermerai", "refermeras", "refermera", "refermerons", "refermerez", "refermeront"],
    futur_proche: { aux: "aller", participle: "se refermer" }
  },
  subjonctif: {
    présent: ["referme", "refermes", "referme", "refermions", "refermiez", "referment"]
  },
  conditionnel: {
    présent: ["refermerais", "refermerais", "refermerait", "refermerions", "refermeriez", "refermeraient"],
    passé: { aux: 'être', participle: 'refermé' }
  },
  imperatif: {
    present: ["referme-toi", "refermons-nous", "refermez-vous"]
  },
  examples: {
    "indicatif_présent": [
      { de: "Die Tür schließt sich automatisch.", fr: "La porte se referme automatiquement." },
      { de: "Die Falle schließt sich um ihn.", fr: "Le piège se referme sur lui." },
      { de: "Die Wunde schließt sich langsam.", fr: "La plaie se referme lentement." }
    ],
    "indicatif_passé_composé": [
      { de: "Die Tür hat sich hinter mir geschlossen.", fr: "La porte s'est refermée derrière moi." },
      { de: "Die Schachtel hat sich nicht richtig geschlossen.", fr: "La boîte ne s'est pas bien refermée." },
      { de: "Nach seiner Rede schloss sich der Vorhang.", fr: "Le rideau s'est refermé après son discours." }
    ],
    "indicatif_imparfait": [
        { de: "Das Buch schloss sich immer von selbst.", fr: "Le livre se refermait toujours tout seul." },
        { de: "Die Blume schloss sich bei Einbruch der Nacht.", fr: "La fleur se refermait à la tombée de la nuit." },
        { de: "Die Hände der Statue schlossen sich um das Schwert.", fr: "Les mains de la statue se refermaient sur l'épée." }
    ],
    "indicatif_plus_que_parfait": [
        { de: "Die Falltür hatte sich über ihnen geschlossen.", fr: "La trappe s'était refermée au-dessus d'eux." },
        { de: "Die Auster hatte sich um die Perle geschlossen.", fr: "L'huître s'était refermée sur la perle." },
        { de: "Nachdem sich das Tor geschlossen hatte, gab es kein Zurück mehr.", fr: "Une fois que la grille s'était refermée, il n'y avait pas de retour possible." }
    ],
    "indicatif_futur_simple": [
      { de: "Die Tür wird sich in 5 Sekunden schließen.", fr: "La porte se refermera dans 5 secondes." },
      { de: "Die Wunde wird sich schließen, aber es wird eine Narbe bleiben.", fr: "La plaie se refermera, mais il restera une cicatrice." },
      { de: "Das Fenster wird sich bei Wind nicht schließen.", fr: "La fenêtre ne se refermera pas avec le vent." }
    ],
    "indicatif_futur_proche": [
      { de: "Das Tor wird sich gleich schließen.", fr: "Le portail va se refermer." },
      { de: "Die Venusfliegenfalle wird sich um die Fliege schließen.", fr: "La dionée va se refermer sur la mouche." },
      { de: "Die Wolkendecke wird sich bald schließen.", fr: "La couverture nuageuse va bientôt se refermer." }
    ],
    "conditionnel_présent": [
        { de: "Die Tür würde sich schließen, wenn du sie loslassen würdest.", fr: "La porte se refermerait si tu la lâchais." },
        { de: "Das Messer würde sich von selbst schließen, wenn die Feder nicht kaputt wäre.", fr: "Le couteau se refermerait tout seul si le ressort n'était pas cassé." },
        { de: "Die Gemeinschaft würde sich ohne neue Mitglieder verschließen.", fr: "La communauté se refermerait sur elle-même sans nouveaux membres." }
    ],
     "conditionnel_passé": [
        { de: "Die Tür hätte sich nicht geschlossen, wenn du einen Keil darunter gelegt hättest.", fr: "La porte ne se serait pas refermée si tu avais mis une cale." },
        { de: "Die Wunde hätte sich schneller geschlossen mit einer besseren Pflege.", fr: "La plaie se serait refermée plus vite avec de meilleurs soins." },
        { de: "Die Falle hätte sich um ihn geschlossen.", fr: "Le piège se serait refermé sur lui." }
    ],
    "subjonctif_présent": [
      { de: "Ich warte, bis sich die Tür schließt.", fr: "J'attends que la porte se referme." },
      { de: "Es ist wichtig, dass sich die Wunde richtig schließt.", fr: "Il est important que la plaie se referme correctement." },
      { de: "Ich habe Angst, dass sich die Höhle hinter uns schließt.", fr: "J'ai peur que la grotte ne se referme derrière nous." }
    ]
  }
};
