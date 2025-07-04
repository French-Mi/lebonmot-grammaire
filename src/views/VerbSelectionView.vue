<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVerbTrainerStore } from '@/stores/verbTrainerStore';
import { allVerbData } from '@/data/verbs';
import type { Verb } from '@/types/verb-types';

const router = useRouter();
const store = useVerbTrainerStore();

const searchTerm = ref('');
const selectedVerbs = ref<string[]>(store.selectedVerbs);
const activeFilter = ref('all');

const filteredVerbs = computed(() => {
  let verbs = Object.values(allVerbData);

  if (activeFilter.value !== 'all') {
    if (activeFilter.value === 'reflexive') {
      verbs = verbs.filter(v => v.isReflexive);
    } else {
      verbs = verbs.filter(v => !v.isReflexive && v.infinitive.endsWith(activeFilter.value));
    }
  }

  if (searchTerm.value) {
    const lowerCaseSearch = searchTerm.value.toLowerCase();
    verbs = verbs.filter(verb =>
      verb.infinitive.toLowerCase().includes(lowerCaseSearch) ||
      verb.translation.toLowerCase().includes(lowerCaseSearch)
    );
  }
  return verbs;
});

const setFilter = (filter: string) => {
  activeFilter.value = filter;
};

// KORREKTUR: Diese Funktion wählt Verben nur aus/ab. Kein "router.push" hier!
const toggleVerb = (verbKey: string) => {
  const index = selectedVerbs.value.indexOf(verbKey);
  if (index === -1) {
    selectedVerbs.value.push(verbKey);
  } else {
    selectedVerbs.value.splice(index, 1);
  }
};

// Diese Funktion führt zum nächsten Schritt.
const startTraining = () => {
  if (selectedVerbs.value.length === 0) {
    alert('Bitte wähle mindestens ein Verb aus.');
    return;
  }
  store.setVerbs(selectedVerbs.value);
  router.push('/verb-trainer/select-mode');
};
</script>

<template>
  <div class="view-container">
    <RouterLink to="/verb-trainer" class="back-link">&larr; Zurück zur Zeitenauswahl</RouterLink>
    <div class="selection-card card">
      <h2>Schritt 2: Verben auswählen</h2>

      <div class="filter-controls">
        <button @click="setFilter('all')" :class="{ active: activeFilter === 'all' }">Alle</button>
        <button @click="setFilter('er')" :class="{ active: activeFilter === 'er' }">-er Verben</button>
        <button @click="setFilter('ir')" :class="{ active: activeFilter === 'ir' }">-ir Verben</button>
        <button @click="setFilter('re')" :class="{ active: activeFilter === 're' }">-re Verben</button>
        <button @click="setFilter('reflexive')" :class="{ active: activeFilter === 'reflexive' }">Reflexive Verben</button>
      </div>

      <div class="search-bar-wrapper">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Verb oder Übersetzung suchen..."
          class="search-input"
        >
      </div>

      <div class="verb-grid">
        <button
          v-for="verb in filteredVerbs"
          :key="verb.infinitive"
          @click="toggleVerb(verb.infinitive)"
          class="verb-tile"
          :class="{ 'selected': selectedVerbs.includes(verb.infinitive) }"
        >
          <span class="verb-infinitive">{{ verb.infinitive }}</span>
          <span class="verb-translation">{{ verb.translation }}</span>
        </button>
      </div>
      <div v-if="filteredVerbs.length === 0" class="no-results">
        Keine Verben gefunden.
      </div>

      <div class="actions">
        <button @click="startTraining" class="btn btn-primary">Weiter zur Modus-Auswahl</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-link { display: inline-block; margin-bottom: 1rem; }
.selection-card { padding: 2rem; }
h2 { text-align: center; margin-bottom: 1.5rem; }
.filter-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.filter-controls button {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-color);
  background-color: var(--card-background);
  color: var(--dark-text);
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
.filter-controls button:hover {
  background-color: #e9ecef;
  border-color: #ced4da;
}
.filter-controls button.active {
  background-color: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}
.search-bar-wrapper { margin-bottom: 2rem; }
.search-input { width: 100%; padding: 0.75rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid var(--border-color); }
.verb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
.verb-tile { display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 1.5rem 0.5rem; border: 1px solid var(--border-color); background-color: white; border-radius: 8px; cursor: pointer; transition: all 0.2s; text-align: center; }
.verb-tile:hover { transform: translateY(-3px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-color: var(--primary-blue); }
.verb-tile.selected { background-color: var(--light-blue); border-color: var(--primary-blue); color: var(--primary-blue); font-weight: 700; }
.verb-infinitive { font-size: 1.2rem; font-weight: 500; }
.verb-translation { font-size: 0.9rem; color: var(--muted-text); margin-top: 0.25rem; }
.verb-tile.selected .verb-translation { color: var(--primary-blue); }
.no-results { text-align: center; padding: 2rem; color: var(--muted-text); }
.actions { text-align: center; margin-top: 2.5rem; }
.btn { font-size: 1.2rem; padding: 0.8rem 2rem; }
</style>
