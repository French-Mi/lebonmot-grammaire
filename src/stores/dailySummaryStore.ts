import { defineStore } from 'pinia';
import { ref, watch, computed } from 'vue';

export type SummaryResult = {
  question: string;
  userInput: string;
  correctAnswer: string;
  isCorrect: boolean;
};

export type ExerciseSummary = {
  topic: 'Verben' | 'Pronomen';
  title: string;
  timestamp: number;
  results: SummaryResult[];
};

const STORE_KEY = 'dailySummary';

const getInitialState = (): { date: string, summaries: ExerciseSummary[] } => {
  const stored = localStorage.getItem(STORE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const today = new Date().toLocaleDateString('de-DE');
      if (parsed.date === today) {
        return parsed;
      }
    } catch (e) {
        console.error("Konnte den Lernfortschritt nicht laden.", e);
    }
  }
  return { date: new Date().toLocaleDateString('de-DE'), summaries: [] };
};

export const useDailySummaryStore = defineStore('dailySummary', () => {
  const state = ref(getInitialState());

  watch(state, (newState) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(newState));
  }, { deep: true });

  const addExerciseSummary = (summary: ExerciseSummary) => {
    const today = new Date().toLocaleDateString('de-DE');
    if (state.value.date !== today) {
        state.value.date = today;
        state.value.summaries = [];
    }
    state.value.summaries.push(summary);
  };

  const hasSummaries = computed(() => state.value.summaries.length > 0);

  return {
    summaries: computed(() => state.value.summaries),
    addExerciseSummary,
    hasSummaries,
  };
});
