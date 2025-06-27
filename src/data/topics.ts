// src/data/topics.ts

export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  isAvailable: boolean;
}

export const topics: GrammarTopic[] = [
  {
    id: 'verbs',
    title: 'Verb-Trainer',
    description: 'Konjugiere Verben in verschiedenen Zeiten und Modi.',
    isAvailable: true,
  },
  {
    id: 'pronouns',
    title: 'Pronomen',
    description: 'Meistere Relativ- und Objektpronomen in 9 Levels.',
    isAvailable: true,
  },
  {
    id: 'possessives',
    title: 'Possessivbegleiter',
    description: 'Lerne, die richtigen Possessivbegleiter zu verwenden.',
    isAvailable: false,
  },
  {
    id: 'sentence-structure',
    title: 'Satzbau',
    description: 'Bilde korrekte Aussagesätze, Fragen und Verneinungen.',
    isAvailable: false,
  },
  {
    id: 'adjectives',
    title: 'Adjektive',
    description: 'Angleichung, Stellung und Steigerung von Adjektiven.',
    isAvailable: false,
  },
]
