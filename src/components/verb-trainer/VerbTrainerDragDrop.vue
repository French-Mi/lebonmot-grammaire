<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
// KORREKTUR: Importiert die neue Hilfsfunktion
import { getConjugationsForQuiz, getTablePronouns, getTenseDisplayName, formatPronounForDisplay } from '@/lib/verb-helper';
import type { Verb } from '@/types/verb-types';
import type { FeedbackResult } from '@/composables/useVerbExerciseEngine';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';

const props = defineProps<{
  verb: Verb,
  tense: string,
  feedbackResults?: FeedbackResult[] | null,
  singlePronounIndex?: number // Wird für Drag & Drop nicht mehr verwendet, aber sicherheitshalber beibehalten
}>();

const emit = defineEmits<{
  (e: 'feedback', payload: { results: FeedbackResult[], isPerfect: boolean }): void
}>();

const pronouns = ref<string[]>([]);
const correctConjugations = ref<string[]>([]);
const shuffledConjugations = ref<string[]>([]);
const droppedAnswers = reactive<Array<string | null>>([]);
const draggedItem = ref<string | null>(null);
const dropzoneActiveIndex = ref<number | null>(null);
const showFeedbackView = computed(() => !!props.feedbackResults);

const formatForSpeech = (pronoun: string, conjugation: string): string => {
    const cleanPronoun = pronoun.split(' ')[0].split('/')[0];
    const cleanConjugation = conjugation.replace(/\(e\)?s?/g, ''); // Entfernt (e)s für die Aussprache
    const vowels = ['a', 'e', 'i', 'o', 'u', 'h', 'é', 'à', 'ê'];
    if (cleanPronoun === 'je' && vowels.includes(cleanConjugation.charAt(0).toLowerCase())) {
        return `j'${cleanConjugation}`;
    }
    return `${cleanPronoun} ${cleanConjugation}`;
};

watch(() => [props.verb, props.tense], () => {
  // KORREKTUR: Verwendet die neuen Hilfsfunktionen für eine vereinfachte Darstellung
  pronouns.value = getTablePronouns(props.tense);
  correctConjugations.value = getConjugationsForQuiz(props.verb, props.tense);

  shuffledConjugations.value = [...correctConjugations.value].sort(() => Math.random() - 0.5);
  droppedAnswers.splice(0, droppedAnswers.length, ...Array(pronouns.value.length).fill(null));
}, { immediate: true });

