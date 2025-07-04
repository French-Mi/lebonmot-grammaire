<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useVerbExerciseEngine } from '@/composables/useVerbExerciseEngine';
import VerbTrainerStandard from '@/components/verb-trainer/VerbTrainerStandard.vue';
import VerbTrainerDragDrop from '@/components/verb-trainer/VerbTrainerDragDrop.vue';
import VerbTrainerTranslate from '@/components/verb-trainer/VerbTrainerTranslate.vue';
import LevelSummary from '@/components/ui/LevelSummary.vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const {
  store,
  allVerbData,
  levelFinished,
  feedbackResults,
  isMistakeRound,
  currentChallenge,
  handleFeedback,
  goToNext,
  repeatMistakes,
  repeatAll,
  backToConfig,
  goToModeSelection,
  generateMistakesPdfData
} = useVerbExerciseEngine();

const handleGlobalEnterKey = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && feedbackResults.value) {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'BUTTON')) {
        return;
    }
    event.preventDefault();
    goToNext();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalEnterKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalEnterKey);
});


const downloadMistakesPdf = () => {
  const data = generateMistakesPdfData();
  if (!data) return;

  const doc = new jsPDF();
  doc.text('Fehler-Zusammenfassung', 14, 15);

  autoTable(doc, {
      head: data.head,
      body: data.body,
      startY: 25,
      headStyles: {
          fillColor: [74, 144, 226],
          textColor: [255, 255, 255]
      },
      didParseCell: (data) => {
        if (data.column.index > 0 && data.cell.section === 'body') {
           data.cell.styles.fontStyle = 'bold';
        }
        if (data.column.index === 1) {
          data.cell.styles.textColor = '#dc3545';
        }
        if (data.column.index === 2) {
          data.cell.styles.textColor = '#198754';
        }
      }
  });

  doc.save('lebonmot-fehlerkorrektur.pdf');
};
</script>

<template>
  <div class="view-container">
    <LevelSummary
      v-if="levelFinished"
      :title="isMistakeRound ? 'Fehlerrunde beendet' : 'Übung beendet!'"
      :mistake-count="store.mistakes.length"
      :show-mistake-repeat="store.mistakes.length > 0 && !isMistakeRound"
      :show-download="store.mistakes.length > 0"
      button-text-repeat="Gleichen Modus wiederholen"
      :show-change-mode="true"
      @repeat-all="repeatAll"
      @repeat-mistakes="repeatMistakes"
      @back-to-topic="backToConfig"
      @download-pdf="downloadMistakesPdf"
      @change-mode="goToModeSelection"
    />

    <div v-else-if="currentChallenge" class="training-container">
      <div class="training-header">
        <button @click="goToModeSelection" class="btn-cancel">
          Modus wechseln
        </button>
      </div>

      <VerbTrainerStandard
        v-if="store.selectedMode === 'standard' || store.selectedMode === 'shuffle'"
        :key="`${currentChallenge.verbKey}-${currentChallenge.tense}-${currentChallenge.pronounIndex}`"
        :verb="allVerbData[currentChallenge.verbKey]"
        :tense="currentChallenge.tense"
        :single-pronoun-index="store.selectedMode === 'shuffle' ? currentChallenge.pronounIndex : undefined"
        :feedback-results="feedbackResults"
        @feedback="handleFeedback"
      />
      <VerbTrainerDragDrop
        v-else-if="store.selectedMode === 'drag-drop'"
        :key="`${currentChallenge.verbKey}-${currentChallenge.tense}`"
        :verb="allVerbData[currentChallenge.verbKey]"
        :tense="currentChallenge.tense"
        :feedback-results="feedbackResults"
        @feedback="handleFeedback"
      />
      <VerbTrainerTranslate
        v-else-if="store.selectedMode === 'translate' && currentChallenge.sentence"
        :key="`${currentChallenge.verbKey}-${currentChallenge.tense}-${currentChallenge.sentence.de}`"
        :verb="allVerbData[currentChallenge.verbKey]"
        :tense="currentChallenge.tense"
        :challenge="currentChallenge"
        :feedback-results="feedbackResults"
        @feedback="handleFeedback"
      />

       <div v-if="feedbackResults" class="next-action-bar">
          <button @click="goToNext" class="btn btn-primary">Weiter</button>
      </div>
    </div>
     <div v-else class="card-placeholder">
        <h2>Lade Übung...</h2>
        <p>Es wurden keine passenden Übungen für deine Auswahl gefunden.</p>
         <button @click="backToConfig" class="btn btn-secondary">Neue Auswahl treffen</button>
    </div>
  </div>
</template>

<style scoped>
.training-container {
  padding-bottom: 80px;
}
.training-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
/* KORRIGIERTE STILE FÜR DEN BUTTON */
.btn-cancel {
  background-color: var(--primary-blue); /* Blauer Hintergrund */
  color: white; /* Weißer Text */
  border: none; /* Kein Rand */
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  opacity: 0.9;
}
.btn-cancel:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.next-action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: var(--card-background);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  z-index: 99;
}
.btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
}
.card-placeholder {
    text-align: center;
    padding: 2rem;
}
</style>
