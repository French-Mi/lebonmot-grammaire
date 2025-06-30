// src/utils/shuffleArray.ts

/**
 * Mischt die Elemente eines Arrays zufällig.
 * @param array Das zu mischende Array.
 * @returns Ein neues Array mit den gemischten Elementen.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};
