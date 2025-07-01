<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ClickTheWordExercise } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: ClickTheWordExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, userInput: string, correctAnswer?: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const selectedWords = ref<string[]>([]);
const answerChecked = ref(false);
const isCorrect = ref(false);

const currentQuestion = computed(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

const sentenceParts = computed(() => {
    return currentQuestion.value.sentence.split(' ');
});

const selectWord = (word: string) => {
    if (answerChecked.value) return;

    const cleanedWord = word.replace(/[.,!?;:]/g, '');
    if (!cleanedWord) return;

    const index = selectedWords.value.indexOf(cleanedWord);

    if (index > -1) {
        selectedWords.value.splice(index, 1);
    } else {
        selectedWords.value.push(cleanedWord);
    }
}

const checkAnswer = () => {
    if (selectedWords.value.length === 0 || answerChecked.value) return;

    const correctAnswerSorted = [...currentQuestion.value.answer].sort().join(' ');
    const userAnswerSorted = [...selectedWords.value].sort().join(' ');

    isCorrect.value = userAnswerSorted.toLowerCase() === correctAnswerSorted.toLowerCase();
    answerChecked.value = true;

    emit('feedback', {
        isCorrect: isCorrect.value,
        userInput: selectedWords.value.join(' '),
        correctAnswer: currentQuestion.value.answer.join(' '),
        explanation: currentQuestion.value.explanation,
        questionIndex: currentQuestionIndex.value,
        translation_de: currentQuestion.value.translation_de,
    });
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.exerciseData.questions.length - 1) {
    currentQuestionIndex.value++;
    selectedWords.value = [];
    answerChecked.value = false;
    isCorrect.value = false;
  } else {
    emit('completed');
  }
};

defineExpose({
    nextQuestion
})
</script>

<template>
  <div class="click-the-word-quiz">
    <h3 class="instruction-prompt">{{ currentQuestion.prompt }}</h3>
    <p v-if="currentQuestion.answerContext" class="answer-context">{{ currentQuestion.answerContext }}</p>

    <div class="sentence-container" :class="{ 'disabled': answerChecked }">
        <span
            v-for="(word, index) in sentenceParts"
            :key="index"
            @click="selectWord(word)"
            :class="['word', { selected: selectedWords.includes(word.replace(/[.,!?;:]/g, '')) }]"
        >
            {{ word }}
        </span>
    </div>

    <div v-if="answerChecked" class="feedback-section" :class="isCorrect ? 'correct' : 'incorrect'">
      <div v-if="isCorrect">
        <strong>Richtig!</strong>
      </div>
      <div v-else>
        <strong>Leider falsch.</strong> Richtige Antwort wäre: <strong class="correct-answer-text">"{{ currentQuestion.answer.join(' ') }}"</strong>
      </div>
       <div v-if="currentQuestion.translation_de" class="translation-text">
            Übersetzung: <em>{{ currentQuestion.translation_de }}</em>
        </div>
    </div>


    <div v-if="!answerChecked" class="confirm-button-container">
        <button @click="checkAnswer" :disabled="selectedWords.length === 0" class="btn btn-confirm">
            Bestätigen
        </button>
    </div>
  </div>
</template>

<style scoped>
.instruction-prompt {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dark-text);
    margin-bottom: 0.5rem; /* Verringert */
}
/* NEU: Stil für den Antwort-Kontext */
.answer-context {
    text-align: center;
    font-size: 1.1rem;
    color: var(--muted-text);
    margin-bottom: 2rem;
}
.sentence-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    font-size: 1.8rem;
    line-height: 2;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    transition: opacity 0.3s;
}
.sentence-container.disabled {
    opacity: 0.7;
}
.word {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
.sentence-container:not(.disabled) .word:hover {
    background-color: #e9ecef;
}
.word.selected {
    background-color: var(--primary-blue);
    color: white;
}
.confirm-button-container {
    margin-top: 2rem;
    text-align: center;
}
.btn-confirm {
    padding: 0.8rem 2.5rem;
    font-size: 1.1rem;
    background-color: var(--success-color);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.btn-confirm:disabled {
    background-color: #a3d9b8;
    cursor: not-allowed;
}

.feedback-section {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
}
.feedback-section.correct {
    background-color: #d1e7dd;
    color: #0f5132;
    border: 1px solid #a3cfbb;
}
.feedback-section.incorrect {
    background-color: #f8d7da;
    color: #842029;
    border: 1px solid #f1aeb5;
}
.correct-answer-text {
    font-style: italic;
}
.translation-text {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    font-style: italic;
    opacity: 0.8;
}
</style>