const allDropped = computed(() => droppedAnswers.every(answer => answer !== null));
const handleDragStart = (event: DragEvent, conjugation: string) => { if (showFeedbackView.value) return; if (event.dataTransfer) { event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', conjugation); draggedItem.value = conjugation; } };
const handleDragEnd = () => { draggedItem.value = null; };
const handleDragOver = (event: DragEvent, index: number) => { event.preventDefault(); dropzoneActiveIndex.value = index; };
const handleDrop = (event: DragEvent, targetIndex: number) => { event.preventDefault(); if (showFeedbackView.value) return; if (event.dataTransfer) { const droppedConjugation = event.dataTransfer.getData('text/plain'); if (droppedAnswers[targetIndex] === null) { droppedAnswers[targetIndex] = droppedConjugation; const indexToRemove = shuffledConjugations.value.indexOf(droppedConjugation); if (indexToRemove > -1) { shuffledConjugations.value.splice(indexToRemove, 1); } } } dropzoneActiveIndex.value = null; };
const checkAnswers = () => { if (showFeedbackView.value) return; let allCorrect = true; const results: FeedbackResult[] = []; for (let i = 0; i < pronouns.value.length; i++) { const userAnswer = droppedAnswers[i] || ''; const correctAnswer = correctConjugations.value[i]; const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); if (!isCorrect) { allCorrect = false; } results.push({ pronoun: pronouns.value[i], userInput: userAnswer, correctAnswer: correctAnswer, isCorrect: isCorrect, originalIndex: i }); } emit('feedback', { results, isPerfect: allCorrect }); };
</script>

<template>
    <div class="drag-drop-card card">
    <div class="header">
      <h3>{{ verb.infinitive }} - <span class="tense">{{ getTenseDisplayName(tense) }}</span></h3>
      <p class="instructions">Ziehe die Verbformen auf das richtige Pronomen.</p>
    </div>
    <div class="drag-drop-area">
      <div class="drop-zones">
        <template v-if="!showFeedbackView">
          <div v-for="(pronoun, index) in pronouns" :key="pronoun" class="drop-zone" :class="{ 'drop-active': dropzoneActiveIndex === index }" @dragover="handleDragOver($event, index)" @dragleave="dropzoneActiveIndex = null" @drop="handleDrop($event, index)">
            <div class="pronoun">
               <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                {{ (pronoun.startsWith('il') || pronoun.startsWith('ils')) ? "qu'" : "que" }}
              </span>
              <span>{{ formatPronounForDisplay(pronoun, (correctConjugations[index] || '')) }}</span>
            </div>
            <span v-if="droppedAnswers[index]" class="dropped-item">{{ droppedAnswers[index] }}</span>
          </div>
        </template>
        <template v-else>
          <div v-for="result in feedbackResults" :key="result.pronoun" class="feedback-row">
            <div class="pronoun">
              <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                {{ (result.pronoun.startsWith('il') || result.pronoun.startsWith('ils')) ? "qu'" : "que" }}
              </span>
              <span>{{ formatPronounForDisplay(result.pronoun, result.correctAnswer) }}</span>
            </div>
            <div class="feedback-content" :class="result.isCorrect ? 'is-correct' : 'is-incorrect'">
              <span class="user-input">{{ result.userInput || '–' }}</span>
              <span class="icon">{{ result.isCorrect ? '✓' : '✗' }}</span>
              <div class="correction-wrapper">
                <span v-if="!result.isCorrect" class="correct-answer">{{ result.correctAnswer }}</span>
                <SpeakerIcon :text-to-speak="formatForSpeech(result.pronoun, result.correctAnswer)" />
              </div>
            </div>
          </div>
        </template>
      </div>
      <div v-if="!showFeedbackView" class="draggable-items">
        <div v-for="conjugation in shuffledConjugations" :key="conjugation" class="draggable-item" :draggable="true" @dragstart="handleDragStart($event, conjugation)" @dragend="handleDragEnd">
          {{ conjugation }}
        </div>
      </div>
    </div>
    <div class="actions">
        <button v-if="allDropped && !showFeedbackView" @click="checkAnswers" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
/* Die Styles bleiben unverändert */
.header { text-align: center; margin-bottom: 2rem; } .header h3 { font-size: 1.8rem; } .header .tense { color: var(--primary-blue); } .instructions { color: var(--muted-text); margin-top: 0.5rem; } .drag-drop-area { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 600px; margin: 0 auto; } .drop-zones, .draggable-items { display: flex; flex-direction: column; gap: 0.75rem; } .drop-zone { display: flex; align-items: center; border: 2px dashed var(--border-color); border-radius: 8px; padding: 1rem; min-height: 50px; transition: all 0.2s; } .drop-zone.drop-active { border-color: var(--primary-blue); background-color: var(--light-blue); } .pronoun { display: flex; justify-content: flex-end; width: 140px; text-align: right; margin-right: 1rem; font-weight: 500; color: var(--muted-text); } .subjunctive-prefix { margin-right: 0.25rem; } .dropped-item { font-weight: 500; color: var(--dark-text); } .draggable-item { border: 1px solid var(--border-color); background-color: white; padding: 1rem; border-radius: 8px; cursor: grab; text-align: center; font-weight: 500; } .draggable-item:active { cursor: grabbing; } .feedback-row { display: grid; grid-template-columns: 140px 1fr; gap: 1rem; align-items: center; margin-bottom: 0.75rem; } .feedback-content { display: grid; grid-template-columns: 1fr 30px 1fr; gap: 1rem; align-items: center; padding: 0.75rem; border-radius: 6px; border: 1px solid transparent; } .is-correct { background-color: var(--success-color-faded); } .is-incorrect { background-color: var(--error-color-faded); } .user-input { color: var(--dark-text); } .is-incorrect .user-input { text-decoration: line-through; color: var(--muted-text); } .is-correct .user-input { font-weight: 500; color: var(--success-color); } .icon { font-weight: bold; font-size: 1.2rem; } .is-correct .icon { color: var(--success-color); } .is-incorrect .icon { color: var(--error-color); } .correct-answer { font-weight: 500; color: var(--success-color); } .actions { display: flex; justify-content: center; margin-top: 2rem; } .btn { font-size: 1.2rem; padding: 0.8rem 2rem; }
.correction-wrapper { display: flex; align-items: center; }
</style>
