<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import { pronounData } from '../data/pronouns';
// KORREKTUR: Importiert Typ aus der neuen Typ-Datei
import type { PronounCategory } from '../data/pronouns/types';
import LevelCard from '../components/layout/LevelCard.vue';

const route = useRoute();
const topicId = computed(() => route.params.topicId as string);

const selectedCategoryId = ref<string | null>(null);

const currentTopicData = computed(() => {
  if (topicId.value === 'pronouns') {
    return pronounData;
  }
  return null;
});

const categories = computed((): PronounCategory[] => {
  return currentTopicData.value ? currentTopicData.value.categories : [];
});

const currentTopicTitle = computed(() => {
  return currentTopicData.value ? currentTopicData.value.title : "Thema";
});

const selectCategory = (categoryId: string) => {
    selectedCategoryId.value = selectedCategoryId.value === categoryId ? null : categoryId;
}

const selectedCategoryData = computed((): PronounCategory | undefined => {
    if (!selectedCategoryId.value) return undefined;
    return categories.value.find(c => c.id === selectedCategoryId.value);
})
</script>

<template>
  <div class="view-container">
    <RouterLink to="/" class="back-link">&larr; Zurück zur Übersicht</RouterLink>

    <div v-if="currentTopicData">
      <h1 class="topic-title">{{ currentTopicTitle }}</h1>

      <div class="category-selector">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="['btn-category', { active: selectedCategoryId === category.id }]"
          >
            {{ category.title.replace(/A\)|B\)/, '').trim() }} </button>
      </div>

      <div v-if="selectedCategoryData" class="levels-container-wrapper">
        <div class="levels-container card">
            <div v-if="selectedCategoryData.levels.length > 0">
                <LevelCard
                v-for="level in selectedCategoryData.levels"
                :key="level.level"
                :level-data="level"
                :topic-id="currentTopicData.id"
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
.view-container {
    max-width: 900px;
    margin: 0 auto;
}
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
.category-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}
.btn-category {
    flex-grow: 1;
    padding: 1.25rem;
    font-size: 1.3rem;
    font-weight: 500;
    border: 2px solid var(--border-color);
    background-color: var(--card-background);
    color: var(--dark-text);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.btn-category:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
}
.btn-category.active {
    background-color: var(--primary-blue);
    color: white;
    border-color: var(--primary-blue);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.levels-container-wrapper {
    margin-top: 1rem;
}
.levels-container {
  padding: 1rem 2rem;
}
</style>
