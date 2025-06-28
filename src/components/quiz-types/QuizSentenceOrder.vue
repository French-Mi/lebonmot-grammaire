<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import draggable from 'vuedraggable';
import type { SentenceOrderExercise } from '@/data/pronouns';
import VWord from '@/components/ui/VWord.vue';

const props = defineProps<{
  exerciseData: SentenceOrderExercise
}>();

const emit = defineEmits<{
  (e: 'completed'): void,
  (e: 'feedback', payload: {
      isCorrect: boolean;
      correctAnswer: string;
      explanation?: string;
      questionIndex: number;
      translation_de?: string;
  }): void
}>();

const currentQuestionIndex = ref(0);
const answerChecked = ref(false);
const userOrder = ref<string[]>([]);
const currentQuestion = computed(() => props.exerciseData.questions[currentQuestionIndex.value]);

const getWords = (text: string) => text.split(/(\s+)/).filter(part => part.length > 0);

const initializeUserOrder = () => {
  if (currentQuestion.value) {
    userOrder.value = [...currentQuestion.value.parts].sort(() => Math.random() - 0.5);
  }
};

onMounted(initializeUserOrder);
watch(() => props.exerciseData, initializeUserOrder, { immediate: true });

const isAnswerCorrect = computed(() => {
  if (!currentQuestion.value) return false;
  const correctSentence = currentQuestion.value.correctOrder.map(id => currentQuestion.value.parts[id]).join('');
  const userSentence = userOrder.value.join('');
  return userSentence === correctSentence;
});

const getCorrectSentence = () => {
    if (!currentQuestion.value) return '';
    return currentQuestion.value.correctOrder.map(id => currentQuestion.value.parts[id]).join('');
}

const checkAnswer = () => {
    if (answerChecked.value) return;
    emit('feedback', {
      isCorrect: isAnswerCorrect.value,
      correctAnswer: getCorrectSentence().replace(/\s+/g, ' ').trim(), // Leerzeichen für die Anzeige normalisieren
      explanation: currentQuestion.value.explanation,
      questionIndex: currentQuestionIndex.value,
      translation_de: currentQuestion.value.translation_de
    });
    answerChecked.value = true;
};

const nextQuestion = () => {
    if (currentQuestionIndex.value < props.exerciseData.questions.length - 1) {
        currentQuestionIndex.value++;
        answerChecked.value = false;
        initializeUserOrder();
    } else {
        emit('completed');
    }
};
defineExpose({ nextQuestion });
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: `${(currentQuestionIndex + 1) / exerciseData.questions.length * 100}%` }"></div>
    </div>
    <div v-if="currentQuestion" class="question-slide">
      <div class="sentence-parts-container">
        <draggable v-model="userOrder" class="draggable-container" item-key="part" :animation="150" ghost-class="ghost" :disabled="answerChecked">
          <template #item="{ element: part }">
            <div class="sentence-part" :class="{ 'correct': answerChecked && isAnswerCorrect, 'incorrect': answerChecked && !isAnswerCorrect }">
              <template v-for="(word, index) in getWords(part)" :key="index">
                <VWord v-if="word.trim().length > 0" :word="word" />
                <span v-else v-html="'&nbsp;'"></span>
              </template>
            </div>
          </template>
        </draggable>
      </div>
      <div v-if="!answerChecked" class="action-bar">
        <button @click="checkAnswer" class="btn btn-primary">Prüfen</button>
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
.sentence-parts-container { min-height: 80px; width: 100%; display: flex; justify-content: center; align-items: center; margin-bottom: 2rem; padding: 1rem; border: 2px dashed var(--border-color); border-radius: 8px; background-color: #f8f9fa; }
.draggable-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.sentence-part { padding: 10px 15px; background-color: white; border: 1px solid #dee2e6; border-radius: 6px; cursor: grab; font-size: 1.2rem; transition: all 0.2s ease-in-out; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: baseline; }
.sentence-part:active { cursor: grabbing; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.ghost { opacity: 0.5; background: #c8ebfb; }
.sentence-part.correct { background-color: #d1e7dd; border-color: #0f5132; color: #0f5132; }
.sentence-part.incorrect { background-color: #f8d7da; border-color: #842029; color: #842029; }
.action-bar { margin-top: 1rem; }
.btn-primary { background-color: var(--primary-blue); color: white; padding: 0.75rem 2.5rem; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: 500; }
</style>
