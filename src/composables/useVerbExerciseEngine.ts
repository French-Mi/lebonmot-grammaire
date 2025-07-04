import { ref, computed, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useVerbTrainerStore, type MistakeItem } from '@/stores/verbTrainerStore';
import { useProgressStore } from '@/stores/progressStore';
import { useAppStore } from '@/stores/appStore';
import { useDailySummaryStore } from '@/stores/dailySummaryStore';
import { allVerbData } from '@/data/verbs';
import { getPronounsForTense, getConjugationsForQuiz, getTenseDisplayName, getTablePronouns, getFormattedTableConjugations } from '@/lib/verb-helper';
import type { Verb, ExampleSentence, FeedbackResult, TrainingChallenge } from '@/types/verb-types';

type SessionFeedback = FeedbackResult & { questionText: string };

export function useVerbExerciseEngine() {
  const store = useVerbTrainerStore();
  const progressStore = useProgressStore();
  const appStore = useAppStore();
  const dailySummaryStore = useDailySummaryStore();
  const router = useRouter();

  const trainingQueue = ref<TrainingChallenge[]>([]);
  const currentQuestionIndex = ref(0);
  const levelFinished = ref(false);
  const feedbackResults = ref<FeedbackResult[] | null>(null);
  const showFeedback = ref(false);
  const continueButtonRef = ref<HTMLButtonElement | null>(null);
  const isMistakeRound = ref(false);
  const currentRoundMistakes = ref<MistakeItem[]>([]);
  const allSessionFeedback = ref<SessionFeedback[]>([]);

  const createTrainingQueue = (useMistakes = false) => {
    isMistakeRound.value = useMistakes;
    showFeedback.value = false;
    feedbackResults.value = null;
    levelFinished.value = false;
    currentRoundMistakes.value = [];
    allSessionFeedback.value = [];
    let queue: TrainingChallenge[] = [];

    if (useMistakes && store.mistakes.length > 0) {
      const mistakesToRepeat = [...store.mistakes];
      if (store.selectedMode === 'standard' || store.selectedMode === 'shuffle' || store.selectedMode === 'translate') {
        queue = mistakesToRepeat.map(mistake => ({
          verbKey: mistake.verbKey,
          tense: mistake.tense,
          pronounIndex: mistake.pronounIndex,
          sentence: mistake.sentence,
        }));
      } else if (store.selectedMode === 'drag-drop') {
        const grouped = mistakesToRepeat.reduce<Record<string, TrainingChallenge>>((acc, mistake) => {
          const key = `${mistake.verbKey}|${mistake.tense}`;
          if (!acc[key]) {
            acc[key] = { verbKey: mistake.verbKey, tense: mistake.tense };
          }
          return acc;
        }, {});
        queue = Object.values(grouped);
      }
    } else {
      store.clearMistakes();
      if (store.selectedMode === 'translate') {
        store.selectedVerbs.forEach(verbKey => {
            const verb = allVerbData[verbKey];
            if (verb && verb.examples) {
                store.selectedTenses.forEach(tense => {
                    if (verb.examples && verb.examples[tense]) {
                        verb.examples[tense].forEach((example: ExampleSentence) => {
                            queue.push({ verbKey, tense, sentence: example });
                        });
                    }
                });
            }
        });
      } else if (store.selectedMode === 'shuffle') {
        store.selectedVerbs.forEach(verbKey => {
          const verb = allVerbData[verbKey];
          if (verb) {
            store.selectedTenses.forEach(tense => {
              const pronouns = getPronounsForTense(verb, tense);
              for (let i = 0; i < pronouns.length; i++) {
                queue.push({ verbKey, tense, pronounIndex: i });
              }
            });
          }
        });
      } else {
        store.selectedVerbs.forEach(verbKey => {
          store.selectedTenses.forEach(tense => {
            if (allVerbData[verbKey]) {
              queue.push({ verbKey, tense });
            }
          });
        });
      }
    }

    trainingQueue.value = queue.sort(() => Math.random() - 0.5);
    currentQuestionIndex.value = 0;
  };

  const currentChallenge = computed<TrainingChallenge | null>(() => {
    if (trainingQueue.value.length === 0 || currentQuestionIndex.value >= trainingQueue.value.length) return null;
    return trainingQueue.value[currentQuestionIndex.value];
  });

  const handleFeedback = (payload: { results: FeedbackResult[], isPerfect: boolean }) => {
    const challenge = currentChallenge.value;
    if (!challenge) return;

    const enrichedResults = payload.results.map(res => ({
        ...res,
        questionText: challenge.sentence ? challenge.sentence.de : `${allVerbData[challenge.verbKey].infinitive} (${getTenseDisplayName(challenge.tense)}) - ${res.pronoun}`
    }));
    allSessionFeedback.value.push(...enrichedResults);

    if (!payload.isPerfect) {
      payload.results.forEach((result) => {
        if (!result.isCorrect && currentChallenge.value) {
            const mistake: MistakeItem = {
                verbKey: currentChallenge.value.verbKey,
                tense: currentChallenge.value.tense,
                userInput: result.userInput,
            };
            if(currentChallenge.value.sentence) {
                mistake.sentence = currentChallenge.value.sentence;
            } else {
                mistake.pronounIndex = result.originalIndex;
            }
            currentRoundMistakes.value.push(mistake);
        }
      });
    }
    feedbackResults.value = payload.results;
    showFeedback.value = true;
    nextTick(() => { continueButtonRef.value?.focus(); });
  };

  const goToNext = () => {
    showFeedback.value = false;
    feedbackResults.value = null;
    if (currentQuestionIndex.value < trainingQueue.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      const mistakesInRound = currentRoundMistakes.value.length;
      const isPerfect = mistakesInRound === 0;

      progressStore.addXp(isPerfect ? 30 : 15, 'verbs');
      progressStore.logSession();

      const oldAchievements = [...progressStore.unlockedAchievements];
      progressStore.checkAndUnlockAchievements({ topicId: 'verbs', mistakes: mistakesInRound, isPerfect });
      const newAchievements = progressStore.unlockedAchievements.filter(id => !oldAchievements.includes(id));

      if(newAchievements.length > 0) {
          appStore.showNotification({
              title: "Neuer Erfolg!",
              description: `Du hast "${newAchievements.join(', ')}" freigeschaltet!`,
              icon: 'fas fa-trophy'
          });
      }

      store.clearMistakes();
      currentRoundMistakes.value.forEach(mistake => store.addMistake(mistake));
      levelFinished.value = true;

      let title = "Verben";
      if (store.selectedVerbs.length === 1) {
        const verb = allVerbData[store.selectedVerbs[0]];
        title += `: ${verb ? verb.infinitive : 'Unbekannt'}`;
      } else {
        title += `: ${store.selectedVerbs.length} ausgewählte Verben`;
      }
      const tenses = store.selectedTenses.map(t => getTenseDisplayName(t)).join(', ');
      title += ` (${tenses})`;

      dailySummaryStore.addExerciseSummary({
        topic: 'Verben',
        title: title,
        timestamp: Date.now(),
        results: allSessionFeedback.value.map(res => ({
          question: res.questionText,
          userInput: res.userInput,
          correctAnswer: res.correctAnswer,
          isCorrect: res.isCorrect,
        }))
      });
    }
  };

  const generateMistakesPdfData = (): { head: string[][], body: string[][] } | null => {
      const mistakes = store.mistakes;
      if (mistakes.length === 0) return null;

      const head = [['Frage', 'Deine Antwort', 'Korrekte Antwort']];
      const body = mistakes.map(mistake => {
          const verb = allVerbData[mistake.verbKey];
          let question = '';
          let correctAnswer = '';

          if (mistake.sentence) {
              question = `Übersetze: "${mistake.sentence.de}"`;
              correctAnswer = Array.isArray(mistake.sentence.fr) ? mistake.sentence.fr.join(' / ') : mistake.sentence.fr;
          } else if (mistake.pronounIndex !== undefined) {
              const pronouns = getPronounsForTense(verb, mistake.tense);
              const conjugations = getConjugationsForQuiz(verb, mistake.tense);
              question = `${verb.infinitive} (${getTenseDisplayName(mistake.tense)}) - ${pronouns[mistake.pronounIndex]}`;
              correctAnswer = conjugations[mistake.pronounIndex];
          }

          return [question, mistake.userInput, correctAnswer];
      });

      return { head, body };
  };

  const repeatMistakes = () => createTrainingQueue(true);
  const repeatAll = () => createTrainingQueue(false);
  const backToConfig = () => router.push('/verb-trainer');
  const goToModeSelection = () => router.push('/verb-trainer/select-mode'); // NEUE FUNKTION
  const backToHome = () => router.push('/');

  onMounted(() => {
    if (store.selectedVerbs.length === 0 || store.selectedTenses.length === 0) {
        backToConfig();
        return;
    }
    createTrainingQueue();
  });

  return {
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
    repeatMistakes,
    repeatAll,
    backToConfig,
    goToModeSelection, // NEUER EXPORT
    backToHome,
    generateMistakesPdfData
  };
}
