<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { getConjugationsForQuiz, getTablePronouns, getTenseDisplayName, formatPronounForDisplay } from '@/lib/verb-helper';
import type { Verb, VerbForm, FeedbackResult } from '@/types/verb-types';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';

interface DropSlot {
  pronoun: string;
  droppedForm: VerbForm | null;
  isCorrect?: boolean;
  correctAnswer?: string;
}

const props = defineProps<{
  verb: Verb,
  tense: string,
  feedbackResults?: FeedbackResult[] | null
}>();

const emit = defineEmits<{
  (e: 'feedback', payload: { results: FeedbackResult[], isPerfect: boolean }): void
}>();

const pronouns = ref<string[]>([]);
const correctConjugations = ref<string[]>([]);
const draggableItems = ref<VerbForm[]>([]);
const dropSlots = reactive<DropSlot[]>([]);

const showFeedbackView = computed(() => !!props.feedbackResults);

const getCleanPronoun = (pronoun: string) => {
    return pronoun.split(' ')[0].split('/')[0];
}

watch(() => [props.verb, props.tense], () => {
  pronouns.value = getTablePronouns(props.tense);
  correctConjugations.value = getConjugationsForQuiz(props.verb, props.tense);

  const allForms = pronouns.value.map((pronoun, index) => ({
    id: `${pronoun}-${index}-${Math.random()}`,
    pronoun,
    form: correctConjugations.value[index] || '',
  }));

  draggableItems.value = [...allForms].sort(() => Math.random() - 0.5);
  dropSlots.splice(0, dropSlots.length, ...pronouns.value.map(p => ({ pronoun: p, droppedForm: null })));

}, { immediate: true, deep: true });

watch(() => props.feedbackResults, (newFeedback) => {
    if (newFeedback) {
        newFeedback.forEach(result => {
            const slot = dropSlots.find(s => s.pronoun === result.pronoun);
            if (slot) {
                slot.isCorrect = result.isCorrect;
                slot.correctAnswer = result.correctAnswer;
                if (!slot.droppedForm) {
                    slot.droppedForm = { id: 'placeholder', pronoun: result.pronoun, form: result.userInput };
                }
            }
        });
    }
});

const allDropped = computed(() => dropSlots.every(slot => slot.droppedForm !== null));

const handleDragStart = (event: DragEvent, item: VerbForm) => {
  if (showFeedbackView.value) {
      event.preventDefault();
      return;
  }
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('application/json', JSON.stringify(item));
  }
};

const handleDragStartFromSlot = (event: DragEvent, item: VerbForm) => {
    handleDragStart(event, item);
};

const handleDropInSource = (event: DragEvent) => {
    if (showFeedbackView.value) return;
    const item = JSON.parse(event.dataTransfer!.getData('application/json')) as VerbForm;

    const originSlot = dropSlots.find(s => s.droppedForm?.id === item.id);
    if (originSlot) {
        originSlot.droppedForm = null;
    }

    if (!draggableItems.value.some(d => d.id === item.id)) {
        draggableItems.value.push(item);
    }
};

const handleDropInSlot = (event: DragEvent, targetSlot: DropSlot) => {
  if (targetSlot.droppedForm || showFeedbackView.value) return;

  const item = JSON.parse(event.dataTransfer!.getData('application/json')) as VerbForm;

  targetSlot.droppedForm = item;
  draggableItems.value = draggableItems.value.filter(d => d.id !== item.id);

  const originSlot = dropSlots.find(s => s.pronoun !== targetSlot.pronoun && s.droppedForm?.id === item.id);
  if (originSlot) {
      originSlot.droppedForm = null;
  }
};

const checkAnswers = () => {
    if (showFeedbackView.value) return;
    let allCorrect = true;
    const results: FeedbackResult[] = [];

    dropSlots.forEach((slot, index) => {
        const userAnswer = slot.droppedForm?.form || '';
        const correctAnswer = correctConjugations.value[index];
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

        if (!isCorrect) {
            allCorrect = false;
        }

        results.push({
            pronoun: slot.pronoun,
            userInput: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
            originalIndex: pronouns.value.findIndex(p => p === slot.pronoun)
        });
    });

    emit('feedback', { results, isPerfect: allCorrect });
};
</script>

