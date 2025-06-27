<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { TopicLevel } from '../../data/pronouns'

defineProps<{
  levelData: TopicLevel,
  topicId: string
}>()
</script>

<template>
  <div class="level-card">
    <div class="level-info">
      <span class="level-number">Level {{ levelData.level }}</span>
      <h3 class="level-title">{{ levelData.title }}</h3>
      <p class="level-description">{{ levelData.description }}</p>
    </div>
    <div class="level-actions">
      <RouterLink :to="`/topic/${topicId}/exercise/${levelData.uniqueId}`" class="btn">
        Starten
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
}
.level-card:last-child {
  border-bottom: none;
}
.level-info {
  flex-grow: 1;
}
.level-number {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary-blue);
  text-transform: uppercase;
}
.level-title {
  font-size: 1.25rem;
  margin: 0.25rem 0 0.5rem 0;
}
.level-description {
  color: var(--muted-text);
  font-size: 0.95rem;
}
.btn {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  background-color: var(--primary-blue);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s;
  white-space: nowrap;
}
.btn:hover {
  background-color: #0b5ed7;
}
</style>
