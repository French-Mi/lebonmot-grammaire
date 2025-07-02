<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import type { MatchPairsExercise, MatchPair } from '@/data/pronouns/types';
import VWord from '@/components/ui/VWord.vue';

const props = defineProps<{
  exerciseData: MatchPairsExercise;
}>();

const emit = defineEmits<{
  (e: 'completed'): void,
  (e: 'feedback', payload: { isCorrect: boolean; userInput: string; correctAnswer: string; translation_de?: string; questionIndex: number; }): void
}>();

interface DropSlot extends MatchPair {
  droppedClause: MatchPair | null;
  feedbackClass: string;
  fullCorrectTranslation: string | null;
  correctClauseForDisplay?: MatchPair;
}

const slots = ref<DropSlot[]>([]);
const draggableClauses = ref<MatchPair[]>([]);
const isSubmitted = ref(false);

const getWords = (text: string) => text.split(/(\s+)/).filter(part => part.length > 0);
const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const initializeState = () => {
    slots.value = props.exerciseData.sentenceStarts.map(s => ({
        ...s,
        droppedClause: null,
        feedbackClass: '',
        fullCorrectTranslation: null,
        correctClauseForDisplay: undefined
    }));
    draggableClauses.value = shuffle([...props.exerciseData.relativeClauses]);
    isSubmitted.value = false;
};

onMounted(initializeState);
watch(() => props.exerciseData, initializeState);

const allDropped = computed(() => slots.value.every(s => s.droppedClause !== null));

interface DragPayload {
  clause: MatchPair;
  originSlotId?: number;
}

const onDragStart = (event: DragEvent, clause: MatchPair, originSlotId?: number) => {
  if (isSubmitted.value) return;
  if (event.dataTransfer) {
    const payload: DragPayload = { clause, originSlotId };
    event.dataTransfer.setData('application/json', JSON.stringify(payload));
    event.dataTransfer.effectAllowed = 'move';
  }
};

// KORREKTUR: Der Typ des 'toSlot'-Parameters wurde erweitert, um 'undefined' zu akzeptieren.
const moveClause = (clause: MatchPair, fromSlotId: number | undefined, toSlot: DropSlot | null | undefined) => {
  if (fromSlotId) {
    const originSlot = slots.value.find(s => s.id === fromSlotId);
    if (originSlot) originSlot.droppedClause = null;
  } else {
    draggableClauses.value = draggableClauses.value.filter(c => c.id !== clause.id);
  }

  if (toSlot) {
    toSlot.droppedClause = clause;
  } else {
    if (!draggableClauses.value.some(c => c.id === clause.id)) {
        draggableClauses.value.push(clause);
    }
  }
};

const onDrop = (targetSlot: DropSlot | null, event: DragEvent) => {
  if (isSubmitted.value) return;
  const payload: DragPayload = JSON.parse(event.dataTransfer!.getData('application/json'));
  const droppedClause = payload.clause;
  const elementInTarget = targetSlot ? targetSlot.droppedClause : null;

  moveClause(droppedClause, payload.originSlotId, targetSlot);

  if (elementInTarget) {
    const originSlot = payload.originSlotId ? slots.value.find(s => s.id === payload.originSlotId) : null;
    moveClause(elementInTarget, targetSlot!.id, originSlot);
  }
};

const checkAllAnswers = () => {
    if (!allDropped.value || isSubmitted.value) return;
    isSubmitted.value = true;

    slots.value.forEach((slot, index) => {
        const isCorrect = slot.droppedClause!.id === slot.id;
        const correctClause = props.exerciseData.relativeClauses.find(c => c.id === slot.id)!;

        slot.feedbackClass = isCorrect ? 'correct' : 'incorrect';
        slot.fullCorrectTranslation = `${slot.translation_de} ${correctClause.translation_de.replace('...', '')}`.trim();

        if (!isCorrect) {
          slot.correctClauseForDisplay = correctClause;
        }

        emit('feedback', {
            isCorrect,
            userInput: slot.droppedClause!.text,
            correctAnswer: correctClause.text,
            translation_de: slot.fullCorrectTranslation,
            questionIndex: index
        });
    });
};

const finishExercise = () => {
    emit('completed');
};

