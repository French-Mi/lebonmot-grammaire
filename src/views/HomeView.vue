<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { topics } from '../data/topics';
import { useProgressStore } from '@/stores/progressStore';
import { achievements as allAchievements } from '@/data/achievements';
import AchievementIcon from '@/components/dashboard/AchievementIcon.vue';

const progressStore = useProgressStore();

const unlockedAchievements = computed(() => {
  return allAchievements.filter(ach => progressStore.unlockedAchievements.includes(ach.id));
});
</script>

<template>
  <div class="view-container">

    <div class="progress-summary-card card">
      <div class="progress-header">
        <h2 class="progress-title">Dein Fortschritt</h2>
        <RouterLink to="/dashboard" class="details-link">Alle Details &rarr;</RouterLink>
      </div>
      <div class="progress-content">
        <div class="level-display">
          <span class="level-tag">Level {{ progressStore.level }}</span>
          <div class="xp-bar-container">
            <div class="xp-bar-fill" :style="{ width: `${progressStore.progressToNextLevel}%` }"></div>
          </div>
          <span class="xp-text">{{ progressStore.xp }}/{{ progressStore.xpForNextLevel }} XP</span>
        </div>
        <div class="streak-display">
          <i class="fas fa-fire streak-icon"></i>
          <p><strong>{{ progressStore.streak }}</strong> Tage gelernt!</p>
        </div>
        <div class="achievements-display">
          <p v-if="unlockedAchievements.length === 0" class="no-achievements">Sammle Erfolge durchs Lernen!</p>
          <AchievementIcon
            v-for="achievement in unlockedAchievements"
            :key="achievement.id"
            :achievement="achievement"
            class="unlocked"
          />
        </div>
      </div>
    </div>

    <h1 class="page-title">Wähle ein Thema</h1>
    <div class="topics-container">
      <RouterLink
        v-for="topic in topics.filter(t => t.isAvailable)"
        :key="topic.id"
        :to="topic.id === 'verbs' ? '/verb-trainer' : `/topic/${topic.id}`"
        class="topic-card card"
      >
        <h2>{{ topic.title }}</h2>
        <p>{{ topic.description }}</p>
      </RouterLink>
      <div v-for="topic in topics.filter(t => !t.isAvailable)" :key="topic.id" class="topic-card card disabled">
        <h2>{{ topic.title }}</h2>
        <p>{{ topic.description }}</p>
        <span>(Bald verfügbar)</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--header-blue);
}
.topics-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.topic-card {
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 12px;
}
.topic-card:hover:not(.disabled) {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.08);
}
.topic-card h2 {
  margin-top: 0;
  color: var(--primary-blue);
}
.topic-card.disabled {
  background-color: #f8f9fa;
  color: #adb5bd;
  cursor: not-allowed;
}
.topic-card.disabled:hover {
  transform: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.topic-card.disabled h2 {
  color: #6c757d;
}

.progress-summary-card {
  margin-bottom: 3rem;
  padding: 1.5rem;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}
.progress-title {
  margin: 0;
  font-size: 1.5rem;
}
.details-link {
  font-weight: 500;
  color: var(--primary-blue);
  text-decoration: none;
  font-size: 0.9rem;
}
.progress-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
}
.level-display {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.level-tag {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-weight: 700;
}
.xp-bar-container {
  flex-grow: 1;
  background-color: #e9ecef;
  height: 10px;
  border-radius: 5px;
}
.xp-bar-fill {
  height: 100%;
  background-color: var(--xp-color);
  border-radius: 5px;
  transition: width 0.5s ease-out;
}
.xp-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
  white-space: nowrap;
}
.streak-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  background-color: var(--streak-bg);
  color: var(--streak-text);
  padding: 0.5rem;
  border-radius: 8px;
}
.streak-icon {
  color: var(--streak-icon);
  font-size: 1.5rem;
}
.streak-display p {
    margin: 0;
}
.achievements-display {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}
.no-achievements {
  font-style: italic;
  color: var(--muted-text);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .progress-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .achievements-display {
    justify-content: flex-start;
  }
}
</style>
