<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useGrammarProgressStore } from '../stores/grammarProgressStore';
import type { MistakeRecord } from '../stores/grammarProgressStore';
import { useProgressStore } from '@/stores/progressStore';
import { useAppStore } from '@/stores/appStore';
import { useDailySummaryStore } from '@/stores/dailySummaryStore';
import { useUserProfileStore } from '@/stores/userProfileStore';
import { appRewards } from '@/data/rewards';
import { pronounData } from '@/data/pronouns/index';
import type { Exercise, Level, FillInTheBlankQuestion, SentenceOrderQuestion, IdentifyPartQuestion, ClickTheWordQuestion, MatchPairsExercise } from '@/data/pronouns/types';
import { achievements as allAchievements } from '@/data/achievements';
import QuizFillInTheBlank from '@/components/quiz-types/QuizFillInTheBlank.vue';
import QuizSentenceOrder from '@/components/quiz-types/QuizSentenceOrder.vue';
import QuizMatchPairs from '@/components/quiz-types/QuizMatchPairs.vue';
import QuizIdentifyPart from '@/components/quiz-types/QuizIdentifyPart.vue';
import QuizClickTheWord from '@/components/quiz-types/QuizClickTheWord.vue';
import LevelSummary from '@/components/ui/LevelSummary.vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// --- TYPE DEFINITIONS ---
type FeedbackPayload = {
    isCorrect: boolean;
    userInput: string;
    correctAnswer?: string;
    explanation?: string;
    questionIndex: number;
    translation_de?: string;
};
type EnrichedFeedback = FeedbackPayload & { questionText: string; };
interface QuizComponent {
  nextQuestion: () => void;
  checkAnswer: () => void;
}

// --- STORE & ROUTER INITIALIZATION ---
const route = useRoute();
const router = useRouter();
const grammarStore = useGrammarProgressStore();
const progressStore = useProgressStore();
const appStore = useAppStore();
const dailySummaryStore = useDailySummaryStore();
const userProfileStore = useUserProfileStore();

// --- ROUTE PARAMS ---
const topicId = computed(() => route.params.topicId as string);
const levelId = computed(() => route.params.levelId as string);
const exerciseId = computed(() => route.params.exerciseId as string);

// --- COMPONENT STATE ---
const exerciseQueue = ref<Exercise[]>([]);
const currentExerciseIndex = ref(0);
const levelFinished = ref(false);
const showFeedback = ref(false);
const feedbackDetails = ref<FeedbackPayload | null>(null);
const quizComponentRef = ref<QuizComponent | null>(null);
const mainActionButtonRef = ref<HTMLButtonElement | null>(null);
const isMistakeRound = ref(false);
const currentRoundMistakes = ref<MistakeRecord[]>([]);
const allRoundAnswers = ref<EnrichedFeedback[]>([]);

// --- COMPUTED PROPERTIES ---
const currentLevelData = computed((): Level | undefined => {
  if (!pronounData || !pronounData.categories) return undefined;
  const allLevels = pronounData.categories.flatMap(c => c.levels);
  return allLevels.find(l => l.uniqueId === levelId.value);
});
const currentExercise = computed(() => exerciseQueue.value[currentExerciseIndex.value]);
const isLastExercise = computed(() => currentExerciseIndex.value >= exerciseQueue.value.length - 1);
const summaryTitle = computed(() => isMistakeRound.value ? "Fehlerrunde beendet" : "Übung abgeschlossen!");
const showGlobalFeedback = computed(() => {
    if (!showFeedback.value || !feedbackDetails.value) return false;
    const typesWithLocalFeedback = ['clickTheWord', 'matchPairs'];
    return !typesWithLocalFeedback.includes(currentExercise.value?.type);
});

// --- METHODS ---
const setupExercises = (mode: 'mistakes' | number) => {
    isMistakeRound.value = mode === 'mistakes';
    levelFinished.value = false;
    showFeedback.value = false;
    feedbackDetails.value = null;
    currentRoundMistakes.value = [];
    allRoundAnswers.value = [];
    let newQueue: Exercise[] = [];

    const level = currentLevelData.value;
    if (!level) return;

    if (mode === 'mistakes') {
        const mistakes = grammarStore.getMistakesForLevel(topicId.value, levelId.value);
        const exercisesToRepeatMap = new Map<number, Exercise>();
        mistakes.forEach(mistake => {
            const exerciseIndex = mistake.exerciseIndex;
            const originalExercise = level.exercises[exerciseIndex];
            if (!originalExercise) return;

            if (originalExercise.type === 'matchPairs' || originalExercise.type === 'identifyPart') {
                if (!exercisesToRepeatMap.has(exerciseIndex)) {
                    exercisesToRepeatMap.set(exerciseIndex, originalExercise);
                }
                return;
            }

            if ('questions' in originalExercise && Array.isArray(originalExercise.questions)) {
                if (!exercisesToRepeatMap.has(exerciseIndex)) {
                    exercisesToRepeatMap.set(exerciseIndex, { ...originalExercise, questions: [] });
                }

                const exerciseShell = exercisesToRepeatMap.get(exerciseIndex);
                const questionToRepeat = (originalExercise.questions as any[])[mistake.questionIndex];

                if (exerciseShell && 'questions' in exerciseShell && Array.isArray(exerciseShell.questions) && questionToRepeat) {
                    const isQuestionAlreadyAdded = exerciseShell.questions.some(q => JSON.stringify(q) === JSON.stringify(questionToRepeat));
                    if (!isQuestionAlreadyAdded) {
                       (exerciseShell.questions as any[]).push(questionToRepeat);
                    }
                }
            }
        });
        newQueue = Array.from(exercisesToRepeatMap.values());
        grammarStore.clearMistakesForLevel(topicId.value, levelId.value);
    } else {
      if (level.exercises && level.exercises[mode]) {
        const specificExercise = level.exercises[mode];
        if (specificExercise) newQueue = [specificExercise];
      }
    }
    exerciseQueue.value = [...newQueue];
    currentExerciseIndex.value = 0;
};

