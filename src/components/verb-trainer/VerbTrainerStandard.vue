<script setup lang="ts">
import { ref, reactive, onBeforeUpdate, watch, computed, nextTick } from 'vue';
import { getConjugationsForQuiz, getPronounsForTense, getTablePronouns, getTenseDisplayName, formatPronounForDisplay } from '@/lib/verb-helper';
import type { Verb, FeedbackResult } from '@/types/verb-types';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';

const props = defineProps<{
  verb: Verb,
  tense: string,
  singlePronounIndex?: number,
  feedbackResults?: FeedbackResult[] | null
}>();

const emit = defineEmits<{
  (e: 'feedback', payload: { results: FeedbackResult[], isPerfect: boolean }): void
}>();

const pronouns = ref<string[]>([]);
const correctAnswers = ref<string[]>([]);
const userInputs = reactive<string[]>([]);
const inputRefs = ref<HTMLInputElement[]>([]);

const setInputRef = (el: any, index: number) => {
  if (el) {
    inputRefs.value[index] = el;
  }
};
onBeforeUpdate(() => {
  inputRefs.value = [];
});

const showFeedbackView = computed(() => !!props.feedbackResults);

const getCleanPronoun = (pronoun: string) => {
    return pronoun.split(' ')[0].split('/')[0];
}

const setupExercise = () => {
    userInputs.splice(0, userInputs.length);

    if (props.singlePronounIndex !== undefined) {
        const allPronouns = getPronounsForTense(props.verb, props.tense);
        const allCorrectAnswers = getConjugationsForQuiz(props.verb, props.tense) || [];
        pronouns.value = [allPronouns[props.singlePronounIndex]];
        correctAnswers.value = [allCorrectAnswers[props.singlePronounIndex]];
    } else {
        pronouns.value = getTablePronouns(props.tense);
        correctAnswers.value = getConjugationsForQuiz(props.verb, props.tense);
    }

    userInputs.push(...Array(pronouns.value.length).fill(''));

    nextTick(() => {
        if(inputRefs.value[0]) {
            inputRefs.value[0]?.focus();
        }
    });
};

watch(() => [props.verb, props.tense, props.singlePronounIndex], setupExercise, { immediate: true });

const checkAnswers = () => {
    if (showFeedbackView.value) return;
    let allCorrect = true;
    const results: FeedbackResult[] = [];

    for (let i = 0; i < correctAnswers.value.length; i++) {
        const correctAnswerString = correctAnswers.value[i] || '';
        const normalizedCorrectAnswer = correctAnswerString.replace(/\(e\)?s?$/, '');
        const correctOptions = normalizedCorrectAnswer.split('/').map(a => a.trim().toLowerCase());
        const userAnswer = (userInputs[i] || '').trim().toLowerCase();

        const isCorrect = correctOptions.includes(userAnswer);

        if (!isCorrect) { allCorrect = false; }

        let originalIndex = i;
        if(props.singlePronounIndex !== undefined) {
          originalIndex = props.singlePronounIndex;
        } else {
          const fullPronounList = getPronounsForTense(props.verb, props.tense);
          const currentPronoun = pronouns.value[i];
          const foundIndex = fullPronounList.findIndex(p => p.startsWith(currentPronoun.split(' ')[0]));
          if (foundIndex !== -1) {
            originalIndex = foundIndex;
          }
        }

        results.push({
            pronoun: pronouns.value[i],
            userInput: userInputs[i] || '',
            correctAnswer: correctAnswerString,
            isCorrect: isCorrect,
            originalIndex: originalIndex
        });
    }
    emit('feedback', { results, isPerfect: allCorrect });
};

const handleEnter = (currentIndex: number) => {
    if (showFeedbackView.value) return;
    if (currentIndex < userInputs.length - 1) {
        inputRefs.value[currentIndex + 1]?.focus();
    } else {
        checkAnswers();
    }
};
</script>

