// src/stores/verbTrainerStore.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ExampleSentence } from '@/types/verb-types'

export type TrainingMode = 'standard' | 'shuffle' | 'drag-drop' | 'translate' | 'overview' | '';

export type MistakeItem = {
  verbKey: string;
  tense: string;
  userInput: string; // Hinzugefügt, um die falsche Eingabe zu speichern
  pronounIndex?: number;
  sentence?: ExampleSentence;
};

export const useVerbTrainerStore = defineStore('verbTrainer', () => {
  const selectedTenses = ref<string[]>([])
  const selectedVerbs = ref<string[]>([])
  const selectedMode = ref<TrainingMode>('');
  const mistakes = ref<MistakeItem[]>([]);

  function setTenses(tenses: string[]) {
    selectedTenses.value = tenses
  }
  function setVerbs(verbs: string[]) {
    selectedVerbs.value = verbs
  }
  function setMode(mode: TrainingMode) {
    selectedMode.value = mode;
  }

  function addMistake(item: MistakeItem) {
    const exists = mistakes.value.some(m =>
      m.verbKey === item.verbKey &&
      m.tense === item.tense &&
      (m.pronounIndex !== undefined ? m.pronounIndex === item.pronounIndex : m.sentence?.de === item.sentence?.de)
    );
    if (!exists) {
        mistakes.value.push(item);
    }
  }

  function clearMistakes() {
    mistakes.value = [];
  }

  function reset() {
    selectedTenses.value = []
    selectedVerbs.value = []
    selectedMode.value = ''
    mistakes.value = [];
  }

  return { selectedTenses, selectedVerbs, selectedMode, mistakes, setTenses, setVerbs, setMode, addMistake, clearMistakes, reset }
})
