// src/data/pronouns/index.ts

// KORREKTUR: Importiert Typen aus der neuen Datei
import type { PronounTopicData } from './types';
// KORREKTUR: Korrekte relative Pfade
import { relativpronomenCategory } from './relativpronomen';
import { objektpronomenCategory } from './objektpronomen';

export const pronounData: PronounTopicData = {
  id: 'pronouns',
  title: 'Pronomen',
  categories: [
    relativpronomenCategory,
    objektpronomenCategory
  ]
};