defineExpose({ nextQuestion: finishExercise });
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>
    <div class="columns">
      <div class="column drop-column">
        <div
            v-for="slot in slots"
            :key="slot.id"
            class="dropzone-wrapper"
        >
          <div
              class="dropzone"
              :class="[slot.feedbackClass, { 'filled': slot.droppedClause }]"
              @dragover.prevent
              @drop.prevent="onDrop(slot, $event)"
          >
            <span class="sentence-text">
              <template v-for="(word, index) in getWords(slot.text)" :key="index">
                  <VWord v-if="word.trim().length > 0" :word="word" />
                  <span v-else v-html="'&nbsp;'"></span>
              </template>
            </span>
            <span
              v-if="slot.droppedClause"
              class="dropped-clause"
              :class="{ 'strikethrough': slot.feedbackClass === 'incorrect' }"
              :draggable="!isSubmitted"
              @dragstart="onDragStart($event, slot.droppedClause, slot.id)"
            >
              <template v-for="(word, index) in getWords(slot.droppedClause.text.replace('...',' '))" :key="index">
                  <VWord v-if="word.trim().length > 0" :word="word" />
                  <span v-else v-html="'&nbsp;'"></span>
              </template>
            </span>
            <span v-if="slot.correctClauseForDisplay" class="correct-answer-text">
                {{ slot.correctClauseForDisplay.text.replace('...',' ') }}
            </span>
          </div>
          <div v-if="isSubmitted && slot.fullCorrectTranslation" class="translation-feedback">
            {{ slot.fullCorrectTranslation }}
          </div>
        </div>
      </div>
      <div
        class="column drag-column"
        @dragover.prevent
        @drop.prevent="onDrop(null, $event)"
      >
        <div
            v-for="clause in draggableClauses"
            :key="clause.id"
            class="draggable-item"
            :draggable="!isSubmitted"
            @dragstart="onDragStart($event, clause)"
        >
          <template v-for="(word, index) in getWords(clause.text)" :key="index">
            <VWord v-if="word.trim().length > 0" :word="word" />
            <span v-else v-html="'&nbsp;'"></span>
          </template>
        </div>
      </div>
    </div>
    <div class="actions">
      <button v-if="allDropped && !isSubmitted" @click="checkAllAnswers" class="btn btn-primary">Prüfen</button>
      <button v-if="isSubmitted" @click="finishExercise" class="btn btn-secondary">Weiter</button>
    </div>
  </div>
</template>

<style scoped>
.quiz-instructions { text-align: center; margin-bottom: 2rem; font-size: 1.1rem; color: var(--muted-text); }
.columns { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.column { display: flex; flex-direction: column; gap: 0.5rem; min-height: 200px;}
.drag-column { background-color: #f8f9fa; border: 2px dashed var(--border-color); border-radius: 8px; padding: 1rem; }
.dropzone-wrapper { display: flex; flex-direction: column; }
.dropzone { border: 2px dashed var(--border-color); padding: 1rem; border-radius: 8px; min-height: 60px; display: flex; align-items: baseline; flex-wrap: wrap; line-height: 1.5; transition: all 0.3s ease; }
.draggable-item { padding: 1rem; border-radius: 8px; background-color: white; border: 1px solid var(--border-color); cursor: grab; }
.draggable-item:active { cursor: grabbing; }
.sentence-text { display: inline; }
.dropzone.filled { border-style: solid; }
.dropzone.correct { border-color: var(--success-color); background-color: #f0fff4; }
.dropzone.incorrect { border-color: var(--error-color); }
.dropped-clause { margin-left: 0.25rem; cursor: grab; }
.dropped-clause.strikethrough { text-decoration: line-through; opacity: 0.7; }
.correct-answer-text { color: var(--success-color); font-weight: 500; margin-left: 0.5rem; }
.translation-feedback { font-size: 0.9rem; color: var(--muted-text); font-style: italic; padding: 0.25rem 1rem; text-align: left; }
.actions { margin-top: 2rem; text-align: center; }
.btn { padding: 0.8rem 2.5rem; font-size: 1.1rem; border: none; border-radius: 8px; cursor: pointer; }
.btn-primary { background-color: var(--primary-blue); color: white; }
.btn-secondary { background-color: var(--success-color); color: white; }
</style>
