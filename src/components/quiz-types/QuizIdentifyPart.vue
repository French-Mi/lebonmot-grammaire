<script setup lang="ts">
import { ref, reactive } from 'vue';
// KORRIGIERTER IMPORT-PFAD
import type { IdentifyPartExercise, IdentifyPartQuestion } from '@/data/pronouns/types';

const props = defineProps<{
  exerciseData: IdentifyPartExercise;
}>();

const emit = defineEmits<{
  (e: 'completed'): void,
  (e: 'feedback', payload: { isCorrect: boolean, userInput: string, correctAnswer: string, questionIndex: number }): void
}>();


const questions = reactive(
  // Expliziter Typ für 'q' hinzugefügt, um "any" zu vermeiden
  props.exerciseData.questions.map((q: IdentifyPartQuestion) => ({
    ...q,
    userInput: '',
    isCorrect: false,
    feedbackClass: '',
  }))
);

const isSubmitted = ref(false);

const checkAnswers = () => {
  if (isSubmitted.value) return;
  isSubmitted.value = true;
  let allCorrect = true;

  // Explizite Typen für 'q' und 'index' hinzugefügt
  questions.forEach((q: typeof questions[0], index: number) => {
    const isCorrect = q.userInput.trim().toLowerCase() === q.answer.toLowerCase();
    q.isCorrect = isCorrect;
    q.feedbackClass = isCorrect ? 'correct' : 'incorrect';
    if (!isCorrect) {
      allCorrect = false;
    }
    emit('feedback', {
        isCorrect: isCorrect,
        userInput: q.userInput,
        correctAnswer: q.answer,
        questionIndex: index
    });
  });

  // Warten, bis die Animationen abgeschlossen sind, bevor die Übung beendet wird.
  setTimeout(() => {
    emit('completed');
  }, 1200);
};

// Diese Funktion wird vom Parent aufgerufen, falls die Übung übersprungen/fortgesetzt wird
const nextQuestion = () => {
    emit('completed');
};

defineExpose({
    nextQuestion
})
</script>

<template>
  <div class="quiz-container card">
    <p class="quiz-instructions">{{ exerciseData.instructions }}</p>
    <div class="questions-container">
      <div v-for="q in questions" :key="q.sentence" class="question-block">
        <p class="sentence">{{ q.sentence }}</p>
        <div class="prompt-answer-group">
          <label class="prompt">{{ q.prompt }}</label>
          <input
            type="text"
            v-model="q.userInput"
            :class="q.feedbackClass"
            :disabled="isSubmitted"
            @keyup.enter="checkAnswers"
            class="answer-input"
            autocomplete="off"
          >
          <span v-if="isSubmitted && !q.isCorrect" class="correct-answer">
            (Korrekt: {{ q.answer }})
          </span>
        </div>
      </div>
    </div>
    <div class="quiz-actions">
      <button @click="checkAnswers" v-if="!isSubmitted" class="btn btn-primary">Prüfen</button>
    </div>
  </div>
</template>

<style scoped>
.quiz-instructions { text-align: center; margin-bottom: 2rem; font-size: 1.1rem; color: var(--muted-text); }
.questions-container { display: flex; flex-direction: column; gap: 2.5rem; }
.question-block { padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); }
.question-block:last-child { border-bottom: none; }
.sentence { font-size: 1.3rem; text-align: center; margin-bottom: 1rem; font-weight: 500; }
.prompt-answer-group { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.prompt { font-size: 1rem; color: var(--muted-text); }
.answer-input { font-size: 1.1rem; padding: 0.5rem 1rem; border: 1px solid var(--border-color); border-radius: 6px; width: 100%; max-width: 350px; text-align: center; transition: border-color 0.2s; }
.answer-input.correct { border-color: var(--success-color); background-color: #f0fff4; }
.answer-input.incorrect { border-color: var(--error-color); background-color: #fff0f1; }
.correct-answer { color: var(--error-color); font-size: 0.9rem; margin-top: 0.25rem; }
.quiz-actions { display: flex; justify-content: center; margin-top: 2rem; }
.btn { padding: 0.75rem 2rem; border: none; border-radius: 5px; cursor: pointer; }
.btn-primary { background-color: var(--primary-blue); color: white; }
</style>
