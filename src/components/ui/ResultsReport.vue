<script setup lang="ts">
import type { PropType } from 'vue';
import type {
    Exercise,
    FillInTheBlankExercise,
    SentenceOrderExercise,
    ClickTheWordExercise,
    IdentifyPartExercise,
    MatchPairsExercise
} from '@/data/pronouns/types';

interface Mistake {
  questionIndex: number;
}

const props = defineProps({
  title: { type: String, required: true },
  mistakes: { type: Array as PropType<Mistake[]>, required: true },
  exercise: { type: Object as PropType<Exercise | null>, required: true },
});

const currentDate = new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});

const wasMistake = (questionIndex: number): boolean => {
    if (!props.exercise || !props.mistakes) return false;
    if (props.exercise.type === 'matchPairs') return false;
    return props.mistakes.some(m => m.questionIndex === questionIndex);
}
</script>

<template>
  <div class="report-container">
    <header class="report-header">
      <h1>Le Bon Mot</h1>
      <h2>Ergebnisübersicht</h2>
    </header>
    <main class="report-main" v-if="exercise">
      <div class="summary-info">
        <h3>Zusammenfassung für: "{{ exercise.shortTitle }}"</h3>
        <p>Datum: {{ currentDate }}</p>
        <p>
            Ergebnis: <strong>{{ mistakes.length > 0 ? `${mistakes.length} Fehler` : 'Perfekt!' }}</strong>
        </p>
      </div>

      <div class="questions-section">
        <h4>Übersicht der Aufgaben:</h4>

        <template v-if="exercise.type === 'fillInTheBlank'">
            <div v-for="(question, index) in (exercise as FillInTheBlankExercise).questions" :key="`fitb-${index}`" class="question-item" :class="{ 'is-mistake': wasMistake(index) }">
                <p><strong>Frage:</strong> {{ question.text_start }} ___ {{ question.text_end }}</p>
                <p class="correct-answer"><strong>Richtige Antwort:</strong> {{ question.text_blank }}</p>
            </div>
        </template>

        <template v-else-if="exercise.type === 'sentenceOrder'">
            <div v-for="(question, index) in (exercise as SentenceOrderExercise).questions" :key="`so-${index}`" class="question-item" :class="{ 'is-mistake': wasMistake(index) }">
                <p><strong>Frage:</strong> Bringe in die richtige Reihenfolge: "{{ question.parts.join('", "') }}"</p>
                <p class="correct-answer"><strong>Richtige Antwort:</strong> {{ question.correctOrder.map((i: number) => question.parts[i]).join(' ') }}</p>
            </div>
        </template>

        <template v-else-if="exercise.type === 'clickTheWord'">
            <div v-for="(question, index) in (exercise as ClickTheWordExercise).questions" :key="`ctw-${index}`" class="question-item" :class="{ 'is-mistake': wasMistake(index) }">
                <p><strong>Frage:</strong> {{ question.prompt }} "{{ question.sentence }}"</p>
                <p class="correct-answer"><strong>Richtige Antwort:</strong> {{ question.answer.join(' ') }}</p>
            </div>
        </template>

        <template v-else-if="exercise.type === 'identifyPart'">
            <div v-for="(question, index) in (exercise as IdentifyPartExercise).questions" :key="`ip-${index}`" class="question-item" :class="{ 'is-mistake': wasMistake(index) }">
                <p><strong>Frage:</strong> {{ question.prompt }} "{{ question.sentence }}"</p>
                <p class="correct-answer"><strong>Richtige Antwort:</strong> {{ question.answer }}</p>
            </div>
        </template>

        <template v-else-if="exercise.type === 'matchPairs'">
            <div v-for="item in (exercise as MatchPairsExercise).sentenceStarts" :key="`mp-${item.id}`" class="question-item">
                <p>
                    <strong>Korrektes Paar:</strong>
                    {{ item.text }}
                    <span class="correct-answer-inline">{{ (exercise as MatchPairsExercise).relativeClauses.find(c => c.id === item.id)?.text || '' }}</span>
                </p>
            </div>
        </template>
      </div>
    </main>
    <footer class="report-footer">
      <p>Weiter so! Übung macht den Meister.</p>
    </footer>
  </div>
</template>

<style scoped>
.report-container {
  width: 210mm;
  padding: 30px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: white;
  font-size: 11px;
}
.report-header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 25px; }
.report-header h1 { font-size: 22px; color: #0056b3; margin: 0; }
.report-header h2 { font-size: 14px; color: #666; margin: 5px 0 0 0; font-weight: normal; }
.summary-info { margin-bottom: 25px; text-align: left; }
.summary-info h3 { font-size: 16px; border-bottom: 1px solid #ccc; padding-bottom: 8px; }
.summary-info p { font-size: 13px; }
.questions-section h4 { font-size: 15px; text-align: left; }
.question-item {
  background-color: #fcfcfc;
  border: 1px solid #eee;
  border-left: 4px solid #198754;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: left;
}
.question-item.is-mistake {
    border-left-color: #dc3545;
}
.question-item p {
  word-wrap: break-word;
  white-space: normal;
  margin: 4px 0;
  font-size: 12px;
}
.correct-answer { color: #0f5132; font-weight: bold; }
.correct-answer-inline { color: #0f5132; font-weight: bold; margin-left: 5px;}
.report-footer { text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; font-style: italic; color: #888; font-size: 10px; }
</style>