<template>
  <div class="training-card card">
    <div class="header">
      <h3>{{ verb.infinitive }} - <span class="tense">{{ getTenseDisplayName(tense) }}</span></h3>
    </div>

    <div>
      <div v-if="!showFeedbackView" class="conjugation-grid">
        <template v-for="(pronoun, index) in pronouns" :key="`input-${index}`">
          <div class="pronoun">
            <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
              {{ (pronoun.startsWith('il') || pronoun.startsWith('ils')) ? "qu'" : "que" }}
            </span>
            <span>{{ formatPronounForDisplay(pronoun.split(' ')[0], (correctAnswers[index] || '')) }}</span>
            <span v-if="pronoun.includes(' (')" class="pronoun-detail">{{ pronoun.substring(pronoun.indexOf(' (')) }}</span>
          </div>
          <div class="input-wrapper">
            <input
              type="text"
              v-model="userInputs[index]"
              :ref="el => setInputRef(el, index)"
              :disabled="showFeedbackView"
              @keydown.enter.prevent.stop="handleEnter(index)"
              class="verb-input"
              autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            >
          </div>
        </template>
      </div>

      <div v-else class="conjugation-grid">
        <template v-for="result in feedbackResults" :key="result.pronoun">
            <div class="pronoun">
              <span v-if="tense.includes('subjonctif')" class="subjunctive-prefix">
                {{ (result.pronoun.startsWith('il') || result.pronoun.startsWith('ils')) ? "qu'" : "que" }}
              </span>
              <span>{{ formatPronounForDisplay(result.pronoun.split(' ')[0], result.correctAnswer) }}</span>
              <span v-if="result.pronoun.includes(' (')" class="pronoun-detail">{{ result.pronoun.substring(result.pronoun.indexOf(' (')) }}</span>
            </div>
            <div class="feedback-row-content" :class="result.isCorrect ? 'is-correct' : 'is-incorrect'">
                <span class="user-input">{{ result.userInput || '–' }}</span>
                <span class="icon">{{ result.isCorrect ? '✓' : '✗' }}</span>
                <div class="correction-wrapper">
                  <span v-if="!result.isCorrect" class="correct-answer">{{ result.correctAnswer.split('/')[0].trim() }}</span>
                  <SpeakerIcon :text-to-speak="`${getCleanPronoun(result.pronoun)} ${result.correctAnswer.split('/')[0].trim()}`" />
                </div>
            </div>
        </template>
      </div>
    </div>

    <div class="actions">
      <button v-if="!showFeedbackView" @click="checkAnswers" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
.header { text-align: center; margin-bottom: 2rem; }
.header h3 { font-size: 1.8rem; }
.header .tense { color: var(--primary-blue); }
.conjugation-grid { display: grid; grid-template-columns: 140px 1fr; gap: 1rem 1.5rem; align-items: center; max-width: 500px; margin: 0 auto; }
.pronoun { text-align: right; font-weight: 500; color: var(--muted-text); font-size: 1.1rem; }
.pronoun-detail { font-size: 0.9rem; margin-left: 0.25rem; }
.subjunctive-prefix { margin-right: 0.25rem;}
.input-wrapper { position: relative; }
.verb-input { width: 100%; padding: 0.75rem; font-size: 1.1rem; border-radius: 6px; border: 1px solid var(--border-color); }
.actions { display: flex; justify-content: center; margin-top: 2rem; }
.btn { font-size: 1.2rem; padding: 0.8rem 2rem; }
.feedback-row-content { display: grid; grid-template-columns: 1fr 30px 1fr; gap: 1rem; align-items: center; padding: 0.75rem; border-radius: 6px; border: 1px solid transparent; }
.feedback-row-content.is-correct { background-color: #d1e7dd; }
.feedback-row-content.is-incorrect { background-color: #f8d7da; }
.feedback-row-content .user-input { color: var(--dark-text); }
.feedback-row-content.is-incorrect .user-input { text-decoration: line-through; color: var(--muted-text); }
.feedback-row-content .icon { font-weight: bold; font-size: 1.2rem; }
.feedback-row-content.is-correct .icon { color: var(--success-color); }
.feedback-row-content.is-incorrect .icon { color: var(--error-color); }
.correct-answer { font-weight: 500; color: var(--success-color); }
.correction-wrapper { display: flex; align-items: center; }
</style>
