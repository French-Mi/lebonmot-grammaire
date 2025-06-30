<script setup lang="ts">
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
  showFeedback,
  continueButtonRef,
  isMistakeRound,
  currentChallenge,
  handleFeedback,
  goToNext,
  repeatAll,
  repeatMistakes,
  backToConfig,
  backToHome,
  generateVerbPdfData,
  generateMistakesPdfData // Import der neuen Funktion
} = useVerbExerciseEngine();

const downloadPdf = () => {
  const doc = new jsPDF();
  const { head, body } = generateVerbPdfData();
  const mistakesData = generateMistakesPdfData();

  doc.text('Le BonMot - Verb-Trainer Zusammenfassung', 14, 15);
  autoTable(doc, {
    head: head,
    body: body,
    startY: 20,
    styles: { font: 'helvetica', fontSize: 10 },
    headStyles: { fillColor: [74, 144, 226] },
  });

  // Fügt die Fehlertabelle hinzu, falls Fehler vorhanden sind
  if (mistakesData) {
    const finalY = (doc as any).lastAutoTable.finalY || 20; // Position nach der ersten Tabelle
    doc.text('Deine Fehler:', 14, finalY + 15);
    autoTable(doc, {
      head: mistakesData.head,
      body: mistakesData.body,
      startY: finalY + 20,
      headStyles: { fillColor: [220, 53, 69] }, // Rote Kopfzeile für Fehler
    });
  }

  doc.save('lebonmot-verben-ergebnisse.pdf');
};
</script>

<template>
    <div class="view-container">
        <LevelSummary
            v-if="levelFinished"
            :mistake-count="store.mistakes.length"
            :show-download="true"
            @repeat-all="repeatAll"
            @repeat-mistakes="repeatMistakes"
            @back-to-topic="backToConfig"
            @back-to-home="backToHome"
            @download-pdf="downloadPdf"
        />

        <div v-else>
            <RouterLink to="/verb-trainer/select-mode" class="back-link">&larr; Zurück</RouterLink>

            <div v-if="currentChallenge">
                <VerbTrainerStandard
                    v-if="store.selectedMode === 'standard' || store.selectedMode === 'shuffle'"
                    :verb="allVerbData[currentChallenge.verbKey]"
                    :tense="currentChallenge.tense"
                    :single-pronoun-index="currentChallenge.pronounIndex"
                    :feedback-results="feedbackResults"
                    @feedback="handleFeedback"
                    :key="currentChallenge.verbKey + currentChallenge.tense + currentChallenge.pronounIndex"
                />

                <VerbTrainerDragDrop
                    v-if="store.selectedMode === 'drag-drop'"
                    :verb="allVerbData[currentChallenge.verbKey]"
                    :tense="currentChallenge.tense"
                    :single-pronoun-index="currentChallenge.pronounIndex"
                    :feedback-results="feedbackResults"
                    @feedback="handleFeedback"
                    :key="currentChallenge.verbKey + currentChallenge.tense + currentChallenge.pronounIndex + '-dd'"
                />

                <VerbTrainerTranslate
                    v-if="store.selectedMode === 'translate'"
                    :verb="allVerbData[currentChallenge.verbKey]"
                    :tense="currentChallenge.tense"
                    :challenge="currentChallenge"
                    :feedback-results="feedbackResults"
                    @feedback="handleFeedback"
                    :key="currentChallenge.verbKey + currentChallenge.tense + currentChallenge.sentence?.de"
                />

                <div v-if="showFeedback && !levelFinished" class="next-action-bar">
                    <button ref="continueButtonRef" @click="goToNext" class="btn btn-secondary">Weiter</button>
                </div>
            </div>

            <div v-else class="card">
                <h2>Keine Übungen für diese Auswahl verfügbar.</h2>
                <p v-if="isMistakeRound && store.mistakes.length === 0">Du hast alle Fehler korrigiert. Gut gemacht!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back-link { display: inline-block; margin-bottom: 1rem; }
h2, p { text-align: center; }
.next-action-bar { display: flex; justify-content: center; margin-top: 1.5rem; }
.btn-secondary:focus { outline: 2px solid var(--primary-blue); }
</style>
