import type { Level } from '../types';
import { shuffleArray } from '../../../utils/shuffleArray';

export const level3: Level = {
      level: 3,
      uniqueId: 'obj-3',
      title: 'Indirektes Objekt ersetzen',
      description: 'Übe das Ersetzen und die korrekte Satzstellung.',
      hasTheory: true,
      exercises: [
          {
              type: 'fillInTheBlank',
              shortTitle: 'Objekt ersetzen',
              instructions: "Ersetze das indirekte Objekt durch das passende Pronomen: lui oder leur.",
              answerOptions: ['lui', 'leur'],
              questions: shuffleArray([
                  { text_start: "Tu parles à ton ami? - Oui, je ", text_blank: "lui", text_end: " parle.", translation_de: "Sprichst du mit deinem Freund? - Ja, ich spreche mit ihm." },
                  { text_start: "Il donne le livre à ses parents? - Oui, il ", text_blank: "leur", text_end: " donne le livre.", translation_de: "Gibt er seinen Eltern das Buch? - Ja, er gibt ihnen das Buch." },
                  { text_start: "Elle téléphone à sa mère? - Oui, elle ", text_blank: "lui", text_end: " téléphone.", translation_de: "Telefoniert sie mit ihrer Mutter? - Ja, sie telefoniert mit ihr." },
                  { text_start: "Vous écrivez aux clients? - Oui, nous ", text_blank: "leur", text_end: " écrivons.", translation_de: "Schreibt ihr den Kunden? - Ja, wir schreiben ihnen." },
                  { text_start: "Il ne répond pas au professeur? - Non, il ne ", text_blank: "lui", text_end: " répond pas.", translation_de: "Antwortet er dem Lehrer nicht? - Nein, er antwortet ihm nicht." }
              ])
          },
          {
              type: 'sentenceOrder',
              shortTitle: 'Satzstellung',
              instructions: 'Bringe die Satzteile in die richtige Reihenfolge.',
              questions: shuffleArray([
                  { parts: ["Je", "lui", "parle."], correctOrder: [0, 1, 2], translation_de: "Ich spreche mit ihm/ihr." },
                  { parts: ["Tu", "ne", "leur", "téléphones", "pas."], correctOrder: [0, 1, 2, 3, 4], translation_de: "Du telefonierst nicht mit ihnen." },
                  { parts: ["Elle", "va", "nous", "aider."], correctOrder: [0, 1, 2, 3], explanation: "Bei einem Infinitiv steht das Pronomen direkt davor.", translation_de: "Sie wird uns helfen." },
                  { parts: ["Nous", "vous", "donnons", "le livre."], correctOrder: [0, 1, 2, 3], translation_de: "Wir geben euch das Buch." },
                  { parts: ["Il", "m'", "écrit", "une lettre."], correctOrder: [0, 1, 2, 3], translation_de: "Er schreibt mir einen Brief." },
                  { parts: ["Ne", "lui", "dis", "rien", "!"], correctOrder: [0, 1, 2, 3, 4], explanation: "Bei der Verneinung im Imperativ rückt das Pronomen vor das Verb.", translation_de: "Sag ihm nichts!"}
              ])
          }
      ]
  };
