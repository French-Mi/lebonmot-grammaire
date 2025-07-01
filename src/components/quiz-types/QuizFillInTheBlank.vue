<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { FillInTheBlankExercise } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: FillInTheBlankExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, userInput: string, correctAnswer: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const userAnswers = ref<string[]>(Array(props.exerciseData.questions.length).fill(''));
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

const currentQuestion = computed(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

const checkAnswer = () => {
    const userAnswer = userAnswers.value[currentQuestionIndex.value].trim();
    if (userAnswer === '') return;

    const isCorrect = userAnswer.toLowerCase() === currentQuestion.value.text_blank.toLowerCase();

    emit('feedback', {
        isCorrect,
        userInput: userAnswer,
        correctAnswer: currentQuestion.value.text_blank,
        explanation: currentQuestion.value.explanation,
        questionIndex: currentQuestionIndex.value,
        translation_de: currentQuestion.value.translation_de
    });
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.exerciseData.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    emit('completed');
  }
};

watch(currentQuestionIndex, async () => {
  await nextTick();
  inputRefs.value[currentQuestionIndex.value]?.focus();
}, { immediate: true });


defineExpose({
    nextQuestion
})
</script>

<template>
  <div class="quiz-container">
    <p class="instructions">{{ exerciseData.instructions }}</p>
    <div
      v-for="(question, index) in exerciseData.questions"
      :key="index"
      class="question-item"
      v-show="index === currentQuestionIndex"
    >
        <div class="sentence">
            <span>{{ question.text_start }}</span>
            <input
                :ref="el => { if (el) inputRefs[index] = el as HTMLInputElement }"
                type="text"
                v-model="userAnswers[index]"
                class="blank-input"
                placeholder="_____"
                @keyup.enter="checkAnswer"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
            />
            <span>{{ question.text_end }}</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}
.instructions {
  font-size: 1.1rem;
  color: var(--muted-text);
  margin-bottom: 2.5rem;
}
.question-item {
  margin-bottom: 1.5rem;
}
.sentence {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.8;
}

/* KORREKTUR: Anpassungen für die Breite der Textlücke */
.blank-input {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid var(--primary-blue);
  background-color: transparent;
  text-align: center;
  color: var(--dark-text);
  padding: 0.2rem 0.5rem;
  width: auto; /* Breite an Inhalt anpassen */
  min-width: 150px; /* Mindestbreite */
  max-width: 300px; /* Maximale Breite */
  transition: border-color 0.3s, box-shadow 0.3s;
}
.blank-input:focus {
  outline: none;
  border-color: var(--header-blue);
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
}
.blank-input::placeholder {
  color: #ccc;
  font-style: italic;
}
</style>
