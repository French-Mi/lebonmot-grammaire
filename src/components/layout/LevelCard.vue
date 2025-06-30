<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useProgressStore } from '@/stores/progressStore';
import type { Level } from '../../data/pronouns/types'

defineProps<{
  levelData: Level,
  topicId: string
}>()

const progressStore = useProgressStore();
</script>

<template>
  <div class="level-card" :class="{ 'is-completed': progressStore.perfectlyCompletedLevels.includes(levelData.uniqueId) }">
    <div class="level-info">
      <div class="title-wrapper">
        <span class="level-number">Level {{ levelData.level }}</span>
        <h3 class="level-title">{{ levelData.title }}</h3>
        <span v-if="progressStore.perfectlyCompletedLevels.includes(levelData.uniqueId)" class="completed-check">✓</span>
      </div>
      <p class="level-description">{{ levelData.description }}</p>
    </div>
    <div class="level-actions">
      <RouterLink v-if="levelData.hasTheory" :to="`/topic/${topicId}/theory/${levelData.uniqueId}`" class="btn btn-theory">
        Theorie
      </RouterLink>
      <button v-else class="btn btn-theory" disabled>Theorie</button>

      <RouterLink :to="`/topic/${topicId}/level/${levelData.uniqueId}`" class="btn btn-exercise">
        Übungen
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.level-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s;
}
.level-card:last-child {
  border-bottom: none;
}
.level-info { flex-grow: 1; }
.level-number { font-size: 0.8rem; font-weight: 700; color: var(--primary-blue); text-transform: uppercase; }
.level-title { font-size: 1.25rem; margin: 0.25rem 0 0.5rem 0; }
.level-description { color: var(--muted-text); font-size: 0.95rem; }
.level-actions { display: flex; gap: 0.75rem; align-items: center; }
.btn { display: inline-block; padding: 0.6rem 1.5rem; border-radius: 5px; border: none; font-size: 1rem; font-weight: 500; cursor: pointer; text-align: center; transition: all 0.2s; white-space: nowrap; text-decoration: none; color: white; }
.btn:hover:not(:disabled) { transform: translateY(-2px); filter: brightness(1.1); }
.btn-exercise { background-color: var(--primary-blue); }
.btn-exercise:hover { background-color: #0b5ed7; }
.btn-theory { background-color: var(--success-color); }
.btn-theory:hover:not(:disabled) { background-color: #146c43; }
.btn:disabled { background-color: #a3d9b8; cursor: not-allowed; opacity: 0.7; }
.btn:disabled:hover { transform: none; filter: none; }

/* NEUE STILE für abgeschlossene Level */
.level-card.is-completed {
  border-left: 4px solid var(--success-color);
  padding-left: 1rem;
}
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.completed-check {
  color: var(--success-color);
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
