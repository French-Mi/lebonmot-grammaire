<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useGrammarProgressStore } from '../stores/grammarProgressStore';
import { useProgressStore } from '@/stores/progressStore';
import { useAppStore } from '@/stores/appStore';

import { pronounData } from '@/data/pronouns/index';
import type { Exercise, Level, FillInTheBlankQuestion, SentenceOrderQuestion, IdentifyPartQuestion, ClickTheWordQuestion } from '@/data/pronouns/types';
import { achievements as allAchievements } from '@/data/achievements';

import QuizFillInTheBlank from '@/components/quiz-types/QuizFillInTheBlank.vue';
import QuizSentenceOrder from '@/components/quiz-types/QuizSentenceOrder.vue';
import QuizMatchPairs from '@/components/quiz-types/QuizMatchPairs.vue';
import QuizIdentifyPart from '@/components/quiz-types/QuizIdentifyPart.vue';
import QuizClickTheWord from '@/components/quiz-types/QuizClickTheWord.vue';
import LevelSummary from '@/components/ui/LevelSummary.vue';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


type FeedbackPayload = {
    isCorrect: boolean;
    correctAnswer?: string;
    explanation?: string;
    questionIndex: number;
    translation_de?: string;
};

const route = useRoute();
const router = useRouter();
const grammarStore = useGrammarProgressStore();
const progressStore = useProgressStore();
const appStore = useAppStore();

const topicId = computed(() => route.params.topicId as string);
const levelId = computed(() => route.params.levelId as string);
const exerciseId = computed(() => route.params.exerciseId as string);

const exerciseQueue = ref<Exercise[]>([]);
const currentExerciseIndex = ref(0);
const levelFinished = ref(false);
const showFeedback = ref(false);
const feedbackDetails = ref<FeedbackPayload | null>(null);
const quizComponentRef = ref<{ nextQuestion: () => void } | null>(null);
const continueButtonRef = ref<HTMLButtonElement | null>(null);
const isMistakeRound = ref(false);
const currentRoundMistakes = ref<any[]>([]);

const setupExercises = (mode: 'mistakes' | number) => {
  isMistakeRound.value = mode === 'mistakes';
  levelFinished.value = false;
  showFeedback.value = false;
  feedbackDetails.value = null;
  currentRoundMistakes.value = [];
  let newQueue: Exercise[] = [];

  const allLevels = pronounData.categories.flatMap(c => c.levels);
  const level = allLevels.find(l => l.uniqueId === levelId.value);
  if (!level) return;

  if (mode === 'mistakes') {
      const mistakes = grammarStore.getMistakesForLevel(topicId.value, levelId.value);
      const groupedMistakes = mistakes.reduce<Record<string, Exercise>>((acc, mistake) => {
        const key = `${mistake.exercise.type}-${mistake.exercise.instructions}`;
        if (!acc[key]) {
            acc[key] = { ...mistake.exercise, questions: 'questions' in mistake.exercise ? [] : undefined } as Exercise;
        }

        const accExercise = acc[key];
        const originalExercise = mistake.exercise;

        if ('questions' in accExercise && 'questions' in originalExercise && Array.isArray(originalExercise.questions)) {
            const questionToAdd = originalExercise.questions[mistake.questionIndex];
            if (questionToAdd) {
                (accExercise.questions as any[]).push(questionToAdd);
            }
        }
        return acc;
      }, {});
      newQueue = Object.values(groupedMistakes);
      grammarStore.clearMistakesForLevel(topicId.value, levelId.value);
  } else {
    const specificExercise = level.exercises[mode];
    if (specificExercise) {
        newQueue = [specificExercise];
    }
  }

  exerciseQueue.value = [...newQueue];
  currentExerciseIndex.value = 0;
};

const currentLevelData = computed((): Level | undefined => {
  const allLevels = pronounData.categories.flatMap(c => c.levels);
  return allLevels.find(l => l.uniqueId === levelId.value);
});

const currentExercise = computed(() => exerciseQueue.value[currentExerciseIndex.value]);
const isLastExercise = computed(() => currentExerciseIndex.value >= exerciseQueue.value.length - 1);
const summaryTitle = computed(() => isMistakeRound.value ? "Fehlerrunde beendet" : "Übung abgeschlossen!");

