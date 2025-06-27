<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVerbTrainerStore } from '@/stores/verbTrainerStore';

// --- KORRIGIERTER IMPORT ---
// Greift jetzt auf den neuen `index.ts`-Exportpunkt im `verbs`-Ordner zu.
import { allVerbData } from '@/data/verbs';
import type { Verb } from '@/types/verb-types';

const router = useRouter();
const store = useVerbTrainerStore();

const searchTerm = ref('');
const selectedVerbs = ref<string[]>(store.selectedVerbs);

const filteredVerbs = computed(() => {
  const allVerbsArray: Verb[] = Object.values(allVerbData);
  if (!searchTerm.value) {
    return allVerbsArray;
  }
  return allVerbsArray.filter(verb =>
    verb.infinitive.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const toggleVerb = (verbKey: string) => {
  const index = selectedVerbs.value.indexOf(verbKey);
  if (index === -1) {
    selectedVerbs.value.push(verbKey);
  } else {
    selectedVerbs.value.splice(index, 1);
  }
};

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

      <div class="search-bar-wrapper">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Verb suchen (z.B. être)"
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
/* Stile bleiben unverändert */
.back-link { display: inline-block; margin-bottom: 1rem; }
.selection-card { padding: 2rem; }
h2 { text-align: center; margin-bottom: 1.5rem; }
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
