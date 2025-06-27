<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVerbTrainerStore } from '@/stores/verbTrainerStore';
import { tensesStructure } from '@/types/verb-types';
import { getTenseDisplayName } from '@/lib/verb-helper';

const router = useRouter();
const store = useVerbTrainerStore();
const selected = ref<string[]>(store.selectedTenses);

const goToVerbSelection = () => {
  if (selected.value.length === 0) {
    alert('Bitte wähle mindestens eine Zeitform aus.');
    return;
  }
  store.setTenses(selected.value);
  router.push('/verb-trainer/select-verbs');
};

const otherModes: Array<'Subjonctif' | 'Impératif'> = ['Subjonctif', 'Impératif'];
</script>

<template>
  <div class="view-container">
    <RouterLink to="/" class="back-link">&larr; Zurück zur Hauptübersicht</RouterLink>
    <div class="config-card card">
      <h2>Schritt 1: Zeiten auswählen</h2>
      <p class="instructions">Wähle die Zeiten aus, die du üben möchtest.</p>
      <div class="tense-selection">
        <div class="mood-group">
            <h3>Indicatif</h3>
            <div class="indicatif-grid">
                <div class="tense-column">
                    <h4>Présent</h4>
                    <div v-for="tenseKey in tensesStructure.Indicatif.Présent" :key="tenseKey" class="tense-item">
                        <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                        <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                    </div>
                </div>
                <div class="tense-column">
                    <h4>Passé</h4>
                    <div v-for="tenseKey in tensesStructure.Indicatif.Passé" :key="tenseKey" class="tense-item">
                        <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                        <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                    </div>
                </div>
                <div class="tense-column">
                    <h4>Futur</h4>
                    <div v-for="tenseKey in tensesStructure.Indicatif.Futur" :key="tenseKey" class="tense-item">
                        <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                        <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mood-group">
            <h3>Conditionnel</h3>
            <div class="conditionnel-grid">
                 <div class="tense-column">
                    <h4>Présent</h4>
                    <div v-for="tenseKey in tensesStructure.Conditionnel.Présent" :key="tenseKey" class="tense-item">
                        <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                        <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                    </div>
                </div>
                 <div class="tense-column">
                    <h4>Passé</h4>
                    <div v-for="tenseKey in tensesStructure.Conditionnel.Passé" :key="tenseKey" class="tense-item">
                        <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                        <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="modeKey in otherModes" :key="modeKey" class="mood-group">
            <h3>{{ modeKey }}</h3>
            <div v-for="(tenses, groupName) in tensesStructure[modeKey]" :key="groupName" class="tense-group">
                <div v-for="tenseKey in tenses" :key="tenseKey" class="tense-item">
                     <input type="checkbox" :id="tenseKey" :value="tenseKey" v-model="selected">
                    <label :for="tenseKey">{{ getTenseDisplayName(tenseKey) }}</label>
                </div>
            </div>
        </div>
      </div>
      <div class="actions">
        <button @click="goToVerbSelection" class="btn btn-primary">Weiter zur Verbauswahl</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Stile bleiben unverändert */
.back-link { display: inline-block; margin-bottom: 1rem; }
.config-card { padding: 2rem; }
h2 { text-align: center; margin-bottom: 0.5rem; }
.instructions { text-align: center; margin-bottom: 2rem; color: var(--muted-text); }
.mood-group { margin-bottom: 2rem; }
.mood-group h3 { margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); }
.tense-item { display: flex; align-items: center; margin-bottom: 0.75rem; }
.tense-item input { margin-right: 0.75rem; width: 18px; height: 18px; }
.tense-item label { font-size: 1.1rem; }
.indicatif-grid, .conditionnel-grid { display: grid; gap: 2rem; }
.indicatif-grid { grid-template-columns: repeat(3, 1fr); }
.conditionnel-grid { grid-template-columns: repeat(2, 1fr); }
.tense-column h4 { font-size: 1rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.75rem; }
.actions { text-align: center; margin-top: 2rem; }
.btn { font-size: 1.2rem; padding: 0.8rem 2rem; }
</style>