const handleFeedback = (payload: FeedbackPayload) => {
    if (!payload.isCorrect) {
        currentRoundMistakes.value.push({
            topicId: topicId.value,
            levelId: levelId.value,
            exercise: currentExercise.value,
            questionIndex: payload.questionIndex
        });
    }
    feedbackDetails.value = payload;
    showFeedback.value = true;
    nextTick(() => { continueButtonRef.value?.focus(); });
};

const advanceToNext = () => {
    showFeedback.value = false;
    feedbackDetails.value = null;

    if(currentExercise.value.type === 'matchPairs') {
      handleExerciseCompleted();
      return;
    }

    if (quizComponentRef.value) {
      quizComponentRef.value.nextQuestion();
    }
};

const handleExerciseCompleted = () => {
    if (!isLastExercise.value) {
        currentExerciseIndex.value++;
    } else {
        const mistakesCount = currentRoundMistakes.value.length;
        const isPerfect = mistakesCount === 0;

        progressStore.addXp(isPerfect ? 30 : 15, topicId.value);
        progressStore.logSession();

        const oldAchievements = [...progressStore.unlockedAchievements];
        progressStore.checkAndUnlockAchievements({ topicId: topicId.value, mistakes: mistakesCount, isPerfect });
        const newAchievements = progressStore.unlockedAchievements.filter(id => !oldAchievements.includes(id));

        if(newAchievements.length > 0) {
            const achievementTitles = newAchievements
                .map(id => allAchievements.find(ach => ach.id === id)?.title)
                .filter(Boolean);
            if (achievementTitles.length > 0) {
                appStore.showNotification({
                    title: "Neuer Erfolg!",
                    description: `Du hast "${achievementTitles.join(', ')}" freigeschaltet!`,
                    icon: 'fas fa-trophy'
                });
            }
        }

        currentRoundMistakes.value.forEach(mistake => grammarStore.addMistake(mistake));
        levelFinished.value = true;
    }
};

const handleGlobalKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && showFeedback.value) {
    event.preventDefault();
    advanceToNext();
  }
};

onMounted(() => {
    const mode = exerciseId.value === 'mistakes' ? 'mistakes' : parseInt(exerciseId.value, 10);
    setupExercises(mode);
    window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleGlobalKeydown);
});

const repeatThis = () => {
    const mode = exerciseId.value === 'mistakes' ? 'mistakes' : parseInt(exerciseId.value, 10);
    setupExercises(mode);
};

const backToSelection = () => router.push(`/topic/${topicId.value}/level/${levelId.value}`);

const downloadPdf = () => {
  const doc = new jsPDF();
  const level = currentLevelData.value;
  if (!level) return;

  const head = [['Übung', 'Frage / Satz', 'Korrekte Antwort']];
  const body: string[][] = [];

  exerciseQueue.value.forEach((exercise: Exercise) => {
    if ('questions' in exercise && Array.isArray(exercise.questions)) {
      exercise.questions.forEach(q => {
        let questionText = '';
        let correctAnswer = '';

        switch (exercise.type) {
          case 'fillInTheBlank':
            const qFill = q as FillInTheBlankQuestion;
            questionText = `${qFill.text_start} ___ ${qFill.text_end}`;
            correctAnswer = qFill.text_blank;
            break;
          case 'sentenceOrder':
            const qOrder = q as SentenceOrderQuestion;
            questionText = qOrder.parts.join(' | ');
            correctAnswer = qOrder.correctOrder.map(i => qOrder.parts[i]).join(' ');
            break;
          case 'identifyPart':
            const qId = q as IdentifyPartQuestion;
            questionText = `${qId.sentence} (${qId.prompt})`;
            correctAnswer = qId.answer;
            break;
          case 'clickTheWord':
            const qClick = q as ClickTheWordQuestion;
            questionText = `${qClick.sentence} (${qClick.prompt})`;
            correctAnswer = qClick.answer.join(' ');
            break;
        }
        body.push([exercise.shortTitle, questionText, correctAnswer]);
      });
    } else if (exercise.type === 'matchPairs') {
      exercise.sentenceStarts.forEach((start) => {
        const clause = exercise.relativeClauses.find(c => c.id === start.id);
        if (clause) {
          body.push([exercise.shortTitle, start.text, clause.text]);
        }
      });
    }
  });

  doc.text(`Le BonMot - ${level.title}`, 14, 15);

  autoTable(doc, {
    head: head,
    body: body,
    startY: 25,
    styles: { font: 'helvetica', fontSize: 10 },
    headStyles: { fillColor: [74, 144, 226] },
  });

  doc.save(`lebonmot-pronomen-${level.uniqueId}.pdf`);
};

