<!-- src/components/ui/VWord.vue -->
<script setup lang="ts">
import { computed } from 'vue';
// HIER IST DIE ÄNDERUNG: Import aus der neuen, zentralen Datei
import { vocabulary } from '../../data/vocabulary';

const props = defineProps<{
  word: string;
}>();

const translation = computed(() => {
  const cleanWord = props.word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
  return vocabulary[cleanWord];
});
</script>

<template>
  <span v-if="translation" :title="translation" class="tooltip-word">
    {{ word }}
  </span>
  <span v-else>
    {{ word }}
  </span>
</template>

<style scoped>
.tooltip-word {
  border-bottom: 1px dotted var(--muted-text);
  cursor: help;
}
</style>
