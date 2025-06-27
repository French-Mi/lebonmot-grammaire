<!-- src/components/quiz-types/QuizMatchPairs.vue -->
<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { MatchPairsExercise, MatchPair } from '@/data/pronouns';
import VWord from '@/components/ui/VWord.vue';

const props = defineProps<{
  exerciseData: MatchPairsExercise;
}>();

const emit = defineEmits<{
  (e: 'completed', payload: { isPerfect: boolean }): void
}>();

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const slots = reactive(props.exerciseData.sentenceStarts.map(s => ({
  ...s,
  droppedClause: null as MatchPair | null,
  feedbackClass: ''
})));

const draggableClauses = ref(shuffle(props.exerciseData.relativeClauses));

const isSubmitted = ref(false);
let draggedItem: MatchPair | null = null;

const getWords = (text: string) => text.split(/(\s+)/).filter(part => part.length > 0);

const onDragStart = (item: MatchPair) => {
  if (isSubmitted.value) return;
  draggedItem = item;
};

const onDrop = (slotId: number) => {
  if (isSubmitted.value || !draggedItem) return;

  const targetSlot = slots.find(s => s.id === slotId);
  if (targetSlot && !targetSlot.droppedClause) {
    if (targetSlot.droppedClause) {
      draggableClauses.value.push(targetSlot.droppedClause);
    }
    targetSlot.droppedClause = draggedItem;
    draggableClauses.value = draggableClauses.value.filter(c => c.id !== draggedItem!.id);
    draggedItem = null;
  }
};

const putBack = (slotId: number) => {
  if (isSubmitted.value) return;
  const targetSlot = slots.find(s => s.id === slotId);
  if (targetSlot && targetSlot.droppedClause) {
    draggableClauses.value.push(targetSlot.droppedClause);
    targetSlot.droppedClause = null;
  }
};

const checkAnswers = () => {
  if (isSubmitted.value) return;
  isSubmitted.value = true;
  let allCorrect = true;

  slots.forEach(slot => {
    if (slot.droppedClause && slot.id === slot.droppedClause.id) {
      slot.feedbackClass = 'correct';
    } else {
      allCorrect = false;
      slot.feedbackClass = 'incorrect';
    }
  });

  // HIER IST DIE WICHTIGE ÄNDERUNG: Das Event wird immer ausgelöst
  emit('completed', { isPerfect: allCorrect });
};
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>

    <div class="match-container">
      <div class="column">
        <div v-for="slot in slots" :key="slot.id" class="slot" :class="slot.feedbackClass" @dragover.prevent @drop="onDrop(slot.id)">
          <div class="slot-text">
            <VWord v-for="(word, index) in getWords(slot.text)" :key="`slot-${index}`" :word="word" />
          </div>
          <div v-if="slot.droppedClause" class="part dropped" @click="putBack(slot.id)">
            <VWord v-for="(word, index) in getWords(slot.droppedClause.text)" :key="`dropped-${index}`" :word="word" />
          </div>
        </div>
      </div>

      <div class="column">
        <div
          v-for="clause in draggableClauses"
          :key="clause.id"
          class="part draggable"
          :draggable="!isSubmitted"
          @dragstart="onDragStart(clause)"
        >
          <VWord v-for="(word, index) in getWords(clause.text)" :key="`clause-${index}`" :word="word" />
        </div>
      </div>
    </div>
     <div class="quiz-actions">
      <button @click="checkAnswers" v-if="!isSubmitted" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
.quiz-instructions { text-align: center; margin-bottom: 2rem; color: var(--muted-text); font-size: 1.1rem; }
.match-container { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
.column { display: flex; flex-direction: column; gap: 1rem; }
.slot { display: flex; align-items: center; border: 2px dashed var(--border-color); border-radius: 8px; padding: 0.75rem; min-height: 50px; transition: all 0.2s; }
.slot.correct { border-color: var(--success-color); background-color: #e6f9f0; }
.slot.incorrect { border-color: var(--error-color); background-color: #fbe9e9; }
.slot-text { flex-grow: 1; font-size: 1.1rem; padding-right: 0.5rem; }
.part { padding: 0.5rem 1rem; border-radius: 6px; background-color: white; border: 1px solid var(--border-color); font-size: 1.1rem; user-select: none; line-height: 1.5; white-space: pre-wrap; }
.draggable { cursor: grab; background-color: var(--light-blue); border-color: var(--primary-blue); }
.draggable:active { cursor: grabbing; }
.dropped { cursor: pointer; border-style: solid; width: 100%; }
.quiz-actions { display: flex; justify-content: center; }
.btn { padding: 0.75rem 2rem; border: none; border-radius: 5px; cursor: pointer; }
.btn-primary { background-color: var(--primary-blue); color: white; }
</style>
