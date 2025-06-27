<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useVerbTrainerStore, type TrainingMode } from '@/stores/verbTrainerStore';

const router = useRouter();
const store = useVerbTrainerStore();

const selectMode = (mode: TrainingMode) => {
    store.setMode(mode);
    // Leitet zur richtigen Seite, je nach Modus
    if (mode === 'overview') {
        router.push('/verb-trainer/table');
    } else {
        router.push('/verb-trainer/training');
    }
}
</script>

<template>
    <div class="view-container">
        <RouterLink to="/verb-trainer/select-verbs" class="back-link">&larr; Zurück zur Verbauswahl</RouterLink>
        <div class="mode-card card">
            <h2>Schritt 3: Trainingsmodus auswählen</h2>
            <p class="instructions">Wie möchtest du trainieren?</p>
            <div class="mode-buttons">
                <button @click="selectMode('overview')" class="btn btn-mode">
                    <h3>Übersicht</h3>
                    <p>Konjugationstabellen der ausgewählten Verben ansehen.</p>
                </button>

                <button @click="selectMode('standard')" class="btn btn-mode">
                    <h3>Standard</h3>
                    <p>Alle Formen eines Verbs auf einmal abfragen.</p>
                </button>

                <button @click="selectMode('shuffle')" class="btn btn-mode">
                    <h3>Shuffle</h3>
                    <p>Einzelne Verbformen zufällig durcheinander üben.</p>
                </button>

                <button @click="selectMode('drag-drop')" class="btn btn-mode">
                    <h3>Drag & Drop</h3>
                    <p>Konjugierte Formen den richtigen Personen zuordnen.</p>
                </button>

                <button @click="selectMode('translate')" class="btn btn-mode">
                    <h3>Übersetzen</h3>
                    <p>Einen Satz in der richtigen Zeitform übersetzen.</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Keine Änderungen an den Styles */
.back-link { display: inline-block; margin-bottom: 1rem; }
.mode-card { padding: 2rem; text-align: center; }
h2 { margin-bottom: 0.5rem; }
.instructions { margin-bottom: 2.5rem; color: var(--muted-text); }
.mode-buttons { display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px; margin: 0 auto; }
.btn-mode { padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 8px; background-color: white; text-align: left; cursor: pointer; transition: all 0.2s; }
.btn-mode:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-color: var(--primary-blue); }
.btn-mode:disabled { opacity: 0.5; cursor: not-allowed; background-color: #f8f9fa; }
.btn-mode h3 { font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 0.5rem; }
.btn-mode p { font-size: 1rem; color: var(--dark-text); }
</style>
