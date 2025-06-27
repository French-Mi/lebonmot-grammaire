// src/stores/grammarProgressStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Exercise } from '@/data/pronouns';

// KORREKTUR: Speichert jetzt den Index der spezifischen, falschen Frage
export type MistakeItem = {
  topicId: string;
  levelId: string;
  exercise: Exercise;
  questionIndex: number;
}

export const useGrammarProgressStore = defineStore('grammarProgress', () => {
  const mistakes = ref<MistakeItem[]>([]);

  function addMistake(item: MistakeItem) {
    // Verhindert Duplikate
    const exists = mistakes.value.some(m =>
        m.topicId === item.topicId &&
        m.levelId === item.levelId &&
        m.exercise.instructions === item.exercise.instructions && // Vergleicht auf Basis der Anweisung
        m.questionIndex === item.questionIndex
    );
    if (!exists) {
        mistakes.value.push(item);
    }
  }

  function getMistakesForLevel(topicId: string, levelId: string): MistakeItem[] {
    return mistakes.value
      .filter(m => m.topicId === topicId && m.levelId === levelId);
  }

  function clearMistakesForLevel(topicId: string, levelId: string) {
    mistakes.value = mistakes.value.filter(m => m.topicId !== topicId || m.levelId !== levelId);
  }

  function clearAllMistakes() {
      mistakes.value = [];
  }

  return { mistakes, addMistake, getMistakesForLevel, clearMistakesForLevel, clearAllMistakes }
})
