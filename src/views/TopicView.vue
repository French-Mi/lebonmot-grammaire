<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';

// Daten-Importe
import { topics } from '../data/topics';
import { pronounData } from '../data/pronouns';

// Komponenten-Import
import LevelCard from '../components/layout/LevelCard.vue';

const route = useRoute();
// KORREKTUR: Der Parameter in der URL heißt 'topicId', nicht 'id'.
const topicId = computed(() => route.params.topicId as string);

const currentTopic = computed(() => {
  return topics.find(topic => topic.id === topicId.value);
});

// Wir laden die Kategorien für das jeweilige Thema.
// Im Moment nur für Pronomen, später erweiterbar.
const categories = computed(() => {
  if (topicId.value === 'pronouns') {
    return pronounData.categories;
  }
  return [];
});
</script>

<template>
  <div class="view-container">
    <RouterLink to="/" class="back-link">&larr; Zurück zur Übersicht</RouterLink>

    <div v-if="currentTopic">
      <h1 class="topic-title">{{ currentTopic.title }}</h1>

      <div v-for="category in categories" :key="category.id" class="category-block">
        <h2 class="category-title">{{ category.title }}</h2>
        <div class="levels-container card">
          <div v-if="category.levels.length > 0">
            <LevelCard
              v-for="level in category.levels"
              :key="level.level"
              :level-data="level"
              :topic-id="currentTopic.id"
            />
          </div>
          <div v-else>
            <p>Die Level für diese Kategorie werden bald hinzugefügt.</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h2>Thema nicht gefunden</h2>
    </div>
  </div>
</template>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: var(--muted-text);
}
.back-link:hover {
  color: var(--dark-text);
}
.topic-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--header-blue);
}

/* NEUE STILE FÜR DIE KATEGORIEN */
.category-block {
  margin-bottom: 3rem;
}
.category-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--light-blue);
}
.levels-container {
  padding: 1rem 2rem;
}
</style>
