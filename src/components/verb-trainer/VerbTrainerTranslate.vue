<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { FeedbackResult, TrainingChallenge } from '@/composables/useVerbExerciseEngine';
import type { Verb } from '@/types/verb-types';
import SpeakerIcon from '@/components/ui/SpeakerIcon.vue';

const props = defineProps<{
  verb: Verb,
  tense: string,
  challenge: TrainingChallenge,
  feedbackResults?: FeedbackResult[] | null
}>();

const emit = defineEmits<{
  (e: 'feedback', payload: { results: FeedbackResult[], isPerfect: boolean }): void
}>();

const userInput = ref('');
const showFeedbackView = computed(() => !!props.feedbackResults);

watch(() => props.challenge, () => {
    userInput.value = '';
});

const checkAnswer = () => {
  if (showFeedbackView.value || !userInput.value.trim() || !props.challenge.sentence) return;

  const userAnswer = userInput.value.trim();
  const correctAnswersRaw = props.challenge.sentence.fr;
  const correctAnswers = Array.isArray(correctAnswersRaw) ? correctAnswersRaw : [correctAnswersRaw];
  const normalize = (str: string) => str.toLowerCase().replace(/[.,!?;:]/g, '').trim();
  const isCorrect = correctAnswers.some(answer => normalize(userAnswer) === normalize(answer));

  const result: FeedbackResult = {
    pronoun: 'Übersetzung',
    userInput: userAnswer,
    correctAnswer: correctAnswers[0],
    isCorrect: isCorrect,
    originalIndex: -1
  };

  emit('feedback', { results: [result], isPerfect: isCorrect });
};
</script>

<template>
  <div class="translate-card card">
    <div class="prompt-container">
        <p class="instruction">Übersetze den folgenden Satz:</p>
        <p class="german-sentence">"{{ challenge.sentence?.de }}"</p>
    </div>

    <div class="input-container">
      <textarea
          v-if="!showFeedbackView"
          v-model="userInput"
          class="translation-input"
          placeholder="Deine Übersetzung..."
          @keydown.enter.prevent="checkAnswer"
      ></textarea>

      <div v-else-if="feedbackResults" class="feedback-display">
          <div class="user-answer-container" :class="feedbackResults[0].isCorrect ? 'is-correct' : 'is-incorrect'">
              <span class="user-answer">"{{ feedbackResults[0].userInput || '–' }}"</span>
              <div class="icons-wrapper">
                <span v-if="feedbackResults[0].isCorrect" class="icon correct-icon">✓</span>
                <SpeakerIcon :text-to-speak="feedbackResults[0].userInput" />
              </div>
          </div>

          <div v-if="!feedbackResults[0].isCorrect" class="correct-answer-wrapper">
              <span class="icon incorrect-icon">✗</span>
              <div class="correct-answer">
                  <span>{{ feedbackResults[0].correctAnswer }}</span>
                  <SpeakerIcon :text-to-speak="feedbackResults[0].correctAnswer" />
              </div>
          </div>
      </div>
    </div>

    <div class="actions">
      <button v-if="!showFeedbackView" @click="checkAnswer" :disabled="!userInput.trim()" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
.translate-card { padding: 2rem; max-width: 700px; margin: 0 auto; }
.prompt-container { text-align: center; margin-bottom: 2rem; }
.instruction { color: var(--muted-text); margin-bottom: 0.5rem; }
.german-sentence { font-size: 1.5rem; font-weight: 500; }
.input-container { width: 100%; }
.translation-input { width: 100%; min-height: 100px; padding: 1rem; font-size: 1.2rem; border-radius: 8px; border: 1px solid var(--border-color); resize: vertical; }
.actions { display: flex; justify-content: center; margin-top: 1.5rem; }

/* Neue Stile für das gewünschte Feedback-Design */
.feedback-display { display: flex; flex-direction: column; gap: 1rem; }
.user-answer-container { display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-radius: 8px; }
.user-answer-container.is-correct { background-color: var(--success-color-faded); }
.user-answer-container.is-incorrect { background-color: var(--error-color-faded); }
.user-answer { font-size: 1.2rem; font-style: italic; }
.is-incorrect .user-answer { text-decoration: line-through; }
.icons-wrapper { display: flex; align-items: center; gap: 0.5rem; }
.icon { font-size: 1.5rem; font-weight: bold; }
.correct-icon { color: var(--success-color); }
.incorrect-icon { color: var(--error-color); }
.correct-answer-wrapper { display: flex; align-items: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px; }
.correct-answer { font-size: 1.2rem; font-weight: 500; margin-left: 0.5rem; }
</style>
