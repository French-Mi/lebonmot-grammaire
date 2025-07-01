import type { PronounCategory } from '../types';
import { level1 } from './level-1';
import { level2 } from './level-2';
import { level3 } from './level-3';
import { level4 } from './level-4';
import { level5 } from './level-5';
import { level6 } from './level-6'; // HINZUGEFÜGT
import { level7 } from './level-7';
import { level8 } from './level-8';
import { level9 } from './level-9';

export const objektpronomenCategory: PronounCategory = {
    id: 'objektpronomen',
    title: 'B) Objektpronomen',
    levels: [
        level1,
        level2,
        level3,
        level4,
        level5,
        level6, // HINZUGEFÜGT
        level7,
        level8,
        level9
    ]
};
