// src/stores/grammarProgressStore.ts
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Exercise } from '@/data/pronouns/types';

export type MistakeItem = {
  topicId: string;
  levelId: string;
  exercise: Exercise;
  questionIndex: number;
}

export const useGrammarProgressStore = defineStore('grammarProgress', () => {
  const mistakes = ref<MistakeItem[]>([]);
  // NEU: Speichert die IDs der perfekt abgeschlossenen Übungen
  const perfectedExercises = ref<string[]>([]);

  // Lade den Zustand aus dem LocalStorage beim Initialisieren
  const savedState = localStorage.getItem('leBonMotGrammarProgress');
  if (savedState) {
    const state = JSON.parse(savedState);
    mistakes.value = state.mistakes || [];
    perfectedExercises.value = state.perfectedExercises || [];
  }

  // Speichere den Zustand bei jeder Änderung
  watch([mistakes, perfectedExercises], (newState) => {
    const state = {
      mistakes: newState[0],
      perfectedExercises: newState[1]
    };
    localStorage.setItem('leBonMotGrammarProgress', JSON.stringify(state));
  }, { deep: true });

  function addMistake(item: MistakeItem) {
    const exists = mistakes.value.some(m =>
        m.topicId === item.topicId &&
        m.levelId === item.levelId &&
        m.exercise.instructions === item.exercise.instructions &&
        m.questionIndex === item.questionIndex
    );
    if (!exists) {
        mistakes.value.push(item);
    }
  }

  // NEU: Fügt eine perfekt absolvierte Übung hinzu
  function addPerfectedExercise(exerciseId: string) {
      if (!perfectedExercises.value.includes(exerciseId)) {
          perfectedExercises.value.push(exerciseId);
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

  return { mistakes, perfectedExercises, addMistake, addPerfectedExercise, getMistakesForLevel, clearMistakesForLevel, clearAllMistakes }
})