</script>

<template>
  <div class="view-container">
    <LevelSummary
        v-if="levelFinished"
        :title="summaryTitle"
        :mistake-count="currentRoundMistakes.length"
        :show-mistake-repeat="false"
        :show-download="true"
        button-text-repeat="Nochmal üben"
        @repeat-all="repeatThis"
        @back-to-topic="backToSelection"
        @download-pdf="downloadPdf"
    />
    <div v-else>
        <RouterLink :to="`/topic/${topicId}/level/${levelId}`" class="back-link">&larr; Zurück zur Übungsauswahl</RouterLink>

        <div v-if="currentLevelData && currentExercise">
            <h1 class="exercise-title">{{ currentExercise.shortTitle }}</h1>
            <h2 class="exercise-instructions">{{ currentExercise.instructions }}</h2>

            <QuizFillInTheBlank ref="quizComponentRef" v-if="currentExercise.type === 'fillInTheBlank'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizSentenceOrder ref="quizComponentRef" v-if="currentExercise.type === 'sentenceOrder'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizMatchPairs ref="quizComponentRef" v-if="currentExercise.type === 'matchPairs'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback"/>
            <QuizIdentifyPart ref="quizComponentRef" v-if="currentExercise.type === 'identifyPart'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizClickTheWord ref="quizComponentRef" v-if="currentExercise.type === 'clickTheWord'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />


            <div v-if="showFeedback && feedbackDetails" class="feedback-container-global">
                <div v-if="feedbackDetails.isCorrect" class="feedback-box correct">
                    <p>Richtig!</p>
                    <p v-if="feedbackDetails.translation_de" class="translation">{{ feedbackDetails.translation_de }}</p>
                </div>
                <div v-else class="feedback-box incorrect">
                    <p>
                        <strong>Leider nicht ganz richtig.</strong>
                        <span v-if="feedbackDetails.correctAnswer" class="correct-answer">{{ feedbackDetails.correctAnswer }}</span>
                    </p>
                    <p v-if="feedbackDetails.translation_de" class="translation">
                        <strong>Übersetzung:</strong> {{ feedbackDetails.translation_de }}
                    </p>
                    <p v-if="feedbackDetails.explanation" class="explanation">
                        {{ feedbackDetails.explanation }}
                    </p>
                </div>
            </div>

            <div v-if="showFeedback" class="next-action-bar">
                <button ref="continueButtonRef" @click="advanceToNext" class="btn btn-secondary">
                  Weiter
                </button>
            </div>
        </div>
        <div v-else>
          <h2>Übung konnte nicht geladen werden.</h2>
        </div>
    </div>
  </div>
</template>

<style scoped>
.back-link { display: inline-block; margin-bottom: 1.5rem; font-weight: 500; color: var(--muted-text); }
.back-link:hover { color: var(--dark-text); }
.exercise-title { font-size: 2.5rem; margin-bottom: 0.5rem; text-align: center; color: var(--header-blue); }
.exercise-instructions { font-size: 1.1rem; color: var(--muted-text); text-align: center; margin-bottom: 2rem; }
.feedback-container-global { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); width: 100%; max-width: 800px; padding: 0 1rem; z-index: 100; }
.feedback-box { padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start; }
.feedback-box.correct { background-color: var(--success-color); color: white; align-items: center; font-size: 1.2rem; font-weight: 500; }
.feedback-box.incorrect { background-color: var(--error-color); color: white; }
.feedback-header strong { font-weight: 700; }
.feedback-box.incorrect .correct-answer { font-weight: 700; margin-left: 0.5rem; font-style: italic; }
.explanation, .translation { font-size: 1rem; font-weight: 400; width: 100%; text-align: center; }
.explanation { padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.3); }
.correct .translation { color: rgba(255, 255, 255, 0.9); font-style: italic; border-top: none; padding-top: 0; }
.incorrect .translation { padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.3); }
.incorrect .translation strong { font-weight: 700; }
.next-action-bar { position: fixed; bottom: 0; left: 0; right: 0; padding: 1rem; background-color: var(--card-background); border-top: 1px solid var(--border-color); display: flex; justify-content: center; z-index: 99; }
.btn-secondary { padding: 0.8rem 3rem; font-size: 1.2rem; }
</style>