const handleFeedback = (payload: FeedbackPayload) => {
    if (!currentExercise.value) return;
    const questionText = getQuestionTextForPdf(currentExercise.value, payload.questionIndex);
    allRoundAnswers.value.push({ ...payload, questionText });

    if (!payload.isCorrect && !isMistakeRound.value) {
        const exerciseIndex = parseInt(exerciseId.value, 10);
        if (!isNaN(exerciseIndex)) {
            currentRoundMistakes.value.push({
                topicId: topicId.value,
                levelId: levelId.value,
                exerciseIndex: exerciseIndex,
                questionIndex: payload.questionIndex,
                userInput: payload.userInput,
            });
        }
    }
    feedbackDetails.value = payload;
    showFeedback.value = true;
    nextTick(() => { mainActionButtonRef.value?.focus(); });
};

const triggerCheckAnswer = () => {
  if (quizComponentRef.value && typeof quizComponentRef.value.checkAnswer === 'function') {
    quizComponentRef.value.checkAnswer();
  }
};

const advanceToNext = () => {
    showFeedback.value = false;
    feedbackDetails.value = null;
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

        if (isPerfect && !isMistakeRound.value) {
          progressStore.addPerfectlyCompletedLevel(levelId.value);
        }
        progressStore.addXp(isPerfect ? 30 : 15, topicId.value);
        progressStore.logSession();

        const oldAchievements = [...progressStore.unlockedAchievements];
        progressStore.checkAndUnlockAchievements({ topicId: topicId.value, mistakes: mistakesCount, isPerfect });
        const newAchievements = progressStore.unlockedAchievements.filter(id => !oldAchievements.includes(id));
        if(newAchievements.length > 0) {
            const achievementTitles = newAchievements.map(id => allAchievements.find(a => a.id === id)?.title).filter(Boolean);
            if (achievementTitles.length > 0) {
                appStore.showNotification({ title: "Neuer Erfolg!", description: `Du hast "${achievementTitles.join(', ')}" freigeschaltet!`, icon: 'fas fa-trophy' });
            }
        }

        checkAndUnlockRewards();
        currentRoundMistakes.value.forEach(mistake => grammarStore.addMistake(mistake));
        levelFinished.value = true;

        const level = currentLevelData.value;
        const exercise = currentExercise.value;
        if (level && exercise) {
            const category = pronounData.categories.find(c => c.levels.some(l => l.uniqueId === levelId.value));
            const title = `Pronomen > ${category?.title.replace(/A\)|B\)/, '').trim()} > Level ${level.level}: ${level.title}`;
            dailySummaryStore.addExerciseSummary({ topic: 'Pronomen', title: title, timestamp: Date.now(), results: allRoundAnswers.value.map(answer => ({ question: answer.questionText, userInput: answer.userInput, correctAnswer: answer.correctAnswer || '', isCorrect: answer.isCorrect })) });
        }
    }
};

const checkAndUnlockRewards = () => {
  const currentXPLevel = progressStore.level;
  appRewards.forEach(reward => {
    const isUnlocked = userProfileStore.unlockedAvatars.includes(reward.value);
    if (!isUnlocked && currentXPLevel >= reward.requiredLevels) {
      userProfileStore.unlockReward(reward);
      appStore.showNotification({ title: 'Belohnung freigeschaltet!', description: `Neuer Avatar: ${reward.name}`, icon: 'fas fa-star' });
    }
  });
};

const handleGlobalKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.tagName === 'TEXTAREA') return;

      event.preventDefault();
      if (showFeedback.value) {
          advanceToNext();
      } else {
          triggerCheckAnswer();
      }
  }
};

onMounted(() => {
    const id = exerciseId.value;
    if (id === 'mistakes') {
        setupExercises('mistakes');
    } else {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
            router.push(`/topic/${topicId.value}`);
            return;
        }
        setupExercises(numericId);
    }
    window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleGlobalKeydown);
});

const repeatThis = () => {
    const id = exerciseId.value;
    if (id === 'mistakes') {
        setupExercises('mistakes');
    } else {
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId)) {
          setupExercises(numericId);
        }
    }
};
const backToSelection = () => router.push(`/topic/${topicId.value}/level/${levelId.value}`);

