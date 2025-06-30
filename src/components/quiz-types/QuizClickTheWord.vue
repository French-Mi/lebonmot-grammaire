<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ClickTheWordExercise } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: ClickTheWordExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, correctAnswer?: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const selectedWords = ref<string[]>([]);

const currentQuestion = computed(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

const sentenceParts = computed(() => {
    return currentQuestion.value.sentence.split(' ');
});

const selectWord = (word: string) => {
    const cleanedWord = word.replace(/[.,]/g, '');
    const index = selectedWords.value.indexOf(cleanedWord);

    if (index > -1) {
        selectedWords.value.splice(index, 1);
    } else {
        selectedWords.value.push(cleanedWord);
    }
}

const checkAnswer = () => {
    if (selectedWords.value.length === 0) return;

    const correctAnswerSorted = [...currentQuestion.value.answer].sort().join(' ');
    const userAnswerSorted = [...selectedWords.value].sort().join(' ');
    const isCorrect = userAnswerSorted.toLowerCase() === correctAnswerSorted.toLowerCase();

    emit('feedback', {
        isCorrect,
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
     <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: `${(currentQuestionIndex + 1) / exerciseData.questions.length * 100}%` }"></div>
    </div>
    <h3 class="instruction-prompt">{{ currentQuestion.prompt }}</h3>

    <div class="sentence-container">
        <span
            v-for="(word, index) in sentenceParts"
            :key="index"
            @click="selectWord(word)"
            :class="['word', { selected: selectedWords.includes(word.replace(/[.,]/g, '')) }]"
        >
            {{ word }}
        </span>
    </div>

    <div class="confirm-button-container">
        <button @click="checkAnswer" :disabled="selectedWords.length === 0" class="btn btn-confirm">
            Bestätigen
        </button>
    </div>
  </div>
</template>

<style scoped>
.progress-bar { width: 100%; background-color: #e9ecef; border-radius: 8px; height: 10px; margin-bottom: 2rem; overflow: hidden; }
.progress-bar-fill { height: 100%; background-color: var(--primary-blue); transition: width 0.3s ease; }
.instruction-prompt {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dark-text);
    margin-bottom: 2rem;
}
.sentence-container {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    font-size: 1.8rem;
    line-height: 2;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}
.word {
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
.word:hover {
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
</style>
