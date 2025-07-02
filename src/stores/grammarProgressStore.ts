import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { Exercise } from '@/data/pronouns/types';

// Die Struktur für einen Fehler-Eintrag
export interface MistakeRecord {
  topicId: string;
  levelId: string;
  exercise: Exercise;
  questionIndex: number;
  userInput: string;
}

export const useGrammarProgressStore = defineStore('grammarProgress', () => {
  const completedLevels = ref<Record<string, string[]>>({});
  const mistakes = ref<MistakeRecord[]>([]);

  // Lade den Zustand aus dem LocalStorage
  const savedState = localStorage.getItem('leBonMotGrammarProgress');
  if (savedState) {
    const state = JSON.parse(savedState);
    completedLevels.value = state.completedLevels || {};
    mistakes.value = state.mistakes || [];
  }

  // Speichere den Zustand bei jeder Änderung
  watch([completedLevels, mistakes], (newState) => {
    localStorage.setItem('leBonMotGrammarProgress', JSON.stringify({
      completedLevels: newState[0],
      mistakes: newState[1]
    }));
  }, { deep: true });

  // Die überflüssige Getter-Funktion wurde entfernt.

  function markLevelAsCompleted(topicId: string, levelId: string) {
    if (!completedLevels.value[topicId]) {
      completedLevels.value[topicId] = [];
    }
    if (!this.completedLevels[topicId].includes(levelId)) {
      this.completedLevels[topicId].push(levelId);
    }
  }

  function addMistake(mistake: MistakeRecord) {
    const exists = mistakes.value.some(m =>
      m.topicId === mistake.topicId &&
      m.levelId === mistake.levelId &&
      m.exercise.instructions === mistake.exercise.instructions &&
      m.questionIndex === mistake.questionIndex
    );
    if (!exists) {
      mistakes.value.push(mistake);
    }
  }

  function getMistakesForLevel(topicId: string, levelId: string) {
    return mistakes.value.filter(m => m.topicId === topicId && m.levelId === levelId);
  }

  function clearMistakesForLevel(topicId: string, levelId: string) {
    mistakes.value = mistakes.value.filter(m => !(m.topicId === topicId && m.levelId === levelId));
  }

  return {
    completedLevels,
    mistakes,
    markLevelAsCompleted,
    addMistake,
    getMistakesForLevel,
    clearMistakesForLevel
  };
});
