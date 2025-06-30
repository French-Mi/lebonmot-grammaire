import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level1: Level = {
    level: 1,
    uniqueId: 'obj-1',
    title: 'Objekte erkennen',
    description: 'Identifiziere direkte und indirekte Objekte in einem Satz.',
    hasTheory: true,
    exercises: [{
      type: 'clickTheWord',
      shortTitle: 'Objekte auswählen',
      instructions: 'Klicke die Wörter an, die zum gesuchten Objekt gehören.',
      questions: shuffleArray([
        { sentence: "Le garçon mange une pomme.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "pomme"], translation_de: "Der Junge isst einen Apfel." },
        { sentence: "Je donne le livre à mon frère.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "mon", "frère"], translation_de: "Ich gebe meinem Bruder das Buch." },
        { sentence: "Elle regarde la télévision.", prompt: "Wähle das direkte Objekt aus.", answer: ["la", "télévision"], translation_de: "Sie schaut Fernsehen." },
        { sentence: "Nous parlons à nos parents.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "nos", "parents"], translation_de: "Wir sprechen mit unseren Eltern." },
        { sentence: "Le professeur explique la leçon.", prompt: "Wähle das direkte Objekt aus.", answer: ["la", "leçon"], translation_de: "Der Lehrer erklärt die Lektion." },
        { sentence: "Tu écris une lettre à ta grand-mère.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "lettre"], translation_de: "Du schreibst deiner Großmutter einen Brief." },
        { sentence: "Tu écris une lettre à ta grand-mère.", prompt: "Wähle das indirekte Objekt aus.", answer: ["à", "ta", "grand-mère"], translation_de: "Du schreibst deiner Großmutter einen Brief." },
        { sentence: "La mère lit une histoire à son enfant.", prompt: "Wähle das direkte Objekt aus.", answer: ["une", "histoire"], translation_de: "Die Mutter liest ihrem Kind eine Geschichte vor." },
        { sentence: "Le professeur donne les livres aux élèves.", prompt: "Wähle das indirekte Objekt aus.", answer: ["aux", "élèves"], translation_de: "Der Lehrer gibt den Schülern die Bücher." },
        { sentence: "Le professeur donne les livres aux élèves.", prompt: "Wähle das direkte Objekt aus.", answer: ["les", "livres"], translation_de: "Der Lehrer gibt den Schülern die Bücher." },
      ])
    }]
  };