<template>
  <div class="drag-drop-card card">
    <div class="header">
      <h3>{{ verb.infinitive }} - <span class="tense">{{ getTenseDisplayName(tense) }}</span></h3>
      <p class="instructions">Ziehe die Verbformen auf das richtige Pronomen.</p>
    </div>

    <div class="drag-drop-area">
      <div v-if="showFeedbackView" class="drop-zones feedback-view">
          <div
            v-for="slot in dropSlots"
            :key="slot.pronoun"
            class="drop-zone feedback"
            :class="{
                'is-correct': slot.isCorrect,
                'is-incorrect': !slot.isCorrect
            }"
          >
            <div class="pronoun">
              <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                {{ (slot.pronoun.startsWith('il') || slot.pronoun.startsWith('ils')) ? "qu'" : "que" }}
              </span>
              <span>{{ formatPronounForDisplay(slot.pronoun, (slot.correctAnswer || '')) }}</span>
            </div>
            <div class="feedback-content">
              <span class="user-input" :class="{'strikethrough': !slot.isCorrect}">
                {{ slot.droppedForm?.form || '–' }}
              </span>
              <span class="icon">{{ slot.isCorrect ? '✓' : '✗' }}</span>
              <div class="correction-wrapper">
                <span v-if="!slot.isCorrect" class="correct-answer-text">{{ slot.correctAnswer }}</span>
                <SpeakerIcon :text-to-speak="`${getCleanPronoun(slot.pronoun)} ${slot.correctAnswer}`" />
              </div>
            </div>
          </div>
      </div>

      <template v-else>
        <div class="drop-zones">
          <div
            v-for="slot in dropSlots"
            :key="slot.pronoun"
            class="drop-zone"
            @dragover.prevent
            @drop="handleDropInSlot($event, slot)"
          >
            <div class="pronoun">
              <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                {{ (slot.pronoun.startsWith('il') || slot.pronoun.startsWith('ils')) ? "qu'" : "que" }}
              </span>
              <span>{{ formatPronounForDisplay(slot.pronoun, (correctConjugations[pronouns.indexOf(slot.pronoun)] || '')) }}</span>
            </div>
            <div
              v-if="slot.droppedForm"
              class="dropped-item"
              draggable="true"
              @dragstart="handleDragStartFromSlot($event, slot.droppedForm)"
            >
              {{ slot.droppedForm.form }}
            </div>
          </div>
        </div>

        <div
          class="draggable-items-container"
          @dragover.prevent
          @drop.prevent="handleDropInSource($event)"
        >
          <div
            v-for="item in draggableItems"
            :key="item.id"
            class="draggable-item"
            draggable="true"
            @dragstart="handleDragStart($event, item)"
          >
            {{ item.form }}
          </div>
        </div>
      </template>
    </div>

    <div class="actions">
        <button v-if="allDropped && !showFeedbackView" @click="checkAnswers" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
.header { text-align: center; margin-bottom: 2rem; }
.header h3 { font-size: 1.8rem; }
.header .tense { color: var(--primary-blue); }
.instructions { color: var(--muted-text); margin-top: 0.5rem; }

.drag-drop-area { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 700px; margin: 0 auto; }
.drop-zones { display: flex; flex-direction: column; gap: 0.75rem; }
.drop-zone { display: flex; align-items: center; border: 2px dashed var(--border-color); border-radius: 8px; padding: 0.5rem 1rem; min-height: 55px; transition: all 0.2s; }
.pronoun { display: flex; justify-content: flex-end; width: 140px; text-align: right; margin-right: 1rem; font-weight: 500; color: var(--muted-text); }
.subjunctive-prefix { margin-right: 0.25rem; }
.dropped-item { font-weight: 500; color: var(--dark-text); padding: 0.5rem 1rem; background-color: white; border-radius: 6px; cursor: grab; }
.draggable-items-container { background-color: #f8f9fa; padding: 1rem; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 0.75rem; align-content: flex-start; }
.draggable-item { border: 1px solid var(--border-color); background-color: white; padding: 0.75rem 1rem; border-radius: 8px; cursor: grab; text-align: center; font-weight: 500; }
.draggable-item:active, .dropped-item:active { cursor: grabbing; }

/* Feedback-Stile */
.feedback-view { grid-column: 1 / -1; } /* Nimmt die volle Breite ein */
.drop-zone.feedback { border-style: solid; }
.drop-zone.is-correct { background-color: #d1e7dd; border-color: var(--success-color); }
.drop-zone.is-incorrect { background-color: #f8d7da; border-color: var(--error-color); }
.feedback-content { display: grid; grid-template-columns: 1fr 30px 1fr; gap: 1rem; align-items: center; width: 100%; }
.user-input.strikethrough { text-decoration: line-through; color: var(--muted-text); }
.icon { font-weight: bold; font-size: 1.2rem; }
.is-correct .icon { color: var(--success-color); }
.is-incorrect .icon { color: var(--error-color); }
.correction-wrapper { display: flex; align-items: center; gap: 0.5rem; }
.correct-answer-text { font-weight: 500; color: var(--success-color); }

.actions { display: flex; justify-content: center; margin-top: 2rem; }
.btn { font-size: 1.2rem; padding: 0.8rem 2rem; }
</style>
