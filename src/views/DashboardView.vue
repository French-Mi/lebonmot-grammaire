<script setup lang="ts">
import { ref } from 'vue';
import { useProgressStore } from '@/stores/progressStore';
import { achievements as allAchievements } from '@/data/achievements';
// Stellt sicher, dass die Komponenten im Ordner 'src/components/dashboard/' liegen
import ProgressChart from '@/components/dashboard/ProgressChart.vue';
import AchievementIcon from '@/components/dashboard/AchievementIcon.vue';

const progressStore = useProgressStore();
const timeFrame = ref('week');
</script>

<template>
  <div class="view-container">
    <h1 class="page-title">Dein Fortschritt</h1>

    <div class="card progress-card">
      <h2>Level {{ progressStore.level }}</h2>
      <div class="xp-bar-container">
        <div class="xp-bar-fill" :style="{ width: `${progressStore.progressToNextLevel}%` }"></div>
      </div>
      <p class="xp-text">{{ progressStore.xp }} / {{ progressStore.xpForNextLevel }} XP</p>
    </div>

    <div class="stats-grid">
      <div class="card streak-card">
        <h3>Lernsträhne</h3>
        <div class="streak-display">
          <i class="fas fa-fire streak-icon"></i>
          <span>Du hast <strong>{{ progressStore.streak }}</strong> Tage in Folge gelernt!</span>
        </div>
      </div>
      <div class="card achievements-card">
        <h3>Erfolge</h3>
        <div class="achievements-container">
          <AchievementIcon
            v-for="achievement in allAchievements"
            :key="achievement.id"
            :achievement="achievement"
            :class="{ 'unlocked': progressStore.unlockedAchievements.includes(achievement.id) }"
          />
        </div>
      </div>
    </div>

    <div class="card chart-card">
      <div class="chart-header">
        <h3>Lernaktivität</h3>
        <select v-model="timeFrame" class="timeframe-select">
          <option value="week">Woche</option>
          <option value="month">Monat</option>
          <option value="year">Jahr</option>
        </select>
      </div>
      <ProgressChart :chart-data="progressStore.activityLog" :time-frame="timeFrame" />
    </div>
  </div>
</template>

<style scoped>
.view-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
}
.page-title { font-size: 2.5rem; margin-bottom: 2rem; color: var(--header-blue); text-align: center; }
.card { background-color: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px A6px rgba(0,0,0,0.05); margin-bottom: 2rem; }

.progress-card h2 { margin-top: 0; text-align: center; }
.xp-bar-container { width: 100%; background-color: #e9ecef; border-radius: 8px; height: 16px; overflow: hidden; margin-top: 1rem; }
.xp-bar-fill { height: 100%; background-color: var(--primary-blue); transition: width 0.5s ease; border-radius: 8px; }
.xp-text { text-align: right; color: #6b7280; margin-top: 0.5rem; font-size: 0.9rem; font-weight: 500;}

.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.streak-card, .achievements-card { display: flex; flex-direction: column; }
.streak-card h3, .achievements-card h3, .chart-card h3 { margin-top: 0; margin-bottom: 1rem; }

.streak-display { display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-top: 1rem; flex-grow: 1; }
.streak-icon { color: #f97316; font-size: 2rem; margin-right: 1rem; }

.achievements-container { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; align-content: flex-start; }
/* Die :deep() Selektoren greifen in die Kind-Komponente 'AchievementIcon' ein */
.achievements-container > :deep(.achievement-container) { opacity: 0.3; filter: grayscale(80%); }
.achievements-container > :deep(.unlocked) { opacity: 1; filter: grayscale(0%); }

.chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.timeframe-select { padding: 0.3rem 0.5rem; border-radius: 6px; border: 1px solid #ced4da; background-color: #f8f9fa; }
</style>
