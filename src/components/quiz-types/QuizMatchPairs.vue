<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import type { MatchPairsExercise, MatchPair } from '@/data/pronouns/types';
import VWord from '@/components/ui/VWord.vue';
import draggable from 'vuedraggable';

const props = defineProps<{
  exerciseData: MatchPairsExercise;
}>();

const emit = defineEmits<{
  (e: 'completed'): void,
  (e: 'feedback', payload: { isCorrect: boolean; translation_de?: string; questionIndex: number; }): void
}>();

const slots = ref<(MatchPair & { droppedClause: MatchPair | null; feedbackClass: string })[]>([]);
const draggableClauses = ref<MatchPair[]>([]);

const totalSlots = computed(() => props.exerciseData.sentenceStarts.length);
const completedSlots = computed(() => slots.value.filter(s => s.droppedClause).length);
const progress = computed(() => (completedSlots.value / totalSlots.value) * 100);

const getWords = (text: string) => text.split(/(\s+)/).filter(part => part.length > 0);
const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const initializeState = () => {
    slots.value = props.exerciseData.sentenceStarts.map(s => ({
        ...s,
        droppedClause: null,
        feedbackClass: ''
    }));
    draggableClauses.value = shuffle([...props.exerciseData.relativeClauses]);
};

onMounted(initializeState);
watch(() => props.exerciseData, initializeState);

const onDrop = (slot: (typeof slots.value)[0], event: DragEvent) => {
    const itemId = event.dataTransfer?.getData('text/plain');
    if (!itemId || slot.droppedClause) return;

    const clause = draggableClauses.value.find(c => c.id === parseInt(itemId, 10));
    if (clause && clause.id === slot.id) {
        slot.droppedClause = clause;
        slot.feedbackClass = 'correct';
        draggableClauses.value = draggableClauses.value.filter(c => c.id !== clause.id);

        const fullTranslation = `${slot.translation_de} ${clause.translation_de.replace('...', '')}`.trim();
        emit('feedback', { isCorrect: true, translation_de: fullTranslation, questionIndex: -1 });

        if (draggableClauses.value.length === 0) {
            setTimeout(() => emit('completed'), 1200);
        }
    } else {
        slot.feedbackClass = 'incorrect';
        setTimeout(() => { slot.feedbackClass = '' }, 800);
    }
};

const onDragStart = (event: DragEvent, item: MatchPair) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('text/plain', item.id.toString());
    event.dataTransfer.effectAllowed = 'move';
  }
};
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="columns">
      <div class="column drop-column">
        <div
            v-for="slot in slots"
            :key="slot.id"
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
          <span v-if="slot.droppedClause" class="dropped-clause">
            <template v-for="(word, index) in getWords(slot.droppedClause.text.replace('...',' '))" :key="index">
                <VWord v-if="word.trim().length > 0" :word="word" />
                <span v-else v-html="'&nbsp;'"></span>
            </template>
          </span>
        </div>
      </div>
      <div class="column drag-column">
        <div
            v-for="clause in draggableClauses"
            :key="clause.id"
            class="draggable-item"
            :draggable="true"
            @dragstart="onDragStart($event, clause)"
        >
          <template v-for="(word, index) in getWords(clause.text)" :key="index">
            <VWord v-if="word.trim().length > 0" :word="word" />
            <span v-else v-html="'&nbsp;'"></span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-instructions { text-align: center; margin-bottom: 1rem; font-size: 1.1rem; color: var(--muted-text); }
.progress-bar { width: 100%; background-color: #e9ecef; border-radius: 8px; height: 10px; margin-bottom: 2rem; overflow: hidden; }
.progress-bar-fill { height: 100%; background-color: var(--primary-blue); transition: width 0.3s ease; }
.columns { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.column { display: flex; flex-direction: column; gap: 1rem; }
.dropzone, .draggable-item { padding: 1rem; border-radius: 8px; background-color: white; min-height: 60px; display: flex; align-items: baseline; flex-wrap: wrap; line-height: 1.5; transition: all 0.3s ease; }
.sentence-text { display: inline; }
.dropzone { border: 2px dashed var(--border-color); }
.draggable-item { border: 1px solid var(--border-color); cursor: grab; background-color: #eef7ff; }
.draggable-item:active { cursor: grabbing; }
.dropzone.filled { border-style: solid; padding: 0.5rem 1rem; }
.dropzone.correct { border-color: var(--success-color); background-color: #f0fff4; animation: pulse-green 0.5s; }
.dropzone.incorrect { border-color: var(--error-color); animation: shake-horizontal 0.4s; }
.dropped-clause { margin-left: 0.25rem; }
@keyframes pulse-green { 0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); } }
@keyframes shake-horizontal { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
</style>
