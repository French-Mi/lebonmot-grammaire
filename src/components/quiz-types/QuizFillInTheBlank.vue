<script setup lang="ts">
import { ref, computed, nextTick, onMounted, watch } from 'vue';
import type { FillInTheBlankExercise } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: FillInTheBlankExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, userInput: string, correctAnswer?: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const userAnswer = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const currentQuestion = computed(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

watch(currentQuestionIndex, () => {
    nextTick(() => {
        inputRef.value?.focus();
    });
});

onMounted(() => {
  inputRef.value?.focus();
});

const checkAnswer = () => {
    // KORREKTUR: Verhindert das Absenden einer leeren Antwort.
    if (userAnswer.value.trim() === '') {
      return;
    }

    const isCorrect = userAnswer.value.trim().toLowerCase() === currentQuestion.value.text_blank.toLowerCase();
    // HIER IST DIE WICHTIGE ÄNDERUNG: Die Eingabe des Nutzers wird an das Feedback-Event übergeben.
    emit('feedback', {
        isCorrect,
        userInput: userAnswer.value, // Diese Zeile ist entscheidend für den Fehler-Export
        correctAnswer: currentQuestion.value.text_blank,
        explanation: currentQuestion.value.explanation,
        questionIndex: currentQuestionIndex.value,
        translation_de: currentQuestion.value.translation_de,
    });
};

const selectAnswer = (option: string) => {
    userAnswer.value = option;
    checkAnswer();
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.exerciseData.questions.length - 1) {
    currentQuestionIndex.value++;
    userAnswer.value = '';
    nextTick(() => {
      inputRef.value?.focus();
    });
  } else {
    emit('completed');
  }
};

defineExpose({
    nextQuestion
})

</script>

<template>
  <div class="fill-in-the-blank-quiz">
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: `${(currentQuestionIndex + 1) / exerciseData.questions.length * 100}%` }"></div>
    </div>

    <p class="question-text">
      <span>{{ currentQuestion.text_start }}</span>
      <input
        v-model="userAnswer"
        @keyup.enter.stop="checkAnswer"
        type="text"
        class="answer-input-inline"
        :placeholder="'...'"
        ref="inputRef"
        :style="{ width: Math.max(100, currentQuestion.text_blank.length * 12) + 'px' }"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
      <span>{{ currentQuestion.text_end }}</span>
    </p>

    <div v-if="exerciseData.answerOptions" class="answer-options">
        <button
            v-for="option in exerciseData.answerOptions"
            :key="option"
            @click="selectAnswer(option)"
            class="btn-option"
        >
            {{ option }}
        </button>
    </div>

  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
  background-color: #e9ecef;
  border-radius: 8px;
  height: 10px;
  margin-bottom: 3rem;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}
.question-text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.answer-input-inline {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: var(--dark-text);
  background-color: #eef7ff;
  border: 1px solid #a9cfff;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
.answer-input-inline:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25);
  outline: none;
}
.answer-options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 3rem;
}
.btn-option {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    background-color: white;
    border: 2px solid var(--primary-blue);
    color: var(--primary-blue);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}
.btn-option:hover {
    background-color: var(--primary-blue);
    color: white;
}
</style>