// KORRIGIERTE FUNKTION
const getQuestionTextForPdf = (exercise: Exercise, questionIndex: number): string => {
    if (exercise.type === 'matchPairs') {
        const q = (exercise as MatchPairsExercise).sentenceStarts[questionIndex];
        return q ? q.text : '';
    }
    if (!('questions' in exercise) || !Array.isArray(exercise.questions)) {
        return exercise.instructions;
    }

    const q = exercise.questions[questionIndex];
    if (!q) return '';

    // Typsichere Abfrage je nach Übungstyp
    switch (exercise.type) {
        case 'fillInTheBlank': {
            const question = q as FillInTheBlankQuestion;
            const blankText = Array.isArray(question.text_blank) ? question.text_blank.join(' ___ ') : '___';
            return `${question.text_start} ${blankText} ${question.text_end}`;
        }
        case 'sentenceOrder': {
            return (q as SentenceOrderQuestion).parts.join(' | ');
        }
        case 'clickTheWord': {
            return `${(q as ClickTheWordQuestion).prompt}\n"${(q as ClickTheWordQuestion).sentence}"`;
        }
        case 'identifyPart': {
            return `${(q as IdentifyPartQuestion).sentence} (${(q as IdentifyPartQuestion).prompt})`;
        }
        default:
            return '';
    }
};

const downloadPdf = () => {
  const doc = new jsPDF();
  const level = currentLevelData.value;
  const exercise = currentExercise.value;
  if (!level || !exercise) return;

  const category = pronounData.categories.find(c => c.levels.some(l => l.uniqueId === levelId.value));
  const title = `Pronomen > ${category?.title.replace(/A\)|B\)/, '').trim()} > Level ${level.level}: ${level.title}`;
  doc.text(title, 14, 15);
  doc.setFontSize(12);
  doc.text(`Übung: ${exercise.shortTitle}`, 14, 22);

  const head = [['Frage / Satz', 'Deine Antwort', 'Korrektur']];
  const body = allRoundAnswers.value.map(answer => {
      const questionText = answer.questionText;
      const correction = answer.isCorrect ? 'Richtig' : answer.correctAnswer || '';
      return [questionText, answer.userInput, correction];
  });

  autoTable(doc, {
      head: head,
      body: body,
      startY: 30,
      headStyles: { fillColor: [74, 144, 226], textColor: [255, 255, 255] },
      didParseCell: function (data) {
        if (data.column.index === 2) {
          if (data.cell.raw === 'Richtig') {
            data.cell.styles.textColor = '#198754';
            data.cell.styles.fontStyle = 'bold';
          } else {
            data.cell.styles.textColor = '#dc3545';
          }
        }
      }
  });

  doc.save(`lebonmot-ergebnisse-${level.uniqueId}.pdf`);
};

</script>

<template>
  <div class="view-container">
    <LevelSummary
        v-if="levelFinished"
        :title="summaryTitle"
        :mistake-count="currentRoundMistakes.length"
        :show-mistake-repeat="currentRoundMistakes.length > 0"
        :show-download="true"
        button-text-repeat="Nochmal üben"
        @repeat-all="repeatThis"
        @repeat-mistakes="setupExercises('mistakes')"
        @back-to-topic="backToSelection"
        @download-pdf="downloadPdf"
    />
    <div v-else>
        <RouterLink :to="`/topic/${topicId}/level/${levelId}`" class="back-link">&larr; Zurück zur Übungsauswahl</RouterLink>

        <div v-if="currentLevelData && currentExercise">
            <h1 class="exercise-title">{{ currentExercise.shortTitle }}</h1>

            <QuizFillInTheBlank ref="quizComponentRef" v-if="currentExercise.type === 'fillInTheBlank'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizSentenceOrder ref="quizComponentRef" v-if="currentExercise.type === 'sentenceOrder'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizMatchPairs ref="quizComponentRef" v-if="currentExercise.type === 'matchPairs'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback"/>
            <QuizIdentifyPart ref="quizComponentRef" v-if="currentExercise.type === 'identifyPart'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />
            <QuizClickTheWord ref="quizComponentRef" v-if="currentExercise.type === 'clickTheWord'" :exercise-data="currentExercise" @completed="handleExerciseCompleted" @feedback="handleFeedback" />

            <div v-if="showGlobalFeedback && feedbackDetails" class="feedback-container-global">
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

            <div class="next-action-bar">
                <button v-if="!showFeedback" @click="triggerCheckAnswer" class="btn btn-primary" ref="mainActionButtonRef">
                  Prüfen
                </button>
                <button v-if="showFeedback" @click="advanceToNext" class="btn btn-primary" ref="mainActionButtonRef">
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

.next-action-bar .btn {
  padding: 0.8rem 3rem;
  font-size: 1.2rem;
}
.btn-primary {
    background-color: var(--primary-blue);
    color: white;
    border: none;
}
.btn-primary:hover {
    background-color: #2563EB;
}
</style>
