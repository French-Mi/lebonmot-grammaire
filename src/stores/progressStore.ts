// src/stores/progressStore.ts
import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';

export interface ActivityLog {
  [dateKey: string]: number;
}

export const useProgressStore = defineStore('progress', () => {
  const xp = ref(0);
  const level = ref(1);
  const streak = ref(0);
  const lastSessionDate = ref<string | null>(null);
  const activityLog = ref<ActivityLog>({});
  const unlockedAchievements = ref<string[]>([]);
  const topicProgress = ref<{ [key: string]: { xp: number } }>({});

  const xpForNextLevel = computed(() => level.value * 100);
  const progressToNextLevel = computed(() => xpForNextLevel.value > 0 ? (xp.value / xpForNextLevel.value) * 100 : 0);

  const getLocalDateKey = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  function addXp(amount: number, topicId: string) {
    xp.value += amount;
    const todayKey = getLocalDateKey(new Date());
    activityLog.value[todayKey] = (activityLog.value[todayKey] || 0) + amount;

    if (!topicProgress.value[topicId]) {
      topicProgress.value[topicId] = { xp: 0 };
    }
    topicProgress.value[topicId].xp += amount;

    if (xp.value >= xpForNextLevel.value) {
      level.value++;
      xp.value = xp.value - xpForNextLevel.value;
    }
  }

  function logSession() {
    const today = new Date();
    const todayKey = getLocalDateKey(today);

    if (lastSessionDate.value === todayKey) return;

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayKey = getLocalDateKey(yesterday);

    if (lastSessionDate.value === yesterdayKey) {
      streak.value++;
    } else {
      streak.value = 1;
    }
    lastSessionDate.value = todayKey;
  }

  function unlockAchievement(id: string) {
    if (!unlockedAchievements.value.includes(id)) {
      unlockedAchievements.value.push(id);
    }
  }

  // KORREKTUR: Die Signatur der Funktion akzeptiert jetzt 'topicId'
  function checkAndUnlockAchievements(stats: { topicId: string, mistakes: number, isPerfect: boolean }) {
      achievements.forEach((achievement: Achievement) => {
        if (!unlockedAchievements.value.includes(achievement.id)) {
          if (achievement.condition(stats, { level: level.value, streak: streak.value, topics: topicProgress.value })) {
            unlockAchievement(achievement.id);
          }
        }
      });
  }

  function loadState() {
    const savedState = localStorage.getItem('leBonMotProgress');
    if (savedState) {
      const state = JSON.parse(savedState);
      xp.value = state.xp || 0;
      level.value = state.level || 1;
      streak.value = state.streak || 0;
      lastSessionDate.value = state.lastSessionDate || null;
      activityLog.value = state.activityLog || {};
      unlockedAchievements.value = state.unlockedAchievements || [];
      topicProgress.value = state.topicProgress || {};
    }
    logSession();
  }

  watch([xp, level, streak, lastSessionDate, activityLog, unlockedAchievements, topicProgress], (newStateValues) => {
    const state = {
      xp: newStateValues[0],
      level: newStateValues[1],
      streak: newStateValues[2],
      lastSessionDate: newStateValues[3],
      activityLog: newStateValues[4],
      unlockedAchievements: newStateValues[5],
      topicProgress: newStateValues[6]
    };
    localStorage.setItem('leBonMotProgress', JSON.stringify(state));
  }, { deep: true });

  loadState();

  return {
    xp, level, streak, activityLog, unlockedAchievements, topicProgress,
    xpForNextLevel, progressToNextLevel,
    addXp, logSession, checkAndUnlockAchievements
  };
});
