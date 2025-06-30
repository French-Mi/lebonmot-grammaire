<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import { pronounData } from '@/data/pronouns';
import { useGrammarProgressStore } from '@/stores/grammarProgressStore';
// KORREKTUR: Importiert Typen aus der neuen Typ-Datei
import type { Level, Exercise } from '@/data/pronouns/types';

const route = useRoute();
const grammarStore = useGrammarProgressStore();
const topicId = computed(() => route.params.topicId as string);
const levelId = computed(() => route.params.levelId as string);

// KORREKTUR: Typ-Name angepasst
const levelData = computed<Level | undefined>(() => {
  for (const category of pronounData.categories) {
    const foundLevel = category.levels.find(level => level.uniqueId === levelId.value);
    if (foundLevel) return foundLevel;
  }
  return undefined;
});

const exercises = computed<Exercise[]>(() => {
  return levelData.value ? levelData.value.exercises : [];
});

const mistakesForLevel = computed(() => {
    return grammarStore.getMistakesForLevel(topicId.value, levelId.value);
});

const getExerciseIcon = (type: string) => {
    switch(type) {
        case 'fillInTheBlank': return '📝';
        case 'sentenceOrder': return '🔄';
        case 'matchPairs': return '🧩';
        case 'clickTheWord': return '👆';
        default: return '💪';
    }
}
</script>

<template>
  <div class="view-container">
    <RouterLink :to="`/topic/${topicId}`" class="back-link">&larr; Zurück zur Level-Übersicht</RouterLink>

    <div v-if="levelData">
      <h1 class="selection-title">Level {{ levelData.level }}: {{ levelData.title }}</h1>
      <h2 class="selection-subtitle">Wähle eine Übung</h2>

      <div class="exercise-cards-container">
        <RouterLink
          v-for="(exercise, index) in exercises"
          :key="index"
          :to="`/topic/${topicId}/exercise/${levelId}/${index}`"
          class="exercise-card card"
        >
          <div class="exercise-icon">{{ getExerciseIcon(exercise.type) }}</div>
          <h3 class="exercise-card-title">{{ exercise.shortTitle }}</h3>
          <p class="exercise-card-description">{{ exercise.instructions }}</p>
        </RouterLink>

        <RouterLink
          v-if="mistakesForLevel.length > 0"
          :to="`/topic/${topicId}/exercise/${levelId}/mistakes`"
          class="exercise-card card mistake-card"
        >
          <div class="exercise-icon">🎯</div>
          <h3 class="exercise-card-title">Fehler wiederholen</h3>
          <p class="exercise-card-description">Übe die {{ mistakesForLevel.length }} Fragen, die du zuletzt falsch hattest.</p>
        </RouterLink>
      </div>
       <div v-if="exercises.length === 0" class="card-placeholder">
          <p>Für dieses Level sind noch keine Übungen verfügbar.</p>
        </div>
    </div>
     <div v-else class="card-placeholder">
        <h2>Level nicht gefunden</h2>
    </div>
  </div>
</template>

<style scoped>
.view-container { max-width: 900px; margin: 0 auto; }
.back-link { display: inline-block; margin-bottom: 1.5rem; font-weight: 500; color: var(--muted-text); }
.selection-title { font-size: 2.5rem; color: var(--header-blue); margin-bottom: 0.5rem; }
.selection-subtitle { font-size: 1.5rem; font-weight: 500; color: var(--dark-text); margin-bottom: 2rem; }
.exercise-cards-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
.exercise-card { display: block; text-decoration: none; color: inherit; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.2s ease-in-out; }
.exercise-card:hover { transform: translateY(-5px); box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-color: var(--primary-blue); }
.exercise-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.exercise-card-title { font-size: 1.3rem; margin-bottom: 0.5rem; }
.exercise-card-description { font-size: 0.95rem; color: var(--muted-text); }
.card-placeholder { padding: 3rem; text-align: center; border-radius: 8px; background-color: #f8f9fa; }
.mistake-card { border-color: var(--error-color); background-color: #fff5f5; }
.mistake-card:hover { border-color: darkred; }
</style>
