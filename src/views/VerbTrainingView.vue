<script setup lang="ts">
import { useVerbExerciseEngine } from '@/composables/useVerbExerciseEngine';
import VerbTrainerStandard from '@/components/verb-trainer/VerbTrainerStandard.vue';
import VerbTrainerDragDrop from '@/components/verb-trainer/VerbTrainerDragDrop.vue';
import VerbTrainerTranslate from '@/components/verb-trainer/VerbTrainerTranslate.vue';
import LevelSummary from '@/components/ui/LevelSummary.vue';

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
  backToHome
} = useVerbExerciseEngine();
</script>

<template>
    <div class="view-container">
        <LevelSummary
            v-if="levelFinished"
            :mistake-count="store.mistakes.length"
            :is-verb-trainer="true"
            @repeat-all="repeatAll"
            @repeat-mistakes="repeatMistakes"
            @back-to-topic="backToConfig"
            @back-to-home="backToHome"
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
