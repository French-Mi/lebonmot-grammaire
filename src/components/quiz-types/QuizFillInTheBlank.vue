<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import type { FillInTheBlankExercise } from '@/data/pronouns';
import VWord from '@/components/ui/VWord.vue';

const props = defineProps<{
  exerciseData: FillInTheBlankExercise
}>()

const emit = defineEmits<{
  (e: 'completed'): void,
  (e: 'feedback', payload: {
      isCorrect: boolean;
      correctAnswer: string;
      explanation?: string;
      questionIndex: number;
  }): void
}>();

const currentQuestionIndex = ref(0);
const answerChecked = ref(false);
const userInput = ref('');
const feedbackClass = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const currentQuestion = computed(() => props.exerciseData.questions[currentQuestionIndex.value]);
const getWords = (text: string) => text.split(/(\s+)/).filter(part => part.length > 0);
const isAnswerCorrect = computed(() => {
    if (!currentQuestion.value) return false;
    return userInput.value.trim().toLowerCase() === currentQuestion.value.text_blank.toLowerCase();
});

const checkAnswer = () => {
    if (answerChecked.value) return;

    feedbackClass.value = isAnswerCorrect.value ? 'correct' : 'incorrect';

    emit('feedback', {
      isCorrect: isAnswerCorrect.value,
      correctAnswer: `${currentQuestion.value.text_start}${currentQuestion.value.text_blank}${currentQuestion.value.text_end}`,
      explanation: currentQuestion.value.explanation,
      questionIndex: props.exerciseData.questions.findIndex(q => q === currentQuestion.value)
    });

    answerChecked.value = true;
};

const nextQuestion = () => {
    if (currentQuestionIndex.value < props.exerciseData.questions.length - 1) {
        currentQuestionIndex.value++;
        userInput.value = '';
        answerChecked.value = false;
        feedbackClass.value = '';
        nextTick(() => { inputRef.value?.focus(); });
    } else {
        emit('completed');
    }
};

defineExpose({ nextQuestion });

watch(() => props.exerciseData, () => {
    currentQuestionIndex.value = 0;
    userInput.value = '';
    answerChecked.value = false;
    feedbackClass.value = '';
    nextTick(() => { inputRef.value?.focus(); });
}, { immediate: true });


const handleKeydown = (event: KeyboardEvent) => {
    // KORREKTUR: Wir prüfen, ob die Enter-Taste gedrückt wurde, während das Eingabefeld aktiv ist.
    if (event.key === 'Enter' && !answerChecked.value && document.activeElement === inputRef.value) {
        // Wir verhindern, dass der globale Listener in ExerciseView.vue auch auf dieses Event reagiert.
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown, true); // 'true' für Capturing-Phase, um die Reihenfolge zu sichern
    inputRef.value?.focus();
});
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown, true);
});
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>
    <div class="progress-bar">
        <div class="progress-bar-fill" :style="{ width: `${(currentQuestionIndex + 1) / exerciseData.questions.length * 100}%` }"></div>
    </div>
    <div v-if="currentQuestion" class="question-slide">
      <div class="sentence">
        <template v-for="(word, index) in getWords(currentQuestion.text_start)" :key="`start-${index}`">
            <VWord v-if="word.trim().length > 0" :word="word" />
            <span v-else>{{ word }}</span>
        </template>
        <input ref="inputRef" type="text" class="blank-input" :class="feedbackClass" v-model="userInput" :disabled="answerChecked" autocomplete="off">
        <template v-for="(word, index) in getWords(currentQuestion.text_end)" :key="`end-${index}`">
            <VWord v-if="word.trim().length > 0" :word="word" />
            <span v-else>{{ word }}</span>
        </template>
      </div>

      <div v-if="!answerChecked" class="action-bar">
        <button @click="checkAnswer" :disabled="!userInput.trim()" class="btn btn-primary">Prüfen</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container { padding: 2rem; }
.quiz-instructions { font-size: 1.1rem; color: var(--muted-text); margin-bottom: 1rem; text-align: center; }
.progress-bar { width: 100%; background-color: #e9ecef; border-radius: 8px; height: 10px; margin-bottom: 2rem; overflow: hidden; }
.progress-bar-fill { height: 100%; background-color: var(--primary-blue); transition: width 0.3s ease; }
.question-slide { display: flex; flex-direction: column; align-items: center; }
.sentence { display: flex; align-items: center; flex-wrap: wrap; justify-content: center; font-size: 1.5rem; line-height: 1.6; margin-bottom: 2rem; text-align: center; white-space: pre-wrap; }
.blank-input { border: none; border-bottom: 2px solid var(--primary-blue); margin: 0 0.5rem; padding: 0.2rem 0.4rem; font-size: 1.5rem; font-family: 'Poppins', sans-serif; text-align: center; width: 120px; background-color: transparent; transition: all 0.2s; font-weight: 700; }
.blank-input:focus { outline: none; border-bottom-color: #0b5ed7; background-color: #f8f9fa; }
.blank-input.correct { border-color: var(--success-color); color: var(--success-color); }
.blank-input.incorrect { border-color: var(--error-color); color: var(--error-color); }
.blank-input:disabled { background-color: transparent; opacity: 1; }
.action-bar { margin-top: 1rem; }
.btn { padding: 0.75rem 2.5rem; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: 500; }
.btn:disabled { background-color: #ccc; cursor: not-allowed; }
.btn-primary { background-color: var(--primary-blue); color: white; }
.btn-primary:not(:disabled):hover { background-color: #0b5ed7; }
</style>
