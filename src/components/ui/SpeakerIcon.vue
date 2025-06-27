<script setup lang="ts">
import { speakFrench } from '@/services/speechService';

const props = defineProps<{
  textToSpeak: string;
}>();

const handleSpeak = (event: MouseEvent) => {
  speakFrench(props.textToSpeak, event);
}
</script>

<template>
  <button @click="handleSpeak" class="speaker-button" title="Vorlesen">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
  </button>
</template>

<style scoped>
.speaker-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.speaker-button svg {
  width: 18px;
  height: 18px;
  color: var(--muted-text);
  transition: color 0.2s;
}
.speaker-button:hover svg {
  color: var(--primary-blue);
}
.speaker-button:hover {
  background-color: rgba(0,0,0,0.05);
}
</style>
