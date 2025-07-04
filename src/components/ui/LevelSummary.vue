<script setup lang="ts">
import CelebrationAnimation from '@/components/dashboard/CelebrationAnimation.vue';

defineProps<{
  title?: string,
  mistakeCount: number,
  showMistakeRepeat?: boolean,
  buttonTextRepeat?: string,
  showDownload?: boolean,
  showChangeMode?: boolean // NEUE PROP
}>()

const emit = defineEmits<{
  (e: 'repeat-all'): void,
  (e: 'repeat-mistakes'): void,
  (e: 'back-to-topic'): void,
  (e: 'back-to-home'): void,
  (e: 'download-pdf'): void,
  (e: 'change-mode'): void // NEUES EVENT
}>()
</script>

<template>
  <div class="level-summary-container card">
    <CelebrationAnimation />
    <h1 class="summary-title">{{ title || 'Level abgeschlossen!' }}</h1>

    <p v-if="mistakeCount === 1" class="summary-subtitle">
      Du hast 1 Fehler. Du kannst ihn jetzt gezielt wiederholen.
    </p>
    <p v-else-if="mistakeCount > 1" class="summary-subtitle">
      Du hast {{ mistakeCount }} Fehler. Du kannst sie jetzt gezielt wiederholen.
    </p>
    <p v-else class="summary-subtitle">
      Fantastisch! Du hattest keine Fehler.
    </p>

    <div class="summary-actions">
      <button v-if="mistakeCount > 0 && showMistakeRepeat !== false" @click="emit('repeat-mistakes')" class="btn btn-primary">
        Fehler wiederholen
      </button>
      <button @click="emit('repeat-all')" class="btn btn-secondary">
        {{ buttonTextRepeat || 'Level wiederholen' }}
      </button>

      <button v-if="showChangeMode" @click="emit('change-mode')" class="btn btn-secondary">
        Anderen Modus wählen
      </button>

      <button v-if="showDownload" @click="emit('download-pdf')" class="btn btn-info">
        Als PDF exportieren
      </button>
      <button @click="emit('back-to-topic')" class="btn btn-link">
        Zurück zur Level-Übersicht
      </button>
       <button @click="emit('back-to-home')" class="btn btn-link">
        Zurück zur Startseite
      </button>
    </div>
  </div>
</template>

<style scoped>
.level-summary-container {
  text-align: center;
  max-width: 600px;
  margin: 2rem auto;
  padding: 3rem;
}
.summary-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--header-blue);
  margin-top: 0;
}
.summary-subtitle {
  font-size: 1.2rem;
  color: var(--muted-text);
  margin-top: -1rem;
  margin-bottom: 2.5rem;
}
.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.btn {
  width: 100%;
  max-width: 300px;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  border: none; /* Vereinfacht, da die meisten Buttons keinen Rand haben */
  transition: background-color 0.2s, transform 0.2s;
}
.btn-primary {
    background-color: var(--primary-blue);
    color: white;
}
.btn-secondary {
    background-color: transparent;
    border: 2px solid var(--primary-blue);
    color: var(--primary-blue);
}
.btn-info {
    background-color: #dc3545;
    color: white;
}
.btn-link {
  background: none;
  border: none;
  color: var(--primary-blue);
  text-decoration: underline;
  margin-top: 0.5rem;
}
</style>
