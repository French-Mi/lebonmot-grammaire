<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { FillInTheBlankExercise, FillInTheBlankQuestion } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: FillInTheBlankExercise
}>()

const emit = defineEmits<{
  (e: 'feedback', payload: { isCorrect: boolean, userInput: string, correctAnswer: string, explanation?: string, questionIndex: number, translation_de?: string }): void,
  (e: 'completed'): void
}>()

const currentQuestionIndex = ref(0);
const userAnswers = ref<string[][]>(props.exerciseData.questions.map(q => Array(Array.isArray(q.text_blank) ? q.text_blank.length : 1).fill('')));
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

const currentQuestion = computed<FillInTheBlankQuestion>(() => {
  return props.exerciseData.questions[currentQuestionIndex.value];
});

const blanks = computed(() => {
    const blank = currentQuestion.value.text_blank;
    return Array.isArray(blank) ? blank : [blank];
});

const questionText = computed(() => (currentQuestion.value.text_start || '').split(' - ')[0] || '');
const answerStartText = computed(() => {
    const parts = (currentQuestion.value.text_start || '').split(' - ');
    return parts.length > 1 ? ` - ${parts[1]}` : '';
});

const checkAnswer = () => {
    const userInputs = userAnswers.value[currentQuestionIndex.value].map(a => a.trim());
    if (userInputs.some(a => a === '')) return;

    const correctAnswers = blanks.value;

    const isCorrect = userInputs.every((input, index) => {
        const correctOptions = correctAnswers[index].split('/').map(opt => opt.trim().toLowerCase());
        return correctOptions.includes(input.toLowerCase());
    });

    emit('feedback', {
        isCorrect,
        userInput: userInputs.join(' ... '),
        correctAnswer: correctAnswers.map(c => c.replace(/\//g, ' / ')).join(' ... '),
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

watch(currentQuestionIndex, async (newIndex) => {
  const question = props.exerciseData.questions[newIndex];
  if(question) {
    const blankCount = Array.isArray(question.text_blank) ? question.text_blank.length : 1;
    userAnswers.value[newIndex] = Array(blankCount).fill('');
  }

  await nextTick();
  const firstInput = document.querySelector(`.question-item[data-index="${newIndex}"] .blank-input`) as HTMLInputElement;
  firstInput?.focus();
}, { immediate: true });

defineExpose({
    nextQuestion,
    checkAnswer
})
</script>

<template>
  <div class="quiz-container">
    <p class="instructions">{{ exerciseData.instructions }}</p>
    <div
      v-for="(question, qIndex) in exerciseData.questions"
      :key="qIndex"
      class="question-item"
      :data-index="qIndex"
      v-show="qIndex === currentQuestionIndex"
    >
        <div class="question-text" v-html="questionText"></div>

        <div class="answer-line">
            <span v-html="answerStartText"></span>

            <template v-for="(blank, bIndex) in blanks" :key="bIndex">
                 <input
                    :ref="el => { if (el) inputRefs[bIndex] = el as HTMLInputElement }"
                    type="text"
                    v-model="userAnswers[qIndex][bIndex]"
                    class="blank-input"
                    placeholder="_____"
                    @keyup.enter="checkAnswer"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                />
                <span v-if="bIndex < blanks.length - 1" v-html="(question.text_end || '').split('|')[bIndex] || ''" class="text-between-blanks"></span>
            </template>

            <span v-html="(question.text_end || '').split('|').pop()"></span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container { max-width: 800px; margin: 2rem auto; text-align: center; }
.instructions { font-size: 1.1rem; color: var(--muted-text); margin-bottom: 2rem; }
.question-item { margin-bottom: 1.5rem; }
.question-text { font-size: 1.6rem; line-height: 1.5; margin-bottom: 1rem; color: var(--dark-text); }
.answer-line { font-size: 1.6rem; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 0.5rem; line-height: 1.8; background-color: #f8f9fa; padding: 1rem; border-radius: 8px; }
.text-between-blanks { margin: 0 0.25rem; }
.blank-input { font-family: 'Georgia', 'Times New Roman', serif; font-size: 1.5rem; border: none; border-bottom: 2px solid var(--primary-blue); background-color: transparent; text-align: center; color: var(--dark-text); padding: 0.2rem 0.5rem; width: auto; min-width: 150px; max-width: 350px; flex-grow: 1; transition: border-color 0.3s, box-shadow 0.3s; }
.blank-input:focus { outline: none; border-color: var(--header-blue); box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2); }
.blank-input::placeholder { color: #ccc; font-style: italic; }
</style>
