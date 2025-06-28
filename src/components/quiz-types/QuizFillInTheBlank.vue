<script setup lang="ts">
import { ref, computed } from 'vue';
import type { FillInTheBlankExercise } from '@/data/pronouns';

const props = defineProps<{
  exerciseData: FillInTheBlankExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, correctAnswer?: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const userAnswer = ref('');

const currentQuestion = computed(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

const checkAnswer = () => {
    const isCorrect = userAnswer.value.trim().toLowerCase() === currentQuestion.value.text_blank.toLowerCase();
    emit('feedback', {
        isCorrect,
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
    <p class="question-text">
        {{ currentQuestion.text_start }}
        <span class="blank-space">___</span>
        {{ currentQuestion.text_end }}
    </p>

    <div class="answer-section">
      <input
        v-model="userAnswer"
        @keyup.enter="checkAnswer"
        type="text"
        class="answer-input"
        placeholder="Antwort eingeben..."
      />
    </div>

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
.question-text {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
}
.blank-space {
  font-weight: 700;
  color: var(--primary-blue);
  border-bottom: 2px solid var(--primary-blue);
}
.answer-section {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.answer-input {
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  font-size: 1.2rem;
  text-align: center;
  border: 2px solid var(--border-color);
  border-radius: 8px;
}

/* NEUE STILE FÜR DIE BUTTONS */
.answer-options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
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
